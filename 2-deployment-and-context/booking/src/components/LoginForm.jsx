import { TextInput, PasswordInput, Button } from "@mantine/core";
import { Container } from "@mantine/core";
import styles from "./login-form.module.css";
import { useState } from "react";

export default function LoginForm() {
  const containerProps = {
    bg: "var(--mantine-color-blue-light)",
    mt: "md",
  };

  function handleLogin() {
    const formData = new FormData(document.querySelector("#login-form"));
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email);
    console.log(password);
  }

  return (
    <div>
      <Container className={styles.container} {...containerProps}>
        <form onSubmit={handleLogin} id="login-form">
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
