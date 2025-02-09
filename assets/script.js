document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#registerForm");
    const nameInput = document.querySelector("#name");
    const surnameInput = document.querySelector("#surname");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#phone");

    // Ініціалізація intl-tel-input
    const iti = window.intlTelInput(phoneInput, {
        initialCountry: "ie",
        separateDialCode: true,
        placeholderNumberType: "MOBILE",
    });

    phoneInput.value = ""; // Робимо поле вводу порожнім після ініціалізації

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Запобігаємо відправці форми, якщо є помилки

        let isValid = true;

        // Валідація імені (мінімум 2 символи, тільки літери)
        if (!/^[A-Za-zÀ-ÿ\s]{2,}$/.test(nameInput.value.trim())) {
            showError(nameInput, "Inserisci un nome valido");
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Валідація прізвища (мінімум 2 символи, тільки літери)
        if (!/^[A-Za-zÀ-ÿ\s]{2,}$/.test(surnameInput.value.trim())) {
            showError(surnameInput, "Inserisci un cognome valido");
            isValid = false;
        } else {
            clearError(surnameInput);
        }

        // Валідація email (перевіряємо формат)
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
            showError(emailInput, "Inserisci un'email valida");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Валідація телефону через intl-tel-input
        if (!iti.isValidNumber()) {
            showError(phoneInput, "Inserisci un numero di telefono valido");
            isValid = false;
        } else {
            clearError(phoneInput);
        }

        // Якщо всі перевірки пройдені — відправляємо форму
        if (isValid) {
            form.submit();
        }
    });

    // Функція для показу помилки
    function showError(input, message) {
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains("error-message")) {
            error = document.createElement("div");
            error.classList.add("error-message");
            input.parentNode.appendChild(error);
        }
        error.textContent = message;
        input.classList.add("error");
    }

    // Функція для очищення помилки
    function clearError(input) {
        let error = input.nextElementSibling;
        if (error && error.classList.contains("error-message")) {
            error.remove();
        }
        input.classList.remove("error");
    }
});



  $(document).ready(function () {
    // Ініціалізація першого слайдера (місяці)
    $("#monthsRange").ionRangeSlider({
      skin: "round",
      type: "single",
      min: 1,
      max: 12,
      from: 6,
      step: 1,
      grid: true,
      postfix: " months",
      onChange: updateProfit
    });
  
    // Ініціалізація другого слайдера (сума)
    $("#amountRange").ionRangeSlider({
      skin: "round",
      type: "single",
      min: 300,
      max: 15000,
      from: 2000,
      step: 100,
      grid: true,
      prefix: "€ ",
      onChange: updateProfit
    });
  
    // Отримуємо посилання на об'єкти слайдерів
    let monthsSlider = $("#monthsRange").data("ionRangeSlider");
    let amountSlider = $("#amountRange").data("ionRangeSlider");
  
    function updateProfit(data) {
      let months = monthsSlider.result.from;
      let amount = amountSlider.result.from;
  
      let profit = Math.floor(amount * months * 0.7); // Формула розрахунку доходу
  
      $("#profitValue").text(`€ ${profit}`);
    }
  
    updateProfit();
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    new Glide(".glide", {
        type: "carousel",
        perView: 1,  // Кількість відгуків одночасно
        autoplay: 3000, // Автоперемикання кожні 3 сек
        hoverpause: true, // Зупинка при наведенні
    }).mount();
});
  