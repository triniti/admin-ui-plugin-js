# CHANGELOG


## v0.4.0
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
  * fixme: matt?  any others we can nix?


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
