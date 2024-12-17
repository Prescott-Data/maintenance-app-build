"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[127,9109,2029],{127:function(e,t,n){n.r(t),n.d(t,{Component:function(){return s}});var o=n(72176),a=n(87899),l=n(82740),r=n(16680),i=n(69109),c=n(62029);const u=r.In.categoryOptionGroupSet,s=()=>o.createElement(a.C7,{section:u,onSubmit:(0,r.l4)({section:u}),initialValues:c.initialValues,validate:c.validate},o.createElement(l.E,{section:u},o.createElement(i.default,null)))},69109:function(e,t,n){n.r(t);var o=n(28014),a=n(23503),l=n(52791),r=n(72176),i=n(50445),c=n(87899),u=n(16680);t.default=function(){const e=u.In.categoryOptionGroupSet;return r.createElement(r.Fragment,null,r.createElement(c.Hl,null,r.createElement(c.L7,null,o.A.t("Basic information")),r.createElement(c.hK,null,o.A.t("Set up the basic information for this category option group set.")),r.createElement(c.Vd,null),r.createElement(c.zO,{schemaSection:e,helpText:o.A.t("Explain the purpose of this category option group set.")})),r.createElement(c.Hl,null,r.createElement(c.L7,null,o.A.t("Data configuration")),r.createElement(c.hK,null,o.A.t("Choose how this category option group set will be used to capture and analyze")),r.createElement(c.Ys,null,r.createElement(c.ko,{label:"Data dimension type (required)"},r.createElement(i.D0,{name:"dataDimensionType",component:a.q,label:o.A.t("Disaggregation"),type:"radio",value:"DISAGGREGATION"}),r.createElement(i.D0,{name:"dataDimensionType",component:a.q,label:o.A.t("Attribute"),type:"radio",value:"ATTRIBUTE"}))),r.createElement(c.Ys,null,r.createElement(i.D0,{name:"dataDimension",type:"checkbox",component:l.o,label:o.A.t("Use as data dimension"),helpText:o.A.t("Category option group set will be available to the analytics as another dimension")}))),r.createElement(c.Hl,null,r.createElement(c.L7,null,r.createElement("label",{htmlFor:"categoryOptionGroups"},o.A.t("Category option Groups"))),r.createElement(c.hK,null,o.A.t("Choose the category option groups to include in this category option group set.")),r.createElement(c.Ys,null,r.createElement(c.Ys,null,r.createElement(c.xN,{name:"categoryOptionGroups",query:{resource:"categoryOptionGroups"},leftHeader:o.A.t("Available category option groups"),rightHeader:o.A.t("Selected category option groups"),filterPlaceholder:o.A.t("Filter available category option groups"),filterPlaceholderPicked:o.A.t("Filter selected category option groups")})))),r.createElement(c.Ot,{schemaSection:e}))}},62029:function(e,t,n){n.r(t),n.d(t,{categoryOptionGroupSetSchema:function(){return u},initialValues:function(){return s},validate:function(){return p}});var o=n(73044),a=n(16680),l=n(39512);const{identifiable:r,referenceCollection:i,withAttributeValues:c}=a.UH,u=r.merge(c).extend({shortName:o.z.string().trim(),code:o.z.string().trim().optional(),description:o.z.string().trim().optional(),dataDimensionType:o.z.nativeEnum(l.BC.dataDimensionType).default(l.BC.dataDimensionType.DISAGGREGATION),dataDimension:o.z.boolean().default(!0),categoryOptionGroups:i.min(1,"At least one category option group is required").default([])}),s=(0,a.rV)(u),p=(0,a.Re)(u)}}]);
//# sourceMappingURL=127.bc763798.chunk.js.map