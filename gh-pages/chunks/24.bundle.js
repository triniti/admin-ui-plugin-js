(window.webpackJsonptriniti=window.webpackJsonptriniti||[]).push([[24],{"./screens/pagination/index.jsx":function(e,n,t){"use strict";t.r(n);var a=t("../../node_modules/@babel/runtime/helpers/classCallCheck.js"),l=t.n(a),r=t("../../node_modules/@babel/runtime/helpers/createClass.js"),i=t.n(r),c=t("../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),o=t.n(c),m=t("../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"),s=t.n(m),u=t("../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"),E=t.n(u),d=t("../../node_modules/@babel/runtime/helpers/inherits.js"),b=t.n(d),h=t("../../node_modules/react/index.js"),g=t.n(h),p=t("./components/primary-actions/index.jsx"),f=t("./components/sidenav/index.jsx"),P=t("../../src/components/index.js"),v=function(e){function n(e){var t;return l()(this,n),(t=o()(this,s()(n).call(this,e))).toggleCode1=t.toggleCode1.bind(E()(t)),t.state={collapseCode1:!1},t}return b()(n,e),i()(n,[{key:"toggleCode1",value:function(){this.setState({collapseCode1:!this.state.collapseCode1})}},{key:"render",value:function(){return g.a.createElement(P.Db,{sidenav:g.a.createElement(f.a,{activeScreen:"pagination"}),sidenavHeader:!0,header:"Pagination",primaryActions:g.a.createElement(p.a,null),body:[g.a.createElement(P.k,{key:"pagination"},g.a.createElement(P.r,null,"Pagination",g.a.createElement(P.h,{radius:"circle",color:"hover-bg",onClick:this.toggleCode1,active:this.state.collapseCode1},g.a.createElement(P.T,{imgSrc:"code",size:"md"}))),g.a.createElement(P.F,{isOpen:this.state.collapseCode1},g.a.createElement(P.l,{className:"pl-5 bg-light"},g.a.createElement("pre",null,g.a.createElement("code",null,'import React from \'react\';\nimport { Pagination, PaginationItem, PaginationLink }  from \'@triniti/admin-ui-plugin/components\';\n\nexport default class Example extends React.Component {\n  render() {\n    return (\n      <Pagination>\n        <PaginationItem>\n          <PaginationLink previous href="#" />\n        </PaginationItem>\n        <PaginationItem>\n          <PaginationLink href="#">\n            1\n          </PaginationLink>\n        </PaginationItem>\n        <PaginationItem>\n          <PaginationLink href="#">\n            2\n          </PaginationLink>\n        </PaginationItem>\n        <PaginationItem>\n          <PaginationLink href="#">\n            3\n          </PaginationLink>\n        </PaginationItem>\n        <PaginationItem>\n          <PaginationLink href="#">\n            4\n          </PaginationLink>\n        </PaginationItem>\n        <PaginationItem>\n          <PaginationLink href="#">\n            5\n          </PaginationLink>\n        </PaginationItem>\n        <PaginationItem>\n          <PaginationLink next href="#" />\n        </PaginationItem>\n      </Pagination>\n    );\n  }\n}')))),g.a.createElement(P.l,{indent:!0},g.a.createElement(P.tb,null,g.a.createElement(P.ub,null,g.a.createElement(P.vb,{previous:!0,href:"#"})),g.a.createElement(P.ub,null,g.a.createElement(P.vb,{href:"#"},"1")),g.a.createElement(P.ub,{disabled:!0},g.a.createElement(P.vb,{href:"#"},"2")),g.a.createElement(P.ub,{active:!0},g.a.createElement(P.vb,{href:"#"},"3")),g.a.createElement(P.ub,null,g.a.createElement(P.vb,{href:"#"},"4")),g.a.createElement(P.ub,null,g.a.createElement(P.vb,{href:"#"},"5")),g.a.createElement(P.ub,null,g.a.createElement(P.vb,{next:!0,href:"#"}))),g.a.createElement(P.x,{tag:"h4"},"Large"),g.a.createElement(P.tb,{size:"lg"},g.a.createElement(P.ub,null,g.a.createElement(P.vb,{previous:!0,href:"#"})),g.a.createElement(P.ub,null,g.a.createElement(P.vb,{href:"#"},"1")),g.a.createElement(P.ub,null,g.a.createElement(P.vb,{href:"#"},"2")),g.a.createElement(P.ub,null,g.a.createElement(P.vb,{href:"#"},"3")),g.a.createElement(P.ub,null,g.a.createElement(P.vb,{next:!0,href:"#"}))),g.a.createElement(P.x,{tag:"h4"},"Small"),g.a.createElement(P.tb,{size:"sm"},g.a.createElement(P.ub,null,g.a.createElement(P.vb,{previous:!0,href:"#"})),g.a.createElement(P.ub,null,g.a.createElement(P.vb,{href:"#"},"1")),g.a.createElement(P.ub,null,g.a.createElement(P.vb,{href:"#"},"2")),g.a.createElement(P.ub,null,g.a.createElement(P.vb,{href:"#"},"3")),g.a.createElement(P.ub,null,g.a.createElement(P.vb,{next:!0,href:"#"}))))),g.a.createElement(P.k,{key:"props"},g.a.createElement(P.r,null,"Button Group Properties"),g.a.createElement(P.l,null,g.a.createElement(P.Lb,{hover:!0,responsive:!0},g.a.createElement("thead",null,g.a.createElement("tr",null,g.a.createElement("th",null,"Name"),g.a.createElement("th",null,"Type"),g.a.createElement("th",null,"Default"),g.a.createElement("th",null,"Description"))),g.a.createElement("tbody",null,g.a.createElement("tr",null,g.a.createElement("th",{scope:"row"},"children"),g.a.createElement("td",null,"node"),g.a.createElement("td",null),g.a.createElement("td",null)),g.a.createElement("tr",null,g.a.createElement("th",{scope:"row"},"className"),g.a.createElement("td",null,"string"),g.a.createElement("td",null),g.a.createElement("td",null)),g.a.createElement("tr",null,g.a.createElement("th",{scope:"row"},"size"),g.a.createElement("td",null,"string"),g.a.createElement("td",null),g.a.createElement("td",null)),g.a.createElement("tr",null,g.a.createElement("th",{scope:"row"},"tag"),g.a.createElement("td",null,"oneOfType"),g.a.createElement("td",null),g.a.createElement("td",null,"([PropTypes.func, PropTypes.string])"))))))]})}}]),n}(h.Component);n.default=v}}]);