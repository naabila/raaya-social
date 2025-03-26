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