"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[492],{60492:function(e,r,t){t.r(r),t.d(r,{useFilteredOrgUnits:function(){return l},usePaginatedChildrenOrgUnitsController:function(){return u}});var s=t(72176),n=t(84586),a=t(27648);const i=["id","access","displayName","level","path","parent","children~size~rename(childCount)"],c=e=>{const r=i.concat(e),t=`ancestors[${r.join()},href]`;return r.concat(t)},l=e=>{let{fieldFilters:r,searchQuery:t,enabled:s}=e;const i=(0,a.sf)(),l={resource:"organisationUnits",params:{fields:c(r),query:t,withinUserHierarchy:!0}};return(0,n.useQuery)({enabled:s,queryKey:[l],queryFn:i,staleTime:6e4,cacheTime:6e4,keepPreviousData:!0})},u=e=>{const r=(0,a.sf)(),t=e.parentIds,[i,l]=(0,s.useState)(Object.fromEntries(Object.keys(t).map((e=>[e,[1]])))),u=(0,s.useMemo)((()=>Object.keys(t).flatMap((e=>(i[e]||[1]).map((r=>[e,r]))))),[t,i]),o=(0,s.useCallback)((e=>{l((r=>{const t=r[e]||[1];return{...r,[e]:[...t,t[t.length-1]+1]}}))}),[l]),d=u.map((t=>{let[s,n]=t;const a={resource:"organisationUnits",params:{fields:c(e.fieldFilters),filter:[`parent.id:eq:${s}`,`id:eq:${s}`],rootJunction:"OR",order:"displayName:asc",page:n}};return{enabled:e.enabled,queryKey:[a],queryFn:r,staleTime:6e4,cacheTime:6e4,meta:{parent:s}}}));return{queries:(0,n.useQueries)(d),fetchNextPage:o}}}}]);
//# sourceMappingURL=492.8c10f161.chunk.js.map