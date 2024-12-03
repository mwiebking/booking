import { PasswordInput, Button, Container, TextInput, Checkbox } from "@mantine/core";
import { useState } from "react";
import { useRouteContext, useRouter, Link } from "@tanstack/react-router";

export default function LoginForm() {
  const context = useRouteContext({ from: "/login" });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    setEmailError("");
    setPasswordError("");
    setErrorMessage("");

    if (!email.endsWith("@cphbusiness.dk")) setEmailError("Kun brugere med @cphbusiness.dk kan logge ind");
    if (!password) setPasswordError("Udfyld venligst din adgangskode");
    
    // Login logic here
  }

  return (
    <Container
      style={{
        width: "365px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        id="login-form"
        style={{
          width: "100%",
          padding: "1.5rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        onSubmit={handleLogin}
      >
        <h1 style={{ marginBottom: "20px" }}>Log ind</h1>

        <TextInput
          label="Email"
          placeholder="Email"
          name="email"
          radius="xl"
          style={{
            marginBottom: "10px",
            borderColor: emailError ? "red" : "#ddd",
          }}
          error={emailError}
        />

        <PasswordInput
          label="Password"
          placeholder="Adgangskode"
          name="password"
          radius="xl"
          style={{
            marginBottom: "10px",
            borderColor: passwordError ? "red" : "#ddd",
          }}
          error={passwordError}
        />

        {errorMessage && <div style={{ color: "red", marginBottom: "20px" }}>{errorMessage}</div>}

        <Checkbox label="Husk mig" radius="md" style={{ marginBottom: "20px" }} />

        <Link to="/dashboard">
        <Button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#1098AD",
            color: "#fff",
            padding: "10px 0",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
          }}
        >
          LOG IND
        </Button>
        </Link>

        <Link to="/forgotpassword" style={{ color: "#1098AD", textAlign: "center" }}>
          Glemt adgangskode?
        </Link>

        <Link to="/signup" style={{ color: "#1098AD", display: "block", marginTop: "20px", textAlign: "center" }}>
          Opret Profil
        </Link>
      </form>
    </Container>
  );
}
