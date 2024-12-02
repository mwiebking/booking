import { DatePickerInput } from '@mantine/dates';
import { MultiSelect, Button } from '@mantine/core';
import styles from "./sign-up-form.module.css";

function RoomBar() {
  return (
<div style={{ display: 'flex', flexDirection: 'column', gap: '40px',}}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'start' }}>
        <h1 style={{ margin: '0px'}}>Find lokale</h1>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'start', marginLeft: '0px' }}>
      <DatePickerInput style={{width: '300px', borderRadius: '32px'}} placeholder="Dato" />
      <MultiSelect
      style={{width: '300px', borderRadius: '32px'}}
      placeholder="Tidsrum"
      data={['8:00-9:00', '9:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00']}
    />
      <MultiSelect
      style={{width: '300px', borderRadius: '32px'}}
      placeholder="Lokale type"
      data={['Stort mødelokale', 'Lille mødelokale', 'Storskærm', 'Lille skærm']}
    />
    <Button type="submit" className={styles.button} style={{width: 'fit-content', marginTop: '0px'}}>
            SØG
          </Button>
      </div>
    </div>
 
 <div style={{ display: 'flex', gap: '50px', height: 'auto'}}>
  <div>
    <h1 style={{ margin: '0px', width: '450px', borderRight: '1px solid #DEE2E6', height: '1000px'}}>Ledige lokaler</h1>
  </div>
  <div>
    <h1 style={{ margin: '0px', width: '300px'}}>Mine bookinger</h1>
  </div>
 </div>
</div>
  );
}

export default RoomBar;