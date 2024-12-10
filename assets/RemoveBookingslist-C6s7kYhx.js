import{r as a,w as v,j as e,G as l,B as f,M as w}from"./index-D1ceAlsE.js";import{C as u,a as y,P as k,D as c,b as z}from"./NavbarNested-Cd_lWc7X.js";import{C as P}from"./FindRoomBar-tDlzazUe.js";import{T as o}from"./Text-w8Xh0Mp0.js";import{S as g}from"./Space-BCcBNfoA.js";import{D as S}from"./Divider-C9-Q-sCc.js";function A(){var p;const[C,d]=a.useState(!1),[m,h]=a.useState([]),[i,B]=a.useState(null),t=v(),x=t.auth.getUser();console.log("Logged in user email:",x==null?void 0:x.email),a.useEffect(()=>{(async()=>{try{const{data:r,error:n}=await t.from("bookings").select("*");n?(console.error("Error fetching bookings:",n.message),alert("Failed to fetch bookings. Please try again.")):h(r)}catch(r){console.error("Unexpected error:",r),alert("An unexpected error occurred. Please try again.")}})()},[t]);const b=async s=>{try{const{error:r}=await t.from("bookings").delete().eq("id",s);r?(console.error("Error canceling booking:",r.message),alert("Failed to cancel the booking. Please try again.")):(h(n=>n.filter(j=>j.id!==s)),d(!1),alert("Booking successfully canceled."))}catch(r){console.error("Unexpected error:",r),alert("An unexpected error occurred. Please try again.")}};return e.jsxs(e.Fragment,{children:[m.length>0?m.map(s=>{var r;return e.jsxs(P,{shadow:"sm",padding:"lg",radius:"lg",withBorder:!0,children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(l,{justify:"left",mb:"xs",children:e.jsx(o,{fw:600,children:s.room_name})}),e.jsxs(l,{justify:"right",mb:"xs",children:[e.jsx(u,{size:20,color:"orange"}),e.jsx(o,{size:"sm",children:s.time_slot}),e.jsx(y,{size:20,color:"orange"}),e.jsx(o,{size:"sm",children:s.date})]})]}),e.jsx(g,{h:"xl"}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsxs(l,{gap:"xl",align:"start",children:[e.jsxs(l,{gap:"xs",align:"center",children:[e.jsx(k,{size:20}),e.jsx(o,{children:s.capacity})]}),(r=s.features)==null?void 0:r.split(",").map((n,j)=>e.jsxs(l,{gap:"xs",align:"center",children:[n==="Skærm"&&e.jsx(c,{size:20}),n==="Projektor"&&e.jsx(c,{size:20}),n==="Tavle"&&e.jsx(z,{size:20}),e.jsx(o,{children:n})]},j))]}),e.jsx(f,{color:"#373A40",radius:"xl",onClick:()=>{B(s),d(!0)},children:"Aflys"})]})]},s.id)}):e.jsx(o,{children:"No bookings found."}),e.jsx(w,{opened:C,onClose:()=>d(!1),size:"lg",radius:"lg",centered:!0,children:i&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(o,{fw:600,children:i.room_name}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(u,{size:20,color:"orange"}),e.jsx(o,{size:"sm",children:i.time_slot}),e.jsx(y,{size:20,color:"orange"}),e.jsx(o,{size:"sm",children:i.date})]})]}),e.jsx(g,{h:"md"}),e.jsx(S,{orientation:"horizontal"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(k,{size:20}),e.jsx(o,{size:"sm",children:i.capacity}),(p=i.features)==null?void 0:p.split(",").map((s,r)=>e.jsxs(l,{gap:"xs",align:"center",children:[s==="Skærm"&&e.jsx(c,{size:20}),s==="Projektor"&&e.jsx(c,{size:20}),s==="Tavle"&&e.jsx(z,{size:20}),e.jsx(o,{children:s})]},r))]}),e.jsx(g,{h:"md"}),e.jsx(f,{fullWidth:!0,color:"#373A40",mt:"lg",radius:"xl",onClick:()=>b(i.id),children:"Aflys booking"})]})})]})}function _(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"start",style:{marginTop:"-10px"},children:"Mine Bookinger"}),e.jsx(A,{})]})}export{_ as M};
