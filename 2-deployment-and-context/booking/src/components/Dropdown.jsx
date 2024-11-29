import { Button, Group, Collapse, Box, Image, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function Dropdown(props) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={1000} mx="auto" style={{ border: "1px solid black", borderRadius: "10px" }}>
      <Group justify="space-between" mb={5}>
        <Text style={{ marginLeft: "10px" }}>{props.number}. sal</Text>
        <Button onClick={toggle} style={{ backgroundColor: "white", borderRadius: "10px", width: "93%", display: "flex", justifyContent: "end" }}>
          <img style={{ width: "20px", height: "20px" }} src={"public/down-arrow.png"}></img>
        </Button>
      </Group>

      <Collapse in={opened}>
        <Image radius={"md"} src={props.image}></Image>
      </Collapse>
    </Box>
  );
}

export default Dropdown;
