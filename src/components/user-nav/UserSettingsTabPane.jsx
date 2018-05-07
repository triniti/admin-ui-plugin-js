import React from 'react';
import PropTypes from 'prop-types';
import { Button, CardBody, DropdownItem, Media, ScrollableContainer, TabPane } from '../';

const UserSettingsTabPane = ({
  tabId,
  onLogoutBtnClick,
  currentTheme,
  toggleTheme,
}) => (
  <TabPane tabId={tabId}>
    <ScrollableContainer>
      <CardBody>
        <Media href="#" className="justify-content-center mt-0 pb-3">
          <Media
            object
            src="https://placeholdit.imgix.net/~text?txtsize=16&txt=200%C3%97200&w=200&h=200"
            alt="Generic placeholder image"
            className="rounded-circle"
          />
        </Media>

        <Button block color="info" onClick={toggleTheme} radius="round">switch theme: {currentTheme}</Button>
        <DropdownItem divider />
        <Button block color="danger" onClick={onLogoutBtnClick} radius="round">Logout</Button>
      </CardBody>
    </ScrollableContainer>
  </TabPane>
);

UserSettingsTabPane.propTypes = {
  tabId: PropTypes.string.isRequired,
  onLogoutBtnClick: PropTypes.func.isRequired,
  currentTheme: PropTypes.string,
  toggleTheme: PropTypes.func,
};

UserSettingsTabPane.defaultProps = {
  currentTheme: 'light',
  toggleTheme: undefined,
};

export default UserSettingsTabPane;
