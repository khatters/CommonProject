// JavaScript to add the "active" class to the current page link
document.addEventListener('DOMContentLoaded', function() {
    var currentPath = window.location.pathname;

    // Find the link with the corresponding href and add the "active" class
    var currentLink = document.querySelector('.navbar a[href="' + currentPath + '"]');
    if (currentLink) {
        currentLink.classList.add('active');
    }
});
