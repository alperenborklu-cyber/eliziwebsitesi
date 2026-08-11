document.addEventListener('DOMContentLoaded', () => {

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
});
