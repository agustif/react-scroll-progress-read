import{useState as e,useEffect as t,createElement as o}from"react";const n=(e,t=5)=>Number(e.toFixed(t)),r=({backgroundColor:r,height:d,barColor:l})=>{const[c,u]=e("0%");t(()=>(m(),window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)));const m=()=>{const e=(()=>{let e=0;return document.documentElement&&null!==document.documentElement&&(e=document.documentElement.scrollTop),window.pageYOffset||e})(),t=document.documentElement.scrollHeight-document.documentElement.clientHeight,o=n(e/t),r=`${n(100*o)}%`;u(r)};return o("div",{style:{background:r,height:d,width:"100vw"}},o("div",{style:{height:d,background:l,width:c}}))};r.defaultProps={backgroundColor:"#CCC",height:"5px",barColor:"#e91e63"};export default r;