import { Button, Group, Collapse, Box, Image, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function Dropdown(props) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box
      style={{
        border: "1px solid #dee2e6",
        borderRadius: "10px",
        width: "100%", // Make the dropdown fill the width of its container
        maxWidth: "none", // Remove the max-width
      }}
    >
      <Group justify="space-between" mb={5}>
        <Text style={{ marginLeft: "10px" }}>{props.number}. sal</Text>
        <Button
          onClick={toggle}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            width: "93%", // Keep button width adjusted
            display: "flex",
            justifyContent: "end",
          }}
        >
          <img style={{ width: "20px", height: "20px" }} src={"public/down-arrow.png"} alt="Toggle Dropdown" />
        </Button>
      </Group>

      <Collapse in={opened}>
        <Image radius={"md"} src={props.image}></Image>
      </Collapse>
    </Box>
  );
}

export default Dropdown;
