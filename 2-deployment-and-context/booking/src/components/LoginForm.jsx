import { PasswordInput, Button, Container, TextInput, Checkbox } from "@mantine/core";
import { useState } from "react";
import { useRouteContext } from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router"; // <-- Import useRouter for navigation
import styles from "./login-form.module.css";

export default function LoginForm() {
  const context = useRouteContext({ from: "/login" });
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const router = useRouter(); // <-- Initialize useRouter for navigation

  const containerProps = {
    bg: "var(--mantine-color-blue-light)",
    mt: "md",
  };

  async function handleLogin(e) {
    e.preventDefault(); // Prevent default form submission

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
      const { data: userDetails, error: userError } = await context.supabase.from("users").select("first_name, last_name, role").eq("email", email).single();

      if (userError) {
        console.error("Error fetching user details:", userError.message);
        setErrorMessage("Unable to fetch user details. Please try again.");
        return;
      }

      // Save user info in router context
      const userInfo = {
        email,
        firstName: userDetails.first_name,
        lastName: userDetails.last_name,
        role: userDetails.role,
      };

      context.setUserInfo(userInfo);

      // Redirect to the dashboard using the router's navigate function
      router.navigate("/..dashboard"); // <-- Navigate to the dashboard route
    } catch (error) {
      console.error("Unexpected error during login:", error.message);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  }

  function handleCreateProfile() {
    // Navigate to the login page
    router.navigate("../login");
  }

  function handleForgotPassword() {
    // Navigate to the forgot password page
    router.navigate("../forgotpassword");
  }
  
  const handleButtonClick = () => {
    console.log('Button clicked');
    // Other logic here...
  };
  

  return (
    <div>
      <h1>Log ind</h1>
      <Container classNames={{ root: styles.container }} {...containerProps}>
        <form onSubmit={handleLogin} id="login-form">
          <TextInput label="Email" classNames={{ input: styles.TextWrapper, label: styles.textLabel }} placeholder="Email" name="email" required />
          <PasswordInput label="Password" placeholder="Adgangskode" classNames={{ input: styles.PasswordInput, label: styles.passwordLabel }} name="password" required />
          {errorMessage && <div style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>}
          
          <Button type="button" className={styles.forgotButton} onClick={handleForgotPassword}>
            Glemt adgangskode?
          </Button>
          
          <Checkbox label="Husk mig" color="#1098ad" />
          
          <Button type="submit" className={styles.LoginButton}>
            LOG IND
          </Button>
          
          <Button type="button" className={styles.registerButton} onClick={handleCreateProfile}>
            OPRET PROFIL
          </Button>

          <button onClick={handleButtonClick}>Click me</button>

        </form>
      </Container>
    </div>
  );
}
