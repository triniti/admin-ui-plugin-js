import React from 'react';
import swal from 'sweetalert2';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Screen } from '../../../../src/components';

function sweetAlert1(e) {
  e.preventDefault();
  swal('Hello world!');
}

function sweetAlert2(e) {
  e.preventDefault();
  swal({
    title: 'Error!',
    text: 'Do you want to continue',
    type: 'error',
    confirmButtonText: 'Cool',
  });
}

function sweetAlert3(e) {
  e.preventDefault();
  swal({
    title: 'Most Basic',
    text: 'Here are the two standard button styles',
    type: 'success',
    showCancelButton: true,
    confirmButtonText: 'Confirm Button',
    cancelButtonText: 'Cancel Button',
  });
}

function sweetAlert4(e) {
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
        'success',
      );
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
    } else if (result.dismiss === swal.DismissReason.cancel) {
      swal(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error',
      );
    }
  });
}

function sweetAlert5(e) {
  e.preventDefault();
  swal({
    title: 'Ajax Request',
    text: 'Enter Email Address',
    input: 'email',
    inputClass: 'form-control',
    showCancelButton: true,
    confirmButtonText: 'Submit',
    showLoaderOnConfirm: true,
    confirmButtonClass: 'btn btn-danger',
    cancelButtonClass: 'btn btn-secondary',
    preConfirm: email => new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'taken@example.com') {
          swal.showValidationError('This email is already taken.');
        }
        resolve();
      }, 2000);
    }),
    allowOutsideClick: () => !swal.isLoading(),
  }).then((result) => {
    if (result.value) {
      swal({
        type: 'success',
        title: 'Ajax request finished!',
        html: `Submitted email: ${result.value}`,
      });
    }
  });
}

function sweetAlert6(e) {
  e.preventDefault();
  swal({
    customClass: 'swal-spinner',
    onOpen: () => {
      swal.showLoading();
    },
    showConfirmButton: false,
    target: '.screen-main',
    title: 'loading',
  });
}

function sweetAlert7(e) {
  e.preventDefault();
  swal({
    html: '<h5>Dismissable Horizontal Alert Ellipsis</h5><p>Some alert that needs your attention. Must click here to close.</p> ',
    allowOutsideClick: false,
    customClass: 'swal2-horizontal',
    showCancelButton: true,
    confirmButtonText: 'Submit',
    confirmButtonClass: 'btn btn-sm btn-link-bg text-body',
    cancelButtonClass: 'btn btn-sm btn-link-bg text-body',
    position: 'top-right',
  });
}

const UiSweetAlert = () => (
  <Screen
    sidenav={<Sidenav activeScreen="sweet-alert" />}
    sidenavHeader
    header="Sweet Alert"
    // tabs={[
    //   { to: '/welcome', text: 'Tab1' },
    //   { to: '#/test2', text: 'Tab2' },
    // ]}
    primaryActions={<PrimaryActions />}
    body={[
      <Card key="sweetalert1">
        <CardHeader>SweetAlert Examples</CardHeader>
        <CardBody indent>
          <Button outline onClick={sweetAlert1}>
            Alert 1 - Basic
          </Button>
          <Button outline onClick={sweetAlert2}>
            Alert 2 - Error
          </Button>
          <Button outline onClick={sweetAlert3}>
            Alert 3 - Standard Buttons
          </Button>
          <Button outline onClick={sweetAlert4}>
            Alert 4 - Triniti Buttons
          </Button>
          <Button outline onClick={sweetAlert5}>
            Alert 5 - Form Field
          </Button>
          <Button outline onClick={sweetAlert6}>
            Alert 6 - Loading
          </Button>
          <Button outline onClick={sweetAlert7}>
            Alert 7 - Horizontal
          </Button>
        </CardBody>
      </Card>,

      <Card key="props">
        <CardHeader>SweetAlert Properties</CardHeader>
        <CardBody>
          <p>This component relies on the <a href="https://sweetalert2.github.io/" target="_blank"><strong>Sweet Alert 2</strong></a> component.</p>
        </CardBody>
      </Card>,
    ]}
  />
);

export default UiSweetAlert;
