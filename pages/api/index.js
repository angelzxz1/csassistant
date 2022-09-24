const fs = require("fs");

export default function handler(req, res) {
  if (req.body.action === "create") {
    let nombre = req.body.name;
    try {
      fs.writeFileSync(
        `./agents/${nombre}.json`,
        JSON.stringify({
          name: nombre,
          templates: {},
        })
      );
      res.status(200).send("added");
    } catch (error) {
      res.status(404).send("Something went wrong");
    }
    return;
  } else {
    let nombre = req.body.name;
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
        message:
          "Agent is on the list",
      });
    }
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
