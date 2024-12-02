import {
  TextInput,
  PasswordInput,
  Checkbox,
  Container,
  Anchor,
} from "@mantine/core";
import { useState } from "react";
import { Link, useRouteContext } from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router"; // <-- Import useRouter for navigation

export default function SignUpForm() {
  const context = useRouteContext({ from: "/signup" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  async function handleSignUp(e) {
    e.preventDefault();

    const formData = new FormData(document.querySelector("#signup-form"));
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const notifyEmail = formData.get("notifyEmail") === "on";
    const notifyText = formData.get("notifyText") === "on";

    setErrorMessage("");
    setSuccessMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match. Please try again.");
      return;
    }

    try {
      const { data: existingUser, error: existingUserError } = await context.supabase
        .from("users")
        .select("email")
        .eq("email", email)
        .single();

      if (existingUser) {
        setErrorMessage("This email is already registered. Please log in.");
        return;
      }

      const { data: authData, error: authError } = await context.supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        setErrorMessage("Sign-up failed. Please try again.");
        return;
      }

      await context.supabase.from("users").insert({
        first_name: firstName,
        last_name: lastName,
        email,
        role: "student",
        email_notifications: notifyEmail,
        sms_notifications: notifyText,
      });

      setSuccessMessage("Account created successfully! Please log in.");
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
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
        id="signup-form"
        style={{
          width: "100%",
          padding: "1.5rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        onSubmit={handleSignUp}
      >
        <h1 style={{ marginBottom: "20px", textAlign: "center" }}>Opret Profil</h1>

        <TextInput
          placeholder="Fornavn"
          name="firstName"
          required
          radius="xl"
          style={{ marginBottom: "20px" }}
        />
        <TextInput
          placeholder="Efternavn"
          name="lastName"
          required
          radius="xl"
          style={{ marginBottom: "20px" }}
        />
        <TextInput
          placeholder="Email"
          name="email"
          required
          radius="xl"
          style={{ marginBottom: "20px" }}
        />
        <PasswordInput
          placeholder="Adgangskode"
          name="password"
          required
          radius="xl"
          style={{ marginBottom: "20px" }}
        />
        <PasswordInput
          placeholder="Bekræft adgangskode"
          name="confirmPassword"
          required
          radius="xl"
          style={{ marginBottom: "20px" }}
        />
        <Checkbox
          label="Vil gerne modtage notifikationer på SMS"
          name="notifyText"
          radius="md"
          style={{ marginBottom: "20px" }}
        />
        <Checkbox
          label="Vil gerne modtage notifikationer på mail"
          name="notifyEmail"
          radius="md"
          style={{ marginBottom: "20px" }}
        />
        {errorMessage && <div style={{ color: "red", marginBottom: "20px" }}>{errorMessage}</div>}
        {successMessage && (
          <div style={{ color: "green", marginBottom: "20px" }}>{successMessage}</div>
        )}

        <button
          type="submit"
          style={{
            display: "block",
            marginBottom: "20px",
            width: "100%",
            backgroundColor: "#1098AD",
            color: "#fff",
            padding: "10px 0",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
          }}
        >
          OPRET BRUGER
        </button>
       <Link to="/login">
        <Anchor
          onClick={() => router.navigate("../login")}
          style={{
            display: "block",
            textAlign: "center",
            color: "#1098AD",
            marginTop: "10px",
          }}
        >
          Allerede en bruger? Log ind
        </Anchor>
       </Link>
      </form>
    </Container>
  );
}
