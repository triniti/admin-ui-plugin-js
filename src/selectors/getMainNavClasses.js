export default ({ adminUi }) => {
  const { isOpen } = adminUi.mainNav;
  return isOpen ? 'is-active' : '';
};
