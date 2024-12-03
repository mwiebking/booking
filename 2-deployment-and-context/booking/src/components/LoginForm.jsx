import { PasswordInput, Button, Container, TextInput, Checkbox } from "@mantine/core";
import { useState } from "react";
import { useRouteContext } from "@tanstack/react-router";
import { useRouter, Link } from "@tanstack/react-router"; // <-- Import useRouter for navigation
import styles from "./login-form.module.css";

export default function LoginForm() {
  const context = useRouteContext({ from: "/login" });
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const [emailError, setEmailError] = useState(""); // State for email error
  const [passwordError, setPasswordError] = useState(""); // State for password error
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
    setEmailError(""); // Clear email error
    setPasswordError(""); // Clear password error

    // Reset error state for form validation
    let isValid = true;

    // Check if email is valid
    if (!email) {
      setEmailError("Udfyld venligst din email");
      isValid = false;
    } else if (!email.endsWith("@cphbusiness.dk")) {
      setEmailError("Kun brugere med @cphbusiness.dk kan logge ind");
      isValid = false;
    }

    // Check if password is provided
    if (!password) {
      setPasswordError("Udfyld venligst din adgangskode");
      isValid = false;
    }

    try {
      // Authenticate the user
      const { data: authData, error: authError } = await context.supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        console.error("Fejl ved login:", authError.message);
        setErrorMessage("Fejl ved login, tjek venligst e-mail og kodeord");
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

  return (
    <div>
      <h1>Log ind</h1>
      <Container classNames={{ root: styles.container }} {...containerProps}>
        <form onSubmit={handleLogin} id="login-form">
          <TextInput
            label="Email"
            classNames={{ input: styles.TextWrapper, label: styles.textLabel }}
            placeholder="Email"
            name="email"
            error={emailError} // Show email error
            onFocus={() => setEmailError("")} // Clear email error when focusing
          />
          <PasswordInput
            label="Password"
            placeholder="Adgangskode"
            classNames={{ input: styles.PasswordInput, label: styles.passwordLabel }}
            name="password"
            error={passwordError} // Show password error
            onFocus={() => setPasswordError("")} // Clear password error when focusing
          />
          
          {errorMessage && <div style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>}

          <Link className={styles.forgotButton} to="/forgotpassword">
            <div> <p style={{ fontWeight: "500" }}>Glemt adgangskode?</p></div>
          </Link>

          <Checkbox label="Husk mig" color="#1098ad" />
          
          <Link to="/dashboard">
          <Button type="submit" className={styles.LoginButton}>
            LOG IND
          </Button>
          </Link>
          
          <Link className={styles.registerButton} to="/signup">
            <div className={styles.registerButton1}> <p style={{ fontWeight: "500" }}>OPRET PROFIL</p></div>
          </Link>
        </form>
      </Container>
    </div>
  );
}
