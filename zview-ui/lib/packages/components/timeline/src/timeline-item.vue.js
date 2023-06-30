"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),s=require("./timeline-item.js"),r=require("../../icon/index.js"),a=e.createElementVNode("div",{class:"z-timeline-item-tail"},null,-1),c={key:0,class:"z-timeline-item-dot"},d={class:"z-timeline-item-wrapper"},p={key:0,class:"z-timeline-item-timestamp z-timeline-item-top"},u={class:"z-timeline-item-content"},z={key:1,class:"z-timeline-item-timestamp z-timeline-item-bottom"},k={name:"ZTimelineItem"},B=e.defineComponent({...k,props:s.timelineItemProps,setup(o){const n=o,l=e.computed(()=>{const{size:t,type:i,hollow:m}=n;return{[`z-timeline-item-node--${t}`]:t,[`z-timeline-item-node--${i}`]:i,["z-timeline-item-node-hollow"]:m}});return(t,i)=>(e.openBlock(),e.createElementBlock("li",{class:e.normalizeClass(["z-timeline-item",{["z-timeline-item-center"]:t.center}])},[a,t.$slots.dot?(e.openBlock(),e.createElementBlock("div",c,[e.renderSlot(t.$slots,"dot")])):(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(["z-timeline-item-node",e.unref(l)]),style:e.normalizeStyle({backgroundColor:t.color})},[t.icon?(e.openBlock(),e.createBlock(e.unref(r.default),{key:0,class:"z-timeline-item-icon",name:t.icon},null,8,["name"])):e.createCommentVNode("",!0)],6)),e.createElementVNode("div",d,[!t.hideTimestamp&&t.placement==="top"?(e.openBlock(),e.createElementBlock("div",p,e.toDisplayString(t.timestamp),1)):e.createCommentVNode("",!0),e.createElementVNode("div",u,[e.renderSlot(t.$slots,"default")]),!t.hideTimestamp&&t.placement==="bottom"?(e.openBlock(),e.createElementBlock("div",z,e.toDisplayString(t.timestamp),1)):e.createCommentVNode("",!0)])],2))}});exports.default=B;
