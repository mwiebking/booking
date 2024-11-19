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
    const phoneNumber = formData.get("phoneNumber") || null; // Optional
    const notifyEmail = formData.get("notifyEmail") === "on";
    const notifyText = formData.get("notifyText") === "on";
  
    if (!password || password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }
  
    setErrorMessage("");
    setSuccessMessage("");
  
    try {
      // Step 1: Sign up the user using Supabase Auth
      const { data: authData, error: authError } = await context.supabase.auth.signUp({
        email,
        password,
      });
  
      if (authError) {
        console.error("Sign-up error:", authError.message);
        setErrorMessage("Sign-up failed. Please try again.");
        return;
      }
  
      // Step 2: Insert user details into the `users` table
      const userEmail = authData.user?.email;
  
      const { data: userData, error: userError } = await context.supabase
        .from("users")
        .insert({
          first_name: firstName,
          last_name: lastName,
          email: userEmail,
          phone_number: phoneNumber,
          email_notifications: notifyEmail,
          sms_notifications: notifyText,
        });
  
      if (userError) {
        console.error("Error saving user details:", userError.details || userError.message);
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
    <Container className={styles.container}>
      <form onSubmit={handleSignUp} id="signup-form">
        <TextInput label="First Name" placeholder="John" name="firstName" required />
        <TextInput label="Last Name" placeholder="Doe" name="lastName" required />
        <TextInput label="Email" placeholder="email@gmail.com" name="email" required />
        <PasswordInput label="Password" placeholder="Your password" name="password" required />
        <Checkbox label="Notify me via email" name="notifyEmail" />
        <Checkbox label="Notify me via text" name="notifyText" />
        {errorMessage && <div style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>}
        {successMessage && <div style={{ color: "green", marginTop: "10px" }}>{successMessage}</div>}
        <Button type="submit">Sign Up</Button>
      </form>
    </Container>
  );
}
