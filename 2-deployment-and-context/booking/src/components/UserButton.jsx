import { ChevronRightIcon } from '@radix-ui/react-icons';
import { Avatar, Group, Text, UnstyledButton, Space } from '@mantine/core';
import { Link, useNavigate } from '@tanstack/react-router';
import PropTypes from 'prop-types';

export function UserButton({ active, setActive }) {
  const navigate = useNavigate();

  const handleClick = () => {
    setActive(-1); // Use a unique value (-1) to represent the UserButton being active
    navigate('/profilepage'); // Navigate to the profile page
  };

  return (
    <Link to="/profilepage">
    <UnstyledButton
      onClick={handleClick}
      style={{
        display: 'block',
        width: '100%',
        padding: 'var(--mantine-spacing-sm)',
        color: 'white',
        backgroundColor: active === -1 ? 'var(--mantine-color-dark-4)' : 'transparent', // Active state color
        transition: 'background-color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        if (active !== -1) {
          e.currentTarget.style.backgroundColor = 'var(--mantine-color-dark-4)'; // Hover color
        }
      }}
      onMouseLeave={(e) => {
        if (active !== -1) {
          e.currentTarget.style.backgroundColor = 'transparent'; // Reset hover color if not active
        }
      }}
    >
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={600}>
            Henriette Jakobsen
          </Text>

          <Text c="dimmed" size="xs">
            hrjakobsen@cphbusiness.dk
          </Text>
        </div>

        <ChevronRightIcon size={16} stroke={2} />
      </Group>
      <Space h="xl" /> {/* space for userbutton to be pushed above tanstack button, to be removed */}
    </UnstyledButton>
    </Link>
  );
}

// UserButton.propTypes = {
//   active: PropTypes.number.isRequired,
//   setActive: PropTypes.func.isRequired,
// };

export default UserButton;
