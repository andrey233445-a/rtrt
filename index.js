// ===================== УЛУЧШЕННЫЙ JS =====================

// ===== МОБИЛЬНАЯ ШАПКА =====
function initMobileHeader() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    const mobileHeader = document.getElementById('mobileHeader');
    const mainHeader = document.getElementById('mainHeader');
    const topBanner = document.getElementById('topBanner');

    // Проверяем, существуют ли элементы
    if (!mobileMenuBtn || !mobileMenu) {
        console.warn('Элементы мобильного меню не найдены');
        return;
    }

    // Открытие мобильного меню
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('show');
        mobileMenuOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    // Закрытие мобильного меню
    function closeMobileMenu() {
        mobileMenu.classList.remove('show');
        mobileMenuOverlay.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }

    // Закрытие меню при клике на ссылку
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const offset = window.innerWidth <= 768 ? 80 : 100;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
            closeMobileMenu();
        });
    });

    // Скрытие шапки при скролле (только для мобильных)
    let lastScrollTop = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        if (window.innerWidth > 768) return; // Только для мобильных
        
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            // Скролл вниз - скрываем
            mobileHeader.style.transform = 'translateY(-100%)';
        } else {
            // Скролл вверх - показываем
            mobileHeader.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Переключение между мобильной и десктопной шапкой
    function checkViewport() {
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Мобильный вид
            if (mainHeader) mainHeader.style.display = 'none';
            if (topBanner) topBanner.style.display = 'none';
            if (mobileHeader) mobileHeader.style.display = 'flex';
        } else {
            // Десктопный вид
            if (mainHeader) mainHeader.style.display = 'flex';
            if (topBanner) topBanner.style.display = 'flex';
            if (mobileHeader) mobileHeader.style.display = 'none';
            closeMobileMenu();
        }
    }

    // Дебаунс ресайза для оптимизации
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(checkViewport, 150);
    });
    
    // Инициализация
    checkViewport();
}

