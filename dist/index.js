import{useState as e,useEffect as t,createElement as o}from"react";const n=(e,t=5)=>Number(e.toFixed(t)),r=({backgroundColor:r,height:l,barColor:d,target:c})=>{const m=c?document.getElementById(c):null,[u,i]=e("0%");t(()=>(s(),window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)),[]);const s=()=>{let e=0,t=0;const o=(()=>{let e=0;return document.documentElement&&null!==document.documentElement&&(e=document.documentElement.scrollTop),window.pageYOffset||e})();m?(e=(e=>{let t=e.offsetHeight;const o=window.getComputedStyle(e),{marginBottom:n,marginTop:r}=o;return n&&r&&(t+=parseInt(r,2)+parseInt(n,2)),t})(m)-document.documentElement.clientHeight,t=m.offsetTop):e=document.documentElement.scrollHeight-document.documentElement.clientHeight;const r=n(o-t);if(o<t&&"0%"!==u)return i("0%");if(r>e&&"100%"!==u)return i("100%");const l=n(r/e),d=`${n(100*l)}%`;i(d)};return o("div",{style:{background:r,height:l,width:"100vw"}},o("div",{style:{height:l,background:d,width:u}}))};r.defaultProps={backgroundColor:"#CCC",height:"5px",barColor:"#e91e63"};export default r;
