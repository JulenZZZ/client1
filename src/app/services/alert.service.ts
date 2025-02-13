import Swal from 'sweetalert2';

export function showAlert(title: string, text: string, icon: 'success' | 'error' | 'warning') {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: 'OK',
    customClass: {
      popup: 'bg-white rounded-lg shadow-lg p-6',
      title: 'text-2xl font-bold',
      confirmButton: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
    },
  });
}
