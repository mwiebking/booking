import { TextInput } from "@mantine/core";
import { Container } from "@mantine/core";
import styles from "./login-form.module.css";

export default function LoginForm() {
  const containerProps = {
    bg: "var(--mantine-color-blue-light)",
    mt: "md",
  };

  return (
    <div>
      <Container className={styles.container} {...containerProps}>
        <TextInput
          label="Input label"
          description="Input description"
          placeholder="Input placeholder"
        />
        <TextInput
          label="Input label"
          description="Input description"
          placeholder="Input placeholder"
        />
      </Container>
    </div>
  );
}
