import { Text, Button, Modal } from "@mantine/core";

function BookComplete({ opened, onClose }) {
  return (
    <Modal
      opened={opened}
      onClose={onClose} // Triggered when the user clicks the close button
      size="lg"
      radius="lg"
      centered
      padding="xl"
      withCloseButton={false} // Disable default close button in header
    >
      <div style={{ position: "relative" }}>
        {/* Close Button in Top Right */}
        <Button
          style={{
            position: "absolute",
            top: "-20px",
            right: "-20px",
            padding: 0,
            minWidth: "unset",
            height: "unset",
          }}
          variant="subtle"
          color="gray"
          onClick={onClose} // Explicit user interaction to close the modal
        >
          X
        </Button>

        {/* Content */}
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          
          {/* Imported checkmark jpg */}
          <img 
            src="./checkmark.jpg" 
            width={40}
          />
          
          <Text fw={600} size="lg" mb="md">
            Booking Bekræftet
          </Text>

          <Button
            mt="lg"
            color="cyan"
            radius="xl"
            onClick={onClose} // Provide an additional close option
          >
            LUK
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default BookComplete;
  