function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// Faq section feature
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const accordionItem = this.parentElement;
        const icon = this.querySelector('.icon');

        // Close open items
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                item.querySelector('.icon').classList.replace('fa-minus', 'fa-plus');
            }
        });

        // Toggle current item
        const isActive = accordionItem.classList.contains('active');
        accordionItem.classList.toggle('active');
        icon.classList.replace(isActive ? 'fa-minus' : 'fa-plus', isActive ? 'fa-plus' : 'fa-minus');
    });
});

// Carousel
const track = document.querySelector('.carousel-track');
        const nextButton = document.querySelector('.next-button');
        const nextButton1 = document.querySelector('.next-button-1');
        const slides = document.querySelectorAll('.carousel-slide');
        let currentIndex = 0;
        let autoScrollInterval;
        let slideWidth;

        function updateSlideWidth() {
            slideWidth = slides[0].offsetWidth + 20;
        }

        function goToSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            
            track.style.transform = `translateX(-${index * slideWidth}px)`;
            currentIndex = index;
        }

        function nextSlide() {
            goToSlide(currentIndex + 1);
        }

        function startAutoScroll() {
            autoScrollInterval = setInterval(nextSlide, 5000);
        }

        // Handle window resize
        window.addEventListener('resize', () => {
            updateSlideWidth();
            goToSlide(currentIndex);
        });

        // Initialize
        // updateSlideWidth();
        // startAutoScroll();

        // Button functionality
        nextButton.addEventListener('click', () => {
            clearInterval(autoScrollInterval);
            nextSlide();
            startAutoScroll();
        });

  
// Testimonial gallery
document.addEventListener('DOMContentLoaded', () => {
    const gallerySlides = document.querySelector('.gallery-slides');
    const startButtons = document.querySelectorAll('.start-btn');

    //hover
    gallerySlides.addEventListener('mouseenter', () => {
        gallerySlides.style.animationPlayState = 'paused';
    });

    
    gallerySlides.addEventListener('mouseleave', () => {
        gallerySlides.style.animationPlayState = 'running';
    });


});

       
       