import{a as r,b as n,c as m,d as a,e as i,f as C,g as p,h as y,k as P,l as u}from"./chunk-RUK6YKB6.js";var s=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=n({type:t,selectors:[["app-layout-page"]],standalone:!1,decls:3,vars:0,template:function(e,d){e&1&&(a(0,"p"),p(1,"layout-page works!"),i(),C(2,"router-outlet"))},dependencies:[P],encapsulation:2})};var l=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=n({type:t,selectors:[["app-login-page"]],standalone:!1,decls:2,vars:0,template:function(e,d){e&1&&(a(0,"p"),p(1,"login-page works!"),i())},encapsulation:2})};var g=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=n({type:t,selectors:[["app-register-page"]],standalone:!1,decls:2,vars:0,template:function(e,d){e&1&&(a(0,"p"),p(1,"register-page works!"),i())},encapsulation:2})};var x=[{path:"",component:s,children:[{path:"login",component:l},{path:"new-account",component:g},{path:"**",redirectTo:"login"}]}],f=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=m({type:t});static \u0275inj=r({imports:[u.forChild(x),u]})};var M=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=m({type:t});static \u0275inj=r({imports:[y,f]})};export{M as AuthModule};
