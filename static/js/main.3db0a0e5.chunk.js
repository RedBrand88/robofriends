(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(12),n(13),n(3)),i=n(4),s=n(5),u=n(6),h=function(e){return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(e.id,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,e.fullName),r.a.createElement("p",null,e.email)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(h,{key:t[n].id,id:t[n].id,fullName:t[n].name,email:t[n].email})})))},d=function(e){var t=e.searchChange;return r.a.createElement(a.Fragment,null,r.a.createElement("input",{className:"ma2 pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},f=function(e){var t=e.children;return r.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"500px"}},t)},b=(n(14),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchFieldChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robofriends"),r.a.createElement(d,{searchChange:this.onSearchFieldChange}),r.a.createElement(f,null,r.a.createElement(m,{robots:t})))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.3db0a0e5.chunk.js.map