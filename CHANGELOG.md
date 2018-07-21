# CHANGELOG

## v0.5.6
* Add poll grid, heading, quote, page-break, and gallery icons.

## v0.5.5
* Update nvmrc to use node 10.4.1.
* Update `CreateModalButton`.
* Add `UncontrolledCollpse` from reactstrap.
* Add `CardCollapse` component.


## v0.5.4
* Upgrade react and react-dom to v16.4.1.
* Add `CreateModalButton` component.
* New feature in TrinitiAppNav to handle modal popup directly from nav menu.
* Update demo.


## v0.5.3
* Style CustomInput and Carousel components
* Style status styles in search dropdown
* Deprecate hoverOutline for Media component, use hover="outline"
* Update UI examples.


## v0.5.2
* Fix Bug: alert reducer now return the correct alert-bar state.


## v0.5.1
* Add InputNumber component, style, README.
* Add gutter prop to Row component to control col gutter width.
* Update UI examples.
* Fix Bug: Select component should forward ref to parent component correctly.


## v0.5.1
* Add InputNumber component, style, README.
* Add gutter prop to Row component to control col gutter width.
* Update UI examples.
* Fix Bug: Select component should forward ref to parent component correctly.


## v0.5.0
__BREAKING CHANGES__

* App component now requires `navComponent` as a prop to redner navigation menu.
* Refactor app navbar component, move `container/navbar` to `components/triniti-app-nav`. Delete `container` directory.
* Active/Current sectoins are checked at Rotuer level in `MainNavContent` component, and it's not related to redux state anymore.
* Move most of redux state into component's local state, reduce admin-ui state tree (also, actions, selectors, reducers).
* Remove `MainNav`, `UserNav`, `MobileNav` from components export.
* Remove `NavDropdown` component, use `<Dropdown nav>` instead.
* Refactor all components to import Reactstrap js.
* Update styles
  * Add vimeo and soundcloud icons
  * Add props to DropdownToggle to match Button
  * Use Order instead of Pull Push for Col in Layout
  * Use Dropdown nav instead of NavDropdown
  * Updated Divider component to use a size prop and just use horizontal as a boolean to change the direction
  * Add BackgroundImage component
  * Add gutter-* classes to control col padding
  * Add aspectRatio prop to Media - 1by1, 4by3, 16by9, 2by1, 3by1
  * Add hoverBorder prop for card for 4px inner border on hover/selected
  * Add col-xl-2p for 5 cols in row, 20% width
* Select component now support full react-select features by give `async` or `creatable` props.
* Add a switch to Demo `UiForm` screen to enable/disable user alert when user leave screen.
* Update `createNavUnit` from a method to a react component, and rename to `MainNavContent`
* Add utils/toast.
* Add utils/getUserConfirmation (for react-router-4 [history.block](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md)).
* Fix issue when user clicks on navbar title, on desktop the screen should transition to the first option of the dropdown menu, but on mobile view, it should only toggle the dropdown open/close.
* Fix issue when user clicks on a dropdown menu on mobile view, main-nav should auto-close.


## v0.4.15
* Update to Bootstrap 4.1
* Update SweetAlert Spinner to include Title
* Add ability to pass className and attributes to ScrollableContainer component
* Add tablet and desktop icons for preview buttons
* Update Sweet Alert logout buttons in admin-ui
* Set default size to small for checkbox, radio and switch
* Add sd size to checkbox, radio and switch


## v0.4.14
* Add SweetAlert local component on top of SweetAlert2
* Match SweetAlert and Modal styling so you can use interchangably
* New css spinner, .triniti-spinner, in use by SweetAlert and Modal components


## v0.4.13
* Add beginning styles for list-group history.
* Fix a few list-group themes.
* Add a few outline icons for icon-groups.
* Update iframe, settings and timeline svgs.
* Update Checkbox and Radio components, removing need for id and allowing for children as label.
* Status color variables added here, if conflict - choose their code. Merged with master prior to PR.
* Add more prop listings to UI pages.
* Move Spinner, Switch, Checkbox and Radio to own UI example page.
* Add React Datepicker as DatePicker component, styled to match.
* Add React Select as Select component, styled to match.
* Add React Stepper Horizontal as Stepper component, styled to match.
* Add scrollable popover example showing Block Editor content types.
* Clicking on main navigation tabs will now main pages (first link within that section).


## v0.4.12
* Add css classes for node statuses (status-draft, status-published, etc.).


