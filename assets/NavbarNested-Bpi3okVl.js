import{a3 as e1,N as h1,f as R,a as b,j as i,k as x,E as s1,a4 as l1,x as u,a5 as j,_ as n1,a6 as o1,h as a1,a7 as C1,a8 as u1,p as c1,r as c,a9 as v1,O as g1,Y as m1,l as S,n as G,y as w1,o as x1,s as b1,U as V1,G as j1}from"./index-DUMZagE2.js";import{L as i1}from"./link-BvT_p44g.js";import{u as R1}from"./useRouteContext-CzetFr9I.js";import{T as r1}from"./Text-DGtnVWzj.js";function F(o,t){return o in t?e1(t[o]):e1(o)}function t1(o,t){const r=o.map(e=>({value:e,px:F(e,t)}));return r.sort((e,s)=>e.px-s.px),r}const[L1,L]=h1("AppShell was not found in tree");var V={root:"m_89ab340",navbar:"m_45252eee",aside:"m_9cdde9a",header:"m_3b16f56b",main:"m_8983817",footer:"m_3840c879",section:"m_6dcfc7c7"};const H1={},y=R((o,t)=>{const r=b("AppShellAside",H1,o),{classNames:e,className:s,style:l,styles:a,unstyled:h,vars:d,withBorder:p,zIndex:f,mod:n,...v}=r,C=L();return C.disabled?null:i.jsx(x,{component:"aside",ref:t,mod:[{"with-border":p??C.withBorder},n],...C.getStyles("aside",{className:s,classNames:e,styles:a,style:l}),...v,__vars:{"--app-shell-aside-z-index":`calc(${f??C.zIndex} + 1)`}})});y.classes=V;y.displayName="@mantine/core/AppShellAside";const Z1={},D=R((o,t)=>{var g;const r=b("AppShellFooter",Z1,o),{classNames:e,className:s,style:l,styles:a,unstyled:h,vars:d,withBorder:p,zIndex:f,mod:n,...v}=r,C=L();return C.disabled?null:i.jsx(x,{component:"footer",ref:t,mod:[{"with-border":p??C.withBorder},n],...C.getStyles("footer",{className:s1({[l1.classNames.zeroRight]:C.offsetScrollbars},s),classNames:e,styles:a,style:l}),...v,__vars:{"--app-shell-footer-z-index":(g=f??C.zIndex)==null?void 0:g.toString()}})});D.classes=V;D.displayName="@mantine/core/AppShellFooter";const _1={},U=R((o,t)=>{var g;const r=b("AppShellHeader",_1,o),{classNames:e,className:s,style:l,styles:a,unstyled:h,vars:d,withBorder:p,zIndex:f,mod:n,...v}=r,C=L();return C.disabled?null:i.jsx(x,{component:"header",ref:t,mod:[{"with-border":p??C.withBorder},n],...C.getStyles("header",{className:s1({[l1.classNames.zeroRight]:C.offsetScrollbars},s),classNames:e,styles:a,style:l}),...v,__vars:{"--app-shell-header-z-index":(g=f??C.zIndex)==null?void 0:g.toString()}})});U.classes=V;U.displayName="@mantine/core/AppShellHeader";const k1={},W=R((o,t)=>{const r=b("AppShellMain",k1,o),{classNames:e,className:s,style:l,styles:a,vars:h,...d}=r,p=L();return i.jsx(x,{component:"main",ref:t,...p.getStyles("main",{className:s,style:l,classNames:e,styles:a}),...d})});W.classes=V;W.displayName="@mantine/core/AppShellMain";function A(o){return typeof o=="object"?o.base:o}function N(o){const t=typeof o=="object"&&o!==null&&typeof o.base<"u"&&Object.keys(o).length===1;return typeof o=="number"||typeof o=="string"||t}function B(o){return!(typeof o!="object"||o===null||Object.keys(o).length===1&&"base"in o)}function A1({baseStyles:o,minMediaStyles:t,maxMediaStyles:r,aside:e,theme:s}){var d,p,f;const l=e==null?void 0:e.width,a="translateX(var(--app-shell-aside-width))",h="translateX(calc(var(--app-shell-aside-width) * -1))";if(e!=null&&e.breakpoint&&!((d=e==null?void 0:e.collapsed)!=null&&d.mobile)&&(r[e==null?void 0:e.breakpoint]=r[e==null?void 0:e.breakpoint]||{},r[e==null?void 0:e.breakpoint]["--app-shell-aside-width"]="100%",r[e==null?void 0:e.breakpoint]["--app-shell-aside-offset"]="0px"),N(l)){const n=u(A(l));o["--app-shell-aside-width"]=n,o["--app-shell-aside-offset"]=n}if(B(l)&&(typeof l.base<"u"&&(o["--app-shell-aside-width"]=u(l.base),o["--app-shell-aside-offset"]=u(l.base)),j(l).forEach(n=>{n!=="base"&&(t[n]=t[n]||{},t[n]["--app-shell-aside-width"]=u(l[n]),t[n]["--app-shell-aside-offset"]=u(l[n]))})),(p=e==null?void 0:e.collapsed)!=null&&p.desktop){const n=e.breakpoint;t[n]=t[n]||{},t[n]["--app-shell-aside-transform"]=a,t[n]["--app-shell-aside-transform-rtl"]=h,t[n]["--app-shell-aside-offset"]="0px !important"}if((f=e==null?void 0:e.collapsed)!=null&&f.mobile){const n=F(e.breakpoint,s.breakpoints)-.1;r[n]=r[n]||{},r[n]["--app-shell-aside-width"]="100%",r[n]["--app-shell-aside-offset"]="0px",r[n]["--app-shell-aside-transform"]=a,r[n]["--app-shell-aside-transform-rtl"]=h}}function N1({baseStyles:o,minMediaStyles:t,footer:r}){const e=r==null?void 0:r.height,s="translateY(var(--app-shell-footer-height))",l=(r==null?void 0:r.offset)??!0;if(N(e)){const a=u(A(e));o["--app-shell-footer-height"]=a,l&&(o["--app-shell-footer-offset"]=a)}B(e)&&(typeof e.base<"u"&&(o["--app-shell-footer-height"]=u(e.base),l&&(o["--app-shell-footer-offset"]=u(e.base))),j(e).forEach(a=>{a!=="base"&&(t[a]=t[a]||{},t[a]["--app-shell-footer-height"]=u(e[a]),l&&(t[a]["--app-shell-footer-offset"]=u(e[a])))})),r!=null&&r.collapsed&&(o["--app-shell-footer-transform"]=s,o["--app-shell-footer-offset"]="0px !important")}function B1({baseStyles:o,minMediaStyles:t,header:r}){const e=r==null?void 0:r.height,s="translateY(calc(var(--app-shell-header-height) * -1))",l=(r==null?void 0:r.offset)??!0;if(N(e)){const a=u(A(e));o["--app-shell-header-height"]=a,l&&(o["--app-shell-header-offset"]=a)}B(e)&&(typeof e.base<"u"&&(o["--app-shell-header-height"]=u(e.base),l&&(o["--app-shell-header-offset"]=u(e.base))),j(e).forEach(a=>{a!=="base"&&(t[a]=t[a]||{},t[a]["--app-shell-header-height"]=u(e[a]),l&&(t[a]["--app-shell-header-offset"]=u(e[a])))})),r!=null&&r.collapsed&&(o["--app-shell-header-transform"]=s,o["--app-shell-header-offset"]="0px !important")}function E1({baseStyles:o,minMediaStyles:t,maxMediaStyles:r,navbar:e,theme:s}){var d,p,f;const l=e==null?void 0:e.width,a="translateX(calc(var(--app-shell-navbar-width) * -1))",h="translateX(var(--app-shell-navbar-width))";if(e!=null&&e.breakpoint&&!((d=e==null?void 0:e.collapsed)!=null&&d.mobile)&&(r[e==null?void 0:e.breakpoint]=r[e==null?void 0:e.breakpoint]||{},r[e==null?void 0:e.breakpoint]["--app-shell-navbar-width"]="100%",r[e==null?void 0:e.breakpoint]["--app-shell-navbar-offset"]="0px"),N(l)){const n=u(A(l));o["--app-shell-navbar-width"]=n,o["--app-shell-navbar-offset"]=n}if(B(l)&&(typeof l.base<"u"&&(o["--app-shell-navbar-width"]=u(l.base),o["--app-shell-navbar-offset"]=u(l.base)),j(l).forEach(n=>{n!=="base"&&(t[n]=t[n]||{},t[n]["--app-shell-navbar-width"]=u(l[n]),t[n]["--app-shell-navbar-offset"]=u(l[n]))})),(p=e==null?void 0:e.collapsed)!=null&&p.desktop){const n=e.breakpoint;t[n]=t[n]||{},t[n]["--app-shell-navbar-transform"]=a,t[n]["--app-shell-navbar-transform-rtl"]=h,t[n]["--app-shell-navbar-offset"]="0px !important"}if((f=e==null?void 0:e.collapsed)!=null&&f.mobile){const n=F(e.breakpoint,s.breakpoints)-.1;r[n]=r[n]||{},r[n]["--app-shell-navbar-width"]="100%",r[n]["--app-shell-navbar-offset"]="0px",r[n]["--app-shell-navbar-transform"]=a,r[n]["--app-shell-navbar-transform-rtl"]=h}}function P(o){return Number(o)===0?"0px":n1(o)}function $1({padding:o,baseStyles:t,minMediaStyles:r}){N(o)&&(t["--app-shell-padding"]=P(A(o))),B(o)&&(o.base&&(t["--app-shell-padding"]=P(o.base)),j(o).forEach(e=>{e!=="base"&&(r[e]=r[e]||{},r[e]["--app-shell-padding"]=P(o[e]))}))}function I1({navbar:o,header:t,footer:r,aside:e,padding:s,theme:l}){const a={},h={},d={};E1({baseStyles:d,minMediaStyles:a,maxMediaStyles:h,navbar:o,theme:l}),A1({baseStyles:d,minMediaStyles:a,maxMediaStyles:h,aside:e,theme:l}),B1({baseStyles:d,minMediaStyles:a,header:t}),N1({baseStyles:d,minMediaStyles:a,footer:r}),$1({baseStyles:d,minMediaStyles:a,padding:s});const p=t1(j(a),l.breakpoints).map(v=>({query:`(min-width: ${o1(v.px)})`,styles:a[v.value]})),f=t1(j(h),l.breakpoints).map(v=>({query:`(max-width: ${o1(v.px)})`,styles:h[v.value]})),n=[...p,...f];return{baseStyles:d,media:n}}function z1({navbar:o,header:t,aside:r,footer:e,padding:s}){const l=a1(),a=C1(),{media:h,baseStyles:d}=I1({navbar:o,header:t,footer:e,aside:r,padding:s,theme:l});return i.jsx(u1,{media:h,styles:d,selector:a.cssVariablesSelector})}const M1={},X=R((o,t)=>{const r=b("AppShellNavbar",M1,o),{classNames:e,className:s,style:l,styles:a,unstyled:h,vars:d,withBorder:p,zIndex:f,mod:n,...v}=r,C=L();return C.disabled?null:i.jsx(x,{component:"nav",ref:t,mod:[{"with-border":p??C.withBorder},n],...C.getStyles("navbar",{className:s,classNames:e,styles:a,style:l}),...v,__vars:{"--app-shell-navbar-z-index":`calc(${f??C.zIndex} + 1)`}})});X.classes=V;X.displayName="@mantine/core/AppShellNavbar";const T1={},Y=c1((o,t)=>{const r=b("AppShellSection",T1,o),{classNames:e,className:s,style:l,styles:a,vars:h,grow:d,mod:p,...f}=r,n=L();return i.jsx(x,{ref:t,mod:[{grow:d},p],...n.getStyles("section",{className:s,style:l,classNames:e,styles:a}),...f})});Y.classes=V;Y.displayName="@mantine/core/AppShellSection";function O1({transitionDuration:o,disabled:t}){const[r,e]=c.useState(!0),s=c.useRef(-1),l=c.useRef(-1);return v1("resize",()=>{e(!0),clearTimeout(s.current),s.current=window.setTimeout(()=>c.startTransition(()=>{e(!1)}),200)}),g1(()=>{e(!0),clearTimeout(l.current),l.current=window.setTimeout(()=>c.startTransition(()=>{e(!1)}),o||0)},[t,o]),r}const P1={withBorder:!0,offsetScrollbars:!0,padding:0,transitionDuration:200,transitionTimingFunction:"ease",zIndex:m1("app")},S1=G((o,{transitionDuration:t,transitionTimingFunction:r})=>({root:{"--app-shell-transition-duration":`${t}ms`,"--app-shell-transition-timing-function":r}})),w=R((o,t)=>{const r=b("AppShell",P1,o),{classNames:e,className:s,style:l,styles:a,unstyled:h,vars:d,navbar:p,withBorder:f,padding:n,transitionDuration:v,transitionTimingFunction:C,header:g,zIndex:z,layout:K,disabled:H,aside:E,footer:J,offsetScrollbars:M,mod:T,...O}=r,Z=S({name:"AppShell",classes:V,props:r,className:s,style:l,classNames:e,styles:a,unstyled:h,vars:d,varsResolver:S1}),_=O1({disabled:H,transitionDuration:v});return i.jsxs(L1,{value:{getStyles:Z,withBorder:f,zIndex:z,disabled:H,offsetScrollbars:M},children:[i.jsx(z1,{navbar:p,header:g,aside:E,footer:J,padding:n}),i.jsx(x,{ref:t,...Z("root"),mod:[{resizing:_,layout:K,disabled:H},T],...O})]})});w.classes=V;w.displayName="@mantine/core/AppShell";w.Navbar=X;w.Header=U;w.Main=W;w.Aside=y;w.Footer=D;w.Section=Y;const p1=c.createContext(null),G1=p1.Provider;function F1(){return{withinGroup:!!c.useContext(p1)}}var $={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};const y1={},D1=G((o,{spacing:t})=>({group:{"--ag-spacing":n1(t)}})),q=R((o,t)=>{const r=b("AvatarGroup",y1,o),{classNames:e,className:s,style:l,styles:a,unstyled:h,vars:d,spacing:p,...f}=r,n=S({name:"AvatarGroup",classes:$,props:r,className:s,style:l,classNames:e,styles:a,unstyled:h,vars:d,varsResolver:D1,rootSelector:"group"});return i.jsx(G1,{value:!0,children:i.jsx(x,{ref:t,...n("group"),...f})})});q.classes=$;q.displayName="@mantine/core/AvatarGroup";function U1(o){return i.jsx("svg",{...o,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}function d1(o,t=2){const r=o.split(" ");return r.length===1?o.slice(0,t).toUpperCase():r.map(e=>e[0]).slice(0,t).join("").toUpperCase()}function W1(o){let t=0;for(let r=0;r<o.length;r+=1){const e=o.charCodeAt(r);t=(t<<5)-t+e,t|=0}return t}const X1=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"];function Y1(o,t=X1){const r=W1(d1(o)),e=Math.abs(r)%t.length;return t[e]}const q1={},K1=G((o,{size:t,radius:r,variant:e,gradient:s,color:l,autoContrast:a,name:h,allowedInitialsColors:d})=>{const p=l==="initials"&&typeof h=="string"?Y1(h,d):l,f=o.variantColorResolver({color:p||"gray",theme:o,gradient:s,variant:e||"light",autoContrast:a});return{root:{"--avatar-size":w1(t,"avatar-size"),"--avatar-radius":r===void 0?void 0:x1(r),"--avatar-bg":p||e?f.background:void 0,"--avatar-color":p||e?f.color:void 0,"--avatar-bd":p||e?f.border:void 0}}}),I=c1((o,t)=>{const r=b("Avatar",q1,o),{classNames:e,className:s,style:l,styles:a,unstyled:h,vars:d,src:p,alt:f,radius:n,color:v,gradient:C,imageProps:g,children:z,autoContrast:K,mod:H,name:E,allowedInitialsColors:J,...M}=r,T=F1(),[O,Z]=c.useState(!p),_=S({name:"Avatar",props:r,classes:$,className:s,style:l,classNames:e,styles:a,unstyled:h,vars:d,varsResolver:K1});return c.useEffect(()=>Z(!p),[p]),i.jsx(x,{..._("root"),mod:[{"within-group":T.withinGroup},H],ref:t,...M,children:O?i.jsx("span",{..._("placeholder"),title:f,children:z||typeof E=="string"&&d1(E)||i.jsx(U1,{})}):i.jsx("img",{...g,..._("image"),src:p,alt:f,onError:f1=>{var Q;Z(!0),(Q=g==null?void 0:g.onError)==null||Q.call(g,f1)}})})});I.classes=$;I.displayName="@mantine/core/Avatar";I.Group=q;function m(o,t){if(o==null)return{};var r={},e=Object.keys(o),s,l;for(l=0;l<e.length;l++)s=e[l],!(t.indexOf(s)>=0)&&(r[s]=o[s]);return r}var J1=["color"],Q1=c.forwardRef(function(o,t){var r=o.color,e=r===void 0?"currentColor":r,s=m(o,J1);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s,{ref:t}),c.createElement("path",{d:"M3 2.5C3 2.22386 3.22386 2 3.5 2H11.5C11.7761 2 12 2.22386 12 2.5V13.5C12 13.6818 11.9014 13.8492 11.7424 13.9373C11.5834 14.0254 11.3891 14.0203 11.235 13.924L7.5 11.5896L3.765 13.924C3.61087 14.0203 3.41659 14.0254 3.25762 13.9373C3.09864 13.8492 3 13.6818 3 13.5V2.5ZM4 3V12.5979L6.97 10.7416C7.29427 10.539 7.70573 10.539 8.03 10.7416L11 12.5979V3H4Z",fill:e,fillRule:"evenodd",clipRule:"evenodd"}))}),ee=["color"],oe=c.forwardRef(function(o,t){var r=o.color,e=r===void 0?"currentColor":r,s=m(o,ee);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s,{ref:t}),c.createElement("path",{d:"M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z",fill:e,fillRule:"evenodd",clipRule:"evenodd"}))}),re=["color"],te=c.forwardRef(function(o,t){var r=o.color,e=r===void 0?"currentColor":r,s=m(o,re);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s,{ref:t}),c.createElement("path",{d:"M2 3C1.44772 3 1 3.44772 1 4V11C1 11.5523 1.44772 12 2 12H13C13.5523 12 14 11.5523 14 11V4C14 3.44772 13.5523 3 13 3H2ZM0 4C0 2.89543 0.895431 2 2 2H13C14.1046 2 15 2.89543 15 4V11C15 12.1046 14.1046 13 13 13H2C0.895431 13 0 12.1046 0 11V4ZM2 4.25C2 4.11193 2.11193 4 2.25 4H4.75C4.88807 4 5 4.11193 5 4.25V5.75454C5 5.89261 4.88807 6.00454 4.75 6.00454H2.25C2.11193 6.00454 2 5.89261 2 5.75454V4.25ZM12.101 7.58421C12.101 9.02073 10.9365 10.1853 9.49998 10.1853C8.06346 10.1853 6.89893 9.02073 6.89893 7.58421C6.89893 6.14769 8.06346 4.98315 9.49998 4.98315C10.9365 4.98315 12.101 6.14769 12.101 7.58421ZM13.101 7.58421C13.101 9.57302 11.4888 11.1853 9.49998 11.1853C7.51117 11.1853 5.89893 9.57302 5.89893 7.58421C5.89893 5.5954 7.51117 3.98315 9.49998 3.98315C11.4888 3.98315 13.101 5.5954 13.101 7.58421Z",fill:e,fillRule:"evenodd",clipRule:"evenodd"}))}),se=["color"],le=c.forwardRef(function(o,t){var r=o.color,e=r===void 0?"currentColor":r,s=m(o,se);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s,{ref:t}),c.createElement("path",{d:"M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",fill:e,fillRule:"evenodd",clipRule:"evenodd"}))}),ne=["color"],ke=c.forwardRef(function(o,t){var r=o.color,e=r===void 0?"currentColor":r,s=m(o,ne);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s,{ref:t}),c.createElement("path",{d:"M7.50009 0.877014C3.84241 0.877014 0.877258 3.84216 0.877258 7.49984C0.877258 11.1575 3.8424 14.1227 7.50009 14.1227C11.1578 14.1227 14.1229 11.1575 14.1229 7.49984C14.1229 3.84216 11.1577 0.877014 7.50009 0.877014ZM1.82726 7.49984C1.82726 4.36683 4.36708 1.82701 7.50009 1.82701C10.6331 1.82701 13.1729 4.36683 13.1729 7.49984C13.1729 10.6328 10.6331 13.1727 7.50009 13.1727C4.36708 13.1727 1.82726 10.6328 1.82726 7.49984ZM8 4.50001C8 4.22387 7.77614 4.00001 7.5 4.00001C7.22386 4.00001 7 4.22387 7 4.50001V7.50001C7 7.63262 7.05268 7.7598 7.14645 7.85357L9.14645 9.85357C9.34171 10.0488 9.65829 10.0488 9.85355 9.85357C10.0488 9.65831 10.0488 9.34172 9.85355 9.14646L8 7.29291V4.50001Z",fill:e,fillRule:"evenodd",clipRule:"evenodd"}))}),ae=["color"],ce=c.forwardRef(function(o,t){var r=o.color,e=r===void 0?"currentColor":r,s=m(o,ae);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s,{ref:t}),c.createElement("path",{d:"M7.28856 0.796908C7.42258 0.734364 7.57742 0.734364 7.71144 0.796908L13.7114 3.59691C13.8875 3.67906 14 3.85574 14 4.05V10.95C14 11.1443 13.8875 11.3209 13.7114 11.4031L7.71144 14.2031C7.57742 14.2656 7.42258 14.2656 7.28856 14.2031L1.28856 11.4031C1.11252 11.3209 1 11.1443 1 10.95V4.05C1 3.85574 1.11252 3.67906 1.28856 3.59691L7.28856 0.796908ZM2 4.80578L7 6.93078V12.9649L2 10.6316V4.80578ZM8 12.9649L13 10.6316V4.80578L8 6.93078V12.9649ZM7.5 6.05672L12.2719 4.02866L7.5 1.80176L2.72809 4.02866L7.5 6.05672Z",fill:e,fillRule:"evenodd",clipRule:"evenodd"}))}),ie=["color"],Ae=c.forwardRef(function(o,t){var r=o.color,e=r===void 0?"currentColor":r,s=m(o,ie);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s,{ref:t}),c.createElement("path",{d:"M1 3.25C1 3.11193 1.11193 3 1.25 3H13.75C13.8881 3 14 3.11193 14 3.25V10.75C14 10.8881 13.8881 11 13.75 11H1.25C1.11193 11 1 10.8881 1 10.75V3.25ZM1.25 2C0.559643 2 0 2.55964 0 3.25V10.75C0 11.4404 0.559644 12 1.25 12H5.07341L4.82991 13.2986C4.76645 13.6371 5.02612 13.95 5.37049 13.95H9.62951C9.97389 13.95 10.2336 13.6371 10.1701 13.2986L9.92659 12H13.75C14.4404 12 15 11.4404 15 10.75V3.25C15 2.55964 14.4404 2 13.75 2H1.25ZM9.01091 12H5.98909L5.79222 13.05H9.20778L9.01091 12Z",fill:e,fillRule:"evenodd",clipRule:"evenodd"}))}),pe=["color"],de=c.forwardRef(function(o,t){var r=o.color,e=r===void 0?"currentColor":r,s=m(o,pe);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s,{ref:t}),c.createElement("path",{d:"M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z",fill:e,fillRule:"evenodd",clipRule:"evenodd"}))}),fe=["color"],Ne=c.forwardRef(function(o,t){var r=o.color,e=r===void 0?"currentColor":r,s=m(o,fe);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s,{ref:t}),c.createElement("path",{d:"M12.1464 1.14645C12.3417 0.951184 12.6583 0.951184 12.8535 1.14645L14.8535 3.14645C15.0488 3.34171 15.0488 3.65829 14.8535 3.85355L10.9109 7.79618C10.8349 7.87218 10.7471 7.93543 10.651 7.9835L6.72359 9.94721C6.53109 10.0435 6.29861 10.0057 6.14643 9.85355C5.99425 9.70137 5.95652 9.46889 6.05277 9.27639L8.01648 5.34897C8.06455 5.25283 8.1278 5.16507 8.2038 5.08907L12.1464 1.14645ZM12.5 2.20711L8.91091 5.79618L7.87266 7.87267L8.12731 8.12732L10.2038 7.08907L13.7929 3.5L12.5 2.20711ZM9.99998 2L8.99998 3H4.9C4.47171 3 4.18056 3.00039 3.95552 3.01877C3.73631 3.03668 3.62421 3.06915 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3.06915 3.62421 3.03669 3.73631 3.01878 3.95552C3.00039 4.18056 3 4.47171 3 4.9V11.1C3 11.5283 3.00039 11.8194 3.01878 12.0445C3.03669 12.2637 3.06915 12.3758 3.10899 12.454C3.20487 12.6422 3.35785 12.7951 3.54601 12.891C3.62421 12.9309 3.73631 12.9633 3.95552 12.9812C4.18056 12.9996 4.47171 13 4.9 13H11.1C11.5283 13 11.8194 12.9996 12.0445 12.9812C12.2637 12.9633 12.3758 12.9309 12.454 12.891C12.6422 12.7951 12.7951 12.6422 12.891 12.454C12.9309 12.3758 12.9633 12.2637 12.9812 12.0445C12.9996 11.8194 13 11.5283 13 11.1V6.99998L14 5.99998V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H4.9H4.87934C4.47686 14 4.14468 14 3.87409 13.9779C3.59304 13.9549 3.33469 13.9057 3.09202 13.782C2.7157 13.5903 2.40973 13.2843 2.21799 12.908C2.09434 12.6653 2.04506 12.407 2.0221 12.1259C1.99999 11.8553 1.99999 11.5231 2 11.1207V11.1206V11.1V4.9V4.87935V4.87932V4.87931C1.99999 4.47685 1.99999 4.14468 2.0221 3.87409C2.04506 3.59304 2.09434 3.33469 2.21799 3.09202C2.40973 2.71569 2.7157 2.40973 3.09202 2.21799C3.33469 2.09434 3.59304 2.04506 3.87409 2.0221C4.14468 1.99999 4.47685 1.99999 4.87932 2H4.87935H4.9H9.99998Z",fill:e,fillRule:"evenodd",clipRule:"evenodd"}))}),he=["color"],Be=c.forwardRef(function(o,t){var r=o.color,e=r===void 0?"currentColor":r,s=m(o,he);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s,{ref:t}),c.createElement("path",{d:"M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z",fill:e,fillRule:"evenodd",clipRule:"evenodd"}))}),Ce=["color"],ue=c.forwardRef(function(o,t){var r=o.color,e=r===void 0?"currentColor":r,s=m(o,Ce);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s,{ref:t}),c.createElement("path",{d:"M10 3.5C10 4.70948 9.14112 5.71836 8 5.94999V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V5.94999C5.85888 5.71836 5 4.70948 5 3.5C5 2.11929 6.11929 1 7.5 1C8.88071 1 10 2.11929 10 3.5Z",fill:e,fillRule:"evenodd",clipRule:"evenodd"}))}),ve=["color"],ge=c.forwardRef(function(o,t){var r=o.color,e=r===void 0?"currentColor":r,s=m(o,ve);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s,{ref:t}),c.createElement("path",{d:"M7.46968 1.05085C7.64122 1.13475 7.75 1.30904 7.75 1.5V13.5C7.75 13.691 7.64122 13.8653 7.46968 13.9492C7.29813 14.0331 7.09377 14.0119 6.94303 13.8947L3.2213 11H1.5C0.671571 11 0 10.3284 0 9.5V5.5C0 4.67158 0.671573 4 1.5 4H3.2213L6.94303 1.10533C7.09377 0.988085 7.29813 0.966945 7.46968 1.05085ZM6.75 2.52232L3.69983 4.89468C3.61206 4.96294 3.50405 5 3.39286 5H1.5C1.22386 5 1 5.22386 1 5.5V9.5C1 9.77615 1.22386 10 1.5 10H3.39286C3.50405 10 3.61206 10.0371 3.69983 10.1053L6.75 12.4777V2.52232ZM10.2784 3.84804C10.4623 3.72567 10.7106 3.77557 10.833 3.95949C12.2558 6.09798 12.2558 8.90199 10.833 11.0405C10.7106 11.2244 10.4623 11.2743 10.2784 11.1519C10.0944 11.0296 10.0445 10.7813 10.1669 10.5973C11.4111 8.72728 11.4111 6.27269 10.1669 4.40264C10.0445 4.21871 10.0944 3.97041 10.2784 3.84804ZM12.6785 1.43044C12.5356 1.2619 12.2832 1.24104 12.1147 1.38386C11.9462 1.52667 11.9253 1.77908 12.0681 1.94762C14.7773 5.14488 14.7773 9.85513 12.0681 13.0524C11.9253 13.2209 11.9462 13.4733 12.1147 13.6161C12.2832 13.759 12.5356 13.7381 12.6785 13.5696C15.6406 10.0739 15.6406 4.92612 12.6785 1.43044Z",fill:e,fillRule:"evenodd",clipRule:"evenodd"}))});function me({active:o,setActive:t}){const r=b1(),e=R1({from:""}),s=()=>{t(-1),r("/profilepage")};return i.jsx(i1,{to:"/profilepage",children:i.jsxs(V1,{onClick:s,style:{display:"block",width:"100%",padding:"var(--mantine-spacing-sm)",color:"white",backgroundColor:o===-1?"var(--mantine-color-dark-4)":"transparent",transition:"background-color 0.2s ease"},onMouseEnter:l=>{o!==-1&&(l.currentTarget.style.backgroundColor="var(--mantine-color-dark-4)")},onMouseLeave:l=>{o!==-1&&(l.currentTarget.style.backgroundColor="transparent")},children:[i.jsxs(j1,{children:[i.jsx(I,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",radius:"xl"}),i.jsxs("div",{style:{flex:1},children:[i.jsxs(r1,{size:"sm",fw:600,children:[e.userInfo.firstName," ",e.userInfo.lastName]}),i.jsx(r1,{c:"dimmed",size:"xs",children:e.userInfo.email})]}),i.jsx(le,{size:16,stroke:2})]})," "]})})}const we="_navbar_iheoe_1",xe="_links_iheoe_12",be="_linksInner_iheoe_19",Ve="_footer_iheoe_23",je="_linkbox_iheoe_36",k={navbar:we,links:xe,linksInner:be,footer:Ve,linkbox:je};function Re(){const o=a1(),t=[{icon:de,label:"Dashboard",to:"/dashboard",iconBackgroundColor:o.colors.green[4]},{icon:Q1,label:"Book lokale",to:"/booklokale",iconBackgroundColor:o.colors.pink[4]},{icon:oe,label:"Mine bookinger",to:"/mybookings",iconBackgroundColor:o.colors.teal[4]},{icon:ue,label:"Kort",to:"/oversigt",iconBackgroundColor:o.colors.cyan[4]},{icon:te,label:"Medialab",to:"/medialab",iconBackgroundColor:o.colors.grape[4]},{icon:ce,label:"Makerlab",to:"/makerlab",iconBackgroundColor:o.colors.blue[4]},{icon:ge,label:"Auditorium",to:"/auditorium",iconBackgroundColor:o.colors.orange[4]}];return i.jsxs(x,{className:k.navbar,children:[i.jsx("div",{className:k.links,children:i.jsx("div",{className:k.linksInner,children:t.map(r=>i.jsx(i1,{to:r.to,children:i.jsxs("div",{className:k.linkbox,style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px"},children:[i.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"30px",height:"30px",borderRadius:"20%",backgroundColor:r.iconBackgroundColor},children:i.jsx(r.icon,{size:"1.2rem",stroke:1.5})}),i.jsx("div",{children:r.label})]})},r.label))})}),i.jsxs("div",{className:k.footer,children:[i.jsx(me,{})," "]})]})}function Ee(){const[o,t]=c.useState(0);return i.jsx(w,{header:{height:35},navbar:{width:300,breakpoint:"xs"},children:i.jsxs(w.Navbar,{p:"sm",style:{backgroundColor:"#2C2E33"},children:[i.jsx(Re,{active:o,setActive:t})," "]})})}export{I as A,Ee as B,ke as C,Ae as D,Be as P,oe as a,Ne as b};
