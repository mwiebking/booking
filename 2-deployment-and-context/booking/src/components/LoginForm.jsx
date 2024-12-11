import {
  PasswordInput,
  Button,
  Container,
  TextInput,
  Checkbox,
} from "@mantine/core";
import { useState } from "react";
import { useRouteContext, useNavigate } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";

export default function LoginForm() {
  const context = useRouteContext({ from: "/login" });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const SUPABASE_URL = "https://ixfyejbgmefahxcopxea.supabase.co";
  const PUBLIC_ANON_KEY = "your-public-anon-key";

  async function handleLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email.endsWith("@cphbusiness.dk")) {
      setEmailError("Kun brugere med @cphbusiness.dk kan logge ind");
      return;
    }
    if (!password) {
      setPasswordError("Udfyld venligst din adgangskode");
      return;
    }

    const supabase = createClient(SUPABASE_URL, PUBLIC_ANON_KEY);
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (response.error) {
      setErrorMessage("Fejl ved login. Tjek venligst dine oplysninger.");
      return;
    }

    const userInfo = response.data.user;
    const additionalUserInfo = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    context.setUserInfo({
      email: userInfo.email,
      firstName: additionalUserInfo.data.first_name,
      lastName: additionalUserInfo.data.last_name,
      phoneNumber: additionalUserInfo.data.phone_number,
      role: additionalUserInfo.data.role,
      profilePicture: additionalUserInfo.data.profile_picture,
      emailNotifications: additionalUserInfo.data.email_notifications,
      smsNotifications: additionalUserInfo.data.sms_notifications,
      createdAt: additionalUserInfo.data.created_at,
      authUserId: additionalUserInfo.authuserid,
    });

    navigate({ to: `/dashboard` });
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
        <h1 className="start" style={{ marginBottom: "20px" }}>
          Log ind
        </h1>

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

        {errorMessage && (
          <div style={{ color: "red", marginBottom: "20px" }}>
            {errorMessage}
          </div>
        )}

        <Checkbox label="Husk mig" radius="md" style={{ marginBottom: "20px" }} />

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

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          <span
            onClick={() => navigate({ to: "/forgotpassword" })}
            style={{ color: "#1098AD", cursor: "pointer" }}
          >
            Glemt adgangskode?
          </span>
          <br />
          <span
            onClick={() => navigate({ to: "/signup" })}
            style={{ color: "#1098AD", cursor: "pointer" }}
          >
            Opret Profil
          </span>
        </p>
      </form>
    </Container>
  );
}
