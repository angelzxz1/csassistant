import {
  Grid,
  GridItem,
  Flex,
  Box,
  Stack,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
const SearchBar = ({ gridArea, srch, data }) => {
  return (
    <Grid
      gridArea={gridArea}
      m={1}
      templateColumns="5fr 1fr"
      templateRows="1fr"
      gap={2}
      templateAreas={`"impField searchButton"`}
    >
      <Input
        type="text"
        gridArea="impField"
        value={srch.searchTerm}
        onChange={(e) => {
          srch.setSearchTerm(e.target.value);
        }}
      />
      <Button
        gridArea="searchButton"
        onClick={async () => {
          try {
            const response = await axios.post("/api", {
              name: srch.searchTerm,
            });
          } catch (err) {
            alert(err.response.data.message);
          }

          //   console.log(response);
          //   data.setData(response.data);
        }}
      >
        Search
      </Button>
    </Grid>
  );
};

const CustomTemplates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState();

  const columnas = {
    colSpan: 1,
    rowSpan: 1,
    border: "1px solid",
    p: 3,
    m: 1,
    borderRadius: "10px",
  };
  return (
    <Grid
      templateColumns="1fr 1fr"
      templateRows="1fr 3fr"
      templateAreas={`"searchbar searchbar"
      "left right"`}
    >
      <SearchBar
        gridArea="searchbar"
        srch={{ searchTerm, setSearchTerm }}
        data={{ data, setData }}
      />
      <GridItem gridArea="left" {...columnas}>
        left
      </GridItem>
      <GridItem gridArea="right" {...columnas}>
        right
      </GridItem>
    </Grid>
  );
};
CustomTemplates.tittle = "Custom Templates";

export default CustomTemplates;
