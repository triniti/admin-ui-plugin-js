import swal from 'sweetalert2';
import actions from '../actions';

export default dispatch => (message = '', callback) => {
  const config = {
    allowOutsideClick: false,
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
      dispatch(actions.cancelChangeRoute());
      callback(false);
    }
  });
};
