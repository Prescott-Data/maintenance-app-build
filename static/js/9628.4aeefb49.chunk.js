"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[9628,8649,2955,8351],{59628:function(e,t,n){n.r(t),n.d(t,{Component:function(){return d}});var o=n(72176),a=n(84586),r=n(14571),i=n(87899),l=n(16680),c=n(27648),m=n(98649);const u=[...l.VQ,...l.VM,"name","code","ignoreApproval"],s=l.In.categoryOptionCombo,d=()=>{const e=(0,c.sf)(),t=(0,r.g)().id,n={resource:"categoryOptionCombos",id:t,params:{fields:u.concat()}},d=(0,a.useQuery)({queryKey:[n],queryFn:e});return o.createElement(i.C7,{onSubmit:(0,l.p6)({section:s,modelId:t}),section:s,initialValues:d.data,validate:m.validate},o.createElement(i.Q8,{section:s},o.createElement(m.CategoryOptionComboFormFields,null)))}},82955:function(e,t,n){n.r(t),n.d(t,{CategoryOptionComboFormFields:function(){return u}});var o=n(28014),a=n(87949),r=n(52791),i=n(72176),l=n(50445),c=n(87899);const m=n(16680).In.categoryOptionCombo,u=()=>i.createElement(i.Fragment,null,i.createElement(c.Hl,null,i.createElement(c.L7,null,o.A.t("Basic information")),i.createElement(c.hK,null,o.A.t("Set up the basic information for this category.")),i.createElement(c.Ys,null,i.createElement(l.D0,{component:a.f,dataTest:"formfields-name",disabled:!0,inputWidth:"400px",label:o.A.t("Name"),name:"name",validateFields:[]})),i.createElement(c.Ys,null,i.createElement(c.Ij,{schemaSection:m})),i.createElement(c.Ys,null,i.createElement(l.D0,{component:r.o,name:"ignoreApproval",label:o.A.t("Ignore data approval"),validateFields:[],type:"checkbox"}))),i.createElement(c.Ot,{schemaSection:m}))},8351:function(e,t,n){n.r(t),n.d(t,{categoryOptionComboSchema:function(){return l},initialValues:function(){return c},validate:function(){return m}});var o=n(73044),a=n(16680),r=n(55073);const{withAttributeValues:i}=a.UH,l=i.extend({id:o.z.string(),code:o.z.string().trim().optional(),ignoreApproval:o.z.boolean().optional().default(!1)}),c=(0,a.rV)(l),m=(0,r.R)(l)},98649:function(e,t,n){n.r(t),n.d(t,{CategoryOptionComboFormFields:function(){return a.CategoryOptionComboFormFields},categoryOptionComboSchema:function(){return o.categoryOptionComboSchema},validate:function(){return o.validate}});var o=n(8351),a=n(82955)}}]);
//# sourceMappingURL=9628.4aeefb49.chunk.js.map