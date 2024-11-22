import { TextInput, PasswordInput, Checkbox, Button, Container } from "@mantine/core";
import styles from "./sign-up-form.module.css";
import { useState } from "react";
import { useRouteContext } from "@tanstack/react-router";

export default function SignUpForm() {
  const context = useRouteContext({ from: "/signup" });
  const [errorMessage, setErrorMessage] = useState(""); // State for errors
  const [successMessage, setSuccessMessage] = useState(""); // State for success

  async function handleSignUp(e) {
    e.preventDefault();

    const formData = new FormData(document.querySelector("#signup-form"));
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");
    const phoneNumber = formData.get("phoneNumber"); // Optional
    const notifyEmail = formData.get("notifyEmail") === "on";
    const notifyText = formData.get("notifyText") === "on";

    setErrorMessage(""); // Clear any previous error messages
    setSuccessMessage(""); // Clear any previous success messages

    try {
      // Step 1: Check if the email is already registered
      const { data: existingUser, error: existingUserError } = await context.supabase.from("users").select("email").eq("email", email).single();

      if (existingUserError && existingUserError.code !== "PGRST116") {
        console.error("Error checking existing user:", existingUserError.message);
        setErrorMessage("An error occurred while checking user availability. Please try again.");
        return;
      }

      if (existingUser) {
        setErrorMessage("This email is already registered. Please log in or use a different email.");
        return;
      }

      // Step 2: Sign up the user in Supabase Auth (password will be automatically hashed)
      const { data: authData, error: authError } = await context.supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        console.error("Sign-up error:", authError.message);
        setErrorMessage("Sign-up failed. Please try again.");
        return;
      }

      // Step 3: Insert user details into the `users` table (without password hash)
      const { data: userData, error: userError } = await context.supabase.from("users").insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone_number: phoneNumber || null,
        role: "student", // Default role
        email_notifications: notifyEmail,
        sms_notifications: notifyText,
      });

      if (userError) {
        console.error("Error saving user details:", userError.message);
        setErrorMessage("Unable to save user details. Please try again.");
        return;
      }

      setSuccessMessage("Account created successfully! Please log in.");
    } catch (error) {
      console.error("Unexpected error during sign-up:", error.message);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  }

  return (
    <div>
      <Container className={styles.container}>
        <form onSubmit={handleSignUp} id="signup-form">
          <h1 className={styles.title}>Opret Profil</h1>
          <TextInput classNames={{ input: styles.FornavnInput, label: styles.FornavnLabel }} label="First Name" placeholder="Fornavn" name="firstName" required />
          <TextInput classNames={{ input: styles.EfternavnInput, label: styles.EfternavnLabel }} label="Last Name" placeholder="Efternavn" name="lastName" required />
          <TextInput classNames={{ input: styles.EmailInput, label: styles.EmailLabel }} label="Email" placeholder="Email" name="email" required />
          <PasswordInput classNames={{ input: styles.PasswordInput, label: styles.PasswordLabel }} label="Password" placeholder="Adgangskode" name="password" required />
          <PasswordInput classNames={{ input: styles.PasswordInput, label: styles.PasswordLabel }} label="PasswordAccept" placeholder="Bekræft adgangskode" name="password" required />
          <Checkbox className={styles.Checkbox} color="#1098ad" label="Vil gerne modtage notifikationer på SMS'er" name="notifyEmail" />
          <Checkbox className={styles.Checkbox} color="#1098ad" label="Vil gerne modtage notifikationer på mail" name="notifyText" />
          {errorMessage && <div style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>}
          {successMessage && <div style={{ color: "green", marginTop: "10px" }}>{successMessage}</div>}
          <Button type="submit" className={styles.button}>
            OPRET BRUGER
          </Button>
        </form>
      </Container>
    </div>
  );
}
