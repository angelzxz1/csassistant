import {
  Box,
  Stack,
  Grid,
  GridItem,
  Input,
  Textarea,
  Code,
} from "@chakra-ui/react";

const NewOne = (props) => {
  return (
    <Stack p={5}>
      <Box pl={2}>Template name</Box>
      <Input />
      <Box pl={2}>Template content</Box>
      <Input />
      <Code>
        <Box>
          Template name: <br />
          The text in the button, name it as short and as possible but logical.
        </Box>
        <br />
        <Box>
          Template content: <br />
          The whole template, this is what you'll be sending to the plyer.
        </Box>
      </Code>
    </Stack>
  );
};

const FullList = (props) => {
  return (
    <Stack p={5}>
      <Box pl={2}>All templates</Box>
      <Textarea />
    </Stack>
  );
};

const CustomTemplates = (props) => {
  return (
    <Grid
      templateColumns="50% 50%"
      templateRows="1fr"
      templateAreas={`"newOne fullList "`}
    >
      <GridItem gridArea="newOne">
        <NewOne />
      </GridItem>
      <GridItem gridArea="fullList">
        <FullList />
      </GridItem>
    </Grid>
  );
};

CustomTemplates.tittle = "Custom Templates";
export default CustomTemplates;

