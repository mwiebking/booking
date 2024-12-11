import React from 'react';
import { Title, Text, Stack, List } from '@mantine/core';
import RoomInfoIconsMedialab from './RoomInfoIconsMedialab';

const MedialabInfo = () => {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '1rem', backgroundColor: 'white', borderRadius: '8px' }}>
      {/* Title Section */}
      <Title order={2} style={{ marginBottom: '1rem' }}>
        Medialab 2.7
      </Title>
      
      {/* Icons Section */}
      <div style={{ marginBottom: '1rem' }}>
        <RoomInfoIconsMedialab />
      </div>
      
      {/* Text Section */}
      <Stack spacing="md">
        <Text>
        Medialab på CPH Business er en ressource for studerende, der ønsker at udforske og udvide deres kompetencer inden for multimedieproduktion. Her kan du booke tid til at låne et bredt udvalg af professionelt udstyr, der understøtter kreative projekter som videooptagelser, fotoshoots og meget mere.
        </Text>
        <Text>
        Dette kan du bruge medialab til:
        </Text>
        <List>
        <List.Item style={{ paddingLeft: '2rem' }}>Videooptagelser og fotoshoots: Medialab giver dig mulighed for at udforske forskellige optagelser og fotoshoots.</List.Item>
        <List.Item style={{ paddingLeft: '2rem' }}>Lysudstyr: Forskellige typer belysning, herunder softboxe og LED-lamper, som giver dig mulighed for at skabe professionelle lysopsætninger. </List.Item>
        <List.Item style={{ paddingLeft: '2rem' }}>Stativer og tripods: Stabile stativer og tripods, der sikrer, at dine optagelser bliver klare og uden rystelser. </List.Item> 
        <List.Item style={{ paddingLeft: '2rem' }}>Lydudstyr: Mikrofoner og lydoptagere til at forbedre lydkvaliteten i dine projekter. </List.Item>
        <List.Item style={{ paddingLeft: '2rem' }}>Green Screen: En dedikeret green screen, der giver dig mulighed for at arbejde med chroma key-effekter og skabe kreative baggrunde i dine optagelser. </List.Item>
        </List>
        <Text>
        Når du booker tid i Medialab, er det afgørende at vide, hvem den ansvarlige person er. Dette sikrer, at du kan få den nødvendige hjælp og vejledning til at bruge udstyret korrekt og undgå tekniske problemer.
        </Text>
      </Stack>
    </div>
  );
};

export default MedialabInfo;
