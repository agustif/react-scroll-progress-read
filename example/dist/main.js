!function(e){var i={};function u(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.m=e,u.c=i,u.d=function(e,i,t){u.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,i){if(1&i&&(e=u(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var o in e)u.d(t,o,function(i){return e[i]}.bind(null,o));return t},u.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(i,"a",i),i},u.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},u.p="",u(u.s=1)}([function(e,i){e.exports=React},function(e,i,u){e.exports=u(2)},function(e,i,u){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=u(0),o=u(3),n=u(4);o.render(t.createElement(n.default,null),document.getElementById("app"))},function(e,i){e.exports=ReactDOM},function(e,i,u){"use strict";var t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var i,u=1,t=arguments.length;u<t;u++)for(var o in i=arguments[u])Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);return e}).apply(this,arguments)};Object.defineProperty(i,"__esModule",{value:!0});var o=u(0),n=u(5),m={backgroundColor:"#CCC",barColor:"red",height:"10px"},r=function(e,i){switch(i.type){case"update":return t({},e,i.payload);default:return e}};i.default=o.memo(function(){var e=o.useRef(),i=o.useReducer(r,m),u=i[0],a=i[1],d=function(e){var i,u=e.currentTarget,t=u.name,o=u.value,n=((i={})[t]=o,i);a({type:"update",payload:n})};return o.createElement(o.Fragment,null,o.createElement("div",{style:{margin:0,padding:0,position:"fixed",top:0}},o.createElement(n.default,t({refTarget:e},u))),o.createElement("div",{style:{margin:0,padding:0,position:"fixed",bottom:0}},o.createElement(n.default,{target:"read-container",height:"20px",barColor:"blue"})),o.createElement("div",{style:{margin:0,padding:0,position:"fixed",bottom:"20px"}},o.createElement(n.default,{height:"10px",barColor:"orange"})),o.createElement("div",{style:{maxWidth:"700px",fontSize:"1.2rem",margin:"20px auto",padding:"1rem"}},o.createElement("h1",null,"React Scroll Progress Read"),o.createElement("p",null,o.createElement("ul",null,o.createElement("li",null,"The top bar target element with ref()"),o.createElement("li",null,"The orange bottom bar target the document"),o.createElement("li",null,"The blue bottom bar target element by ID"))),o.createElement("div",null,o.createElement("select",{onChange:d,name:"barColor"},o.createElement("option",{value:"red"},"red"),o.createElement("option",{value:"blue"},"blue"),o.createElement("option",{value:"orange"},"orange")),o.createElement("select",{onChange:d,name:"backgroundColor"},o.createElement("option",{value:"grey"},"grey"),o.createElement("option",{value:"gold"},"gold"),o.createElement("option",{value:"#AAA"},"#AAA")),o.createElement("select",{onChange:d,name:"height"},o.createElement("option",{value:"1px"},"1px"),o.createElement("option",{value:"5px"},"5px"),o.createElement("option",{value:"10px"},"10px"),o.createElement("option",{value:"15px"},"15px"),o.createElement("option",{value:"20px"},"20px"))),o.createElement("p",{ref:e},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?"),o.createElement("h2",null,"Target Container"),o.createElement("p",{id:"read-container"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?")),o.createElement("footer",{style:{height:"400px",background:"#CCC"}}))})},function(e,i,u){"use strict";u.r(i);var t=u(0);const o=(e,i=5)=>Number(e.toFixed(i)),n=({backgroundColor:e,height:i,barColor:u,target:n,refTarget:m})=>{let r;const[a,d]=Object(t.useState)("0%");Object(t.useEffect)(()=>(r=n?document.getElementById(n):null,s(),window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)),[]);const s=()=>{const e=m?m.current:r||null;let i=0,u=0;const t=(()=>{let e=0;return document.documentElement&&null!==document.documentElement&&(e=document.documentElement.scrollTop),window.pageYOffset||e})();e?(i=(e=>{let i=e.offsetHeight;const u=window.getComputedStyle(e),{marginBottom:t,marginTop:o}=u;return t&&o&&(i+=parseInt(o,2)+parseInt(t,2)),i})(e)-document.documentElement.clientHeight,u=e.offsetTop):i=document.documentElement.scrollHeight-document.documentElement.clientHeight;const n=o(t-u);if(t<u)return d("0%");if(n>i)return d("100%");const a=o(n/i),s=`${o(100*a)}%`;d(s)};return Object(t.createElement)("div",{style:{background:e,height:i,width:"100vw"}},Object(t.createElement)("div",{style:{height:i,background:u,width:a}}))};n.defaultProps={backgroundColor:"#CCC",height:"5px",barColor:"#e91e63"},i.default=Object(t.memo)(n)}]);
//# sourceMappingURL=main.js.map