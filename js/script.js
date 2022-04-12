

$(document).ready(function () {

    const header = document.querySelector('#header_area');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // sub-menu

    $('.sub_menu_link').click(function () {
       $('.sub_menu_child').toggle();
    });


});