import{r as S,u as E,j as o,B as P,g as de,a as F,f as U,b as G,U as ue,c as z,d as A,e as J,p as Y,h as R,i as H,k as pe,l as me,m as he,n as xe}from"./index-ByXTbHpl.js";import{u as be}from"./useRouteContext-CmlSdbSK.js";import{I as T,c as fe,u as ge,a as ve,C as ye,T as B,P as Ce}from"./TextInput-CF09OLR1.js";function K(e,r){return typeof e=="boolean"?e:r.autoContrast}var Q={root:"m_5f75b09e",body:"m_5f6e695e",labelWrapper:"m_d3ea56bb",label:"m_8ee546b8",description:"m_328f68c0",error:"m_8e8a99cc"};const ke=Q,X=S.forwardRef(({__staticSelector:e,__stylesApiProps:r,className:s,classNames:a,styles:c,unstyled:d,children:i,label:t,description:u,id:b,disabled:n,error:f,size:m,labelPosition:h="left",bodyElement:x="div",labelElement:p="label",variant:l,style:v,vars:y,mod:k,...C},_)=>{const g=E({name:e,props:r,className:s,style:v,classes:Q,classNames:a,styles:c,unstyled:d});return o.jsx(P,{...g("root"),ref:_,__vars:{"--label-fz":de(m),"--label-lh":F(m,"label-lh")},mod:[{"label-position":h},k],variant:l,size:m,...C,children:o.jsxs(P,{component:x,htmlFor:x==="label"?b:void 0,...g("body"),children:[i,o.jsxs("div",{...g("labelWrapper"),"data-disabled":n||void 0,children:[t&&o.jsx(P,{component:p,htmlFor:p==="label"?b:void 0,...g("label"),"data-disabled":n||void 0,children:t}),u&&o.jsx(T.Description,{size:m,__inheritStyles:!1,...g("description"),children:u}),f&&typeof f!="boolean"&&o.jsx(T.Error,{size:m,__inheritStyles:!1,...g("error"),children:f})]})]})})});X.displayName="@mantine/core/InlineInput";const Z=S.createContext(null),_e=Z.Provider,ee=()=>S.useContext(Z),[je,we]=fe();var oe={card:"m_26775b0a"};const Pe={withBorder:!0},Se=z((e,{radius:r})=>({card:{"--card-radius":A(r)}})),D=U((e,r)=>{const s=G("CheckboxCard",Pe,e),{classNames:a,className:c,style:d,styles:i,unstyled:t,vars:u,checked:b,mod:n,withBorder:f,value:m,onClick:h,...x}=s,p=E({name:"CheckboxCard",classes:oe,props:s,className:c,style:d,classNames:a,styles:i,unstyled:t,vars:u,varsResolver:Se,rootSelector:"card"}),l=ee(),v=typeof b=="boolean"?b:(l==null?void 0:l.value.includes(m||""))||!1;return o.jsx(je,{value:{checked:v},children:o.jsx(ue,{ref:r,mod:[{"with-border":f,checked:v},n],...p("card"),...x,role:"checkbox","aria-checked":v,onClick:y=>{h==null||h(y),l==null||l.onChange(m||"")}})})});D.displayName="@mantine/core/CheckboxCard";D.classes=oe;function Ne({children:e,role:r}){const s=ge();return s?o.jsx("div",{role:r,"aria-labelledby":s.labelId,"aria-describedby":s.describedBy,children:e}):o.jsx(o.Fragment,{children:e})}const Ie={},q=U((e,r)=>{const{value:s,defaultValue:a,onChange:c,size:d,wrapperProps:i,children:t,readOnly:u,...b}=G("CheckboxGroup",Ie,e),[n,f]=ve({value:s,defaultValue:a,finalValue:[],onChange:c}),m=h=>{const x=typeof h=="string"?h:h.currentTarget.value;!u&&f(n.includes(x)?n.filter(p=>p!==x):[...n,x])};return o.jsx(_e,{value:{value:n,onChange:m,size:d},children:o.jsx(T.Wrapper,{size:d,ref:r,...i,...b,labelElement:"div",__staticSelector:"CheckboxGroup",children:o.jsx(Ne,{role:"group",children:t})})})});q.classes=T.Wrapper.classes;q.displayName="@mantine/core/CheckboxGroup";function Re({size:e,style:r,...s}){const a=e!==void 0?{width:J(e),height:J(e),...r}:r;return o.jsx("svg",{viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:a,"aria-hidden":!0,...s,children:o.jsx("path",{d:"M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}function se({indeterminate:e,...r}){return e?o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 6","aria-hidden":!0,...r,children:o.jsx("rect",{width:"32",height:"6",fill:"currentColor",rx:"3"})}):o.jsx(Re,{...r})}var re={indicator:"m_5e5256ee",icon:"m_1b1c543a","indicator--outline":"m_76e20374"};const Te={icon:se},Ee=z((e,{radius:r,color:s,size:a,iconColor:c,variant:d,autoContrast:i})=>{const t=Y({color:s||e.primaryColor,theme:e}),u=t.isThemeColor&&t.shade===void 0?`var(--mantine-color-${t.color}-outline)`:t.color;return{indicator:{"--checkbox-size":F(a,"checkbox-size"),"--checkbox-radius":r===void 0?void 0:A(r),"--checkbox-color":d==="outline"?u:R(s,e),"--checkbox-icon-color":c?R(c,e):K(i,e)?H({color:s,theme:e,autoContrast:i}):void 0}}}),V=U((e,r)=>{const s=G("CheckboxIndicator",Te,e),{classNames:a,className:c,style:d,styles:i,unstyled:t,vars:u,icon:b,indeterminate:n,radius:f,color:m,iconColor:h,autoContrast:x,checked:p,mod:l,variant:v,disabled:y,...k}=s,C=b,_=E({name:"CheckboxIndicator",classes:re,props:s,className:c,style:d,classNames:a,styles:i,unstyled:t,vars:u,varsResolver:Ee,rootSelector:"indicator"}),g=we(),$=typeof p=="boolean"||typeof n=="boolean"?p||n:(g==null?void 0:g.checked)||!1;return o.jsx(P,{ref:r,..._("indicator",{variant:v}),variant:v,mod:[{checked:$,disabled:y},l],...k,children:o.jsx(C,{indeterminate:n,..._("icon")})})});V.displayName="@mantine/core/CheckboxIndicator";V.classes=re;var te={root:"m_bf2d988c",inner:"m_26062bec",input:"m_26063560",icon:"m_bf295423","input--outline":"m_215c4542"};const Ue={labelPosition:"right",icon:se},Ge=z((e,{radius:r,color:s,size:a,iconColor:c,variant:d,autoContrast:i})=>{const t=Y({color:s||e.primaryColor,theme:e}),u=t.isThemeColor&&t.shade===void 0?`var(--mantine-color-${t.color}-outline)`:t.color;return{root:{"--checkbox-size":F(a,"checkbox-size"),"--checkbox-radius":r===void 0?void 0:A(r),"--checkbox-color":d==="outline"?u:R(s,e),"--checkbox-icon-color":c?R(c,e):K(i,e)?H({color:s,theme:e,autoContrast:i}):void 0}}}),j=U((e,r)=>{const s=G("Checkbox",Ue,e),{classNames:a,className:c,style:d,styles:i,unstyled:t,vars:u,color:b,label:n,id:f,size:m,radius:h,wrapperProps:x,checked:p,labelPosition:l,description:v,error:y,disabled:k,variant:C,indeterminate:_,icon:g,rootRef:$,iconColor:Ae,onChange:N,autoContrast:De,mod:ae,...ne}=s,w=ee(),ce=m||(w==null?void 0:w.size),ie=g,I=E({name:"Checkbox",props:s,classes:te,className:c,style:d,classNames:a,styles:i,unstyled:t,vars:u,varsResolver:Ge}),{styleProps:le,rest:M}=pe(ne),W=me(f),L=w?{checked:w.value.includes(M.value),onChange:O=>{w.onChange(O),N==null||N(O)}}:{};return o.jsx(X,{...I("root"),__staticSelector:"Checkbox",__stylesApiProps:s,id:W,size:ce,labelPosition:l,label:n,description:v,error:y,disabled:k,classNames:a,styles:i,unstyled:t,"data-checked":L.checked||p||void 0,variant:C,ref:$,mod:ae,...le,...x,children:o.jsxs(P,{...I("inner"),mod:{"data-label-position":l},children:[o.jsx(P,{component:"input",id:W,ref:r,checked:p,disabled:k,mod:{error:!!y,indeterminate:_},...I("input",{focusable:!0,variant:C}),onChange:N,...M,...L,type:"checkbox"}),o.jsx(ie,{indeterminate:_,...I("icon")})]})})});j.classes={...te,...ke};j.displayName="@mantine/core/Checkbox";j.Group=q;j.Indicator=V;j.Card=D;const $e="_container_8uoh1_1",Be={container:$e};function Fe(){const e=be({from:"/signup"}),[r,s]=S.useState(""),[a,c]=S.useState("");async function d(i){i.preventDefault();const t=new FormData(document.querySelector("#signup-form")),u=t.get("firstName"),b=t.get("lastName"),n=t.get("email"),f=t.get("password"),m=t.get("phoneNumber"),h=t.get("notifyEmail")==="on",x=t.get("notifyText")==="on";s(""),c("");try{const{data:p,error:l}=await e.supabase.from("users").select("email").eq("email",n).single();if(l&&l.code!=="PGRST116"){console.error("Error checking existing user:",l.message),s("An error occurred while checking user availability. Please try again.");return}if(p){s("This email is already registered. Please log in or use a different email.");return}const{data:v,error:y}=await e.supabase.auth.signUp({email:n,password:f});if(y){console.error("Sign-up error:",y.message),s("Sign-up failed. Please try again.");return}const{data:k,error:C}=await e.supabase.from("users").insert({first_name:u,last_name:b,email:n,phone_number:m||null,role:"student",email_notifications:h,sms_notifications:x});if(C){console.error("Error saving user details:",C.message),s("Unable to save user details. Please try again.");return}c("Account created successfully! Please log in.")}catch(p){console.error("Unexpected error during sign-up:",p.message),s("An unexpected error occurred. Please try again.")}}return o.jsx(ye,{className:Be.container,children:o.jsxs("form",{onSubmit:d,id:"signup-form",children:[o.jsx(B,{label:"First Name",placeholder:"John",name:"firstName",required:!0}),o.jsx(B,{label:"Last Name",placeholder:"Doe",name:"lastName",required:!0}),o.jsx(B,{label:"Email",placeholder:"email@gmail.com",name:"email",required:!0}),o.jsx(Ce,{label:"Password",placeholder:"Your password",name:"password",required:!0}),o.jsx(j,{label:"Notify me via email",name:"notifyEmail"}),o.jsx(j,{label:"Notify me via text",name:"notifyText"}),r&&o.jsx("div",{style:{color:"red",marginTop:"10px"},children:r}),a&&o.jsx("div",{style:{color:"green",marginTop:"10px"},children:a}),o.jsx(he,{type:"submit",children:"Sign Up"})]})})}const We=xe("/signup")({component:ze});function ze(){return o.jsx("div",{children:o.jsx(Fe,{})})}export{We as Route};