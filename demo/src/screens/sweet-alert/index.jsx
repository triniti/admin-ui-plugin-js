import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Icon, Input, InputGroup, InputGroupAddon, InputGroupText, Screen, Swal } from '../../../../src/components';

class UiSweetAlert extends React.Component {

  render() {
    const swal = require('sweetalert2')

    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
      swal({
        title: 'Error!',
        text: 'Do you want to continue',
        type: 'error',
        confirmButtonText: 'Cool'
      })
    }

    return (
      <Screen
        sidenav={<Sidenav activeScreen="sweet-alert" />}
        sidenavHeader
        header="Sweet Alert 2"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="sweetalert1">
            <CardHeader>Sweet Alert 2</CardHeader>
            <CardBody indent>
              <Button outline onClick={handleClick}>
                Sweet Alert Example
              </Button>
            </CardBody>
          </Card>,
        ]}
      />
    );
  }
}

export default UiSweetAlert;