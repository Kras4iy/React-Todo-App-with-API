(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(11),o=(n(20),n(21),n(22),n(9)),i=n(5),u=n(2),s=n(3),l=n.n(s),d="https://mate.academy/students-api";function f(e){return new Promise((function(t){setTimeout(t,e)}))}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r={method:t};return n&&(r.body=JSON.stringify(n),r.headers={"Content-Type":"application/json; charset=UTF-8"}),f(300).then((function(){return fetch(d+e,r)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var b,h=function(e){return j(e)},m=function(e,t){return j(e,"POST",t)},p=function(e,t){return j(e,"PATCH",t)},O=function(e){return j(e,"DELETE")},v=n(4),x=n.n(v),y=n(6),g=function(){var e=Object(y.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/users?email=".concat(t));case 2:return n=e.sent,e.abrupt("return",n[0]||null);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(y.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,r=t.name,e.abrupt("return",m("/users",{email:n,name:r}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=n(0),E=function(e){var t=e.onLogin,n=Object(r.useState)(""),c=Object(u.a)(n,2),a=c[0],o=c[1],i=Object(r.useState)(""),s=Object(u.a)(i,2),d=s[0],f=s[1],j=Object(r.useState)(!1),b=Object(u.a)(j,2),h=b[0],m=b[1],p=Object(r.useState)(!1),O=Object(u.a)(p,2),v=O[0],E=O[1],T=Object(r.useState)(""),C=Object(u.a)(T,2),_=C[0],k=C[1],S=function(e){localStorage.setItem("user",JSON.stringify(e)),t(e)};Object(r.useEffect)((function(){var e=localStorage.getItem("user");if(e)try{var n=JSON.parse(e);t(n)}catch(r){}}),[]);var D=function(){var e=Object(y.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(a);case 2:(t=e.sent)?S(t):m(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(y.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),k(""),E(!0),e.prev=3,!h){e.next=9;break}return e.next=7,N({name:d,email:a}).then(S);case 7:e.next=11;break;case 9:return e.next=11,D();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),k("Something went wrtong");case 16:return e.prev=16,E(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[3,13,16,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("form",{onSubmit:F,className:"box mt-5",children:[Object(w.jsx)("h1",{className:"title is-3",children:h?"You need to register":"Log in to open todos"}),Object(w.jsxs)("div",{className:"field",children:[Object(w.jsx)("label",{className:"label",htmlFor:"user-email",children:"Email"}),Object(w.jsxs)("div",{className:l()("control has-icons-left",{"is-loading":v}),children:[Object(w.jsx)("input",{type:"email",id:"user-email",className:l()("input",{"is-danger":!h&&_}),placeholder:"Enter your email",disabled:v||h,value:a,required:!0,onChange:function(e){return o(e.target.value)}}),Object(w.jsx)("span",{className:"icon is-small is-left",children:Object(w.jsx)("i",{className:"fas fa-envelope"})})]}),!h&&_&&Object(w.jsx)("p",{className:"help is-danger",children:_})]}),h&&Object(w.jsxs)("div",{className:"field",children:[Object(w.jsx)("label",{className:"label",htmlFor:"user-name",children:"Your Name"}),Object(w.jsxs)("div",{className:l()("control has-icons-left",{"is-loading":v}),children:[Object(w.jsx)("input",{type:"text",id:"user-name",className:l()("input",{"is-danger":h&&_}),placeholder:"Enter your name",required:!0,minLength:4,disabled:v,value:d,onChange:function(e){return f(e.target.value)}}),Object(w.jsx)("span",{className:"icon is-small is-left",children:Object(w.jsx)("i",{className:"fas fa-user"})})]}),h&&_&&Object(w.jsx)("p",{className:"help is-danger",children:_})]}),Object(w.jsx)("div",{className:"field",children:Object(w.jsx)("button",{type:"submit",className:l()("button is-primary",{"is-loading":v}),children:h?"Register":"Login"})})]})},T=c.a.createContext(null),C=function(e){var t=e.children,n=Object(r.useState)(null),c=Object(u.a)(n,2),a=c[0],o=c[1];return a?Object(w.jsx)(T.Provider,{value:a,children:t}):Object(w.jsx)(E,{onLogin:o})};!function(e){e[e.default=0]="default",e[e.active=1]="active",e[e.completed=2]="completed"}(b||(b={}));var _,k=function(e){var t=e.todos,n=e.sortType,c=e.setSortType,a=e.clearComplited,o=Object(r.useMemo)((function(){var e=0;return t.forEach((function(t){t.completed||(e+=1)})),e}),[t]);return Object(w.jsxs)("footer",{className:"todoapp__footer","data-cy":"Footer",children:[Object(w.jsx)("span",{className:"todo-count","data-cy":"todosCounter",children:"".concat(o," items left")}),Object(w.jsxs)("nav",{className:"filter","data-cy":"Filter",children:[Object(w.jsx)("a",{"data-cy":"FilterLinkAll",href:"#/",className:l()("filter__link",{selected:n===b.default}),onClick:function(){return c(b.default)},children:"All"}),Object(w.jsx)("a",{"data-cy":"FilterLinkActive",href:"#/active",className:l()("filter__link",{selected:n===b.active}),onClick:function(){return c(b.active)},children:"Active"}),Object(w.jsx)("a",{"data-cy":"FilterLinkCompleted",href:"#/completed",className:l()("filter__link",{selected:n===b.completed}),onClick:function(){return c(b.completed)},children:"Completed"})]}),Object(w.jsx)("button",{"data-cy":"ClearCompletedButton",type:"button",className:"todoapp__clear-completed",onClick:function(){return a()},disabled:t.length-o===0,children:"Clear completed"})]})};!function(e){e[e.noError=0]="noError",e[e.whenEmptyTitle=1]="whenEmptyTitle",e[e.whenAddTodo=2]="whenAddTodo",e[e.whenDeleteTodo=3]="whenDeleteTodo",e[e.whenChangeStatus=4]="whenChangeStatus",e[e.whenChangeTitle=5]="whenChangeTitle"}(_||(_={}));var S=function(e){var t=e.currentError,n=e.setCurrentError,c=function(){n(_.noError)},a=Object(r.useMemo)((function(){switch(setTimeout(c,3e3),t){case _.whenEmptyTitle:return"Title can`t be empty";case _.whenAddTodo:return"Unable to add a todo";case _.whenDeleteTodo:return"Unable to delete a todo";case _.whenChangeStatus:return"Unable to change the status";case _.whenChangeTitle:return"Unable to change the title";default:return""}}),[t]);return Object(w.jsxs)("div",{"data-cy":"ErrorNotification",className:"notification is-danger is-light has-text-weight-normal",children:[Object(w.jsx)("button",{"data-cy":"HideErrorButton",type:"button",className:"delete",onClick:function(){return c()}}),a]})},D=function(){var e=Object(r.useContext)(T),t=Object(r.useRef)(null),n=Object(r.useRef)(null),c=Object(r.useState)([]),a=Object(u.a)(c,2),s=a[0],d=a[1],f=Object(r.useState)(""),j=Object(u.a)(f,2),v=j[0],x=j[1],y=Object(r.useState)([]),g=Object(u.a)(y,2),N=g[0],E=g[1],C=Object(r.useState)(!1),D=Object(u.a)(C,2),F=D[0],L=D[1],A=Object(r.useState)(),I=Object(u.a)(A,2),B=I[0],J=I[1],M=Object(r.useState)(""),U=Object(u.a)(M,2),P=U[0],R=U[1],q=Object(r.useState)(b.default),H=Object(u.a)(q,2),Y=H[0],G=H[1],K=Object(r.useState)(_.noError),W=Object(u.a)(K,2),z=W[0],Q=W[1];Object(r.useEffect)((function(){var t;e&&(t=e.id,h("/todos?userId=".concat(t))).then((function(e){return d(e)}))}),[e]);var V=Object(r.useMemo)((function(){switch(Y){case b.active:return s.filter((function(e){return!e.completed}));case b.completed:return s.filter((function(e){return e.completed}));default:return Object(i.a)(s)}}),[Y,s]),X=Object(r.useMemo)((function(){return s.some((function(e){return!1===e.completed}))}),[s]),Z=function(t){Q(_.noError),t.preventDefault();var n=Math.random();if(0!==v.trim().length){if(e){var r={id:n,userId:e.id,title:v,completed:!1};E((function(e){return[].concat(Object(i.a)(e),[n])})),d((function(e){return[].concat(Object(i.a)(e),[r])})),(c=r,m("/todos",{userId:c.userId,title:c.title,completed:c.completed})).then((function(e){d((function(t){return t.map((function(t){var r=Object(o.a)({},t);return r.id===n&&(r.id=e.id),r}))}))})).catch((function(){d((function(e){return e.filter((function(e){return e.id!==n}))})),Q(_.whenAddTodo)})).finally((function(){return E((function(e){return e.filter((function(e){return e!==r.id}))}))}))}var c;x("")}else Q(_.whenEmptyTitle)},$=function(e){Q(_.noError),E((function(t){return[].concat(Object(i.a)(t),[e.id])})),function(e){return p("/todos/".concat(e.id),{completed:!e.completed})}(e).then((function(e){d((function(t){return t.map((function(t){var n=Object(o.a)({},t);return n.id===e.id&&(n.completed=e.completed),n}))}))})).catch((function(){return Q(_.whenChangeStatus)})).finally((function(){return E((function(t){return t.filter((function(t){return t!==e.id}))}))}))},ee=function(e){Q(_.noError),E((function(t){return[].concat(Object(i.a)(t),[e.id])})),function(e){return O("/todos/".concat(e.id))}(e).then((function(){d((function(t){return t.filter((function(t){return t.id!==e.id}))}))})).catch((function(){return Q(_.whenDeleteTodo)})).finally((function(){return E((function(t){return t.filter((function(t){return t!==e.id}))}))}))},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Escape";"Escape"===e&&(L(!1),J(0),R(""))},ne=function(e,t){Q(_.noError),e.preventDefault(),0===P.length?ee(t):P!==t.title?(E((function(e){return[].concat(Object(i.a)(e),[t.id])})),function(e,t){return p("/todos/".concat(e.id),{title:t})}(t,P).then((function(e){d((function(t){return t.map((function(t){var n=Object(o.a)({},t);return n.id===e.id&&(n.title=e.title),n}))}))})).catch((function(){return Q(_.whenChangeTitle)})).finally((function(){te(),E((function(e){return e.filter((function(e){return e!==t.id}))}))}))):te()};return Object(r.useEffect)((function(){t.current&&t.current.focus()}),[]),Object(r.useEffect)((function(){n.current&&n.current.focus()}),[F]),Object(w.jsxs)("div",{className:"todoapp",children:[Object(w.jsx)("h1",{className:"todoapp__title",children:"todos"}),Object(w.jsxs)("div",{className:"todoapp__content",children:[Object(w.jsxs)("header",{className:"todoapp__header",children:[Object(w.jsx)("button",{"data-cy":"ToggleAllButton",type:"button",className:l()("todoapp__toggle-all",{active:!X}),onClick:function(){X?s.forEach((function(e){!1===e.completed&&$(e)})):s.forEach((function(e){return $(e)}))}}),Object(w.jsx)("form",{onSubmit:function(e){return Z(e)},children:Object(w.jsx)("input",{"data-cy":"NewTodoField",type:"text",ref:t,className:"todoapp__new-todo",placeholder:"What needs to be done?",value:v,onChange:function(e){return x(e.target.value)}})})]}),s&&Object(w.jsx)("section",{className:"todoapp__main","data-cy":"TodoList",children:V.map((function(e){return Object(w.jsxs)("div",{"data-cy":"Todo",className:l()("todo",{completed:e.completed}),children:[Object(w.jsx)("label",{className:"todo__status-label",children:Object(w.jsx)("input",{"data-cy":"TodoStatus",type:"checkbox",className:"todo__status",checked:!0,onChange:function(){return $(e)}})}),B===e.id?Object(w.jsx)("form",{onSubmit:function(t){return ne(t,e)},children:Object(w.jsx)("input",{"data-cy":"TodoTitleField",type:"text",className:"todo__title-field",placeholder:"Empty todo will be deleted",value:P,ref:n,onChange:function(e){return R(e.target.value)},onBlur:function(t){return ne(t,e)},onKeyDown:function(e){return te(e.key)}})}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("span",{"data-cy":"TodoTitle",className:"todo__title",onDoubleClick:function(){L(!0),J(e.id),R(e.title)},children:e.title}),Object(w.jsx)("button",{type:"button",className:"todo__remove","data-cy":"TodoDeleteButton",onClick:function(){return ee(e)},children:"\xd7"})]}),Object(w.jsxs)("div",{"data-cy":"TodoLoader",className:l()("modal","overlay",{"is-active":N.includes(e.id)}),children:[Object(w.jsx)("div",{className:"modal-background has-background-white-ter"}),Object(w.jsx)("div",{className:"loader"})]})]},e.id)}))}),Object(w.jsx)(k,{todos:s,sortType:Y,setSortType:G,clearComplited:function(){Q(_.noError),s.forEach((function(e){e.completed&&ee(e)}))}})]}),z!==_.noError&&Object(w.jsx)(S,{currentError:z,setCurrentError:Q})]})},F=function(){return Object(w.jsx)(C,{children:Object(w.jsx)(D,{})})};Object(a.createRoot)(document.getElementById("root")).render(Object(w.jsx)(F,{}))}},[[25,1,2]]]);
//# sourceMappingURL=main.e5784b53.chunk.js.map