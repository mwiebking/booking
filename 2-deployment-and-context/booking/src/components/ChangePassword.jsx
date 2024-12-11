import {
  TextInput,
  PasswordInput,
  Checkbox,
  Container,
  Anchor,
} from "@mantine/core";
import { useState } from "react";
import { Link, useRouteContext } from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router"; 

export default function ChangePasswordForm() {
  const context = useRouteContext({ from: "/changepassword" });
  const router = useRouter();

 

  return (
    <Container
      style={{
        width: "450px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <h1 style={{ marginBottom: "20px", textAlign: "start" }}>Skift adgangskode</h1>
      <form
        id="signup-form"
        style={{
          width: "100%",
          padding: "1.5rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        
      >
  
  <p style={{ marginBottom: "5px" }}>Nuværende adgangskode</p>
  <PasswordInput
          
          name="password"
          required
          radius="xl"
          style={{ marginBottom: "20px" }}
        />
        <p style={{ marginBottom: "5px" }}>Ny adgangskode</p>
        <PasswordInput
          
          name="password"
          required
          radius="xl"
          style={{ marginBottom: "20px" }}
        />
        <p style={{ marginBottom: "5px" }}>Bekræft ny adgangskode</p>
        <PasswordInput
          
          name="confirmPassword"
          required
          radius="xl"
          style={{ marginBottom: "20px" }}
        />
        

        <button
          type="submit"
          style={{
            display: "block",
            marginBottom: "20px",
            width: "100%",
            backgroundColor: "#1098AD",
            color: "#fff",
            padding: "5px 0",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
          }}
        >
          GEM NY ADGANGSKODE
        </button>
  <Link to="/profilepage">
        <Anchor
          onClick={() => router.navigate("../login")}
          style={{
            display: "block",
            textAlign: "center",
            color: "#1098AD",
            marginTop: "10px",
          }}
        >
          TILBAGE
        </Anchor>
        </Link>
      </form>
    </Container>
  );
}
