"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),s=require("./container.js"),l={name:"ZFooter"},u=e.defineComponent({...l,props:s.FooterProps,setup(t){const o=t,r=e.computed(()=>({height:o.height}));return(n,c)=>(e.openBlock(),e.createElementBlock("footer",{class:"z-footer",style:e.normalizeStyle(e.unref(r))},[e.renderSlot(n.$slots,"default")],4))}});exports.default=u;
