"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[3443,3453,1952,776,2200],{15824:function(e,t,n){n.r(t),n.d(t,{Component:function(){return f}});var r=n(72176),a=n(84586),i=n(14571),c=n(82740),o=n(59493),l=n(16680),u=n(27648),s=n(43453),d=n(30776);const m=["name","factor"],f=()=>{const e=l.In.indicatorType,t=(0,u.sf)(),n=(0,i.g)().id,f={resource:"indicatorTypes",id:n,params:{fields:m.concat()}},p=(0,a.useQuery)({queryKey:[f],queryFn:t});return r.createElement(o.C,{onSubmit:(0,l.p6)({section:e,modelId:n}),section:e,initialValues:p.data,validate:s.validate,includeAttributes:!1},r.createElement(c.E,{section:e},r.createElement(d.IndicatorTypesFormFields,null)))}},21952:function(e,t,n){n.r(t),n.d(t,{FactorField:function(){return u}});var r=n(28014),a=n(87949),i=n(72176),c=n(50445),o=n(16680),l=n(72917);const u=()=>{const e=(0,o.vw)(),t=(0,l.CN)({schemaSection:e,property:"factor"}),{input:n,meta:u}=(0,c.Mt)("factor",{validate:t,type:"number",format:e=>null===e||void 0===e?void 0:e.toString()});return i.createElement(a.f,{input:n,meta:u,inputWidth:"400px",label:r.A.t("Factor"),required:!0})}},30776:function(e,t,n){n.r(t),n.d(t,{IndicatorTypesFormFields:function(){return l}});var r=n(28014),a=n(72176),i=n(87899),c=n(16680),o=n(21952);const l=()=>{const e=c.In.indicatorType,t=(0,c.vw)();return a.createElement(a.Fragment,null,a.createElement(i.Hl,null,a.createElement(i.L7,null,r.A.t("Basic information")),a.createElement(i.hK,null,r.A.t("Set up the basic information for this Indicator Type.")),a.createElement(i.Ys,null,a.createElement(i.om,{schemaSection:t})),a.createElement(i.Ys,null,a.createElement(o.FactorField,null))),a.createElement(i.Ot,{schemaSection:e}))}},52200:function(e,t,n){n.r(t),n.d(t,{IndicatorSchema:function(){return c},initialValues:function(){return o},validate:function(){return l}});var r=n(73044),a=n(16680);const{identifiable:i}=a.UH,c=i.extend({factor:r.z.coerce.number({invalid_type_error:"Please enter a number"}).int()}),o=(0,a.rV)(c),l=(0,a.Re)(c)},43453:function(e,t,n){n.r(t),n.d(t,{IndicatorSchema:function(){return r.IndicatorSchema},validate:function(){return r.validate}});var r=n(52200)}}]);
//# sourceMappingURL=3443.51abf8e5.chunk.js.map