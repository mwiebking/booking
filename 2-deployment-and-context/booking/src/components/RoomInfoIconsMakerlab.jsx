import React from 'react';
import { Group, Text } from '@mantine/core';
import { PersonIcon, DesktopIcon, Pencil2Icon } from '@radix-ui/react-icons';

const RoomInfoIconsMakerlab = () => {
  return (
    <div
      style={{
        padding: '1rem', // Padding around the box
        borderRadius: '8px', // Rounded corners
        backgroundColor: '#f8f9fa', // Light background color
        marginBottom: '1rem', // Space below the box
        border: '1px solid #dee2e6', // Light gray border
        display: 'flex', // Flexbox for alignment
        alignItems: 'center', // Center items vertically
      }}
    >
      <Group gap="xl" align="center">
        {/* Number of people */}
        {/* <Group gap="xs" align="center">
          <PersonIcon size={20} />
          <Text>60+ pers.</Text>
        </Group> */}

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
    </div>
  );
};

export default RoomInfoIconsMakerlab;
