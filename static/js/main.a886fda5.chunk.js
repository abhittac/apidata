(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),l=a(4),s=a(5),i=a(7),m=a(6),u=(a(2),function(e){return console.log(e),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card",style:{height:"600px",width:"400px"}},c.a.createElement("image",{className:"card-img-top img-responsive",src:e.data.image,alt:"Card image",style:{width:"400px",height:"300px",backgroundPosition:"center",backgroundSize:"cover"}}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},e.data.title),c.a.createElement("p",{className:"btn btn-info"},"Rs.",e.data.price))))}),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={user:[],catagory:"electronics"},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://fakestoreapi.com/products/").then((function(t){t.json().then((function(t){e.setState({user:t})}))}))}},{key:"render",value:function(){var e=this;return console.log(this.state),c.a.createElement(c.a.Fragment,null,c.a.createElement("select",{onChange:function(t){e.setState({catagory:t.target.value})}},c.a.createElement("option",{value:"electronics"},"electronics"),c.a.createElement("option",{value:"men clothing"},"men clothing"),c.a.createElement("option",{value:"women clothing"},"women clothing")),c.a.createElement("div",{className:"row"},this.state.user?this.state.user.map((function(t){return t.category.includes(e.state.catagory)?c.a.createElement("div",{className:"col-sm-3"},c.a.createElement(u,{data:t})):null})):null))}}]),a}(c.a.Component);o.a.render(c.a.createElement(c.a.Fragment,null,c.a.createElement(h,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.a886fda5.chunk.js.map