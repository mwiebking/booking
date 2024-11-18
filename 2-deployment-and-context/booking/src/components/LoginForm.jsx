import { TextInput, PasswordInput, Button } from "@mantine/core";
import { Container } from "@mantine/core";
import styles from "./login-form.module.css";
import { useState } from "react";
import { useRouteContext } from "@tanstack/react-router";

export default function LoginForm() {
  const context = useRouteContext({ from: "/login" });
  const [name, setName] = useState("");

  const containerProps = {
    bg: "var(--mantine-color-blue-light)",
    mt: "md",
  };

  async function handleLogin() {
    const formData = new FormData(document.querySelector("#login-form"));
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(name);
    console.log(email);
    console.log(password);
    console.log(context.supabase);

    const { data, error } = await context.supabase.auth.signInWithPassword({
      email: "example@email.com",
      password: "example-password",
    });

    // 1. Gemme info på brugeren
    const userInfo = {
      name,
      email,
    };

    context.setUserInfo(userInfo);

    // 2. Siden ændrer sig
    // Redirecter til /index
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
            placeholder="PasswordErSvært"
            name="password"
          />
          <Button onClick={handleLogin}>Login</Button>
        </form>
      </Container>
    </div>
  );
}