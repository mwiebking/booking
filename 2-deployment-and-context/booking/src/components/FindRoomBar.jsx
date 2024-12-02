import { DatePickerInput } from '@mantine/dates';
import { MultiSelect, Button } from '@mantine/core';
import styles from "./sign-up-form.module.css";

function RoomBar() {
  return (
<div style={{ display: 'flex', flexDirection: 'column', gap: '40px',}}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'start' }}>
        <h1 className='start' style={{ margin: '0px'}}>Find lokale</h1>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'start', marginLeft: '0px' }}>
      <DatePickerInput styles={{input: { borderRadius: '32px', width: '300px' },
        }} placeholder="Dato" />
      <MultiSelect
      styles={{input: { borderRadius: '32px', width: '300px' },
        }}
      placeholder="Tidsrum"
      data={['8:00-9:00', '9:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00']}
    />
      <MultiSelect
      styles={{input: { borderRadius: '32px', width: '300px' },
        }}
      placeholder="Lokale type"
      data={['Stort mødelokale', 'Lille mødelokale', 'Storskærm', 'Lille skærm']}
    />
    <Button type="submit" className={styles.button} style={{width: 'fit-content', marginTop: '0px'}}>
            SØG
          </Button>
      </div>
    </div>
</div>
  );
}

export default RoomBar;