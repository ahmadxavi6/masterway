(this.webpackJsonpmasterway=this.webpackJsonpmasterway||[]).push([[0],{115:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(24),i=c.n(r),s=(c(68),c(26)),o=(c(69),c(54)),l=c(3),j="GET_VEHICLES",d="ADD_VEHICLE",u="DELETE_VEHICLE",h="UPDATE_VEHICLE",m="GET_SINGLE_VEHICLE",b={vehicles:[],vehicle:{},msg:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(l.a)(Object(l.a)({},e),{},{vehicles:t.payloadV});case d:case u:case h:return Object(l.a)(Object(l.a)({},e),{},{msg:t.payloadV});case m:return Object(l.a)(Object(l.a)({},e),{},{vehicle:t.payloadV});default:return e}},O="GET_WORKERS",x="ADD_WORKER",f="DELETE_WORKER",v="UPDATE_WORKER",g="GET_SINGLE_WORKER",y="LOAD_PROFILE",N={workers:[],worker:{},msg:""},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(l.a)(Object(l.a)({},e),{},{workers:t.payload});case x:case f:case v:return Object(l.a)(Object(l.a)({},e),{},{msg:t.payload});case g:case y:return Object(l.a)(Object(l.a)({},e),{},{worker:t.payload});default:return e}},S="GET_ADMINS",C="ADD_ADMIN",k="DELETE_ADMIN",E="UPDATE_ADMIN",F="GET_SINGLE_ADMIN",T="LOAD_PROFILE",D={admins:[],admin:{},msg:""},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(l.a)(Object(l.a)({},e),{},{admins:t.payload});case C:case k:case E:return Object(l.a)(Object(l.a)({},e),{},{msg:t.payload});case F:case T:return Object(l.a)(Object(l.a)({},e),{},{admin:t.payload});default:return e}},L=Object(s.combineReducers)({dataw:w,datav:p,dataa:I}),A=c(53),_=[o.a];var G=Object(s.createStore)(L,Object(A.composeWithDevTools)(s.applyMiddleware.apply(void 0,_))),M=c(13),P=c(8),W=(c(74),c(33)),V=c(28),R=c(15),B=c(57),H=c(58),U=c(1),K=[{title:"Home",path:"/",icon:Object(U.jsx)(V.a,{}),cName:"nav-text"},{title:"Workers",path:"/workers",icon:Object(U.jsx)(B.a,{}),cName:"nav-text"},{title:"Vechiles",path:"/Vechiles",icon:Object(U.jsx)(W.b,{}),cName:"nav-text"},{title:"IncomeAndOutcome",path:"/incomeAndOutcome",icon:Object(U.jsx)(H.a,{}),cName:"nav-text"},{title:"Schedule",path:"/schedule",icon:Object(U.jsx)(V.c,{}),cName:"nav-text"},{title:"Admins",path:"/admins",cName:"nav-text"},{title:"Map",path:"/map",cName:"nav-text"}],z=(c(76),c(0));var J=function(){var e=Object(n.useState)(!1),t=Object(P.a)(e,2),c=t[0],a=t[1],r=function(){return a(!c)};return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(z.b.Provider,{value:{color:"#fff"},children:[Object(U.jsx)("div",{className:"navbar",children:Object(U.jsx)(R.b,{to:"#",className:"menu-bars",children:Object(U.jsx)(W.a,{onClick:r})})}),Object(U.jsx)("nav",{className:c?"nav-menu active ":"nav-menu",children:Object(U.jsxs)("ul",{className:"nav-menu-items",onClick:r,children:[Object(U.jsx)("li",{className:"navbar-toggle",children:Object(U.jsx)(R.b,{to:"#",className:"menu-bars",children:Object(U.jsx)(V.b,{})})}),K.map((function(e,t){return Object(U.jsx)("li",{className:e.cName,children:Object(U.jsxs)(R.b,{to:e.path,children:[e.icon,Object(U.jsx)("span",{children:e.title})]})},t)}))]})})]})})},Y=c(12);var Q=function(){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)("div",{className:"workers"})})};var Z=function(){return Object(U.jsx)("div",{className:"incomeAndOutcome",children:Object(U.jsx)("h1",{children:"income and outcome"})})},q=c(17),X=c(116),$=c(117),ee=c(59),te=c(120),ce=c(121),ne=c(118),ae=c(119),re=c(9),ie=c(6),se=c.n(ie),oe="http://192.168.56.1:5000",le=function(){return function(e){se.a.get("".concat(oe,"/vehicles")).then((function(t){return e((c=t.data,{type:j,payloadV:c}));var c})).catch((function(e){return console.log(e)}))}},je=function(e){return function(t){se.a.post("".concat(oe,"/vehicles"),e).then((function(e){var c;t((c=e.data.msg,{type:d,payloadV:c})),t(le())})).catch((function(e){return console.log(e)}))}},de=function(e){return function(t){se.a.delete("".concat(oe,"/vehicles/").concat(e)).then((function(e){var c;t((c=e.data.msg,{type:u,payloadV:c})),t(le())})).catch((function(e){return console.log(e)}))}},ue=function(e){return function(t){se.a.get("".concat(oe,"/vehicles/").concat(e)).then((function(e){var c;t((c=e.data,{type:m,payloadV:c}))})).catch((function(e){return console.log(e)}))}},he=function(e,t){return function(c){se.a.put("".concat(oe,"/vehicles/").concat(t),e).then((function(e){var t;c((t=e.data.msg,{type:h,payloadV:t})),c(le())})).catch((function(e){return console.log(e)}))}},me={type:"",model:"",year:""},be=function(){var e=Object(n.useState)(me),t=Object(P.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),i=Object(P.a)(r,2),s=i[0],o=i[1],j=Object(n.useState)(null),d=Object(P.a)(j,2),u=d[0],h=d[1],m=Object(M.b)(),b=Object(M.c)((function(e){return e.datav})),p=b.vehicles,O=b.msg,x=b.vehicle,f=c.type,v=c.model,g=c.year;Object(n.useEffect)((function(){m(le())}),[m]),Object(n.useEffect)((function(){O&&re.b.success(O)}),[O]),Object(n.useEffect)((function(){x&&a(Object(l.a)({},x))}),[x]);var y=function(e){var t=e.target,n=t.name,r=t.value;a(Object(l.a)(Object(l.a)({},c),{},Object(q.a)({},n,r)))};return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(X.a,{style:{marginTop:"70px"},children:Object(U.jsxs)($.a,{children:[Object(U.jsx)(ee.a,{md:4,children:Object(U.jsxs)(te.a,{onSubmit:function(e){e.preventDefault(),f&&v&&g?s?(m(he(c,u)),a({type:"",model:"",year:""}),o(!1),h(null)):(m(je(c)),a({type:"",model:"",year:""})):re.b.error("Please fill all input field")},children:[Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"Type"}),Object(U.jsx)(te.a.Control,{type:"text",placeholder:"Type",name:"type",value:f||"",onChange:y})]}),Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"Model"}),Object(U.jsx)(te.a.Control,{type:"text",placeholder:"Model",name:"model",value:v||"",onChange:y})]}),Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"Year"}),Object(U.jsx)(te.a.Control,{type:"number",placeholder:"Year",name:"year",value:g||"",onChange:y})]}),Object(U.jsx)("div",{className:"d-grid gap-2 mt-2",children:Object(U.jsx)(ce.a,{type:"submit",variant:"primary",size:"lg",children:s?"Update":"Submit"})})]})}),Object(U.jsx)(ee.a,{md:5,children:Object(U.jsxs)(ne.a,{bordered:!0,hover:!0,children:[Object(U.jsx)("thead",{children:Object(U.jsxs)("tr",{children:[Object(U.jsx)("th",{children:"No."}),Object(U.jsx)("th",{children:"Type"}),Object(U.jsx)("th",{children:"Model"}),Object(U.jsx)("th",{children:"Year"}),Object(U.jsx)("th",{children:"Action"})]})}),p&&p.map((function(e,t){return Object(U.jsx)("tbody",{children:Object(U.jsxs)("tr",{children:[Object(U.jsx)("td",{children:t+1}),Object(U.jsx)("td",{children:e.type}),Object(U.jsx)("td",{children:e.model}),Object(U.jsx)("td",{children:e.year}),Object(U.jsx)("td",{children:Object(U.jsxs)(ae.a,{children:[Object(U.jsx)(ce.a,{style:{marginRight:"5px"},variant:"danger",onClick:function(){return t=e._id,void(window.confirm("Are you sure that you wanted to delete that vehicle ?")&&m(de(t)));var t},children:"Delete"}),Object(U.jsx)(ce.a,{variant:"success",onClick:function(){return t=e._id,m(ue(t)),h(t),void o(!0);var t},children:"Update"})]})})]})},t)}))]})})]})})})},pe="http://192.168.56.1:5000",Oe=function(){return function(e){se.a.get("".concat(pe,"/workers")).then((function(t){return e((c=t.data,{type:O,payload:c}));var c})).catch((function(e){return console.log(e)}))}},xe=function(e){return function(t){se.a.get("".concat(pe,"/workers/profile/").concat(e)).then((function(e){return t((c=e.data,{type:y,payload:c}));var c})).catch((function(e){return console.log(e)}))}},fe=function(e){return function(t){se.a.post("".concat(pe,"/workers"),e).then((function(e){var c;t((c=e.data.msg,{type:x,payload:c})),t(Oe())})).catch((function(e){return console.log(e)}))}},ve=function(e){return function(t){se.a.delete("".concat(pe,"/workers/").concat(e)).then((function(e){var c;t((c=e.data.msg,{type:f,payload:c})),t(Oe())})).catch((function(e){return console.log(e)}))}},ge=function(e){return function(t){se.a.get("".concat(pe,"/workers/").concat(e)).then((function(e){var c;t((c=e.data,{type:g,payload:c}))})).catch((function(e){return console.log(e)}))}},ye=function(e,t){return function(c){se.a.put("".concat(pe,"/workers/").concat(t),e).then((function(e){var t;c((t=e.data.msg,{type:v,payload:t})),c(Oe())})).catch((function(e){return console.log(e)}))}},Ne={fName:"",email:"",phoneNumber:"",age:"",ID:""},we=function(){var e=Object(n.useState)(Ne),t=Object(P.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),i=Object(P.a)(r,2),s=i[0],o=i[1],j=Object(n.useState)(null),d=Object(P.a)(j,2),u=d[0],h=d[1],m=Object(M.b)(),b=Object(M.c)((function(e){return e.dataw})),p=b.workers,O=b.msg,x=b.worker,f=c.fName,v=c.email,g=c.phoneNumber,y=c.age,N=c.ID;Object(n.useEffect)((function(){m(Oe())}),[m]),Object(n.useEffect)((function(){O&&re.b.success(O)}),[O]),Object(n.useEffect)((function(){x&&a(Object(l.a)({},x))}),[x]);var w=function(e){var t=e.target,n=t.name,r=t.value;a(Object(l.a)(Object(l.a)({},c),{},Object(q.a)({},n,r)))};return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(X.a,{style:{marginTop:"70px"},children:Object(U.jsxs)($.a,{children:[Object(U.jsx)(ee.a,{md:4,children:Object(U.jsxs)(te.a,{onSubmit:function(e){e.preventDefault(),f&&v&&g&&y&&N?g&&10===g.length?s?(m(ye(c,u)),a({fName:"",email:"",phoneNumber:"",age:"",ID:""}),o(!1),h(null)):(m(fe(c)),a({fName:"",email:"",phoneNumber:"",age:"",ID:""})):re.b.error("Please Enter Valid Number"):re.b.error("Please Fill All Input Fields")},children:[Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"ID"}),Object(U.jsx)(te.a.Control,{type:"text",placeholder:"ID",name:"ID",value:N||"",onChange:w})]}),Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"Name"}),Object(U.jsx)(te.a.Control,{type:"text",placeholder:"Name",name:"fName",value:f||"",onChange:w})]}),Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"Email"}),Object(U.jsx)(te.a.Control,{type:"email",placeholder:"Email",name:"email",value:v||"",onChange:w})]}),Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"Phone Number"}),Object(U.jsx)(te.a.Control,{type:"number",placeholder:"Phone Number",name:"phoneNumber",value:g||"",onChange:w})]}),Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"Age"}),Object(U.jsx)(te.a.Control,{type:"text",placeholder:"Age",name:"age",value:y||"",onChange:w})]}),Object(U.jsx)("div",{className:"d-grid gap-2 mt-2",children:Object(U.jsx)(ce.a,{type:"submit",variant:"primary",size:"lg",children:s?"Update":"Submit"})})]})}),Object(U.jsx)(ee.a,{md:8,children:Object(U.jsxs)(ne.a,{bordered:!0,hover:!0,children:[Object(U.jsx)("thead",{children:Object(U.jsxs)("tr",{children:[Object(U.jsx)("th",{children:"No."}),Object(U.jsx)("th",{children:"ID"}),Object(U.jsx)("th",{children:"Name"}),Object(U.jsx)("th",{children:"Email"}),Object(U.jsx)("th",{children:"Phone Number"}),Object(U.jsx)("th",{children:"Age"}),Object(U.jsx)("th",{children:"Action"})]})}),p&&p.map((function(e,t){return Object(U.jsx)("tbody",{children:Object(U.jsxs)("tr",{children:[Object(U.jsx)("td",{children:t+1}),Object(U.jsx)("td",{children:e.ID}),Object(U.jsx)("td",{children:e.fName}),Object(U.jsx)("td",{children:e.email}),Object(U.jsx)("td",{children:e.phoneNumber}),Object(U.jsx)("td",{children:e.age}),Object(U.jsx)("td",{children:Object(U.jsxs)(ae.a,{children:[Object(U.jsx)(ce.a,{style:{marginRight:"5px"},variant:"danger",onClick:function(){return t=e._id,void(window.confirm("Are you sure that you wanted to delete that worker ?")&&m(ve(t)));var t},children:"Delete"}),Object(U.jsx)(ce.a,{variant:"success",onClick:function(){return t=e._id,m(ge(t)),h(t),void o(!0);var t},children:"Update"}),Object(U.jsx)(R.b,{to:{pathname:"/workers/profile/".concat(e._id,"/")},children:Object(U.jsx)(ce.a,{variant:"info",onClick:function(){return t=e._id,void m(xe(t));var t},style:{marginLeft:"5px"},children:"More"})})]})})]})},t)}))]})})]})})})},Se=c(14),Ce=c.n(Se),ke=(c(52),function(){var e=Object(M.c)((function(e){return e.dataw.worker}));return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)("div",{className:"container-picture",children:Object(U.jsx)("div",{className:"picture",children:Object(U.jsx)("img",{src:"data:image/gif;base64,"+e.profilepic,id:"profile",width:"270",height:"270",alt:""})})}),Object(U.jsxs)("div",{className:"change-bu",children:[Object(U.jsx)("label",{style:{display:"block",margin:".4rem "},children:"Choose a profile picture"}),Object(U.jsx)("input",{type:"file",id:"avatar",name:"avatar",accept:"image/*",onChange:function(t){console.log(t.target.files[0]);var c=new FormData;c.append("profilepic",t.target.files[0],t.target.files[0].name),se.a.post("".concat("http://192.168.56.1:5000","/workers/profilepic/").concat(e._id),c,{headers:{enctype:"multipart/form-data"}}).then((function(e){re.b.success("Profile Picture Changed")})).catch((function(e){return re.b.error("There is problem to upload pic")}))}})]}),Object(U.jsxs)("div",{className:"infoo",style:{marginTop:"35px"},elevation:2,children:[Object(U.jsx)("h4",{children:"Basic information"}),Object(U.jsxs)("h6",{children:["Name: ",Object(U.jsx)(Ce.a,{amount:28}),e.fName]}),Object(U.jsxs)("h6",{children:["Email: ",Object(U.jsx)(Ce.a,{amount:28})," ",e.email]}),Object(U.jsxs)("h6",{children:["Phone Number: ",Object(U.jsx)(Ce.a,{amount:6})," ",e.phoneNumber]}),Object(U.jsxs)("h6",{children:["Gender: ",Object(U.jsx)(Ce.a,{amount:23})," male"]}),Object(U.jsxs)("h6",{children:["Driving License: ",Object(U.jsx)(Ce.a,{amount:5})," Bus"]}),Object(U.jsxs)("h6",{children:["Adress: ",Object(U.jsx)(Ce.a,{amount:24})," Beit-hanina"]}),Object(U.jsxs)("h6",{children:["Vehicle: ",Object(U.jsx)(Ce.a,{amount:23})," Nissan"]}),Object(U.jsxs)("h6",{children:["Age: ",Object(U.jsx)(Ce.a,{amount:31})," ",e.age]})]})]})}),Ee=c(16),Fe=c.n(Ee),Te=c(23),De=(c(97),function(){var e=Object(M.c)((function(e){return e.dataw})).workers,t=Object(M.b)();Object(n.useEffect)((function(){t(Oe())}),[t]);var c=function(){var e=Object(Te.a)(Fe.a.mark((function e(c){return Fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(xe(c)),e.next=3,se.a.patch("".concat("http://192.168.56.1:5000","/trips/").concat(c)).then((function(e){re.b.success("Shifts has been removed"),setTimeout((function(){window.location.assign("http://192.168.56.1:3000/schedule")}),1500)})).catch((function(e){return re.b.error("There is a proplem")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)(ne.a,{bordered:!0,hover:!0,children:[Object(U.jsx)("thead",{children:Object(U.jsxs)("tr",{children:[Object(U.jsx)("th",{children:"Name"}),Object(U.jsx)("th",{children:"Sun"}),Object(U.jsx)("th",{children:"Mon"}),Object(U.jsx)("th",{children:"Tue"}),Object(U.jsx)("th",{children:"Wed"}),Object(U.jsx)("th",{children:"Thur"}),Object(U.jsx)("th",{children:"Fri"}),Object(U.jsx)("th",{children:"Sat"}),Object(U.jsx)("th",{children:"Action"})]})}),e&&e.map((function(e,n){return Object(U.jsx)("tbody",{children:Object(U.jsxs)("tr",{children:[Object(U.jsx)("td",{children:e.fName}),Object(U.jsxs)("td",{children:[e.weekShifts.Sun.hours,Object(U.jsx)("p",{children:e.weekShifts.Sun.info})]}),Object(U.jsxs)("td",{children:[e.weekShifts.Mon.hours,Object(U.jsx)("p",{children:e.weekShifts.Mon.info})]}),Object(U.jsxs)("td",{children:[e.weekShifts.Tue.hours,Object(U.jsx)("p",{children:e.weekShifts.Tue.info})]}),Object(U.jsxs)("td",{children:[e.weekShifts.Wed.hours,Object(U.jsx)("p",{children:e.weekShifts.Wed.info})]}),Object(U.jsxs)("td",{children:[e.weekShifts.Thur.hours,Object(U.jsx)("p",{children:e.weekShifts.Thur.info})]}),Object(U.jsxs)("td",{children:[e.weekShifts.Fri.hours,Object(U.jsx)("p",{children:e.weekShifts.Fri.info})]}),Object(U.jsxs)("td",{children:[e.weekShifts.Sat.hours,Object(U.jsx)("p",{children:e.weekShifts.Sat.info})]}),Object(U.jsx)("td",{children:Object(U.jsxs)(ae.a,{children:[Object(U.jsx)(R.b,{to:{pathname:"/trips"},children:Object(U.jsx)(ce.a,{variant:"success",onClick:function(){return c=e._id,void t(xe(c));var c},style:{marginLeft:"5px"},children:"Add Shifts"})}),Object(U.jsx)(ce.a,{variant:"danger",onClick:function(){return c(e._id)},children:"Clear Shifts"})]})})]})},n)}))]})}),Ie=c.p+"static/media/logo 2.5a937206.png";c(98);var Le=function(){var e=function(){var e=Object(Te.a)(Fe.a.mark((function e(t){var c;return Fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={email:a},e.next=4,se.a.patch("".concat("http://192.168.56.1:5000","/forgetmypass"),c).then((function(e){re.b.success("Reset Password Email sent"),document.getElementById("email1").value=""})).catch((function(e){return re.b.error("Email not Found in Database")}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=Object(n.useState)(""),c=Object(P.a)(t,2),a=c[0],r=c[1];return Object(U.jsx)("div",{className:"container",children:Object(U.jsx)("div",{className:"row",children:Object(U.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(U.jsxs)("form",{className:"card-body cardbody-color p-lg-5",onSubmit:e,children:[Object(U.jsx)("div",{className:"mb-3",children:Object(U.jsx)("input",{type:"email",onChange:function(e){var t=e.target;return r(t.value)},className:"form-control",id:"email1","aria-describedby":"emailHelp",placeholder:"Email"})}),Object(U.jsx)("div",{className:"text-center",children:Object(U.jsx)("button",{type:"submit",className:"btn btn-color px-5 mb-5 w-100",children:"Send My Password to Email"})})]})})})})};var Ae=function(){var e=function(){var e=Object(Te.a)(Fe.a.mark((function e(t){var c,n;return Fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=window.location.pathname,t.preventDefault(),n={password:a},e.next=5,se.a.post("".concat("http://192.168.56.1:5000").concat(c),n).then((function(e){re.b.success("Password has changed"),document.getElementById("password1").value=""})).catch((function(e){return console.log("Email not Found in Database")}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=Object(n.useState)(""),c=Object(P.a)(t,2),a=c[0],r=c[1];return Object(U.jsx)("div",{className:"container",children:Object(U.jsx)("div",{className:"row",children:Object(U.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(U.jsxs)("form",{className:"card-body cardbody-color p-lg-5",onSubmit:e,children:[Object(U.jsx)("div",{className:"mb-3",children:Object(U.jsx)("input",{type:"password",onChange:function(e){var t=e.target;return r(t.value)},className:"form-control",id:"password1","aria-describedby":"emailHelp",placeholder:"New Password"})}),Object(U.jsx)("div",{className:"text-center",children:Object(U.jsx)("button",{type:"submit",className:"btn btn-color px-5 mb-5 w-100",children:"Change password"})})]})})})})};function _e(e){var t=e.setToken,c=Object(n.useState)(""),a=Object(P.a)(c,2),r=a[0],i=a[1],s=Object(n.useState)(""),o=Object(P.a)(s,2),l=o[0],j=o[1],d=Object(n.useState)(""),u=Object(P.a)(d,2),h=u[0],m=u[1],b=Object(n.useState)(),p=Object(P.a)(b,2),O=(p[0],p[1]);Object(n.useEffect)((function(){var e=sessionStorage.getItem("user");if(e){var c=JSON.parse(e);O(c),m(c.fName),t(c.token)}}),[t]);var x=function(){var e=Object(Te.a)(Fe.a.mark((function e(c){var n;return Fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),n={fName:h,email:r,password:l},e.next=4,se.a.post("".concat("http://192.168.56.1:5000","/login"),n).then((function(e){O(e.data),m(e.data.fName),t(e.data.token),sessionStorage.setItem("user",JSON.stringify(e.data))})).catch((function(e){return re.b.error("Wrong email or Wrong password"),document.getElementById("email").value="",void(document.getElementById("password").value="")}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("div",{children:[Object(U.jsx)(re.a,{}),Object(U.jsx)(R.a,{children:Object(U.jsxs)(Y.c,{children:[Object(U.jsx)(Y.a,{path:"/forgetmypass",component:Le}),Object(U.jsx)(Y.a,{path:"/resetpassword",component:Ae})]})})]}),Object(U.jsx)("div",{className:"container",children:Object(U.jsx)("div",{className:"row",children:Object(U.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(U.jsx)("div",{className:"card my-5",children:Object(U.jsxs)("form",{className:"card-body cardbody-color p-lg-5",onSubmit:x,children:[Object(U.jsx)("div",{className:"text-center",children:Object(U.jsx)("img",{src:Ie,className:"img-fluid profile-image-pic img-thumbnail rounded-circle my-3",width:"200px",alt:"profile"})}),Object(U.jsx)("div",{className:"mb-3",children:Object(U.jsx)("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Email",onChange:function(e){var t=e.target;return i(t.value)}})}),Object(U.jsx)("div",{className:"mb-3",children:Object(U.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"password",onChange:function(e){var t=e.target;return j(t.value)}})}),Object(U.jsx)("div",{className:"text-center",children:Object(U.jsx)("button",{type:"submit",className:"btn btn-color px-5 mb-5 w-100",children:"Login"})}),Object(U.jsxs)("a",{href:"/forgetmypass",className:"text-dark fw-bold",children:[" ","Forget Password?"]})]})})})})})]})}var Ge=c(60),Me=c(61),Pe=c(63),We=c(62),Ve=c(34),Re={width:"100%",height:"100%"},Be=function(e){Object(Pe.a)(c,e);var t=Object(We.a)(c);function c(e){var n;return Object(Ge.a)(this,c),(n=t.call(this,e)).displayMarkers=function(){return n.state.stores.map((function(e,t){return Object(U.jsx)(Ve.Marker,{id:t,position:{lat:e.latitude,lng:e.longitude},onClick:function(){return console.log("You clicked me!")}},t)}))},n.state={stores:[{lat:31.896237855205005,lng:34.83510240533413},{latitude:32.0008390165097,longitude:34.98354656899768},{latitude:31.432220321956944,longitude:34.85583054157546},{latitude:31.714775219631207,longitude:35.20739301564262},{latitude:32.71092493703369,longitude:35.039193161276465},{latitude:32.23850366479179,longitude:34.95486453995891}]},n}return Object(Me.a)(c,[{key:"render",value:function(){return Object(U.jsx)("div",{className:"map",children:Object(U.jsx)(Ve.Map,{google:this.props.google,zoom:8,style:Re,initialCenter:{lat:31.444,lng:35.456},children:this.displayMarkers()})})}}]),c}(n.Component),He=Object(Ve.GoogleApiWrapper)({apiKey:"AIzaSyD1zH7rJMyq4QMtN2u0PEZKimQ - VTZyv4E"})(Be),Ue=(c(114),"http://192.168.56.1:5000"),Ke=function(e){return{type:S,payload:e}},ze=function(){return function(e){se.a.get("".concat(Ue,"/admins")).then((function(t){return e(Ke(t.data))})).catch((function(e){return console.log(e)}))}},Je=function(e){return function(t){se.a.get("".concat(Ue,"/admins/profile/").concat(e)).then((function(e){return t((c=e.data,{type:T,payload:c}));var c})).catch((function(e){return console.log(e)}))}},Ye=function(e){return function(t){se.a.post("".concat(Ue,"/admins"),e).then((function(e){var c;t((c=e.data.msg,{type:C,payload:c})),t(ze())})).catch((function(e){return console.log(e)}))}},Qe=function(e){return function(t){se.a.delete("".concat(Ue,"/admins/").concat(e)).then((function(e){var c;t((c=e.data.msg,{type:k,payload:c})),t(ze())})).catch((function(e){return console.log(e)}))}},Ze=function(e,t){return function(c){se.a.put("".concat(Ue,"/admins/").concat(t),e).then((function(e){var t;c((t=e.data.msg,{type:E,payload:t})),c(ze())})).catch((function(e){return console.log(e)}))}},qe={fName:"",email:"",ID:"",phoneNumber:"",age:""},Xe=function(){var e=Object(n.useState)(qe),t=Object(P.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),i=Object(P.a)(r,2),s=i[0],o=i[1],j=Object(n.useState)(null),d=Object(P.a)(j,2),u=d[0],h=d[1],m=Object(M.b)(),b=Object(M.c)((function(e){return e.dataa})),p=b.admins,O=b.msg,x=b.admin,f=c.fName,v=c.email,g=c.ID,y=c.phoneNumber,N=c.age;Object(n.useEffect)((function(){m(ze())}),[m]),Object(n.useEffect)((function(){O&&re.b.success(O)}),[O]),Object(n.useEffect)((function(){x&&a(Object(l.a)({},x))}),[x]);var w=function(e){var t=e.target,n=t.name,r=t.value;a(Object(l.a)(Object(l.a)({},c),{},Object(q.a)({},n,r)))};return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(X.a,{style:{marginTop:"70px"},children:Object(U.jsxs)($.a,{children:[Object(U.jsx)(ee.a,{md:4,children:Object(U.jsxs)(te.a,{onSubmit:function(e){e.preventDefault(),f&&v&&g&&y&&N?s?(m(Ze(c,u)),a({fName:"",email:"",ID:"",phoneNumber:"",age:""}),o(!1),h(null)):(m(Ye(c)),a({fName:"",email:"",ID:"",phoneNumber:"",age:""})):re.b.error("Please Fill All Input Fields")},children:[Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"ID"}),Object(U.jsx)(te.a.Control,{type:"text",placeholder:"ID",name:"ID",value:g||"",onChange:w})]}),Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"Name"}),Object(U.jsx)(te.a.Control,{type:"text",placeholder:"Name",name:"fName",value:f||"",onChange:w})]}),Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"Email"}),Object(U.jsx)(te.a.Control,{type:"email",placeholder:"Email",name:"email",value:v||"",onChange:w})]}),Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"Phone Number"}),Object(U.jsx)(te.a.Control,{type:"number",placeholder:"Phone Number",name:"phoneNumber",value:y||"",onChange:w})]}),Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"age"}),Object(U.jsx)(te.a.Control,{type:"number",placeholder:"Age",name:"age",value:N||"",onChange:w})]}),Object(U.jsx)("div",{className:"d-grid gap-2 mt-2",children:Object(U.jsx)(ce.a,{type:"submit",variant:"primary",size:"lg",children:s?"Update":"Submit"})})]})}),Object(U.jsx)(ee.a,{md:8,children:Object(U.jsxs)(ne.a,{bordered:!0,hover:!0,children:[Object(U.jsx)("thead",{children:Object(U.jsxs)("tr",{children:[Object(U.jsx)("th",{children:"No."}),Object(U.jsx)("th",{children:"ID"}),Object(U.jsx)("th",{children:"Name"}),Object(U.jsx)("th",{children:"Email"}),Object(U.jsx)("th",{children:"Phone Number"}),Object(U.jsx)("th",{children:"Age"}),Object(U.jsx)("th",{children:"Action"})]})}),p&&p.map((function(e,t){return Object(U.jsx)("tbody",{children:Object(U.jsxs)("tr",{children:[Object(U.jsx)("td",{children:t+1}),Object(U.jsx)("td",{children:e.ID}),Object(U.jsx)("td",{children:e.fName}),Object(U.jsx)("td",{children:e.email}),Object(U.jsx)("td",{children:e.phoneNumber}),Object(U.jsx)("td",{children:e.age}),Object(U.jsx)("td",{children:Object(U.jsxs)(ae.a,{children:[Object(U.jsx)(ce.a,{style:{marginRight:"5px"},variant:"danger",onClick:function(){return t=e._id,void(window.confirm("Are you sure that you wanted to delete that admin ?")&&m(Qe(t)));var t},children:"Delete"}),Object(U.jsx)(ce.a,{variant:"success",onClick:function(){return t=e._id,m(Je(t)),h(t),void o(!0);var t},children:"Update"}),Object(U.jsx)(R.b,{to:{pathname:"/admins/profile/".concat(e._id,"/")},children:Object(U.jsx)(ce.a,{variant:"info",onClick:function(){return t=e._id,void m(Je(t));var t},style:{marginLeft:"5px"},children:"More"})})]})})]})},t)}))]})})]})})})},$e={Sunday:"",Monday:"",Tuesday:"",Wednesday:"",Thursday:"",Friday:"",Saturday:"",Sun:"",Mon:"",Tue:"",Wed:"",Thur:"",Fri:"",Sat:""},et=function(){var e=Object(M.c)((function(e){return e.dataw.worker})),t=Object(n.useState)($e),c=Object(P.a)(t,2),a=c[0],r=c[1],i=a.Sun,s=a.Mon,o=a.Tue,j=a.Wed,d=a.Thur,u=a.Fri,h=a.Sat,m=a.Saturday,b=a.Sunday,p=a.Monday,O=a.Tuesday,x=a.Wednesday,f=a.Thursday,v=a.Friday,g=function(){var t=Object(Te.a)(Fe.a.mark((function t(c){var n;return Fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),n={Sun:i,Mon:s,Tue:o,Wed:j,Thur:d,Fri:u,Sat:h,Saturday:m,Sunday:b,Monday:p,Tuesday:O,Wednesday:x,Thursday:f,Friday:v},t.next=4,se.a.put("".concat("http://192.168.56.1:5000","/trips/").concat(e._id),n).then((function(e){re.b.success("Shifts added successfully"),setTimeout((function(){window.location.assign("http://192.168.56.1:3000/schedule")}),1500)})).catch((function(e){return re.b.error("There is a proplem")}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(e){var t=e.target,c=t.name,n=t.value;r(Object(l.a)(Object(l.a)({},a),{},Object(q.a)({},c,n)))};return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(X.a,{style:{marginTop:"70px"},children:Object(U.jsx)($.a,{children:Object(U.jsx)(ee.a,{md:4,children:Object(U.jsxs)(te.a,{children:[Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"Sunday"}),Object(U.jsx)(te.a.Control,{type:"text",placeholder:"Info",name:"Sun",value:i||"",onChange:y}),Object(U.jsxs)(te.a.Select,{className:"browser-default ",name:"Sunday",style:{position:"stick"},onChange:y,children:[Object(U.jsx)("option",{value:"OFF",children:"OFF"}),Object(U.jsx)("option",{value:"8am-5pm",children:"8am-5pm"}),Object(U.jsx)("option",{value:"9am-6pm",children:"9am-6pm"}),Object(U.jsx)("option",{value:"10am-7pm",children:"10am-7pm"}),Object(U.jsx)("option",{value:"11am-8pm",children:"11am-8pm"}),Object(U.jsx)("option",{value:"12pm-9pm",children:"12pm-9pm"}),Object(U.jsx)("option",{value:"1pm-10pm",children:"1pm-10pm"}),Object(U.jsx)("option",{value:"2pm-11pm",children:"2pm-11pm"}),Object(U.jsx)("option",{value:"3pm-12am",children:"3pm-12am"})," "]})]}),Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"Monday"}),Object(U.jsx)(te.a.Control,{type:"text",placeholder:"Info",name:"Mon",value:s||"",onChange:y}),Object(U.jsxs)(te.a.Select,{className:"browser-default ",name:"Monday",style:{position:"stick"},onChange:y,children:[Object(U.jsx)("option",{value:"OFF",children:"OFF"}),Object(U.jsx)("option",{value:"8am-5pm",children:"8am-5pm"}),Object(U.jsx)("option",{value:"9am-6pm",children:"9am-6pm"}),Object(U.jsx)("option",{value:"10am-7pm",children:"10am-7pm"}),Object(U.jsx)("option",{value:"11am-8pm",children:"11am-8pm"}),Object(U.jsx)("option",{value:"12pm-9pm",children:"12pm-9pm"}),Object(U.jsx)("option",{value:"1pm-10pm",children:"1pm-10pm"}),Object(U.jsx)("option",{value:"2pm-11pm",children:"2pm-11pm"}),Object(U.jsx)("option",{value:"3pm-12am",children:"3pm-12am"})," "]})]}),Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"Tuesday"}),Object(U.jsx)(te.a.Control,{type:"text",placeholder:"Info",name:"Tue",value:o||"",onChange:y}),Object(U.jsxs)(te.a.Select,{className:"browser-default ",name:"Tuesday",style:{position:"stick"},onChange:y,children:[Object(U.jsx)("option",{value:"OFF",children:"OFF"}),Object(U.jsx)("option",{value:"8am-5pm",children:"8am-5pm"}),Object(U.jsx)("option",{value:"9am-6pm",children:"9am-6pm"}),Object(U.jsx)("option",{value:"10am-7pm",children:"10am-7pm"}),Object(U.jsx)("option",{value:"11am-8pm",children:"11am-8pm"}),Object(U.jsx)("option",{value:"12pm-9pm",children:"12pm-9pm"}),Object(U.jsx)("option",{value:"1pm-10pm",children:"1pm-10pm"}),Object(U.jsx)("option",{value:"2pm-11pm",children:"2pm-11pm"}),Object(U.jsx)("option",{value:"3pm-12am",children:"3pm-12am"})," "]})]}),Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"Wednesday"}),Object(U.jsx)(te.a.Control,{type:"text",placeholder:"Info",name:"Wed",value:j||"",onChange:y}),Object(U.jsxs)(te.a.Select,{className:"browser-default ",name:"Wednesday",style:{position:"stick"},onChange:y,children:[Object(U.jsx)("option",{value:"OFF",children:"OFF"}),Object(U.jsx)("option",{value:"8am-5pm",children:"8am-5pm"}),Object(U.jsx)("option",{value:"9am-6pm",children:"9am-6pm"}),Object(U.jsx)("option",{value:"10am-7pm",children:"10am-7pm"}),Object(U.jsx)("option",{value:"11am-8pm",children:"11am-8pm"}),Object(U.jsx)("option",{value:"12pm-9pm",children:"12pm-9pm"}),Object(U.jsx)("option",{value:"1pm-10pm",children:"1pm-10pm"}),Object(U.jsx)("option",{value:"2pm-11pm",children:"2pm-11pm"}),Object(U.jsx)("option",{value:"3pm-12am",children:"3pm-12am"})," "]})]}),Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"Thursday"}),Object(U.jsx)(te.a.Control,{type:"text",placeholder:"Info",name:"Thur",value:d||"",onChange:y}),Object(U.jsxs)(te.a.Select,{className:"browser-default ",name:"Thursday",style:{position:"stick"},onChange:y,children:[Object(U.jsx)("option",{value:"OFF",children:"OFF"}),Object(U.jsx)("option",{value:"8am-5pm",children:"8am-5pm"}),Object(U.jsx)("option",{value:"9am-6pm",children:"9am-6pm"}),Object(U.jsx)("option",{value:"10am-7pm",children:"10am-7pm"}),Object(U.jsx)("option",{value:"11am-8pm",children:"11am-8pm"}),Object(U.jsx)("option",{value:"12pm-9pm",children:"12pm-9pm"}),Object(U.jsx)("option",{value:"1pm-10pm",children:"1pm-10pm"}),Object(U.jsx)("option",{value:"2pm-11pm",children:"2pm-11pm"}),Object(U.jsx)("option",{value:"3pm-12am",children:"3pm-12am"})," "]})]}),Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"Friday"}),Object(U.jsx)(te.a.Control,{type:"text",placeholder:"Info",name:"Fri",value:u||"",onChange:y}),Object(U.jsxs)(te.a.Select,{className:"browser-default ",name:"Friday",style:{position:"stick"},onChange:y,children:[Object(U.jsx)("option",{value:"OFF",children:"OFF"}),Object(U.jsx)("option",{value:"8am-5pm",children:"8am-5pm"}),Object(U.jsx)("option",{value:"9am-6pm",children:"9am-6pm"}),Object(U.jsx)("option",{value:"10am-7pm",children:"10am-7pm"}),Object(U.jsx)("option",{value:"11am-8pm",children:"11am-8pm"}),Object(U.jsx)("option",{value:"12pm-9pm",children:"12pm-9pm"}),Object(U.jsx)("option",{value:"1pm-10pm",children:"1pm-10pm"}),Object(U.jsx)("option",{value:"2pm-11pm",children:"2pm-11pm"}),Object(U.jsx)("option",{value:"3pm-12am",children:"3pm-12am"})," "]})]}),Object(U.jsxs)(te.a.Group,{children:[Object(U.jsx)(te.a.Label,{children:"Saturday"}),Object(U.jsx)(te.a.Control,{type:"text",placeholder:"Info",name:"Sat",value:h||"",onChange:y}),Object(U.jsxs)(te.a.Select,{className:"browser-default ",name:"Saturday",style:{position:"stick"},onChange:y,children:[Object(U.jsx)("option",{value:"OFF",children:"OFF"}),Object(U.jsx)("option",{value:"8am-5pm",children:"8am-5pm"}),Object(U.jsx)("option",{value:"9am-6pm",children:"9am-6pm"}),Object(U.jsx)("option",{value:"10am-7pm",children:"10am-7pm"}),Object(U.jsx)("option",{value:"11am-8pm",children:"11am-8pm"}),Object(U.jsx)("option",{value:"12pm-9pm",children:"12pm-9pm"}),Object(U.jsx)("option",{value:"1pm-10pm",children:"1pm-10pm"}),Object(U.jsx)("option",{value:"2pm-11pm",children:"2pm-11pm"}),Object(U.jsx)("option",{value:"3pm-12am",children:"3pm-12am"})," "]})]}),Object(U.jsx)(te.a.Group,{children:Object(U.jsx)(R.b,{to:{pathname:"/schedule"},children:Object(U.jsxs)(ce.a,{variant:"success",className:"btn btn-primary btn-lg",onClick:g,style:{marginTop:"10px"},children:["","Add ",e.fName," Shifts",""]})})})]})})})})})},tt=function(){var e=Object(M.c)((function(e){return e.dataa.admin}));return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)("div",{className:"container-picture",children:Object(U.jsx)("div",{className:"picture",children:Object(U.jsx)("img",{src:"data:image/gif;base64,"+e.profilepic,id:"profile",width:"270",height:"270",alt:""})})}),Object(U.jsxs)("div",{className:"change-bu",children:[Object(U.jsx)("label",{style:{display:"block",margin:".4rem "},children:"Choose a profile picture"}),Object(U.jsx)("input",{type:"file",id:"avatar",name:"avatar",accept:"image/*",onChange:function(t){console.log(t.target.files[0]);var c=new FormData;c.append("profilepic",t.target.files[0],t.target.files[0].name),se.a.post("".concat("http://192.168.56.1:5000","/admins/profilepic/").concat(e._id),c,{headers:{enctype:"multipart/form-data"}}).then((function(e){re.b.success("Profile Picture Changed")})).catch((function(e){return re.b.error("There is problem to upload pic")}))}})]}),Object(U.jsxs)("div",{className:"infoo",style:{marginTop:"35px"},elevation:2,children:[Object(U.jsx)("h4",{children:"Basic information"}),Object(U.jsxs)("h6",{children:["Name: ",Object(U.jsx)(Ce.a,{amount:28}),e.fName]}),Object(U.jsxs)("h6",{children:["Email: ",Object(U.jsx)(Ce.a,{amount:28})," ",e.email]}),Object(U.jsxs)("h6",{children:["Phone Number: ",Object(U.jsx)(Ce.a,{amount:6})," ",e.phoneNumber]}),Object(U.jsxs)("h6",{children:["Gender: ",Object(U.jsx)(Ce.a,{amount:23})," male"]}),Object(U.jsxs)("h6",{children:["Driving License: ",Object(U.jsx)(Ce.a,{amount:5})," Bus"]}),Object(U.jsxs)("h6",{children:["Adress: ",Object(U.jsx)(Ce.a,{amount:24})," Beit-hanina"]}),Object(U.jsxs)("h6",{children:["Vehicle: ",Object(U.jsx)(Ce.a,{amount:23})," Nissan"]}),Object(U.jsxs)("h6",{children:["Age: ",Object(U.jsx)(Ce.a,{amount:31})," ",e.age]})]})]})};var ct=function(){var e=Object(n.useState)(),t=Object(P.a)(e,2),c=t[0],a=t[1];return c?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(re.a,{}),Object(U.jsxs)(R.a,{children:[Object(U.jsx)(J,{}),Object(U.jsxs)(Y.c,{children:[Object(U.jsx)(Y.a,{path:"/admins",exact:!0,component:Xe}),Object(U.jsx)(Y.a,{path:"/trips",exact:!0,component:et}),Object(U.jsx)(Y.a,{path:"/",exact:!0,component:Q}),Object(U.jsx)(Y.a,{path:"/vechiles",component:be}),Object(U.jsx)(Y.a,{exact:!0,path:"/workers",component:we}),Object(U.jsx)(Y.a,{path:"/workers/profile/",component:ke}),Object(U.jsx)(Y.a,{path:"/admins/profile/",component:tt}),Object(U.jsx)(Y.a,{path:"/incomeAndOutcome",component:Z}),Object(U.jsx)(Y.a,{path:"/schedule",component:De}),Object(U.jsx)(Y.a,{path:"/map",component:He})]})]})]}):Object(U.jsx)(_e,{setToken:a})};i.a.render(Object(U.jsx)(a.a.StrictMode,{children:Object(U.jsx)(M.a,{store:G,children:Object(U.jsx)(ct,{})})}),document.getElementById("root"))},52:function(e,t,c){},74:function(e,t,c){},76:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){}},[[115,1,2]]]);
//# sourceMappingURL=main.b06290d6.chunk.js.map