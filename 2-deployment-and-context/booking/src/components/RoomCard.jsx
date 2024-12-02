import React, { useState } from 'react';
import { Divider, Group, Text, Card, Button, Space, Modal, TextInput } from '@mantine/core';
import { PersonIcon, DesktopIcon, Pencil2Icon, ClockIcon, CalendarIcon } from '@radix-ui/react-icons';

function RoomCard() {
    const [modalOpened, setModalOpened] = useState(false);

return (
    <>
    <Card shadow="sm" padding="lg" radius="lg" withBorder
    style={{ maxWidth: '600px', margin: '0 auto' }}>
    
        {/* top row left-side with Lokale name */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Group justify="left" mb="xs">
                <Text fw={600}>Lokale 3.11</Text>
            </Group>
        {/* top row right-side with time & date + icons */}
            <Group justify="right" mb="xs">
                <ClockIcon size={20} color={"orange"} />
                <Text size='sm'>10:00-11:00</Text>
                <CalendarIcon size={20} color={"orange"} />
                <Text size='sm'>13 November 2024</Text>
            </Group>
        </div>

            <Space h="xl" />

            {/* bottom row with icons and book button */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Group gap="xl" align="center">
            {/* Number of people */}
            <Group gap="xs" align="center"> {/* Smaller gap between icon and text */}
                <PersonIcon size={20} />
                <Text>2-8 pers.</Text>
            </Group>

            {/* Screen */}
            <Group gap="xs" align="center"> {/* Smaller gap between icon and text */}
                <DesktopIcon size={20} />
                <Text>Skærm</Text>
            </Group>

            {/* Chalkboard */}
            <Group gap="xs" align="center"> {/* Smaller gap between icon and text */}
                <Pencil2Icon size={20} />
                <Text>Tavle</Text>
            </Group>
        </Group>
        <Button color="cyan" mt="md" radius="xl" onClick={() => setModalOpened(true)} /* Open modal on click */>
            Book Her
        </Button>
        </div>
    </Card>

    {/* Modal */}
    <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size="lg" // Adjust size of modal
        radius={"lg"}
        styles={{
            close: {
              position: 'absolute',
              top: '5px', // Adjust as needed
              right: '5px', // Adjust as needed
              zIndex: 10,
            },
        }}
    >
        <div style={{ display: 'flex', gap: '20px' }}>

          {/* Row: Lokale name */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Text fw={600}>Lokale 3.11</Text>

            {/* Row: Time and Date */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <ClockIcon size={20} color={"orange"} />
                <Text size="sm">10:00-11:00</Text>
                <CalendarIcon size={20} color={"orange"} />
                <Text size="sm">13 November 2024</Text>
            </div>

            <Space h="md" />
                {/* Horizontal Divider */}
            <Divider orientation="horizontal" style={{ height: '15px' }} />

            {/* Row: Additional Details */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <PersonIcon size={20} />
                <Text size="sm">2-8 pers.</Text>
                <DesktopIcon size={20} />
                <Text size="sm">Skærm</Text>
                <Pencil2Icon size={20} />
                <Text size="sm">Tavle</Text>
            </div>
            </div>

          {/* Right side: Input Fields */}
            <div style={{ flex: 1 }}>
            <TextInput placeholder="Navn" mb="md" radius="xl" />
            <TextInput placeholder="Ansvarlig for booking" mb="md" radius="xl" />
            <TextInput placeholder="Email" mb="md" radius="xl" />
            <TextInput placeholder="Tlf" mb="md" radius="xl" />
            <Button
                fullWidth
                color="cyan"
                mt="lg"
                radius="xl"
                style={{ float: 'right' }}
              onClick={() => alert('Du Har Booket!')} // Example submission handler
            >
                BOOK NU
            </Button>
            </div>
        </div>

    </Modal>
    </>

);
}

export default RoomCard;
