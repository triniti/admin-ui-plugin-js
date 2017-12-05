export const PLUGIN_PREFIX = '@triniti/admin-ui/';
const t = id => `${PLUGIN_PREFIX}${id}`;

export const actionTypes = {
  PREFIX: PLUGIN_PREFIX,

  // app theme
  NEW_THEME_REQUESTED: t('NEW_THEME_REQUESTED'),

  // navigations
  MAIN_NAV_TOGGLED: t('MAIN_NAV_TOGGLED'),
  DROPDOWN_TOGGLED: t('DROPDOWN_TOGGLED'),
  DROPDOWN_CLICKED: t('DROPDOWN_CLICKED'),
  USER_NAV_TOGGLED: t('USER_NAV_TOGGLED'),
  ASIDE_ACTIVE_TAB_CHANGED: t('ASIDE_ACTIVE_TAB_CHANGED'),
  LOGOUT_REQUESTED: t('LOGOUT_REQUESTED'),

  // notification
  FLASH_MESSAGE_RECEIVED: t('FLASH_MESSAGE_RECEIVED'),
  NOTIFICATION_TOGGLED: t('NOTIFICATION_TOGGLED'),
  SHOW_NOTIFICATION_REQUESTED: t('SHOW_NOTIFICATION_REQUESTED'),
  HIDE_NOTIFICATION_REQUESTED: t('HIDE_NOTIFICATION_REQUESTED'),

  // alerts
  ALERT_RECEIVED: t('ALERT_RECEIVED'),
};