## v0.4.11
* Update App to do createRoutes in constructor instead of render so the children wont get wiped out on every render.


## v0.4.10
* Add space for Stepper component.
* Add icon-group and additional file type icons for block-editor.
* Add centered prop for Spinner.
* Add scrollable popover example.
* Add new dropdown header style - more compact like Slacks.
* Remove href wrapping button fix since it caused other issues.
* Add Roles and Chat examples to list-groups.


## v0.4.9
* issue #79: Add Properties and Example Code to UI Example Pages.


## v0.4.8
* issue #77: Create File Type Icons for Page Editor.


## v0.4.7
* issue #75: OVP Updates and New Icons.


## v0.4.6
* Form updates and a few new props in UI pages.


## v0.4.5
* issue #72: Adding Props, Icons, CheckBox fix, Card & CardHeader fixes.


## v0.4.4
* Remove datalist component.
* issue #66: Add Parameter to Checkbox to use a button instead of check icon.
* issue #65: Update Icons to insert SVG instead of Data64.


## v0.4.3
* Add createLazyComponent HOC.
* Add button style to checkbox component.  Allows for style parameters from Button component with text from children.
* Fix issue #67: breadcrumbs created by "screen" need a "key" prop.


## v0.4.2
* Add depth to the design with a darker background, drop shadows and gradient buttons.
* Center cards.
* Update modal
  * add a xl modal
  * add maxWidth prop to set any width and fixed mobile resizing of all modals. **maxWidth will overwrite the maxWidth set by style prop**
* Switch now can have infix labels.
* Fix disabled state for checkboxes.
* Form element components now all have the same heights as buttons and form-controls for better inlining.
* Add new icons.
* Rename `UiToggle` to `UiCollapse`.
* Other fine tunes and style cleanup.


## v0.4.1
* Datalist component is now deprecated, it's moving to `@triniti/redux-form-plugin/components/data-list-field`.
* Update peerDependencies, now requires bootstrap v4.
* Match style to bootstrap v4.0.0 (demo -> src -> assets -> styles -> *.scss).
* Update reactstrap components accordingly with bootstrap v4.0.0.
* Add `breadcrumbs` prop to `Screen` component
* Remove InputGroupButton.
* InputGroupAddon now has a reqired prop `addonType`=`string` (one of `append`, `prepend`).
* Rename `Table` prop `inverse` to `dark`.


## v0.4.0
__BREAKING CHANGES__

* Add support for lazy loading components with react universal (default is to lazy load).
* Add new `screen` component which handles all of the placement of regions by exposing semantic props rather than requiring the assembly of components.
* Change `page-action-button` to just `action-button`.
* Remove the following components as they are not necessary now that screen exists:
  * main
  * main-content
  * page-actions
  * page-header
  * screen-content
  * scrollable-container
  * sidebar
  * sidebar-header
  * split-content
  * tab-nav


## v0.3.1
* issue #48: Allow AlertBar Alerts to dismiss themselves when their link is clicked
* issue #47: Fix datalist error display and corresponding test


## v0.3.0
* Integrate `app-content` into `app` component and delete `app-content` component.
* Rename component `content-container` to `screen-content`, exports as old name and new name until next minor rev.
* Rename component `main-container` to `main`, exports as old name and new name until next minor rev.
* Rename `nav-bar` container component to just `navbar`.
* Create `sidebar` widget and tons of other tiny fixes and renaming.
* Add inset to `CardHeader`.
* Add themes to form-control
* Remove top margin on cards.
* Update styles of table headers.
* Create a FlexSpacer component that may or may not be used.



## v0.2.0
* New components: AlertBar, Datalist, PageActionButton
* Removed specific Button components (SaveButton, etc)
* Migrate tests to tape


## v0.1.5
* Create multi-state dropdown/button.
* Fix bug in RouterLink and TabNav.
* Other style improvements and clean up.


## v0.1.4
* Add PageActions, upgrade other components.
* Color correction.
* Move sass files into local components.
* More style clean up.


## v0.1.3
* Correctly importing scss from node_modules.


## v0.1.2
* Fix bug in HeaderDisplay component.
* Fix bug in StatusMessage component.
* Update some components because bootstrap 4 beta is in use now.


## v0.1.1
* Copy scss and svg files into dist during build process.
* Add nav menu into demo site.
* Make other improvments for demo site.


## v0.1.0
* initial version
