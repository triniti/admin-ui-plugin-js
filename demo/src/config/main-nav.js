import LinkCreationModal from '../components/link-creation-modal';
import LinkCreationModal2 from '../components/link-creation-modal-2';

export default [
  {
    navType: 'item',
    navId: 'Dashboard',
    to: '/dashboard',
  },
  {
    navType: 'dropdown',
    navId: 'Samples',
    dpLinks: [
      {
        to: '/alert-bars',
        linkTitle: 'Alert Bars',
      },
      {
        to: '/alerts',
        linkTitle: 'Alerts',
      },
      {
        to: '/badges',
        linkTitle: 'Badges',
      },
    ],
  },
  {
    navType: 'dropdown',
    navId: 'Canvas',
    dpLinks: [
      {
        to: '#',
        linkTitle: 'Pages',
      },
      {
        modal: LinkCreationModal,
        modalId: 'create-demo-page',
        linkTitle: 'Create Demo Page',
      },
    ],
  },
  {
    navType: 'dropdown',
    navId: 'Media',
    dpLinks: [
      {
        to: '#',
        linkTitle: 'Search',
      },
      {
        modal: LinkCreationModal2,
        linkTitle: 'Upload',
      },
    ],
  },
  {
    navType: 'dropdown',
    navId: 'IAM',
    dpLinks: [
      {
        to: '#',
        linkTitle: 'Users',
      },
      {
        to: '#',
        linkTitle: 'Create User',
      },
      {
        to: '#',
        linkTitle: 'Roles',
      },
      {
        to: '#',
        linkTitle: 'Create Role',
      },
    ],
  },
  {
    navType: 'dropdown',
    navId: 'OVP',
    dpLinks: [
      {
        to: '#',
        linkTitle: 'Videos',
      },
      {
        to: '#',
        linkTitle: 'Create Video',
      },
    ],
  },
];
