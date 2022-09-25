const fs = require("fs");

const update = () => {};

const create = (nombre, templates, res) => {
  try {
    fs.writeFileSync(
      `./agents/${nombre}.json`,
      JSON.stringify({
        name: nombre,
        templates: templates,
      })
    );
    res.status(404).send("added");
  } catch (error) {
    res.status(404).send("Something went wrong");
  }
};

const search = (nombre, res) => {
  if (searchName(nombre)) {
    try {
      let rawdata = fs.readFileSync(`./agents/${nombre}.json`);
      let student = JSON.parse(rawdata);
      res.status(200).json(student);
    } catch (error) {
      res.status(404).json({
        errorCode: 0,
        message:
          "Agent is on the list but no json file for this agent was found",
      });
    }
  } else {
    res.status(404).json({
      errorCode: 1,
      message: "Agent is not on the list",
    });
  }
};

export default function handler(req, res) {
  if (req.body.action === "add") {
    create(req.body.name, req.body.templates, res);
  }
  if (req.body.action === "search") {
    search(req.body.name, res);
  }
  if (req.body.action === "update") {
    update(req.body.name, req.body.templates, res);
  }
}

const searchName = (name) => {
  // agents
  try {
    let list = JSON.parse(fs.readFileSync(`./agents/namelist.json`)).agents;
    if (list.find((item) => item === name)) {
      return true;
    }
    return false;
  } catch (error) {
    console.log("Something went wrong while looking for agent name");
    return;
  }
};
