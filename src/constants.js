export const PLUGIN_PREFIX = '@triniti/admin-ui/';
const t = id => `${PLUGIN_PREFIX}${id}`;

export const actionTypes = {
  PREFIX: PLUGIN_PREFIX,

  // app theme
  NEW_THEME_REQUESTED: t('NEW_THEME_REQUESTED'),

  // navigations
  MAIN_NAV_TOGGLED: t('MAIN_NAV_TOGGLED'),
  USER_NAV_TOGGLED: t('USER_NAV_TOGGLED'),
  ASIDE_ACTIVE_TAB_CHANGED: t('ASIDE_ACTIVE_TAB_CHANGED'),
  LOGOUT_REQUESTED: t('LOGOUT_REQUESTED'),

  // alerts
  ALERT_SENT: t('ALERT_SENT'),
  ALERT_DISMISSED: t('ALERT_DISMISSED'),
};
