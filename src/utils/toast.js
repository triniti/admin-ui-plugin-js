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
      showConfirmButton: false,
      onOpen: () => {
        swal.showLoading();
      },
      target: '.screen-main',
      title,
      toast: true,
    });
  },

  close: swal.close,
  hide: swal.close,
  dismiss: swal.close,
};
