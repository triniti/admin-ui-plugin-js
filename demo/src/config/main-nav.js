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
        modal: import('components/creation-modal'),
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
        modal: import('components/creation-modal-2'),
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
