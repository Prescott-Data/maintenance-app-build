"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[156],{60156:function(e,t,i){i.r(t),i.d(t,{ValueTypeField:function(){return v}});var l=i(28014),a=i(40377),o=i(72176),d=i(50445),n=i(16680);const p=l.A.t("The type of data that will be recorded."),u=l.A.t("Disabled as the value type must match the value type of the selected option set"),s=["id","valueType"];function v(){var e,t,i;const{change:v}=(0,d.mN)(),{values:r}=(0,d.lN)({subscription:{values:!0}}),T=!!r.optionSet.id,[c]=(0,o.useState)(!r.optionSet.id),{refetch:f,...h}=(0,n.n9)({lazy:c,variables:{id:r.optionSet.id,fields:s}});(0,o.useEffect)((()=>{r.optionSet.id&&f({id:r.optionSet.id})}),[f,r.optionSet.id]),(0,o.useEffect)((()=>{var e,t;!r.optionSet.id||h.loading||h.fetching||h.error||null===(e=h.data)||void 0===e||!e.optionSets.valueType||v("valueType",null===(t=h.data)||void 0===t?void 0:t.optionSets.valueType)}));const y=(0,n.Ip)(),{dataElement:S}=y,b="MULTI_TEXT"===r.valueType||(null===(e=r.optionSet)||void 0===e?void 0:e.id)&&"MULTI_TEXT"===(null===(t=h.data)||void 0===t?void 0:t.optionSets.valueType),m=null===(i=S.properties.valueType.constants)||void 0===i?void 0:i.map((e=>({value:e,label:n.B$[e]}))).filter((e=>{let{value:t}=e;return b||"MULTI_TEXT"!==t})),_=T?`${p} ${u}`:p;return o.createElement(d.D0,{required:!0,disabled:T,component:a.T,dataTest:"formfields-valuetype",inputWidth:"400px",name:"valueType",label:l.A.t("{{fieldLabel}} (required)",{fieldLabel:l.A.t("Value type")}),helpText:_,options:m||[],validateFields:[],validate:n.mw})}}}]);
//# sourceMappingURL=156.8a404fd9.chunk.js.map