import{r as h,a as F,b as J,j as e,d as T,f as W,C as Y,e as $,B,P as q,S as n,G as K,A as Q,L as X,g as Z,c as ee}from"./index-D8YpNUcb.js";import{C as te}from"./Container-Ceglx9Hc.js";import{C as se}from"./Center-KdN0zOJU.js";import{T as ne}from"./Title-BLLjC7W4.js";import{T as d}from"./TextInput-CCCyOJw6.js";import{u as le,a as re}from"./use-resolved-styles-api-ccSGp1zG.js";import{I as ae}from"./use-input-props-gcEFTNs-.js";import{I as _}from"./InputBase-C0PjgYJK.js";import{A as oe}from"./Anchor-BLwvkbBG.js";import{C as ie}from"./Checkbox-Bll_0vNP.js";import"./CheckIcon-CFVpqJdQ.js";const ce={multiple:!1},D=h.forwardRef((t,l)=>{const{onChange:r,children:a,multiple:s,accept:u,name:g,form:j,resetRef:p,disabled:y,capture:v,inputProps:C,...b}=F("FileButton",ce,t),c=h.useRef(),A=()=>{var i;!y&&((i=c.current)==null||i.click())},f=i=>{r(s?Array.from(i.currentTarget.files):i.currentTarget.files[0]||null)};return J(p,()=>{c.current&&(c.current.value="")}),e.jsxs(e.Fragment,{children:[a({onClick:A,...b}),e.jsx("input",{style:{display:"none"},type:"file",accept:u,multiple:s,onChange:f,ref:T(l,c),name:g,form:j,capture:v,...C})]})});D.displayName="@mantine/core/FileButton";const ue=({value:t})=>e.jsx("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Array.isArray(t)?t.map(l=>l.name).join(", "):t==null?void 0:t.name}),pe={valueComponent:ue},k=W((t,l)=>{const r=F("FileInput",pe,t),{unstyled:a,vars:s,onChange:u,value:g,defaultValue:j,multiple:p,accept:y,name:v,form:C,valueComponent:b,clearable:c,clearButtonProps:A,readOnly:f,capture:P,fileInputProps:i,rightSection:E,size:R,placeholder:L,component:V,resetRef:O,classNames:S,styles:I,...z}=r,m=h.useRef(null),{resolvedClassNames:G,resolvedStyles:M}=le({classNames:S,styles:I,props:r}),[o,N]=re({value:g,defaultValue:j,onChange:u,finalValue:p?[]:null}),w=Array.isArray(o)?o.length!==0:o!==null,U=E||(c&&w&&!f?e.jsx(Y,{...A,variant:"subtle",onClick:()=>N(p?[]:null),size:R,unstyled:a}):null);h.useEffect(()=>{var x;(Array.isArray(o)&&o.length===0||o===null)&&((x=m.current)==null||x.call(m))},[o]);const H=b;return e.jsx(D,{onChange:N,multiple:p,accept:y,name:v,form:C,resetRef:T(m,O),disabled:f,capture:P,inputProps:i,children:x=>e.jsx(_,{component:V||"button",ref:l,rightSection:U,...x,...z,__staticSelector:"FileInput",multiline:!0,type:"button",pointer:!0,__stylesApiProps:r,unstyled:a,size:R,classNames:S,styles:I,children:w?e.jsx(H,{value:o}):e.jsx(ae.Placeholder,{__staticSelector:"FileInput",classNames:G,styles:M,children:L})})})});k.classes=_.classes;k.displayName="@mantine/core/FileInput";const de=k;function he(){$();const[t,l]=h.useState({firstName:"Henriette",lastName:"Jakobsen",email:"hrjakobsen@cphbusiness.dk",phone:"56 74 64 83",role:"Studerende",avatar:null,notifications:!0}),r=()=>{alert("Dine nye profil oplysninger er blevet gemt!"),console.log("Saved profile:",t)},a=s=>u=>{l({...t,[s]:u.target.value})};return e.jsxs(te,{size:"lg",style:{height:"100vh",display:"flex"},children:[e.jsx(B,{}),e.jsx(se,{style:{flex:1,height:"80%",justifyContent:"center",paddingTop:"2rem"},children:e.jsxs(q,{withBorder:!0,shadow:"md",p:30,radius:"md",style:{width:"364px",height:"710px",display:"flex",flexDirection:"column",justifyContent:"center"},children:[e.jsx(ne,{align:"left",children:"Profil Info"}),e.jsx(n,{h:"md"}),e.jsx(d,{label:"Navn",value:t.firstName,onChange:a("firstName"),radius:"xl"}),e.jsx(n,{h:"sm"}),e.jsx(d,{label:"Efternavn",value:t.lastName,onChange:a("lastName"),radius:"xl"}),e.jsx(n,{h:"sm"}),e.jsx(d,{label:"Telefon nr.",value:t.phone,onChange:a("phone"),radius:"xl"}),e.jsx(n,{h:"sm"}),e.jsx(d,{label:"Email",value:t.email,disabled:!0,radius:"xl"}),e.jsx(n,{h:"sm"}),e.jsx(d,{label:"Studerende, eller underviser",value:t.role,disabled:!0,radius:"xl"}),e.jsx(n,{h:"md"}),e.jsxs(K,{position:"center",spacing:"xs",children:[e.jsx(Q,{size:50,radius:"xl",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",alt:"Avatar"}),e.jsx(de,{placeholder:"UPLOAD",accept:"image/*",onChange:s=>l({...t,avatar:s?URL.createObjectURL(s):null}),radius:"xl",styles:{input:{"::placeholder":{color:"#fff"}}},onMouseEnter:s=>s.currentTarget.style.backgroundColor="#1098AD",onMouseLeave:s=>s.currentTarget.style.backgroundColor="#fff"})]}),e.jsx(n,{h:"md"}),e.jsx(X,{to:"/changepassword",children:e.jsx(oe,{style:{display:"block",textAlign:"left",color:"#1098AD"},children:"Skift Adgangskode"})}),e.jsx(n,{h:"md"}),e.jsx(ie,{label:"Vil gerne modtage notifikationer på email",checked:t.notifications,style:{color:"#1098AD"},onChange:s=>l({...t,notifications:s.target.checked})}),e.jsx(n,{h:"md"}),e.jsx(Z,{fullWidth:!0,onClick:r,color:"cyan",radius:"xl",style:{height:"33px"},children:"GEM OPDATERING"}),e.jsx(n,{h:"xs"})]})})]})}const Re=ee("/profilepage")({component:fe});function fe(){return e.jsxs("div",{style:{display:"flex",height:"100vh",width:"100%"},children:[e.jsxs("div",{style:{width:300,height:"100%"},children:[e.jsx(B,{})," "]}),e.jsx("div",{style:{flex:1,overflowY:"auto",padding:"2rem"},children:e.jsx(he,{})})]})}export{Re as Route};