// ===== ДИНАМИЧЕСКИЕ СТИЛИ ДЛЯ МОБИЛЬНОЙ АДАПТИВНОСТИ =====
function addMobileStyles() {
    const style = document.createElement('style');
    style.id = 'mobile-styles';
    style.textContent = `
        /* Мобильная шапка */
        .mobile-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 60px;
            background-color: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            display: none;
            align-items: center;
            justify-content: space-between;
            padding: 0 16px;
            z-index: 9999;
            box-shadow: 0 2px 15px rgba(0,0,0,0.1);
            border-bottom: 1px solid #e9ecef;
            transition: transform 0.3s ease;
        }

        .mobile-logo {
            font-size: 20px;
            font-weight: 700;
            color: #333;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .mobile-logo-img {
            width: 32px;
            height: 32px;
            object-fit: contain;
        }

        .mobile-menu-btn {
            background: none;
            border: none;
            font-size: 24px;
            color: #333;
            cursor: pointer;
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            transition: all 0.3s;
        }

        .mobile-menu-btn:hover {
            background-color: #f8f9fa;
        }

        /* Мобильное меню */
        .mobile-menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            z-index: 10000;
            display: none;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .mobile-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 85%;
            max-width: 320px;
            height: 100%;
            background: white;
            z-index: 10001;
            transition: right 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            overflow-y: auto;
            padding: 80px 24px 40px;
            box-shadow: -5px 0 25px rgba(0,0,0,0.15);
        }

        .mobile-menu.show {
            right: 0;
        }

        .mobile-menu-overlay.show {
            display: block;
            opacity: 1;
        }

        .mobile-menu-close {
            position: absolute;
            top: 20px;
            right: 20px;
            background: none;
            border: none;
            font-size: 24px;
            color: #333;
            cursor: pointer;
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s;
        }

        .mobile-menu-close:hover {
            background-color: #f8f9fa;
        }

        .mobile-nav {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 30px;
        }

        .mobile-nav a {
            display: flex;
            align-items: center;
            padding: 16px 20px;
            color: #333;
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
            border-radius: 12px;
            transition: all 0.3s;
        }

        .mobile-nav a:hover,
        .mobile-nav a.active {
            background-color: #e3f2fd;
            color: #007bff;
        }

        .mobile-nav i {
            width: 24px;
            margin-right: 12px;
            font-size: 18px;
        }

        .mobile-actions {
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding-top: 20px;
            border-top: 1px solid #eee;
        }

        .mobile-phone {
            text-align: center;
            padding: 16px;
            background: linear-gradient(135deg, #007bff, #0056b3);
            color: white;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 600;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-bottom: 10px;
        }

        .mobile-phone i {
            font-size: 20px;
        }

        .mobile-buttons {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .mobile-btn {
            padding: 16px;
            border-radius: 12px;
            border: none;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            text-align: center;
            transition: all 0.3s;
        }

        .mobile-btn-calc {
            background: linear-gradient(135deg, #007bff, #0056b3);
            color: white;
            box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
        }

        .mobile-btn-calc:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
        }

        .mobile-btn-call {
            background-color: white;
            color: #007bff;
            border: 2px solid #007bff;
        }

        .mobile-btn-call:hover {
            background-color: #007bff;
            color: white;
        }

        /* Адаптация верхнего баннера */
        @media (max-width: 768px) {
            .top-banner {
                display: none !important;
            }
            
            .mobile-header {
                display: flex !important;
            }
            
            /* Адаптируем основную шапку */
            .main-header {
                display: none !important;
            }
            
            /* Корректируем отступы для героя */
            .hero-section {
                margin-top: 60px;
                border-radius: 0;
                height: calc(100vh - 60px);
                min-height: 500px;
            }
            
            .hero-title {
                font-size: 32px;
                line-height: 1.3;
                padding: 0 10px;
            }
            
            .hero-subtitle {
                font-size: 18px;
                padding: 0 15px;
            }
            
            .hero-buttons {
                flex-direction: column;
                width: 100%;
                max-width: 280px;
                margin: 0 auto;
            }
            
            .hero-buttons .btn {
                width: 100%;
                justify-content: center;
                padding: 16px;
            }
            
            /* Отступ для якорных ссылок */
            html {
                scroll-padding-top: 70px;
            }
            
            /* Улучшения для touch-устройств */
            button,
            a.btn,
            .content-block,
            .portfolio-item {
                min-height: 48px;
                min-width: 48px;
            }
            
            .form-control,
            select,
            input,
            textarea {
                font-size: 16px !important;
                padding: 15px;
            }
        }

        /* Адаптация для очень маленьких экранов */
        @media (max-width: 480px) {
            .mobile-header {
                height: 56px;
                padding: 0 12px;
            }
            
            .mobile-logo {
                font-size: 18px;
            }
            
            .mobile-logo-img {
                width: 28px;
                height: 28px;
            }
            
            .mobile-menu-btn {
                width: 40px;
                height: 40px;
                font-size: 22px;
            }
            
            .hero-title {
                font-size: 28px;
            }
            
            .hero-subtitle {
                font-size: 16px;
            }
        }

        /* Ландшафтная ориентация */
        @media (max-width: 768px) and (orientation: landscape) {
            .hero-section {
                height: auto;
                min-height: 100vh;
                padding: 80px 0 40px;
            }
            
            .mobile-menu {
                padding: 60px 24px 20px;
            }
            
            .mobile-nav {
                max-height: 60vh;
                overflow-y: auto;
            }
        }

        @media (min-width: 769px) {
            .mobile-header,
            .mobile-menu-overlay,
            .mobile-menu {
                display: none !important;
            }
            
            .main-header {
                display: flex !important;
            }
            
            .top-banner {
                display: flex !important;
            }
        }
    `;
    
    // Удаляем старые стили если есть
    const oldStyles = document.getElementById('mobile-styles');
    if (oldStyles) {
        oldStyles.remove();
    }
    
    document.head.appendChild(style);
}

