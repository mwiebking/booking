import React from 'react';
import { TextInput, Textarea, Button, Stack, Title } from '@mantine/core';
import { useRouteContext } from '@tanstack/react-router';


const SendRequestForm = () => {
  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: '1rem' }}>
      <Title order={2} style={{ marginBottom: '1rem' }}>
        Send forespørgsel
      </Title>
      <Stack spacing="md">
        <TextInput
          label="Navn"
          placeholder="Indtast dit navn"
          required
          radius="xl"
          style={{ backgroundColor: 'white' }}
        />
        <TextInput
          label="Ansvarlig for booking"
          placeholder="Hvem står for bookingen?"
          required
          radius="xl"
          style={{ backgroundColor: 'white' }}
        />
        <TextInput
          label="Email"
          placeholder="Indtast din email"
          type="email"
          required
          radius="xl"
          style={{ backgroundColor: 'white' }}
        />
        <TextInput
          label="Tlf"
          placeholder="Indtast dit telefonnummer"
          type="tel"
          required
          radius="xl"
          style={{ backgroundColor: 'white' }}
        />
        <TextInput
          label="Dato"
          placeholder="Vælg dato"
          type="date"
          required
          radius="xl"
          style={{ backgroundColor: 'white' }}
        />
        <TextInput
          label="Tidsrum"
          placeholder="Indtast tidsrum"
          required
          radius="xl"
          style={{ backgroundColor: 'white' }}
        />
        <Textarea
          label=""
          placeholder="Hvad ønsker du at bruge Medialab til?"
          required
          radius="md"
          style={{ backgroundColor: 'white' }}
        />
        <Button
          fullWidth
          radius="xl"
          style={{
            backgroundColor: '#1098AD',
          }}
        >
          SEND FORESPØRGSEL
        </Button>
      </Stack>
    </div>
  );
};

export default SendRequestForm;
