import { TextInput, PasswordInput, Button, Container } from "@mantine/core";
import styles from "./login-form.module.css";
import { useState } from "react";
import { useRouteContext } from "@tanstack/react-router";

export default function LoginForm() {
  const context = useRouteContext({ from: "/login" });
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  const containerProps = {
    bg: "var(--mantine-color-blue-light)",
    mt: "md",
  };

  async function handleLogin(e) {
    e.preventDefault();

    const formData = new FormData(document.querySelector("#login-form"));
    const email = formData.get("email");
    const password = formData.get("password");

    setErrorMessage(""); // Clear any previous error messages

    try {
      // Authenticate the user
      const { data: authData, error: authError } = await context.supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        console.error("Login error:", authError.message);
        setErrorMessage("Login failed. Please check your email and password.");
        return;
      }

      // Fetch the user's role from the database
      const { data: userDetails, error: userError } = await context.supabase
        .from("users")
        .select("first_name, last_name, role")
        .eq("email", email)
        .single();

      if (userError) {
        console.error("Error fetching user details:", userError.message);
        setErrorMessage("Unable to fetch user details. Please try again.");
        return;
      }

      // Save user info to context
      const userInfo = {
        email,
        firstName: userDetails.first_name,
        lastName: userDetails.last_name,
        role: userDetails.role,
      };

      context.setUserInfo(userInfo);

      // Redirect based on role
      if (userInfo.role === "teacher") {
        window.location.href = "/teacher-dashboard";
      } else {
        window.location.href = "/student-dashboard";
      }
    } catch (error) {
      console.error("Unexpected error during login:", error.message);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  }

  return (
    <div>
      <Container className={styles.container} {...containerProps}>
        <form onSubmit={handleLogin} id="login-form">
          <TextInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            placeholder="John"
            name="name"
          />
          <TextInput label="Email" placeholder="email@gmail.com" name="email" />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            name="password"
          />
          {errorMessage && (
            <div style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>
          )}
          <Button type="submit">Login</Button>
        </form>
      </Container>
    </div>
  );
}
