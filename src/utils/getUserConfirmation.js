import swal from 'sweetalert2';

export default (message = '', callback) => {
  const config = {
    title: 'Are you sure?',
    text: message,
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, leave!',
    confirmButtonClass: 'btn btn-danger',
    cancelButtonClass: 'btn btn-secondary',
  };

  swal(config).then((result) => {
    if (result.value) {
      callback(true);
    } else {
      callback(false);
    }
  });
};
