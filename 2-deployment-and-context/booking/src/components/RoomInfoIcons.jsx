import React from 'react';
import { Group, Text } from '@mantine/core';
import { IconUser, IconDeviceDesktop, IconChalkboard } from '@tabler/icons-react';

const RoomIfnoIcons = () => {
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
        <Group gap="xs" align="center"> {/* Smaller gap between icon and text */}
          <IconUser size={20} />
          <Text>2-8 pers.</Text>
        </Group>

        {/* Screen */}
        <Group gap="xs" align="center"> {/* Smaller gap between icon and text */}
          <IconDeviceDesktop size={20} />
          <Text>Skærm</Text>
        </Group>

        {/* Chalkboard */}
        <Group gap="xs" align="center"> {/* Smaller gap between icon and text */}
          <IconChalkboard size={20} />
          <Text>Tavle</Text>
        </Group>
      </Group>
    </div>
  );
};

export default RoomIfnoIcons;
