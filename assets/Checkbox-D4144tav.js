import{r as B,d as z,j as a,o as I,y as ie,i as F,z as de,f as G,u as V,b as J,U as ue,h as T,q as W,a0 as K,a1 as R,a2 as L,e as pe,a as he}from"./index-CAyquB9r.js";import{I as $,u as be}from"./Input-DIZKYIzI.js";import{a as M}from"./CheckIcon-C_86CdG4.js";function Q(e,s){return typeof e=="boolean"?e:s.autoContrast}var X={root:"m_5f75b09e",body:"m_5f6e695e",labelWrapper:"m_d3ea56bb",label:"m_8ee546b8",description:"m_328f68c0",error:"m_8e8a99cc"};const xe=X,Y=B.forwardRef(({__staticSelector:e,__stylesApiProps:s,className:o,classNames:l,styles:t,unstyled:i,children:c,label:r,description:d,id:v,disabled:n,error:k,size:p,labelPosition:x="left",bodyElement:C="div",labelElement:h="label",variant:f,style:_,vars:b,mod:g,...m},y)=>{const u=z({name:e,props:s,className:o,style:_,classes:X,classNames:l,styles:t,unstyled:i});return a.jsx(I,{...u("root"),ref:y,__vars:{"--label-fz":ie(p),"--label-lh":F(p,"label-lh")},mod:[{"label-position":x},g],variant:f,size:p,...m,children:a.jsxs(I,{component:C,htmlFor:C==="label"?v:void 0,...u("body"),children:[c,a.jsxs("div",{...u("labelWrapper"),"data-disabled":n||void 0,children:[r&&a.jsx(I,{component:h,htmlFor:h==="label"?v:void 0,...u("label"),"data-disabled":n||void 0,children:r}),d&&a.jsx($.Description,{size:p,__inheritStyles:!1,...u("description"),children:d}),k&&typeof k!="boolean"&&a.jsx($.Error,{size:p,__inheritStyles:!1,...u("error"),children:k})]})]})})});Y.displayName="@mantine/core/InlineInput";const Z=B.createContext(null),Ce=Z.Provider,ee=()=>B.useContext(Z),[me,ve]=de();var oe={card:"m_26775b0a"};const ke={withBorder:!0},ye=T((e,{radius:s})=>({card:{"--card-radius":W(s)}})),U=G((e,s)=>{const o=V("CheckboxCard",ke,e),{classNames:l,className:t,style:i,styles:c,unstyled:r,vars:d,checked:v,mod:n,withBorder:k,value:p,onClick:x,defaultChecked:C,onChange:h,...f}=o,_=z({name:"CheckboxCard",classes:oe,props:o,className:t,style:i,classNames:l,styles:c,unstyled:r,vars:d,varsResolver:ye,rootSelector:"card"}),b=ee(),g=typeof v=="boolean"?v:(b==null?void 0:b.value.includes(p||""))||void 0,[m,y]=J({value:g,defaultValue:C,finalValue:!1,onChange:h});return a.jsx(me,{value:{checked:m},children:a.jsx(ue,{ref:s,mod:[{"with-border":k,checked:m},n],..._("card"),...f,role:"checkbox","aria-checked":m,onClick:u=>{x==null||x(u),b==null||b.onChange(p||""),y(!m)}})})});U.displayName="@mantine/core/CheckboxCard";U.classes=oe;function fe({children:e,role:s}){const o=be();return o?a.jsx("div",{role:s,"aria-labelledby":o.labelId,"aria-describedby":o.describedBy,children:e}):a.jsx(a.Fragment,{children:e})}const _e={},A=G((e,s)=>{const{value:o,defaultValue:l,onChange:t,size:i,wrapperProps:c,children:r,readOnly:d,...v}=V("CheckboxGroup",_e,e),[n,k]=J({value:o,defaultValue:l,finalValue:[],onChange:t}),p=x=>{const C=typeof x=="string"?x:x.currentTarget.value;!d&&k(n.includes(C)?n.filter(h=>h!==C):[...n,C])};return a.jsx(Ce,{value:{value:n,onChange:p,size:i},children:a.jsx($.Wrapper,{size:i,ref:s,...c,...v,labelElement:"div",__staticSelector:"CheckboxGroup",children:a.jsx(fe,{role:"group",children:r})})})});A.classes=$.Wrapper.classes;A.displayName="@mantine/core/CheckboxGroup";var se={indicator:"m_5e5256ee",icon:"m_1b1c543a","indicator--outline":"m_76e20374"};const ge={icon:M},je=T((e,{radius:s,color:o,size:l,iconColor:t,variant:i,autoContrast:c})=>{const r=K({color:o||e.primaryColor,theme:e}),d=r.isThemeColor&&r.shade===void 0?`var(--mantine-color-${r.color}-outline)`:r.color;return{indicator:{"--checkbox-size":F(l,"checkbox-size"),"--checkbox-radius":s===void 0?void 0:W(s),"--checkbox-color":i==="outline"?d:R(o,e),"--checkbox-icon-color":t?R(t,e):Q(c,e)?L({color:o,theme:e,autoContrast:c}):void 0}}}),E=G((e,s)=>{const o=V("CheckboxIndicator",ge,e),{classNames:l,className:t,style:i,styles:c,unstyled:r,vars:d,icon:v,indeterminate:n,radius:k,color:p,iconColor:x,autoContrast:C,checked:h,mod:f,variant:_,disabled:b,...g}=o,m=v,y=z({name:"CheckboxIndicator",classes:se,props:o,className:t,style:i,classNames:l,styles:c,unstyled:r,vars:d,varsResolver:je,rootSelector:"indicator"}),u=ve(),w=typeof h=="boolean"||typeof n=="boolean"?h||n:(u==null?void 0:u.checked)||!1;return a.jsx(I,{ref:s,...y("indicator",{variant:_}),variant:_,mod:[{checked:w,disabled:b},f],...g,children:a.jsx(m,{indeterminate:n,...y("icon")})})});E.displayName="@mantine/core/CheckboxIndicator";E.classes=se;var re={root:"m_bf2d988c",inner:"m_26062bec",input:"m_26063560",icon:"m_bf295423","input--outline":"m_215c4542"};const Ie={labelPosition:"right",icon:M},Pe=T((e,{radius:s,color:o,size:l,iconColor:t,variant:i,autoContrast:c})=>{const r=K({color:o||e.primaryColor,theme:e}),d=r.isThemeColor&&r.shade===void 0?`var(--mantine-color-${r.color}-outline)`:r.color;return{root:{"--checkbox-size":F(l,"checkbox-size"),"--checkbox-radius":s===void 0?void 0:W(s),"--checkbox-color":i==="outline"?d:R(o,e),"--checkbox-icon-color":t?R(t,e):Q(c,e)?L({color:o,theme:e,autoContrast:c}):void 0}}}),P=G((e,s)=>{const o=V("Checkbox",Ie,e),{classNames:l,className:t,style:i,styles:c,unstyled:r,vars:d,color:v,label:n,id:k,size:p,radius:x,wrapperProps:C,checked:h,labelPosition:f,description:_,error:b,disabled:g,variant:m,indeterminate:y,icon:u,rootRef:w,iconColor:Se,onChange:S,autoContrast:Ne,mod:ae,...ce}=o,j=ee(),te=p||(j==null?void 0:j.size),ne=u,N=z({name:"Checkbox",props:o,classes:re,className:t,style:i,classNames:l,styles:c,unstyled:r,vars:d,varsResolver:Pe}),{styleProps:le,rest:O}=pe(ce),q=he(k),D=j?{checked:j.value.includes(O.value),onChange:H=>{j.onChange(H),S==null||S(H)}}:{};return a.jsx(Y,{...N("root"),__staticSelector:"Checkbox",__stylesApiProps:o,id:q,size:te,labelPosition:f,label:n,description:_,error:b,disabled:g,classNames:l,styles:c,unstyled:r,"data-checked":D.checked||h||void 0,variant:m,ref:w,mod:ae,...le,...C,children:a.jsxs(I,{...N("inner"),mod:{"data-label-position":f},children:[a.jsx(I,{component:"input",id:q,ref:s,checked:h,disabled:g,mod:{error:!!b,indeterminate:y},...N("input",{focusable:!0,variant:m}),onChange:S,...O,...D,type:"checkbox"}),a.jsx(ne,{indeterminate:y,...N("icon")})]})})});P.classes={...re,...xe};P.displayName="@mantine/core/Checkbox";P.Group=A;P.Indicator=E;P.Card=U;export{P as C};
