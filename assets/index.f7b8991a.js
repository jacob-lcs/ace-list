import{r as e,R as t,a as o}from"./vendor.2bc4de49.js";const{useRef:r,useState:l}=t,n=t=>{const o=r(null),[n,s]=l([]),[a,c]=l(0),{rowRenderer:i,dataSource:d=[],height:h,rowHeight:p}=t;return e.exports.createElement("div",{style:{height:h,overflow:"scroll"},onScroll:()=>{var e;const t=(null==(e=o.current)?void 0:e.scrollTop)||0;c(t-t%p);const r=Math.ceil(h/p),l=Math.floor(t/p),n=l+r,a=d.slice(l,n);s(a)},ref:o},e.exports.createElement("div",{style:{height:p*d.length,position:"relative",paddingTop:a}},n.map(((e,t)=>i(e,t)))))},{useState:s}=t,a=()=>{const[t,o]=s([]);return e.exports.createElement("div",null,e.exports.createElement("button",{onClick:()=>{const e=Date.now(),t=[];for(let o=0;o<1e4;o++)t.push(~~(1e4*Math.random()));o(t),console.log("JS 运行时间：",Date.now()-e),setTimeout((()=>{console.log("总运行时间：",Date.now()-e)}),0)}},"点击产生数据"),e.exports.createElement(n,{dataSource:t,rowRenderer:(t,o)=>e.exports.createElement("li",{key:o,style:{height:50}},t),height:500,rowHeight:50}))};o.exports.render(e.exports.createElement(e.exports.StrictMode,null,e.exports.createElement(a,null)),document.getElementById("root"));