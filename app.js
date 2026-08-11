document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Switcher ---
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-theme');
            localStorage.setItem('eliziTheme', isDark ? 'dark' : 'light');
        });
    }

    // --- Translation System ---
    const translations = {
        en: {
            "header-subbrand": "DESIGN",
            "floating-cta": "<i class=\"fa-solid fa-calendar-check\"></i> Free Consultation",
            "preloader-subtitle": "The Unique Print of Craftsmanship",
            "nav-home": "Home",
            "nav-collections": "Collections",
            "nav-craftsmanship": "Craftsmanship",
            "nav-blog": "Blog",
            "nav-contact": "Contact",
            "hero-tagline": "Bespoke & Fixed Wood Projects",
            "hero-title": "Holistic Touches<br>For Your Living Spaces",
            "hero-desc": "We combine Siteler Ankara's deep-rooted woodcraft tradition with a modern design vision. Rather than single pieces, we design and manufacture comprehensive fixed and loose furniture projects that cater to your entire living spaces.",
            "hero-btn-discover": "Discover Our Projects",
            "hero-btn-appointment": "Book an Appointment",
            "hl-title-1": "Holistic Drawings",
            "hl-desc-1": "We prepare the most suitable architectural layout plans for your entire space or specific areas.",
            "hl-title-2": "Natural Materials",
            "hl-desc-2": "We use premium oak, walnut, natural veneers, and high-quality wood panel components.",
            "hl-title-3": "Project-Based Production",
            "hl-desc-3": "Instead of retail product sales, we handle all custom fixed and loose woodwork needed for your space.",
            "coll-subtitle": "Premium Selection",
            "coll-title": "Elizi Project World",
            "port-desc-1": "Complete living space projects with solid wood wall cladding integrated with space, built-in lighting, and modern TV units.",
            "port-cat-1": "Living Room Project",
            "port-title-1": "Modern Wood Wall Cladding & TV Unit",
            "port-desc-2": "Holistic dining area projects crafted with solid natural oak tables, matching credenzas, and loose furniture components.",
            "port-cat-2": "Dining Room Project",
            "port-title-2": "Bespoke Dining Table & Sideboard Implementation",
            "port-desc-3": "Walk-in closet and built-in wardrobe projects designed custom to the space with smoked glass doors and LED illumination.",
            "port-cat-3": "Walk-in Closet Project",
            "port-title-3": "Built-in Wardrobe & Dressing Room Implementation",
            "craft-badge-1": "Siteler",
            "craft-badge-2": "Craftsmanship",
            "craft-subtitle": "Following Tradition",
            "craft-title": "Flawless Handcrafted Details at Every Step",
            "craft-p": "In our production center in Ankara Siteler, we guide raw wood's journey to becoming fine art. While our designers draft layouts fitting the architectural language of your spaces, our craftsmen execute every detail meticulously.",
            "craft-item-t-1": "Custom Spatial Solutions",
            "craft-item-d-1": "Instead of selling individual pieces, we prepare holistic layout plans and custom woodworking for your whole home or chosen rooms.",
            "craft-item-t-2": "Fixed & Loose Furniture",
            "craft-item-d-2": "We produce all wooden components including sideboards, dining tables, TV units, built-in closets, and wall panels in perfect harmony.",
            "craft-item-t-3": "Materials & Artisanship Power",
            "craft-item-d-3": "We process raw timber with rich grain patterns using modern finishing techniques and traditional jointing methods.",
            "quote-text": "\"Furniture is not just utility, but a work of art with a soul that completely transforms a space's atmosphere. We embark on our designs with this vision.\"",
            "quote-cite": "— Elizi Design Team",
            "blog-subtitle": "Design & Guides",
            "blog-title": "Elizi Furniture Blog",
            "blog-desc": "Tips on furniture selection, design trends, and custom woodworking for your living spaces.",
            "blog-cat-1": "Custom Design",
            "blog-author-1": "<i class=\"far fa-user\"></i> Elizi Craft",
            "blog-t-1": "Ankara Custom Furniture Design & Siteler Furniture Tradition",
            "blog-exc-1": "We blend Ankara Siteler's deep woodcraft culture with a modern architectural vision. Discover our custom furniture processes, material selections...",
            "blog-readmore": "Read More <i class=\"fas fa-arrow-right\"></i>",
            "blog-cat-2": "Kitchen Projects",
            "blog-author-2": "<i class=\"far fa-user\"></i> Elizi Architecture",
            "blog-t-2": "Ankara Custom Kitchen Design & Cabinetry Solutions",
            "blog-exc-2": "Intersection of aesthetics and ergonomics in kitchen decor. Our custom-sized and luxurious veneer kitchen projects...",
            "blog-cat-3": "Villa Projects",
            "blog-author-3": "<i class=\"far fa-user\"></i> Interior Architecture",
            "blog-t-3": "Cayyolu, Incek & Umitkoy Region Luxury Villa Furniture Design",
            "blog-exc-3": "Our villa and luxury residential projects in Cayyolu, Incek, and Umitkoy. Holistic woodwork manufacturing and turnkey decoration...",
            "blog-all-btn": "See All Blog Posts",
            "contact-subtitle": "Get in Touch",
            "contact-title": "We Welcome You to Our Siteler Studio",
            "contact-c-title-1": "Showroom & Workshop",
            "contact-c-desc-1": "Onder Mah. Serince Sok. No:6/B<br>Siteler, Altindag / Ankara",
            "contact-c-title-2": "Phone & Contact",
            "contact-c-title-3": "Email Address",
            "contact-wa-btn": "<i class=\"fab fa-whatsapp\"></i> Get a Quick Quote via WhatsApp",
            "form-title": "Custom Design Request",
            "form-desc": "Describe your dream design, upload technical drawings or reference images, and we will prepare a custom quote for you as soon as possible.",
            "form-label-name": "Your Name & Surname *",
            "form-label-phone": "Your Phone Number *",
            "form-label-email": "Your Email Address *",
            "form-label-desc": "Describe Your Design *",
            "form-label-file": "Technical Drawing, Model, or Inspiration Image (If any)",
            "form-file-title": "Choose or Drag File Here",
            "form-file-subtitle": "PDF, CAD drawing, JPG or PNG (Max 10MB)",
            "form-submit-btn": "Submit Request",
            "reviews-title": "Google Maps Reviews From Our Clients",
            "review-t-1": "\"We had our office decorated. Woodwork quality and attention to detail were excellent. Best of luck.\"",
            "review-t-2": "\"We ordered a wooden TV unit and bookshelf for our home. They installed it cleanly on the exact day promised. Thank you for their care.\"",
            "review-t-3": "\"We ordered by visiting their Siteler studio. The living room set turned out exactly as we dreamed. High quality and very elegant. Handcraft at its best.\"",
            "review-t-4": "\"We ordered a custom-designed dining room set. The timber quality and detailed execution are spectacular. We are extremely pleased, highly recommended.\"",
            "footer-subbrand": "DESIGN & FURNITURE",
            "footer-desc": "Craft rising from Siteler, flawless comfort in your home.",
            "footer-h-links": "Quick Links",
            "footer-h-hours": "Working Hours",
            "footer-hours-1": "Monday - Saturday: 09:00 - 19:30",
            "footer-hours-2": "Sunday: 11:30 - 18:00 (By Appointment)",
            "footer-copy": "&copy; 2026 Elizi Design & Furniture. All Rights Reserved. Designed by <a href=\"https://alperenborklu.com\" target=\"blank\">Alperen Börklü</a>",
            "pop-title": "Elizi Design World",
            "pop-desc": "Be the first to know about inspiring interior ideas for your home, our newest handcrafted collections, and special offers.",
            "pop-btn": "Subscribe",
            "pop-success": "<i class=\"fa-solid fa-circle-check\"></i> Welcome! Your email address has been saved.",
            "blog-page-tag": "Elizi Furniture Guide",
            "blog-page-title": "Ideas & Design Tips",
            "blog-page-desc": "All the inspiring content you are looking for regarding custom furniture production, Ankara Siteler woodwork, modern home decor, and architectural projects.",
            "blog-exc-1-full": "We blend Ankara Siteler's deep woodcraft culture with a modern architectural vision. Explore our custom furniture processes, material selections, and details that add value to living spaces.",
            "blog-exc-2-full": "The perfect collision of aesthetics and ergonomics in kitchen decoration. Our custom-sized and luxurious veneer kitchen projects that make a difference in Ankara.",
            "blog-exc-3-full": "Our luxury villa housing projects in Cayyolu, Incek, and Umitkoy. Our holistic interior architecture woodwork manufacturing, turnkey decoration services, and top-tier craftsmanship.",
            "blog-exc-4-full": "Our built-in wardrobe and modern dressing room projects offering maximum storage and luxury design together. With the quality of Ankara Siteler craftsmanship.",
            "blog-exc-5-full": "Modern and classic wooden TV unit models that will create a focal point in the living room. Space-custom sizes, stylish LED lights, and first-class natural veneers.",
            "blog-exc-6-full": "Reflecting naturalness and elegance onto your walls. Wood wall panel applications in Ankara, acoustic wood panels, and modern architectural designs.",
            "blog-cat-4": "Wardrobe Design",
            "blog-author-4": "<i class=\"far fa-user\"></i> Elizi Design",
            "blog-cat-5": "TV Units",
            "blog-author-5": "<i class=\"far fa-user\"></i> Furniture Design",
            "blog-cat-6": "Wall Cladding",
            "blog-author-6": "<i class=\"far fa-user\"></i> Wall Decor"
        },
        tr: {
            "header-subbrand": "DİZAYN",
            "floating-cta": "<i class=\"fa-solid fa-calendar-check\"></i> Ücretsiz Keşif Randevusu",
            "preloader-subtitle": "Zanaatın Benzersiz İzi",
            "nav-home": "Ana Sayfa",
            "nav-collections": "Koleksiyonlar",
            "nav-craftsmanship": "Ustalık",
            "nav-blog": "Blog",
            "nav-contact": "İletişim",
            "hero-tagline": "Sabit & Hareketli Ahşap Projeleri",
            "hero-title": "Yaşam Alanlarınıza<br>Bütünsel Dokunuşlar",
            "hero-desc": "Siteler Ankara'nın köklü ahşap işçiliği geleneğini modern tasarım vizyonuyla birleştiriyoruz. Tek imalat değil, yaşam alanlarınızın tamamına hitap eden kapsamlı sabit ve hareketli mobilya projeleri tasarlıyor ve üretiyoruz.",
            "hero-btn-discover": "Projelerimizi Keşfet",
            "hero-btn-appointment": "Randevu Alın",
            "hl-title-1": "Bütünsel Çizimler",
            "hl-desc-1": "Mekanınızın tamamına veya belirli alanlarına en uygun mimari yerleşim planlarını hazırlıyoruz.",
            "hl-title-2": "Doğal Malzemeler",
            "hl-desc-2": "Birinci sınıf meşe, ceviz, doğal kaplama ve birinci kalite ahşap panel bileşenleri kullanıyoruz.",
            "hl-title-3": "Proje Bazlı Üretim",
            "hl-desc-3": "Tekli ürün satışı yerine, mekanınız için gerekli tüm sabit ve hareketli ahşap imalatını üstleniyoruz.",
            "coll-subtitle": "Premium Seçki",
            "coll-title": "Elizi Proje Dünyası",
            "port-desc-1": "Mekanla bütünleşen masif ahşap duvar kaplamaları, entegre aydınlatmalar ve modern TV üniteleriyle komple yaşam alanı projeleri.",
            "port-cat-1": "Yaşam Alanı Projesi",
            "port-title-1": "Modern Ahşap Duvar Kaplama & TV Ünitesi",
            "port-desc-2": "Doğal meşe masif masalar, uyumlu konsollar ve hareketli mobilya elemanlarıyla kurgulanan bütünsel yemek alanı projeleri.",
            "port-cat-2": "Yemek Odası Projesi",
            "port-title-2": "Bespoke Yemek Masası & Konsol Uygulaması",
            "port-desc-3": "Mekana göre özel ölçüyle tasarlanan, füme cam kapaklı, LED aydınlatmalı gömme dolap ve giyinme odası projeleri.",
            "port-cat-3": "Giyinme Odası Projesi",
            "port-title-3": "Gömme Dolap & Giyinme Odası Uygulaması",
            "craft-badge-1": "Siteler",
            "craft-badge-2": "Ustalığı",
            "craft-subtitle": "Geleneğin İzinde",
            "craft-title": "Her Aşamada Kusursuz İşçilik",
            "craft-p": "Ankara Siteler'deki üretim merkezimizde, ham ahşabın sanata dönüştüğü yolculuğu yönetiyoruz. Tasarımcılarımız mekanınızın mimari diline uyum sağlayacak komple taslakları çizerken, ustalarımız her detayda titizlikle çalışır.",
            "craft-item-t-1": "Kişiye Özel Alan Çözümleri",
            "craft-item-d-1": "Tek ürün satışı yerine, evinizin tamamı ya da belirlediğiniz odaları için bütünsel yerleşim ve imalat planları hazırlıyoruz.",
            "craft-item-t-2": "Sabit ve Hareketli Mobilya",
            "craft-item-d-2": "Konsollar, yemek masaları, TV üniteleri, gömme dolaplar ve duvar panelleri gibi tüm ahşap elemanları uyum içinde üretiyoruz.",
            "craft-item-t-3": "Malzeme ve Zanaat Gücü",
            "craft-item-d-3": "Zengin hare yapısına sahip ham ağaçları, modern cila teknikleri ve geleneksel birleştirme yöntemleriyle işliyoruz.",
            "quote-text": "\"Mobilya sadece bir eşya değil, ruhu olan ve mekanın atmosferini tamamen değiştiren bir sanat eseridir. Tasarımlarımızda bu vizyonla yola çıkıyoruz.\"",
            "quote-cite": "— Elizi Dizayn Tasarım Ekibi",
            "blog-subtitle": "Tasarım & Rehberler",
            "blog-title": "Elizi Mobilya Blog",
            "blog-desc": "Yaşam alanlarınız için mobilya seçimi, tasarım trendleri ve ahşap işçiliğine dair ipuçları.",
            "blog-cat-1": "Özel Tasarım",
            "blog-author-1": "<i class=\"far fa-user\"></i> Elizi Zanaat",
            "blog-t-1": "Ankara Özel Tasarım Mobilya ve Siteler Mobilya Geleneği",
            "blog-exc-1": "Ankara Siteler'in köklü ahşap işçiliği kültürünü modern mimari vizyonla harmanlıyoruz. Özel tasarım mobilya süreçlerimizi, malzeme seçimlerimizi...",
            "blog-readmore": "Devamını Oku <i class=\"fas fa-arrow-right\"></i>",
            "blog-cat-2": "Mutfak Projeleri",
            "blog-author-2": "<i class=\"far fa-user\"></i> Elizi Mimarlık",
            "blog-t-2": "Ankara Özel Üretim Mutfak Tasarımı & Dolap Çözümleri",
            "blog-exc-2": "Mutfak dekorasyonunda estetik ve ergonominin buluşması. Kişiye özel ölçü ve lüks kaplama detaylarıyla hazırladığımız mutfak projelerimiz...",
            "blog-cat-3": "Villa Projeleri",
            "blog-author-3": "<i class=\"far fa-user\"></i> İç Mimari",
            "blog-t-3": "Çayyolu, İncek ve Ümitköy Bölgesi Lüks Villa Mobilya Tasarımı",
            "blog-exc-3": "Çayyolu, İncek ve Ümitköy'deki villa ve lüks konut projelerimiz. Bütünsel iç mimari ahşap imalatlarımız ve anahtar teslim dekorasyon hizmetimiz...",
            "blog-all-btn": "Tüm Blog Yazılarını Gör",
            "contact-subtitle": "İletişime Geçin",
            "contact-title": "Sizi Siteler Stüdyomuza Bekliyoruz",
            "contact-c-title-1": "Showroom & Atölye",
            "contact-c-desc-1": "Önder Mah. Serince Sok. No:6/B<br>Siteler, Altındağ / Ankara",
            "contact-c-title-2": "Telefon & İletişim",
            "contact-c-title-3": "E-posta Adresi",
            "contact-wa-btn": "<i class=\"fab fa-whatsapp\"></i> WhatsApp ile Hızlı Teklif Alın",
            "form-title": "Kişiye Özel Tasarım Talebi",
            "form-desc": "Hayalinizdeki tasarımı tarif edin, teknik çizimlerinizi veya örnek görsellerinizi yükleyin, en kısa sürede size özel fiyat teklifi hazırlayalım.",
            "form-label-name": "Adınız Soyadınız *",
            "form-label-phone": "Telefon Numaranız *",
            "form-label-email": "E-posta Adresiniz *",
            "form-label-desc": "Tasarımınızı Tarif Edin *",
            "form-label-file": "Varsa Teknik Çizim, Model veya İlham Görseli",
            "form-file-title": "Dosya Seçin veya Sürükleyin",
            "form-file-subtitle": "PDF, CAD çizimi, JPG veya PNG (Max 10MB)",
            "form-submit-btn": "Talebi Gönder",
            "reviews-title": "Müşterilerimizin Google Haritalar Değerlendirmeleri",
            "review-t-1": "\"Ofis dekorasyonumuzu yaptırmıştik. İşçilik kalitesi ilgi alaka hepsi gayet güzel. İsleri rast gitsin.\"",
            "review-t-2": "\"Evimiz için ahşap TV ünitesi ve kitaplık yaptırdık. Tam söz verdikleri günde, tertemiz monte ettiler. İlgi ve alakaları için teşekkürler.\"",
            "review-t-3": "\"Siteler'deki stüdyolarına gidip sipariş vermiştik. Salon takımı tam hayal ettiğimiz gibi oldu. Hem kaliteli hem de çok şık. Ellerinize sağlık.\"",
            "review-t-4": "\"Özel tasarım yemek odası takımı yaptırdık. Ağacın kalitesi ve detay işçilikleri gerçekten muazzam. Çok memnun kaldık, tavsiye ederim.\"",
            "footer-subbrand": "DİZAYN & MOBİLYA",
            "footer-desc": "Siteler'den yükselen zanaat, evinizdeki kusursuz konfor.",
            "footer-h-links": "Hızlı Erişim",
            "footer-h-hours": "Çalışma Saatleri",
            "footer-hours-1": "Pazartesi - Cumartesi: 09:00 - 19:30",
            "footer-hours-2": "Pazar: 11:30 - 18:00 (Randevu ile)",
            "footer-copy": "&copy; 2026 Elizi Dizayn & Mobilya. Tüm Hakları Saklıdır. Designed by <a href=\"https://alperenborklu.com\" target=\"blank\">Alperen Börklü</a>",
            "pop-title": "Elizi Tasarım Dünyası",
            "pop-desc": "Eviniz için ilham verici iç mimari fikirleri, en yeni el işçiliği koleksiyonlarımız ve özel tekliflerimizden ilk siz haberdar olun.",
            "pop-btn": "Kayıt Ol",
            "pop-success": "<i class=\"fa-solid fa-circle-check\"></i> Aramıza hoş geldiniz! E-posta adresiniz kaydedildi.",
            "blog-page-tag": "Elizi Mobilya Rehberi",
            "blog-page-title": "Fikirler & Tasarım İpuçları",
            "blog-page-desc": "Kişiye özel mobilya üretimi, Ankara Siteler ahşap işçiliği, modern ev dekorasyonu ve mimari projeler hakkında aradığınız tüm ilham verici içerikler.",
            "blog-exc-1-full": "Ankara Siteler'in köklü ahşap işçiliği kültürünü modern mimari vizyonla harmanlıyoruz. Özel tasarım mobilya süreçlerimizi, malzeme seçimlerimizi ve yaşam alanlarına değer katan detayları keşfedin.",
            "blog-exc-2-full": "Mutfak dekorasyonunda estetik ve ergonominin kusursuz buluşması. Kişiye özel ölçü ve lüks kaplama detaylarıyla hazırladığımız, Ankara'da fark yaratan özel üretim mutfak projelerimiz.",
            "blog-exc-3-full": "Çayyolu, İncek ve Ümitköy'deki lüks villa konut projelerimiz. Bütünsel iç mimari ahşap imalatlarımız, anahtar teslim dekorasyon hizmetlerimiz ve üst düzey zanaatkarlık.",
            "blog-exc-4-full": "Yaşam alanlarında maksimum depolama ve lüks tasarımı bir arada sunan gömme dolap ile modern giyinme odası projelerimiz. Ankara Siteler işçiliği kalitesiyle.",
            "blog-exc-5-full": "Salonda odak noktası oluşturacak modern ve klasik ahşap TV ünitesi modelleri. Mekana özel ölçüler, şık LED aydınlatmalar ve birinci sınıf doğal kaplamalar.",
            "blog-exc-6-full": "Doğallığın ve zarafetin duvarlarınıza yansıması. Ankara'da ahşap duvar paneli uygulamalarımız, akustik ahşap paneller ve modern mimari tasarımlar.",
            "blog-cat-4": "Dolap Tasarımı",
            "blog-author-4": "<i class=\"far fa-user\"></i> Elizi Dizayn",
            "blog-cat-5": "TV Üniteleri",
            "blog-author-5": "<i class=\"far fa-user\"></i> Mobilya Tasarım",
            "blog-cat-6": "Duvar Panelleri",
            "blog-author-6": "<i class=\"far fa-user\"></i> Duvar Dekorasyonu"
        }
    };

    const langToggle = document.getElementById('langToggle');
    
    function setLanguage(lang) {
        localStorage.setItem('eliziLang', lang);
        if (langToggle) {
            langToggle.textContent = lang === 'tr' ? 'EN' : 'TR';
        }
        
        // Translate all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Translate placeholders of inputs
        const nameInput = document.getElementById('form-name');
        const phoneInput = document.getElementById('form-phone');
        const emailInput = document.getElementById('form-email');
        const descInput = document.getElementById('form-desc');
        const newsletterInput = document.getElementById('popupEmailInput');

        if (lang === 'en') {
            if (nameInput) nameInput.placeholder = "e.g. John Doe";
            if (phoneInput) phoneInput.placeholder = "+1...";
            if (emailInput) emailInput.placeholder = "name@email.com";
            if (descInput) descInput.placeholder = "Describe the furniture you want, dimensions, materials, color preferences...";
            if (newsletterInput) newsletterInput.placeholder = "Enter your email address...";
        } else {
            if (nameInput) nameInput.placeholder = "Örn: Metin Yılmaz";
            if (phoneInput) phoneInput.placeholder = "053X XXX XX XX";
            if (emailInput) emailInput.placeholder = "isim@eposta.com";
            if (descInput) descInput.placeholder = "İstediğiniz mobilyayı (masa, konsol, gardırop vb.), ölçüleri, malzeme detaylarını ve renk tercihlerini belirtin...";
            if (newsletterInput) newsletterInput.placeholder = "E-posta adresinizi yazın...";
        }
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = localStorage.getItem('eliziLang') || 'tr';
            const newLang = currentLang === 'tr' ? 'en' : 'tr';
            setLanguage(newLang);
        });
    }

    // Initialize Language
    const initialLang = localStorage.getItem('eliziLang') || 'tr';
    setLanguage(initialLang);

    // --- Header Scroll State ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Navigation Menu ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    // --- Active Link Highlight on Scroll ---
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNav() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    }
    window.addEventListener('scroll', highlightNav);

    // --- Portfolio Filtering ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from other buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                    // Trigger simple fade-in
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // --- Lightbox Gallery Modal ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeBtn = document.querySelector('.lightbox-close');
    const imageWrappers = document.querySelectorAll('.portfolio-img-wrapper');

    imageWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            const img = wrapper.querySelector('.portfolio-img');
            const cardInfo = wrapper.closest('.portfolio-card').querySelector('.portfolio-info h3').textContent;
            
            if (lightbox && lightboxImg && lightboxCaption) {
                lightbox.style.display = 'block';
                lightboxImg.src = img.src;
                lightboxCaption.textContent = cardInfo;
                document.body.style.overflow = 'hidden'; // Prevent body scroll
            }
        });
    });

    // Close Lightbox
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Close lightbox on click outside the image
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Escape key to close lightbox
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // --- Smooth Scroll Indicator Trigger ---
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const collectionsSection = document.getElementById('collections');
            if (collectionsSection) {
                collectionsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        // Hide indicator when scrolled down
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '0.7';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
    }

    // --- Form File Upload Name Feedback ---
    const fileInput = document.getElementById('form-file');
    const fileTitle = document.getElementById('file-upload-title');

    if (fileInput && fileTitle) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                const fileName = e.target.files[0].name;
                fileTitle.textContent = `Seçilen Dosya: ${fileName}`;
                fileTitle.style.color = 'var(--accent)';
            } else {
                fileTitle.textContent = 'Dosya Seçin veya Sürükleyin';
                fileTitle.style.color = '';
            }
        });
    }

    // --- Email Subscription Popup Logic ---
    const emailPopup = document.getElementById('emailPopup');
    const emailPopupClose = document.getElementById('emailPopupClose');
    const emailPopupForm = document.getElementById('emailPopupForm');
    const emailPopupSuccess = document.getElementById('emailPopupSuccess');
    const popupEmailInput = document.getElementById('popupEmailInput');

    if (emailPopup) {
        // Show popup after 5 seconds delay if not closed/subscribed before
        const isPopupClosed = localStorage.getItem('eliziEmailPopupClosed');
        const isSubscribed = localStorage.getItem('eliziSubscribed');

        if (!isPopupClosed && !isSubscribed) {
            setTimeout(() => {
                emailPopup.classList.add('active');
            }, 5000);
        }

        // Close functions
        const closePopup = () => {
            emailPopup.classList.remove('active');
            localStorage.setItem('eliziEmailPopupClosed', 'true');
        };

        if (emailPopupClose) {
            emailPopupClose.addEventListener('click', closePopup);
        }

        // Close on clicking outside content
        emailPopup.addEventListener('click', (e) => {
            if (e.target === emailPopup) {
                closePopup();
            }
        });

        // Form Submit
        if (emailPopupForm) {
            emailPopupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = popupEmailInput.value;
                
                // Save to localStorage
                localStorage.setItem('eliziSubscribed', 'true');
                localStorage.setItem('eliziSubscribedEmail', email);

                // Show success state
                emailPopupForm.style.display = 'none';
                if (emailPopupSuccess) {
                    emailPopupSuccess.style.display = 'block';
                }

                // Close after a brief delay
                setTimeout(() => {
                    emailPopup.classList.remove('active');
                }, 2500);
            });
        }

        // --- Reviews Carousel ---
        const reviewSlides = document.querySelectorAll('.review-slide');
        const reviewDots = document.querySelectorAll('.reviews-dots .dot');
        let currentReviewIndex = 0;
        let reviewInterval;

        function showReview(index) {
            if (reviewSlides.length === 0) return;
            reviewSlides.forEach(slide => slide.classList.remove('active'));
            reviewDots.forEach(dot => dot.classList.remove('active'));

            currentReviewIndex = (index + reviewSlides.length) % reviewSlides.length;
            reviewSlides[currentReviewIndex].classList.add('active');
            reviewDots[currentReviewIndex].classList.add('active');
        }

        function nextReview() {
            showReview(currentReviewIndex + 1);
        }

        function startReviewInterval() {
            if (reviewSlides.length === 0) return;
            reviewInterval = setInterval(nextReview, 5000);
        }

        function resetReviewInterval() {
            clearInterval(reviewInterval);
            startReviewInterval();
        }

        if (reviewDots.length > 0) {
            reviewDots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showReview(index);
                    resetReviewInterval();
                });
            });
        }

        startReviewInterval();
    }

    // --- Preloader Dismiss ---
    const preloaderStartTime = Date.now();
    const minPreloaderDuration = 1000; // Enforce at least 1 second of the scanning animation

    const dismissPreloader = () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.remove();
            }, 1300);
        }
    };

    // Safety timeout: dismiss preloader after 3 seconds anyway to not block user
    const safetyTimeout = setTimeout(dismissPreloader, 3000);

    window.addEventListener('load', () => {
        clearTimeout(safetyTimeout);
        const timePassed = Date.now() - preloaderStartTime;
        const remainingTime = Math.max(0, minPreloaderDuration - timePassed);
        setTimeout(dismissPreloader, remainingTime);
    });
});
