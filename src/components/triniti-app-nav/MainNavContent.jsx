import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { createLazyComponent, Dropdown, DropdownToggle, DropdownMenu, NavItem, RouterLink } from '../';

class MainNavContent extends React.Component {
  static propTypes = {
    activeMobileSections: PropTypes.arrayOf(PropTypes.string),
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    navConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDropdownOptionClick: PropTypes.func,
    updateActiveMobileSections: PropTypes.func.isRequired,
  };

  static defaultProps = {
    activeMobileSections: [],
    onDropdownOptionClick: undefined,
  };

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      modal: null,
    };
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  componentDidUpdate(prevProps) {
    // @link https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
    // if you need to perform a side effect (for example, data fetching or an animation)
    // in response to a change in props, use componentDidUpdate lifecycle instead.

    // @link https://reactjs.org/docs/react-component.html#componentdidupdate
    // You may call setState() immediately in componentDidUpdate()
    // but note that it must be wrapped in a condition like in the example above,
    // or you’ll cause an infinite loop. It would also cause an extra re-rendering which,
    // while not visible to the user, can affect the component performance.
    if (this.props.location.pathname !== prevProps.location.pathname) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ showModal: false, modal: null });
    }
  }

  handleTitleClick(nextLocation, navId) {
    const { history, updateActiveMobileSections } = this.props;
    updateActiveMobileSections(navId);
    if ((window.innerWidth >= 1024) && !!nextLocation) {
      history.push(nextLocation);
    }
  }

  handleToggleModal(modal) {
    const ModalComponent = createLazyComponent(modal);
    if (!this.state.showModal) {
      this.setState({
        showModal: true,
        modal: <ModalComponent onToggle={this.handleToggleModal} key="modal" />,
      });
    } else {
      this.setState({
        showModal: false,
        modal: null,
      });
    }
  }

  render() {
    const {
      activeMobileSections,
      navConfig,
      location,
      onDropdownOptionClick,
    } = this.props;

    const mainNav = navConfig.map((dropdownUnit) => {
      const {
        navType, navId, dpLinks, to: itemTo,
      } = dropdownUnit;

      const isDropdownOpen = activeMobileSections.includes(navId);
      let isCurrentDropdown = false;
      let navLinks = [];

      switch (navType) {
        case 'item':
          return (
            <NavItem key={navId.replace(/\s+/g, '')} className={location.pathname.includes(itemTo) ? 'is-current' : ''}>
              <RouterLink to={itemTo} navTab onClick={onDropdownOptionClick}>{navId}</RouterLink>
            </NavItem>
          );
        case 'dropdown':
          navLinks = dpLinks.map((dpLink) => {
            const { linkTitle, modal: modalImport, to } = dpLink;
            if (modalImport) {
              return (
                <a key={linkTitle} className="dropdown-item" onClick={() => this.handleToggleModal(modalImport)}>
                  {linkTitle}
                </a>
              );
            }

            if (location.pathname.includes(to)) {
              isCurrentDropdown = true;
            }

            return (
              <RouterLink key={linkTitle} to={to} className="dropdown-item" onClick={onDropdownOptionClick}>
                {linkTitle}
              </RouterLink>
            );
          });

          return (
            <Dropdown
              className={isCurrentDropdown ? 'is-current' : ''}
              key={navId.replace(/\s+/g, '')}
              nav
              isOpen={isDropdownOpen}
              toggle={() => undefined}
            >
              <DropdownToggle nav onClick={() => this.handleTitleClick(dpLinks[0].to, navId)}>
                {navId}
              </DropdownToggle>
              <DropdownMenu className="nav-dropdown-menu">
                {navLinks}
              </DropdownMenu>
            </Dropdown>
          );
        default:
          return null;
      }
    });

    return [
      mainNav,
      this.state.showModal ? this.state.modal : null,
    ];
  }
}

export default withRouter(MainNavContent);
