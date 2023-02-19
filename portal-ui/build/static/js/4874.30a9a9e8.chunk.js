"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[4874],{94874:function(e,n,t){t.r(n);var i=t(29439),o=t(1413),s=t(72791),c=t(75952),a=t(57689),r=t(26181),l=t.n(r),u=t(11135),d=t(25787),h=t(61889),m=t(23814),f=t(92983),p=t(81207),x=t(74794),C=t(56087),b=t(38442),I=t(59114),j=t(75578),P=t(45248),Z=t(87995),A=t(25469),y=t(27454),M=t(80184),F=(0,j.Z)(s.lazy((function(){return t.e(312).then(t.bind(t,312))})));n.default=(0,d.Z)((function(e){return(0,u.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},m.OR),m.qg),{},{searchField:(0,o.Z)((0,o.Z)({},m.qg.searchField),{},{maxWidth:380})},m.Bz))}))((function(e){var n=e.classes,t=(0,A.TL)(),o=(0,a.s0)(),r=(0,s.useState)([]),u=(0,i.Z)(r,2),d=u[0],m=u[1],j=(0,s.useState)(!1),g=(0,i.Z)(j,2),v=g[0],S=g[1],k=(0,s.useState)(!1),E=(0,i.Z)(k,2),L=E[0],O=E[1],_=(0,s.useState)(""),D=(0,i.Z)(_,2),N=D[0],B=D[1],T=(0,s.useState)(""),w=(0,i.Z)(T,2),K=w[0],z=w[1],G=(0,b.F)(C.C3,[C.Ft.ADMIN_GET_POLICY]),R=(0,b.F)(C.C3,C.bE),Y=(0,b.F)(C.C3,C.K$),W=(0,b.F)(C.C3,C.XM),X=(0,b.F)(C.C3,C.GD);(0,s.useEffect)((function(){q()}),[]),(0,s.useEffect)((function(){v&&(Y?p.Z.invoke("GET","/api/v1/policies").then((function(e){var n=l()(e,"policies",[]);n.sort((function(e,n){return e.name>n.name?1:e.name<n.name?-1:0})),S(!1),m(n)})).catch((function(e){S(!1),t((0,Z.Ih)(e))})):S(!1))}),[v,S,m,t,Y]);var q=function(){S(!0)},U=[{type:"view",onClick:function(e){o("".concat(C.gA.POLICIES,"/").concat((0,P.LL)(e.name)))},disableButtonFunction:function(){return!G}},{type:"delete",onClick:function(e){O(!0),B(e)},sendOnlyId:!0,disableButtonFunction:function(){return!R}}],$=d.filter((function(e){return e.name.includes(K)}));return(0,M.jsxs)(s.Fragment,{children:[L&&(0,M.jsx)(F,{deleteOpen:L,selectedPolicy:N,closeDeleteModalAndRefresh:function(e){O(!1),e&&q()}}),(0,M.jsx)(c.mr1,{label:"IAM Policies"}),(0,M.jsx)(x.Z,{className:n.pageContainer,children:(0,M.jsxs)(h.ZP,{container:!0,spacing:1,children:[(0,M.jsxs)(h.ZP,{item:!0,xs:12,className:n.actionsTray,children:[(0,M.jsx)(I.Z,{onChange:z,placeholder:"Search Policies",overrideClass:n.searchField,value:K}),(0,M.jsx)(b.s,{scopes:[C.Ft.ADMIN_CREATE_POLICY],resource:C.C3,errorProps:{disabled:!0},children:(0,M.jsx)(y.Z,{tooltip:W?"":(0,C.MK)(C.XM,"create a Policy"),children:(0,M.jsx)(c.zxk,{id:"create-policy",label:"Create Policy",variant:"callAction",icon:(0,M.jsx)(c.dtP,{}),onClick:function(){o("".concat(C.gA.POLICY_ADD))},disabled:!W})})})]}),(0,M.jsx)(h.ZP,{item:!0,xs:12,className:n.tableBlock,children:(0,M.jsx)(b.s,{scopes:[C.Ft.ADMIN_LIST_USER_POLICIES],resource:C.C3,errorProps:{disabled:!0},children:(0,M.jsx)(f.Z,{itemActions:U,columns:[{label:"Name",elementKey:"name"}],isLoading:v,records:$,entityName:"Policies",idField:"name",tooltip:X?"":(0,C.MK)(C.GD,"view Policy details")})})}),(0,M.jsx)(h.ZP,{item:!0,xs:12,children:(0,M.jsx)(c.KfX,{title:"Learn more about IAM POLICIES",iconComponent:(0,M.jsx)(c.v42,{}),help:(0,M.jsxs)(s.Fragment,{children:["MinIO uses Policy-Based Access Control (PBAC) to define the authorized actions and resources to which an authenticated user has access. Each policy describes one or more actions and conditions that outline the permissions of a user or group of users.",(0,M.jsx)("br",{}),(0,M.jsx)("br",{}),"MinIO PBAC is built for compatibility with AWS IAM policy syntax, structure, and behavior. The MinIO documentation makes a best-effort to cover IAM-specific behavior and functionality. Consider deferring to the IAM documentation for more complete documentation on AWS IAM-specific topics.",(0,M.jsx)("br",{}),(0,M.jsx)("br",{}),"You can learn more at our"," ",(0,M.jsx)("a",{href:"https://min.io/docs/minio/linux/administration/identity-access-management.html?ref=con#access-management",target:"_blank",rel:"noopener",children:"documentation"}),"."]})})})]})})]})}))}}]);
//# sourceMappingURL=4874.30a9a9e8.chunk.js.map