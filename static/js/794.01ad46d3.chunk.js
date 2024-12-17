"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[794,7334],{50794:function(e,t,a){a.r(t),a.d(t,{ImageField:function(){return P}});var r=a(5292),l=a(28014),n=a(24394),i=a(70659),s=a(13175),o=a(16812),c=a(41543),d=a(15360),p=a.n(d),u=a(72176);function m(e){let{color:t,dataTest:a,ariaLabel:r}=e;return u.createElement("svg",{height:24,viewBox:"0 0 24 24",width:24,xmlns:"http://www.w3.org/2000/svg",color:t,"data-test":a},u.createElement("path",{d:"M20 14a1 1 0 01.993.883L21 15v3a3 3 0 01-2.824 2.995L18 21H6a3 3 0 01-2.995-2.824L3 18v-3a1 1 0 011.993-.117L5 15v3a1 1 0 00.883.993L6 19h12a1 1 0 00.993-.883L19 18v-3a1 1 0 011-1zM12 4h.02c.023 0 .046.002.07.004L12 4a1.008 1.008 0 01.625.22l.082.073 4 4a1 1 0 01-1.32 1.497l-.094-.083L13 7.415V16a1 1 0 01-1.993.117L11 16V7.413L8.707 9.707a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094 4-4 .082-.073.008-.007-.09.08A1.008 1.008 0 0111.982 4H12z",fill:"currentColor"}))}m.propTypes={color:p().string,dataTest:p().string,ariaLabel:p().string};var f=m,y=a(21039),g=a(45549),h=a(21346),v=a.n(h);function x(e,t,a){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class b extends u.Component{constructor(){super(...arguments),x(this,"ref",(0,u.createRef)()),x(this,"handleClick",(()=>{this.ref.current.click()})),x(this,"handleChange",(e=>{this.props.onChange&&this.props.onChange(this.createHandlerPayload(),e),this.ref.current.value=""})),x(this,"handleBlur",(e=>{this.props.onBlur&&this.props.onBlur(this.createHandlerPayload(),e)})),x(this,"handleFocus",(e=>{this.props.onFocus&&this.props.onFocus(this.createHandlerPayload(),e)})),x(this,"handleKeyDown",(e=>{this.props.onKeyDown&&this.props.onKeyDown(this.createHandlerPayload(),e)}))}createHandlerPayload(){return{files:this.ref.current.files,name:this.props.name}}render(){const{accept:e="*",buttonLabel:t,className:a,dataTest:r="dhis2-uicore-fileinput",disabled:l,error:n,initialFocus:c,large:d,multiple:p,name:m,small:h,tabIndex:x,valid:b,warning:T}=this.props;return u.createElement("div",{"data-test":r,className:i.default.dynamic([["1746996489",[s.Q.dp8,s.Q.dp4]]])+" "+(v()("file-input",a)||"")},u.createElement("div",{className:i.default.dynamic([["1746996489",[s.Q.dp8,s.Q.dp4]]])},u.createElement("input",{id:m,name:m,type:"file",ref:this.ref,onChange:this.handleChange,accept:e,multiple:p,disabled:l,"data-test":`${r}-input`,className:i.default.dynamic([["1746996489",[s.Q.dp8,s.Q.dp4]]])}),u.createElement(y.$,{disabled:l,icon:u.createElement(f,{color:o.T.grey700}),initialFocus:c,large:d,onBlur:this.handleBlur,onClick:this.handleClick,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown,small:h,tabIndex:x,type:"button"},t)),u.createElement(g.k,{error:n,valid:b,warning:T}),u.createElement(i.default,{id:"1746996489",dynamic:[s.Q.dp8,s.Q.dp4]},["input.__jsx-style-dynamic-selector{display:none;}",`.file-input.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:${s.Q.dp8};padding-bottom:${s.Q.dp4};}`]))}}x(b,"defaultProps",{accept:"*",dataTest:"dhis2-uicore-fileinput"}),b.propTypes={accept:p().string,buttonLabel:p().string,className:p().string,dataTest:p().string,disabled:p().bool,error:c.statusPropType,initialFocus:p().bool,large:c.sizePropType,multiple:p().bool,name:p().string,small:c.sizePropType,tabIndex:p().string,valid:c.statusPropType,warning:c.statusPropType,onBlur:p().func,onChange:p().func,onFocus:p().func,onKeyDown:p().func};const T=e=>{let{children:t,className:a,dataTest:r="dhis2-uicore-filelist"}=e;return u.createElement("div",{"data-test":r,className:"jsx-2770071620 "+(a||"")},t,u.createElement(i.default,{id:"2770071620"},["div.jsx-2770071620{padding-top:4px;}",".file-input+div.jsx-2770071620{padding-top:0;}"]))};T.propTypes={children:p().node,className:p().string,dataTest:p().string};var w=a(25431);function k(e){let{color:t,dataTest:a,ariaLabel:r}=e;return u.createElement("svg",{height:16,viewBox:"0 0 16 16",width:16,xmlns:"http://www.w3.org/2000/svg",color:t,"data-test":a},u.createElement("path",{d:"M7 1a3 3 0 012.995 2.824L10 4v7a2 2 0 01-3.995.15L6 11V5a.5.5 0 01.992-.09L7 5v6a1 1 0 001.993.117L9 11V4a2 2 0 00-3.995-.15L5 4v7a3 3 0 005.995.176L11 11V5a.5.5 0 01.992-.09L12 5v6a4 4 0 01-7.995.2L4 11V4a3 3 0 013-3z",fill:"currentColor"}))}k.propTypes={color:p().string,dataTest:p().string,ariaLabel:p().string};var _=k,E=a(64349);const L=e=>{let{className:t,label:a,onRemove:r,removeText:l,loading:n,onCancel:c,cancelText:d,dataTest:p="dhis2-uicore-filelistitem"}=e;return u.createElement("p",{"data-test":p,className:i.default.dynamic([["513536609",[s.Q.dp4,o.T.grey900,o.T.grey700,o.T.red700,o.T.red800,w.w.focus]]])+" "+(v()("selected-file",t)||"")},u.createElement("span",{className:i.default.dynamic([["513536609",[s.Q.dp4,o.T.grey900,o.T.grey700,o.T.red700,o.T.red800,w.w.focus]]])+" icon"},n?u.createElement(E.F,{extrasmall:!0}):u.createElement(_,{color:o.T.grey700})),u.createElement("span",{className:i.default.dynamic([["513536609",[s.Q.dp4,o.T.grey900,o.T.grey700,o.T.red700,o.T.red800,w.w.focus]]])+" text"},u.createElement("span",{className:i.default.dynamic([["513536609",[s.Q.dp4,o.T.grey900,o.T.grey700,o.T.red700,o.T.red800,w.w.focus]]])+" label"},a),n&&c&&d&&u.createElement("span",{onClick:e=>c({},e),"data-test":`${p}-cancel`,className:i.default.dynamic([["513536609",[s.Q.dp4,o.T.grey900,o.T.grey700,o.T.red700,o.T.red800,w.w.focus]]])+" action"},d),!n&&u.createElement("span",{onClick:e=>r({},e),"data-test":`${p}-remove`,tabIndex:0,onKeyDown:e=>{r&&("Enter"!==e.key&&"Backspace"!==e.key&&"Delete"!==e.key||r({},e))},className:i.default.dynamic([["513536609",[s.Q.dp4,o.T.grey900,o.T.grey700,o.T.red700,o.T.red800,w.w.focus]]])+" action"},l)),u.createElement(i.default,{id:"513536609",dynamic:[s.Q.dp4,o.T.grey900,o.T.grey700,o.T.red700,o.T.red800,w.w.focus]},[`p.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0;padding-top:${s.Q.dp4};}`,"span.__jsx-style-dynamic-selector{display:inline-block;}",".icon.__jsx-style-dynamic-selector{margin-inline-end:4px;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:1px;}",".text.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;}",`.label.__jsx-style-dynamic-selector{font-size:14px;color:${o.T.grey900};word-break:break-all;}`,".label.__jsx-style-dynamic-selector::after{content:' ';display:inline-block;width:12px;}",`.action.__jsx-style-dynamic-selector{font-size:12px;line-height:12px;margin-top:0;-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;color:${o.T.grey700};}`,`.action.__jsx-style-dynamic-selector:hover{color:${o.T.red700};}`,`.action.__jsx-style-dynamic-selector:active{color:${o.T.red800};}`,`.action.__jsx-style-dynamic-selector:focus{outline:3px solid ${w.w.focus};outline-offset:2px;}`]))};L.propTypes={onRemove:p().func.isRequired,cancelText:p().string,className:p().string,dataTest:p().string,label:p().string,loading:p().bool,removeText:p().string,onCancel:p().func};var C=a(66123),N=a(50445),j=a(57334);const Q=e=>{const t=new FileReader;return new Promise(((a,r)=>{t.readAsDataURL(e),t.onload=()=>a(t.result),t.onerror=r}))};function P(){var e,t,a,i;const s=(0,r.ow)(),{input:o,meta:c}=(0,N.Mt)("image",{format:e=>e}),[d,p]=(0,u.useState)(),m=e=>{o.onChange(e),o.onBlur()};return u.createElement(n.D,{label:l.A.t("Image"),name:"image",error:c.invalid,valid:c.valid,validationText:null===(e=o.value)||void 0===e?void 0:e.error},u.createElement("div",{className:j.default.fileInputWrapper},u.createElement(B,{fileBase64:d,fileResource:o.value}),u.createElement(b,{accept:"image/*",buttonLabel:l.A.t("Upload an image"),multiple:!1,name:o.name,onChange:async e=>{let{files:t}=e;const a=t[0];if(a instanceof File){(async e=>{const t={name:e.name,size:e.size};m({...t,id:void 0,error:void 0});try{const a=await s.mutate({resource:"fileResources",type:"create",data:{file:e,domain:"ORG_UNIT"}});m({...t,id:a.response.fileResource.id,error:void 0})}catch(a){console.error(a),m({...t,id:void 0,error:a.toString()})}})(a);const e=await Q(a);p(e)}},error:!(!o.value||!o.value.error),valid:!(!o.value||!o.value.id)})),u.createElement(T,null,(null===(t=o.value)||void 0===t?void 0:t.id)&&u.createElement(L,{key:null===(a=o.value)||void 0===a?void 0:a.id,label:null===(i=o.value)||void 0===i?void 0:i.name,onRemove:()=>{p(void 0),o.onChange(void 0),o.onBlur()},removeText:l.A.t("Remove")})),u.createElement(C._,null,l.A.t("Max size 10MB. Supported file size are .jpg, .png, and .gif.")))}const B=e=>{let{fileBase64:t,fileResource:a}=e;const n=(0,r.UK)().baseUrl;if(t)return u.createElement("img",{src:t,alt:l.A.t("Preview of current icon")});if(a&&a.id){const e=`${n}/api/fileResources/${a.id}/data`;return u.createElement("img",{src:e,alt:l.A.t("Preview of current icon")})}return null}},57334:function(e,t,a){a.r(t),t.default={fileInputWrapper:"ImageField_fileInputWrapper__bNcWT"}}}]);
//# sourceMappingURL=794.01ad46d3.chunk.js.map