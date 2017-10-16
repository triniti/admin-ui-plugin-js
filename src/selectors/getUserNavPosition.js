export default ({ adminUi }) => {
  const { isOpen } = adminUi.userNav;
  return isOpen ? 'offcanvas-right' : '';
};
