document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('authModal');
    const openLoginModal = document.getElementById('openLoginModal');
    const closeModal = document.getElementById('closeModal');
    const formContainer = document.getElementById('formContainer');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const profileLink = document.querySelector('.profile-link');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Open the modal
    openLoginModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
    });

    // Close the modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Switch to register panel
    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        formContainer.classList.add('show-register');
    });

    // Switch to login panel
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        formContainer.classList.remove('show-register');
    });

    //profile dropdown
    profileLink.addEventListener('click', function (e) {
        e.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function (e) {
        if (!profileLink.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});
