import"./assets/modulepreload-polyfill-3cfb730f.js";const n=document.querySelector("form.feedback-form"),a=document.querySelector('input[name="email"]'),r=document.querySelector('textarea[name="message"]'),o="feedback-form-state";let e=JSON.parse(localStorage.getItem(o))||{};const i=()=>{a.value=e.email?e.email.trim():"",r.value=e.message?e.message.trim():""},l=(t,m)=>{const s=t.target.value.trim();e={...e,[m]:s},localStorage.setItem(o,JSON.stringify(e))},c=t=>{t.preventDefault();const m=t.target;if(a.value.trim()===""||r.value.trim()===""){alert("The email and message fields must be filled in");return}console.log({email:a.value.trim(),message:r.value.trim()}),e={},localStorage.setItem(o,JSON.stringify(e)),m.reset()};document.addEventListener("DOMContentLoaded",()=>{i()});a.addEventListener("input",t=>l(t,"email"));r.addEventListener("input",t=>l(t,"message"));n.addEventListener("submit",c);
//# sourceMappingURL=commonHelpers2.js.map
