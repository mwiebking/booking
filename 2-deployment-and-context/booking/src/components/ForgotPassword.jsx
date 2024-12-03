import { useState } from "react";
import { Button, Container, Paper, Text, TextInput, Title, Anchor, Space, Center } from "@mantine/core";
import { Link, useNavigate } from "@tanstack/react-router"; // Import from TanStack

export function ForgotPassword() {
  const [email, setEmail] = useState(""); // Track email input value
  const [formError, setFormError] = useState(""); // Track validation error message
  const navigate = useNavigate(); // TanStack's navigation hook

  const handleResetPassword = () => {
    // Reset error messages
    setFormError("");

    if (!email) {
      setFormError("Udfyld venligst din email"); // Show error if the input is empty
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      // Check for valid email format
      setFormError("Indtast venligst en gyldig emailadresse");
    } else {
      // Clear error if input is valid
      setFormError("");
      // Add your password reset logic here
      console.log("Password reset link sent to:", email);
    }
  };

  return (
    <Container size={460} my={30} style={{ height: "100vh" }}> {/* Set container height to 100vh */}
      <Center style={{ height: "80%" }}> {/* Center content vertically and horizontally */}
        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <Title className="start">Glemt adgangskode?</Title>
          <Space h="xl" />
          <TextInput
            label=""
            placeholder="Email"
            required
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            error={formError ? formError : null} // Conditional error message
            radius="xl"
          />
          <Space h="sm" />
          <Text size="sm" color="dimmed">
            Indtast din e-mail-adresse, og så sender vi dig en mail med link til valg af ny adgangskode.
          </Text>
          <Space h="xl" />
          <Button fullWidth onClick={handleResetPassword} color="#1098AD" radius="xl">
            SEND E-MAIL
          </Button>
          <Space h="xs" />
          <Link to="/login">
          <Anchor
            onClick={() => {
              console.log("Navigating to /login...");  // Log the navigation attempt
              navigate("/login");
            }}
            style={{ display: "block", textAlign: "center", color: "#1098AD" }}
          >
            ANNULLER
          </Anchor>
          </Link>
        </Paper>
      </Center>
    </Container>
  );
}
