export default ({ adminUi }) => {
  const { currentSection } = adminUi.mainNav;
  // fixme: generalize sessionStorage (no tmz names)
  const referralAfterLogin = sessionStorage.getItem('tmz:user:redirect_location') || 'dashboard';
  return currentSection === 'login' ? referralAfterLogin : currentSection;
};
