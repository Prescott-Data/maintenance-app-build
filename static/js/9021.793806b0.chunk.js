"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[9021,2514,1333,5749],{75785:function(e,t,n){n.r(t),n.d(t,{Component:function(){return m}});var i=n(72176),a=n(84586),o=n(14571),r=n(87899),l=n(16680),s=n(27648),u=n(75764);const c=[...l.VQ,...l.VM,"name","code","shortName","openingDate","closedDate","comment","image[id,name]","description","contactPerson","address","email","phoneNumber","url","geometry","dataSets","programs","level","path","parent[id,path, displayName]"],d=l.In.organisationUnit,m=()=>{const e=(0,s.sf)(),t=(0,o.g)().id,n={resource:"organisationUnits",id:t,params:{fields:c.concat()}},m=(0,a.useQuery)({queryKey:[n],queryFn:e});return i.createElement(r.C7,{onSubmit:(0,l.p6)({section:d,modelId:t}),section:d,initialValues:m.data,validate:u.validate},i.createElement(r.Q8,{section:d},i.createElement(u.OrganisationUnitFormField,null)))}},75764:function(e,t,n){n.r(t),n.d(t,{ImageField:function(){return a.ImageField},OrganisationUnitFormField:function(){return i.OrganisationUnitFormField},OrganisationUnitSelector:function(){return o.OrganisationUnitSelector},initialValues:function(){return r.initialValues},organisationUnitSchema:function(){return r.organisationUnitSchema},validate:function(){return r.validate}});var i=n(42077),a=n(50794),o=n(4100),r=n(45749)},45749:function(e,t,n){n.r(t),n.d(t,{initialValues:function(){return c},organisationUnitSchema:function(){return u},validate:function(){return d}});var i=n(28014),a=n(73044),o=n(16680);const{withAttributeValues:r,identifiable:l,referenceCollection:s}=o.UH,u=l.merge(r).extend({shortName:a.z.string().trim().default(""),code:a.z.string().trim().optional(),description:a.z.string().trim().optional(),image:a.z.object({id:a.z.string()}).optional(),phoneNumber:a.z.string().min(0,{message:i.A.t("Must be a valid mobile number")}).max(150,{message:i.A.t("Must be a valid mobile number")}).optional(),contactPerson:a.z.string().max(255,{message:i.A.t("Should not exceed {{maxLength}} characters",{maxLength:255})}).optional(),openingDate:a.z.coerce.date(),email:a.z.string().email().optional(),address:a.z.string().max(230,{message:i.A.t("Should not exceed {{maxLength}} characters",{maxLength:255})}).optional(),url:a.z.string().url({message:i.A.t("Must be a valid url")}).optional(),closedDate:a.z.coerce.date().optional(),comment:a.z.string().max(2e3,{message:i.A.t("Should not exceed {{maxLength}} characters",{maxLength:2e3})}).optional(),parent:a.z.object({id:a.z.string(),path:a.z.string()}).optional(),geometry:a.z.object({type:a.z.literal("Point"),coordinates:a.z.array(a.z.number()).length(2).refine((e=>e[0]>=-90&&e[0]<=90&&e[1]>=-180&&e[1]<=180),{message:i.A.t("Longitude should be between -90 and 90. Latitude should be between -180 and 180")})}).or(a.z.object({type:a.z.union([a.z.literal("Multipoint"),a.z.literal("Linestring"),a.z.literal("Multilinestring"),a.z.literal("Polygon"),a.z.literal("Multipolygon"),a.z.literal("Geometrycollection")])})).optional(),programs:s.optional().default([]),dataSets:s.optional().default([])}).refine((e=>{var t;if(!e.id)return!0;return!(null===(t=e.parent)||void 0===t?void 0:t.path.includes(e.id))}),{message:i.A.t("Parent organisation unit cannot be itself or a descendant of itself."),path:["parent"]}),c=(0,o.rV)(u),d=(0,o.Re)(u)}}]);
//# sourceMappingURL=9021.793806b0.chunk.js.map