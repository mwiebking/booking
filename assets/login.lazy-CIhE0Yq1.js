import{r as p,j as e,m as h,n as x}from"./index-DM522yLc.js";import{u as w}from"./useRouteContext-DmqdXshX.js";import{C as b,T as j,P as y}from"./TextInput-CqAE2FCw.js";const P="_container_178qn_1",E={container:P};function _(){const o=w({from:"/login"}),[t,r]=p.useState(""),u={bg:"var(--mantine-color-blue-light)",mt:"md"};async function d(g){g.preventDefault();const n=new FormData(document.querySelector("#login-form")),a=n.get("email"),f=n.get("password");r("");try{const{data:i,error:l}=await o.supabase.auth.signInWithPassword({email:a,password:f});if(l){console.error("Login error:",l.message),r("Login failed. Please check your email and password.");return}const{data:s,error:c}=await o.supabase.from("users").select("first_name, last_name, role").eq("email",a).single();if(c){console.error("Error fetching user details:",c.message),r("Unable to fetch user details. Please try again.");return}const m={email:a,firstName:s.first_name,lastName:s.last_name,role:s.role};o.setUserInfo(m),m.role==="teacher"?window.location.href="/teacher-dashboard":window.location.href="/student-dashboard"}catch(i){console.error("Unexpected error during login:",i.message),r("An unexpected error occurred. Please try again.")}}return e.jsx("div",{children:e.jsx(b,{className:E.container,...u,children:e.jsxs("form",{onSubmit:d,id:"login-form",children:[e.jsx(j,{label:"Email",placeholder:"email@gmail.com",name:"email",required:!0}),e.jsx(y,{label:"Password",placeholder:"Your password",name:"password",required:!0}),t&&e.jsx("div",{style:{color:"red",marginTop:"10px"},children:t}),e.jsx(h,{type:"submit",children:"Login"})]})})})}const I=x("/login")({component:L});function L(){return e.jsx("div",{children:e.jsx(_,{})})}export{I as Route};
