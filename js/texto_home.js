document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('show-more-btn');
    const partialText = document.querySelector('.partial-text');
    const fullText = document.querySelector('.full-text');

    showMoreBtn.addEventListener('click', function() {
        if (fullText.style.display === 'none') {
            fullText.style.display = 'block';
            partialText.style.display = 'none';
            showMoreBtn.textContent = 'Mostrar menos';
        } else {
            fullText.style.display = 'none';
            partialText.style.display = 'block';
            showMoreBtn.textContent = 'Mostrar mais';
        }
    });
});