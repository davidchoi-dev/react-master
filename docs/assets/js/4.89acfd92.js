(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{111:function(t,e,s){"use strict";var a=s(78);s.n(a).a},129:function(t,e,s){"use strict";s.r(e);var a=s(12),i=s(19),r=s(7),o=s(71);let n;var l={name:"UserPage",data:()=>({user:null,name:"",email:"",willPassword:"",willCheckPassword:"",photoURL:""}),mounted(){if(Promise.resolve().then(s.t.bind(null,34,7)).then(t=>{n=t.default.storage}),this.profileName?this.photoURL=this.authUser.photoURL:(this.$snotify.warning("로그인 된 사용자만 접근 가능한 페이지입니다.",{showProgressBar:!1}),this.$router.push("/")),this.authUser.email&&!this.authUser.emailVerified){this.$router.push("/");const t=this.$snotify;t.confirm("가입 승인이 아직 처리되지 않았습니다. 메일을 확인해 가입 승인하세요.","가입 승인 미처리",{timeout:0,buttons:[{text:"확인 메일 재전송",action:e=>{this.originAuthUser.sendEmailVerification().then(()=>{t.success("가입 승인을 위한 메일을 다시 보냈습니다. 승인 처리 후, 페이지를 새로고침 해주세요."),t.remove(e.id)}).catch(e=>{t.error(Object(i.a)(e.message))})},bold:!1},{text:"닫기",action:e=>{t.remove(e.id)}}]})}this._bindUploadInputEvent()},methods:{...Object(a.d)(["setAuthUser"]),...Object(a.b)(["saveAuthUserProfilePhoto","updateAuthUserToFirebase"]),_bindUploadInputEvent(){const t=this.$refs.uploadInput;t.addEventListener("focus",t=>{t.target.parentNode.classList.add("is-active")}),t.addEventListener("blur",t=>{t.target.parentNode.classList.remove("is-active")})},updateAuthUserInfo(){const{originAuthUser:t,authUser:e,name:s,email:a,willPassword:r,willCheckPassword:o,photoURL:n}=this;if(r===o){if(t){t.displayName!==s&&t.updateProfile({displayName:s,photoURL:n}).then(()=>this.$snotify.success("프로필 업데이트에 성공했습니다!")).catch(t=>this.$snotify.error(Object(i.a)(t.message))),t.email!==a&&t.updateEmail(a).then(()=>this.$snotify.success("이메일 업데이트에 성공했습니다!")).catch(t=>this.$snotify.error(Object(i.a)(t.message))),r.trim().length>0&&t.updatePassword(r).then(()=>this.$snotify.success("패스워드 업데이트에 성공했습니다!")).catch(t=>this.$snotify.error(Object(i.a)(t.message)));const o={displayName:s,email:a};this.updateAuthUserToFirebase({authUser:e,updateContent:o}),this.isPristine=!0}}else this.$snotify.error("입력한 수정 패스워드와 확인용 패스워드가 일치하지 않습니다.",{timeout:2e3})},uploadPhotoURL(t){const e=t.target.files[0],{name:s,size:a,type:i}=e,r={name:s,size:a,contentType:i},o=s.lastIndexOf("."),l=s.slice(o),c=`${this.authUser.uid}-updated-photoURL${l}`;n().ref("/profilePhotos").child(c).put(e,r).then(t=>t.ref.getDownloadURL().then(t=>{this.photoURL=t,this.setAuthUser({...this.authUser,photoURL:t}),this.saveAuthUserProfilePhoto({user:this.authUser,photoUrl:t}).then(t=>{this.$snotify.success("프로필 사진이 변경되었습니다.",{timeout:800})})}))}},computed:{...Object(a.c)(["authUser","originAuthUser"]),isPristine(){const{originAuthUser:t,authUser:e,name:s,email:a,willPassword:i,willCheckPassword:r,photoURL:o}=this;return t.displayName===s&&t.email===a&&0===i.trim().length},profileName(){return this.authUser.displayName},profilePhoto(){return this.photoURL},passTicket(){switch(this.authUser.pass){case r.d:return"🥇 REACT_PASS";case r.c:return"🥇 ES6_REACT_PASS";case r.b:return"🥇 ALL_REACT_PASS";default:return"🏅 FREE_USER"}},passTicketMessage(){const t=this.profileName;switch(this.authUser.pass){case r.d:case r.c:case r.b:return`${t}님은 모든 강의를 시청 할 수 있습니다.`;default:return`${t}님은 무료 강의만 시청할 수 있습니다.`}},dayLeft(){const{expirationDate:t,paymentDate:e}=this.authUser,s=(Object(o.b)(e),Object(o.b)(t)),a=Object(o.b)(this.$moment().format("YYYY-MM-DD"));if(s.y===a.y)return s.m===a.m?s.d-a.d:Object(o.d)(s,a);return Object(o.c)(new Date(s.y,s.m-1,s.d))+Object(o.d)({y:a.y,m:12,d:31},a)}},watch:{authUser:{handler(t,e){const{displayName:s,email:a}=t;this.name=s,this.email=a},immediate:!0}}},c=(s(111),s(5)),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"user-"}},[s("h2",{attrs:{id:"안녕하세요-"+t.profileName+"-님"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#안녕하세요-"+t.profileName+"-님","aria-hidden":"true"}},[t._v("#")]),t._v("\n    안녕하세요! "+t._s(t.profileName)+" 님\n  ")]),t._v(" "),s("div",{staticClass:"row user-info"},[s("div",{staticClass:"col-md-8 mt-2 pb-2",staticStyle:{position:"relative"},attrs:{role:"group"}},[s("div",{staticClass:"form-control upload-photo"},[s("label",{staticClass:"sr-only",attrs:{for:"upload-photo-url"}},[t._v("프로필 이미지 업로드")]),t._v(" "),s("input",{ref:"uploadInput",attrs:{type:"file",id:"upload-photo-url"},on:{change:t.uploadPhotoURL}})]),t._v(" "),s("img",{staticClass:"profilePhoto float-left img-thumbnail rounded-circle mr-4",attrs:{src:t.profilePhoto,alt:""}}),t._v(" "),s("p",{staticStyle:{"padding-top":"1.4rem"}},[s("span",{staticClass:"badge badge-pill badge-primary"},[t._v(t._s(t.passTicket))]),t._v(" "),s("span",{staticClass:"mt-2",staticStyle:{display:"block"}},[t._v(t._s(t.passTicketMessage))])])]),t._v(" "),s("div",{staticClass:"left-area col-md-4 d-flex align-items-center justify-content-center"},[t.dayLeft>0?s("p",[t._v("\n        남은 시청 기간\n        "),s("span",{staticClass:"badge badge-light"},[t._v(t._s(t.dayLeft))]),t._v(" 일\n      ")]):s("p",[t._v("\n        무료 강의 시청 기간\n        "),s("span",{staticClass:"badge badge-light"},[t._v("∞")])])])]),t._v(" "),s("hr"),t._v(" "),t._m(0),t._v(" "),s("p",[t._v("가입 정보를 변경 하려면 변경 할 내용을 입력한 후, `저장` 버튼을 누릅니다.")]),t._v(" "),t._m(1),t._v(" "),s("form",{on:{submit:function(t){t.preventDefault()}}},[s("div",{staticClass:"form-group"},[t._m(2),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"inputName","aria-describedby":"user-name",placeholder:"이름 입력"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("small",{staticClass:"form-text text-muted",attrs:{id:"user-name"}},[t._v("UI 화면에 표시되는 사용자 이름 입니다.")])]),t._v(" "),s("div",{staticClass:"form-group"},[t._m(3),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail","aria-describedby":"user-email",placeholder:"이메일"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),s("small",{staticClass:"form-text text-muted",attrs:{id:"user-email"}},[t._v("현재 등록 된 이메일 입니다.")])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"inputChangePassword"}},[t._v("패스워드 수정")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.willPassword,expression:"willPassword"}],staticClass:"form-control",attrs:{type:"password",id:"inputChangePassword","aria-describedby":"will-password",placeholder:"변경 할 패스워드"},domProps:{value:t.willPassword},on:{input:function(e){e.target.composing||(t.willPassword=e.target.value)}}}),t._v(" "),s("small",{staticClass:"form-text text-muted",attrs:{id:"will-password"}},[t._v("변경 할 패스웓드를 입력합니다.")])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"inputCheckChangePassword"}},[t._v("패스워드 수정 (확인)")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.willCheckPassword,expression:"willCheckPassword"}],staticClass:"form-control",attrs:{type:"password",id:"inputCheckChangePassword","aria-describedby":"will-check-password",placeholder:"변경 할 패스워드 (확인)"},domProps:{value:t.willCheckPassword},on:{input:function(e){e.target.composing||(t.willCheckPassword=e.target.value)}}}),t._v(" "),s("small",{staticClass:"form-text text-muted",attrs:{id:"will-check-password"}},[t._v("변경 할 패스웓드를 다시 한 번 입력합니다.")])]),t._v(" "),s("button",{staticClass:"btn btn-primary mt-3",attrs:{type:"submit",disabled:t.isPristine},on:{click:t.updateAuthUserInfo}},[t._v("저장")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"가입-정보"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#가입-정보","aria-hidden":"true"}},[this._v("#")]),this._v("\n    가입 정보\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",[this._v("수정 할 경우 ✓ 항목은 반드시 입력해야 합니다.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"inputName"}},[this._v("\n        이름\n        "),e("span",{attrs:{"aria-required":"true",title:"필수 입력 항목"}},[this._v("✓")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"inputEmail"}},[this._v("\n        이메일\n        "),e("span",{attrs:{"aria-required":"true",title:"필수 입력 항목"}},[this._v("✓")])])}],!1,null,"0b355dc1",null);e.default=u.exports},71:function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return r})),s.d(e,"d",(function(){return o}));const a=t=>{if(t){const e=t.toJSON().split("T")[0].split("-"),s=+e[0],a=+e[1]-1,i=+e[2]+2;return new Date(s,a,i).toJSON().split("T")[0]}return t},i=t=>{const e=t.split("-");return{y:Number(e[0]),m:Number(e[1]),d:Number(e[2])}},r=t=>{const e=new Date(t.getTime()),s=new Date(t.getFullYear(),0,1);return Math.ceil((e-s+1)/864e5)},o=(t,e)=>{const s=new Date(t.y,t.m-1,t.d),a=new Date(e.y,e.m-1,e.d);return r(s)-r(a)}},78:function(t,e,s){}}]);