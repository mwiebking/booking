# Guide: Tilføj ting til Context

I det template der er givet, er der nogle afhængingheder og kode som i nødvendigvis ikke ved hvordan virker (Hvilket er helt fint). Men når/hvis i ønsker at tilføje ting til jers context, som skal deles på tværs af hele jeres Application, skal i følge denne guide.

I denne guide, følger jeg et eksempel om at tilføje bruger information, fx i forbindelse med login.

## Step 1: Rette `__root.tsx`

I denne fil skal vi rette det interface Routeren bruger.

> Dette er relateret til TypeScript, som vi ikke arbejder med, så det er en simplificeret løsning

Her vil jeg gerne tilføje noget bruger information, så jeg tilføjer linjen: `userInfo?: any;`

```diff
// Fil: src/routes/__root.tsx
export interface RouterContext {
  supabase: any;
+  userInfo?: any;
}
```

## Step 2: Rette `App.tsx`

I denne fil skal vi så oprette de værdier vi gerne vil dele på tværs af vores applikation.
Dette vil som regel være en state værdi.

Her er en lidt forkort version af vores `App.tsx`-fil, hvor jeg har tilføjet en ny state værdi, og tilføjet den til vores Context:

> Bemærk linjerne markeret med grønt, er de nye linjer

```diff
// Fil: src/App.tsx

import React, { useState } from "react";
// Mantine Providers
// ...
// Router imports
// ...
// Generated Routetree
// ...

export const router = createRouter({
  // ...
});

declare module "@tanstack/react-router" {
  // ...
}

export default function App() {
+  const [userInfo, setUserInfo] = useState({});

  return (
    <MantineProvider>
      <ModalsProvider>
        <RouterProvider
          router={router}
          context={{
            supabase: getSupabaseClient(),
+            userInfo: {
+              userInfo: userInfo,
+              setUserInfo: setUserInfo,
+            },
          }}
        />
      </ModalsProvider>
    </MantineProvider>
  );
}
```

## Step 3: Bruge de nye værdier

Når vi så gerne vil bruge denne nye state, kan vi se som en del af det eksisterende eksempel hvordan vi bruger den:

```js
import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  const context = useRouteContext({ from: "/about" });
  console.log(context);

  return <div>Hello from About!</div>;
}
```

Her skal vi bruge:

```js
const context = useRouteContext({ from: "/about" });
```

og det vigtige er egentlig bare at `from: "/about"`, svarer overens med det vi har stående i vores `createLazyFileRoute("/about")` længere oppe.

Så kan vi skrive: `context.userInfo`, for at få fat i det object vi oprettede tidligere, og i det object finder vi vores 2 state variabler: `userInfo` og `setUserInfo`.

> Bemærk at der er en lille risiko for forvirring, da "userInfo" er brugt 2 gange.

### Læse værdien

Så når vi skal læse `userInfo` værdien fra vores Context gør vi således:

```js
// Fil: src/routes/about.lazy.jsx

const context = useRouteContext({ from: "/about" });
const value = context.userInfo.userInfo;
```

### Opdatere værdien

Og når vi skal opdatere vores userInfo værdi, fx. på vores login-page, efter en bruger er logget ind:

```js
// Fil: src/routes/login.lazy.jsx

const context = useRouteContext({ from: "/login" });

// ... Eksempel funktion der kaldes efter succesfuldt login:
function handleSuccessfullLogin(info) {
  // ...
  context.userInfo.setUserInfo(info);
  // ...
}
```
