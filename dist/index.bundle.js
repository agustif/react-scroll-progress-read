var ScrollProgress=function(e){"use strict";const t=(e,t=5)=>Number(e.toFixed(t)),o=({backgroundColor:o,height:n,barColor:r})=>{const[c,l]=e.useState("0%");e.useEffect(()=>(d(),window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)));const d=()=>{const e=(()=>{let e=0;return document.documentElement&&null!==document.documentElement&&(e=document.documentElement.scrollTop),window.pageYOffset||e})(),o=document.documentElement.scrollHeight-document.documentElement.clientHeight,n=t(e/o),r=`${t(100*n)}%`;l(r)},u={background:o,height:n,width:"100vw"},s={height:n,background:r,width:c};return e.createElement("div",{style:u},e.createElement("div",{style:s}))};return o.defaultProps={backgroundColor:"#CCC",height:"5px",barColor:"#e91e63"},o}(React);