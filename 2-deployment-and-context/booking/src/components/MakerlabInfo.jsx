import React from 'react';
import { Title, Text, Stack } from '@mantine/core';
import RoomInfoIcons from './RoomInfoIcons';

const MakerlabInfo = () => {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '1rem', backgroundColor: 'white', borderRadius: '8px' }}>
      {/* Title Section */}
      <Title order={2} style={{ marginBottom: '1rem' }}>
        Makerlab 1.3
      </Title>
      
      {/* Icons Section */}
      <div style={{ marginBottom: '1rem' }}>
        <RoomInfoIcons />
      </div>
      
      {/* Text Section */}
      <Stack spacing="md">
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </Text>
      </Stack>
    </div>
  );
};

export default MakerlabInfo;
