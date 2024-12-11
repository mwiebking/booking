import React from 'react';
import { Title, Text, Stack, List } from '@mantine/core';
import RoomInfoIconsAuditorium from './RoomInfoIconsAuditorium';

const AuditoriumInfo = () => {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '1rem', backgroundColor: 'white', borderRadius: '8px' }}>
      {/* Title Section */}
      <Title order={2} style={{ marginBottom: '1rem' }}>
        Auditorium 1.7
      </Title>
      
      {/* Icons Section */}
      <div style={{ marginBottom: '1rem' }}>
        <RoomInfoIconsAuditorium />
      </div>
      
      {/* Text Section */}
      <Stack spacing="md">
      <Text>
          Et auditorium med plads til 60+ personer kan bruges til en lang række aktiviteter og arrangementer, der kræver både rummelighed og gode præsentationsfaciliteter.
        </Text>
        <Text>
          Her er nogle af de mest almindelige anvendelser:
        </Text>
        <Text>
          <List>
          1. Forelæsninger og undervisning: 
          <List.Item style={{ paddingLeft: '2rem' }}>Ideelt til større undervisningssessioner, hvor mange studerende kan deltage samtidig. Det giver underviseren mulighed for at præsentere materiale i et formelt setup med god akustik og ofte audiovisuelt udstyr som projektorer og lydsystemer.</List.Item>
        </List>
        </Text>
        <Text>
          <List>
          2. Gæsteforelæsninger og workshops: <br />
          <List.Item style={{ paddingLeft: '2rem' }}>Perfekt til at invitere eksterne oplægsholdere eller eksperter, der kan dele deres viden med en større gruppe. Her kan auditoriet skabe en professionel ramme for vidensdeling og netværksaktiviteter. </List.Item>  
          </List>
        </Text>
        <Text>
          Denne fleksibilitet gør auditoriet til et essentielt lokale for mange forskellige typer akademiske og professionelle arrangementer, hvor man ønsker at samle et større publikum under optimale præsentationsforhold.
        </Text>
      </Stack>
    </div>
  );
};

export default AuditoriumInfo;
