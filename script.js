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
