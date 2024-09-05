class UTILS {
  /**
   * Memvalidasi apakah alamat email yang diberikan memiliki format yang benar.
   *
   * @param {string} email - Alamat email yang akan divalidasi.
   * @returns {boolean} `true` jika email valid, `false` jika tidak.
   */

  static validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  /**
   * Fungsi untuk membuat tautan mailto dan mengarahkannya ke aplikasi email klien pengguna.
   *
   * @param {Object} params - Objek yang berisi informasi email.
   * @param {string} params.firstname - Nama depan pengirim.
   * @param {string} params.lastname - Nama belakang pengirim.
   * @param {string} params.email - Alamat email pengirim.
   * @param {string} params.subject - Subjek email.
   * @param {string} params.message - Pesan yang akan dikirim.
   */
  static sendEmail({ firstname, lastname, email, subject, message }) {
    const body = `Nama depan: ${firstname}\nNama terakhir: ${lastname}\nEmail: ${email}\nSubject: ${subject}\n\nMessage: ${message}`;
    const mailtoLink = `mailto:nasrudin.fhm@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }
}

export default UTILS;
