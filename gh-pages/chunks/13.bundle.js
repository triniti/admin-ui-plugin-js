(window.webpackJsonptriniti=window.webpackJsonptriniti||[]).push([[13],{"./screens/dropdowns/index.jsx":function(e,t,n){"use strict";n.r(t);var l=n("../../node_modules/@babel/runtime/helpers/defineProperty.js"),a=n.n(l),r=n("../../node_modules/@babel/runtime/helpers/classCallCheck.js"),o=n.n(r),c=n("../../node_modules/@babel/runtime/helpers/createClass.js"),d=n.n(c),m=n("../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),s=n.n(m),p=n("../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"),u=n.n(p),i=n("../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"),E=n.n(i),h=n("../../node_modules/@babel/runtime/helpers/inherits.js"),g=n.n(h),w=n("../../node_modules/react/index.js"),D=n.n(w),b=n("./components/primary-actions/index.jsx"),v=n("./components/sidenav/index.jsx"),C=n("../../src/components/index.js"),O=function(e){function t(e){var n;return o()(this,t),(n=s()(this,u()(t).call(this,e))).toggle=n.toggle.bind(E()(n)),n.toggle1=n.toggle1.bind(E()(n)),n.toggle2=n.toggle2.bind(E()(n)),n.toggle3=n.toggle3.bind(E()(n)),n.toggleCode1=n.toggleCode1.bind(E()(n)),n.toggleCode2=n.toggleCode2.bind(E()(n)),n.toggleCode3=n.toggleCode3.bind(E()(n)),n.toggleCode4=n.toggleCode4.bind(E()(n)),n.handleChange=n.handleChange.bind(E()(n)),n.state={dropdownOpen:!1,dropdownOpen1:!1,dropdownOpen2:!1,dropdownOpen3:!1,collapseCode1:!1,collapseCode2:!1,collapseCode3:!1,collapseCode4:!1},n}return g()(t,e),d()(t,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,l=t.value;this.setState(a()({},n,parseInt(l,10)))}},{key:"toggle1",value:function(){this.setState({dropdownOpen1:!this.state.dropdownOpen1})}},{key:"toggle2",value:function(){this.setState({dropdownOpen2:!this.state.dropdownOpen2})}},{key:"toggle3",value:function(){this.setState({dropdownOpen3:!this.state.dropdownOpen3})}},{key:"toggleCode1",value:function(){this.setState({collapseCode1:!this.state.collapseCode1})}},{key:"toggleCode2",value:function(){this.setState({collapseCode2:!this.state.collapseCode2})}},{key:"toggleCode3",value:function(){this.setState({collapseCode3:!this.state.collapseCode3})}},{key:"toggleCode4",value:function(){this.setState({collapseCode4:!this.state.collapseCode4})}},{key:"render",value:function(){return D.a.createElement(C.Db,{sidenav:D.a.createElement(v.a,{activeScreen:"dropdowns"}),sidenavHeader:!0,header:"Dropdowns",primaryActions:D.a.createElement(b.a,null),body:[D.a.createElement(C.k,{key:"dropdown"},D.a.createElement(C.r,null,"Dropdown",D.a.createElement(C.h,{radius:"circle",color:"hover-bg",onClick:this.toggleCode4,active:this.state.collapseCode4},D.a.createElement(C.T,{imgSrc:"code",size:"md"}))),D.a.createElement(C.F,{isOpen:this.state.collapseCode4},D.a.createElement(C.l,{className:"pl-0 pr-0 bg-light"},D.a.createElement("pre",{className:"pl-5 pr-3"},D.a.createElement("code",null,"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '@triniti/admin-ui-plugin/components';\n\nclass UiDropdown extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.toggle = this.toggle.bind(this);\n    this.handleChange = this.handleChange.bind(this);\n    this.state = {\n      dropdownOpen: false,\n    };\n  }\n\n  toggle() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen,\n    });\n  }\n\n  handleChange(e) {\n    const { name, value } = e.target;\n    this.setState({\n      [name]: parseInt(value, 10),\n    });\n  }\n\n  render() {\n    return (\n      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className=\"mb-4\">\n        <DropdownToggle caret>\n      Dropdown\n        </DropdownToggle>\n        <DropdownMenu>\n          <DropdownItem header>Header</DropdownItem>\n          <DropdownItem disabled>Action</DropdownItem>\n          <DropdownItem>Another Action</DropdownItem>\n          <DropdownItem divider />\n          <DropdownItem>Another Action</DropdownItem>\n        </DropdownMenu>\n      </Dropdown>\n    );\n  }\n}")))),D.a.createElement(C.l,{indent:!0},D.a.createElement(C.Cb,null,D.a.createElement(C.E,{xs:"6"},D.a.createElement(C.L,{isOpen:this.state.dropdownOpen,toggle:this.toggle,className:"mb-4"},D.a.createElement(C.O,{caret:!0},"Dropdown"),D.a.createElement(C.N,null,D.a.createElement(C.M,{header:!0},"Header"),D.a.createElement(C.M,{disabled:!0},"Action"),D.a.createElement(C.M,null,"Another Action"),D.a.createElement(C.M,{divider:!0}),D.a.createElement(C.M,null,"Another Action"))))))),D.a.createElement(C.k,{key:"buttondropdown1"},D.a.createElement(C.r,null,"ButtonDropdown",D.a.createElement(C.h,{radius:"circle",color:"hover-bg",onClick:this.toggleCode1,active:this.state.collapseCode1},D.a.createElement(C.T,{imgSrc:"code",size:"md"}))),D.a.createElement(C.F,{isOpen:this.state.collapseCode1},D.a.createElement(C.l,{className:"pl-0 pr-0 bg-light"},D.a.createElement("pre",{className:"pl-5 pr-3"},D.a.createElement("code",null,"import React from 'react';\nimport { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from '@triniti/admin-ui-plugin/components';\n\nExample extends Component {\n  constructor(props) {\n    super(props);\n\n    this.toggle = this.toggle.bind(this);\n    this.state = {\n      dropdownOpen: false,\n    };\n  }\n\n  toggle() {\n    this.setState({ dropdownOpen: !this.state.dropdownOpen });\n  }\n\n\n  render() {\n    return (\n    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className=\"mb-4\">\n      <DropdownToggle caret outline color=\"light\">\n        Button Dropdown\n      </DropdownToggle>\n      <DropdownMenu>\n        <DropdownItem header>Header</DropdownItem>\n        <DropdownItem disabled>Action</DropdownItem>\n        <DropdownItem>Another Action</DropdownItem>\n        <DropdownItem divider />\n        <DropdownItem>Another Action</DropdownItem>\n      </DropdownMenu>\n    </ButtonDropdown>\n    );\n  }\n}")))),D.a.createElement(C.l,{indent:!0},D.a.createElement(C.i,{isOpen:this.state.dropdownOpen1,toggle:this.toggle1,className:"mb-4"},D.a.createElement(C.O,{caret:!0,outline:!0,color:"light"},"Button Dropdown"),D.a.createElement(C.N,null,D.a.createElement(C.M,{header:!0},"Header"),D.a.createElement(C.M,null,"First Action"),D.a.createElement(C.M,null,"Another Button"),D.a.createElement(C.M,null,"Third One"),D.a.createElement(C.M,{divider:!0}),D.a.createElement(C.M,null,"Another Action"),D.a.createElement(C.M,{disabled:!0},"Action"))))),D.a.createElement(C.k,{key:"buttondropdown2"},D.a.createElement(C.r,null,"Full Width ButtonDropdown",D.a.createElement(C.h,{radius:"circle",color:"hover-bg",onClick:this.toggleCode2,active:this.state.collapseCode2},D.a.createElement(C.T,{imgSrc:"code",size:"md"}))),D.a.createElement(C.F,{isOpen:this.state.collapseCode2},D.a.createElement(C.l,{className:"pl-0 pr-0 bg-light"},D.a.createElement("pre",{className:"pl-5 pr-3"},D.a.createElement("code",null,'import React from \'react\';\nimport { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from \'@triniti/admin-ui-plugin/components\';\n\nExample extends Component {\n  constructor(props) {\n    super(props);\n\n    this.toggle = this.toggle.bind(this);\n    this.state = {\n      dropdownOpen: false,\n    };\n  }\n\n  toggle() {\n    this.setState({ dropdownOpen: !this.state.dropdownOpen });\n  }\n\n\n  render() {\n    return (\n    <ButtonDropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2} className="mb-4 w-100">\n      <DropdownToggle caret outline color="light" size="lg" className="justify-content-between w-100">\n        <span className="ml-auto mr-auto">Button Dropdown</span>\n      </DropdownToggle>\n      <DropdownMenu right arrow="right">\n        <DropdownItem header>Header</DropdownItem>\n        <DropdownItem disabled>Action</DropdownItem>\n        <DropdownItem>Another Action</DropdownItem>\n        <DropdownItem divider />\n        <DropdownItem>Another Action</DropdownItem>\n      </DropdownMenu>\n    </ButtonDropdown>\n    );\n  }\n}')))),D.a.createElement(C.l,{indent:!0},D.a.createElement(C.i,{isOpen:this.state.dropdownOpen2,toggle:this.toggle2,className:"mb-4 w-100"},D.a.createElement(C.O,{caret:!0,outline:!0,size:"lg",color:"light",className:"justify-content-between w-100"},D.a.createElement("span",{className:"ml-auto mr-auto"},"Button Dropdown")),D.a.createElement(C.N,{right:!0,arrow:"right"},D.a.createElement(C.M,{header:!0},"Header"),D.a.createElement(C.M,{disabled:!0},"Action"),D.a.createElement(C.M,null,"Another Action"),D.a.createElement(C.M,{divider:!0}),D.a.createElement(C.M,null,"Another Action"))))),D.a.createElement(C.k,{key:"buttondropdown3"},D.a.createElement(C.r,null,"ButtonDropdown with Icon & Arrows",D.a.createElement(C.h,{radius:"circle",color:"hover-bg",onClick:this.toggleCode3,active:this.state.collapseCode3},D.a.createElement(C.T,{imgSrc:"code",size:"md"}))),D.a.createElement(C.F,{isOpen:this.state.collapseCode3},D.a.createElement(C.l,{className:"pl-0 pr-0 bg-light"},D.a.createElement("pre",{className:"pl-5 pr-3"},D.a.createElement("code",null,'import React from \'react\';\nimport { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from \'@triniti/admin-ui-plugin/components\';\n\nExample extends Component {\n  constructor(props) {\n    super(props);\n\n    this.toggle = this.toggle.bind(this);\n    this.state = {\n      dropdownOpen: false,\n    };\n  }\n\n  toggle() {\n    this.setState({ dropdownOpen: !this.state.dropdownOpen });\n  }\n\n\n  render() {\n    return (\n    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>\n      <DropdownToggle outline radius="circle" color="hover">\n        <Icon imgSrc="more-vertical" alt="more" size="md" />\n      </DropdownToggle>\n      <DropdownMenu arrow="left">\n        <DropdownItem header>Header</DropdownItem>\n        <DropdownItem disabled>Action</DropdownItem>\n        <DropdownItem>Another Action</DropdownItem>\n        <DropdownItem divider />\n        <DropdownItem>Another Action</DropdownItem>\n      </DropdownMenu>\n    </ButtonDropdown>\n    );\n  }\n}')))),D.a.createElement(C.l,{indent:!0},D.a.createElement(C.i,{isOpen:this.state.dropdownOpen3,toggle:this.toggle3},D.a.createElement(C.O,{outline:!0,radius:"circle",color:"hover"},D.a.createElement(C.T,{imgSrc:"more-vertical",alt:"more",size:"md"})),D.a.createElement(C.N,{arrow:"left"},D.a.createElement(C.M,{header:!0},"Header"),D.a.createElement(C.M,{disabled:!0},"Action"),D.a.createElement(C.M,null,"Another Action"),D.a.createElement(C.M,{divider:!0}),D.a.createElement(C.M,null,"Another Action"))))),D.a.createElement(C.k,{key:"props0"},D.a.createElement(C.r,null,"ButtonDropdown Properties"),D.a.createElement(C.l,{className:"pl-5"},'Same as "Dropdown" component except wraps component in .btn-group class')),D.a.createElement(C.k,{key:"props1"},D.a.createElement(C.r,null,"Dropdown Properties"),D.a.createElement(C.l,null,D.a.createElement(C.Lb,{hover:!0,responsive:!0},D.a.createElement("thead",null,D.a.createElement("tr",null,D.a.createElement("th",null,"Name"),D.a.createElement("th",null,"Type"),D.a.createElement("th",null,"Default"),D.a.createElement("th",null,"Description"))),D.a.createElement("tbody",null,D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"active"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"addonType"),D.a.createElement("td",null,"oneOfType"),D.a.createElement("td",null),D.a.createElement("td",null,"'prepend', 'append'")),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"children"),D.a.createElement("td",null,"node"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"cssModule"),D.a.createElement("td",null,"object"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"direction"),D.a.createElement("td",null,"oneOf"),D.a.createElement("td",null),D.a.createElement("td",null,"'up', 'down', 'left', 'right'")),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"disabled"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"group"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"inNavbar"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null),D.a.createElement("td",null,"For Dropdown usage inside a Navbar (disables popper)")),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"isOpen"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"nav"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null),D.a.createElement("td",null,"For Dropdown usage inside a Nav")),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"setActiveFromChild"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"size"),D.a.createElement("td",null,"string"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"tag"),D.a.createElement("td",null,"string"),D.a.createElement("td",null,"'div'"),D.a.createElement("td",null,"default: 'div' unless nav=true, then 'li'")),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"toggle"),D.a.createElement("td",null,"func"),D.a.createElement("td",null),D.a.createElement("td",null)))))),D.a.createElement(C.k,{key:"props2"},D.a.createElement(C.r,null,"Dropdown Toggle Properties"),D.a.createElement(C.l,null,D.a.createElement(C.Lb,{hover:!0,responsive:!0},D.a.createElement("thead",null,D.a.createElement("tr",null,D.a.createElement("th",null,"Name"),D.a.createElement("th",null,"Type"),D.a.createElement("th",null,"Default"),D.a.createElement("th",null,"Description"))),D.a.createElement("tbody",null,D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"'aria-haspopup'"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null,"'true'"),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"caret"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"children"),D.a.createElement("td",null,"node"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"className"),D.a.createElement("td",null,"string"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"color"),D.a.createElement("td",null,"string"),D.a.createElement("td",null,"'secondary'"),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"'data-toggle'"),D.a.createElement("td",null,"string"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"disabled"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"nav"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null),D.a.createElement("td",null,"For Dropdown usage inside a Nav")),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"onClick"),D.a.createElement("td",null,"func"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"split"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"tag"),D.a.createElement("td",null,"oneOfType"),D.a.createElement("td",null),D.a.createElement("td",null,"Defaults to Button component")),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"toggle"),D.a.createElement("td",null,"func"),D.a.createElement("td",null),D.a.createElement("td",null)))))),D.a.createElement(C.k,{key:"props3"},D.a.createElement(C.r,null,"Dropdown Menu Properties"),D.a.createElement(C.l,null,D.a.createElement(C.Lb,{hover:!0,responsive:!0},D.a.createElement("thead",null,D.a.createElement("tr",null,D.a.createElement("th",null,"Name"),D.a.createElement("th",null,"Type"),D.a.createElement("th",null,"Default"),D.a.createElement("th",null,"Description"))),D.a.createElement("tbody",null,D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"children"),D.a.createElement("td",null,"node"),D.a.createElement("td",null),D.a.createElement("td",null,"*",D.a.createElement("i",null,"Required"))),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"className"),D.a.createElement("td",null,"string"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"flip"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null,"'true'"),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"modifiers"),D.a.createElement("td",null,"object"),D.a.createElement("td",null),D.a.createElement("td",null,"Custom modifiers that are passed to DropdownMenu.js, see ",D.a.createElement("a",{href:"https://popper.js.org/popper-documentation.html#modifiers",target:"blank"},"https://popper.js.org/popper-documentation.html#modifiers"))),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"persist"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null),D.a.createElement("td",null,"Persist the popper, even when closed.")),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"right"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"tag"),D.a.createElement("td",null,"string"),D.a.createElement("td",null,"'div'"),D.a.createElement("td",null)))))),D.a.createElement(C.k,{key:"props4"},D.a.createElement(C.r,null,"Dropdown Item Properties"),D.a.createElement(C.l,null,D.a.createElement(C.Lb,{hover:!0,responsive:!0},D.a.createElement("thead",null,D.a.createElement("tr",null,D.a.createElement("th",null,"Name"),D.a.createElement("th",null,"Type"),D.a.createElement("th",null,"Default"),D.a.createElement("th",null,"Description"))),D.a.createElement("tbody",null,D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"active"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"children"),D.a.createElement("td",null,"node"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"className"),D.a.createElement("td",null,"string"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"disabled"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"divider"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"header"),D.a.createElement("td",null,"bool"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"onClick"),D.a.createElement("td",null,"func"),D.a.createElement("td",null),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"tag"),D.a.createElement("td",null,"oneOfType"),D.a.createElement("td",null,"'button'"),D.a.createElement("td",null)),D.a.createElement("tr",null,D.a.createElement("th",{scope:"row"},"toggle"),D.a.createElement("td",null,"func"),D.a.createElement("td",null),D.a.createElement("td",null))))))]})}}]),t}(D.a.Component);t.default=O}}]);