// ===================== ОСНОВНОЙ JS ФАЙЛ =====================

// ===== МОБИЛЬНАЯ АДАПТАЦИЯ =====
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
            background: white;
            display: none;
            align-items: center;
            justify-content: space-between;
            padding: 0 16px;
            z-index: 9999;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            border-bottom: 1px solid #eee;
        }

        .mobile-logo {
            font-size: 18px;
            font-weight: 700;
            color: #333;
            display: flex;
            align-items: center;
            gap: 8px;
            white-space: nowrap;
        }

        .mobile-logo-img {
            width: 30px;
            height: 30px;
            object-fit: contain;
        }

        .mobile-menu-btn {
            background: none;
            border: none;
            font-size: 22px;
            color: #333;
            cursor: pointer;
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Мобильное меню */
        .mobile-menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 10000;
            display: none;
        }

        .mobile-menu-overlay.show {
            display: block;
        }

        .mobile-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100%;
            background: white;
            z-index: 10001;
            transition: right 0.3s;
            overflow-y: auto;
            padding: 70px 20px 30px;
        }

        .mobile-menu.show {
            right: 0;
        }

        .mobile-menu-close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            border: none;
            font-size: 22px;
            color: #333;
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .mobile-nav {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-bottom: 25px;
        }

        .mobile-nav a {
            display: flex;
            align-items: center;
            padding: 12px 16px;
            color: #333;
            text-decoration: none;
            font-size: 15px;
            border-radius: 8px;
        }

        .mobile-nav a:hover {
            background: #f5f5f5;
        }

        .mobile-nav i {
            width: 20px;
            margin-right: 10px;
            font-size: 16px;
        }

        .mobile-actions {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .mobile-phone {
            display: block;
            padding: 12px;
            background: #007bff;
            color: white;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            text-align: center;
        }

        .mobile-buttons {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .mobile-btn {
            padding: 12px;
            border-radius: 8px;
            border: none;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
        }

        .mobile-btn-calc {
            background: #007bff;
            color: white;
        }

        .mobile-btn-call {
            background: white;
            color: #007bff;
            border: 2px solid #007bff;
        }

        /* АДАПТАЦИЯ ДЛЯ МОБИЛЬНЫХ */
        @media (max-width: 768px) {
            /* Скрываем лишнее */
            .top-banner,
            .main-header {
                display: none !important;
            }
            
            /* Показываем мобильную шапку */
            .mobile-header {
                display: flex !important;
            }
            
            /* Герой секция */
            .hero-section {
                margin-top: 60px !important;
                padding: 30px 15px !important;
                min-height: 500px !important;
                height: auto !important;
            }
            
            .hero-title {
                font-size: 24px !important;
                line-height: 1.3 !important;
                margin-bottom: 15px !important;
                padding: 0 !important;
            }
            
            .hero-subtitle {
                font-size: 15px !important;
                margin-bottom: 25px !important;
                line-height: 1.4 !important;
                padding: 0 !important;
            }
            
            .hero-buttons {
                flex-direction: column !important;
                gap: 10px !important;
                width: 100% !important;
                padding: 0 !important;
            }
            
            .hero-buttons .btn {
                width: 100% !important;
                max-width: 100% !important;
                padding: 12px !important;
                font-size: 14px !important;
                margin: 0 !important;
            }
            
            /* Блоки контента */
            .content-section {
                padding: 40px 15px !important;
            }
            
            .section-title {
                font-size: 22px !important;
                margin-bottom: 25px !important;
                padding: 0 10px !important;
            }
            
            .blocks-container {
                grid-template-columns: 1fr !important;
                gap: 15px !important;
                padding: 0 !important;
            }
            
            .content-block {
                padding: 20px !important;
                margin: 0 !important;
                width: 100% !important;
            }
            
            .block-icon {
                width: 50px !important;
                height: 50px !important;
                font-size: 20px !important;
            }
            
            .block-title {
                font-size: 17px !important;
            }
            
            .block-text {
                font-size: 14px !important;
                line-height: 1.4 !important;
            }
            
            /* Портфолио */
            .portfolio-section {
                padding: 40px 15px !important;
            }
            
            .portfolio-item {
                height: 180px !important;
            }
            
            /* Процесс работы */
            .order-process-section {
                padding: 40px 15px !important;
            }
            
            .process-step {
                padding: 20px !important;
            }
            
            /* Футер */
            .footer-content {
                padding: 30px 15px !important;
            }
            
            .footer-info-grid {
                grid-template-columns: 1fr !important;
                gap: 20px !important;
            }
            
            /* Общие исправления */
            * {
                max-width: 100% !important;
            }
            
            body {
                overflow-x: hidden !important;
                width: 100% !important;
            }
            
            section, div, .container {
                max-width: 100% !important;
                overflow-x: hidden !important;
            }
        }

        /* Десктоп */
        @media (min-width: 769px) {
            .mobile-header,
            .mobile-menu-overlay,
            .mobile-menu {
                display: none !important;
            }
        }
    `;
    
    // Удаляем старые стили если есть
    const oldStyles = document.getElementById('mobile-styles');
    if (oldStyles) {
        oldStyles.remove();
    }
    
    document.head.appendChild(style);
    console.log('Мобильные стили добавлены');
}

// ===== МОБИЛЬНОЕ МЕНЮ =====
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    
    if (!mobileMenuBtn || !mobileMenu) {
        console.log('Элементы мобильного меню не найдены');
        return;
    }
    
    console.log('Инициализация мобильного меню...');
    
    // Открытие меню
    mobileMenuBtn.addEventListener('click', () => {
        console.log('Открытие меню');
        mobileMenu.classList.add('show');
        mobileMenuOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
    
    // Закрытие меню
    function closeMobileMenu() {
        console.log('Закрытие меню');
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
    
    // Закрытие при клике на ссылки
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    console.log('Мобильное меню инициализировано');
}

// ===== КАЛЬКУЛЯТОР =====
function openCalculator() {
    const modal = document.getElementById('calculatorModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        console.log('Калькулятор открыт');
    }
}

function closeCalculator() {
    const modal = document.getElementById('calculatorModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        console.log('Калькулятор закрыт');
    }
}

// ===== ФОРМА ЗВОНКА =====
function openCallForm() {
    const modal = document.getElementById('callModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        console.log('Форма звонка открыта');
    }
}

function closeCallForm() {
    const modal = document.getElementById('callModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        console.log('Форма звонка закрыта');
    }
}

// ===== ЗАКРЫТИЕ МОДАЛОК =====
function initModalClose() {
    window.addEventListener('click', function(event) {
        const callModal = document.getElementById('callModal');
        const calculatorModal = document.getElementById('calculatorModal');
        
        if (event.target === callModal) {
            closeCallForm();
        }
        if (event.target === calculatorModal) {
            closeCalculator();
        }
    });
    
    // Закрытие по ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeCallForm();
            closeCalculator();
        }
    });
}

// ===== ОБНОВЛЕНИЕ КАЛЬКУЛЯТОРА =====
function updateService() {
    const service = document.getElementById('serviceType')?.value;
    const areaSection = document.getElementById('areaSection');
    const materialSection = document.getElementById('materialSection');
    const additionalServices = document.getElementById('additionalServices');
    const materialOptions = document.getElementById('materialOptions');
    const serviceList = document.getElementById('serviceList');

    if (!service || !areaSection) return;

    // Скрываем все секции
    areaSection.style.display = 'none';
    if (materialSection) materialSection.style.display = 'none';
    if (additionalServices) additionalServices.style.display = 'none';
    
    // Очищаем опции
    if (materialOptions) materialOptions.innerHTML = '';
    if (serviceList) serviceList.innerHTML = '';

    // Показываем нужные секции
    if (service === 'repair-apartment' || service === 'euro-repair' || service === 'office-repair') {
        areaSection.style.display = 'block';
        
        if (serviceList && additionalServices) {
            let html = '';
            if (service === 'repair-apartment') {
                html = `
                    <div class="checkbox-item">
                        <input type="checkbox" id="extra-sanuzel" name="sanuzel">
                        <label for="extra-sanuzel">Санузел</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="extra-electrical" name="electrical">
                        <label for="extra-electrical">Электромонтажные работы</label>
                    </div>
                `;
            } else if (service === 'euro-repair') {
                html = `
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
            } else if (service === 'office-repair') {
                html = `
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
            
            serviceList.innerHTML = html;
            additionalServices.style.display = 'block';
        }
    }
    
    calculatePrice();
}

// ===== РАСЧЕТ ЦЕНЫ =====
function calculatePrice() {
    const area = parseFloat(document.getElementById('area')?.value) || 0;
    const service = document.getElementById('serviceType')?.value;
    const resultPrice = document.getElementById('resultPrice');
    
    if (!resultPrice || !service) return;
    
    let total = 0;

    if (area > 0) {
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

    // Анимация обновления цены
    const oldPrice = parseFloat(resultPrice.getAttribute('data-current') || 0);
    const step = (total - oldPrice) / 10;
    let current = oldPrice;

    if (Math.abs(step) > 1) {
        clearInterval(window.priceAnimation);
        window.priceAnimation = setInterval(() => {
            current += step;
            if ((step > 0 && current >= total) || (step < 0 && current <= total)) {
                current = total;
                clearInterval(window.priceAnimation);
            }
            resultPrice.textContent = Math.round(current).toLocaleString('ru-RU') + ' ₽';
        }, 30);
    } else {
        resultPrice.textContent = total.toLocaleString('ru-RU') + ' ₽';
    }

    resultPrice.setAttribute('data-current', total);
}

// ===== ФОРМЫ =====
function initForms() {
    const callForm = document.getElementById('callForm');
    if (callForm) {
        callForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            if (!submitBtn) return;
            
            const originalHTML = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
            submitBtn.disabled = true;
            
            // Имитация отправки
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Отправлено!';
                submitBtn.style.background = '#10b981';
                
                setTimeout(() => {
                    this.reset();
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    closeCallForm();
                }, 2000);
            }, 1500);
        });
    }
}

// ===== ПЛАВНЫЙ СКРОЛЛ =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = window.innerWidth <= 768 ? 70 : 100;
                const position = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: position,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== АНИМАЦИИ =====
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.content-block, .process-step').forEach(el => {
        observer.observe(el);
    });
}

// ===== КАРУСЕЛЬ КЛИЕНТОВ =====
function initClientsCarousel() {
    const slides = document.getElementById('clientSlides');
    const prevBtn = document.getElementById('clientPrevBtn');
    const nextBtn = document.getElementById('clientNextBtn');
    const indicators = document.querySelectorAll('.partner-indicator');

    if (!slides || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    const totalSlides = document.querySelectorAll('.partner-slide').length || 8;

    function updateCarousel() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        indicators.forEach((indicator, index) => {
            if (indicator) {
                indicator.classList.toggle('active', index === currentIndex);
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        });
    }

    indicators.forEach(indicator => {
        if (indicator) {
            indicator.addEventListener('click', () => {
                currentIndex = parseInt(indicator.dataset.index, 10) || 0;
                updateCarousel();
            });
        }
    });

    // Автопрокрутка
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }, 5000);
}

// ===== ОСНОВНАЯ ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Инициализация сайта РеалСтрой...');
    
    // 1. Мобильная адаптация
    addMobileStyles();
    initMobileMenu();
    
    // 2. Основные функции
    initModalClose();
    initForms();
    initSmoothScroll();
    initAnimations();
    
    // 3. Инициализация калькулятора
    const serviceType = document.getElementById('serviceType');
    const areaInput = document.getElementById('area');
    
    if (serviceType) {
        serviceType.addEventListener('change', updateService);
    }
    
    if (areaInput) {
        areaInput.addEventListener('input', calculatePrice);
    }
    
    // Клики по опциям
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('option-item')) {
            document.querySelectorAll('.option-item').forEach(i => i.classList.remove('selected'));
            e.target.classList.add('selected');
            calculatePrice();
        }
        
        if (e.target.type === 'checkbox' && e.target.closest('#serviceList')) {
            calculatePrice();
        }
    });
    
    // 4. Дополнительные модули
    initClientsCarousel();
    
    // 5. Показ шапки
    setTimeout(() => {
        const mainHeader = document.getElementById('mainHeader');
        if (mainHeader) {
            mainHeader.classList.add('visible');
        }
    }, 100);
    
    console.log('✅ Инициализация завершена');
});

// ===== ГЛОБАЛЬНЫЕ ФУНКЦИИ =====
window.openCalculator = openCalculator;
window.closeCalculator = closeCalculator;
window.openCallForm = openCallForm;
window.closeCallForm = closeCallForm;
window.updateService = updateService;
window.calculatePrice = calculatePrice;