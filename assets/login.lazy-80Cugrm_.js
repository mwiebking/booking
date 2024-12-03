import{r as l,u as B,j as e,L as c,g as E,c as P}from"./index-B--JcbfN.js";import{u as v}from"./useRouteContext-DfYBFgSo.js";import{C as y}from"./Container-wVV1oD5k.js";import{T as k}from"./TextInput-B3laeAGD.js";import{P as I}from"./PasswordInput-MVXtn-9n.js";import{C as N}from"./Checkbox-CafBwuIC.js";import"./InputBase-B1VaYeyF.js";import"./use-resolved-styles-api-DR-sW270.js";import"./CheckIcon-CF7yNtbZ.js";const F="_container_13ohj_1",R="_LoginButton_13ohj_29",T="_PasswordInput_13ohj_51",W="_TextWrapper_13ohj_63",C="_textLabel_13ohj_73",D="_passwordLabel_13ohj_81",S="_forgotButton_13ohj_89",U="_registerButton_13ohj_113",O="_registerButton1_13ohj_139",o={container:F,LoginButton:R,PasswordInput:T,TextWrapper:W,textLabel:C,passwordLabel:D,forgotButton:S,registerButton:U,registerButton1:O};function q(){const n=v({from:"/login"}),[d,r]=l.useState(""),[f,s]=l.useState(""),[x,a]=l.useState(""),j=B(),_={bg:"var(--mantine-color-blue-light)",mt:"md"};async function b(w){w.preventDefault();const u=new FormData(document.querySelector("#login-form")),t=u.get("email"),m=u.get("password");r(""),s(""),a(""),t?t.endsWith("@cphbusiness.dk")||s("Kun brugere med @cphbusiness.dk kan logge ind"):s("Udfyld venligst din email"),m||a("Udfyld venligst din adgangskode");try{const{data:g,error:p}=await n.supabase.auth.signInWithPassword({email:t,password:m});if(p){console.error("Fejl ved login:",p.message),r("Fejl ved login, tjek venligst e-mail og kodeord");return}const{data:i,error:h}=await n.supabase.from("users").select("first_name, last_name, role").eq("email",t).single();if(h){console.error("Error fetching user details:",h.message),r("Unable to fetch user details. Please try again.");return}const L={email:t,firstName:i.first_name,lastName:i.last_name,role:i.role};n.setUserInfo(L),j.navigate("/..dashboard")}catch(g){console.error("Unexpected error during login:",g.message),r("An unexpected error occurred. Please try again.")}}return e.jsxs("div",{children:[e.jsx("h1",{children:"Log ind"}),e.jsx(y,{classNames:{root:o.container},..._,children:e.jsxs("form",{onSubmit:b,id:"login-form",children:[e.jsx(k,{label:"Email",classNames:{input:o.TextWrapper,label:o.textLabel},placeholder:"Email",name:"email",error:f,onFocus:()=>s("")}),e.jsx(I,{label:"Password",placeholder:"Adgangskode",classNames:{input:o.PasswordInput,label:o.passwordLabel},name:"password",error:x,onFocus:()=>a("")}),d&&e.jsx("div",{style:{color:"red",marginTop:"10px"},children:d}),e.jsx(c,{className:o.forgotButton,to:"/forgotpassword",children:e.jsxs("div",{children:[" ",e.jsx("p",{style:{fontWeight:"500"},children:"Glemt adgangskode?"})]})}),e.jsx(N,{label:"Husk mig",color:"#1098ad"}),e.jsx(c,{to:"/dashboard",children:e.jsx(E,{type:"submit",className:o.LoginButton,children:"LOG IND"})}),e.jsx(c,{className:o.registerButton,to:"/signup",children:e.jsxs("div",{className:o.registerButton1,children:[" ",e.jsx("p",{style:{fontWeight:"500"},children:"OPRET PROFIL"})]})})]})})]})}const X=P("/login")({component:A});function A(){return e.jsx("div",{children:e.jsx(q,{})})}export{X as Route};