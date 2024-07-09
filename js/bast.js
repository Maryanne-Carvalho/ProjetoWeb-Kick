document.addEventListener('DOMContentLoaded', function() {
    const recommendations = document.querySelectorAll('.recommendation');

    recommendations.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = item.getAttribute('data-src');
            const fullscreenVideo = document.createElement('div');
            fullscreenVideo.classList.add('video-fullscreen');
            fullscreenVideo.innerHTML = `
                <iframe src="${videoSrc}" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div class="close-button">Fechar</div>
            `;
            document.body.appendChild(fullscreenVideo);

            const closeButton = fullscreenVideo.querySelector('.close-button');
            closeButton.addEventListener('click', function() {
                document.body.removeChild(fullscreenVideo);
            });
        });
    });
});