import{r as o,s as m,j as e,P as c,S as s,T as x,B as u,c as g}from"./index-CpElu6S5.js";import{C as h}from"./Container-9wfMh_Qy.js";import{C as p}from"./Center-Ufr6hKm8.js";import{T as j}from"./Title-BKoPWuuV.js";import{T as f}from"./TextInput-BNVd_Vo_.js";import{A as v}from"./Anchor-D6EIagOZ.js";import"./InputBase-CcPPJkK5.js";import"./Input-HWOyQ6zU.js";import"./use-input-props-DC5fGsmw.js";function A(){const[t,i]=o.useState(""),[n,r]=o.useState(!1),a=m(),l=()=>{t?(r(!1),console.log("Password reset link sent to:",t)):r(!0)};return e.jsxs(h,{size:460,my:30,style:{height:"100vh"},children:[" ",e.jsxs(p,{style:{height:"80%"},children:[" ",e.jsxs(c,{withBorder:!0,shadow:"md",p:30,radius:"md",mt:"xl",children:[e.jsx(j,{textAlign:"center",children:"Glemt adgangskode?"}),e.jsx(s,{h:"xl"}),e.jsx(f,{label:"",placeholder:"Email",required:!0,value:t,onChange:d=>i(d.currentTarget.value),error:n?"You did something wrong!":null,radius:"xl"}),e.jsx(s,{h:"sm"}),e.jsx(x,{size:"sm",color:"dimmed",children:"Indtast din e-mail-adresse, og så sender vi dig en mail med link til valg af ny adgangskode."}),e.jsx(s,{h:"xl"}),e.jsx(u,{fullWidth:!0,onClick:l,color:"#1098AD",radius:"xl",children:"SEND E-MAIL"}),e.jsx(s,{h:"xs"}),e.jsx(v,{onClick:()=>{console.log("Navigating to /login..."),a("/login")},style:{display:"block",textAlign:"center",color:"#1098AD"},children:"ANNULLER"})]})]})]})}const L=g("/forgotpassword")({component:C});function C(){return e.jsx("div",{children:e.jsx(A,{})})}export{L as Route};