(this.webpackJsonpreact_firebase_clonetwit=this.webpackJsonpreact_firebase_clonetwit||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(31),s=n.n(r),i=n(9),o=n(23),u=n(6),l=n(10),j=n.n(l),b=n(17),d=n(24);n(39),n(53),n(54);d.a.initializeApp({apiKey:"AIzaSyBH_dGvXWjk9mGL3ZbW-YgusOlc-gkqlr4",authDomain:"clonetwit.firebaseapp.com",projectId:"clonetwit",storageBucket:"clonetwit.appspot.com",databaseURL:"https://clonetwit.firebaseio.com",messagingSenderId:"480560085747",appId:"1:480560085747:web:68b1ce0b2f365b23ba5586",measurementId:"G-2LXSSS1XV5"});var p=d.a,h=d.a.auth(),O=d.a.firestore(),f=d.a.storage(),m=n(1),x=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(!0),d=Object(i.a)(l,2),p=d[0],O=d[1],f=Object(a.useState)(""),x=Object(i.a)(f,2),v=x[0],g=x[1],w=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&u(a)},y=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:y,className:"container",children:[Object(m.jsx)("input",{name:"email",type:"email",placeholder:"email",required:!0,value:n,onChange:w,className:"authInput"}),Object(m.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:w,className:"authInput"}),Object(m.jsx)("input",{type:"submit",className:"authInput authSubmit",value:p?"Create Account":"Log In"}),v&&Object(m.jsx)("span",{className:"authError",children:v})]}),Object(m.jsx)("span",{onClick:function(){O((function(e){return!e}))},className:"authSwitch",children:p?"Log In":"Create Account"})]})},v=n(12),g=n(21),w=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Google"===(n=t.target.name)?a=new p.auth.GoogleAuthProvider:"Github"===n&&(a=new p.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"authBtns",children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("button",{onClick:e,name:"Google",className:"authBtn",children:["Continue with Google ",Object(m.jsx)(v.a,{icon:g.b})]}),Object(m.jsxs)("button",{onClick:e,name:"Github",className:"authBtn",children:["Continue with Github ",Object(m.jsx)(v.a,{icon:g.a})]})]})})},y=function(){return Object(m.jsxs)("div",{className:"authContainer",children:[Object(m.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(m.jsx)(x,{}),Object(m.jsx)("div",{children:Object(m.jsx)(w,{})})]})},N=n(33),k=n(19),S=function(e){var t=e.twitObj,n=e.isMaster,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(t.text),l=Object(i.a)(u,2),d=l[0],p=l[1],h=function(){var e=Object(b.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.confirm("Are you sure you want to delete this?"),console.log(n),!n){e.next=8;break}return e.next=5,O.doc("twits/".concat(t.id)).delete();case 5:if(""===t.attachmentUrl){e.next=8;break}return e.next=8,f.refFromURL(t.attachmentUrl).delete();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return o((function(e){return!e}))},g=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,O.doc("twits/".concat(t.id)).update({text:d});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"twit",children:s?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:g,className:"container twitEdit",children:[Object(m.jsx)("input",{type:"text",placeholder:"Edit your Twit",value:d,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;p(t)},className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Twit",className:"formBtn"})]}),Object(m.jsx)("span",{onClick:x,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(m.jsx)("img",{src:t.attachmentUrl}),n&&Object(m.jsxs)("div",{class:"twit__actions",children:[Object(m.jsx)("span",{onClick:h,children:Object(m.jsx)(v.a,{icon:k.d})}),Object(m.jsx)("span",{onClick:x,children:Object(m.jsx)(v.a,{icon:k.a})})]})]})})},I=n(56),C=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],p=function(){var e=Object(b.a)(j.a.mark((function e(n){var a,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===l){e.next=12;break}return c=f.ref().child("".concat(t.uid,"/").concat(Object(I.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,O.collection("twits").add(o);case 15:s(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("form",{onSubmit:p,className:"shopForm",children:[Object(m.jsxs)("div",{className:"shopInput__container",children:[Object(m.jsx)("input",{className:"shopInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(m.jsx)("input",{type:"submit",value:"\u2192",className:"shopInput__arrow"})]}),Object(m.jsxs)("label",{for:"attach-file",className:"shopInput__label",children:[Object(m.jsx)("span",{children:"Add photos"}),Object(m.jsx)(v.a,{icon:k.b})]}),Object(m.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(m.jsxs)("div",{className:"shopForm__attachment",children:[Object(m.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(m.jsxs)("div",{className:"shopForm__clear",onClick:function(){return d("")},children:[Object(m.jsx)("span",{children:"Remove"}),Object(m.jsx)(v.a,{icon:k.c})]})]})]})},F=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){O.collection("twits").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(C,{userObj:t}),Object(m.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(m.jsx)(S,{twitObj:e,isMaster:e.creatorId===t.uid},e.id)}))})]})},_=function(e){var t=e.userObj;return Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(m.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"2x"})})}),Object(m.jsx)("li",{children:Object(m.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(m.jsx)(v.a,{icon:k.e,color:"#04AAFF",size:"2x"}),Object(m.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"'s Profile"):"Profile"})]})})]})})},A=function(e){var t=e.userRefresh,n=e.userObj,c=Object(u.f)(),r=Object(a.useState)(n.displayName),s=Object(i.a)(r,2),o=s[0],l=s[1],d=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),"newDisplayer"===n.displayName){e.next=5;break}return e.next=4,n.updateProfile({displayName:o});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(m.jsx)("input",{type:"text",autoFocus:!0,placeholder:"Display Name",onChange:function(e){var t=e.target.value;l(t)},value:o,className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(m.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){h.signOut(),c.push("/")},children:"Log Out"})]})},P=function(e){var t=e.userRefresh,n=e.isLoggedIn,a=e.userObj;return Object(m.jsxs)(o.a,{children:[n&&Object(m.jsx)(_,{userObj:a}),Object(m.jsx)(u.c,{children:n?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.a,{exact:!0,path:"/",children:Object(m.jsx)(F,{userObj:a})}),Object(m.jsx)(u.a,{exact:!0,path:"/profile",children:Object(m.jsx)(A,{userObj:a,userRefresh:t})})]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(u.a,{exact:!0,path:"/",children:Object(m.jsx)(y,{})})})})]})};var B=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){h.onAuthStateChanged((function(e){u(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[n?Object(m.jsx)(P,{userRefresh:function(){var e=h.currentUser;u({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"Initializing Process Ongoing.",Object(m.jsxs)("footer",{children:["\xa9 TwitClone, ",(new Date).getFullYear()]})]})};n(51);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.ef205e6c.chunk.js.map