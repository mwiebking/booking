import { PasswordInput, Button, Container, TextInput, Checkbox } from "@mantine/core";
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
  const PUBLIC_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4ZnllamJnbWVmYWh4Y29weGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MzQzMTEsImV4cCI6MjA0NzUxMDMxMX0.C4NV6ZDFxDgrH4RSShCLZXonuLjHg_xsilsuYsMkDPQ";
  


  function test(e) {
    e.preventDefault();
    context.setUserInfo({test: "test"});
    navigate({ to: `/profilepage` });
  }
  async function handleLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    // setEmailError("");
    // setPasswordError("");
    // setErrorMessage("");

    if (!email.endsWith("@cphbusiness.dk")) {
      setEmailError("Kun brugere med @cphbusiness.dk kan logge ind");
      return;
    }
    if (!password) {
      setPasswordError("Udfyld venligst din adgangskode");
      return;
    }

    const supabase = createClient(SUPABASE_URL, PUBLIC_ANON_KEY);
    supabase.auth.signInWithPassword({
      email,
      password,
    }).then((data) => {
      console.log(data);
      
      // Fetch additional user data from the database
    // supabase
    //   .from("users")
    //   .select("*")
    //   .eq("email", email)
    //   .single().then((userData) => {
    //     console.log("userData", userData);
        
        context.setUserInfo({
          test: "test2"
        }
        //   {

        //   firstName: userData.first_name,
        //   lastName: userData.last_name,
        //   email: userData.email,
        //   phoneNumber: userData.phone_number,
        //   role: userData.role,
        //   profilePicture: userData.profile_picture,
        //   emailNotifications: userData.email_notifications,
        //   smsNotifications: userData.sms_notifications,
        //   createdAt: userData.created_at,
        // }
      );
        // Redirect to dashboard
        navigate({ to: `/profilepage` });
    
      // });

    });

    

    // if (authError) {
    //   setErrorMessage(authError.message);
    //   return;
    // }

    // const Email = authData.user.email;
    // console.log("User ID:", Email);

    // Fetch additional user data from the database
//     const { data: userData, error: userError } = await supabase
//       .from("users")
//       .select("*")
//       .eq("email", Email)
//       .single();

//       if (authError) {
//   console.error("Auth Error:", authError);
//   setErrorMessage(authError.message);
//   return;
// }

// if (userError) {
//   console.error("User Fetch Error:", userError);
//   setErrorMessage("Failed to fetch user details.");
//   return;
// }

    // Save the full user data globally
    // const userInfo = {
    //   firstName: "authData.user",
    //   lastName: userData.last_name,
    //   email: userData.email,
    //   phoneNumber: userData.phone_number,
    //   role: userData.role,
    //   profilePicture: userData.profile_picture,
    //   emailNotifications: userData.email_notifications,
    //   smsNotifications: userData.sms_notifications,
    //   createdAt: userData.created_at,
    // };

    // // console.log(userInfo);
    
    // context.setUserInfo(userInfo);
    // // Redirect to dashboard
    // navigate({ to: `/profilepage` });
    // // console.log(context.userInfo);
    
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
        <h1 style={{ marginBottom: "20px" }}>Log ind</h1>

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

        {errorMessage && <div style={{ color: "red", marginBottom: "20px" }}>{errorMessage}</div>}

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
          <a href="/forgotpassword" style={{ color: "#1098AD" }}>
            Glemt adgangskode?
          </a>
          <br />
          <a href="/signup" style={{ color: "#1098AD" }}>
            Opret Profil
          </a>
        </p>
      </form>
    </Container>
  );
}
