import { useState } from 'react';
import { AppShell, NavLink, Box, useMantineTheme } from '@mantine/core';
import { HomeIcon, BookmarkIcon, CalendarIcon, SewingPinFilledIcon, CameraIcon, CubeIcon, c  } from '@radix-ui/react-icons';
import UserButton from './UserButton';
import styles from './NavbarNested.module.css';
import PropTypes from 'prop-types';

function NavbarContent({ active, setActive }) {
  const theme = useMantineTheme(); // Access Mantine theme

const data = [
  { icon: HomeIcon, label: 'Dashboard', iconBackgroundColor: theme.colors.green[4], navBackgroundColor: theme.colors.dark[5] },
  { icon: BookmarkIcon, label: 'Book lokale', iconBackgroundColor: theme.colors.pink[4], navBackgroundColor: theme.colors.dark[5] },
  { icon: CalendarIcon, label: 'Mine bookninger', iconBackgroundColor: theme.colors.teal[4], navBackgroundColor: theme.colors.dark[5] },
  { icon: SewingPinFilledIcon, label: 'Lokale oversigt', iconBackgroundColor: theme.colors.cyan[4], navBackgroundColor: theme.colors.dark[5] },
  { icon: CameraIcon, label: 'Medialab', iconBackgroundColor: theme.colors.grape[4], navBackgroundColor: theme.colors.dark[5] },
  { icon: CubeIcon, label: 'Makerlab', iconBackgroundColor: theme.colors.blue[4], navBackgroundColor: theme.colors.dark[5] },
  { icon: SpeakerLoudIcon, label: 'Auditorium', iconBackgroundColor: theme.colors.orange[4], navBackgroundColor: theme.colors.dark[5] },
];


  const items = data.map((item, index) => (
    <NavLink
    /* href="/dashboard" */
    key={item.label}
    active={index === active} // Active state logic
    label={item.label}
    leftSection={
      <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30px',
        height: '30px',
        borderRadius: '20%', // rounded corners
        backgroundColor: item.iconBackgroundColor, // Active background color
      }}
    >
      <item.icon size="1.2rem" stroke={1.5} />
    </div>}
    onClick={() => setActive(index)}
    //this style is from GPT
    style={{ 
      backgroundColor: index === active ? item.navBackgroundColor : 'transparent', // Active background color
      transition: 'background-color 0.3s ease', // Smooth transition for background color
      color: 'inherit', // Inherit color from parent to avoid default mantine blue for active text/icon
    }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = item.navBackgroundColor)} // Hover background color appears
    onMouseLeave={(e) => 
      (e.currentTarget.style.backgroundColor = index === active ? item.navBackgroundColor : 'transparent') // removes hover color
    }
    />
  ));
  
  return (
  <Box className={styles.navbar}> {/* Use the navbar style */}
  <div className={styles.links}>
    <div className={styles.linksInner}>{items}</div>
  </div>
  <div className={styles.footer}>

  <UserButton active={active} setActive={setActive}/> {/* Render UserButton in the Navbar */}
  </div>
  </Box>
  );
  }

  NavbarContent.propTypes = {
    active: PropTypes.number.isRequired,
    setActive: PropTypes.func.isRequired,
  };


export function BasicAppShell() {
  const [active, setActive] = useState(0); // Manage active state of navbar links

  return (<AppShell 
          header={{ height: 35 }} 
          navbar={{ width: 300, breakpoint: 'xs' }} 
          >
      <AppShell.Navbar p="sm" style={{ backgroundColor: '#2C2E33'}}>
        <NavbarContent active={active} setActive={setActive} /> {/* Pass active and setActive to NavbarContent */}
      </AppShell.Navbar>
    </AppShell>);
}

export default BasicAppShell;

