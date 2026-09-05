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
            "hero-title": "Bespoke Luxury Furniture Ankara<br><span class=\"hero-title-sub\">Holistic Touches For Your Living Spaces</span>",
            "hero-desc": "We combine Siteler Ankara's deep-rooted woodcraft tradition with a modern architectural vision. In bespoke furniture and architectural millwork, we bring holistic touches to your living spaces through comprehensive custom fixed and loose woodwork projects.",
            "hero-btn-discover": "Discover Our Projects",
            "hero-btn-appointment": "Book an Appointment",
            "hl-title-1": "Holistic Drawings",
            "hl-desc-1": "We prepare the most suitable architectural layout plans for your entire space or specific areas.",
            "hl-title-2": "Natural Materials",
            "hl-desc-2": "We use premium oak, walnut, natural veneers, and high-quality wood panel components.",
            "hl-title-3": "Project-Based Production",
            "hl-desc-3": "Instead of retail product sales, we handle all custom fixed and loose woodwork needed for your space.",
            "coll-subtitle": "PREMIUM SELECTION",
            "coll-title": "Elizi Collections",
            "port-desc-1": "Custom reception desks and wood paneling designed with integrated lighting for modern lobbies and office spaces.",
            "port-cat-1": "Reception Desk",
            "port-title-1": "Modern Reception Desk & Wood Paneling",
            "port-desc-2": "Luxury bathroom vanities custom-built with moisture-resistant wood coatings, integrated mirror lights, and premium sink counters.",
            "port-cat-2": "Bathroom Vanity",
            "port-title-2": "Premium Wood Bathroom Vanity & Cabinet Console",
            "port-desc-3": "Premium oval executive desks crafted with custom timber, marble integrations, and matching built-in luxury bookshelves.",
            "port-cat-3": "Executive Suite",
            "port-title-3": "Luxury Office Suite & Bespoke Executive Workstation",
            "port-desc-4": "Acoustic timber ceiling lattices, integrated illuminated planter partitions, and custom pantry island bars for contemporary corporate workspaces.",
            "port-cat-4": "Open Office",
            "port-title-4": "Modern Open Office & Wooden Partition Architecture",
            "port-desc-5": "Custom sculptural conical-base executive desk with polished brass accents, bookmatched marble panels, and LED-accented fluted acoustic wood wall cladding.",
            "port-cat-5": "Sculptural Suite",
            "port-title-5": "Sculptural Executive Desk & Acoustic Wood Paneling",
            "coll-btn-fullscreen": "<i class=\"fa-solid fa-expand\"></i> View Fullscreen",
            "coll-btn-cta": "Get a Quote & Discovery",
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
            "process-subtitle": "Step-by-Step Perfection",
            "process-title": "Our Bespoke Production Process",
            "process-desc": "Our 5-step transparent architectural approach guiding raw timber into your refined space.",
            "process-step-1-t": "Discovery & Consultation",
            "process-step-1-d": "We evaluate your space, lifestyle habits, and design aspirations on-site with laser-precision surveys.",
            "process-step-2-t": "Design & 3D Modeling",
            "process-step-2-d": "We develop custom dimensions, timber veneers, and architectural hardware selections through 3D spatial modeling.",
            "process-step-3-t": "Siteler Workshop Joinery",
            "process-step-3-d": "In our Ankara Siteler manufacturing studio, master craftsmen shape kiln-dried hardwoods with CNC precision.",
            "process-step-4-t": "Precision Installation",
            "process-step-4-d": "Our dedicated in-house installation team executes flawless, dust-free, millimeter-accurate on-site assembly.",
            "process-step-5-t": "Quality Inspection & Handover",
            "process-step-5-d": "We conduct final mechanical adjustments, surface finish inspections, and deliver your project with full warranties.",
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
            "reviews-title": "Reviews From Our Clients",
            "review-t-1": "\"We had our office decorated. Woodwork quality and attention to detail were excellent. Best of luck.\"",
            "review-t-2": "\"We ordered a wooden TV unit and bookshelf for our home. They installed it cleanly on the exact day promised. Thank you for their care.\"",
            "review-t-3": "\"We ordered by visiting their Siteler studio. The living room set turned out exactly as we dreamed. High quality and very elegant. Handcraft at its best.\"",
            "review-t-4": "\"We ordered a custom-designed dining room set. The timber quality and detailed execution are spectacular. We are extremely pleased, highly recommended.\"",
            "blog-cat-22": "Cost & Pricing Guide",
            "blog-t-22": "Ankara Bespoke Furniture Pricing: 2026 Manufacturing & Timber Cost Guide",
            "blog-exc-22": "How are bespoke furniture costs calculated in Ankara Siteler? Solid hardwood, natural walnut, oak veneers, polyurethane lacquer, and hardware cost breakdown.",
            "blog-date-22": "<i class=\"far fa-calendar-alt\"></i> 4 Sep 2026",
            "blog-author-22": "<i class=\"far fa-user\"></i> Elizi Cost Desk",
            "blog-cat-23": "Manufacturing Guide",
            "blog-t-23": "How Custom-Sized Furniture Is Made: Key Considerations When Commissioning in Siteler",
            "blog-exc-23": "From laser spatial surveying and 3D modeling to kiln-dried hardwood selection and Siteler joinery: essential insights for custom furniture commissions.",
            "blog-date-23": "<i class=\"far fa-calendar-alt\"></i> 4 Sep 2026",
            "blog-author-23": "<i class=\"far fa-user\"></i> Elizi Craft Studio",
            "blog-cat-24": "Material Analysis",
            "blog-t-24": "Solid Hardwood vs. Engineered MDF: Architectural Timber Species for Bespoke Millwork",
            "blog-exc-24": "Moisture resilience, dimensional stability, and performance showdown between solid European oak, American walnut, and high-density veneered MDF cores.",
            "blog-date-24": "<i class=\"far fa-calendar-alt\"></i> 3 Sep 2026",
            "blog-author-24": "<i class=\"far fa-user\"></i> Elizi Material Lab",
            "blog-cat-25": "Villa Projects",
            "blog-t-25": "Bespoke Villa Furniture Guide in Ankara: Luxury Joinery for Cayyolu, Incek & Umitkoy",
            "blog-exc-25": "Turnkey architectural joinery for high-ceilinged villas in Cayyolu and Incek: acoustic timber cladding, walk-in dressing suites, and grand dining tables.",
            "blog-date-25": "<i class=\"far fa-calendar-alt\"></i> 3 Sep 2026",
            "blog-author-25": "<i class=\"far fa-user\"></i> Elizi Villa Studio",
            "blog-cat-26": "Kitchen Architecture",
            "blog-t-26": "Ankara Custom Kitchen Pricing: Advantages of Tailored Architectural Cabinetry",
            "blog-exc-26": "Why bespoke custom-built kitchens outperform modular factory cabinets: floor-to-ceiling storage, natural oak islands, and ergonomic workflow solutions.",
            "blog-date-26": "<i class=\"far fa-calendar-alt\"></i> 2 Sep 2026",
            "blog-author-26": "<i class=\"far fa-user\"></i> Elizi Kitchen Studio",
            "blog-cat-27": "Cabinet Materials",
            "blog-t-27": "Kitchen Cabinet Materials: Silk-Matte Polyurethane Lacquer vs. Natural Hardwood",
            "blog-exc-27": "Monolithic silk-matte lacquer vs. tactile warmth of natural oak and walnut veneers: durability, steam resistance, and hybrid modern kitchen design.",
            "blog-date-27": "<i class=\"far fa-calendar-alt\"></i> 2 Sep 2026",
            "blog-author-27": "<i class=\"far fa-user\"></i> Elizi Material Desk",
            "blog-cat-28": "Corporate Interiors",
            "blog-t-28": "Corporate Office Woodwork in Ankara: Bespoke Millwork & Executive Partitions",
            "blog-exc-28": "Sculptural reception desks, acoustic timber slat partitions, and high-tech boardroom tables engineered for Ankara's corporate headquarters.",
            "blog-date-28": "<i class=\"far fa-calendar-alt\"></i> 1 Sep 2026",
            "blog-author-28": "<i class=\"far fa-user\"></i> Elizi Corporate Group",
            "blog-cat-29": "Executive Suites",
            "blog-t-29": "Executive Office Design in Ankara: Commissioning Bespoke Executive Suites",
            "blog-exc-29": "Sculptural walnut desks, Italian marble inlays, concealed biometric compartments, and architectural back-credensas designed for C-suite executives.",
            "blog-date-29": "<i class=\"far fa-calendar-alt\"></i> 1 Sep 2026",
            "blog-author-29": "<i class=\"far fa-user\"></i> Elizi Executive Studio",
            "blog-cat-30": "Siteler Craftsmanship",
            "blog-t-30": "Furniture Manufacturing in Ankara: Siteler Atelier & Traditional Joinery Process",
            "blog-exc-30": "Exploring the artisanal heritage of Ankara Siteler: kiln-drying standards, mortise-and-tenon joints, 5-axis CNC accuracy, and hand-rubbed organic finishes.",
            "blog-date-30": "<i class=\"far fa-calendar-alt\"></i> 31 Aug 2026",
            "blog-author-30": "<i class=\"far fa-user\"></i> Elizi Siteler Workshop",
            "blog-cat-31": "Luxury Bathrooms",
            "blog-t-31": "Luxury Bathroom Vanities in Ankara: Moisture-Resistant Custom Wood Furniture",
            "blog-exc-31": "Floating timber bathroom consoles, thermo-treated water-resistant ash and teak, LED illuminated niches, and integrated seamless marble vanity counters.",
            "blog-date-31": "<i class=\"far fa-calendar-alt\"></i> 31 Aug 2026",
            "blog-author-31": "<i class=\"far fa-user\"></i> Elizi Bath Studio",

            "footer-subbrand": "DESIGN & FURNITURE",
            "footer-desc": "Craft rising from Siteler,<br>flawless comfort in your home.",
            "footer-h-links": "Quick Links",
            "footer-nav-home": "Elizi Home",
            "footer-nav-collections": "Bespoke Collections",
            "footer-nav-blog": "Blog & Guides",
            "footer-nav-contact": "Contact Us",
            "footer-h-hours": "Working Hours",
            "footer-hours-1": "Monday - Saturday: 08:30 - 18:30",
            "footer-hours-2": "Sunday: Closed",
            "footer-copy": "&copy; 2026 Elizi Design & Furniture. All Rights Reserved. Designed by <a href=\"https://alperenborklu.com\" target=\"blank\">Alperen Börklü</a>",
            "pop-title": "Elizi Design World",
            "pop-desc": "Be the first to know about inspiring interior ideas for your home, our newest handcrafted collections, and special offers.",
            "pop-btn": "Subscribe",
            "pop-success": "<i class=\"fa-solid fa-circle-check\"></i> Welcome! Your email address has been saved.",
            "blog-page-tag": "Elizi Furniture Guide",
            "blog-page-title": "Ideas & Design Tips",
            "blog-page-desc": "All the inspiring ideas and design tips regarding bespoke furniture production, Ankara Siteler woodwork, modern luxury interiors, and architectural millwork projects.",
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
            "blog-author-6": "<i class=\"far fa-user\"></i> Wall Decor",
            "blog-t-4": "Ankara Built-in Wardrobe & Luxury Dressing Room Guide",
            "blog-t-5": "Modern Wooden TV Unit Models: Luxury Timber Details",
            "blog-t-6": "Wooden Wall Paneling Models & Contemporary Wall Decor",
            "blog-date-1": "<i class=\"far fa-calendar-alt\"></i> August 11, 2026",
            "blog-date-2": "<i class=\"far fa-calendar-alt\"></i> August 10, 2026",
            "blog-date-3": "<i class=\"far fa-calendar-alt\"></i> August 9, 2026",
            "blog-date-4": "<i class=\"far fa-calendar-alt\"></i> August 7, 2026",
            "blog-date-5": "<i class=\"far fa-calendar-alt\"></i> August 5, 2026",
            "blog-date-6": "<i class=\"far fa-calendar-alt\"></i> August 3, 2026",
            "blog-date-7": "<i class=\"far fa-calendar-alt\"></i> September 4, 2026",
            "blog-date-8": "<i class=\"far fa-calendar-alt\"></i> September 3, 2026",
            "blog-date-9": "<i class=\"far fa-calendar-alt\"></i> September 2, 2026",
            "blog-date-10": "<i class=\"far fa-calendar-alt\"></i> September 1, 2026",
            "blog-date-11": "<i class=\"far fa-calendar-alt\"></i> August 30, 2026",
            "blog-date-12": "<i class=\"far fa-calendar-alt\"></i> August 28, 2026",
            "blog-date-13": "<i class=\"far fa-calendar-alt\"></i> August 25, 2026",
            "blog-date-14": "<i class=\"far fa-calendar-alt\"></i> August 22, 2026",
            "blog-date-15": "<i class=\"far fa-calendar-alt\"></i> August 20, 2026",
            "blog-date-16": "<i class=\"far fa-calendar-alt\"></i> August 18, 2026",
            "footer-address-text": "Onder Mah. Serince Sk. 6/B, Siteler, Ankara, Turkey",
            "sidebar-author-title": "Elizi Craftsmanship",
            "sidebar-author-desc": "Based in Ankara Siteler's rich woodcraft heritage, we manufacture bespoke fixed and loose furniture for living spaces worldwide.",
            "sidebar-cta-title": "Free Discovery & Consultation",
            "sidebar-cta-desc": "Contact us for on-site measurement, material selection, and architectural millwork consultation for local and international projects.",
            "sidebar-cta-btn": "<i class=\"fa-solid fa-phone\"></i> +90 536 894 60 08",
            "sidebar-recent-title": "Featured Topics",
            "sidebar-other-title": "Featured Guides",
            "post-breadcrumb-home": "Home",
            "post-breadcrumb-blog": "Blog",
            "post-read-time-5": "<i class=\"far fa-clock\"></i> 5 Min Read",
            "post-read-time-6": "<i class=\"far fa-clock\"></i> 6 Min Read",
            "post-read-time-7": "<i class=\"far fa-clock\"></i> 7 Min Read",
            "post-read-time-8": "<i class=\"far fa-clock\"></i> 8 Min Read",
            "blog-cat-7": "Bespoke Millwork",
            "blog-t-7": "Luxury Bespoke Furniture Manufacturing in Turkey: Architectural Millwork for Global Projects",
            "blog-exc-7": "Discover how Elizi Dizayn delivers turnkey luxury bespoke furniture and architectural millwork from Turkey to prestigious residential and commercial projects worldwide.",
            "blog-author-7": "<i class=\"far fa-user\"></i> Elizi Architectural Desk",
            "blog-cat-8": "Executive Suites",
            "blog-t-8": "Handcrafted Executive Office Desks & Luxury Boardroom Furniture for Global Headquarters",
            "blog-exc-8": "Sculptural executive desks and monumental boardroom tables handcrafted from solid walnut, marble, and brushed brass for corporate leaders worldwide.",
            "blog-author-8": "<i class=\"far fa-user\"></i> Elizi Executive Studio",
            "blog-cat-9": "Wall Cladding",
            "blog-t-9": "Architectural Wooden Wall Cladding & Fluted Acoustic Paneling: Modern Luxury Trends",
            "blog-exc-9": "A comprehensive guide to bespoke wooden wall cladding, fluted architectural panels, concealed pivot doors, and integrated LED timber paneling.",
            "blog-author-9": "<i class=\"far fa-user\"></i> Elizi Architectural Desk",
            "blog-cat-10": "Villa Projects",
            "blog-t-10": "Turnkey Architectural Millwork & Custom Joinery for Luxury Villas in Dubai and London",
            "blog-exc-10": "Discover turnkey interior woodwork for luxury villas and penthouses in Dubai, London, and Europe. Custom joinery, walk-in closets, and architectural paneling.",
            "blog-author-10": "<i class=\"far fa-user\"></i> Elizi Export Division",
            "blog-cat-11": "Dining Collections",
            "blog-t-11": "Master-Crafted Solid Oak & Walnut Dining Tables: Artisanal Turkish Woodworking",
            "blog-exc-11": "Explore bespoke solid walnut and oak dining tables by Elizi Dizayn. Handcrafted natural live-edge and geometric tables designed for luxury dining spaces.",
            "blog-author-11": "<i class=\"far fa-user\"></i> Elizi Master Craftsmen",
            "blog-cat-12": "Wardrobes & Closets",
            "blog-t-12": "Bespoke Walk-in Closets & Luxury Dressing Room Systems for Prestigious Residences",
            "blog-exc-12": "Design bespoke walk-in closets and dressing rooms with Elizi Dizayn. Smoked glass, Italian hardware, leather-wrapped drawers, and custom timber cabinetry.",
            "blog-author-12": "<i class=\"far fa-user\"></i> Elizi Interior Architecture",
            "blog-cat-13": "Commercial Spaces",
            "blog-t-13": "Contemporary Reception Desks & Architectural Lobby Millwork for Corporate Buildings",
            "blog-exc-13": "Custom reception desks and welcoming lobby architecture by Elizi Dizayn. Handcrafted oak, integrated LEDs, and stone combinations for premier commercial spaces.",
            "blog-author-13": "<i class=\"far fa-user\"></i> Elizi Corporate Projects",
            "blog-cat-14": "Bathroom Vanities",
            "blog-t-14": "Custom Moisture-Resistant Wood Bathroom Vanities & Floating Credenzas",
            "blog-exc-14": "Discover bespoke moisture-resistant wood bathroom vanities by Elizi Dizayn. Fluted teak, oak, natural marble countertops, and integrated LED backlit mirrors.",
            "blog-author-14": "<i class=\"far fa-user\"></i> Elizi Bespoke Millwork",
            "blog-cat-15": "Industry Insights",
            "blog-t-15": "Why Global Interior Designers & Architects Source Bespoke Millwork from Turkey",
            "blog-exc-15": "Learn why leading interior design studios in the UK, UAE, and Europe partner with Turkish custom furniture manufacturers like Elizi Dizayn for high-end projects.",
            "blog-author-15": "<i class=\"far fa-user\"></i> Elizi Global Network",
            "blog-cat-16": "Materials Guide",
            "blog-t-16": "Premium Hardwood Guide for Bespoke Millwork: Walnut, Oak, and Natural Architectural Veneers",
            "blog-exc-16": "An architectural guide to selecting premium hardwoods for bespoke furniture and millwork: American Walnut, European Oak, and exotic natural timber veneers.",
            "blog-author-16": "<i class=\"far fa-user\"></i> Elizi Materials Studio",
            "blog-cat-17": "Design Studio Millwork",
            "blog-t-17": "Bespoke Furniture Manufacturing for Istanbul Interior Designers: Ankara Siteler Project Partnerships",
            "blog-exc-17": "Discover why leading Istanbul interior design studios partner with Ankara Siteler workshops for bespoke furniture manufacturing, site logistics, and turnkey millwork execution.",
            "blog-date-17": "<i class=\"far fa-calendar-alt\"></i> September 5, 2026",
            "blog-author-17": "<i class=\"far fa-user\"></i> Elizi Architectural Desk",
            "blog-cat-18": "Luxury Residential",
            "blog-t-18": "Architectural Millwork & Solid Wood Craftsmanship for Istanbul Luxury Penthouses & Bosphorus Mansions",
            "blog-exc-18": "Bespoke architectural millwork for Bosphorus waterfront mansions, luxury Istanbul penthouses, and private villas: moisture-resistant timber, custom libraries, and fluted paneling.",
            "blog-date-18": "<i class=\"far fa-calendar-alt\"></i> September 5, 2026",
            "blog-author-18": "<i class=\"far fa-user\"></i> Elizi Master Joiners",
            "blog-cat-19": "B2B Project Management",
            "blog-t-19": "Custom Millwork Partnership for Interior Design Studios: From CAD Drawings to Turnkey Installation",
            "blog-exc-19": "A comprehensive look at how we convert architects' DWG and 3D renderings into 1:1 shop drawings, material samples, precision Siteler craftsmanship, and on-site Istanbul installation.",
            "blog-date-19": "<i class=\"far fa-calendar-alt\"></i> September 4, 2026",
            "blog-author-19": "<i class=\"far fa-user\"></i> Elizi Project Coordination",
            "blog-cat-20": "Commercial Millwork",
            "blog-t-20": "Custom Wooden Furniture & Millwork for Istanbul Boutique Hotels, Restaurants & Commercial Venues",
            "blog-exc-20": "Heavy-duty bespoke reception desks, restaurant millwork, cocktail bars, and acoustic architectural paneling tailored for Istanbul's vibrant hospitality and commercial venues.",
            "blog-date-20": "<i class=\"far fa-calendar-alt\"></i> September 4, 2026",
            "blog-author-20": "<i class=\"far fa-user\"></i> Elizi Commercial Interiors",
            "blog-cat-21": "Timber Materials Guide",
            "blog-t-21": "Hardwood & Natural Veneer Selection Guide for Interior Architects: Siteler Craftsmanship Insight",
            "blog-exc-21": "An architectural guide to selecting American Walnut, rift-cut European Oak, smoked veneers, brass inlays, and kiln-dried solid hardwoods for prestigious interior designs.",
            "blog-date-21": "<i class=\"far fa-calendar-alt\"></i> September 3, 2026",
            "blog-author-21": "<i class=\"far fa-user\"></i> Elizi Materials Studio"
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
            "hero-title": "Ankara Özel Tasarım Mobilya<br><span class=\"hero-title-sub\">Yaşam Alanlarınıza Bütünsel Dokunuşlar</span>",
            "hero-desc": "Siteler Ankara'nın köklü ahşap işçiliği geleneğini modern mimari vizyonla harmanlıyoruz. Ankara özel tasarım mobilya ve üst düzey sabit ahşap imalatı alanında, yaşam alanlarınıza bütünsel dokunuşlar katan kapsamlı projeler tasarlıyor ve üretiyoruz.",
            "hero-btn-discover": "Projelerimizi Keşfet",
            "hero-btn-appointment": "Randevu Alın",
            "hl-title-1": "Bütünsel Çizimler",
            "hl-desc-1": "Mekanınızın tamamına veya belirli alanlarına en uygun mimari yerleşim planlarını hazırlıyoruz.",
            "hl-title-2": "Doğal Malzemeler",
            "hl-desc-2": "Birinci sınıf meşe, ceviz, doğal kaplama ve birinci kalite ahşap panel bileşenleri kullanıyoruz.",
            "hl-title-3": "Proje Bazlı Üretim",
            "hl-desc-3": "Tekli ürün satışı yerine, mekanınız için gerekli tüm sabit ve hareketli ahşap imalatını üstleniyoruz.",
            "coll-subtitle": "PREMIUM SEÇKİ",
            "coll-title": "Elizi Koleksiyonları",
            "port-desc-1": "Lobi ve karşılama alanları için özel üretilen masif meşe detaylı bankolar, gizli LED aydınlatmalı duvar panelleri ve bütünsel mimari çözümler.",
            "port-cat-1": "Karşılama Bankosu",
            "port-title-1": "Modern Karşılama Bankosu & Ahşap Panelleme",
            "port-desc-2": "Neme dayanıklı özel ahşap kaplamalar, entegre aydınlatmalı aynalar ve modern çanak lavabo konsollarıyla banyonuza özel lüks dokunuşlar.",
            "port-cat-2": "Banyo Projesi",
            "port-title-2": "Lüks Ahşap Banyo Dolabı & Konsol Tasarımı",
            "port-desc-3": "Oval hatlara sahip lüks ahşap makam masaları, bütünleşik mermer detaylar ve arka planda uyumlu kitaplık ile duvar paneli tasarımları.",
            "port-cat-3": "Makam Odası",
            "port-title-3": "Premium Yönetici Odası & Bespoke Makam Masası",
            "port-desc-4": "Akustik ahşap tavan kafesleri, entegre gizli aydınlatmalı saksılık seperatörler ve dinlenme alanı ada tezgahları ile çağdaş kurumsal çalışma alanları.",
            "port-cat-4": "Açık Ofis",
            "port-title-4": "Modern Açık Ofis & Ahşap Seperatör Mimarisi",
            "port-desc-5": "Özel üretim heykelsi konik ayaklı makam masası, pirinç detaylar, mermer duvar panelleri ve gizli LED aydınlatmalı çıtalı akustik ahşap duvar kaplamaları.",
            "port-cat-5": "Heykelsi Makam",
            "port-title-5": "Heykelsi Makam Masası & Akustik Ahşap Panelleme",
            "coll-btn-fullscreen": "<i class=\"fa-solid fa-expand\"></i> Fotoğrafı Büyüt",
            "coll-btn-cta": "Teklif & Keşif Alın",
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
            "process-subtitle": "Adım Adım Kusursuzluk",
            "process-title": "Özel Üretim Sürecimiz",
            "process-desc": "Ham ahşabın mekanınızla buluştuğu 5 adımlı şeffaf ve mimari yaklaşımımız.",
            "process-step-1-t": "Keşif & Dinleme",
            "process-step-1-d": "Mekanınızı, yaşam alışkanlıklarınızı ve tasarım beklentilerinizi yerinde değerlendiriyor, lazer hassasiyetiyle rölöve alıyoruz.",
            "process-step-2-t": "Tasarım & Modelleme",
            "process-step-2-d": "Ölçü, malzeme, doğal kaplama ve donanım alternatiflerini 3 boyutlu mimari projelendirme ile somutlaştırıyoruz.",
            "process-step-3-t": "Siteler Atölye İmalatı",
            "process-step-3-d": "Ankara Siteler'deki üretim merkezimizde, fırınlanmış keresteleri usta ellerde ve CNC hassasiyetinde işliyoruz.",
            "process-step-4-t": "Hassas Montaj",
            "process-step-4-d": "Kendi bünyemizdeki uzman montaj ekibimizle ürünleri mekanınıza tozsuz, kusursuz ve milimetrik olarak uyguluyoruz.",
            "process-step-5-t": "Son Kontrol & Teslim",
            "process-step-5-d": "Mekanik ayarları, yüzey cilasını ve fonksiyon testlerini tamamlayarak projenizi güvenle teslim ediyoruz.",
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
            "reviews-title": "Müşterilerimizin Değerlendirmeleri",
            "review-t-1": "\"Ofis dekorasyonumuzu yaptırmıştik. İşçilik kalitesi ilgi alaka hepsi gayet güzel. İsleri rast gitsin.\"",
            "review-t-2": "\"Evimiz için ahşap TV ünitesi ve kitaplık yaptırdık. Tam söz verdikleri günde, tertemiz monte ettiler. İlgi ve alakaları için teşekkürler.\"",
            "review-t-3": "\"Siteler'deki stüdyolarına gidip sipariş vermiştik. Salon takımı tam hayal ettiğimiz gibi oldu. Hem kaliteli hem de çok şık. Ellerinize sağlık.\"",
            "review-t-4": "\"Özel tasarım yemek odası takımı yaptırdık. Ağacın kalitesi ve detay işçilikleri gerçekten muazzam. Çok memnun kaldık, tavsiye ederim.\"",
            "blog-cat-22": "Fiyat & Maliyet Rehberi",
            "blog-t-22": "Ankara Özel Tasarım Mobilya Fiyatları: 2026 İmalat ve Malzeme Maliyet Rehberi",
            "blog-exc-22": "Ankara Siteler'de özel tasarım mobilya fiyatları nasıl belirlenir? Masif ahşap, doğal ceviz ve meşe kaplama, lake cila ve mekanik donanım maliyet analizi.",
            "blog-date-22": "<i class=\"far fa-calendar-alt\"></i> 4 Eylül 2026",
            "blog-author-22": "<i class=\"far fa-user\"></i> Elizi Proje Masası",
            "blog-cat-23": "İmalat Rehberi",
            "blog-t-23": "Özel Ölçü Mobilya Nasıl Yapılır? Siteler'de Mobilya Yaptırırken Nelere Dikkat Edilmeli?",
            "blog-exc-23": "Lazerli rölöve alımından 3D projelendirmeye, fırınlanmış kereste seçiminden Siteler atölye imalatına kadar özel ölçü mobilya sürecinin tüm püf noktaları.",
            "blog-date-23": "<i class=\"far fa-calendar-alt\"></i> 4 Eylül 2026",
            "blog-author-23": "<i class=\"far fa-user\"></i> Elizi Zanaat Masası",
            "blog-cat-24": "Malzeme Karşılaştırma",
            "blog-t-24": "Masif Ahşap mı MDF mi? Özel Tasarım Mobilyada Kullanılan Ahşap Türleri",
            "blog-exc-24": "Doğal masif ağaç ile yüksek yoğunluklu MDF panellerin nem dayanımı, boyutsal kararlılığı ve Amerikan ceviz, freze meşe, dişbudak türlerinin performans karşılaştırması.",
            "blog-date-24": "<i class=\"far fa-calendar-alt\"></i> 3 Eylül 2026",
            "blog-author-24": "<i class=\"far fa-user\"></i> Elizi Malzeme Laboratuvarı",
            "blog-cat-25": "Villa Projeleri",
            "blog-t-25": "Ankara'da Villa Mobilyası Yaptırma Rehberi: Çayyolu, İncek ve Ümitköy Özel Tasarım İmalat",
            "blog-exc-25": "Yüksek tavanlı salonlar, galeri boşlukları, özel şömine kütüphaneleri ve lüks giyinme odaları için Çayyolu ve İncek villalarına özel mimari ahşap imalatı.",
            "blog-date-25": "<i class=\"far fa-calendar-alt\"></i> 3 Eylül 2026",
            "blog-author-25": "<i class=\"far fa-user\"></i> Elizi Villa Proje Ekibi",
            "blog-cat-26": "Mutfak Mimarisi",
            "blog-t-26": "Ankara Özel Tasarım Mutfak Fiyatları ve Özel Ölçü Mutfak Dolabı Avantajları",
            "blog-exc-26": "Modüler hazır mutfaklara karşı özel ölçü mutfak dolaplarının fonksiyonel üstünlükleri, tavan boyu kiler sistemleri ve doğal ahşap ada tezgah fiyatları.",
            "blog-date-26": "<i class=\"far fa-calendar-alt\"></i> 2 Eylül 2026",
            "blog-author-26": "<i class=\"far fa-user\"></i> Elizi Mutfak Stüdyosu",
            "blog-cat-27": "Malzeme Rehberi",
            "blog-t-27": "Mutfak Dolabında Hangi Malzeme Kullanılmalı? Lake Mutfak mı Ahşap Mutfak mı?",
            "blog-exc-27": "İpek mat lake kapakların monolitik zarafeti ile fırınlanmış meşe ve ceviz kaplamaların sıcak dokusu. Çizilme, buhar ve temizlik performansı karşılaştırması.",
            "blog-date-27": "<i class=\"far fa-calendar-alt\"></i> 2 Eylül 2026",
            "blog-author-27": "<i class=\"far fa-user\"></i> Elizi Malzeme Masası",
            "blog-cat-28": "Kurumsal & Ofis",
            "blog-t-28": "Ankara Ofis Dekorasyonu ve Kurumsal Ahşap Ofis Mobilyaları İmalatı",
            "blog-exc-28": "Şirket prestijini yükselten heykelsi karşılama bankoları, açık ofisler için akustik ahşap seperatörler ve gizli kablolamalı toplantı masası çözümleri.",
            "blog-date-28": "<i class=\"far fa-calendar-alt\"></i> 1 Eylül 2026",
            "blog-author-28": "<i class=\"far fa-user\"></i> Elizi Kurumsal Grubu",
            "blog-cat-29": "Makam & Executive",
            "blog-t-29": "Ankara Yönetici Odası Tasarımı ve Özel Üretim Makam Masası Seçimi",
            "blog-exc-29": "Liderlik vizyonunu mekana taşıyan heykelsi masif ceviz makam masaları, mermer ve deri entegrasyonu, mimari arka kitaplık ve gizli şifreli bölmeler.",
            "blog-date-29": "<i class=\"far fa-calendar-alt\"></i> 1 Eylül 2026",
            "blog-author-29": "<i class=\"far fa-user\"></i> Elizi Executive Studio",
            "blog-cat-30": "Zanaat & Atölye",
            "blog-t-30": "Ankara Mobilya İmalatı: Siteler Özel Tasarım Mobilya Atölye ve Üretim Süreci",
            "blog-exc-30": "1950'lerden günümüze Siteler ahşap zanaatı geleneği. Kereste fırınlama, zıvana birleşimler, 5 eksenli CNC hassasiyeti ve el ile cila aşamaları.",
            "blog-date-30": "<i class=\"far fa-calendar-alt\"></i> 31 Ağustos 2026",
            "blog-author-30": "<i class=\"far fa-user\"></i> Elizi Siteler Atölyesi",
            "blog-cat-31": "Banyo Mimarisi",
            "blog-t-31": "Ankara Lüks Banyo Dolabı ve Özel Ahşap Banyo Mobilyaları Rehberi",
            "blog-exc-31": "Spa huzurunu banyolara taşıyan yüzen ahşap konsollar, neme dayanıklı termowood tik ve dişbudak kaplamalar, entegre porselen lavabo detayları.",
            "blog-date-31": "<i class=\"far fa-calendar-alt\"></i> 31 Ağustos 2026",
            "blog-author-31": "<i class=\"far fa-user\"></i> Elizi Banyo Masası",

            "footer-subbrand": "DİZAYN & MOBİLYA",
            "footer-desc": "Siteler'den yükselen zanaat,<br>evinizdeki kusursuz konfor.",
            "footer-h-links": "Hızlı Erişim",
            "footer-nav-home": "Elizi Ana Sayfa",
            "footer-nav-collections": "Özel Koleksiyonlar",
            "footer-nav-blog": "Blog & Rehberler",
            "footer-nav-contact": "Bize Ulaşın",
            "footer-h-hours": "Çalışma Saatleri",
            "footer-hours-1": "Pazartesi - Cumartesi: 08:30 - 18:30",
            "footer-hours-2": "Pazar: Kapalı",
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
            "blog-author-6": "<i class=\"far fa-user\"></i> Duvar Dekorasyonu",
            "blog-t-4": "Ankara Gömme Dolap ve Giyinme Odası Tasarım Rehberi",
            "blog-t-5": "Ankara Modern TV Ünitesi Modelleri: Ahşap ve Lüks Detaylar",
            "blog-t-6": "Ankara Ahşap Duvar Paneli Modelleri ile Duvar Dekorasyonu",
            "blog-date-1": "<i class=\"far fa-calendar-alt\"></i> 11 Ağustos 2026",
            "blog-date-2": "<i class=\"far fa-calendar-alt\"></i> 10 Ağustos 2026",
            "blog-date-3": "<i class=\"far fa-calendar-alt\"></i> 9 Ağustos 2026",
            "blog-date-4": "<i class=\"far fa-calendar-alt\"></i> 7 Ağustos 2026",
            "blog-date-5": "<i class=\"far fa-calendar-alt\"></i> 5 Ağustos 2026",
            "blog-date-6": "<i class=\"far fa-calendar-alt\"></i> 3 Ağustos 2026",
            "blog-date-7": "<i class=\"far fa-calendar-alt\"></i> 4 Eylül 2026",
            "blog-date-8": "<i class=\"far fa-calendar-alt\"></i> 3 Eylül 2026",
            "blog-date-9": "<i class=\"far fa-calendar-alt\"></i> 2 Eylül 2026",
            "blog-date-10": "<i class=\"far fa-calendar-alt\"></i> 1 Eylül 2026",
            "blog-date-11": "<i class=\"far fa-calendar-alt\"></i> 30 Ağustos 2026",
            "blog-date-12": "<i class=\"far fa-calendar-alt\"></i> 28 Ağustos 2026",
            "blog-date-13": "<i class=\"far fa-calendar-alt\"></i> 25 Ağustos 2026",
            "blog-date-14": "<i class=\"far fa-calendar-alt\"></i> 22 Ağustos 2026",
            "blog-date-15": "<i class=\"far fa-calendar-alt\"></i> 20 Ağustos 2026",
            "blog-date-16": "<i class=\"far fa-calendar-alt\"></i> 18 Ağustos 2026",
            "footer-address-text": "Önder, Serince Sk. 6/b, 06360 Altındağ / Ankara",
            "sidebar-author-title": "Elizi Zanaatkarlık",
            "sidebar-author-desc": "Ankara Siteler'in köklü ahşap işçiliği geleneğiyle, yaşam alanlarınıza özel sabit ve hareketli mobilyalar üretiyoruz.",
            "sidebar-cta-title": "Ücretsiz Keşif Alın",
            "sidebar-cta-desc": "Ankara içi ve uluslararası projelerinizde yerinde ölçü, malzeme seçimi ve bütünsel tasarım danışmanlığı için bize ulaşın.",
            "sidebar-cta-btn": "<i class=\"fa-solid fa-phone\"></i> +90 536 894 60 08",
            "sidebar-recent-title": "Öne Çıkan Başlıklar",
            "sidebar-other-title": "Diğer Rehberler",
            "post-breadcrumb-home": "Ana Sayfa",
            "post-breadcrumb-blog": "Blog",
            "post-read-time-5": "<i class=\"far fa-clock\"></i> 5 Dakika Okuma",
            "post-read-time-6": "<i class=\"far fa-clock\"></i> 6 Dakika Okuma",
            "post-read-time-7": "<i class=\"far fa-clock\"></i> 7 Dakika Okuma",
            "post-read-time-8": "<i class=\"far fa-clock\"></i> 8 Dakika Okuma",
            "blog-cat-7": "Mimari Ahşap",
            "blog-t-7": "Türkiye'de Lüks Özel Mobilya Üretimi: Küresel Projeler İçin Mimari Ahşap İmalatı",
            "blog-exc-7": "Elizi Dizayn'ın Türkiye'den dünyanın dört bir yanındaki lüks konut ve ticari projelere anahtar teslim mimari ahşap mobilya ihracatı.",
            "blog-author-7": "<i class=\"far fa-user\"></i> Elizi Mimarlık",
            "blog-cat-8": "Makam Odası",
            "blog-t-8": "El Yapımı Yönetici Makam Masaları ve Lüks Toplantı Masası Çözümleri",
            "blog-exc-8": "Kurumsal liderler için masif ceviz, mermer ve fırçalanmış pirinçle üretilen heykelsi makam masaları ve anıtsal toplantı masaları.",
            "blog-author-8": "<i class=\"far fa-user\"></i> Elizi Yönetici Stüdyosu",
            "blog-cat-9": "Duvar Kaplama",
            "blog-t-9": "Mimari Ahşap Duvar Giydirme ve Çıtalı Akustik Panelleme Trendleri",
            "blog-exc-9": "Özel ahşap duvar kaplamaları, akustik çıtalar, gizli pivot kapılar ve entegre LED ahşap paneller için kapsamlı mimari rehber.",
            "blog-author-9": "<i class=\"far fa-user\"></i> Elizi Mimarlık",
            "blog-cat-10": "Villa Projeleri",
            "blog-t-10": "Dubai ve Londra'da Lüks Villalar İçin Anahtar Teslim Ahşap İmalatı ve Mobilya",
            "blog-exc-10": "Dubai, Londra ve Avrupa'daki lüks villalar ve rezidanslar için anahtar teslim iç mimari ahşap işçiliği, giyinme odaları ve panelleme.",
            "blog-author-10": "<i class=\"far fa-user\"></i> Elizi İhracat Departmanı",
            "blog-cat-11": "Yemek Masaları",
            "blog-t-11": "Usta İşi Masif Meşe ve Ceviz Yemek Masaları: Geleneksel Ahşap Zanaatı",
            "blog-exc-11": "Elizi Dizayn'ın el yapımı masif ceviz ve meşe yemek masaları. Lüks yemek alanları için doğal kenarlı ve heykelsi masalar.",
            "blog-author-11": "<i class=\"far fa-user\"></i> Elizi Usta Zanaatkarlar",
            "blog-cat-12": "Giyinme Odası",
            "blog-t-12": "Lüks Konutlar İçin Özel Tasarım Giyinme Odası ve Gömme Dolap Sistemleri",
            "blog-exc-12": "Füme cam kapaklar, İtalyan donanımlar, deri kaplı çekmeceler ve özel aydınlatmalı lüks giyinme odası tasarımları.",
            "blog-author-12": "<i class=\"far fa-user\"></i> Elizi İç Mimari",
            "blog-cat-13": "Ticari Alanlar",
            "blog-t-13": "Modern Binalar İçin Çağdaş Karşılama Bankosu ve Lobi Ahşap Mimarisi",
            "blog-exc-13": "Özel üretim lüks karşılama bankoları ve lobi ahşap mimarisi. Masif meşe, gizli LED'ler ve taş kombinasyonları.",
            "blog-author-13": "<i class=\"far fa-user\"></i> Elizi Kurumsal Projeler",
            "blog-cat-14": "Banyo Projeleri",
            "blog-t-14": "Suya Dayanıklı Özel Ahşap Banyo Dolapları ve Yüzen Konsollar",
            "blog-exc-14": "Neme dayanıklı tik ve meşe kaplamalar, doğal mermer tezgahlar ve LED aydınlatmalı aynalarla banyonuza lüks dokunuşlar.",
            "blog-author-14": "<i class=\"far fa-user\"></i> Elizi Özel İmalat",
            "blog-cat-15": "Sektörel Bakış",
            "blog-t-15": "Uluslararası İç Mimarlar Neden Özel Ahşap İmalatını Türkiye'den Tedarik Ediyor?",
            "blog-exc-15": "İngiltere, Körfez ve Avrupa'daki lider iç mimarlık stüdyolarının yüksek kaliteli projeler için neden Elizi Dizayn'ı tercih ettiğini keşfedin.",
            "blog-author-15": "<i class=\"far fa-user\"></i> Elizi Global",
            "blog-cat-16": "Malzeme Rehberi",
            "blog-t-16": "Özel Ahşap İmalatında Birinci Sınıf Kereste Rehberi: Ceviz, Meşe ve Doğal Kaplamalar",
            "blog-exc-16": "Amerikan cevizi, Avrupa meşesi ve egzotik doğal kaplamalar hakkında mimarlar ve tasarımcılar için kapsamlı ahşap rehberi.",
            "blog-author-16": "<i class=\"far fa-user\"></i> Elizi Malzeme Laboratuvarı",
            "blog-cat-17": "Mimari Çözüm Ortaklığı",
            "blog-t-17": "İstanbul'daki İç Mimarlar İçin Ankara Siteler Özel Mobilya İmalatı ve Proje Ortaklığı",
            "blog-exc-17": "İstanbul merkezli iç mimarlık ofislerinin lüks rezidans ve villa projelerinde neden Ankara Siteler ahşap imalatını tercih ettiğini, şantiye lojistiğini ve atölye iş birliği avantajlarını keşfedin.",
            "blog-date-17": "<i class=\"far fa-calendar-alt\"></i> 5 Eylül 2026",
            "blog-author-17": "<i class=\"far fa-user\"></i> Elizi Mimari Masa",
            "blog-cat-18": "Rezidans & Yalı Projeleri",
            "blog-t-18": "İstanbul Lüks Rezidans ve Boğaz Yalıları İçin Mimari Ahşap ve Masif İşçilik",
            "blog-exc-18": "Boğaz hattındaki tarihi yalılar, Zorlu Center ve Levent rezidansları, Acarkent ve Göktürk villaları için neme dayanıklı özel ahşap kaplama, masif kütüphaneler ve mimari panelleme çözümleri.",
            "blog-date-18": "<i class=\"far fa-calendar-alt\"></i> 5 Eylül 2026",
            "blog-author-18": "<i class=\"far fa-user\"></i> Elizi Zanaat Ekibi",
            "blog-cat-19": "B2B Proje Yönetimi",
            "blog-t-19": "İç Mimarlık Ofislerine Özel Tasarım Çözüm Ortaklığı: Çizimden Montaja Ahşap İmalat Süreci",
            "blog-exc-19": "İç mimarların DWG ve 3D görsel projelerinin Siteler atölyemizde 1:1 detay çizimi, numune onayları, hassas CNC ve el işçiliğiyle üretilip İstanbul'da montajlanma aşamaları.",
            "blog-date-19": "<i class=\"far fa-calendar-alt\"></i> 4 Eylül 2026",
            "blog-author-19": "<i class=\"far fa-user\"></i> Elizi Proje Koordinasyon",
            "blog-cat-20": "Ticari Alan Ahşap",
            "blog-t-20": "İstanbul Butik Otel, Restoran ve Ticari Alanlar İçin Özel Ahşap Mobilya Üretimi",
            "blog-exc-20": "Karaköy, Beyoğlu, Nişantaşı ve Kadıköy'deki butik oteller, premium kafe ve kurumsal ofisler için yoğun kullanıma dayanıklı özel karşılama bankoları, bar ve seperatör imalatı.",
            "blog-date-20": "<i class=\"far fa-calendar-alt\"></i> 4 Eylül 2026",
            "blog-author-20": "<i class=\"far fa-user\"></i> Elizi Ticari Projeler",
            "blog-cat-21": "Malzeme & Detay Rehberi",
            "blog-t-21": "İç Mimarlar İçin Ahşap Malzeme ve Doğal Kaplama Seçim Rehberi: Siteler Uzmanlığı",
            "blog-exc-21": "İç mimarların projelerinde fark yaratan Amerikan ceviz, freze meşe, tütsülü okaliptüs kaplamalar, pirinç ve mermer birleşim detayları ile fırınlanmış masif ahşap seçim ipuçları.",
            "blog-date-21": "<i class=\"far fa-calendar-alt\"></i> 3 Eylül 2026",
            "blog-author-21": "<i class=\"far fa-user\"></i> Elizi Malzeme Laboratuvarı"
        }
    };

    const langToggle = document.getElementById('langToggle');
    
    function setLanguage(lang) {
        localStorage.setItem('eliziLang', lang);
        if (langToggle) {
            langToggle.textContent = lang === 'tr' ? 'EN' : 'TR';
            langToggle.setAttribute('aria-label', lang === 'tr' ? 'Switch to English' : 'Türkçe Diline Geç');
        }
        
        // Update document language attribute
        document.documentElement.lang = lang;

        // Dynamic Document Title based on route
        const path = window.location.pathname.toLowerCase();
        const isBlogIndex = path === '/blog/' || path === '/blog' || path.endsWith('/blog/index.html');
        const isHome = path === '/' || path === '/index.html' || path === '';

        if (lang === 'en') {
            if (isBlogIndex) {
                document.title = "Blog & Craftsmanship Guide | Elizi Dizayn & Mobilya";
            } else if (isHome) {
                document.title = "Elizi Dizayn & Mobilya | Bespoke Luxury Woodwork & Joinery";
            }
        } else {
            if (isBlogIndex) {
                document.title = "Blog & Zanaat Rehberi | Elizi Dizayn & Mobilya";
            } else if (isHome) {
                document.title = "Elizi Dizayn & Mobilya | Kişiye Özel Lüks Tasarımlar";
            }
        }
        
        // Translate all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Translate specific aria-labels
        const floatingPhone = document.querySelector('.floating-phone');
        if (floatingPhone) {
            floatingPhone.setAttribute('aria-label', lang === 'en' ? 'Call Us: +90 536 894 60 08' : 'Telefonla Arayın: +90 536 894 60 08');
        }

        const mobBtn = document.getElementById('mobileMenuBtn');
        if (mobBtn) {
            mobBtn.setAttribute('aria-label', lang === 'en' ? 'Toggle Navigation Menu' : 'Menüyü Aç');
        }

        const popupClose = document.getElementById('emailPopupClose');
        if (popupClose) {
            popupClose.setAttribute('aria-label', lang === 'en' ? 'Close' : 'Kapat');
        }

        // Translate input placeholders
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

    // --- Collections Hero Slider Controller ---
    const collSliderSection = document.getElementById('collections');
    const collSlides = document.querySelectorAll('.coll-hero-slide');
    const collIndicators = document.querySelectorAll('.coll-indicator-btn');

    if (collSlides.length > 0) {
        let currentSlide = 0;
        const totalSlides = collSlides.length;
        const slideDuration = 5500;
        let slideTimer = null;
        let isPaused = false;

        function updateSlide(index) {
            currentSlide = (index + totalSlides) % totalSlides;

            // Update Slides
            collSlides.forEach((slide, i) => {
                if (i === currentSlide) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });

            // Update Indicators
            collIndicators.forEach((btn, i) => {
                if (i === currentSlide) {
                    btn.classList.add('active');
                    const bar = btn.querySelector('.coll-indicator-bar');
                    if (bar) {
                        bar.style.transition = 'none';
                        bar.style.width = '0%';
                        void bar.offsetWidth; // Force reflow
                        bar.style.transition = `width ${slideDuration}ms linear`;
                        bar.style.width = '100%';
                    }
                } else {
                    btn.classList.remove('active');
                    const bar = btn.querySelector('.coll-indicator-bar');
                    if (bar) {
                        bar.style.transition = 'none';
                        bar.style.width = '0%';
                    }
                }
            });
        }

        function nextSlide() {
            updateSlide(currentSlide + 1);
        }

        function prevSlide() {
            updateSlide(currentSlide - 1);
        }

        function startTimer() {
            clearInterval(slideTimer);
            const activeIndicator = collIndicators[currentSlide];
            if (activeIndicator) {
                const bar = activeIndicator.querySelector('.coll-indicator-bar');
                if (bar) {
                    bar.style.transition = `width ${slideDuration}ms linear`;
                    bar.style.width = '100%';
                }
            }

            slideTimer = setInterval(() => {
                if (!isPaused) {
                    nextSlide();
                }
            }, slideDuration);
        }

        function resetTimer() {
            startTimer();
        }

        // Indicators Click
        collIndicators.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSlide = parseInt(btn.getAttribute('data-slide-to'), 10);
                if (!isNaN(targetSlide)) {
                    updateSlide(targetSlide);
                    resetTimer();
                }
            });
        });

        // Pause on Hover
        if (collSliderSection) {
            collSliderSection.addEventListener('mouseenter', () => {
                isPaused = true;
            });
            collSliderSection.addEventListener('mouseleave', () => {
                isPaused = false;
            });

            // Touch Swipe Support for Mobile
            let touchStartX = 0;
            let touchEndX = 0;

            collSliderSection.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            collSliderSection.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                const swipeDiff = touchEndX - touchStartX;
                if (Math.abs(swipeDiff) > 45) {
                    if (swipeDiff < 0) {
                        nextSlide();
                    } else {
                        prevSlide();
                    }
                    resetTimer();
                }
            }, { passive: true });
        }

        // Keyboard navigation when in viewport
        document.addEventListener('keydown', (e) => {
            if (!collSliderSection) return;
            const rect = collSliderSection.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            if (isInView) {
                if (e.key === 'ArrowLeft') {
                    prevSlide();
                    resetTimer();
                } else if (e.key === 'ArrowRight') {
                    nextSlide();
                    resetTimer();
                }
            }
        });

        // Start initial auto timer
        startTimer();
    }

    // --- Lightbox Gallery Modal ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeBtn = document.querySelector('.lightbox-close');

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
