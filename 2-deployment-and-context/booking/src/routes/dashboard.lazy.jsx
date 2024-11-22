import React from "react";
import { createLazyFileRoute, useRouter } from "@tanstack/react-router";
import BasicAppShell from "../components/Navbar"

export const Route = createLazyFileRoute('/dashboard')({
  component: RouteComponent,
});

function RouteComponent() {
  const { context } = useRouter();

  if (!context || !context.userInfo) {
    // Redirect to login or show a loading state if context is undefined
    return <div>
      <BasicAppShell/>
    </div>;
  }

  const { userInfo } = context;

  return (
    <div>
      
      <h1>
        Welcome to the {userInfo.role === "teacher" ? "Teacher" : "Student"} Dashboard
      </h1>
      {/* Role-specific content */}
      {userInfo.role === "teacher" ? (
        <p>Here is the teacher-specific content.</p>
      ) : (
        <p>Here is the student-specific content.</p>
      )}
    </div>
  );
}
