import{r as l,u as B,j as e,L as c,g as E,c as P}from"./index-D8YpNUcb.js";import{u as v}from"./useRouteContext-DqhR0Bz5.js";import{C as y}from"./Container-Ceglx9Hc.js";import{T as k}from"./TextInput-CCCyOJw6.js";import{P as I}from"./PasswordInput-DNy7H8uJ.js";import{C as N}from"./Checkbox-Bll_0vNP.js";import"./InputBase-C0PjgYJK.js";import"./use-input-props-gcEFTNs-.js";import"./use-resolved-styles-api-ccSGp1zG.js";import"./CheckIcon-CFVpqJdQ.js";const F="_container_18p2g_1",R="_LoginButton_18p2g_15",T="_PasswordInput_18p2g_26",W="_TextWrapper_18p2g_32",C="_textLabel_18p2g_37",D="_passwordLabel_18p2g_41",S="_forgotButton_18p2g_45",U="_registerButton_18p2g_57",O="_registerButton1_18p2g_70",t={container:F,LoginButton:R,PasswordInput:T,TextWrapper:W,textLabel:C,passwordLabel:D,forgotButton:S,registerButton:U,registerButton1:O};function q(){const n=v({from:"/login"}),[d,o]=l.useState(""),[x,s]=l.useState(""),[h,a]=l.useState(""),_=B(),b={bg:"var(--mantine-color-blue-light)",mt:"md"};async function j(w){w.preventDefault();const u=new FormData(document.querySelector("#login-form")),r=u.get("email"),g=u.get("password");o(""),s(""),a(""),r?r.endsWith("@cphbusiness.dk")||s("Kun brugere med @cphbusiness.dk kan logge ind"):s("Udfyld venligst din email"),g||a("Udfyld venligst din adgangskode");try{const{data:m,error:p}=await n.supabase.auth.signInWithPassword({email:r,password:g});if(p){console.error("Fejl ved login:",p.message),o("Fejl ved login, tjek venligst e-mail og kodeord");return}const{data:i,error:f}=await n.supabase.from("users").select("first_name, last_name, role").eq("email",r).single();if(f){console.error("Error fetching user details:",f.message),o("Unable to fetch user details. Please try again.");return}const L={email:r,firstName:i.first_name,lastName:i.last_name,role:i.role};n.setUserInfo(L),_.navigate("/..dashboard")}catch(m){console.error("Unexpected error during login:",m.message),o("An unexpected error occurred. Please try again.")}}return e.jsxs("div",{children:[e.jsx("h1",{children:"Log ind"}),e.jsx(y,{classNames:{root:t.container},...b,children:e.jsxs("form",{onSubmit:j,id:"login-form",children:[e.jsx(k,{label:"Email",classNames:{input:t.TextWrapper,label:t.textLabel},placeholder:"Email",name:"email",error:x,onFocus:()=>s("")}),e.jsx(I,{label:"Password",placeholder:"Adgangskode",classNames:{input:t.PasswordInput,label:t.passwordLabel},name:"password",error:h,onFocus:()=>a("")}),d&&e.jsx("div",{style:{color:"red",marginTop:"10px"},children:d}),e.jsx(c,{className:t.forgotButton,to:"/forgotpassword",children:e.jsxs("div",{children:[" ",e.jsx("p",{style:{fontWeight:"500"},children:"Glemt adgangskode?"})]})}),e.jsx(N,{label:"Husk mig",color:"#1098ad"}),e.jsx(c,{to:"/dashboard",children:e.jsx(E,{type:"submit",className:t.LoginButton,children:"LOG IND"})}),e.jsx(c,{className:t.registerButton,to:"/signup",children:e.jsxs("div",{className:t.registerButton1,children:[" ",e.jsx("p",{style:{fontWeight:"500"},children:"OPRET PROFIL"})]})})]})})]})}const Y=P("/login")({component:A});function A(){return e.jsx("div",{children:e.jsx(q,{})})}export{Y as Route};
