# screen

The screen component provides exact placement of named regions. It applies appropriate styles so with very minimal effort your admin screens will look and function great.

Most of the props available expect `PropTypes.node`.  The intention is for you to fill the regions with zero or more components.

> Read [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)


## props
The `dispatch` function is expected to be from redux.  This is needed to allow the `<AlertBar>` to dismiss messages.  It may be expanded in the future but it is not likely that this component will become a "container" (connected to redux).  The goal is for this to be responsible for placing components and styling, not managing state. 

+ __dispatch:__ `PropTypes.func` - The redux dispatch function, if not supplied dismissing alerts is a noop.
+ __alerts:__ `PropTypes.array` - An array of alerts that the `<AlertBar>` component supports.
+ __header:__ `PropTypes.node` - Intended for page header-like elements, e.g. `<Breadcrumb>`, `<h1>`, `<header>`. 
+ __sidenav:__ `PropTypes.node` - Intended for one or more `<Card>` or similar items.  Everything provided is contained within a collapsable _drawer_.
+ __sidenavHeader:__ `PropTypes.node` - Typically text that is sticky to the top of the sidenav with an arrow to close it.
+ __sidebar:__ `PropTypes.node` - Intended for one or more `<Card>` or similar items.
+ __tabs:__ `PropTypes.node` - Typically expected a tab control, e.g. `<TabNav>`.  Expected to be tabs that control what is seen in the `body`.
+ __body:__ `PropTypes.node` - The primary component(s) that the screen renders.
+ __footer:__ `PropTypes.node` - Intended for secondary information or features that do not need to be prominent.
+ __primaryActions:__ `PropTypes.node` - Intended for an array of `<ActionButton>` elements or something similar which can be used to perform a quick action.  When using an array you must set key props.  To avoid that, it is possible to wrap them in a div tag.
+ __secondaryActions:__ `PropTypes.node` - Same as the `primaryActions` except these are less prominent.

> When an `<ActionButton>` becomes more complicated than one or two clicks it is usually made into a form (probably in a `<Card>`) and rendered in the sidebar.
