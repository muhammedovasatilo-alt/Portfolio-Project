<<<<<<< HEAD
const raqam = document.getElementById("namber-12"); //raqam tugmasi
const minus = document.getElementById("minus"); //minus tugmasi
const plus = document.getElementById("plus"); //plus tugmasi
const qaytarish = document.getElementById("Qaytarish"); // 12 raqamiga qaytarish tugmasi

if (raqam && minus && plus && qaytarish) {
  const boshlangich = 0; // 12 raqamini 0 ga o'zgartirdim
  let son = boshlangich;

  function yangila() {
    raqam.textContent = son;
    minus.disabled = son === 0;
    qaytarish.disabled = son === 0; // 0 dan pasiga ishlamaydi
    plus.disabled = son === 12; // 12dan yuqorisiga ishlamaydi
  }

  plus.addEventListener("click", function () {
    if (son < 12) {
      son++; //sonni ko'paytirr
      yangila();
    }
  });

  minus.addEventListener("click", function () {
    if (son > 0) {
      son--; //sonni kamaytir
      yangila();
    }
  });

  qaytarish.addEventListener("click", function () {
    son = boshlangich; //sonni 12ga qaytar
    yangila();
  });
}
=======
const raqam = document.getElementById("namber-12"); //raqam tugmasi
const minus = document.getElementById("minus"); //minus tugmasi
const plus = document.getElementById("plus"); //plus tugmasi
const qaytarish = document.getElementById("Qaytarish"); // 12 raqamiga qaytarish tugmasi

if (raqam && minus && plus && qaytarish) {
  const boshlangich = 12;
  let son = boshlangich;
  let taymer;

  function yangila() {
    raqam.textContent = son;
  }

  plus.addEventListener("click", function () {
    if (son < 12) {
      son++; //sonni ko'paytirr
      yangila();
    }
  });

  minus.addEventListener("click", function () {
    if (son > 0) {
      son--; //sonni kamaytir
      yangila();
    }
  });

  qaytarish.addEventListener("click", function () {
    son = boshlangich; //sonni 12ga qaytar
    yangila();
  });
}
>>>>>>> 34d019bea1fa2579b90c720bea666067dc743ae4
