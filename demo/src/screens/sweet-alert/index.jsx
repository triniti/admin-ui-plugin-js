import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Icon, Input, InputGroup, InputGroupAddon, InputGroupText, Screen, Swal } from '../../../../src/components';

class UiSweetAlert extends React.Component {

  render() {
    const swal = require('sweetalert2')

    function sweetAlert1(e) {
      e.preventDefault();
      swal('Hello world!')
    }

    function sweetAlert2(e) {
      e.preventDefault();
      swal({
        title: 'Error!',
        text: 'Do you want to continue',
        type: 'error',
        confirmButtonText: 'Cool'
      })
    }

    function sweetAlert3(e) {
      e.preventDefault();
      swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
        confirmButtonClass: 'btn btn-danger',
        cancelButtonClass: 'btn btn-secondary',
      }).then((result) => {
        if (result.value) {
          swal(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
    }

    function sweetAlert4(e) {
      e.preventDefault();
      swal({
        title: 'Most Basic',
        text: 'Here are the two standard button styles',
        type: 'success',
        showCancelButton: true,
        confirmButtonText: 'Confirm Button',
        cancelButtonText: 'Cancel Button'
      })
    }

    function sweetAlert5(e) {
      e.preventDefault();
      swal({
        title: 'Submit email to run ajax request',
        input: 'email',
        inputClass: 'form-control',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        confirmButtonClass: 'btn btn-danger',
        cancelButtonClass: 'btn btn-secondary',
        preConfirm: (email) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              if (email === 'taken@example.com') {
                swal.showValidationError(
                  'This email is already taken.'
                )
              }
              resolve()
            }, 2000)
          })
        },
        allowOutsideClick: () => !swal.isLoading()
      }).then((result) => {
        if (result.value) {
          swal({
            type: 'success',
            title: 'Ajax request finished!',
            html: 'Submitted email: ' + result.value
          })
        }
      })
    }

    function sweetAlert6(e) {
      e.preventDefault();
      swal({
        backdrop: `rgba(0,0,0,0)`,
        customClass: 'modal-loading',
        showConfirmButton: false,
        target: '.screen-main',
      });
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
              <Button outline onClick={sweetAlert1}>
                Alert 1 - Base
              </Button>
              <Button outline onClick={sweetAlert2}>
                Alert 2 - Error
              </Button>
              <Button outline onClick={sweetAlert3}>
                Alert 3 - Triniti Buttons
              </Button>
              <Button outline onClick={sweetAlert4}>
                Alert 4 - Standard Buttons
              </Button>
              <Button outline onClick={sweetAlert5}>
                Alert 5 - Form Field
              </Button>
              <Button outline onClick={sweetAlert6}>
                Alert 6 - Loading
              </Button>
            </CardBody>
          </Card>,
        ]}
      />
    );
  }
}

export default UiSweetAlert;