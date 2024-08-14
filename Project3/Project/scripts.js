document.addEventListener('DOMContentLoaded', (event) => {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextSlide() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000);
});
function scheduleService(service) {
    document.querySelector('.schedule-form').style.display = 'block';
    document.getElementById('service').value = service;
}

document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your appointment has been scheduled!');
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        document.getElementById('form-message').textContent = 'Thank you for contacting us!';
    } else {
        document.getElementById('form-message').textContent = 'Please fill in all fields correctly.';
    }
});


