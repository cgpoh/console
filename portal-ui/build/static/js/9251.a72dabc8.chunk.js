(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9251],{23804:function(e,n,t){"use strict";t(72791);var r=t(11135),o=t(25787),i=t(61889),a=t(80184);n.Z=(0,o.Z)((function(e){return(0,r.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var n=e.classes,t=e.iconComponent,r=e.title,o=e.help;return(0,a.jsx)("div",{className:n.root,children:(0,a.jsxs)(i.ZP,{container:!0,children:[(0,a.jsxs)(i.ZP,{item:!0,xs:12,className:n.leftItems,children:[t,r]}),(0,a.jsx)(i.ZP,{item:!0,xs:12,className:n.helpText,children:o})]})})}))},81806:function(e,n,t){"use strict";var r=t(1413),o=t(45987),i=(t(72791),t(11135)),a=t(25787),s=t(80184),c=["classes","children"];n.Z=(0,a.Z)((function(e){return(0,i.Z)({root:{padding:0,margin:0,border:0,backgroundColor:"transparent",textDecoration:"underline",cursor:"pointer",fontSize:"inherit",color:e.palette.info.main,fontFamily:"Lato, sans-serif"}})}))((function(e){var n=e.classes,t=e.children,i=(0,o.Z)(e,c);return(0,s.jsx)("button",(0,r.Z)((0,r.Z)({},i),{},{className:n.root,children:t}))}))},75578:function(e,n,t){"use strict";var r=t(1413),o=t(72791),i=t(80184);n.Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function t(t){return(0,i.jsx)(o.Suspense,{fallback:n,children:(0,i.jsx)(e,(0,r.Z)({},t))})}return t}},47986:function(e,n,t){"use strict";t(72791);var r=t(61889),o=t(64554),i=t(23804),a=t(80184);n.Z=function(e){var n=e.iconComponent,t=e.entity;return(0,a.jsx)(r.ZP,{container:!0,alignItems:"center",children:(0,a.jsx)(r.ZP,{item:!0,xs:12,children:(0,a.jsx)(i.Z,{title:"".concat(t," not available"),iconComponent:n,help:(0,a.jsxs)(o.Z,{sx:{fontSize:"14px",display:"flex",border:"none",flexFlow:{xs:"column",md:"row"},"& a":{color:function(e){return e.colors.link},textDecoration:"underline"}},children:[(0,a.jsx)("div",{children:"This feature is not available for a single-disk setup."}),(0,a.jsxs)("div",{children:["Please deploy a server in"," ",(0,a.jsx)("a",{href:"https://docs.min.io/minio/baremetal/installation/deploy-minio-distributed.html?ref=con",target:"_blank",rel:"noreferrer",children:"Distributed Mode"})," ","to use this feature."]})]})})})})}},59114:function(e,n,t){"use strict";var r=t(4942),o=t(1413),i=(t(72791),t(63466)),a=t(74900),s=t(27391),c=t(25787),l=t(11135),d=t(23814),u=t(80184);n.Z=(0,c.Z)((function(e){return(0,l.Z)({searchField:(0,o.Z)({},d.qg.searchField),adornment:{}})}))((function(e){var n=e.placeholder,t=void 0===n?"":n,o=e.classes,c=e.onChange,l=e.adornmentPosition,d=void 0===l?"end":l,m=e.overrideClass,p=e.value,h=(0,r.Z)({disableUnderline:!0},"".concat(d,"Adornment"),(0,u.jsx)(i.Z,{position:d,className:o.adornment,children:(0,u.jsx)(a.Z,{})}));return(0,u.jsx)(s.Z,{placeholder:t,className:m||o.searchField,id:"search-resource",label:"",InputProps:h,onChange:function(e){c(e.target.value)},variant:"standard",value:p})}))},89635:function(e,n,t){"use strict";t.r(n);var r=t(29439),o=t(1413),i=t(72791),a=t(26181),s=t.n(a),c=t(60364),l=t(11135),d=t(25787),u=t(64554),m=t(40986),p=t(61889),h=t(23814),f=t(62410),v=t(81207),x=t(92983),Z=t(28789),g=t(32291),j=t(23804),b=t(81806),y=t(74794),F=t(59114),C=t(75578),P=t(47986),k=t(56087),S=t(38442),T=t(34345),z=t(40603),I=t(87995),w=t(80184),E=(0,C.Z)(i.lazy((function(){return t.e(4414).then(t.bind(t,34414))})));n.default=(0,d.Z)((function(e){return(0,l.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},h.OR),h.qg),h.Je),h.fc),(0,h.Bz)(e.spacing(4))),{},{customConfigurationPage:{minHeight:400},actionsTray:(0,o.Z)({},h.OR.actionsTray),searchField:(0,o.Z)((0,o.Z)({},h.qg.searchField),{},{marginRight:"auto",maxWidth:380}),rightActionButtons:{display:"flex","& button":{whiteSpace:"nowrap"}}},h.VX))}))((function(e){var n=e.classes,t=e.history,o=(0,c.I0)(),a=(0,c.v9)(I.N5),l=(0,i.useState)([]),d=(0,r.Z)(l,2),h=d[0],C=d[1],M=(0,i.useState)(""),N=(0,r.Z)(M,2),O=N[0],R=N[1],A=(0,i.useState)(!0),L=(0,r.Z)(A,2),B=L[0],D=L[1],H=(0,i.useState)(!1),V=(0,r.Z)(H,2),_=V[0],K=V[1],X=(0,i.useState)({type:"unsupported"}),q=(0,r.Z)(X,2),U=q[0],Y=q[1];(0,i.useEffect)((function(){if(B)if(a){v.Z.invoke("GET","/api/v1/admin/tiers").then((function(e){C(e.items||[]),D(!1)})).catch((function(e){o((0,I.Ih)(e)),D(!1)}))}else D(!1)}),[B,o,a]);var G=h.filter((function(e){if(""===O)return!0;var n=s()(e,"".concat(e.type,".name"),""),t=s()(e,"type","");return n.indexOf(O)>=0||t.indexOf(O)>=0})),W=function(){t.push(k.gA.TIERS_ADD)};return(0,w.jsxs)(i.Fragment,{children:[_&&(0,w.jsx)(E,{open:_,tierData:U,closeModalAndRefresh:function(){K(!1)}}),(0,w.jsx)(g.Z,{label:"Tiers"}),(0,w.jsx)(y.Z,{children:a?(0,w.jsxs)(i.Fragment,{children:[(0,w.jsxs)(p.ZP,{item:!0,xs:12,className:n.actionsTray,children:[(0,w.jsx)(F.Z,{placeholder:"Filter",onChange:R,overrideClass:n.searchField,value:O}),(0,w.jsxs)("div",{className:n.rightActionButtons,children:[(0,w.jsx)(z.Z,{icon:(0,w.jsx)(Z.default,{}),color:"primary",text:"Refresh List",onClick:function(){D(!0)}}),(0,w.jsx)(S.s,{scopes:[k.Ft.ADMIN_SET_TIER],resource:k.C3,errorProps:{disabled:!0},children:(0,w.jsx)(z.Z,{icon:(0,w.jsx)(f.dtP,{}),color:"primary",text:"Create Tier",onClick:W,variant:"contained"})})]})]}),B&&(0,w.jsx)(m.Z,{}),!B&&(0,w.jsxs)(i.Fragment,{children:[h.length>0&&(0,w.jsxs)(i.Fragment,{children:[(0,w.jsx)(p.ZP,{item:!0,xs:12,className:n.tableBlock,children:(0,w.jsx)(S.s,{scopes:[k.Ft.ADMIN_LIST_TIERS],resource:k.C3,errorProps:{disabled:!0},children:(0,w.jsx)(x.Z,{itemActions:[{type:"edit",onClick:function(e){Y(e),K(!0)}}],columns:[{label:"Tier Name",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".name"),"");return null!==n?(0,w.jsx)("b",{children:n}):""},renderFullObject:!0},{label:"Type",elementKey:"type",renderFunction:function(e){var n=(T.Bh.find((function(n){return n.serviceName===e}))||{}).logoXs;return e?(0,w.jsx)(u.Z,{sx:{display:"flex",alignItems:"center","& .min-icon":{width:"18px",height:"22px"}},children:n}):""},width:50},{label:"Endpoint",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".endpoint"),"");return null!==n?n:""},renderFullObject:!0},{label:"Bucket",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".bucket"),"");return null!==n?n:""},renderFullObject:!0},{label:"Prefix",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".prefix"),"");return null!==n?n:""},renderFullObject:!0},{label:"Region",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".region"),"");return null!==n?n:""},renderFullObject:!0},{label:"Usage",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".usage"),"");return null!==n?n:""},renderFullObject:!0},{label:"Objects",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".objects"),"");return null!==n?n:""},renderFullObject:!0},{label:"Versions",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".versions"),"");return null!==n?n:""},renderFullObject:!0}],isLoading:B,records:G,entityName:"Tiers",idField:"service_name",customPaperHeight:n.customConfigurationPage})})}),(0,w.jsx)(p.ZP,{item:!0,xs:12,sx:{marginTop:"15px"},children:(0,w.jsx)(j.Z,{title:"Learn more about TIERS",iconComponent:(0,w.jsx)(f.y2Y,{}),help:(0,w.jsxs)(i.Fragment,{children:["Tiers are used by the MinIO Object Lifecycle Management which allows creating rules for time or date based automatic transition or expiry of objects. For object transition, MinIO automatically moves the object to a configured remote storage tier.",(0,w.jsx)("br",{}),(0,w.jsx)("br",{}),"You can learn more at our"," ",(0,w.jsx)("a",{href:"https://docs.min.io/minio/baremetal/lifecycle-management/lifecycle-management-overview.html?ref=con",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})})]}),0===h.length&&(0,w.jsx)(p.ZP,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",children:(0,w.jsx)(p.ZP,{item:!0,xs:8,children:(0,w.jsx)(j.Z,{title:"Tiers",iconComponent:(0,w.jsx)(f.y2Y,{}),help:(0,w.jsxs)(i.Fragment,{children:["Tiers are used by the MinIO Object Lifecycle Management which allows creating rules for time or date based automatic transition or expiry of objects. For object transition, MinIO automatically moves the object to a configured remote storage tier.",(0,w.jsx)("br",{}),(0,w.jsx)("br",{}),"To get started,"," ",(0,w.jsx)(b.Z,{onClick:W,children:"Create Tier"}),"."]})})})})]})]}):(0,w.jsx)(P.Z,{entity:"Tiers",iconComponent:(0,w.jsx)(f.gXu,{})})})]})}))},34345:function(e,n,t){"use strict";t.d(n,{Bh:function(){return l},Pp:function(){return i},b2:function(){return s},f0:function(){return a},vB:function(){return c}});var r=t(62410),o=t(80184),i="minio",a="gcs",s="s3",c="azure",l=[{serviceName:i,targetTitle:"MinIO",logo:(0,o.jsx)(r.$E9,{}),logoXs:(0,o.jsx)(r.YEz,{})},{serviceName:a,targetTitle:"Google Cloud Storage",logo:(0,o.jsx)(r.UQG,{}),logoXs:(0,o.jsx)(r.Vwu,{})},{serviceName:s,targetTitle:"AWS S3",logo:(0,o.jsx)(r.feu,{}),logoXs:(0,o.jsx)(r.Xj3,{})},{serviceName:c,targetTitle:"Azure",logo:(0,o.jsx)(r.jze,{}),logoXs:(0,o.jsx)(r.nAe,{})}]},26759:function(e,n,t){"use strict";var r=t(95318);n.Z=void 0;var o=r(t(45649)),i=t(80184),a=(0,o.default)((0,i.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");n.Z=a},70366:function(e,n,t){"use strict";var r=t(95318);n.Z=void 0;var o=r(t(45649)),i=t(80184),a=(0,o.default)((0,i.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");n.Z=a},97911:function(e,n,t){"use strict";var r=t(95318);n.Z=void 0;var o=r(t(45649)),i=t(80184),a=(0,o.default)((0,i.jsx)("path",{d:"M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"}),"ViewColumn");n.Z=a},94454:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var r=t(4942),o=t(63366),i=t(87462),a=t(72791),s=t(90767),c=t(12065),l=t(97278),d=t(76189),u=t(80184),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),p=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=t(14036),v=t(93736),x=t(47630),Z=t(95159);function g(e){return(0,Z.Z)("MuiCheckbox",e)}var j=(0,t(30208).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),b=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],y=(0,x.ZP)(l.Z,{shouldForwardProp:function(e){return(0,x.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n["color".concat((0,f.Z)(t.color))]]}})((function(e){var n,t=e.theme,o=e.ownerState;return(0,i.Z)({color:t.palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:(0,c.Fq)("default"===o.color?t.palette.action.active:t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(n={},(0,r.Z)(n,"&.".concat(j.checked,", &.").concat(j.indeterminate),{color:t.palette[o.color].main}),(0,r.Z)(n,"&.".concat(j.disabled),{color:t.palette.action.disabled}),n))})),F=(0,u.jsx)(p,{}),C=(0,u.jsx)(m,{}),P=(0,u.jsx)(h,{}),k=a.forwardRef((function(e,n){var t,r,c=(0,v.Z)({props:e,name:"MuiCheckbox"}),l=c.checkedIcon,d=void 0===l?F:l,m=c.color,p=void 0===m?"primary":m,h=c.icon,x=void 0===h?C:h,Z=c.indeterminate,j=void 0!==Z&&Z,k=c.indeterminateIcon,S=void 0===k?P:k,T=c.inputProps,z=c.size,I=void 0===z?"medium":z,w=(0,o.Z)(c,b),E=j?S:x,M=j?S:d,N=(0,i.Z)({},c,{color:p,indeterminate:j,size:I}),O=function(e){var n=e.classes,t=e.indeterminate,r=e.color,o={root:["root",t&&"indeterminate","color".concat((0,f.Z)(r))]},a=(0,s.Z)(o,g,n);return(0,i.Z)({},n,a)}(N);return(0,u.jsx)(y,(0,i.Z)({type:"checkbox",inputProps:(0,i.Z)({"data-indeterminate":j},T),icon:a.cloneElement(E,{fontSize:null!=(t=E.props.fontSize)?t:I}),checkedIcon:a.cloneElement(M,{fontSize:null!=(r=M.props.fontSize)?r:I}),ownerState:N,ref:n},w,{classes:O}))}))},63466:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(4942),o=t(63366),i=t(87462),a=t(72791),s=t(28182),c=t(90767),l=t(14036),d=t(20890),u=t(93840),m=t(52930),p=t(47630),h=t(95159);function f(e){return(0,h.Z)("MuiInputAdornment",e)}var v,x=(0,t(30208).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),Z=t(93736),g=t(80184),j=["children","className","component","disablePointerEvents","disableTypography","position","variant"],b=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,l.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:n.palette.action.active},"filled"===t.variant&&(0,r.Z)({},"&.".concat(x.positionStart,"&:not(.").concat(x.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),y=a.forwardRef((function(e,n){var t=(0,Z.Z)({props:e,name:"MuiInputAdornment"}),r=t.children,p=t.className,h=t.component,x=void 0===h?"div":h,y=t.disablePointerEvents,F=void 0!==y&&y,C=t.disableTypography,P=void 0!==C&&C,k=t.position,S=t.variant,T=(0,o.Z)(t,j),z=(0,m.Z)()||{},I=S;S&&z.variant,z&&!I&&(I=z.variant);var w=(0,i.Z)({},t,{hiddenLabel:z.hiddenLabel,size:z.size,disablePointerEvents:F,position:k,variant:I}),E=function(e){var n=e.classes,t=e.disablePointerEvents,r=e.hiddenLabel,o=e.position,i=e.size,a=e.variant,s={root:["root",t&&"disablePointerEvents",o&&"position".concat((0,l.Z)(o)),a,r&&"hiddenLabel",i&&"size".concat((0,l.Z)(i))]};return(0,c.Z)(s,f,n)}(w);return(0,g.jsx)(u.Z.Provider,{value:null,children:(0,g.jsx)(b,(0,i.Z)({as:x,ownerState:w,className:(0,s.Z)(E.root,p),ref:n},T,{children:"string"!==typeof r||P?(0,g.jsxs)(a.Fragment,{children:["start"===k?v||(v=(0,g.jsx)("span",{className:"notranslate",children:"\u200b"})):null,r]}):(0,g.jsx)(d.Z,{color:"text.secondary",children:r})}))})}))},26769:function(e,n,t){var r=t(39066),o=t(93629),i=t(43141);e.exports=function(e){return"string"==typeof e||!o(e)&&i(e)&&"[object String]"==r(e)}}}]);
//# sourceMappingURL=9251.a72dabc8.chunk.js.map