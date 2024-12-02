import{J as me,f as D,b as N,h as P,j as m,g as W,i as F,I as j,q as x,v as ve,r as se,p as ye,w as he,t as re,k as fe}from"./index-DA0SvMbs.js";const[be,G]=me({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});var S={wrapper:"m_6c018570",input:"m_8fb7ebe7",section:"m_82577fc2",placeholder:"m_88bacfd0",root:"m_46b77525",label:"m_8fdc1311",required:"m_78a94662",error:"m_8f816625",description:"m_fe47ce59"};const ne={},Ie=F((s,{size:e})=>({description:{"--input-description-size":e===void 0?void 0:`calc(${j(e)} - ${x(2)})`}})),H=D((s,e)=>{const t=N("InputDescription",ne,s),{classNames:u,className:i,style:a,styles:v,unstyled:b,vars:y,size:h,__staticSelector:I,__inheritStyles:f=!0,variant:_,...l}=N("InputDescription",ne,t),n=G(),o=P({name:["InputWrapper",I],props:t,classes:S,className:i,style:a,classNames:u,styles:v,unstyled:b,rootSelector:"description",vars:y,varsResolver:Ie}),c=f&&(n==null?void 0:n.getStyles)||o;return m.jsx(W,{component:"p",ref:e,variant:_,size:h,...c("description",n!=null&&n.getStyles?{className:i,style:a}:void 0),...l})});H.classes=S;H.displayName="@mantine/core/InputDescription";const Se={},_e=F((s,{size:e})=>({error:{"--input-error-size":e===void 0?void 0:`calc(${j(e)} - ${x(2)})`}})),K=D((s,e)=>{const t=N("InputError",Se,s),{classNames:u,className:i,style:a,styles:v,unstyled:b,vars:y,size:h,__staticSelector:I,__inheritStyles:f=!0,variant:_,...l}=t,n=P({name:["InputWrapper",I],props:t,classes:S,className:i,style:a,classNames:u,styles:v,unstyled:b,rootSelector:"error",vars:y,varsResolver:_e}),o=G(),c=f&&(o==null?void 0:o.getStyles)||n;return m.jsx(W,{component:"p",ref:e,variant:_,size:h,...c("error",o!=null&&o.getStyles?{className:i,style:a}:void 0),...l})});K.classes=S;K.displayName="@mantine/core/InputError";const oe={labelElement:"label"},ge=F((s,{size:e})=>({label:{"--input-label-size":j(e),"--input-asterisk-color":void 0}})),M=D((s,e)=>{const t=N("InputLabel",oe,s),{classNames:u,className:i,style:a,styles:v,unstyled:b,vars:y,labelElement:h,size:I,required:f,htmlFor:_,onMouseDown:l,children:n,__staticSelector:o,variant:c,mod:z,...d}=N("InputLabel",oe,t),r=P({name:["InputWrapper",o],props:t,classes:S,className:i,style:a,classNames:u,styles:v,unstyled:b,rootSelector:"label",vars:y,varsResolver:ge}),g=G(),q=(g==null?void 0:g.getStyles)||r;return m.jsxs(W,{...q("label",g!=null&&g.getStyles?{className:i,style:a}:void 0),component:h,variant:c,size:I,ref:e,htmlFor:h==="label"?_:void 0,mod:[{required:f},z],onMouseDown:$=>{l==null||l($),!$.defaultPrevented&&$.detail>1&&$.preventDefault()},...d,children:[n,f&&m.jsx("span",{...q("required"),"aria-hidden":!0,children:" *"})]})});M.classes=S;M.displayName="@mantine/core/InputLabel";const ie={},Z=D((s,e)=>{const t=N("InputPlaceholder",ie,s),{classNames:u,className:i,style:a,styles:v,unstyled:b,vars:y,__staticSelector:h,variant:I,error:f,mod:_,...l}=N("InputPlaceholder",ie,t),n=P({name:["InputPlaceholder",h],props:t,classes:S,className:i,style:a,classNames:u,styles:v,unstyled:b,rootSelector:"placeholder"});return m.jsx(W,{...n("placeholder"),mod:[{error:!!f},_],component:"span",variant:I,ref:e,...l})});Z.classes=S;Z.displayName="@mantine/core/InputPlaceholder";function Ne(s,{hasDescription:e,hasError:t}){const u=s.findIndex(y=>y==="input"),i=s.slice(0,u),a=s.slice(u+1),v=e&&i.includes("description")||t&&i.includes("error");return{offsetBottom:e&&a.includes("description")||t&&a.includes("error"),offsetTop:v}}const $e={labelElement:"label",inputContainer:s=>s,inputWrapperOrder:["label","description","input","error"]},ze=F((s,{size:e})=>({label:{"--input-label-size":j(e),"--input-asterisk-color":void 0},error:{"--input-error-size":e===void 0?void 0:`calc(${j(e)} - ${x(2)})`},description:{"--input-description-size":e===void 0?void 0:`calc(${j(e)} - ${x(2)})`}})),ee=D((s,e)=>{const t=N("InputWrapper",$e,s),{classNames:u,className:i,style:a,styles:v,unstyled:b,vars:y,size:h,variant:I,__staticSelector:f,inputContainer:_,inputWrapperOrder:l,label:n,error:o,description:c,labelProps:z,descriptionProps:d,errorProps:r,labelElement:g,children:q,withAsterisk:$,id:k,required:Q,__stylesApiProps:U,mod:X,...te}=t,C=P({name:["InputWrapper",f],props:U||t,classes:S,className:i,style:a,classNames:u,styles:v,unstyled:b,vars:y,varsResolver:ze}),E={size:h,variant:I,__staticSelector:f},w=ve(k),Y=typeof $=="boolean"?$:Q,L=(r==null?void 0:r.id)||`${w}-error`,T=(d==null?void 0:d.id)||`${w}-description`,O=w,A=!!o&&typeof o!="boolean",p=!!c,J=`${A?L:""} ${p?T:""}`,B=J.trim().length>0?J.trim():void 0,V=(z==null?void 0:z.id)||`${w}-label`,ae=n&&m.jsx(M,{labelElement:g,id:V,htmlFor:O,required:Y,...E,...z,children:n},"label"),le=p&&m.jsx(H,{...d,...E,size:(d==null?void 0:d.size)||E.size,id:(d==null?void 0:d.id)||T,children:c},"description"),ce=m.jsx(se.Fragment,{children:_(q)},"input"),de=A&&se.createElement(K,{...r,...E,size:(r==null?void 0:r.size)||E.size,key:"error",id:(r==null?void 0:r.id)||L},o),pe=l.map(ue=>{switch(ue){case"label":return ae;case"input":return ce;case"description":return le;case"error":return de;default:return null}});return m.jsx(be,{value:{getStyles:C,describedBy:B,inputId:O,labelId:V,...Ne(l,{hasDescription:p,hasError:A})},children:m.jsx(W,{ref:e,variant:I,size:h,mod:[{error:!!o},X],...C("root"),...te,children:pe})})});ee.classes=S;ee.displayName="@mantine/core/InputWrapper";const Ee={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},we=F((s,e,t)=>({wrapper:{"--input-margin-top":t.offsetTop?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-margin-bottom":t.offsetBottom?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-height":re(e.size,"input-height"),"--input-fz":j(e.size),"--input-radius":e.radius===void 0?void 0:fe(e.radius),"--input-left-section-width":e.leftSectionWidth!==void 0?x(e.leftSectionWidth):void 0,"--input-right-section-width":e.rightSectionWidth!==void 0?x(e.rightSectionWidth):void 0,"--input-padding-y":e.multiline?re(e.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":e.leftSectionPointerEvents,"--input-right-section-pointer-events":e.rightSectionPointerEvents}})),R=ye((s,e)=>{const t=N("Input",Ee,s),{classNames:u,className:i,style:a,styles:v,unstyled:b,required:y,__staticSelector:h,__stylesApiProps:I,size:f,wrapperProps:_,error:l,disabled:n,leftSection:o,leftSectionProps:c,leftSectionWidth:z,rightSection:d,rightSectionProps:r,rightSectionWidth:g,rightSectionPointerEvents:q,leftSectionPointerEvents:$,variant:k,vars:Q,pointer:U,multiline:X,radius:te,id:C,withAria:E,withErrorStyles:w,mod:Y,inputSize:L,...T}=t,{styleProps:O,rest:A}=he(T),p=G(),J={offsetBottom:p==null?void 0:p.offsetBottom,offsetTop:p==null?void 0:p.offsetTop},B=P({name:["Input",h],props:I||t,classes:S,className:i,style:a,classNames:u,styles:v,unstyled:b,stylesCtx:J,rootSelector:"wrapper",vars:Q,varsResolver:we}),V=E?{required:y,disabled:n,"aria-invalid":!!l,"aria-describedby":p==null?void 0:p.describedBy,id:(p==null?void 0:p.inputId)||C}:{};return m.jsxs(W,{...B("wrapper"),...O,..._,mod:[{error:!!l&&w,pointer:U,disabled:n,multiline:X,"data-with-right-section":!!d,"data-with-left-section":!!o},Y],variant:k,size:f,children:[o&&m.jsx("div",{...c,"data-position":"left",...B("section",{className:c==null?void 0:c.className,style:c==null?void 0:c.style}),children:o}),m.jsx(W,{component:"input",...A,...V,ref:e,required:y,mod:{disabled:n,error:!!l&&w},variant:k,__size:L,...B("input")}),d&&m.jsx("div",{...r,"data-position":"right",...B("section",{className:r==null?void 0:r.className,style:r==null?void 0:r.style}),children:d})]})});R.classes=S;R.Wrapper=ee;R.Label=M;R.Error=K;R.Description=H;R.Placeholder=Z;R.displayName="@mantine/core/Input";export{R as I,G as u};
