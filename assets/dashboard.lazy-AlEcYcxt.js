import{c as s,f as i,r as n,j as r}from"./index-Cab1602i.js";import{R as a}from"./FindRoomBar-B3p74WGM.js";import"./sign-up-form.module-zmKhV21F.js";import"./DatePickerInput-Cu24jKcu.js";import"./use-disclosure-D9dqnVUy.js";import"./use-resolved-styles-api-DaMakfix.js";import"./use-input-props-DSzSnQ_4.js";import"./Input-Bjzmdtor.js";import"./CheckIcon-BupmyCJd.js";import"./InputBase-C8Qqn-Pi.js";const x=s("/dashboard")({component:m});function m(){const{context:o,navigate:e}=i();if(n.useEffect(()=>{console.log("Dashboard context:",o),o!=null&&o.userInfo||(console.log("No user info found. Redirecting to login."),e("/login"))},[o,e]),!(o!=null&&o.userInfo))return r.jsx("p",{children:"Loading..."});const{userInfo:t}=o;return r.jsxs("div",{children:[r.jsx(a,{}),r.jsxs("h1",{children:["Welcome to the ",t.role==="teacher"?"Teacher":"Student"," ","Dashboard"]})]})}export{x as Route};
