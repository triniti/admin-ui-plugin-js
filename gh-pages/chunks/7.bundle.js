(window.webpackJsonptriniti=window.webpackJsonptriniti||[]).push([[7],{"./screens/buttons/index.jsx":function(e,t,a){"use strict";a.r(t);var l=a("../../node_modules/@babel/runtime/helpers/toConsumableArray.js"),n=a.n(l),r=a("../../node_modules/@babel/runtime/helpers/classCallCheck.js"),c=a.n(r),o=a("../../node_modules/@babel/runtime/helpers/createClass.js"),i=a.n(o),m=a("../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),s=a.n(m),u=a("../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"),d=a.n(u),E=a("../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"),h=a.n(E),k=a("../../node_modules/@babel/runtime/helpers/inherits.js"),g=a.n(k),b=a("../../node_modules/react/index.js"),p=a.n(b),y=a("./components/primary-actions/index.jsx"),x=a("./components/sidenav/index.jsx"),S=a("../../src/components/index.js"),v=function(e){function t(e){var a;return c()(this,t),(a=s()(this,d()(t).call(this,e))).state={cSelected:[]},a.onRadioBtnClick=a.onRadioBtnClick.bind(h()(a)),a.onCheckboxBtnClick=a.onCheckboxBtnClick.bind(h()(a)),a}return g()(t,e),i()(t,[{key:"onRadioBtnClick",value:function(e){this.setState({rSelected:e})}},{key:"onCheckboxBtnClick",value:function(e){var t=this.state.cSelected.indexOf(e);t<0?this.state.cSelected.push(e):this.state.cSelected.splice(t,1),this.setState({cSelected:n()(this.state.cSelected)})}},{key:"render",value:function(){var e=this;return p.a.createElement(S.Db,{sidenav:p.a.createElement(x.a,{activeScreen:"buttons"}),sidenavHeader:!0,header:"Buttons",primaryActions:p.a.createElement(y.a,null),body:[p.a.createElement(S.k,{key:"button0"},p.a.createElement(S.r,null,"Brand"),p.a.createElement(S.l,null,p.a.createElement(S.h,null,"default"),p.a.createElement(S.h,{outline:!0},"outline"),p.a.createElement(S.h,{color:"primary"},"primary"),p.a.createElement(S.h,{color:"primary",outline:!0},"primary"),p.a.createElement(S.h,{color:"secondary"},"secondary"),p.a.createElement(S.h,{color:"secondary",outline:!0},"secondary"),p.a.createElement("a",{href:"",className:"text-decoration-none"},p.a.createElement(S.h,null,"href wrapped")),p.a.createElement("div",{className:"screen-primary-actions"},p.a.createElement(S.h,{color:"light",className:"btn-action-save"},p.a.createElement(S.T,{imgSrc:"save",className:"mr-1"}),"Save"),p.a.createElement(S.h,{color:"light",className:"btn-action-save disabled"},p.a.createElement(S.T,{imgSrc:"save",className:"mr-1"}),"Save")))),p.a.createElement(S.k,{key:"button1"},p.a.createElement(S.r,null,"Solid",p.a.createElement("span",null,p.a.createElement(S.h,{color:"hover-bg",size:"sm"},"hover-bg"),p.a.createElement(S.h,{size:"sm"},"default"))),p.a.createElement(S.l,null,p.a.createElement(S.h,null,"default"),p.a.createElement(S.h,{color:"primary"},"primary"),p.a.createElement(S.h,{color:"secondary"},"secondary"),p.a.createElement(S.h,{color:"warning"},"warning"),p.a.createElement(S.h,{color:"danger"},"danger"),p.a.createElement(S.h,{color:"light"},"light"),p.a.createElement(S.h,{color:"dark"},"dark"),p.a.createElement(S.h,{color:"link"},"link"),p.a.createElement(S.h,{color:"link-bg"},"link-bg"),p.a.createElement(S.h,{color:"hover"},"hover"),p.a.createElement(S.h,{color:"icon-hover-bg"},"icon-hover-bg ",p.a.createElement(S.T,{imgSrc:"arrow-double-right",className:"ml-1"})),p.a.createElement(S.h,{color:"hover-bg"},"hover-bg"),p.a.createElement(S.h,{color:"link",radius:"circle"},p.a.createElement(S.T,{imgSrc:"microphone"})),p.a.createElement(S.h,{color:"link-bg",radius:"circle"},p.a.createElement(S.T,{imgSrc:"bolt-outline"})),p.a.createElement(S.h,{color:"hover",radius:"circle"},p.a.createElement(S.T,{imgSrc:"trash"})),p.a.createElement(S.h,{color:"icon-hover-bg",radius:"circle"},p.a.createElement(S.T,{imgSrc:"clipboard"})),p.a.createElement(S.h,{color:"hover-bg",radius:"circle"},p.a.createElement(S.T,{imgSrc:"microphone"})),p.a.createElement(S.h,{color:"hover-bg text-secondary",radius:"circle"},p.a.createElement(S.T,{imgSrc:"microphone"})))),p.a.createElement(S.k,{key:"button2"},p.a.createElement(S.r,null,p.a.createElement("span",null,'Solid radius="round"'),p.a.createElement(S.h,{outline:!0,radius:"round",color:"link"},"outline link")),p.a.createElement(S.l,null,p.a.createElement(S.h,{radius:"round"},"default"),p.a.createElement(S.h,{color:"primary",radius:"round"},"primary"),p.a.createElement(S.h,{color:"secondary",radius:"round"},"secondary"),p.a.createElement(S.h,{color:"warning",radius:"round"},"warning"),p.a.createElement(S.h,{color:"danger",radius:"round"},"danger"),p.a.createElement(S.h,{color:"light",radius:"round"},"light"),p.a.createElement(S.h,{color:"dark",radius:"round"},"dark"))),p.a.createElement(S.k,{key:"button3"},p.a.createElement(S.r,null,p.a.createElement("span",null,'Solid radius="none"'),p.a.createElement(S.h,{outline:!0,radius:"none",color:"link"},"outline link")),p.a.createElement(S.l,null,p.a.createElement(S.h,{radius:"none"},"default"),p.a.createElement(S.h,{color:"primary",radius:"none"},"primary"),p.a.createElement(S.h,{color:"secondary",radius:"none"},"secondary"),p.a.createElement(S.h,{color:"warning",radius:"none"},"warning"),p.a.createElement(S.h,{color:"danger",radius:"none"},"danger"),p.a.createElement(S.h,{color:"light",radius:"none"},"light"),p.a.createElement(S.h,{color:"dark",radius:"none"},"dark"))),p.a.createElement(S.k,{key:"button4"},p.a.createElement(S.r,null,"Outline",p.a.createElement(S.h,{color:"hover",radius:"round"},"hover")),p.a.createElement(S.l,null,p.a.createElement(S.h,{outline:!0},"default"),p.a.createElement(S.h,{outline:!0,color:"primary"},"primary"),p.a.createElement(S.h,{outline:!0,color:"secondary"},"secondary"),p.a.createElement(S.h,{outline:!0,color:"warning"},"warning"),p.a.createElement(S.h,{outline:!0,color:"danger"},"danger"),p.a.createElement(S.h,{outline:!0,color:"light"},"light"),p.a.createElement(S.h,{outline:!0,color:"dark"},"dark"),p.a.createElement(S.h,{outline:!0,color:"link"},"link")),p.a.createElement(S.l,null,p.a.createElement(S.h,{outline:!0,radius:"round"},"default"),p.a.createElement(S.h,{outline:!0,radius:"round",color:"primary"},"primary"),p.a.createElement(S.h,{outline:!0,radius:"round",color:"secondary"},"secondary"),p.a.createElement(S.h,{outline:!0,radius:"round",color:"warning"},"warning"),p.a.createElement(S.h,{outline:!0,radius:"round",color:"danger"},"danger"),p.a.createElement(S.h,{outline:!0,radius:"round",color:"light"},"light"),p.a.createElement(S.h,{outline:!0,radius:"round",color:"dark"},"dark")),p.a.createElement(S.l,null,p.a.createElement(S.h,{outline:!0,radius:"none"},"default"),p.a.createElement(S.h,{outline:!0,radius:"none",color:"primary"},"primary"),p.a.createElement(S.h,{outline:!0,radius:"none",color:"secondary"},"secondary"),p.a.createElement(S.h,{outline:!0,radius:"none",color:"warning"},"warning"),p.a.createElement(S.h,{outline:!0,radius:"none",color:"danger"},"danger"),p.a.createElement(S.h,{outline:!0,radius:"none",color:"light"},"light"),p.a.createElement(S.h,{outline:!0,radius:"none",color:"dark"},"dark"))),p.a.createElement(S.k,{key:"button5"},p.a.createElement(S.r,null,"OutlineText"),p.a.createElement(S.l,null,p.a.createElement(S.j,null,p.a.createElement(S.h,{outlineText:!0,size:"lg"},"default"),p.a.createElement(S.h,{outlineText:!0,color:"primary",size:"lg"},"primary"),p.a.createElement(S.h,{outlineText:!0,color:"secondary",size:"lg"},"secondary"),p.a.createElement(S.h,{outlineText:!0,color:"warning",size:"lg"},"warning"),p.a.createElement(S.h,{outlineText:!0,color:"danger",size:"lg"},"danger"),p.a.createElement(S.h,{outlineText:!0,color:"dark",size:"lg"},"dark"))),p.a.createElement(S.l,null,p.a.createElement(S.h,{outlineText:!0},"default"),p.a.createElement(S.h,{outlineText:!0,color:"primary"},"primary"),p.a.createElement(S.h,{outlineText:!0,color:"secondary"},"secondary"),p.a.createElement(S.h,{outlineText:!0,color:"warning"},"warning"),p.a.createElement(S.h,{outlineText:!0,color:"danger"},"danger"),p.a.createElement(S.h,{outlineText:!0,color:"dark"},"dark")),p.a.createElement(S.l,null,p.a.createElement(S.h,{outlineText:!0,size:"sm",radius:"round"},"default"),p.a.createElement(S.h,{outlineText:!0,color:"primary",size:"sm",radius:"round"},"primary"),p.a.createElement(S.h,{outlineText:!0,color:"secondary",size:"sm",radius:"round"},"secondary"),p.a.createElement(S.h,{outlineText:!0,color:"warning",size:"sm",radius:"round"},"warning"),p.a.createElement(S.h,{outlineText:!0,color:"danger",size:"sm",radius:"round"},"danger"),p.a.createElement(S.h,{outlineText:!0,color:"dark",size:"sm",radius:"round"},"dark"))),p.a.createElement(S.k,{key:"button6"},p.a.createElement(S.r,null,"Sizes"),p.a.createElement(S.l,null,p.a.createElement("div",null,p.a.createElement(S.h,{color:"primary",size:"sm"},"Size sm"),p.a.createElement(S.h,{size:"sm"},"Size sm")),p.a.createElement("div",null,p.a.createElement(S.h,{color:"primary"},"Default"),p.a.createElement(S.h,null,"Default")),p.a.createElement("div",null,p.a.createElement(S.h,{color:"primary",size:"lg"},"Size lg"),p.a.createElement(S.h,{outline:!0,size:"lg"},"Size lg")),p.a.createElement("div",null,p.a.createElement(S.h,{color:"primary",size:"xl"},"Size xl"),p.a.createElement(S.h,{outline:!0,size:"xl"},"Size xl"),p.a.createElement("p",{className:"small"},"* Most often used in modals")))),p.a.createElement(S.k,{key:"button7"},p.a.createElement(S.r,null,"Block Level"),p.a.createElement(S.l,null,p.a.createElement(S.h,{color:"primary",size:"lg",block:!0},"Block level button"),p.a.createElement(S.h,{size:"lg",block:!0},"Block level button"))),p.a.createElement(S.k,{key:"button8"},p.a.createElement(S.r,null,"Active State"),p.a.createElement(S.l,null,p.a.createElement(S.Cb,null,p.a.createElement(S.E,{sm:"6"},p.a.createElement(S.h,{active:!0},"Default"),p.a.createElement(S.h,{outline:!0,active:!0},"Outline"),p.a.createElement(S.h,{color:"primary",active:!0},"Primary"),p.a.createElement(S.h,{color:"secondary",active:!0},"Secondary"))))),p.a.createElement(S.k,{key:"button9"},p.a.createElement(S.r,null,"Disabled State"),p.a.createElement(S.l,null,p.a.createElement(S.Cb,null,p.a.createElement(S.E,null,p.a.createElement(S.h,{disabled:!0},"Default"),p.a.createElement(S.h,{disabled:!0,outline:!0},"Outline"),p.a.createElement(S.h,{color:"primary",disabled:!0},"Primary"),p.a.createElement(S.h,{color:"secondary",disabled:!0},"Secondary"))))),p.a.createElement(S.k,{key:"button10"},p.a.createElement(S.r,null,"Checkbox and Radio Buttons (Stateful Buttons)",p.a.createElement(S.j,null,p.a.createElement(S.h,{outline:!0,size:"sm"},"5"),p.a.createElement(S.h,{outline:!0,size:"sm"},"6"),p.a.createElement(S.h,{outline:!0,size:"sm"},"7"))),p.a.createElement(S.l,null,p.a.createElement(S.Cb,null,p.a.createElement(S.E,{xs:"12",sm:"6"},p.a.createElement(S.x,{tag:"h4"},"Radio Buttons default"),p.a.createElement(S.j,{className:"mb-2"},p.a.createElement(S.h,{onClick:function(){return e.onRadioBtnClick(1)},active:1===this.state.rSelected,radius:"round"},"One"),p.a.createElement(S.h,{onClick:function(){return e.onRadioBtnClick(2)},active:2===this.state.rSelected,radius:"round"},"Two"),p.a.createElement(S.h,{onClick:function(){return e.onRadioBtnClick(3)},active:3===this.state.rSelected,radius:"round"},"Three")),p.a.createElement(S.x,{tag:"h4"},"Radio Buttons outline"),p.a.createElement(S.j,{className:"mb-2"},p.a.createElement(S.h,{onClick:function(){return e.onRadioBtnClick(1)},active:1===this.state.rSelected,size:"sm",outline:!0},"One"),p.a.createElement(S.h,{onClick:function(){return e.onRadioBtnClick(2)},active:2===this.state.rSelected,size:"sm",outline:!0},"Two"),p.a.createElement(S.h,{onClick:function(){return e.onRadioBtnClick(3)},active:3===this.state.rSelected,size:"sm",outline:!0},"Three")),p.a.createElement(S.x,{tag:"h4"},"Radio Buttons outline secondary"),p.a.createElement(S.j,{className:"mb-2"},p.a.createElement(S.h,{outline:!0,onClick:function(){return e.onRadioBtnClick(1)},active:1===this.state.rSelected,color:"secondary",radius:"round",size:"sm"},"One"),p.a.createElement(S.h,{outline:!0,onClick:function(){return e.onRadioBtnClick(2)},active:2===this.state.rSelected,color:"secondary",radius:"round",size:"sm"},"Two"),p.a.createElement(S.h,{outline:!0,onClick:function(){return e.onRadioBtnClick(3)},active:3===this.state.rSelected,color:"secondary",radius:"round",size:"sm"},"Three")),p.a.createElement(S.x,{tag:"h4"},"Radio Buttons outlineText"),p.a.createElement(S.j,{className:"mb-2"},p.a.createElement(S.h,{outlineText:!0,onClick:function(){return e.onRadioBtnClick(1)},active:1===this.state.rSelected,color:"primary",size:"sm"},"Save"),p.a.createElement(S.h,{outlineText:!0,onClick:function(){return e.onRadioBtnClick(2)},active:2===this.state.rSelected,size:"sm"},"N/A"),p.a.createElement(S.h,{outlineText:!0,onClick:function(){return e.onRadioBtnClick(3)},active:3===this.state.rSelected,color:"danger",size:"sm"},"Delete")),p.a.createElement("p",{className:"text-muted"},"Selected: ",p.a.createElement("span",{className:"text-info"},this.state.rSelected))),p.a.createElement(S.E,{xs:"12",sm:"6"},p.a.createElement(S.x,{tag:"h4"},"Checkbox Buttons"),p.a.createElement(S.j,{className:"mb-2"},p.a.createElement(S.h,{onClick:function(){return e.onCheckboxBtnClick(1)},active:this.state.cSelected.includes(1)},"One"),p.a.createElement(S.h,{onClick:function(){return e.onCheckboxBtnClick(2)},active:this.state.cSelected.includes(2)},"Two"),p.a.createElement(S.h,{onClick:function(){return e.onCheckboxBtnClick(3)},active:this.state.cSelected.includes(3)},"Three")),p.a.createElement(S.x,{tag:"h4"},'Checkbox Buttons "outline"'),p.a.createElement(S.j,{className:"mb-2"},p.a.createElement(S.h,{outline:!0,onClick:function(){return e.onCheckboxBtnClick(1)},active:this.state.cSelected.includes(1)},"One"),p.a.createElement(S.h,{outline:!0,onClick:function(){return e.onCheckboxBtnClick(2)},active:this.state.cSelected.includes(2)},"Two"),p.a.createElement(S.h,{outline:!0,onClick:function(){return e.onCheckboxBtnClick(3)},active:this.state.cSelected.includes(3)},"Three")),p.a.createElement("p",{className:"text-muted"},"Selected:",p.a.createElement("span",{className:"text-info"},JSON.stringify(this.state.cSelected))))))),p.a.createElement(S.k,{key:"button11"},p.a.createElement(S.r,null,'Icons radius="circle"',p.a.createElement(S.h,{outline:!0,color:"link",radius:"circle"},p.a.createElement(S.T,{imgSrc:"close"}))),p.a.createElement(S.l,null,p.a.createElement(S.h,{radius:"circle",color:"link-bg"},p.a.createElement(S.T,{imgSrc:"close",alt:"x"})),p.a.createElement(S.h,{outlineText:!0,color:"secondary",radius:"circle",size:"md"},p.a.createElement(S.T,{imgSrc:"close",alt:"x"})),p.a.createElement(S.h,{radius:"circle",size:"lg"},p.a.createElement(S.T,{imgSrc:"close",alt:"x"})),p.a.createElement(S.h,{outline:!0,color:"secondary",radius:"none",size:"lg"},p.a.createElement(S.T,{imgSrc:"close",alt:"x",className:"mr-0"})),p.a.createElement(S.h,{radius:"round",outline:!0},p.a.createElement(S.T,{imgSrc:"close",alt:"x",className:"mr-2"}),"Close Me Please"),p.a.createElement(S.h,{outline:!0,radius:"round",size:"sm"},p.a.createElement(S.T,{imgSrc:"delete-line",alt:"x",className:"mr-1"}),"Close Me Please"),p.a.createElement(S.h,{radius:"round",size:"sm"},p.a.createElement(S.T,{imgSrc:"pencil",alt:"x",className:"mr-1"}),"Edit")),p.a.createElement(S.l,null,p.a.createElement("div",{className:"d-inline-flex align-items-center"},p.a.createElement(S.h,{outline:!0,radius:"circle",size:"sm",className:"m-0"},p.a.createElement(S.T,{imgSrc:"pencil"})),p.a.createElement("div",{className:"d-inline-flex align-items-center flex-column"},p.a.createElement(S.h,{outline:!0,radius:"circle",size:"xs",className:"m-0"},p.a.createElement(S.T,{imgSrc:"move"})),p.a.createElement(S.h,{outline:!0,radius:"circle",size:"sm",className:"m-2"},p.a.createElement(S.T,{imgSrc:"move"})),p.a.createElement(S.h,{outline:!0,radius:"circle",size:"xs",className:"m-0"},p.a.createElement(S.T,{imgSrc:"move"}))),p.a.createElement(S.h,{outline:!0,radius:"circle",size:"sm",className:"m-0"},p.a.createElement(S.T,{imgSrc:"trash"}))))),p.a.createElement(S.k,{key:"props"},p.a.createElement(S.r,null,"Button Properties"),p.a.createElement(S.l,null,p.a.createElement(S.Lb,{hover:!0,responsive:!0},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",null,"Name"),p.a.createElement("th",null,"Type"),p.a.createElement("th",null,"Default"),p.a.createElement("th",null,"Description"))),p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},"action"),p.a.createElement("td",null,"bool"),p.a.createElement("td",null),p.a.createElement("td",null,"Adds class 'btn-action'")),p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},"active"),p.a.createElement("td",null,"bool"),p.a.createElement("td",null),p.a.createElement("td",null)),p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},"block"),p.a.createElement("td",null,"bool"),p.a.createElement("td",null),p.a.createElement("td",null)),p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},"children"),p.a.createElement("td",null,"node"),p.a.createElement("td",null),p.a.createElement("td",null)),p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},"className"),p.a.createElement("td",null,"string"),p.a.createElement("td",null),p.a.createElement("td",null)),p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},"color"),p.a.createElement("td",null,"string"),p.a.createElement("td",null,"'light'"),p.a.createElement("td",null)),p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},"disabled"),p.a.createElement("td",null,"bool"),p.a.createElement("td",null),p.a.createElement("td",null)),p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},"icon"),p.a.createElement("td",null,"bool"),p.a.createElement("td",null),p.a.createElement("td",null,"Adds class 'btn-icon' which adds a min-height of 40px, required for background images. Not required if adding Icon component inside.")),p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},"innerRef"),p.a.createElement("td",null,"neOfType"),p.a.createElement("td",null),p.a.createElement("td",null)),p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},"onClick"),p.a.createElement("td",null,"func"),p.a.createElement("td",null),p.a.createElement("td",null)),p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},"outline"),p.a.createElement("td",null,"bool"),p.a.createElement("td",null),p.a.createElement("td",null)),p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},"outlineText"),p.a.createElement("td",null,"bool"),p.a.createElement("td",null),p.a.createElement("td",null,"Adds class 'btn-outline-text-*color'. Similar to outline but with grey border.")),p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},"radius"),p.a.createElement("td",null,"string"),p.a.createElement("td",null),p.a.createElement("td",null,"Adds class 'btn-radius-*radius' with values 'round', 'circle', 'none'")),p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},"size"),p.a.createElement("td",null,"string"),p.a.createElement("td",null),p.a.createElement("td",null,"'sm', 'lg', 'xl'")),p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},"tag"),p.a.createElement("td",null,"oneOfType"),p.a.createElement("td",null,"'button'"),p.a.createElement("td",null))))))]})}}]),t}(p.a.Component);t.default=v}}]);