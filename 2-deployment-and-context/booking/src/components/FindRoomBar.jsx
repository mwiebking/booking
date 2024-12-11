import { DatePickerInput } from '@mantine/dates';
import { MultiSelect, Button } from '@mantine/core';
import styles from './sign-up-form.module.css';
import { useBookingContext } from '../components/BookingContext';
import { useState } from 'react';

function FindRoomBar() {
  const { setFilters } = useBookingContext();

  const [date, setDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [features, setFeatures] = useState([]);
  const [capacity, setCapacity] = useState([]);
  

  const handleSearch = () => {
    setFilters({
      selectedDate: date,
      selectedTimeSlots: timeSlots,
      selectedFeatures: features,
      selectedCapacity: capacity,
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'start' }}>
        <h1 className="start" style={{ margin: '0px' }}>Søg Lokale</h1>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'start', marginLeft: '0px' }}>
          <DatePickerInput
            styles={{ input: { borderRadius: '32px', width: '300px' } }}
            placeholder="Dato"
            value={date}
            onChange={setDate}
          />
          <MultiSelect
            styles={{ input: { borderRadius: '32px', width: '300px' } }}
            placeholder="Tidsrum"
            data={['08:00-09:00', '09:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00']}
            value={timeSlots}
            onChange={setTimeSlots}
          />
          <MultiSelect
            styles={{ input: { borderRadius: '32px', width: '300px' } }}
            placeholder="Lokale type"
            data={['Stor Skærm', 'Lille Skærm', 'Tavle']}
            value={features}
            onChange={setFeatures}
          />
          <Button
            type="submit"
            className={styles.button}
            style={{ width: 'fit-content', marginTop: '0px' }}
            onClick={handleSearch}
          >
            SØG
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FindRoomBar;
