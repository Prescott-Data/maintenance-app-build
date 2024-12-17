"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[2951,6414,6827,3617],{26414:function(e,t,a){a.r(t),a.d(t,{CategoriesField:function(){return h}});var o=a(28014),r=a(24394),l=a(90591),n=a(72176),i=a(50445),c=a(14571),s=a(75204),m=a(87899),d=a(36827),u=a(53617);const g={resource:"categories",params:{fields:["id","displayName","categoryOptions~size~rename(categoryOptionsSize)"],order:"displayName:asc",filter:["name:ne:default"]}},p="categories",y=new Intl.NumberFormat;function h(){var e,t,a;const s=null===(e=(0,c.g)())||void 0===e?void 0:e.id,{input:u,meta:h}=(0,i.Mt)(p,{multiple:!0,validateFields:[]}),b=(null===(t=u.value)||void 0===t?void 0:t.reduce(((e,t)=>e*t.categoryOptionsSize),1))||0;return n.createElement("div",{className:d.default.categoriesFieldWrapper},n.createElement(r.D,{dataTest:"formfields-modeltransfer",error:h.invalid,validationText:h.touched&&(null===(a=h.error)||void 0===a?void 0:a.toString())||"",name:p},n.createElement(m.tW,{selected:u.value,onChange:e=>{let{selected:t}=e;u.onChange(t),u.onBlur()},leftHeader:o.A.t("Available categories"),rightHeader:o.A.t("Selected categories"),filterPlaceholder:o.A.t("Filter available categories"),filterPlaceholderPicked:o.A.t("Filter selected categories"),query:g,maxSelections:200})),n.createElement("div",{className:d.default.categoriesNoticesWrapper},!s&&b>1&&n.createElement(l.I,{warning:b>250},o.A.t("{{count}} category option combinations will be generated.",{count:y.format(b)})),n.createElement(C,{catComboId:s,selectedCategories:u.value})))}const C=e=>{var t;let{selectedCategories:a,catComboId:r}=e;const i=a.length>4,c=(0,u.useIdenticalCategoryCombosQuery)({categoryComboId:r,selectedCategories:a,enabled:!i}),s=c.isSuccess&&(null===(t=c.data)||void 0===t?void 0:t.pager.total)>0;return i||s?n.createElement(n.Fragment,null,s&&n.createElement(b,{categoryCombos:c.data.categoryCombos}),i&&n.createElement(l.I,{warning:!0,title:o.A.t("More than 4 Categories")},o.A.t("A Category combination with more than 4 categories is not recommended."))):null},b=e=>{let{categoryCombos:t}=e;return n.createElement(l.I,{warning:!0,title:o.A.t("Identical Category Combination")},o.A.t("One or more Category combinations with the same categories already exist in the system. \n        It is strongly discouraged to have more than one Category combination with the same categories."),n.createElement("br",null),o.A.t("The following Category combinations have identical categories:"),n.createElement("ul",{className:d.default.identicalCategoriesList},t.map((e=>n.createElement("li",{key:e.id},n.createElement(s.k2,{target:"_blank",to:`../${e.id}`},e.displayName))))))}},52951:function(e,t,a){a.r(t),a.d(t,{CategoryComboFormFields:function(){return g}});var o=a(28014),r=a(23503),l=a(52791),n=a(72176),i=a(50445),c=a(14571),s=a(87899),m=a(16680),d=a(26414);const u=m.In.categoryCombo,g=()=>{const e=void 0===(0,c.g)().id;return n.createElement(n.Fragment,null,n.createElement(s.Hl,null,n.createElement(s.L7,null,o.A.t("Basic information")),n.createElement(s.hK,null,o.A.t("Set up the basic information for this category.")),n.createElement(s.Ys,null,n.createElement(s.om,{schemaSection:u})),n.createElement(s.Ys,null,n.createElement(s.Ij,{schemaSection:u}))),n.createElement(s.Hl,null,n.createElement(s.L7,null,o.A.t("Data configuration")),n.createElement(s.hK,null,o.A.t("Choose how this category combo will be used to capture and analyze data.")),n.createElement(s.Ys,null,n.createElement(s.ko,{label:"Data dimension type (required)"},n.createElement(i.D0,{name:"dataDimensionType",component:r.q,label:o.A.t("Disaggregation"),type:"radio",value:"DISAGGREGATION",disabled:!e}),n.createElement(i.D0,{name:"dataDimensionType",component:r.q,label:o.A.t("Attribute"),type:"radio",value:"ATTRIBUTE",disabled:!e}))),n.createElement(s.Ys,null,n.createElement(i.D0,{name:"skipTotal",type:"checkbox",component:l.o,label:o.A.t("Skip category total in reports")}))),n.createElement(s.Hl,null,n.createElement(s.L7,null,n.createElement("label",{htmlFor:"categories"},o.A.t("Categories"))),n.createElement(s.hK,null,o.A.t("Choose the categories to include in this category combo.")),n.createElement(s.Ys,null,n.createElement(d.CategoriesField,null))))}},53617:function(e,t,a){a.r(t),a.d(t,{useIdenticalCategoryCombosQuery:function(){return l}});var o=a(84586),r=a(27648);const l=e=>{let{categoryComboId:t,selectedCategories:a,...l}=e;const n=(0,r.sf)(),i=`id:ne:${t}`,c=a.map((e=>`categories.id:eq:${e.id}`)),s=[`categories:eq:${a.length}`,...c];t&&s.push(i);const m={resource:"categoryCombos",params:{fields:["id","displayName"],filter:s}};return(0,o.useQuery)({staleTime:6e4,...l,queryKey:[m],queryFn:n})}},36827:function(e,t,a){a.r(t),t.default={categoriesFieldWrapper:"CategoryCombo_categoriesFieldWrapper__00djY",categoriesNoticesWrapper:"CategoryCombo_categoriesNoticesWrapper__R4Myf",identicalCategoriesList:"CategoryCombo_identicalCategoriesList__chLzG"}}}]);
//# sourceMappingURL=2951.5604adfd.chunk.js.map