import Swal from 'sweetalert2';

export default {
  /**
   * create a toast on the screen
   * @param {string} title
   */
  show: (title = '') => {
    Swal.fire({
      allowOutsideClick: false,
      customClass: 'swal-spinner',
      onOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
      target: '.screen-main',
      title,
    });
  },

  close: Swal.close,
  hide: Swal.close,
  dismiss: Swal.close,
};
