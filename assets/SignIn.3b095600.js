import{u as f,e as v,a as t,j as s,t as w,s as x,d as N}from"./index.589c3f4f.js";import{d as b,r as n,e as S,L as y}from"./vendor.2a02a94c.js";function j(){const o=b(),{data:a}=f(void 0);n.exports.useEffect(()=>{(a==null?void 0:a.whoami)&&o("/")},[a]);const i=S(),[r,d]=n.exports.useState(""),[l,p]=n.exports.useState(""),{mutate:h,error:u,isLoading:g}=v({onSuccess:async e=>{var m,c;e.login&&(w.reset(),x((m=e.login)==null?void 0:m.jwt),N((c=e.login)==null?void 0:c.refreshToken),await i.invalidateQueries(["WhoAmI"]),o("/"))}});return t("div",{className:"flex flex-col items-center mx-auto md:max-w-[300px]",children:[s("h2",{className:"m-1 text-2xl font-extrabold",children:"Login"}),t("form",{onSubmit:e=>{e.preventDefault(),i.clear(),h({email:r,password:l})},className:"my-8 w-full",children:[u&&s("div",{className:"error",children:u.message||"Something went wrong!"}),s("div",{children:s("input",{type:"email",name:"email",placeholder:"email",onChange:e=>d(e.target.value),value:r,autoComplete:"username",required:!0,className:"base-input"})}),s("div",{className:"mt-8",children:s("input",{type:"password",name:"password",placeholder:"password",autoComplete:"current-password",onChange:e=>p(e.target.value),value:l,required:!0,className:"base-input"})}),s("button",{type:"submit",className:"teal-btn mt-8",children:g?"logging in...":"Login"})]}),t("div",{children:["Don't have account,"," ",s(y,{to:"/sign-up",className:"link",children:"Sign up"})]})]})}export{j as default};