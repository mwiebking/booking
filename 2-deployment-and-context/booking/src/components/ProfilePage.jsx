import { useState } from "react";
import NavbarNested from './NavbarNested'; // Import Navbar
import {
Button, Container, Paper, TextInput, Title, Space, Center, Checkbox, Avatar, Group, FileInput, Anchor,
} from "@mantine/core";
import { useNavigate } from "@tanstack/react-router";

export function ProfileInfo() {
const navigate = useNavigate();

  // Mocked profile data
const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    role: "User",
    avatar: null,
    notifications: true,
});

  // Simulate saving the profile data locally
const handleSave = () => {
    alert("Profile information saved successfully!");
    console.log("Saved profile:", profile);
};

  // Handle form input changes
const handleChange = (field) => (e) => {
    setProfile({ ...profile, [field]: e.target.value });
};

return (
    (
        <Container size="lg" style={{ height: "100vh", display: "flex" }}>
          {/* Left Navbar */}
        <NavbarNested />
    
          {/* Right Profile Info */}
        <Center style={{ flex: 1 }}>
            <Paper
            withBorder
            shadow="md"
            p={30}
            radius="md"
            style={{
                width: "364px",
                height: "710px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
            >
            <Title align="left">Profil Info</Title>
            <Space h="md" />
    
    
            <TextInput
                label="Navn"
                value={profile.firstName}
                onChange={handleChange("firstName")}
                radius="xl"
            />
            <Space h="sm" />
            <TextInput
                label="Efternavn"
                value={profile.lastName}
                onChange={handleChange("lastName")}
                radius="xl"
            />
            <Space h="sm" />
            <TextInput
                label="Telefon nr."
                value={profile.phone}
                onChange={handleChange("phone")}
                radius="xl"
            />
            <Space h="sm" />
            <TextInput
                label="Email"
                value={profile.email}
                disabled // Email is non-editable
                radius="xl"
            />
            <Space h="sm" />
            <TextInput
                label="Studerende, eller underviser"
                value={profile.role}
                disabled // Role is non-editable
                radius="xl"
            />
            <Space h="md" />

            <Group position="center" spacing="xs">
                <Avatar
                size={50}
                radius="xl"
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                /* {profile.avatar ? URL.createObjectURL(profile.avatar) : null} */
                alt="Avatar"
                />
            <FileInput
                placeholder="UPLOAD"
                accept="image/*"
                onChange={(file) =>
                setProfile({ ...profile,
                    avatar: file ? URL.createObjectURL(file) : null,
                })
                }
                radius="xl"
                styles={{
                input: {
                        '::placeholder': { 
                        color: '#fff'
                        
                    }
                },
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1098AD")} // color on hover
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")} // Reset to original color
            />
            </Group>
            <Space h="md" />
            <Anchor
                onClick={() => alert("Redirecting to change password page...")}
                style={{ display: "block", textAlign: "left", color: "#1098AD" }}
            >
                Skift Adgangskode
            </Anchor>
            <Space h="md" />
    
            <Checkbox
                label="Vil gerne modtage notifikationer på email"
                checked={profile.notifications}
                style={{color: "#1098AD"}}
                onChange={(e) =>
                setProfile({ ...profile, notifications: e.target.checked })
                }
            />
            <Space h="md" />
    
            <Button
                fullWidth
                onClick={handleSave}
                color="cyan"
                radius="xl"
                style={{ height: "33px", }}
            >
                GEM OPDATERING
            </Button>
            <Space h="xs" />
            <Anchor
                onClick={() => navigate("/dashboard")}
                style={{ display: "block", textAlign: "center", color: "#1098AD" }}
            >
                ANNULLER
            </Anchor>
            </Paper>
        </Center>
        </Container>
    ));
    }

export default ProfileInfo;
