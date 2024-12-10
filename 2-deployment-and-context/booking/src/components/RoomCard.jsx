// src/components/RoomCard.jsx

import React, { useState } from "react";
import { Divider, Group, Text, Card, Button, Space, Modal, TextInput } from "@mantine/core";
import { PersonIcon, DesktopIcon, Pencil2Icon, ClockIcon, CalendarIcon } from "@radix-ui/react-icons";
import BookComplete from "./BookComplete";

function RoomCard({ roomName, capacity, features, timeSlot, date, context }) {
  const [modalOpened, setModalOpened] = useState(false);
  const [isBookCompleteModalOpened, setBookCompleteModalOpened] = useState(false);

  //   const tosend = {
  //   room_name: roomName,
  //   capacity: capacity,
  //   features: features,
  //   time_slot: timeSlot,
  //   date: date,
  //   email: context.userInfo.email,
  //   firstName: context.userInfo.first_name,
  //   lastName: context.userInfo.last_name,
  //   phoneNumber: context.userInfo.phone_number
  // };
  
  const handleBookNowClick = () => {
    // Close the main modal and open the BookComplete modal
    
    setBookCompleteModalOpened(true);
  };

  const handleBookCompleteClose = () => {
    // Close the BookComplete modal
    setModalOpened(false);
    setBookCompleteModalOpened(false);
  };



  return (
    <>
      <Card  shadow="sm" padding="lg" radius="lg" withBorder>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Group justify="left" mb="xs">
            <Text fw={600}>{roomName}</Text>
          </Group>
          <Group justify="right" mb="xs">
            <ClockIcon size={20} color={"orange"} />
            <Text size="sm">{timeSlot}</Text>
            <CalendarIcon size={20} color={"orange"} />
            <Text size="sm">{date}</Text>
          </Group>
        </div>

        <Space h="xl" />

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.5rem" }}>
        <Group gap="xl" align="start">
          <Group gap="xs" align="center">
            <PersonIcon size={20} />
            <Text>{capacity}</Text>
          </Group>
          {features?.map((feature, index) => (
            <Group gap="xs" align="center" key={index}>
              {feature === "Skærm" && <DesktopIcon size={20} />}
              {feature === "Projektor" && <DesktopIcon size={20} />}
              {feature === "Tavle" && <Pencil2Icon size={20} />}
              <Text>{feature}</Text>
            </Group>
          ))}
        </Group>
          <Button color="cyan" radius="xl" onClick={() => setModalOpened(true)}>
            Book
          </Button>
        </div>
      </Card>

      <Modal
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
                size="lg" // Adjust size of modal
                radius={"lg"}
                centered // This centers the modal
                padding={"xl"}
                withCloseButton={false} // Disable default close button in header
            >
                <div style={{ display: 'flex', gap: '20px' }}>
                    {/* Close Button in Top Right */}
                    <Button
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            padding: 0,
                            minWidth: 'unset',
                            height: 'unset',
                        }}
                        variant="subtle"
                        color="gray"
                        onClick={() => setModalOpened(false)}
                    >
                        X
                    </Button>

                    {/* Row: Lokale name */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <Text fw={600}>{roomName}</Text>

                        {/* Row: Time and Date */}
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', gap: '16px' }}>
                          
                          {/* Time Slot with Clock Icon */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <ClockIcon size={20} color="orange" />
                            <Text>{timeSlot}</Text>
                          </div>
                          
                          {/* Date with Calendar Icon */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <CalendarIcon size={20} color="orange" />
                            <Text>{date}</Text>
                          </div>
                        </div>

                        <Space h="md" />
                        {/* Horizontal Divider */}
                        <Divider orientation="horizontal" style={{ height: '15px' }} />

                        <Group gap="lg" align="start">
                          <Group gap="xs" align="center">
                            <PersonIcon size={20} />
                            <Text>{capacity}</Text>
                          </Group>
                          {features?.map((feature, index) => (
                            <Group gap="xs" align="center" key={index}>
                              {feature === "Skærm" && <DesktopIcon size={20} />}
                              {feature === "Projektor" && <DesktopIcon size={20} />}
                              {feature === "Tavle" && <Pencil2Icon size={20} />}
                              <Text>{feature}</Text>
                            </Group>
                          ))}
                        </Group>
                        
                    </div>

                    {/* Right side: Input Fields */}
                    <div style={{ flex: 1 }}>
                        <TextInput placeholder="Navn" mb="md" radius="xl" value={context.userInfo.firstName + " " + context.userInfo.lastName} disabled />
                        <TextInput placeholder="Email" mb="md" radius="xl" value={context.userInfo.email} disabled />
                        <TextInput placeholder="Tlf" mb="md" radius="xl" value={context.userInfo.phone_number} disabled />
                        <Button
                          fullWidth
                          color="cyan"
                          mt="lg"
                          radius="xl"
                          onClick={handleBookNowClick} // Call the handler
                        >
                            BOOK NU
                        </Button>
                    </div>
              </div>
              
        {/* BookComplete Modal - Nested inside the main modal */}
        <BookComplete
        opened={isBookCompleteModalOpened}
        onClose={handleBookCompleteClose} // Explicitly handle closing the BookComplete modal
      />
        
            </Modal>

    </>
  );
}

export default RoomCard;
