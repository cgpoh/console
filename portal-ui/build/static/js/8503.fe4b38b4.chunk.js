"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[8503],{35721:function(e,n,a){a(50390);var s=a(34424),t=a(56805),r=a(25594),i=a(86509),l=a(4285),o=a(35477),c=a(95467),d=a(26805),h=a(44078),u=a(5265),m=a(63548),g=a(62559),x={toggleList:u.kQ},f=(0,s.$j)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage}}),x);n.Z=f((0,l.Z)((function(e){return(0,i.Z)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}}})}))((function(e){var n=e.classes,a=e.label,s=e.actions,i=e.sidebarOpen,l=e.operatorMode,u=e.managerObjects,x=e.toggleList;return(0,g.jsxs)(r.ZP,{container:!0,className:"".concat(n.headerContainer," page-header"),direction:"row",alignItems:"center",children:[(0,g.jsx)(t.Z,{display:{xs:"block",sm:"block",md:"none"},children:(0,g.jsx)(r.ZP,{item:!0,xs:12,style:{height:10},children:"\xa0"})}),(0,g.jsxs)(r.ZP,{item:!0,xs:12,sm:12,md:6,className:n.label,children:[!i&&(0,g.jsx)("div",{className:n.logo,children:l?(0,g.jsx)(d.Z,{}):(0,g.jsx)(h.Z,{})}),(0,g.jsx)(o.Z,{variant:"h4",className:n.labelStyle,children:a})]}),(0,g.jsxs)(r.ZP,{item:!0,xs:12,sm:12,md:6,className:n.rightMenu,children:[s&&s,u&&u.length>0&&(0,g.jsx)(c.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){x()},size:"large",children:(0,g.jsx)(m.gx,{})})]})]})})))},8503:function(e,n,a){a.r(n);var s=a(23430),t=a(18489),r=a(50390),i=a(34424),l=a(38342),o=a.n(l),c=a(82165),d=a(35721),h=a(25594),u=a(72462),m=a(86509),g=a(4285),x=a(80076),f=a(81378),j=a(30324),p=a(44149),Z=a(62559),b=(0,i.$j)(null,{displayErrorMessage:p.Ih});n.default=(0,g.Z)((function(e){return(0,m.Z)((0,t.Z)({},(0,u.Bz)(e.spacing(4))))}))(b((function(e){var n=e.classes,a=e.displayErrorMessage,t=(0,r.useState)(!0),i=(0,s.Z)(t,2),l=i[0],u=i[1],m=(0,r.useState)(null),g=(0,s.Z)(m,2),p=g[0],b=g[1],y=(0,r.useCallback)((function(){j.Z.invoke("GET","/api/v1/admin/info").then((function(e){b(e),u(!1)})).catch((function(e){a(e),u(!1)}))}),[b,u,a]);(0,r.useEffect)((function(){l&&y()}),[l,y]);var k=o()(p,"widgets",null);return(0,Z.jsxs)(r.Fragment,{children:[(0,Z.jsx)(d.Z,{label:"Dashboard"}),l?(0,Z.jsx)(h.ZP,{container:!0,children:(0,Z.jsx)(h.ZP,{item:!0,xs:12,className:n.container,children:(0,Z.jsx)(f.Z,{})})}):(0,Z.jsx)(r.Fragment,{children:null!==k?(0,Z.jsx)(h.ZP,{container:!0,className:n.container,children:(0,Z.jsx)(c.Z,{})}):(0,Z.jsx)(h.ZP,{container:!0,className:n.container,children:(0,Z.jsx)(x.Z,{usage:p})})})]})})))}}]);
//# sourceMappingURL=8503.fe4b38b4.chunk.js.map