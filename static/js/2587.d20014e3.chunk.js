"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[2587,1612],{32587:function(e,t,l){l.r(t),l.d(t,{GeometryFields:function(){return v}});var n=l(28014),o=l(24394),i=l(29178),a=l(72176),d=l(50445),u=l(16680),r=l(31612);function v(){var e,t,l,v,c,s,p,m;const h="geometry",{input:g,meta:y}=(0,d.Mt)(h),F=e=>{let{longitude:t,latitude:l}=e;const n={type:"Point",coordinates:[t||void 0,l||void 0]};g.onChange(n),g.onBlur()};return g.value&&"Point"!==(null===(e=g.value)||void 0===e?void 0:e.type)?a.createElement(i.F,{placeholder:n.A.t("{{type}} coordinates are not editable",{type:(0,u.QA)(null===(m=g.value)||void 0===m?void 0:m.type)}),inputWidth:"400px",disabled:!0}):a.createElement(a.Fragment,null,a.createElement(o.D,{className:r.default.coordinateField,name:h,error:y.touched&&!!y.error,validationText:y.touched?null===(t=y.error)||void 0===t?void 0:t.coordinates:void 0},a.createElement(i.F,{onChange:e=>{var t,l;return F({longitude:e.value?parseFloat(e.value):void 0,latitude:null===(t=g.value)||void 0===t||null===(l=t.coordinates)||void 0===l?void 0:l[1]})},label:n.A.t("Longitude"),inputWidth:"400px",name:"longitude",type:"number",value:null===(l=g.value.coordinates)||void 0===l||null===(v=l[0])||void 0===v?void 0:v.toString(),min:"-90",max:"90",step:"any"}),a.createElement(i.F,{onChange:e=>{var t,l;return F({longitude:null===(t=g.value)||void 0===t||null===(l=t.coordinates)||void 0===l?void 0:l[0],latitude:e.value?parseFloat(e.value):void 0})},inputWidth:"400px",label:n.A.t("Longitude"),name:"latitude",type:"number",value:null===(c=g.value)||void 0===c||null===(s=c.coordinates)||void 0===s||null===(p=s[1])||void 0===p?void 0:p.toString(),min:"-180",max:"180",step:"any"})))}},31612:function(e,t,l){l.r(t),t.default={coordinateField:"GeometryFields_coordinateField__jZie1"}}}]);
//# sourceMappingURL=2587.d20014e3.chunk.js.map