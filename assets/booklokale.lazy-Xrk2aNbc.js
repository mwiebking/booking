import{r as y,j as e,P as f,S as t,G as d,c as T,B as C}from"./index-COYJN5bU.js";import{A as b}from"./AvaiableRooms-kNzCLu38.js";import{C as R}from"./Container-CrTncpiO.js";import{C as S}from"./Center-DxHpuQh7.js";import{T as r}from"./Title-Cmac56ny.js";import{C as c}from"./Checkbox-CCw99sZ6.js";import{R as w,D as L}from"./FindRoomBar-C4t4nbft.js";import"./Card-jO4nAZV3.js";import"./TextInput-n6t0SYS2.js";import"./InputBase-Dwr98rkG.js";import"./use-input-props-tsAOkwAo.js";import"./use-resolved-styles-api-DRSyAfA_.js";import"./CheckIcon-CzcVzmMp.js";import"./DatePickerInput-Dp0I32he.js";import"./use-disclosure-BJ-u8Juk.js";const B=()=>{const[l,x]=y.useState({lokaleType:[],tidsrum:[],skaerm:[],tavle:[]}),p=["Kontor 2-8 pers","Mødelokale 2-8 pers","Mødelokale 8-10 pers","Undervisningslokale 20-35 pers","Undervisningslokale 30-45 pers"],j=["8:00-9:00","9:00-10:00","10:00-11:00","11:00-12:00","12:00-13:00","13:00-14:00","14:00-15:00","15:00-16:00","16:00-17:00"],u=["Lille","Stor"],k=["Ja","Nej"],v=[{name:"Room A",lokaleType:"Kontor 2-8 pers",tidsrum:"8:00-9:00",skaerm:"Lille",tavle:"Ja"},{name:"Room B",lokaleType:"Mødelokale 2-8 pers",tidsrum:"10:00-11:00",skaerm:"Stor",tavle:"Nej"},{name:"Room C",lokaleType:"Undervisningslokale 20-35 pers",tidsrum:"11:00-12:00",skaerm:"Lille",tavle:"Ja"},{name:"Room D",lokaleType:"Mødelokale 8-10 pers",tidsrum:"9:00-10:00",skaerm:"Stor",tavle:"Nej"}],o=(s,a)=>{x(n=>{const i=n[s],m=i.includes(a)?i.filter(g=>g!==a):[...i,a];return{...n,[s]:m}})},h=v.filter(s=>{const a=l.lokaleType.length===0||l.lokaleType.includes(s.lokaleType),n=l.tidsrum.length===0||l.tidsrum.includes(s.tidsrum),i=l.skaerm.length===0||l.skaerm.includes(s.skaerm),m=l.tavle.length===0||l.tavle.includes(s.tavle);return a&&n&&i&&m});return e.jsx(R,{size:"lg",style:{height:"100vh"},children:e.jsx(S,{style:{flex:0},children:e.jsxs(f,{withBorder:!0,shadow:"md",p:30,radius:"md",style:{width:"400px",display:"flex",flexDirection:"column"},children:[e.jsx(r,{align:"left",mb:"sm",children:"Filter Search"}),e.jsx(t,{h:"md"}),e.jsxs("div",{children:[e.jsx(r,{order:4,children:"Lokale Type"}),e.jsx(d,{mt:"xs",spacing:"xs",children:p.map(s=>e.jsx(c,{label:s,checked:l.lokaleType.includes(s),onChange:()=>o("lokaleType",s)},s))})]}),e.jsx(t,{h:"md"}),e.jsxs("div",{children:[e.jsx(r,{order:4,children:"Tidsrum"}),e.jsx(d,{mt:"xs",spacing:"xs",children:j.map(s=>e.jsx(c,{label:s,checked:l.tidsrum.includes(s),onChange:()=>o("tidsrum",s)},s))})]}),e.jsx(t,{h:"md"}),e.jsxs("div",{children:[e.jsx(r,{order:4,children:"Skærm"}),e.jsx(d,{mt:"xs",spacing:"xs",children:u.map(s=>e.jsx(c,{label:s,checked:l.skaerm.includes(s),onChange:()=>o("skaerm",s)},s))})]}),e.jsx(t,{h:"md"}),e.jsxs("div",{children:[e.jsx(r,{order:4,children:"Tavle"}),e.jsx(d,{mt:"xs",spacing:"xs",children:k.map(s=>e.jsx(c,{label:s,checked:l.tavle.includes(s),onChange:()=>o("tavle",s)},s))})]}),e.jsx(t,{h:"md"}),e.jsxs("div",{children:[e.jsx(r,{order:4,children:"Search Results"}),h.length>0?e.jsx("ul",{children:h.map(s=>e.jsx("li",{children:s.name},s.name))}):e.jsx("p",{children:"No results match your criteria."})]})]})})})},O=T("/booklokale")({component:D});function D(){return e.jsxs("div",{style:{display:"flex",height:"100vh",width:"100%"},children:[e.jsx("div",{style:{width:300,height:"100%",display:"flex",flexDirection:"column",boxSizing:"border-box",backgroundColor:"#2c2e33"},children:e.jsx(C,{})}),e.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"2rem"},children:[e.jsx(w,{}),e.jsxs("div",{style:{display:"flex",gap:"1rem",paddingTop:"2rem"},children:[e.jsx("div",{style:{flex:2},children:e.jsx(B,{})}),e.jsx(L,{orientation:"vertical",style:{height:"auto"}}),e.jsx("div",{style:{flex:3},children:e.jsx(b,{})})]})]})]})}export{O as Route};
