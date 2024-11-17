// __previewjs__/Wrapper.tsx
import React from "react";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

// Styles
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/spotlight/styles.css";
import "../src/global.css";

export const Wrapper = ({ children }) => (
  <MantineProvider>
    <ModalsProvider>{children}</ModalsProvider>
  </MantineProvider>
);
