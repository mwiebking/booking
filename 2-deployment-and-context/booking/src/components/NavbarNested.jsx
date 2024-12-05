import { Link } from '@tanstack/react-router'; // Import Link from TanStack Router
import { useState } from 'react';
import { AppShell, Box, useMantineTheme } from '@mantine/core';
import { HomeIcon, BookmarkIcon, CalendarIcon, SewingPinFilledIcon, CameraIcon, CubeIcon, SpeakerLoudIcon } from '@radix-ui/react-icons';
import UserButton from './UserButton';
import styles from './NavbarNested.module.css';
import PropTypes from 'prop-types';

function NavbarContent() {
  const theme = useMantineTheme();
  const routes = [
    { icon: HomeIcon, label: 'Dashboard', to: '/dashboard', iconBackgroundColor: theme.colors.green[4] },
    { icon: BookmarkIcon, label: 'Book lokale', to: '/booklokale', iconBackgroundColor: theme.colors.pink[4] },
    { icon: CalendarIcon, label: 'Mine bookninger', to: '/mybookings', iconBackgroundColor: theme.colors.teal[4] },
    { icon: SewingPinFilledIcon, label: 'Lokale oversigt', to: '/oversigt', iconBackgroundColor: theme.colors.cyan[4] },
    { icon: CameraIcon, label: 'Medialab', to: '/medialab', iconBackgroundColor: theme.colors.grape[4] },
    { icon: CubeIcon, label: 'Makerlab', to: '/makerlab', iconBackgroundColor: theme.colors.blue[4] },
    { icon: SpeakerLoudIcon, label: 'Auditorium', to: '/auditorium', iconBackgroundColor: theme.colors.orange[4] },
  ];


  return (
    <Box className={styles.navbar}>
      <div className={styles.links}>
        <div className={styles.linksInner}>
          {routes.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              /* style={({ isActive }) => ({
                backgroundColor: isActive ? theme.colors.dark[4] : 'transparent', // Active background color
                transition: 'background-color 0.3s ease',
                color: 'inherit', // Inherit color from parent
                textDecoration: 'none', // Remove underline from active link
              })} */
            >
             <div
  className={styles.linkbox}
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '10px', // Space between icon and label
    padding: '10px', // Add padding for the hover effect to look clean
  }}
>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '30px',
      height: '30px',
      borderRadius: '20%',
      backgroundColor: item.iconBackgroundColor,
    }}
  >
    <item.icon size="1.2rem" stroke={1.5} />
  </div>
  <div>{item.label}</div>
</div>

            </Link>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <UserButton /> {/* Render UserButton in the Navbar */}
      </div>
    </Box>
  );
}

// NavbarContent.propTypes = {
//   active: PropTypes.number.isRequired,
//   setActive: PropTypes.func.isRequired,
// };

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
