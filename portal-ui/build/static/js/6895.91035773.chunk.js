"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[6895],{66895:function(e,n,t){t.r(n);var a=t(29439),i=t(1413),r=t(72791),o=t(57689),c=t(11087),s=t(75952),l=t(78687),u=t(11135),d=t(25787),f=t(61889),h=t(81207),b=t(23814),m=t(14917),p=t(64554),v=t(56087),x=t(74794),T=t(14662),C=t(38442),E=t(75578),Z=t(87995),_=t(9859),j=t(25469),S=t(27454),F=t(80184),I=(0,E.Z)(r.lazy((function(){return t.e(9968).then(t.bind(t,39968))}))),g=(0,E.Z)(r.lazy((function(){return t.e(7494).then(t.bind(t,47494))}))),y=(0,E.Z)(r.lazy((function(){return t.e(4738).then(t.bind(t,84738))}))),N=(0,E.Z)(r.lazy((function(){return t.e(9918).then(t.bind(t,79918))}))),w=(0,E.Z)(r.lazy((function(){return t.e(5702).then(t.bind(t,25702))}))),A=(0,E.Z)(r.lazy((function(){return t.e(2512).then(t.bind(t,32512))}))),M=(0,E.Z)(r.lazy((function(){return Promise.all([t.e(749),t.e(51)]).then(t.bind(t,51))})));n.default=(0,d.Z)((function(e){return(0,u.Z)((0,i.Z)((0,i.Z)((0,i.Z)({pageContainer:{height:"100%"}},b.Bw),b.qg),{},{capitalize:{textTransform:"capitalize"}},b.Bz))}))((function(e){var n=e.classes,t=(0,j.TL)(),i=(0,o.s0)(),u=(0,o.UO)(),d=(0,l.v9)(Z.N5),b=(0,l.v9)(_.HQ),E=(0,l.v9)(_.G6),k=(0,l.v9)(Z.gw),P=(0,r.useState)(!1),O=(0,a.Z)(P,2),U=O[0],R=O[1],B=(0,r.useState)(!1),L=(0,a.Z)(B,2),z=L[0],G=L[1],D=u.bucketName||"",K=u[0]||"";K=K||"summary";var W=(0,r.useState)(K),H=(0,a.Z)(W,2),Y=H[0],Q=H[1],V=(0,C.F)(D,v.o3),q=(0,C.F)(D,v.B);(0,r.useEffect)((function(){Q(K)}),[K]),(0,r.useEffect)((function(){U||(t((0,_.d5)(!0)),R(!0))}),[U,t,R]),(0,r.useEffect)((function(){b&&h.Z.invoke("GET","/api/v1/buckets/".concat(D)).then((function(e){t((0,_.d5)(!1)),t((0,_.f4)(e))})).catch((function(e){t((0,_.d5)(!1)),t((0,Z.Ih)(e))}))}),[D,b,t]);var J="/buckets/".concat(D),X={events:"/admin/events",replication:"/admin/replication",lifecycle:"/admin/lifecycle",access:"/admin/access",prefix:"/admin/prefix"},$=function(e){var n=X[e];return n=n?"".concat(J).concat(n):"".concat(J).concat("/admin/summary")};return(0,F.jsxs)(r.Fragment,{children:[z&&(0,F.jsx)(I,{deleteOpen:z,selectedBucket:D,closeDeleteModalAndRefresh:function(e){!function(e){G(!1),e&&i("/buckets")}(e)}}),(0,F.jsx)(s.mr1,{label:(0,F.jsx)(s.hbI,{label:"Buckets",onClick:function(){return i("/buckets")}}),actions:(0,F.jsx)(S.Z,{tooltip:q?"Browse Bucket":(0,v.MK)(v.D[v.EI.BUCKET_VIEWER],"browsing this bucket"),children:(0,F.jsx)(s.zxk,{id:"switch-browse-view","aria-label":"Browse Bucket",onClick:function(){i("/browser/".concat(D))},icon:(0,F.jsx)(s.ROc,{style:{width:20,height:20,marginTop:-3}}),style:{padding:"0 10px"},disabled:!q})})}),(0,F.jsxs)(x.Z,{className:n.pageContainer,children:[(0,F.jsx)(f.ZP,{item:!0,xs:12,children:(0,F.jsx)(m.Z,{icon:(0,F.jsx)(r.Fragment,{children:(0,F.jsx)(s.wNb,{width:40})}),title:D,subTitle:(0,F.jsxs)(C.s,{scopes:[v.Ft.S3_GET_BUCKET_POLICY,v.Ft.S3_GET_ACTIONS],resource:D,children:[(0,F.jsx)("span",{style:{fontSize:15},children:"Access: "}),(0,F.jsx)("span",{className:n.capitalize,style:{fontWeight:600,fontSize:15},children:null===E||void 0===E?void 0:E.access.toLowerCase()})]}),actions:(0,F.jsxs)(r.Fragment,{children:[(0,F.jsx)(C.s,{scopes:v.o3,resource:D,errorProps:{disabled:!0},children:(0,F.jsx)(S.Z,{tooltip:V?"":(0,v.MK)([v.Ft.S3_DELETE_BUCKET,v.Ft.S3_FORCE_DELETE_BUCKET],"deleting this bucket"),children:(0,F.jsx)(s.zxk,{id:"delete-bucket-button",onClick:function(){G(!0)},label:"Delete Bucket",icon:(0,F.jsx)(s.XHJ,{}),variant:"secondary",disabled:!V})})}),(0,F.jsx)(s.zxk,{id:"refresh-bucket-info",onClick:function(){t((0,_.d5)(!0))},label:"Refresh",icon:(0,F.jsx)(s.DuK,{})})]})})}),(0,F.jsx)(p.Z,{sx:{border:"1px solid #eaeaea"},children:(0,F.jsxs)(T.Z,{selectedTab:Y,isRouteTabs:!0,routes:(0,F.jsx)("div",{className:n.contentSpacer,children:(0,F.jsxs)(o.Z5,{children:[(0,F.jsx)(o.AW,{path:"summary",element:(0,F.jsx)(N,{})}),(0,F.jsx)(o.AW,{path:"events",element:(0,F.jsx)(w,{})}),d&&(0,F.jsx)(o.AW,{path:"replication",element:(0,F.jsx)(A,{})}),d&&(0,F.jsx)(o.AW,{path:"lifecycle",element:(0,F.jsx)(M,{})}),(0,F.jsx)(o.AW,{path:"access",element:(0,F.jsx)(y,{})}),(0,F.jsx)(o.AW,{path:"prefix",element:(0,F.jsx)(g,{})}),(0,F.jsx)(o.AW,{path:"*",element:(0,F.jsx)(o.Fg,{to:"/buckets/".concat(D,"/admin/summary")})})]})}),children:[{tabConfig:{label:"Summary",value:"summary",component:c.rU,to:$("summary")}},{tabConfig:{label:"Events",value:"events",component:c.rU,disabled:!(0,C.F)(D,[v.Ft.S3_GET_BUCKET_NOTIFICATIONS,v.Ft.S3_PUT_BUCKET_NOTIFICATIONS,v.Ft.S3_GET_ACTIONS,v.Ft.S3_PUT_ACTIONS]),to:$("events")}},{tabConfig:{label:"Replication",value:"replication",component:c.rU,disabled:!d||k.enabled&&k.curSite||!(0,C.F)(D,[v.Ft.S3_GET_REPLICATION_CONFIGURATION,v.Ft.S3_PUT_REPLICATION_CONFIGURATION,v.Ft.S3_GET_ACTIONS,v.Ft.S3_PUT_ACTIONS]),to:$("replication")}},{tabConfig:{label:"Lifecycle",value:"lifecycle",component:c.rU,disabled:!d||!(0,C.F)(D,[v.Ft.S3_GET_LIFECYCLE_CONFIGURATION,v.Ft.S3_PUT_LIFECYCLE_CONFIGURATION,v.Ft.S3_GET_ACTIONS,v.Ft.S3_PUT_ACTIONS]),to:$("lifecycle")}},{tabConfig:{label:"Access",value:"access",component:c.rU,disabled:!(0,C.F)(D,[v.Ft.ADMIN_GET_POLICY,v.Ft.ADMIN_LIST_USER_POLICIES,v.Ft.ADMIN_LIST_USERS]),to:$("access")}},{tabConfig:{label:"Anonymous",value:"prefix",component:c.rU,disabled:!(0,C.F)(D,[v.Ft.S3_GET_BUCKET_POLICY,v.Ft.S3_GET_ACTIONS]),to:$("prefix")}}]})})]})]})}))},75578:function(e,n,t){var a=t(1413),i=t(72791),r=t(80184);n.Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function t(t){return(0,r.jsx)(i.Suspense,{fallback:n,children:(0,r.jsx)(e,(0,a.Z)({},t))})}return t}},14662:function(e,n,t){t.d(n,{Z:function(){return k}});var a=t(1413),i=t(29439),r=t(72791),o=t(64554),c=t(43896),s=t(80184),l=r.createContext(null);function u(e){var n=e.children,t=e.value,a=function(){var e=r.useState(null),n=(0,i.Z)(e,2),t=n[0],a=n[1];return r.useEffect((function(){a("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),t}(),o=r.useMemo((function(){return{idPrefix:a,value:t}}),[a,t]);return(0,s.jsx)(l.Provider,{value:o,children:n})}function d(){return r.useContext(l)}function f(e,n){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(n)}function h(e,n){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(n)}var b=t(87462),m=t(63366),p=t(18073),v=["children"],x=r.forwardRef((function(e,n){var t=e.children,a=(0,m.Z)(e,v),i=d();if(null===i)throw new TypeError("No TabContext provided");var o=r.Children.map(t,(function(e){return r.isValidElement(e)?r.cloneElement(e,{"aria-controls":f(i,e.props.value),id:h(i,e.props.value)}):null}));return(0,s.jsx)(p.Z,(0,b.Z)({},a,{ref:n,value:i.value,children:o}))})),T=t(28182),C=t(66934),E=t(31402),Z=t(94419),_=t(21217);function j(e){return(0,_.Z)("MuiTabPanel",e)}(0,t(75878).Z)("MuiTabPanel",["root"]);var S=["children","className","value"],F=(0,C.ZP)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){return{padding:e.theme.spacing(3)}})),I=r.forwardRef((function(e,n){var t=(0,E.Z)({props:e,name:"MuiTabPanel"}),a=t.children,i=t.className,r=t.value,o=(0,m.Z)(t,S),c=(0,b.Z)({},t),l=function(e){var n=e.classes;return(0,Z.Z)({root:["root"]},j,n)}(c),u=d();if(null===u)throw new TypeError("No TabContext provided");var p=f(u,r),v=h(u,r);return(0,s.jsx)(F,(0,b.Z)({"aria-labelledby":v,className:(0,T.Z)(l.root,i),hidden:r!==u.value,id:p,ref:n,role:"tabpanel",ownerState:c},o,{children:r===u.value&&a}))})),g=t(25787),y=t(13967),N=t(11135),w=t(95193),A=t(57689),M={minHeight:60},k=(0,g.Z)((function(e){return(0,N.Z)({tabsContainer:{display:"flex",height:"100%",width:"100%"},tabsHeaderContainer:{width:"300px",background:"#F8F8F8",borderRight:"1px solid #EAEAEA","& .MuiTabs-root":{"& .MuiTabs-indicator":{display:"none"},"& .MuiTab-root":{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"flex-start",borderBottom:"1px solid #EAEAEA","& .MuiSvgIcon-root":{marginRight:8,marginBottom:0},"&.Mui-selected":{background:"#E5E5E5",fontWeight:600}},"&. MuiTabs-scroller":{display:"none"}}},tabContentContainer:{width:"100%","& .MuiTabPanel-root":{height:"100%"}},tabPanel:{height:"100%"},"@media (max-width: 900px)":{tabsContainer:{flexFlow:"column",flexDirection:"column"},tabsHeaderContainer:{width:"100%",borderBottom:" 1px solid #EAEAEA","& .MuiTabs-root .MuiTabs-scroller .MuiButtonBase-root":{borderBottom:" 0px"}}}})}))((function(e){var n=e.children,t=e.classes,l=e.selectedTab,d=void 0===l?"0":l,f=e.routes,h=e.isRouteTabs,b=(0,y.Z)(),m=(0,A.TH)().pathname,p=void 0===m?"":m,v=(0,w.Z)(b.breakpoints.down("md")),T=(0,r.useState)(d),C=(0,i.Z)(T,2),E=C[0],Z=C[1],_=[],j=[];if((0,r.useEffect)((function(){if(h){var e=n.find((function(e){return e.tabConfig.to===p}));e&&Z(e.tabConfig.value)}}),[h,n,p]),!n)return null;n.forEach((function(e){_.push(e.tabConfig),j.push(e.content)}));return(0,s.jsx)(u,{value:"".concat(E),children:(0,s.jsxs)(o.Z,{className:t.tabsContainer,children:[(0,s.jsx)(o.Z,{className:t.tabsHeaderContainer,children:(0,s.jsx)(x,{onChange:function(e,n){Z(n)},orientation:v?"horizontal":"vertical",variant:v?"scrollable":"standard",scrollButtons:"auto",className:t.tabList,children:_.map((function(e,n){return e?(0,s.jsx)(c.Z,(0,a.Z)((0,a.Z)({className:t.tabHeader,value:"".concat(n),style:M},e),{},{disableRipple:!0,disableTouchRipple:!0,focusRipple:!0}),"v-tab-".concat(n)):null}))})}),(0,s.jsxs)(o.Z,{className:t.tabContentContainer,children:[h?null:j.map((function(e,n){return(0,s.jsx)(I,{classes:(0,a.Z)({},t.tabPanel),value:"".concat(n),children:e||null},"v-tab-p-".concat(n))})),h?(0,s.jsx)("div",{className:t.tabPanel,children:f}):null]})]})})}))},95193:function(e,n,t){var a;t.d(n,{Z:function(){return f}});var i=t(29439),r=t(72791),o=t(69120),c=t(33073),s=t(40162);function l(e,n,t,a,o){var c="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,l=r.useState((function(){return o&&c?t(e).matches:a?a(e).matches:n})),u=(0,i.Z)(l,2),d=u[0],f=u[1];return(0,s.Z)((function(){var n=!0;if(c){var a=t(e),i=function(){n&&f(a.matches)};return i(),a.addListener(i),function(){n=!1,a.removeListener(i)}}}),[e,t,c]),d}var u=(a||(a=t.t(r,2))).useSyncExternalStore;function d(e,n,t,a){var o=r.useCallback((function(){return n}),[n]),c=r.useMemo((function(){if(null!==a){var n=a(e).matches;return function(){return n}}return o}),[o,e,a]),s=r.useMemo((function(){if(null===t)return[o,function(){return function(){}}];var n=t(e);return[function(){return n.matches},function(e){return n.addListener(e),function(){n.removeListener(e)}}]}),[o,t,e]),l=(0,i.Z)(s,2),d=l[0],f=l[1];return u(f,d,c)}function f(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,o.Z)(),a="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,i=(0,c.Z)({name:"MuiUseMediaQuery",props:n,theme:t}),r=i.defaultMatches,s=void 0!==r&&r,f=i.matchMedia,h=void 0===f?a?window.matchMedia:null:f,b=i.ssrMatchMedia,m=void 0===b?null:b,p=i.noSsr;var v="function"===typeof e?e(t):e;v=v.replace(/^@media( ?)/m,"");var x=void 0!==u?d:l,T=x(v,s,h,m,p);return T}}}]);
//# sourceMappingURL=6895.91035773.chunk.js.map