(this["webpackJsonpfriend-list-fe"]=this["webpackJsonpfriend-list-fe"]||[]).push([[0],{48:function(e,n,a){},49:function(e,n,a){},75:function(e,n,a){"use strict";a.r(n);var t=a(0),c=a.n(t),s=a(43),r=a.n(s),i=(a(48),a(11)),o=(a(49),a(50),a(19)),l=a(18),j=a(10),d=a(8),h=a.n(d),m=a(13),p=a(17),b=a.n(p),u=a(27),x=a(9),O=a(24),f=a(3),y=a(14),v=a(12),N=a(32),g=a(1);function C(e){var n=Object(t.useState)(!0),a=Object(i.a)(n,2),c=a[0],s=a[1],r=Object(t.useState)(),d=Object(i.a)(r,2),p=d[0],C=d[1],k=Object(t.useState)(null),w=Object(i.a)(k,2),S=w[0],T=w[1],F=e.getFriendId,z=e.newFriend,I="http://friendlistback-env.eba-dpw2ityc.us-east-2.elasticbeanstalk.com";Object(t.useEffect)((function(){G()}),[e.toggleRequest]);var G=function(){var e=Object(m.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(I);case 2:n=e.sent,C(n.data.friends),s(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(m.a)(h.a.mark((function e(n){var a,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={favorite:!n.favorite,marital:n.marital,name:n.name,lastName:n.lastName,gender:n.gender,phone1:n.phone1,phoneType1:n.phoneType1,phone2:n.phone2,phoneType2:n.phoneType2,phone3:n.phone3,phoneType3:n.phoneType3},t={method:"patch",url:"".concat(I,"/").concat(n.id),headers:{"Content-Type":"application/json"},data:a},e.next=4,b()(t).then((function(e){var a=Object(j.a)(p);a.find((function(e){return e===n})).favorite=e.data.friend.favorite,C(a)}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return c?Object(g.jsx)("div",{children:"Loading..."}):Object(g.jsxs)(x.a,{sm:3,className:"search-col py-4",children:[Object(g.jsxs)(l.a,{className:"justify-content-between",children:[Object(g.jsx)("h4",{className:"px-3",children:"Friends:"}),Object(g.jsx)(y.a,{className:"mx-3",icon:v.c,size:"2x",onClick:function(){z()}})]}),Object(g.jsx)(o.a,{children:Object(g.jsx)(f.a,{children:Object(g.jsx)(f.a.Group,{controlId:"formBasicEmail",children:Object(g.jsx)(f.a.Control,{type:"text",placeholder:"Search",autoComplete:"off",onChange:function(e){return function(e){var n=e.target.value;T(n)}(e)}})})})}),Object(g.jsx)(u.a,{variant:"flush",children:function(e){var n,a=[];return e.filter((function(e){(null===S||e.name.toLowerCase().includes(S.toLowerCase())||e.lastName.toLowerCase().includes(S.toLowerCase()))&&(a=[].concat(Object(j.a)(a),[e]),n=a.map((function(e){return Object(g.jsxs)(u.a.Item,{children:[e.name," ",e.lastName," "," ",e.favorite?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(O.a,{variant:"light",onClick:function(){return M(e)},children:Object(g.jsx)(y.a,{icon:v.d,size:"lg"})}),Object(g.jsx)(y.a,{className:"mx-1",icon:v.b,size:"sm",onClick:function(){return F(e.id)}})," "]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(O.a,{variant:"light",onClick:function(){return M(e)},children:Object(g.jsx)(y.a,{icon:N.a,size:"lg"})}),Object(g.jsx)(y.a,{className:"mx-1",icon:v.b,size:"sm",onClick:function(){return F(e.id)}})," "]})]},e.id)})))})),n}(p)})]})}var k=a(26),w=a(22);function S(e){var n=Object(k.a)(),a=n.register,c=n.handleSubmit,s=(n.watch,n.errors,e.toggleFriends),r=function(){var e=Object(m.a)(h.a.mark((function e(n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={favorite:n.favorite,marital:n.marital,name:n.name,lastName:n.lastName,gender:n.gender,phone1:n.phone1,phoneType1:n.phoneType1,phone2:n.phone2,phoneType2:n.phoneType2,phone3:n.phone3,phoneType3:n.phoneType3},a={method:"post",url:"".concat("http://friendlistback-env.eba-dpw2ityc.us-east-2.elasticbeanstalk.com"),headers:{"Content-Type":"application/json"},data:n},e.next=4,b()(a).then((function(e){console.log(JSON.stringify(e.data)),s()})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=Object(t.useState)([]),l=Object(i.a)(o,2),d=l[0],p=l[1],u=Object(t.useState)(2),O=Object(i.a)(u,2),N=O[0],C=O[1],S=function(){if(N<4){var e=(a=N,t="phoneType".concat(N),c="phone".concat(N),{id:a,phoneType:t,phone:c}),n=[].concat(Object(j.a)(d),[e]);p(n),C(N+1)}var a,t,c},T=function(){var e=d;e.pop(),p(e),C(N-1)};return Object(g.jsx)(x.a,{sm:9,className:"py-4",children:Object(g.jsxs)(f.a,{onSubmit:c(r),children:[Object(g.jsxs)(f.a.Row,{className:"justify-content-between",children:[Object(g.jsx)("h4",{className:"px-3",children:"Create Friend"}),Object(g.jsx)("div",{className:"mb-3",children:Object(g.jsx)(f.a.Check,{inline:!0,label:"Favorite",type:"checkbox",id:"inline-radio-1",value:"true",name:"favorite",ref:a})},"custom-checkbox")]}),Object(g.jsxs)(f.a.Row,{children:[Object(g.jsxs)(x.a,{sm:6,className:"px-5",children:[Object(g.jsx)(f.a.Control,{className:"mb-2",placeholder:"First name",name:"name",ref:a}),Object(g.jsx)("h5",{className:"py-3 mb-0",children:"Gender"}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)(f.a.Check,{inline:!0,label:"Male",type:"radio",name:"gender",id:"inline-radio-1",value:"male",ref:a}),Object(g.jsx)(f.a.Check,{inline:!0,label:"Female",type:"radio",name:"gender",id:"inline-radio-2",value:"female",ref:a})]},"custom-inline-radio")]}),Object(g.jsxs)(x.a,{sm:6,className:"px-5",children:[Object(g.jsx)(f.a.Control,{placeholder:"Last name",name:"lastName",ref:a}),Object(g.jsx)("h5",{className:"py-3 mb-0",children:"Marital Status"}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)(f.a.Check,{inline:!0,label:"Married",type:"radio",name:"marital",id:"inline-radio-1",value:!0,ref:a}),Object(g.jsx)(f.a.Check,{inline:!0,label:"Unmarried",type:"radio",name:"marital",id:"inline-radio-2",value:!1,ref:a})]})]})]}),Object(g.jsxs)(f.a.Row,{className:"px-3 pt-3 search-col",children:[Object(g.jsx)(x.a,{sm:4,className:"py-2",children:Object(g.jsx)(f.a.Group,{controlId:"exampleForm.SelectCustomSizeSm",children:Object(g.jsxs)(f.a.Control,{as:"select",size:"md",custom:!0,name:"phoneType1",ref:a,children:[Object(g.jsx)("option",{children:"Mobile"}),Object(g.jsx)("option",{children:"Home"}),Object(g.jsx)("option",{children:"Job"})]})})}),Object(g.jsx)(x.a,{sm:6,className:"py-2",children:Object(g.jsx)(f.a.Group,{children:Object(g.jsx)(f.a.Control,{placeholder:"Number",name:"phone1",ref:a})})}),Object(g.jsx)(x.a,{sm:2,className:"py-2",children:Object(g.jsx)(y.a,{className:"mx-3",icon:v.c,size:"2x",onClick:function(){return S()}})})]}),function(e){if(e)return e.map((function(e){return Object(g.jsxs)(f.a.Row,{className:"px-3 pt-3 mt-1 search-col",children:[Object(g.jsx)(x.a,{sm:4,className:"py-2",children:Object(g.jsx)(f.a.Group,{controlId:"exampleForm.SelectCustomSizeSm",children:Object(g.jsxs)(f.a.Control,{as:"select",size:"md",custom:!0,name:e.phoneType,ref:a,children:[Object(g.jsx)("option",{children:"Mobile"}),Object(g.jsx)("option",{children:"Home"}),Object(g.jsx)("option",{children:"Job"})]})})}),Object(g.jsx)(x.a,{sm:6,className:"py-2",children:Object(g.jsx)(f.a.Group,{children:Object(g.jsx)(f.a.Control,{placeholder:"Number",name:e.phone,ref:a})})}),Object(g.jsxs)(x.a,{sm:2,className:"py-2",children:[e.id<3&&Object(g.jsx)(y.a,{className:"mx-3",icon:v.c,size:"2x",onClick:function(){return S()}}),Object(g.jsx)(y.a,{className:"mx-3",icon:v.a,size:"2x",onClick:function(){return T()}})]})]},e.id)}))}(d),Object(g.jsx)(x.a,{className:"py-3",md:{span:6,offset:10},children:Object(g.jsx)(w.a,{className:"py-2",variant:"primary",type:"submit",children:"Create"})})]})})}var T=a(16),F=a(33);function z(e){var n=Object(k.a)(),a=n.register,c=n.handleSubmit,s=(n.watch,n.errors,Object(t.useState)(!0)),r=Object(i.a)(s,2),o=r[0],j=r[1],d=Object(t.useState)(),p=Object(i.a)(d,2),u=p[0],O=p[1],y=e.toggleFriends,v=e.newFriend;Object(t.useEffect)((function(){N()}),[e.friendId]);var N=function(){var n=Object(m.a)(h.a.mark((function n(){var a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.get("http://friendlistback-env.eba-dpw2ityc.us-east-2.elasticbeanstalk.com/".concat(e.friendId));case 2:a=n.sent,O(a.data.friend),j(!1);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),C=function(e){var n="checkbox"===e.target.type?e.target.checked:e.target.value;O(Object(F.a)(Object(F.a)({},u),{},Object(T.a)({},e.target.name,n)))},S=function(){var n=Object(m.a)(h.a.mark((function n(a){var t;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={favorite:u.favorite,marital:u.marital,name:u.name,lastName:u.lastName,gender:u.gender,phone1:u.phone1,phoneType1:u.phoneType1,phone2:u.phone2,phoneType2:u.phoneType2,phone3:u.phone3,phoneType3:u.phoneType3},t={method:"patch",url:"".concat("http://friendlistback-env.eba-dpw2ityc.us-east-2.elasticbeanstalk.com","/").concat(e.friendId),headers:{"Content-Type":"application/json"},data:a},n.next=4,b()(t).then((function(e){console.log(JSON.stringify(e.data)),y()})).catch((function(e){console.log(e)}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return o?Object(g.jsx)("div",{children:"Loading..."}):Object(g.jsx)(x.a,{sm:9,className:"py-4",children:Object(g.jsxs)(f.a,{onSubmit:c(S),children:[Object(g.jsxs)(f.a.Row,{className:"justify-content-between",children:[Object(g.jsx)("h4",{className:"px-3",children:"Edit Friend"}),Object(g.jsx)("div",{className:"mb-3",children:Object(g.jsx)(f.a.Check,{inline:!0,label:"Favorite",type:"checkbox",id:"inline-radio-1",value:"true",name:"favorite",ref:a,checked:u.favorite,onChange:C})},"custom-checkbox")]}),Object(g.jsxs)(f.a.Row,{children:[Object(g.jsxs)(x.a,{sm:6,className:"px-5",children:[Object(g.jsx)(f.a.Control,{className:"mb-2",placeholder:"First name",name:"name",ref:a,value:u.name,onChange:C}),Object(g.jsx)("h5",{className:"py-3 mb-0",children:"Gender"}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)(f.a.Check,{inline:!0,label:"Male",type:"radio",name:"gender",id:"inline-radio-1",value:"male",ref:a,checked:"male"===u.gender,onChange:C}),Object(g.jsx)(f.a.Check,{inline:!0,label:"Female",type:"radio",name:"gender",id:"inline-radio-2",value:"female",ref:a,checked:"female"===u.gender,onChange:C})]},"custom-inline-radio")]}),Object(g.jsxs)(x.a,{sm:6,className:"px-5",children:[Object(g.jsx)(f.a.Control,{placeholder:"Last name",name:"lastName",ref:a,value:u.lastName,onChange:C}),Object(g.jsx)("h5",{className:"py-3 mb-0",children:"Marital Status"}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)(f.a.Check,{inline:!0,label:"Married",type:"radio",name:"marital",id:"inline-radio-12",value:!0,ref:a,checked:!0===u.marital,onChange:C}),Object(g.jsx)(f.a.Check,{inline:!0,label:"Unmarried",type:"radio",name:"marital",id:"inline-radio-22",value:!1,ref:a,checked:!0===!u.marital,onChange:C})]})]})]}),Object(g.jsxs)(f.a.Row,{className:"px-3 pt-3 search-col",children:[Object(g.jsx)(x.a,{sm:4,className:"py-2",children:Object(g.jsx)(f.a.Group,{controlId:"exampleForm.SelectCustomSizeSm",children:Object(g.jsxs)(f.a.Control,{as:"select",size:"md",custom:!0,name:"phoneType1",onChange:C,ref:a,value:u.phoneType1,children:[Object(g.jsx)("option",{children:"Mobile"}),Object(g.jsx)("option",{children:"Home"}),Object(g.jsx)("option",{children:"Job"})]})})}),Object(g.jsx)(x.a,{sm:6,className:"py-2",children:Object(g.jsx)(f.a.Group,{children:Object(g.jsx)(f.a.Control,{placeholder:"Number",name:"phone1",onChange:C,value:u.phone1,ref:a})})})]}),u.phone2&&Object(g.jsxs)(f.a.Row,{className:"px-3 pt-3 search-col",children:[Object(g.jsx)(x.a,{sm:4,className:"py-2",children:Object(g.jsx)(f.a.Group,{controlId:"exampleForm.SelectCustomSizeSm",children:Object(g.jsxs)(f.a.Control,{as:"select",size:"md",custom:!0,name:"phoneType2",onChange:C,ref:a,value:u.phoneType2,children:[Object(g.jsx)("option",{children:"Mobile"}),Object(g.jsx)("option",{children:"Home"}),Object(g.jsx)("option",{children:"Job"})]})})}),Object(g.jsx)(x.a,{sm:6,className:"py-2",children:Object(g.jsx)(f.a.Group,{children:Object(g.jsx)(f.a.Control,{placeholder:"Number",name:"phone2",onChange:C,value:u.phone2,ref:a})})})]}),u.phone3&&Object(g.jsxs)(f.a.Row,{className:"px-3 pt-3 search-col",children:[Object(g.jsx)(x.a,{sm:4,className:"py-2",children:Object(g.jsx)(f.a.Group,{controlId:"exampleForm.SelectCustomSizeSm",children:Object(g.jsxs)(f.a.Control,{as:"select",size:"md",custom:!0,name:"phoneType3",onChange:C,ref:a,value:u.phoneType3,children:[Object(g.jsx)("option",{children:"Mobile"}),Object(g.jsx)("option",{children:"Home"}),Object(g.jsx)("option",{children:"Job"})]})})}),Object(g.jsx)(x.a,{sm:6,className:"py-2",children:Object(g.jsx)(f.a.Group,{children:Object(g.jsx)(f.a.Control,{placeholder:"Number",name:"phone3",onChange:C,value:u.phone3,ref:a})})})]}),Object(g.jsx)(x.a,{className:"py-3",md:{span:6,offset:8},children:Object(g.jsxs)(l.a,{children:[Object(g.jsx)(w.a,{className:"py-2 mx-2",variant:"secondary",onClick:function(){v()},children:"Cancel"}),Object(g.jsx)(w.a,{className:"py-2 mx-2",variant:"primary",type:"submit",children:"Update"})]})})]})})}var I=function(){var e=Object(t.useState)(!1),n=Object(i.a)(e,2),a=n[0],c=n[1],s=Object(t.useState)(),r=Object(i.a)(s,2),j=r[0],d=r[1],h=function(){c(!a)},m=function(){d("")};return Object(g.jsx)(o.a,{fluid:!0,children:Object(g.jsxs)(l.a,{children:[Object(g.jsx)(C,{toggleRequest:a,getFriendId:function(e){d(e)},newFriend:m}),j?Object(g.jsx)(z,{toggleFriends:h,friendId:j,newFriend:m}):Object(g.jsx)(S,{toggleFriends:h})]})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(n){var a=n.getCLS,t=n.getFID,c=n.getFCP,s=n.getLCP,r=n.getTTFB;a(e),t(e),c(e),s(e),r(e)}))};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(I,{})}),document.getElementById("root")),G()}},[[75,1,2]]]);
//# sourceMappingURL=main.0e61e1de.chunk.js.map