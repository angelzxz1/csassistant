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

const SearchBar = ({ gridArea, srch }) => {
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
      <Button gridArea="searchButton" onClick={() => {}}>
        Search
      </Button>
    </Grid>
  );
};

const CustomTemplates = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
      templateRows="10% 1fr"
      templateAreas={`"searchbar searchbar"
      "left right"`}
    >
      <SearchBar gridArea="searchbar" srch={{ searchTerm, setSearchTerm }} />
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
