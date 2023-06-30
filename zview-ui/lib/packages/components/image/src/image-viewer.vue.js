"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),y=require("./image-viewer.js"),s=require("../../icon/index.js"),E=require("../../dialog/index.js"),z=require("../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.js"),C={class:"z-image"},P={class:"z-image-viewer",style:{height:"calc(100vh - 40px)"}},x={class:"content"},I={class:"arrow"},L={class:"actions"},_=["src"],S={name:"ZImageViewer"},$=e.defineComponent({...S,props:y.imageViewerProps,emits:["closePreview","switch"],setup(g,{emit:u}){const r=g,c=e.ref(r.initialIndex),o=e.ref({scale:1.2,deg:0}),n=e.ref(null),p=e.ref([]),w=()=>{u("closePreview")},k=e.computed(()=>c.value===0),V=e.computed(()=>c.value===r.urlList.length-1),v=a=>{const t=r.urlList.length;c.value=(a%t+t)%t};function i(a){const t=r.zoomRate,l=90;switch(a){case"zoomOut":if(o.value.scale<7){if(o.value.scale=Number.parseFloat((o.value.scale*t).toFixed(3)),!n.value)break;n.value.style.setProperty("--scale",o.value.scale.toString())}break;case"zoomIn":if(o.value.scale>.2){if(o.value.scale=Number.parseFloat((o.value.scale/t).toFixed(3)),!n.value)break;n.value.style.setProperty("--scale",o.value.scale.toString())}break;case"clockwise":o.value.deg+=l,n.value.style.setProperty("--deg",o.value.deg+"deg");break;case"anticlockwise":o.value.deg-=l,n.value.style.setProperty("--deg",o.value.deg+"deg");break;case"reset":d();break}}const d=()=>{n.value.style.setProperty("--deg","0deg"),n.value.style.setProperty("--scale","1.2"),o.value.scale=1.2,o.value.deg=0},N=()=>{k.value&&!r.infinite||(v(c.value-1),d(),u("switch"))},b=()=>{V.value&&!r.infinite||(v(c.value+1),d(),u("switch"))},m=z.default(a=>{const t=a.deltaY||a.deltaX;i(t>0?"zoomOut":"zoomIn")},30);return e.onMounted(()=>{window.addEventListener("mousewheel",m)}),e.onUnmounted(()=>{window.removeEventListener("mousewheel",m)}),(a,t)=>(e.openBlock(),e.createElementBlock("div",C,[e.createVNode(e.unref(E.default),{modelValue:a.visable,"onUpdate:modelValue":t[5]||(t[5]=l=>a.visable=l),bgColor:"transparent",width:"100%",top:"0"},{content:e.withCtx(()=>[e.createElementVNode("button",{type:"button",class:"btn-close",onClick:w,"aria-label":"Close modal"},[e.createVNode(e.unref(s.default),{name:"close1"})]),e.createElementVNode("div",P,[e.createElementVNode("div",x,[e.createElementVNode("div",I,[e.createElementVNode("span",{onClick:N,class:"arrowLeft"},[e.createVNode(e.unref(s.default),{name:"xiangshang2"})]),e.createElementVNode("span",{onClick:b,class:"arrowRight"},[e.createVNode(e.unref(s.default),{name:"xiangxia1"})])]),e.createElementVNode("div",L,[e.createVNode(e.unref(s.default),{onClick:t[0]||(t[0]=l=>i("zoomOut")),name:"zoomOut"}),e.createVNode(e.unref(s.default),{onClick:t[1]||(t[1]=l=>i("zoomIn")),name:"zoomIn"}),e.createVNode(e.unref(s.default),{onClick:t[2]||(t[2]=l=>i("reset")),name:"fullScreen"}),e.createVNode(e.unref(s.default),{onClick:t[3]||(t[3]=l=>i("anticlockwise")),name:"refreshLeft"}),e.createVNode(e.unref(s.default),{onClick:t[4]||(t[4]=l=>i("clockwise")),name:"refreshRight"})]),e.createElementVNode("div",{class:"canvs",ref_key:"canvs",ref:n},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.urlList,(l,f)=>e.withDirectives((e.openBlock(),e.createElementBlock("img",{ref_for:!0,ref:h=>p.value[f]=h,key:l,src:l},null,8,_)),[[e.vShow,f===c.value]])),128))],512)]),e.renderSlot(a.$slots,"default")])]),_:3},8,["modelValue"])]))}});exports.default=$;
