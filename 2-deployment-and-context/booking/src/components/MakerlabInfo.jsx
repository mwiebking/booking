import React from 'react';
import { Title, Text, Stack, List } from '@mantine/core';
import RoomInfoIconsMakerlab from './RoomInfoIconsMakerlab';

const MakerlabInfo = () => {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '1rem', backgroundColor: 'white', borderRadius: '8px' }}>
      {/* Title Section */}
      <Title order={2} style={{ marginBottom: '1rem' }}>
        Makerlab 1.3
      </Title>
      
      {/* Icons Section */}
      <div style={{ marginBottom: '1rem' }}>
        <RoomInfoIconsMakerlab />
      </div>
      
      {/* Text Section */}
      <Stack spacing="md">
        <Text>
        Makerlab på CPH Business er et kreativt værksted og innovativt læringsmiljø, hvor studerende får mulighed for at udforske deres teknologiske og kreative kompetencer. Her kan du arbejde med moderne teknologier som 3D-print, laserskæring, vinylskæring og meget mere. Makerlab er designet til at inspirere og støtte studerende i deres projekter, hvor de kan omsætte idéer til fysiske prototyper og produkter.
        </Text>
        <List>
        <List.Item style={{ paddingLeft: '2rem' }}>3D-print: Design og print alt fra prototyper til detaljerede figurer. </List.Item>
        <List.Item style={{ paddingLeft: '2rem' }}>Laserskæring: Skær og gravér i materialer som træ og akryl. </List.Item>
        <List.Item style={{ paddingLeft: '2rem' }}>Vinylskæring: Lav klistermærker og tekstiltryk til dine projekter. </List.Item>  
        <List.Item style={{ paddingLeft: '2rem' }}>Elektronik: Eksperimentér med Arduino, sensorer og kredsløb. </List.Item>
        </List>
        <Text>
        Når du booker tid i Makerlab, er det vigtigt at kende den ansvarlige kontaktperson. Det sikrer, at du får den nødvendige support, og at udstyret anvendes korrekt. Makerlab er stedet, hvor du kan eksperimentere og bringe dine idéer til live.
        </Text>
      </Stack>
    </div>
  );
};

export default MakerlabInfo;
