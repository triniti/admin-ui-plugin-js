export const PLUGIN_PREFIX = '@triniti/admin-ui/';
const t = (id) => `${PLUGIN_PREFIX}${id}`;

export const actionTypes = {
  PREFIX: PLUGIN_PREFIX,

  // navigations
  LOGOUT_REQUESTED: t('LOGOUT_REQUESTED'),

  // alerts
  ALERT_SENT: t('ALERT_SENT'),
  ALERT_DISMISSED: t('ALERT_DISMISSED'),
};

export const settings = {
  PREFIX: PLUGIN_PREFIX,

  THEME_STORAGE: t('theme'),
  THEME_DARK: 'dark',
  THEME_LIGHT: 'light',
};
