import React from 'react';

import UiAlert from './components/ui-alert';
import UiBadge from './components/ui-badge';
import UiBreadcrumbs from './components/ui-breadcrumbs';
import UiButtons from './components/ui-buttons';
import UiButtonDropDown from './components/ui-button-drop-down';
import UiButtonGroup from './components/ui-button-group';
import UiCard from './components/ui-card';
import UiToggle from './components/ui-toggle';
import UiDatalist from './components/ui-datalist';
import UiDropdown from './components/ui-dropdown';
import UiForm from './components/ui-form';
import UiHeaders from './components/ui-headers';
import UiIcons from './components/ui-icons';
import UiInputGroup from './components/ui-input-group';
import UiJumbotron from './components/ui-jumbotron';
import UiLayout from './components/ui-layout';
import UiListGroup from './components/ui-list-group';
import UiMedia from './components/ui-media';
import UiModal from './components/ui-modal';
import UiNavbar from './components/ui-navbar';
import UiNav from './components/ui-nav';
import UiPagination from './components/ui-pagination';
import UiPopover from './components/ui-popover';
import UiProgress from './components/ui-progress';
import UiTable from './components/ui-table';
import UiTabs from './components/ui-tabs';
import UiTooltip from './components/ui-tool-tip';

export default {
  alerts: UiAlert(),
  badge: UiBadge(),
  breadcrumbs: UiBreadcrumbs(),
  buttons: <UiButtons />,
  'button-drop-down': <UiButtonDropDown />,
  'button-group': UiButtonGroup(),
  card: UiCard(),
  datalist: <UiDatalist />,
  dropdown: <UiDropdown />,
  form: <UiForm />,
  headers: <UiHeaders />,
  icons: <UiIcons />,
  'input-group': <UiInputGroup />,
  jumbotron: UiJumbotron(),
  layout: UiLayout(),
  'list-group': UiListGroup(),
  media: UiMedia(),
  modal: <UiModal />,
  navbar: <UiNavbar />,
  navs: <UiNav />,
  pagination: <UiPagination />,
  popovers: <UiPopover />,
  'progress-bars': UiProgress(),
  tables: <UiTable />,
  tabs: <UiTabs />,
  toggle: <UiToggle />,
  tooltips: <UiTooltip />,
};
