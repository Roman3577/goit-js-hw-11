import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as n}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector(".form"),m=document.querySelector("input[name='delay']");s.addEventListener("submit",e=>{var o;e.preventDefault();const t=Number(m.value),i=(o=document.querySelector("input[name='state']:checked"))==null?void 0:o.value;if(!t){n.warning({title:"Caution",message:"You forgot important data",position:"topRight",timeout:5e3});return}u(t,i).then(r=>{n.success({title:"OK",message:`✅ Fulfilled promise in ${r}ms`,position:"topRight",timeout:5e3})}).catch(r=>{n.error({title:"Error",message:`❌ Rejected promise in ${r}ms`,position:"topRight",timeout:5e3})})});function u(e,t){return new Promise((i,o)=>{setTimeout(()=>{t==="fulfilled"?i(e):o(e)},e)})}
//# sourceMappingURL=2-snackbar.js.map
