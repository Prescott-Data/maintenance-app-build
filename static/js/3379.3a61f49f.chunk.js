"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[3379,1179,2859,7994,4618,3487,5412,4619,5631,7401,7780],{41179:function(e,t,r){r.r(t),r.d(t,{AllOverview:function(){return i},Component:function(){return l}});var a=r(28014),n=r(72176),o=r(52859),u=r(67994),c=r(95631);const i=()=>n.createElement(c.OverviewGroup,{title:a.A.t("Metadata management")},n.createElement(u.DataElementsCardGroup,{showTitle:!0}),n.createElement(o.CategoryCardGroup,{showTitle:!0})),l=i;t.default=i},52859:function(e,t,r){r.r(t),r.d(t,{CategoryCardGroup:function(){return m},CategoryOverview:function(){return l},Component:function(){return d}});var a=r(28014),n=r(72176),o=r(16680),u=r(14618),c=r(95631);const i=o.In.category.titlePlural,l=()=>n.createElement(c.OverviewGroup,{title:i},n.createElement(c.OverviewGroupSummary,null,a.A.t('Categories are typically a concept, for example "Gender", "Age" or "Disease Status". Use categories to disaggregate data elements into individual components. You can also use category combinations to assign metadata attributes to all data recorded in a specific dataset.')),n.createElement(m,null)),m=e=>{let{showTitle:t}=e;return n.createElement(u.SummaryCardGroup,{title:t?i:void 0,section:o.nU.category},n.createElement(u.FilterAuthorizedSections,null,n.createElement(u.SummaryCard,{section:o.In.categoryOption},a.A.t("Individual values or options that can be selected within a category.")),n.createElement(u.SummaryCard,{section:o.In.category},a.A.t("Disaggregate data elements into individual components.")),n.createElement(u.SummaryCard,{section:o.In.categoryCombo},a.A.t("Combine multiple categories into a related set that can be assigned to data elements for dissagregation. Can also be used to to assign metadata attributes to data sets or programs.")),n.createElement(u.SummaryCard,{section:o.In.categoryOptionCombo},a.A.t("Specify code and attributes to enable easier data exchange with other systems.")),n.createElement(u.SummaryCard,{section:o.In.categoryOptionGroup},a.A.t("Group category options and improve analysis with category option group sets.")),n.createElement(u.SummaryCard,{section:o.In.categoryOptionGroupSet},a.A.t("Classify category options groups to add more dimensionality to captured data for analysis."))))},d=l},67994:function(e,t,r){r.r(t),r.d(t,{Component:function(){return d},DataElementsCardGroup:function(){return m},DataElementsOverview:function(){return l}});var a=r(28014),n=r(72176),o=r(16680),u=r(14618),c=r(95631);const i=o.In.dataElement.titlePlural,l=()=>n.createElement(c.OverviewGroup,{title:i},n.createElement(c.OverviewGroupSummary,null,a.A.t("Data elements are the core foundational item of DHIS2 and are used for data collection. Data elements can be organised by group and group set.")),n.createElement(m,null)),m=e=>{let{showTitle:t}=e;return n.createElement(u.SummaryCardGroup,{title:t?i:void 0,section:o.nU.dataElement},n.createElement(u.FilterAuthorizedSections,null,n.createElement(u.SummaryCard,{section:o.In.dataElement},a.A.t("Building block elements of your database. The foundation of data collection and analysis.")),n.createElement(u.SummaryCard,{section:o.In.dataElementGroup},a.A.t("Improve analysis of single data elements by combining them into data element groups.")),n.createElement(u.SummaryCard,{section:o.In.dataElementGroupSet},a.A.t("Add another level of organisation by grouping data element groups into group sets."))))},d=l},43487:function(e,t,r){r.r(t),r.d(t,{FilterAuthorizedSections:function(){return o}});var a=r(72176),n=r(16680);const o=e=>{let{children:t}=e;const r=(0,n.zK)();return a.createElement(a.Fragment,null,a.Children.map(t,(e=>e.props.section?e&&r(e.props.section)?e:null:e)))}},5412:function(e,t,r){r.r(t),r.d(t,{SummaryCard:function(){return p},SummaryCardActions:function(){return f},SummaryCardContent:function(){return y},SummaryCardGroup:function(){return s}});var a=r(28014),n=r(21039),o=r(89153),u=r(72176),c=r(75204),i=r(16680),l=r(84619);const m=u.createElement(o.A,null),d=e=>{let{children:t}=e;return u.createElement("div",{className:l.default.cardHeader},t)},s=e=>{let{children:t,title:r,section:a}=e;return(0,i.zK)()(a)?u.createElement(u.Fragment,null,r&&u.createElement("div",{className:l.default.cardGroupHeader},r),u.createElement("div",{className:l.default.cardGroup},t)):null},p=e=>{let{icon:t=m,children:r,section:a}=e;const n=a.title;return u.createElement("div",{"data-test":`card-${n}`,className:l.default.cardWrapper},u.createElement(c.N_,{className:l.default.cardTopLink,to:`/${(0,i.HR)(a)}`},u.createElement("div",{className:l.default.cardTop},u.createElement(d,null,n),u.createElement(y,null,r))),u.createElement(f,{section:a}))},y=e=>{let{children:t}=e;return u.createElement("p",{className:l.default.cardContent},t)},f=e=>{let{section:t}=e;const r=(0,i.pV)(t);return u.createElement("div",{className:l.default.cardActions},r&&u.createElement(c.N_,{to:`/${(0,i.Np)(t)}`,tabIndex:-1},u.createElement(n.$,{secondary:!0,small:!0},a.A.t("Add new"))),u.createElement(c.N_,{to:`/${(0,i.HR)(t)}`,tabIndex:-1},u.createElement(n.$,{secondary:!0,small:!0},a.A.t("Manage"))))}},14618:function(e,t,r){r.r(t),r.d(t,{FilterAuthorizedSections:function(){return n.FilterAuthorizedSections},SummaryCard:function(){return a.SummaryCard},SummaryCardActions:function(){return a.SummaryCardActions},SummaryCardContent:function(){return a.SummaryCardContent},SummaryCardGroup:function(){return a.SummaryCardGroup}});var a=r(5412),n=r(43487)},27401:function(e,t,r){r.r(t),r.d(t,{OverviewGroup:function(){return o},OverviewGroupSummary:function(){return u}});var a=r(72176),n=r(27780);const o=e=>{let{children:t,title:r}=e;return a.createElement("div",{className:n.default.wrapper},a.createElement("div",{className:n.default.header},r),t)},u=e=>{let{children:t}=e;return a.createElement("div",{className:n.default.summary},t)}},95631:function(e,t,r){r.r(t),r.d(t,{OverviewGroup:function(){return a.OverviewGroup},OverviewGroupSummary:function(){return a.OverviewGroupSummary}});var a=r(27401)},3379:function(e,t,r){r.r(t),r.d(t,{AllOverview:function(){return a.AllOverview},Categories:function(){return o.Component},DataElements:function(){return n.Component}});var a=r(41179),n=r(67994),o=r(52859)},84619:function(e,t,r){r.r(t),t.default={cardGroup:"SummaryCard_cardGroup__uJFF7",cardGroupHeader:"SummaryCard_cardGroupHeader__aPETy",cardWrapper:"SummaryCard_cardWrapper__aLWZH",cardTopLink:"SummaryCard_cardTopLink__jgyx0",cardHeader:"SummaryCard_cardHeader__WsTlG",cardIcon:"SummaryCard_cardIcon__7U5am",cardContent:"SummaryCard_cardContent__qu8Py",cardActions:"SummaryCard_cardActions__GBrfL"}},27780:function(e,t,r){r.r(t),t.default={header:"OverviewGroup_header__8HLtq",summary:"OverviewGroup_summary__5DHPc"}}}]);
//# sourceMappingURL=3379.3a61f49f.chunk.js.map