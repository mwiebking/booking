import { useState } from "react";
import NavbarNested from "./NavbarNested"; // Import Navbar
import { Button, Container, Paper, TextInput, Title, Space, Center, Checkbox, Avatar, Group, FileInput, Anchor,} from "@mantine/core";
import { useRouteContext } from "@tanstack/react-router";

export function ProfileInfo() {
  const context = useRouteContext({ from: "/profilepage" });
  console.log(context);
  

  // Initialize profile state from userInfo
  const [profile, setProfile] = useState(() => ({
    firstName: context.userInfo?.firstName || "",
    lastName: context.userInfo?.lastName || "",
    email: context.userInfo?.email || "",
    phone: context.userInfo?.phoneNumber || "",
    role: context.userInfo?.role || "",
    avatar: context.userInfo?.profilePicture || null,
    notifications: context.userInfo?.emailNotifications || false,
  }));


  const [isEditing, setIsEditing] = useState(false);

  // Handle saving the updated profile
  const handleSave = async () => {
    const { supabase, setUserInfo } = context;

    const { error } = await supabase
      .from("users")
      .update({
        first_name: profile.firstName,
        last_name: profile.lastName,
        phone_number: profile.phone,
        email_notifications: profile.notifications,
      })
      .eq("id", context.userInfo.id);

    if (error) {
      alert("Fejl ved opdatering af profiloplysninger. Prøv igen senere.");
      console.error("Error updating profile:", error);
      return;
    }

    // Update global userInfo with new data
    setUserInfo({
      ...context.userInfo,
      firstName: profile.firstName,
      lastName: profile.lastName,
      phoneNumber: profile.phone,
      emailNotifications: profile.notifications,
    });

    alert("Dine nye profiloplysninger er blevet gemt!");
    setIsEditing(false); // Exit editing mode
  };

  // Handle form input changes
  const handleChange = (field) => (e) => {
    setProfile({ ...profile, [field]: e.target.value });
  };

  return (
    <Container size="lg" style={{ height: "100vh", display: "flex" }}>
      {/* Left Navbar */}
      <NavbarNested />

      {/* Right Profile Info */}
      <Center
        style={{
          flex: 1,
          height: "80%", // Set the height to 80%
          justifyContent: "center", // Vertically center the content
          paddingTop: "2rem", // Add padding to move it up if needed
        }}
      >
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
            disabled={!isEditing} // Disable if not in editing mode
          />
          <Space h="sm" />
          <TextInput
            label="Efternavn"
            value={profile.lastName}
            onChange={handleChange("lastName")}
            radius="xl"
            disabled={!isEditing} // Disable if not in editing mode
          />
          <Space h="sm" />
          <TextInput
            label="Telefon nr."
            value={profile.phone}
            onChange={handleChange("phone")}
            radius="xl"
            disabled={!isEditing} // Disable if not in editing mode
          />
          <Space h="sm" />
          <TextInput
            label="Email"
            value={profile.email}
            disabled // Always non-editable
            radius="xl"
          />
          <Space h="sm" />
          <TextInput
            label="Studerende, eller underviser"
            value={profile.role}
            disabled // Always non-editable
            radius="xl"
          />
          <Space h="md" />

          <Group position="center" spacing="xs">
            <Avatar
              size={50}
              radius="xl"
              src={profile.avatar || "https://via.placeholder.com/150"}
              alt="Avatar"
            />
            {isEditing && (
              <FileInput
                placeholder="UPLOAD"
                accept="image/*"
                onChange={(file) =>
                  setProfile({ ...profile, avatar: file ? URL.createObjectURL(file) : null })
                }
                radius="xl"
              />
            )}
          </Group>
          <Space h="md" />
          <Anchor href="/changepassword" style={{ color: "#1098AD" }}>
            Skift Adgangskode
          </Anchor>
          <Space h="md" />

          {isEditing && (
            <Checkbox
              label="Vil gerne modtage notifikationer på email"
              checked={profile.notifications}
              style={{ color: "#1098AD" }}
              onChange={(e) =>
                setProfile({ ...profile, notifications: e.target.checked })
              }
            />
          )}
          <Space h="md" />

          {isEditing ? (
            <Button
              fullWidth
              onClick={handleSave}
              color="cyan"
              radius="xl"
              style={{ height: "33px" }}
            >
              GEM OPDATERING
            </Button>
          ) : (
            <Button
              fullWidth
              onClick={() => setIsEditing(true)}
              color="cyan"
              radius="xl"
              style={{ height: "33px" }}
            >
              REDIGER PROFIL
            </Button>
          )}
          <Space h="xs" />
        </Paper>
      </Center>
    </Container>
  );
}

export default ProfileInfo;
