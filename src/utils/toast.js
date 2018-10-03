import swal from 'sweetalert2';

export default {
  /**
   * create a toast on the screen
   * @param {string} title
   */
  show: (title = '') => {
    swal({
      allowOutsideClick: false,
      customClass: 'swal-spinner',
      onOpen: () => {
        swal.showLoading();
      },
      showConfirmButton: false,
      target: '.screen-main',
      title,
    });
  },

  close: swal.close,
  hide: swal.close,
  dismiss: swal.close,
};
