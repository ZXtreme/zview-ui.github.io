"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("vue"),y=require("../../input-number/index.js"),V=require("./slider.js"),k=require("./runway.vue.js"),p=require("./utils.js"),u=require("../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_shared@3.2.36/node_modules/@vue/shared/dist/shared.esm-bundler.js"),b=require("../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.js"),S={name:"ZSlider"},T=a.defineComponent({...S,props:V.SliderProps,emits:["input","change"],setup(c,{emit:s}){const r=c,o=a.ref(1),l=a.ref(r.modelValue),i=a.ref(null),h=a.ref(null),t=a.ref(null),d=a.ref(0),w=(e,n)=>{s("change",e,n)},v=(e,n)=>{o.value=e,s("input",e,n)},f=e=>{l.value=e},m=()=>{a.nextTick(()=>{d.value=r.vertical?r.height:t.value.offsetWidth,l.value=r.modelValue,o.value=u.isArray(r.modelValue)?r.modelValue[0]:r.modelValue})};return a.watch(()=>r.modelValue,b.default(()=>{a.nextTick(()=>{if(u.isArray(l.value)?l.value.forEach(e=>{p.isOutBounds(e,r.min,r.max)}):p.isOutBounds(l.value,r.min,r.max),r.range&&(!u.isArray(l.value)||l.value.length!==2))throw new Error("有 range 字段则必须传入 modelValue 一个数组参数");m()})},20),{immediate:!0}),a.watch(()=>r.range,()=>{i.value.update()}),a.watch([()=>r.vertical,()=>r.height],()=>{m()}),(e,n)=>(a.openBlock(),a.createElementBlock("div",{ref_key:"slider",ref:h,class:a.normalizeClass(["z-slider",{"is-vertical":e.vertical},{"is-disabled":e.disabled}])},[a.createElementVNode("div",{class:"z-slider__runway_wraper",ref_key:"runway_wraper",ref:t},[a.createVNode(k.default,{ref_key:"runway",ref:i,modelValue:l.value,min:e.min,max:e.max,step:e.step,showTooltip:e.showTooltip,showStops:e.showStops,disabled:e.disabled,formatTooltip:e.formatTooltip,onChange:w,onInput:v,range:e.range,vertical:e.vertical,width:d.value,height:e.height,placement:e.placement,marks:e.marks,runway_wraper:t.value},null,8,["modelValue","min","max","step","showTooltip","showStops","disabled","formatTooltip","range","vertical","width","height","placement","marks","runway_wraper"])],512),e.showInput?(a.openBlock(),a.createBlock(a.unref(y.default),{key:0,modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=g=>o.value=g),max:e.max,min:e.min,size:e.inputSize,controls:e.showInputControls,onChange:f},null,8,["modelValue","max","min","size","controls"])):a.createCommentVNode("",!0)],2))}});exports.default=T;
