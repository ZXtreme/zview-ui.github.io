"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("vue"),a=require("./badge.js"),l={class:"z-badge"},i=["textContent"],c={name:"ZBadge"},d=t.defineComponent({...c,props:a.badgeProps,setup(s,{expose:r}){const e=s,u=t.computed(()=>e.type&&e.value&&!e.isDot?{[`z-badge-type--${e.type}`]:e.type}:{"is-dot":e.isDot}),n=t.computed(()=>e.isDot?"":typeof e.value=="number"&&typeof e.max=="number"?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return r({content:n}),(o,p)=>(t.openBlock(),t.createElementBlock("div",l,[t.renderSlot(o.$slots,"default"),t.withDirectives(t.createElementVNode("sup",{class:t.normalizeClass(t.unref(u)),textContent:t.toDisplayString(t.unref(n))},null,10,i),[[t.vShow,!o.hidden&&(t.unref(n)||o.isDot)]])]))}});exports.default=d;
