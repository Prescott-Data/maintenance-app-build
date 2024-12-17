"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[9157,5046,6414,6827,2951,9107,3617],{49157:function(e,t,a){a.r(t),a.d(t,{Component:function(){return d}});var o=a(72176),n=a(87899),r=a(82740),i=a(16680),l=a(65046),c=a(52951),s=a(39107);const m=i.In.categoryCombo,d=()=>o.createElement(n.C7,{onSubmit:(0,i.l4)({section:m}),initialValues:s.initialValues,validate:l.validate,includeAttributes:!1},o.createElement(r.E,{section:m},o.createElement(c.CategoryComboFormFields,null)))},26414:function(e,t,a){a.r(t),a.d(t,{CategoriesField:function(){return b}});var o=a(28014),n=a(24394),r=a(90591),i=a(72176),l=a(50445),c=a(14571),s=a(75204),m=a(87899),d=a(36827),u=a(53617);const g={resource:"categories",params:{fields:["id","displayName","categoryOptions~size~rename(categoryOptionsSize)"],order:"displayName:asc",filter:["name:ne:default"]}},y="categories",p=new Intl.NumberFormat;function b(){var e,t,a;const s=null===(e=(0,c.g)())||void 0===e?void 0:e.id,{input:u,meta:b}=(0,l.Mt)(y,{multiple:!0,validateFields:[]}),f=(null===(t=u.value)||void 0===t?void 0:t.reduce(((e,t)=>e*t.categoryOptionsSize),1))||0;return i.createElement("div",{className:d.default.categoriesFieldWrapper},i.createElement(n.D,{dataTest:"formfields-modeltransfer",error:b.invalid,validationText:b.touched&&(null===(a=b.error)||void 0===a?void 0:a.toString())||"",name:y},i.createElement(m.tW,{selected:u.value,onChange:e=>{let{selected:t}=e;u.onChange(t),u.onBlur()},leftHeader:o.A.t("Available categories"),rightHeader:o.A.t("Selected categories"),filterPlaceholder:o.A.t("Filter available categories"),filterPlaceholderPicked:o.A.t("Filter selected categories"),query:g,maxSelections:200})),i.createElement("div",{className:d.default.categoriesNoticesWrapper},!s&&f>1&&i.createElement(r.I,{warning:f>250},o.A.t("{{count}} category option combinations will be generated.",{count:p.format(f)})),i.createElement(C,{catComboId:s,selectedCategories:u.value})))}const C=e=>{var t;let{selectedCategories:a,catComboId:n}=e;const l=a.length>4,c=(0,u.useIdenticalCategoryCombosQuery)({categoryComboId:n,selectedCategories:a,enabled:!l}),s=c.isSuccess&&(null===(t=c.data)||void 0===t?void 0:t.pager.total)>0;return l||s?i.createElement(i.Fragment,null,s&&i.createElement(f,{categoryCombos:c.data.categoryCombos}),l&&i.createElement(r.I,{warning:!0,title:o.A.t("More than 4 Categories")},o.A.t("A Category combination with more than 4 categories is not recommended."))):null},f=e=>{let{categoryCombos:t}=e;return i.createElement(r.I,{warning:!0,title:o.A.t("Identical Category Combination")},o.A.t("One or more Category combinations with the same categories already exist in the system. \n        It is strongly discouraged to have more than one Category combination with the same categories."),i.createElement("br",null),o.A.t("The following Category combinations have identical categories:"),i.createElement("ul",{className:d.default.identicalCategoriesList},t.map((e=>i.createElement("li",{key:e.id},i.createElement(s.k2,{target:"_blank",to:`../${e.id}`},e.displayName))))))}},52951:function(e,t,a){a.r(t),a.d(t,{CategoryComboFormFields:function(){return g}});var o=a(28014),n=a(23503),r=a(52791),i=a(72176),l=a(50445),c=a(14571),s=a(87899),m=a(16680),d=a(26414);const u=m.In.categoryCombo,g=()=>{const e=void 0===(0,c.g)().id;return i.createElement(i.Fragment,null,i.createElement(s.Hl,null,i.createElement(s.L7,null,o.A.t("Basic information")),i.createElement(s.hK,null,o.A.t("Set up the basic information for this category.")),i.createElement(s.Ys,null,i.createElement(s.om,{schemaSection:u})),i.createElement(s.Ys,null,i.createElement(s.Ij,{schemaSection:u}))),i.createElement(s.Hl,null,i.createElement(s.L7,null,o.A.t("Data configuration")),i.createElement(s.hK,null,o.A.t("Choose how this category combo will be used to capture and analyze data.")),i.createElement(s.Ys,null,i.createElement(s.ko,{label:"Data dimension type (required)"},i.createElement(l.D0,{name:"dataDimensionType",component:n.q,label:o.A.t("Disaggregation"),type:"radio",value:"DISAGGREGATION",disabled:!e}),i.createElement(l.D0,{name:"dataDimensionType",component:n.q,label:o.A.t("Attribute"),type:"radio",value:"ATTRIBUTE",disabled:!e}))),i.createElement(s.Ys,null,i.createElement(l.D0,{name:"skipTotal",type:"checkbox",component:r.o,label:o.A.t("Skip category total in reports")}))),i.createElement(s.Hl,null,i.createElement(s.L7,null,i.createElement("label",{htmlFor:"categories"},o.A.t("Categories"))),i.createElement(s.hK,null,o.A.t("Choose the categories to include in this category combo.")),i.createElement(s.Ys,null,i.createElement(d.CategoriesField,null))))}},39107:function(e,t,a){a.r(t),a.d(t,{categoryComboSchema:function(){return d},initialValues:function(){return u},validate:function(){return g}});var o=a(28014),n=a(73044),r=a(16680),i=a(55073),l=a(13520);const{identifiable:c,withAttributeValues:s,modelReference:m}=r.UH,d=c.merge(s).extend({code:n.z.string().trim().optional(),dataDimensionType:n.z.nativeEnum(l.lI.dataDimensionType).default(l.lI.dataDimensionType.DISAGGREGATION),skipTotal:n.z.boolean().default(!1),categories:n.z.array(m.extend({displayName:n.z.string(),categoryOptionsSize:n.z.number()})).min(1,o.A.t("At least one category is required")).refine((e=>e.reduce(((e,t)=>e*t.categoryOptionsSize),1)<5e4),{message:o.A.t("The number of generated category option combinations exceeds the limit of {{limit}}",{limit:5e4})}).default([])}),u=(0,r.rV)(d),g=(0,i.R)(d)},65046:function(e,t,a){a.r(t),a.d(t,{CategoryComboFormFields:function(){return n.CategoryComboFormFields},categoryComboSchema:function(){return o.categoryComboSchema},validate:function(){return o.validate}});var o=a(39107),n=a(52951)},53617:function(e,t,a){a.r(t),a.d(t,{useIdenticalCategoryCombosQuery:function(){return r}});var o=a(84586),n=a(27648);const r=e=>{let{categoryComboId:t,selectedCategories:a,...r}=e;const i=(0,n.sf)(),l=`id:ne:${t}`,c=a.map((e=>`categories.id:eq:${e.id}`)),s=[`categories:eq:${a.length}`,...c];t&&s.push(l);const m={resource:"categoryCombos",params:{fields:["id","displayName"],filter:s}};return(0,o.useQuery)({staleTime:6e4,...r,queryKey:[m],queryFn:i})}},36827:function(e,t,a){a.r(t),t.default={categoriesFieldWrapper:"CategoryCombo_categoriesFieldWrapper__00djY",categoriesNoticesWrapper:"CategoryCombo_categoriesNoticesWrapper__R4Myf",identicalCategoriesList:"CategoryCombo_identicalCategoriesList__chLzG"}}}]);
//# sourceMappingURL=9157.ddfa1a23.chunk.js.map