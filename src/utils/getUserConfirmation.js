import Swal from 'sweetalert2';

export default (message = '', callback) => {
  const config = {
    title: 'Are you sure?',
    text: message,
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, leave!',
    confirmButtonClass: 'btn btn-danger',
    cancelButtonClass: 'btn btn-secondary',
    reverseButtons: true,
  };

  Swal.fire(config).then((result) => {
    if (result.value) {
      callback(true);
    } else {
      callback(false);
    }
  });
};
