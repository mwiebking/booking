import{r as u,f as W,u as P,j as a,d as $,o as D,h as G,J as V,B as Y,V as z,a3 as J,T as w,a4 as U,a5 as X}from"./index-CqdFa7Jr.js";import{T as Z}from"./Title-DChkIY1j.js";import{T as m}from"./TextInput-Bb0iG8NP.js";import{I as B}from"./InputBase-Cka7OIO7.js";var K={};function Q(){return typeof process<"u"&&K?"production":"development"}function k(){return k=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)({}).hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},k.apply(null,arguments)}function ee(n,t){if(n==null)return{};var r={};for(var e in n)if({}.hasOwnProperty.call(n,e)){if(t.includes(e))continue;r[e]=n[e]}return r}var te=u.useLayoutEffect,re=function(t){var r=u.useRef(t);return te(function(){r.current=t}),r},L=function(t,r){if(typeof t=="function"){t(r);return}t.current=r},ne=function(t,r){var e=u.useRef();return u.useCallback(function(i){t.current=i,e.current&&L(e.current,null),e.current=r,r&&L(r,i)},[r])},H={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0",display:"block"},ae=function(t){Object.keys(H).forEach(function(r){t.style.setProperty(r,H[r],"important")})},I=ae,o=null,_=function(t,r){var e=t.scrollHeight;return r.sizingStyle.boxSizing==="border-box"?e+r.borderSize:e-r.paddingSize};function ie(n,t,r,e){r===void 0&&(r=1),e===void 0&&(e=1/0),o||(o=document.createElement("textarea"),o.setAttribute("tabindex","-1"),o.setAttribute("aria-hidden","true"),I(o)),o.parentNode===null&&document.body.appendChild(o);var i=n.paddingSize,l=n.borderSize,s=n.sizingStyle,c=s.boxSizing;Object.keys(s).forEach(function(p){var v=p;o.style[v]=s[v]}),I(o),o.value=t;var d=_(o,n);o.value=t,d=_(o,n),o.value="x";var g=o.scrollHeight-i,f=g*r;c==="border-box"&&(f=f+i+l),d=Math.max(f,d);var h=g*e;return c==="border-box"&&(h=h+i+l),d=Math.min(h,d),[d,g]}var F=function(){},oe=function(t,r){return t.reduce(function(e,i){return e[i]=r[i],e},{})},se=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak","wordSpacing","scrollbarGutter"],de=!!document.documentElement.currentStyle,le=function(t){var r=window.getComputedStyle(t);if(r===null)return null;var e=oe(se,r),i=e.boxSizing;if(i==="")return null;de&&i==="border-box"&&(e.width=parseFloat(e.width)+parseFloat(e.borderRightWidth)+parseFloat(e.borderLeftWidth)+parseFloat(e.paddingRight)+parseFloat(e.paddingLeft)+"px");var l=parseFloat(e.paddingBottom)+parseFloat(e.paddingTop),s=parseFloat(e.borderBottomWidth)+parseFloat(e.borderTopWidth);return{sizingStyle:e,paddingSize:l,borderSize:s}},ue=le;function N(n,t,r){var e=re(r);u.useLayoutEffect(function(){var i=function(s){return e.current(s)};if(n)return n.addEventListener(t,i),function(){return n.removeEventListener(t,i)}},[])}var ce=function(t){N(window,"resize",t)},ge=function(t){N(document.fonts,"loadingdone",t)},fe=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],he=function(t,r){var e=t.cacheMeasurements,i=t.maxRows,l=t.minRows,s=t.onChange,c=s===void 0?F:s,d=t.onHeightChange,g=d===void 0?F:d,f=ee(t,fe),h=f.value!==void 0,p=u.useRef(null),v=ne(p,r),b=u.useRef(0),j=u.useRef(),y=function(){var x=p.current,R=e&&j.current?j.current:ue(x);if(R){j.current=R;var E=ie(R,x.value||x.placeholder||"x",l,i),S=E[0],M=E[1];b.current!==S&&(b.current=S,x.style.setProperty("height",S+"px","important"),g(S,{rowHeight:M}))}},q=function(x){h||y(),c(x)};return u.useLayoutEffect(y),ce(y),ge(y),u.createElement("textarea",k({},f,{onChange:q,ref:v}))},pe=u.forwardRef(he);const ve={},C=W((n,t)=>{const{autosize:r,maxRows:e,minRows:i,__staticSelector:l,resize:s,...c}=P("Textarea",ve,n),d=r&&Q()!=="test",g=d?{maxRows:e,minRows:i}:{};return a.jsx(B,{component:d?pe:"textarea",ref:t,...c,__staticSelector:l||"Textarea",multiline:!0,"data-no-overflow":r&&e===void 0||void 0,__vars:{"--input-resize":s},...g})});C.classes=B.classes;C.displayName="@mantine/core/Textarea";var A={root:"m_6d731127"};const xe={gap:"md",align:"stretch",justify:"flex-start"},me=G((n,{gap:t,align:r,justify:e})=>({root:{"--stack-gap":V(t),"--stack-align":r,"--stack-justify":e}})),T=W((n,t)=>{const r=P("Stack",xe,n),{classNames:e,className:i,style:l,styles:s,unstyled:c,vars:d,align:g,justify:f,gap:h,variant:p,...v}=r,b=$({name:"Stack",props:r,classes:A,className:i,style:l,classNames:e,styles:s,unstyled:c,vars:d,varsResolver:me});return a.jsx(D,{ref:t,...b("root"),variant:p,...v})});T.classes=A;T.displayName="@mantine/core/Stack";const je=()=>a.jsxs("div",{style:{maxWidth:500,margin:"0 auto",padding:"1rem"},children:[a.jsx(Z,{order:2,style:{marginBottom:"1rem"},children:"Send forespørgsel"}),a.jsxs(T,{spacing:"md",children:[a.jsx(m,{label:"Navn",placeholder:"Indtast dit navn",required:!0,radius:"xl",style:{backgroundColor:"white"}}),a.jsx(m,{label:"Ansvarlig for booking",placeholder:"Hvem står for bookingen?",required:!0,radius:"xl",style:{backgroundColor:"white"}}),a.jsx(m,{label:"Email",placeholder:"Indtast din email",type:"email",required:!0,radius:"xl",style:{backgroundColor:"white"}}),a.jsx(m,{label:"Tlf",placeholder:"Indtast dit telefonnummer",type:"tel",required:!0,radius:"xl",style:{backgroundColor:"white"}}),a.jsx(m,{label:"Dato",placeholder:"Vælg dato",type:"date",required:!0,radius:"xl",style:{backgroundColor:"white"}}),a.jsx(m,{label:"Tidsrum",placeholder:"Indtast tidsrum",required:!0,radius:"xl",style:{backgroundColor:"white"}}),a.jsx(C,{label:"",placeholder:"Hvad ønsker du at bruge Medialab til?",required:!0,radius:"md",style:{backgroundColor:"white"}}),a.jsx(Y,{fullWidth:!0,radius:"xl",style:{backgroundColor:"#1098AD"},children:"SEND FORESPØRGSEL"})]})]}),Re=()=>a.jsx("div",{style:{padding:"1rem",borderRadius:"8px",backgroundColor:"#f8f9fa",marginBottom:"1rem",border:"1px solid #dee2e6",display:"flex",alignItems:"center"},children:a.jsxs(z,{gap:"xl",align:"center",children:[a.jsxs(z,{gap:"xs",align:"center",children:[" ",a.jsx(J,{size:20}),a.jsx(w,{children:"2-8 pers."})]}),a.jsxs(z,{gap:"xs",align:"center",children:[" ",a.jsx(U,{size:20}),a.jsx(w,{children:"Skærm"})]}),a.jsxs(z,{gap:"xs",align:"center",children:[" ",a.jsx(X,{size:20}),a.jsx(w,{children:"Tavle"})]})]})});export{Re as R,je as S,T as a};