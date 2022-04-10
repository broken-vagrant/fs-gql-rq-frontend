import{u as d,c as p,a as t,j as e,t as h,s as g,d as f}from"./index.0e2261e7.js";import{d as v,r as w,e as x,L as N}from"./vendor.94af98fa.js";const k=()=>{const n=v(),{data:s}=d(void 0);w.exports.useEffect(()=>{(s==null?void 0:s.whoami)&&n("/")},[s]);const r=x(),{mutate:l,isLoading:m,error:i}=p({onSuccess:async a=>{h.reset(),g(a.signupUser.jwt),f(a.signupUser.refreshToken),await r.invalidateQueries(["WhoAmI"]),n("/")}});return t("div",{className:"flex flex-col items-center mx-auto md:max-w-[300px]",children:[e("h2",{className:"text-2xl font-bold",children:"SignUp"}),t("form",{onSubmit:async a=>{a.preventDefault();const{email:o,password:c,name:u}=a.currentTarget.elements;l({data:{email:o.value,password:c.value,name:u.value}})},className:"my-8 w-full",children:[i&&e("div",{className:"mt-8 error",children:i.message||"Something went wrong!"}),e("div",{children:e("input",{type:"text",name:"name",placeholder:"name",autoComplete:"name",className:"base-input"})}),e("div",{className:"mt-8",children:e("input",{type:"email",name:"email",placeholder:"email",autoComplete:"username",className:"base-input"})}),e("div",{className:"mt-8",children:e("input",{type:"password",name:"password",placeholder:"password",autoComplete:"current-password",className:"base-input"})}),e("button",{className:"teal-btn mt-8",type:"submit",children:m?"processing...":"Sign Up"})]}),t("div",{children:["Already have an account,"," ",e(N,{to:"/sign-in",className:"link",children:"Sign in"})]})]})};export{k as default};
