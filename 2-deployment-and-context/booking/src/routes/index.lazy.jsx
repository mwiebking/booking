import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const context = useRouteContext({ from: "/" });
  console.log(context);

  return (
    <div>
      <div>{context.userInfo?.name ?? "No name"}</div>
      <h3>Welcome Home!</h3>
    </div>
  );
}