(this["webpackJsonpreact-notes-app"]=this["webpackJsonpreact-notes-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(6),a=n.n(s),i=(n(12),n(13),n(7)),r=n(2),l=n(17),j=n(0),u=Object(c.createContext)(),o=function(e){var t=JSON.parse(localStorage.getItem("tasks"))||[],n=Object(c.useState)(t),s=Object(r.a)(n,2),a=s[0],o=s[1];Object(c.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(a))}),[a]);var d=Object(c.useState)(null),b=Object(r.a)(d,2),O=b[0],f=b[1];return Object(j.jsx)(u.Provider,{value:{tasks:a,addTask:function(e){o([].concat(Object(i.a)(a),[{title:e,id:Object(l.a)()}]))},removeTask:function(e){o(a.filter((function(t){return t.id!==e})))},clearTasks:function(){o([])},findItem:function(e){var t=a.find((function(t){return t.id===e}));f(t)},editTask:function(e,t){var n=a.map((function(n){return n.id===t?{title:e,id:t}:n}));o(n),f(null)},editItem:O},children:e.children})},d=function(e){var t=e.task,n=Object(c.useContext)(u),s=n.removeTask,a=n.findItem;return Object(j.jsxs)("li",{className:"list-item",children:[Object(j.jsx)("span",{children:t.title}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"btn-delete task-btn",onClick:function(){return s(t.id)},children:Object(j.jsx)("i",{className:"fas fa-trash-alt"})}),Object(j.jsx)("button",{className:"btn-edit task-btn",onClick:function(){return a(t.id)},children:Object(j.jsx)("i",{className:"fas fa-pen"})})]})]})},b=function(){var e=Object(c.useContext)(u).tasks;return Object(j.jsx)("div",{children:e.length?Object(j.jsx)("ul",{children:e.map((function(e){return Object(j.jsx)(d,{task:e},e.id)}))}):Object(j.jsx)("p",{className:"no-tasks",children:"There are no tasks available."})})},O=function(){var e=Object(c.useContext)(u),t=e.addTask,n=e.clearTasks,s=e.editTask,a=e.editItem,i=Object(c.useState)(""),l=Object(r.a)(i,2),o=l[0],d=l[1],b=Object(c.useState)(!1),O=Object(r.a)(b,2),f=O[0],m=O[1];return Object(c.useEffect)((function(){null!==a?(d(a.title),m(!0)):d("")}),[a]),Object(j.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),console.log(a),null===a?(t(o),d("")):s(o,a.id),m(!1)},children:[Object(j.jsx)("input",{type:"text",className:"task-input",placeholder:"Add Task...",required:!0,onChange:function(e){d(e.target.value),console.log(o)},value:o}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsxs)("button",{type:"submit",className:"btn add-task-btn",children:[f?"Edit":"Add"," Task"]}),Object(j.jsx)("button",{className:"btn clear-btn",onClick:n,children:"Clear Task"})]})]})},f=function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:"Task Manger"})})},m=function(){return Object(j.jsx)(o,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"app-wrapper",children:Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(f,{}),Object(j.jsx)(O,{}),Object(j.jsx)(b,{})]})})})})};a.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ef36392a.chunk.js.map