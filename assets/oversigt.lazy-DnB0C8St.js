import{p as C,u as N,r as g,a as k,j as s,b as c,d as B,g as E,G as I,T as F,B as D,C as G,c as L,e as P,S as i}from"./index-CpElu6S5.js";import{u as T}from"./useRouteContext-DfSxcwr2.js";import{u as _}from"./use-disclosure-D838tnUi.js";var j={root:"m_9e117634"};const z={},A=B((e,{radius:a,fit:o})=>({root:{"--image-radius":a===void 0?void 0:E(a),"--image-object-fit":o}})),l=C((e,a)=>{const o=N("Image",z,e),{classNames:b,className:h,style:f,styles:y,unstyled:v,vars:R,onError:t,src:r,radius:V,fit:q,fallbackSrc:m,mod:u,...d}=o,[w,p]=g.useState(!r);g.useEffect(()=>p(!r),[r]);const x=k({name:"Image",classes:j,props:o,className:h,style:f,classNames:b,styles:y,unstyled:v,vars:R,varsResolver:A});return w&&m?s.jsx(c,{component:"img",ref:a,src:m,...x("root"),onError:t,mod:["fallback",u],...d}):s.jsx(c,{component:"img",ref:a,...x("root"),src:r,onError:S=>{t==null||t(S),p(!0)},mod:u,...d})});l.classes=j;l.displayName="@mantine/core/Image";function n(e){const[a,{toggle:o}]=_(!1);return s.jsxs(c,{maw:1e3,mx:"auto",style:{border:"1px solid black",borderRadius:"10px"},children:[s.jsxs(I,{justify:"space-between",mb:5,children:[s.jsxs(F,{style:{marginLeft:"10px"},children:[e.number,". sal"]}),s.jsx(D,{onClick:o,style:{backgroundColor:"white",borderRadius:"10px",width:"93%",display:"flex",justifyContent:"end"},children:s.jsx("img",{style:{width:"20px",height:"20px"},src:"public/down-arrow.png"})})]}),s.jsx(G,{in:a,children:s.jsx(l,{radius:"md",src:e.image})})]})}const M=L("/oversigt")({component:O});function O(){const e=T({from:"/oversigt"});return console.log(e),s.jsx(s.Fragment,{children:s.jsxs("div",{className:"layout",children:[s.jsx("div",{className:"navbar",children:s.jsx(P,{})}),s.jsxs("div",{className:"main-content",children:[s.jsx(n,{number:1,image:"public/1sal.png"}),s.jsx(i,{h:"md"}),s.jsx(n,{number:2,image:"public/1sal.png"}),s.jsx(i,{h:"md"}),s.jsx(n,{number:3,image:"public/1sal.png"}),s.jsx(i,{h:"md"}),s.jsx(n,{number:4,image:"public/1sal.png"})]})]})})}export{M as Route};