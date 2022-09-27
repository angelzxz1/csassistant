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
import GenModal from "../components/modal";
import Loading from "../components/loading";
import axios from "axios";
const SearchBar = ({ gridArea, srch, data, setIsLoading }) => {
  return (
    <Grid
      gridArea={gridArea}
      m={1}
      templateColumns="4fr 1fr 1fr"
      templateRows="1fr"
      gap={2}
      templateAreas={`"impField searchButton addButton"`}
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
          setIsLoading(true);
          if (srch.searchTerm !== "") {
            try {
              const response = await axios.post("/api", {
                action: "search",
                name: srch.searchTerm,
              });
            } catch (err) {
              alert(err.response.data.message);
            }
          }
          srch.setSearchTerm("");
          setIsLoading(false);
          //   data.setData(response.data);
        }}
      >
        Search
      </Button>
      <GenModal
        Tittle="Add agent"
        gridArea="addButton"
        Action="Add"
        onClick={async (value) => {
          if (srch.searchTerm !== "") {
            try {
              const response = await axios.post("/api", {
                action: "add",
                name: srch.searchTerm,
              });
            } catch (err) {
              alert(err.response.data.message);
            }
          }

          //   data.setData(response.data);
        }}
      />
    </Grid>
  );
};

const CustomTemplates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    searched: undefined,
    updated: undefined,
    added: undefined,
  });

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
      templateRows="1fr 1fr"
      templateAreas={`"searchbar searchbar"
      "left right"`}
    >
      <SearchBar
        gridArea="searchbar"
        srch={{ searchTerm, setSearchTerm }}
        data={{ data, setData }}
        setIsLoading={setIsLoading}
      />
      {data.searched ? (
        <>
          <GridItem gridArea="left" {...columnas}>
            <Stack>
              {data.searched.list.map((item) => (
                <></>
              ))}
            </Stack>
          </GridItem>
          <GridItem gridArea="right" {...columnas}>
            right
          </GridItem>
        </>
      ) : isLoading ? (
        <Loading />
      ) : (
        <></>
      )}
    </Grid>
  );
};
CustomTemplates.tittle = "Custom Templates";

export default CustomTemplates;
