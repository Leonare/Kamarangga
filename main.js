$(document).ready(function () {
  if (Notification.permission !== "granted") Notification.requestPermission();
});

function notifikasi() {
  if (!Notification) {
    alert("Browsermu tidak mendukung Web Notification.");
    return;
  }
  if (Notification.permission !== "granted") Notification.requestPermission();
  else {
    var notifikasi = new Notification("Quotes of the day", {
      icon: "freepik/KA-logo.jpg",
      body: "Gagal itu urusan nanti. Aku tau kamu hebat :) ",
    });
    notifikasi.onclick = function () {
      window.open("http://goo.gl/dIf4s1");
    };
    setTimeout(function () {
      notifikasi.close();
    }, 5000);
  }
}
