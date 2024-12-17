(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[1990,156],{60156:function(e,t,l){"use strict";l.r(t),l.d(t,{ValueTypeField:function(){return r}});var i=l(28014),n=l(40377),a=l(72176),o=l(50445),s=l(16680);const u=i.A.t("The type of data that will be recorded."),c=i.A.t("Disabled as the value type must match the value type of the selected option set"),d=["id","valueType"];function r(){var e,t,l;const{change:r}=(0,o.mN)(),{values:p}=(0,o.lN)({subscription:{values:!0}}),T=!!p.optionSet.id,[h]=(0,a.useState)(!p.optionSet.id),{refetch:m,...f}=(0,s.n9)({lazy:h,variables:{id:p.optionSet.id,fields:d}});(0,a.useEffect)((()=>{p.optionSet.id&&m({id:p.optionSet.id})}),[m,p.optionSet.id]),(0,a.useEffect)((()=>{var e,t;!p.optionSet.id||f.loading||f.fetching||f.error||null===(e=f.data)||void 0===e||!e.optionSets.valueType||r("valueType",null===(t=f.data)||void 0===t?void 0:t.optionSets.valueType)}));const v=(0,s.Ip)(),{dataElement:y}=v,S="MULTI_TEXT"===p.valueType||(null===(e=p.optionSet)||void 0===e?void 0:e.id)&&"MULTI_TEXT"===(null===(t=f.data)||void 0===t?void 0:t.optionSets.valueType),b=null===(l=y.properties.valueType.constants)||void 0===l?void 0:l.map((e=>({value:e,label:s.B$[e]}))).filter((e=>{let{value:t}=e;return S||"MULTI_TEXT"!==t})),E=T?`${u} ${c}`:u;return a.createElement(o.D0,{required:!0,disabled:T,component:n.T,dataTest:"formfields-valuetype",inputWidth:"400px",name:"valueType",label:i.A.t("{{fieldLabel}} (required)",{fieldLabel:i.A.t("Value type")}),helpText:E,options:b||[],validateFields:[],validate:s.mw})}},13724:function(e,t,l){"use strict";l.r(t);var i=l(51594),n=l(72176),a=l(50445),o=l(16680),s=l(60156);jest.mock("../../../lib/optionSet/useOptionSetQuery",(()=>({useOptionSetQuery:jest.fn()}))),jest.mock("../../../lib/schemas/schemaStore",(()=>({...jest.requireActual("../../../lib/schemas/schemaStore"),useSchemas:jest.fn()})));const u=Object.keys(o.B$);describe("<ValueTypeField />",(()=>{const e=o.n9;o.Ip.mockImplementation((()=>({dataElement:{properties:{valueType:{constants:u}}}}))),it("should not have the MULTI_TEXT option when a different value is selected",(async()=>{e.mockImplementation((()=>({called:!1,loading:!1,fetching:!1,error:null,data:null,refetch:jest.fn()})));const t=(0,i.XX)(n.createElement(a.lV,{onSubmit:jest.fn(),initialValues:{valueType:"",optionSet:[]}},(e=>{let{handleSubmit:t}=e;return n.createElement("form",{onSubmit:t},n.createElement(s.ValueTypeField,null))}))),l=await t.findByTestId("dhis2-uicore-select-input");i.rC.click(l);const o=await t.findByText("Text",{selector:'[data-test="dhis2-uicore-singleselectoption"]'});expect(o).toBeTruthy();const u=t.queryByText("Text with multiple values",{selector:'[data-test="dhis2-uicore-singleselectoption"]'});expect(u).toBeFalsy()})),it("should have the MULTI_TEXT option when the selected value is MULTI_TEXT",(async()=>{const t={called:!1,loading:!1,fetching:!1,error:null,data:null,refetch:jest.fn()};e.mockImplementation((()=>t));const l=(0,i.XX)(n.createElement(a.lV,{onSubmit:jest.fn(),initialValues:{valueType:"MULTI_TEXT",optionSet:[]}},(e=>{let{handleSubmit:t}=e;return n.createElement("form",{onSubmit:t},n.createElement(s.ValueTypeField,null))}))),o=await l.findByTestId("dhis2-uicore-select-input");i.rC.click(o),await l.findByText("Text",{selector:'[data-test="dhis2-uicore-singleselectoption"]'});const u=l.queryByText("Text with multiple values",{selector:'[data-test="dhis2-uicore-singleselectoption"]'});expect(u).toBeTruthy()})),it("should have the MULTI_TEXT option auto-selected when the option set's valueType is MULTI_TEXT",(async()=>{const t={called:!1,loading:!1,fetching:!1,error:null,data:{optionSets:{id:"foo",valueType:"MULTI_TEXT"}},refetch:jest.fn()};e.mockImplementation((()=>t));const l=(0,i.XX)(n.createElement(a.lV,{onSubmit:jest.fn(),initialValues:{valueType:"TEXT",optionSet:{id:"foo"}}},(e=>{let{handleSubmit:t}=e;return n.createElement("form",{onSubmit:t},n.createElement(s.ValueTypeField,null))}))),o=await l.findByText("Text with multiple values");expect(o).toBeTruthy()}))}))},86973:function(){}}]);
//# sourceMappingURL=1990.a7db0608.chunk.js.map