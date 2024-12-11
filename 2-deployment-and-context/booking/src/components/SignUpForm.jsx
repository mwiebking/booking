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
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
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

    // Reset errors
    setFormErrors({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setSuccessMessage("");

    // Validation checks
    let isValid = true;
    const errors = {};

    if (!firstName) {
      errors.firstName = "Udfyld venligst dit fornavn";
      isValid = false;
    }

    if (!lastName) {
      errors.lastName = "Udfyld venligst dit efternavn";
      isValid = false;
    }

    if (!email) {
      errors.email = "Udfyld venligst din email";
      isValid = false;
    } else if (!email.endsWith("@cphbusiness.dk")) {
      errors.email = "Kun brugere med @cphbusiness.dk kan tilmelde sig";
      isValid = false;
    }

    if (!password) {
      errors.password = "Udfyld venligst din adgangskode";
      isValid = false;
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Tjek om kodeord matcher";
      isValid = false;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Kodeordet matcher ikke";
      isValid = false;
    }

    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    try {
      const { data: existingUser, error: existingUserError } = await context.supabase
        .from("users")
        .select("email")
        .eq("email", email)
        .single();

      if (existingUser) {
        setFormErrors({ ...errors, email: "This email is already registered. Please log in." });
        return;
      }

      const { data: authData, error: authError } = await context.supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        setFormErrors({ ...errors, password: "Sign-up failed. Please try again." });
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
      setFormErrors({ ...errors, general: "An unexpected error occurred. Please try again." });
    }
  }

  const handleInputChange = (field) => {
    setFormErrors((prev) => ({ ...prev, [field]: "" }));
  };

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
        <h1 className="start" style={{ marginBottom: "20px", marginTop: "0px" }}>Opret Profil</h1>

        <TextInput
          placeholder="Fornavn"
          name="firstName"
          radius="xl"
          style={{
            marginBottom: "10px",
            borderColor: formErrors.firstName ? "red" : "#ddd",
            borderWidth: formErrors.firstName ? "2px" : "1px",
          }}
          onChange={() => handleInputChange("firstName")}
        />
        {formErrors.firstName && (
          <div style={{ color: "red", marginBottom: "20px" }}>{formErrors.firstName}</div>
        )}

        <TextInput
          placeholder="Efternavn"
          name="lastName"
          radius="xl"
          style={{
            marginBottom: "10px",
            borderColor: formErrors.lastName ? "red" : "#ddd",
            borderWidth: formErrors.lastName ? "2px" : "1px",
          }}
          onChange={() => handleInputChange("lastName")}
        />
        {formErrors.lastName && (
          <div style={{ color: "red", marginBottom: "20px" }}>{formErrors.lastName}</div>
        )}

        <TextInput
          placeholder="Email"
          name="email"
          radius="xl"
          style={{
            marginBottom: "10px",
            borderColor: formErrors.email ? "red" : "#ddd",
            borderWidth: formErrors.email ? "2px" : "1px",
          }}
          onChange={() => handleInputChange("email")}
        />
        {formErrors.email && (
          <div style={{ color: "red", marginBottom: "20px" }}>{formErrors.email}</div>
        )}

        <PasswordInput
          placeholder="Adgangskode"
          name="password"
          radius="xl"
          style={{
            marginBottom: "10px",
            borderColor: formErrors.password ? "red" : "#ddd",
            borderWidth: formErrors.password ? "2px" : "1px",
          }}
          onChange={() => handleInputChange("password")}
        />
        {formErrors.password && (
          <div style={{ color: "red", marginBottom: "20px" }}>{formErrors.password}</div>
        )}

        <PasswordInput
          placeholder="Bekræft adgangskode"
          name="confirmPassword"
          radius="xl"
          style={{
            marginBottom: "10px",
            borderColor: formErrors.confirmPassword ? "red" : "#ddd",
            borderWidth: formErrors.confirmPassword ? "2px" : "1px",
          }}
          onChange={() => handleInputChange("confirmPassword")}
        />
        {formErrors.confirmPassword && (
          <div style={{ color: "red", marginBottom: "20px" }}>{formErrors.confirmPassword}</div>
        )}

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
        
        {formErrors.general && (
          <div style={{ color: "red", marginBottom: "20px" }}>{formErrors.general}</div>
        )}

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
          onClick={() => router.navigate("./login")}
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
