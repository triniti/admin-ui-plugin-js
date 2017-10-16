import { actionTypes } from '../constants';

export default () => {
  const currentTheme = localStorage.getItem('adminUi.theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('adminUi.theme', newTheme);

  return {
    type: actionTypes.NEW_THEME_REQUESTED,
    theme: newTheme,
  };
};
