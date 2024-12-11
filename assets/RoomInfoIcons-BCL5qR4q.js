import{r as h,f as A,a as V,j as n,l as re,k as oe,n as ne,$ as ie,B as P,M as se,G as w}from"./index-heMRpDVZ.js";import{T as I}from"./Title-h_vlcakp.js";import{T as y}from"./TextInput-By_JN1YO.js";import{T as p}from"./Text-B0-tc1iv.js";import{I as D}from"./InputBase-BoCQDB5G.js";import{P as ae,D as le,b as de}from"./NavbarNested-Di5WtgEb.js";var ce={};function ue(){return typeof process<"u"&&ce?"production":"development"}function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)({}).hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},L.apply(null,arguments)}function me(e,t){if(e==null)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.includes(o))continue;r[o]=e[o]}return r}var ge=h.useLayoutEffect,he=function(t){var r=h.useRef(t);return ge(function(){r.current=t}),r},F=function(t,r){if(typeof t=="function"){t(r);return}t.current=r},fe=function(t,r){var o=h.useRef();return h.useCallback(function(i){t.current=i,o.current&&F(o.current,null),o.current=r,r&&F(r,i)},[r])},B={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0",display:"block"},pe=function(t){Object.keys(B).forEach(function(r){t.style.setProperty(r,B[r],"important")})},N=pe,g=null,O=function(t,r){var o=t.scrollHeight;return r.sizingStyle.boxSizing==="border-box"?o+r.borderSize:o-r.paddingSize};function be(e,t,r,o){r===void 0&&(r=1),o===void 0&&(o=1/0),g||(g=document.createElement("textarea"),g.setAttribute("tabindex","-1"),g.setAttribute("aria-hidden","true"),N(g)),g.parentNode===null&&document.body.appendChild(g);var i=e.paddingSize,a=e.borderSize,l=e.sizingStyle,d=l.boxSizing;Object.keys(l).forEach(function(b){var v=b;g.style[v]=l[v]}),N(g),g.value=t;var c=O(g,e);g.value=t,c=O(g,e),g.value="x";var f=g.scrollHeight-i,s=f*r;d==="border-box"&&(s=s+i+a),c=Math.max(s,c);var u=f*o;return d==="border-box"&&(u=u+i+a),c=Math.min(u,c),[c,f]}var W=function(){},ve=function(t,r){return t.reduce(function(o,i){return o[i]=r[i],o},{})},xe=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak","wordSpacing","scrollbarGutter"],ye=!!document.documentElement.currentStyle,ke=function(t){var r=window.getComputedStyle(t);if(r===null)return null;var o=ve(xe,r),i=o.boxSizing;if(i==="")return null;ye&&i==="border-box"&&(o.width=parseFloat(o.width)+parseFloat(o.borderRightWidth)+parseFloat(o.borderLeftWidth)+parseFloat(o.paddingRight)+parseFloat(o.paddingLeft)+"px");var a=parseFloat(o.paddingBottom)+parseFloat(o.paddingTop),l=parseFloat(o.borderBottomWidth)+parseFloat(o.borderTopWidth);return{sizingStyle:o,paddingSize:a,borderSize:l}},Se=ke;function M(e,t,r){var o=he(r);h.useLayoutEffect(function(){var i=function(l){return o.current(l)};if(e)return e.addEventListener(t,i),function(){return e.removeEventListener(t,i)}},[])}var je=function(t){M(window,"resize",t)},_e=function(t){M(document.fonts,"loadingdone",t)},we=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],Re=function(t,r){var o=t.cacheMeasurements,i=t.maxRows,a=t.minRows,l=t.onChange,d=l===void 0?W:l,c=t.onHeightChange,f=c===void 0?W:c,s=me(t,we),u=s.value!==void 0,b=h.useRef(null),v=fe(b,r),S=h.useRef(0),R=h.useRef(),j=function(){var x=b.current,z=o&&R.current?R.current:Se(x);if(z){R.current=z;var E=be(z,x.value||x.placeholder||"x",a,i),_=E[0],te=E[1];S.current!==_&&(S.current=_,x.style.setProperty("height",_+"px","important"),f(_,{rowHeight:te}))}},Q=function(x){u||j(),d(x)};return h.useLayoutEffect(j),je(j),_e(j),h.createElement("textarea",L({},s,{onChange:Q,ref:v}))},ze=h.forwardRef(Re);const Le={},T=A((e,t)=>{const{autosize:r,maxRows:o,minRows:i,__staticSelector:a,resize:l,...d}=V("Textarea",Le,e),c=r&&ue()!=="test",f=c?{maxRows:o,minRows:i}:{};return n.jsx(D,{component:c?ze:"textarea",ref:t,...d,__staticSelector:a||"Textarea",multiline:!0,"data-no-overflow":r&&o===void 0||void 0,__vars:{"--input-resize":l},...f})});T.classes=D.classes;T.displayName="@mantine/core/Textarea";var K={root:"m_6d731127"};const Te={gap:"md",align:"stretch",justify:"flex-start"},Ce=ne((e,{gap:t,align:r,justify:o})=>({root:{"--stack-gap":ie(t),"--stack-align":r,"--stack-justify":o}})),C=A((e,t)=>{const r=V("Stack",Te,e),{classNames:o,className:i,style:a,styles:l,unstyled:d,vars:c,align:f,justify:s,gap:u,variant:b,...v}=r,S=re({name:"Stack",props:r,classes:K,className:i,style:a,classNames:o,styles:l,unstyled:d,vars:c,varsResolver:Ce});return n.jsx(oe,{ref:t,...S("root"),variant:b,...v})});C.classes=K;C.displayName="@mantine/core/Stack";class k{constructor(t=0,r="Network Error"){this.status=t,this.text=r}}const He=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},m={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:He()},H=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Ee=(e,t="https://api.emailjs.com")=>{if(!e)return;const r=H(e);m.publicKey=r.publicKey,m.blockHeadless=r.blockHeadless,m.storageProvider=r.storageProvider,m.blockList=r.blockList,m.limitRate=r.limitRate,m.origin=r.origin||t},q=async(e,t,r={})=>{const o=await fetch(m.origin+e,{method:"POST",headers:r,body:t}),i=await o.text(),a=new k(o.status,i);if(o.ok)return a;throw a},$=(e,t,r)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Pe=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},G=e=>e.webdriver||!e.languages||e.languages.length===0,U=()=>new k(451,"Unavailable For Headless Browser"),Ie=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},Fe=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},Be=(e,t)=>e instanceof FormData?e.get(t):e[t],J=(e,t)=>{if(Fe(e))return!1;Ie(e.list,e.watchVariable);const r=Be(t,e.watchVariable);return typeof r!="string"?!1:e.list.includes(r)},Y=()=>new k(403,"Forbidden"),Ne=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},Oe=async(e,t,r)=>{const o=Number(await r.get(e)||0);return t-Date.now()+o},X=async(e,t,r)=>{if(!t.throttle||!r)return!1;Ne(t.throttle,t.id);const o=t.id||e;return await Oe(o,t.throttle,r)>0?!0:(await r.set(o,Date.now().toString()),!1)},Z=()=>new k(429,"Too Many Requests"),We=async(e,t,r,o)=>{const i=H(o),a=i.publicKey||m.publicKey,l=i.blockHeadless||m.blockHeadless,d=i.storageProvider||m.storageProvider,c={...m.blockList,...i.blockList},f={...m.limitRate,...i.limitRate};return l&&G(navigator)?Promise.reject(U()):($(a,e,t),Pe(r),r&&J(c,r)?Promise.reject(Y()):await X(location.pathname,f,d)?Promise.reject(Z()):q("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:a,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"}))},Ae=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Ve=e=>typeof e=="string"?document.querySelector(e):e,De=async(e,t,r,o)=>{const i=H(o),a=i.publicKey||m.publicKey,l=i.blockHeadless||m.blockHeadless,d=m.storageProvider||i.storageProvider,c={...m.blockList,...i.blockList},f={...m.limitRate,...i.limitRate};if(l&&G(navigator))return Promise.reject(U());const s=Ve(r);$(a,e,t),Ae(s);const u=new FormData(s);return J(c,u)?Promise.reject(Y()):await X(location.pathname,f,d)?Promise.reject(Z()):(u.append("lib_version","4.4.1"),u.append("service_id",e),u.append("template_id",t),u.append("user_id",a),q("/api/v1.0/email/send-form",u))},Me={init:Ee,send:We,sendForm:De,EmailJSResponseStatus:k},Ye=()=>{const e=h.useRef(),[t,r]=h.useState({to_name:"",booking_responsible:"",user_email:"",user_phone:"",booking_date:"",booking_time:"",message:""}),[o,i]=h.useState({}),[a,l]=h.useState(!1),d=s=>{const{name:u,value:b}=s.target;r({...t,[u]:b}),i({...o,[u]:""})},c=()=>{const s={};return t.to_name.trim()||(s.to_name="Indtast Navn"),t.booking_responsible.trim()||(s.booking_responsible="Indtast navn på ansvarlig for booking"),t.user_email.trim()||(s.user_email="Indtast email"),t.user_phone.trim()||(s.user_phone="Indtast telefonnummer"),t.booking_date.trim()||(s.booking_date="Vælg en dato"),t.booking_time.trim()||(s.booking_time="Indtast tidspunkt"),t.message.trim()||(s.message="Indtast beskrivelse"),i(s),Object.keys(s).length===0},f=s=>{s.preventDefault(),c()&&Me.sendForm("service_3s435am","template_hpf5ept",e.current,"cfybL9CgdNoqUBI0-").then(()=>{console.log("SUCCESS!"),l(!0),r({to_name:"",booking_responsible:"",user_email:"",user_phone:"",booking_date:"",booking_time:"",message:""})},u=>{console.log("FAILED...",u.text)})};return n.jsxs("div",{style:{maxWidth:500,margin:"0 auto",padding:"1rem"},children:[n.jsx(I,{order:2,style:{marginBottom:"1rem"},children:"Send forespørgsel"}),n.jsx("form",{ref:e,onSubmit:f,children:n.jsxs(C,{spacing:"md",children:[n.jsxs("div",{children:[n.jsx(y,{label:"Navn",placeholder:"Indtast dit navn",radius:"xl",style:{backgroundColor:"white"},name:"to_name",value:t.to_name,onChange:d}),o.to_name&&n.jsx(p,{color:"red",size:"sm",children:o.to_name})]}),n.jsxs("div",{children:[n.jsx(y,{label:"Ansvarlig for booking",placeholder:"Hvem står for bookingen?",radius:"xl",style:{backgroundColor:"white"},name:"booking_responsible",value:t.booking_responsible,onChange:d}),o.booking_responsible&&n.jsx(p,{color:"red",size:"sm",children:o.booking_responsible})]}),n.jsxs("div",{children:[n.jsx(y,{label:"Email",placeholder:"Indtast din email",type:"email",radius:"xl",style:{backgroundColor:"white"},name:"user_email",value:t.user_email,onChange:d}),o.user_email&&n.jsx(p,{color:"red",size:"sm",children:o.user_email})]}),n.jsxs("div",{children:[n.jsx(y,{label:"Tlf",placeholder:"Indtast dit telefonnummer",type:"tel",radius:"xl",style:{backgroundColor:"white"},name:"user_phone",value:t.user_phone,onChange:d}),o.user_phone&&n.jsx(p,{color:"red",size:"sm",children:o.user_phone})]}),n.jsxs("div",{children:[n.jsx(y,{label:"Dato",placeholder:"Vælg dato",type:"date",radius:"xl",style:{backgroundColor:"white"},name:"booking_date",value:t.booking_date,onChange:d}),o.booking_date&&n.jsx(p,{color:"red",size:"sm",children:o.booking_date})]}),n.jsxs("div",{children:[n.jsx(y,{label:"Tidsrum",placeholder:"Indtast tidsrum (eks. 10:00-12:00)",radius:"xl",style:{backgroundColor:"white"},name:"booking_time",value:t.booking_time,onChange:d}),o.booking_time&&n.jsx(p,{color:"red",size:"sm",children:o.booking_time})]}),n.jsxs("div",{children:[n.jsx(T,{label:"Beskrivelse",placeholder:"Skriv om du vil låne auditorium, medialab eller makerlab og beskriv hvorfor.",radius:"md",style:{backgroundColor:"white"},name:"message",value:t.message,onChange:d}),o.message&&n.jsx(p,{color:"red",size:"sm",children:o.message})]}),n.jsx(P,{fullWidth:!0,radius:"xl",type:"submit",style:{backgroundColor:"#1098AD"},children:"SEND FORESPØRGSEL"})]})}),n.jsx(se,{opened:a,onClose:()=>l(!1),size:"md",radius:"lg",centered:!0,padding:"xl",withCloseButton:!1,children:n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("img",{src:"/booking/public/checkmark.jpg",width:40}),n.jsx(I,{order:3,style:{marginBottom:"1rem"},children:"Forespørgsel sendt!"}),n.jsx(P,{onClick:()=>l(!1),radius:"xl",children:"Luk"})]})})]})},Xe=()=>n.jsx("div",{style:{padding:"1rem",borderRadius:"8px",backgroundColor:"#f8f9fa",marginBottom:"1rem",border:"1px solid #dee2e6",display:"flex",alignItems:"center"},children:n.jsxs(w,{gap:"xl",align:"center",children:[n.jsxs(w,{gap:"xs",align:"center",children:[" ",n.jsx(ae,{size:20}),n.jsx(p,{children:"2-8 pers."})]}),n.jsxs(w,{gap:"xs",align:"center",children:[" ",n.jsx(le,{size:20}),n.jsx(p,{children:"Skærm"})]}),n.jsxs(w,{gap:"xs",align:"center",children:[" ",n.jsx(de,{size:20}),n.jsx(p,{children:"Tavle"})]})]})});export{Xe as R,C as S,Ye as a};
