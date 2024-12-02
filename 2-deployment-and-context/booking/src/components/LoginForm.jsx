import { PasswordInput, Container, TextInput, Checkbox, Anchor } from "@mantine/core";
import { useState } from "react";
import { useRouteContext } from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router"; // <-- Import useRouter for navigation

export default function LoginForm() {
  const context = useRouteContext({ from: "/login" });
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const router = useRouter(); // <-- Initialize useRouter for navigation

  async function handleLogin(e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(document.querySelector("#login-form"));
    const email = formData.get("email");
    const password = formData.get("password");

    setErrorMessage(""); // Clear any previous error messages

    try {
      const { data: authData, error: authError } = await context.supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        console.error("Login error:", authError.message);
        setErrorMessage("Login failed. Please check your email and password.");
        return;
      }

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

      const userInfo = {
        email,
        firstName: userDetails.first_name,
        lastName: userDetails.last_name,
        role: userDetails.role,
      };

      context.setUserInfo(userInfo);

      router.navigate("../booklokale"); // <-- Navigate to the dashboard route
    } catch (error) {
      console.error("Unexpected error during login:", error.message);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  }

  return (
    <Container
      style={{
        width: "365px", // Set fixed width
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
        <h1 style={{ marginBottom: "20px", textAlign: "center" }}>Log ind</h1>

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
          style={{ marginBottom: "10px" }}
        />
        {errorMessage && <div style={{ color: "red", marginBottom: "20px" }}>{errorMessage}</div>}

        <Anchor
          onClick={() => {
            console.log("Navigating to forgot password..."); // Log navigation
            router.navigate("./forgotpassword");
          }}
          style={{
            display: "block",
            marginBottom: "20px",
            color: "#868E96",
          }}
        >
          Glemt adgangskode?
        </Anchor>

        <Checkbox label="Husk mig" color="#1098ad" style={{ marginBottom: "20px" }} radius="md" />

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
          LOG IND
        </button>

        <Anchor
          onClick={() => {
            console.log("Navigating to /login..."); // Log navigation
            router.navigate("../login");
          }}
          style={{ display: "block", textAlign: "center", color: "#1098AD", marginTop: "10px" }}
        >
          OPRET PROFIL
        </Anchor>
      </form>
    </Container>
  );
}
