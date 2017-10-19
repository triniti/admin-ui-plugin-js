const key = 'iam.auth.redirectTo';

export default ({ adminUi }) => {
  const { currentSection } = adminUi.mainNav;
  const referralAfterLogin = localStorage.getItem(key) || 'dashboard';
  return currentSection === 'login' ? referralAfterLogin : currentSection;
};
