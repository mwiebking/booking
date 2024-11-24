import { DateTimePicker} from '@mantine/dates';
import { MultiSelect, Button } from '@mantine/core';
import styles from "./sign-up-form.module.css";

function RoomBar() {
  return (
<div style={{ display: 'flex', flexDirection: 'column', gap: '40px',}}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'start', marginLeft: '340px'  }}>
        <h1 style={{ margin: '0px'}}>Find lokale</h1>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'start', marginLeft: '0px' }}>
      <DateTimePicker style={{width: '300px', borderRadius: '32px'}} placeholder="Dato & tidspunkt" />
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
    <h1 style={{ margin: '0px', marginLeft: '340px', width: '450px', borderRight: '1px solid #DEE2E6', height: '1000px'}}>Ledige lokaler</h1>
  </div>
  <div>
    <h1 style={{ margin: '0px', width: '300px'}}>Mine bookinger</h1>
  </div>
 </div>
</div>
  );
}

export default RoomBar;