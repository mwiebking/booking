import { useState } from 'react';
import { AppShell, NavLink, Box } from '@mantine/core';
import { IconHome2, IconFingerprint, IconActivity } from '@tabler/icons-react';
import UserButton from './UserButton';



const data = [
  { icon: IconHome2, label: 'Dashboard', color: 'white' },
  { icon: IconFingerprint, label: 'Book lokale', color: 'white' },
  { icon: IconActivity, label: 'Mine bookninger', color: 'white' },
  { icon: IconActivity, label: 'Lokale oversigt', color: 'white' },
  { icon: IconActivity, label: 'Medialab', color: 'white' },
  { icon: IconActivity, label: 'Makerlab', color: 'white' },
  { icon: IconActivity, label: 'Auditorium', color: 'white' },
];

function NavbarContent({ active, setActive }) {
  const items = data.map((item, index) => (
    <NavLink
    href="/dashboard"
    key={item.label}
    active={index === active} // Active state logic
    label={item.label}
    rightSection={item.rightSection}
    leftSection={<item.icon size="1rem" stroke={1.5} />}
    onClick={() => setActive(index)}
    sx={(theme) => ({
      color: item.color, // Use the color directly from the data array
        '&:hover': {
          color: theme.colors.gray[4], // Valid hover color from the theme
        },
        '&[data-active]': {
          color: theme.colors.blue[1], // Valid active color from the theme
      },
    })}
    />
  ));
  
  return <Box w={220}>{items}
  <UserButton/> {/* Render UserButton in the Navbar */}
  </Box>;
}
export function BasicAppShell() {
  const [active, setActive] = useState(0); // Manage active state of navbar links

  return (<AppShell 
          header={{ height: 35 }} 
          navbar={{ width: 300, breakpoint: 'sm' }} 
          padding="md"
          >
      <AppShell.Navbar p="md" style={{ backgroundColor: '#2c2e33'}}>
        <NavbarContent active={active} setActive={setActive} /> {/* Pass active and setActive to Demo */}
      </AppShell.Navbar>
    </AppShell>);
}

export default BasicAppShell;

