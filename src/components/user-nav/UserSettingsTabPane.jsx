import React from 'react';
import PropTypes from 'prop-types';
import { Button, CardBlock, DropdownItem, Media, ScrollableContainer, TabPane } from '../';

const UserSettingsTabPane = ({
  tabId,
  handleLogout,
  currentTheme,
  toggleTheme,
}) => (
  <TabPane tabId={tabId}>
    <ScrollableContainer>
      <CardBlock>
        <Media href="#" className="justify-content-center mt-0 pb-3">
          <Media
            object
            src="https://placeholdit.imgix.net/~text?txtsize=16&txt=200%C3%97200&w=200&h=200"
            alt="Generic placeholder image"
            className="rounded-circle"
          />
        </Media>

        <Button block color="info" onClick={toggleTheme} className="round">switch theme: {currentTheme}</Button>
        <DropdownItem divider />
        <Button block color="danger" onClick={handleLogout} className="round">Logout</Button>

      </CardBlock>
    </ScrollableContainer>
  </TabPane>
);

UserSettingsTabPane.propTypes = {
  tabId: PropTypes.string,
  handleLogout: PropTypes.func,
  currentTheme: PropTypes.string,
  toggleTheme: PropTypes.func,
};

export default UserSettingsTabPane;