// ===== КАЛЬКУЛЯТОР =====
function openCalculator() {
    const modal = document.getElementById('calculatorModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeCalculator() {
    const modal = document.getElementById('calculatorModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ===== ФОРМА ЗВОНКА =====
function openCallForm() {
    const modal = document.getElementById('callModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeCallForm() {
    const modal = document.getElementById('callModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Закрытие модалок по клику вне
function initModalClose() {
    window.addEventListener('click', function(event) {
        const callModal = document.getElementById('callModal');
        const calculatorModal = document.getElementById('calculatorModal');
        
        if (event.target === callModal) closeCallForm();
        if (event.target === calculatorModal) closeCalculator();
    });
}

// ===== ОБРАБОТКА ФОРМ =====
function initForms() {
    // Форма звонка
    const callForm = document.getElementById('callForm');
    if (callForm) {
        callForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            if (!submitBtn) return;
            
            const originalHTML = submitBtn.innerHTML;
            const originalBg = submitBtn.style.background;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
            submitBtn.disabled = true;
            
            // Имитация отправки
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Отправлено!';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                
                // Сброс формы через 2 секунды
                setTimeout(() => {
                    this.reset();
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.disabled = false;
                    submitBtn.style.background = originalBg;
                    closeCallForm();
                }, 2000);
            }, 1500);
        });
    }
}

// ===== КАЛЬКУЛЯТОР РАСЧЕТА =====
function updateService() {
    const service = document.getElementById('serviceType')?.value;
    const areaSection = document.getElementById('areaSection');
    const materialSection = document.getElementById('materialSection');
    const additionalServices = document.getElementById('additionalServices');
    const materialOptions = document.getElementById('materialOptions');
    const serviceList = document.getElementById('serviceList');

    if (!service || !areaSection) return;

    areaSection.style.display = 'none';
    materialSection.style.display = 'none';
    additionalServices.style.display = 'none';

    if (materialOptions) materialOptions.innerHTML = '';
    if (serviceList) serviceList.innerHTML = '';

    switch(service) {
        case 'repair-apartment':
            areaSection.style.display = 'block';
            if (serviceList) {
                serviceList.innerHTML = `
                    <div class="checkbox-item">
                        <input type="checkbox" id="extra-sanuzel" name="sanuzel">
                        <label for="extra-sanuzel">Санузел</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="extra-electrical" name="electrical">
                        <label for="extra-electrical">Электромонтажные работы</label>
                    </div>
                `;
            }
            if (additionalServices) additionalServices.style.display = 'block';
            break;

        case 'euro-repair':
            areaSection.style.display = 'block';
            if (serviceList) {
                serviceList.innerHTML = `
                    <div class="checkbox-item">
                        <input type="checkbox" id="extra-sanuzel" name="sanuzel">
                        <label for="extra-sanuzel">Санузел</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="extra-electrical" name="electrical">
                        <label for="extra-electrical">Электромонтажные работы</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="extra-replanning" name="replanning">
                        <label for="extra-replanning">Перепланировка</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="extra-heating" name="heating">
                        <label for="extra-heating">Отопление</label>
                    </div>
                `;
            }
            if (additionalServices) additionalServices.style.display = 'block';
            break;

        case 'office-repair':
            areaSection.style.display = 'block';
            if (serviceList) {
                serviceList.innerHTML = `
                    <div class="checkbox-item">
                        <input type="checkbox" id="extra-sanuzel" name="sanuzel">
                        <label for="extra-sanuzel">Санузел</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="extra-electrical" name="electrical">
                        <label for="extra-electrical">Электромонтажные работы</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="extra-replanning" name="replanning">
                        <label for="extra-replanning">Перепланировка</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="extra-heating" name="heating">
                        <label for="extra-heating">Отопление</label>
                    </div>
                `;
            }
            if (additionalServices) additionalServices.style.display = 'block';
            break;
    }

    calculatePrice();
}

function calculatePrice() {
    const area = parseFloat(document.getElementById('area')?.value) || 0;
    const service = document.getElementById('serviceType')?.value;
    const resultPrice = document.getElementById('resultPrice');
    
    if (!resultPrice) return;
    
    let total = 0;

    if (area > 0 && service) {
        if (service === 'repair-apartment') {
            total = area * 2.5 * 2000 - 0.07 * area * 2000;
            if (document.getElementById('extra-sanuzel')?.checked) total += 20000 * area * 0.07;
            if (document.getElementById('extra-electrical')?.checked) total += 2000 * area * 0.1;
        }
        else if (service === 'euro-repair') {
            total = area * 2.5 * 5000 - 0.07 * area * 5000;
            if (document.getElementById('extra-sanuzel')?.checked) total += 23000 * area * 0.07;
            if (document.getElementById('extra-electrical')?.checked) total += 2000 * area * 0.4;
            if (document.getElementById('extra-replanning')?.checked) total += 4000 * area * 0.4;
            if (document.getElementById('extra-heating')?.checked) total += 2000 * area * 0.4;
        }
        else if (service === 'office-repair') {
            total = area * 2.5 * 6500 - 0.07 * area * 6500;
            if (document.getElementById('extra-sanuzel')?.checked) total += 28000 * area * 0.07;
            if (document.getElementById('extra-electrical')?.checked) total += 2200 * area * 1;
            if (document.getElementById('extra-replanning')?.checked) total += 4000 * area * 0.5;
            if (document.getElementById('extra-heating')?.checked) total += 2500 * area * 0.5;
        }
    }

    // Анимация цены
    const oldPrice = parseFloat(resultPrice.getAttribute('data-current') || 0);
    const step = (total - oldPrice) / 20;
    let current = oldPrice;

    if (Math.abs(step) > 0.1) {
        const anim = setInterval(() => {
            current += step;
            if ((step > 0 && current >= total) || (step < 0 && current <= total)) {
                current = total;
                clearInterval(anim);
            }
            resultPrice.textContent = Math.round(current).toLocaleString('ru-RU') + ' ₽';
        }, 20);
    } else {
        resultPrice.textContent = total.toLocaleString('ru-RU') + ' ₽';
    }

    resultPrice.setAttribute('data-current', total);
}

// ===== АНИМАЦИИ ПРИ СКРОЛЛЕ =====
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.content-block, .stat-item, .portfolio-item, .process-step').forEach(block => {
        if (!block.classList.contains('animate-in')) {
            observer.observe(block);
        }
    });
}

