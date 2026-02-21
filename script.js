document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("toptop"); 

    // Проверка на случай, если id в HTML написан иначе
    if (!btn) return;

    window.addEventListener("scroll", function() { 
        if (window.scrollY > 300) { 
            btn.style.display = "block"; 
        } else { 
            // 2. ОБЯЗАТЕЛЬНО добавляем скрытие, чтобы кнопка исчезала
            btn.style.display = "none"; 
        } 
    }); 

    btn.addEventListener("click", function() { 
        window.scrollTo({ 
            top: 0, 
            behavior: "smooth" // Плавная прокрутка
        }); 
    });
});

document.addEventListener("DOMContentLoaded", function () {

   
    const bot = document.getElementById("BOT");

    window.addEventListener("scroll", function () {

        // КНОПКА появляется после 300px
        if (window.scrollY > 300) {
            bot.classList.add("show");
        } else {
            bot.classList.remove("show");
        }

      
    });

});

function checkScroll() {
    const elements = document.querySelectorAll("box2");

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Если элемент виден на экране — показываем
        if (rect.top < windowHeight - 100 && rect.bottom > 0) {
            // Добавляем пульсацию только если ещё не было visible
            if (!el.classList.contains("visible")) {
                el.classList.add("visible");
            }
        } else {
            // Элемент ушёл за экран — скрываем
            el.classList.remove("visible");
        }
    });
}

// События: при загрузке страницы и при скролле
window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);