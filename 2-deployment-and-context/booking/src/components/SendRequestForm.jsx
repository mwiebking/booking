import React, { useRef, useState } from 'react';
import { TextInput, Textarea, Button, Stack, Title, Modal, Text } from '@mantine/core';
import emailjs from '@emailjs/browser';

const SendRequestForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    to_name: '',
    booking_responsible: '',
    user_email: '',
    user_phone: '',
    booking_date: '',
    booking_time: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [modalOpened, setModalOpened] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error when user starts typing
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.to_name.trim()) newErrors.to_name = 'Indtast Navn';
    if (!formData.booking_responsible.trim()) newErrors.booking_responsible = 'Indtast navn på ansvarlig for booking';
    if (!formData.user_email.trim()) newErrors.user_email = 'Indtast email';
    if (!formData.user_phone.trim()) newErrors.user_phone = 'Indtast telefonnummer';
    if (!formData.booking_date.trim()) newErrors.booking_date = 'Vælg en dato';
    if (!formData.booking_time.trim()) newErrors.booking_time = 'Indtast tidspunkt';
    if (!formData.message.trim()) newErrors.message = 'Indtast beskrivelse';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm('service_3s435am', 'template_hpf5ept', form.current, 'cfybL9CgdNoqUBI0-')
      .then(
        () => {
          console.log('SUCCESS!');
          setModalOpened(true); // Open the modal on success
          setFormData({
            to_name: '',
            booking_responsible: '',
            user_email: '',
            user_phone: '',
            booking_date: '',
            booking_time: '',
            message: '',
          }); // Reset form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: '1rem' }}>
      <Title order={2} style={{ marginBottom: '1rem' }}>
        Send forespørgsel
      </Title>
      <form ref={form} onSubmit={sendEmail}>
        <Stack spacing="md">
          <div>
            <TextInput
              label="Navn"
              placeholder="Indtast dit navn"
              radius="xl"
              style={{ backgroundColor: 'white' }}
              name="to_name"
              value={formData.to_name}
              onChange={handleInputChange}
            />
            {errors.to_name && <Text color="red" size="sm">{errors.to_name}</Text>}
          </div>
          <div>
            <TextInput
              label="Ansvarlig for booking"
              placeholder="Hvem står for bookingen?"
              radius="xl"
              style={{ backgroundColor: 'white' }}
              name="booking_responsible"
              value={formData.booking_responsible}
              onChange={handleInputChange}
            />
            {errors.booking_responsible && <Text color="red" size="sm">{errors.booking_responsible}</Text>}
          </div>
          <div>
            <TextInput
              label="Email"
              placeholder="Indtast din email"
              type="email"
              radius="xl"
              style={{ backgroundColor: 'white' }}
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
            />
            {errors.user_email && <Text color="red" size="sm">{errors.user_email}</Text>}
          </div>
          <div>
            <TextInput
              label="Tlf"
              placeholder="Indtast dit telefonnummer"
              type="tel"
              radius="xl"
              style={{ backgroundColor: 'white' }}
              name="user_phone"
              value={formData.user_phone}
              onChange={handleInputChange}
            />
            {errors.user_phone && <Text color="red" size="sm">{errors.user_phone}</Text>}
          </div>
          <div>
            <TextInput
              label="Dato"
              placeholder="Vælg dato"
              type="date"
              radius="xl"
              style={{ backgroundColor: 'white' }}
              name="booking_date"
              value={formData.booking_date}
              onChange={handleInputChange}
            />
            {errors.booking_date && <Text color="red" size="sm">{errors.booking_date}</Text>}
          </div>
          <div>
            <TextInput
              label="Tidsrum"
              placeholder="Indtast tidsrum (eks. 10:00-12:00)"
              radius="xl"
              style={{ backgroundColor: 'white' }}
              name="booking_time"
              value={formData.booking_time}
              onChange={handleInputChange}
            />
            {errors.booking_time && <Text color="red" size="sm">{errors.booking_time}</Text>}
          </div>
          <div>
            <Textarea
              label="Beskrivelse"
              placeholder="Skriv om du vil låne auditorium, medialab eller makerlab og beskriv hvorfor."
              radius="md"
              style={{ backgroundColor: 'white' }}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
            {errors.message && <Text color="red" size="sm">{errors.message}</Text>}
          </div>
          <Button
            fullWidth
            radius="xl"
            type="submit"
            style={{ backgroundColor: '#1098AD' }}
          >
            SEND FORESPØRGSEL
          </Button>
        </Stack>
      </form>

      {/* Booking Complete Modal */}
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size="md"
        radius="lg"
        centered
        padding="xl"
        withCloseButton={false}
      >
      <div style={{ textAlign: 'center' }}>
        <img 
          src="/booking/public/checkmark.jpg" 
          width={40}
        />
        <Title order={3} style={{ marginBottom: '1rem' }}>
          Forespørgsel sendt!
        </Title>
        <Button onClick={() => setModalOpened(false)} radius="xl">
          Luk
        </Button>
      </div>
    </Modal>
    </div>
  );
};

export default SendRequestForm;