// ===== ПЛАВНЫЕ ЯКОРНЫЕ ССЫЛКИ =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                const offset = window.innerWidth <= 768 ? 80 : 100;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== ОСНОВНАЯ ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Инициализация сайта...');
    
    // 1. Добавляем динамические стили
    addMobileStyles();
    
    // 2. Инициализируем мобильную шапку
    initMobileHeader();
    
    // 3. Инициализируем модальные окна
    initModalClose();
    
    // 4. Инициализируем формы
    initForms();
    
    // 5. Инициализируем плавный скролл
    initSmoothScroll();
    
    // 6. Инициализируем калькулятор
    const serviceType = document.getElementById('serviceType');
    const areaInput = document.getElementById('area');
    
    if (serviceType) {
        serviceType.addEventListener('change', updateService);
    }
    
    if (areaInput) {
        areaInput.addEventListener('input', calculatePrice);
    }
    
    // Инициализация опций материала
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('option-item')) {
            document.querySelectorAll('.option-item').forEach(i => i.classList.remove('selected'));
            e.target.classList.add('selected');
            calculatePrice();
        }
        
        // Обновление цены при изменении чекбоксов
        if (e.target.type === 'checkbox' && e.target.closest('#serviceList')) {
            calculatePrice();
        }
    });
    
    // 7. Анимации при скролле
    animateOnScroll();
    
    // 8. Инициализация карусели клиентов (если есть)
    initClientsCarousel();
    
    // 9. Показываем основную шапку
    setTimeout(() => {
        const mainHeader = document.getElementById('mainHeader');
        if (mainHeader) {
            mainHeader.classList.add('visible');
        }
    }, 100);
    
    console.log('✅ Инициализация завершена');
});

// ===== КАРУСЕЛЬ КЛИЕНТОВ =====
function initClientsCarousel() {
    const slides = document.getElementById('clientSlides');
    const prevBtn = document.getElementById('clientPrevBtn');
    const nextBtn = document.getElementById('clientNextBtn');
    const indicators = document.querySelectorAll('.partner-indicator');

    if (!slides || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    const totalSlides = 8;

    function updateCarousel() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            currentIndex = parseInt(indicator.dataset.index, 10);
            updateCarousel();
        });
    });

    // Автоматическая смена слайдов
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }, 5000);
}

// ===== ОБРАБОТЧИК ОШИБОК =====
window.addEventListener('error', function(e) {
    console.error('Ошибка JavaScript:', e.error);
    console.error('В файле:', e.filename);
    console.error('Строка:', e.lineno);
});

// Экспортируем функции для глобального использования
window.openCalculator = openCalculator;
window.closeCalculator = closeCalculator;
window.openCallForm = openCallForm;
window.closeCallForm = closeCallForm;
window.updateService = updateService;
window.calculatePrice = calculatePrice;