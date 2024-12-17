"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[4994,195,312,8392],{74994:function(e,t,n){n.r(t),n.d(t,{Component:function(){return d}});var a=n(72176),o=n(84586),i=n(14571),r=n(87899),l=n(16680),c=n(27648),s=n(50195),u=n(70312);const m=[...l.VQ,...l.VM,"name","shortName","code","description","categoryOptions[id,displayName]","dataDimension","dataDimensionType"],d=()=>{const e=l.In.category,t=(0,c.sf)(),n=(0,i.g)().id,d={resource:"categories",id:n,params:{fields:m.concat()}},p=(0,o.useQuery)({queryKey:[d],queryFn:t});return a.createElement(r.C7,{onSubmit:(0,l.p6)({section:e,modelId:n}),section:e,initialValues:p.data,validate:s.validate},a.createElement(r.Q8,{section:e},a.createElement(u.CategoryFormFields,null)))}},70312:function(e,t,n){n.r(t),n.d(t,{CategoryFormFields:function(){return u}});var a=n(28014),o=n(23503),i=n(52791),r=n(72176),l=n(50445),c=n(87899),s=n(16680);const u=()=>{const e=s.In.category;return r.createElement(r.Fragment,null,r.createElement(c.Hl,null,r.createElement(c.L7,null,a.A.t("Basic information")),r.createElement(c.hK,null,a.A.t("Set up the basic information for this category.")),r.createElement(c.Vd,null),r.createElement(c.zO,{schemaSection:e,helpText:a.A.t("Explain the purpose of this category option group.")})),r.createElement(c.Hl,null,r.createElement(c.L7,null,a.A.t("Data configuration")),r.createElement(c.hK,null,a.A.t("Choose how this category option group will be used to capture and analyze")),r.createElement(c.Ys,null,r.createElement(c.ko,{label:"Data dimension type (required)"},r.createElement(l.D0,{name:"dataDimensionType",component:o.q,label:a.A.t("Disaggregation"),type:"radio",value:"DISAGGREGATION"}),r.createElement(l.D0,{name:"dataDimensionType",component:o.q,label:a.A.t("Attribute"),type:"radio",value:"ATTRIBUTE"}))),r.createElement(c.Ys,null,r.createElement(l.D0,{name:"dataDimension",type:"checkbox",component:i.o,label:a.A.t("Use as data dimension"),helpText:a.A.t("Category option group will be available to the analytics as another dimension")}))),r.createElement(c.Hl,null,r.createElement(c.L7,null,r.createElement("label",{htmlFor:"categoryOptions"},a.A.t("Category options"))),r.createElement(c.hK,null,a.A.t("Choose the category options to include in this category option group.")),r.createElement(c.Ys,null,r.createElement(c.Ys,null,r.createElement(c.xN,{name:"categoryOptions",query:{resource:"categoryOptions",params:{filter:["isDefault:eq:false"]}},leftHeader:a.A.t("Available category options"),rightHeader:a.A.t("Selected category options"),filterPlaceholder:a.A.t("Filter available category options"),filterPlaceholderPicked:a.A.t("Filter selected category options")})))),r.createElement(c.Ot,{schemaSection:e}))}},98392:function(e,t,n){n.r(t),n.d(t,{categorySchema:function(){return s},initialValues:function(){return u},validate:function(){return m}});var a=n(73044),o=n(16680),i=n(39512);const{identifiable:r,referenceCollection:l,withAttributeValues:c}=o.UH,s=r.merge(c).extend({shortName:a.z.string().trim(),code:a.z.string().trim().optional(),description:a.z.string().trim().optional(),dataDimensionType:a.z.nativeEnum(i.b7.dataDimensionType).default(i.b7.dataDimensionType.DISAGGREGATION),dataDimension:a.z.boolean().default(!0),categoryOptions:l.min(1,"At least one category option is required").default([])}),u=(0,o.rV)(s),m=(0,o.Re)(s)},50195:function(e,t,n){n.r(t),n.d(t,{categorySchema:function(){return a.categorySchema},validate:function(){return a.validate}});var a=n(98392)}}]);
//# sourceMappingURL=4994.cdb7ce03.chunk.js.map