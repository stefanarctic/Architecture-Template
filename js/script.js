
// Disable scrollbar

const toggleOverflow = () => {
    if(document.body.style.overflow === 'hidden')
        document.body.style.overflow = '';
    else
        document.body.style.overflow = 'hidden';
}

document.addEventListener('keydown', e => {
    if(e.ctrlKey && e.key === 'k')
    {
        toggleOverflow();
    }
})

// const timeouts = [];

// document.querySelector("#our-work > div > div.col-left > div.row1.rect.rect1 > div > h1")

$(document).ready(() => {

    // document.querySelector("#our-work > div > div.col-left > div.row1.rect.rect1 > div > h1");
    // const rects = document.querySelectorAll('.rect');
    // for(let i = 0; i < rects.length; i++)
    // {
    //     const h1 = rects[i].querySelector('h1');
    //     const p = rects[i].querySelector('p');
    //     const size = (rects[i].style.width * rects[i].style.height) / 2744;
    //     h1?.style.setProperty('fontSize', `${size}px`);
    // }

    if($(this).scrollTop() > 100)
    {
        $('nav').css('backdrop-filter', 'blur(2px)');
        $('nav').css('background', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0))');
    }
})

// Change header on scroll
$(document).scroll(() => {
    // $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
    if($(this).scrollTop() <= 100)
    {
        $('nav').css('backdrop-filter', `blur(${0.2 * ($(this).scrollTop() / 10)}px)`);
        $('nav').css('background', `linear-gradient(to bottom, rgba(0, 0, 0, ${$(this).scrollTop() / 100 * 0.74}), rgba(0, 0, 0, 0))`);
    }
    else
    {
        $('nav').css('backdrop-filter', 'blur(2px)');
        $('nav').css('background', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0))');
    }

    // timeouts.map(to => clearTimeout(to));
    // timeouts.push(setTimeout(() => {
    //     // $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
    //     // $('nav').css('backdrop-filter', 'blur(2px)');
    //     // $('nav').css('background')
    // }, 1000));
    // if($(this).scrollTop() > 100)
    // {
    //     timeouts.map(to => clearTimeout(to));
    //     timeouts.push(setTimeout(() => {
    //         $("nav").toggleClass("scrolled", true);
    //     }, 1000));
    // }
    // else
    // {
    //     timeouts.map(to => clearTimeout(to));
    //     timeouts.push(setTimeout(() => {
    //         $("nav").toggleClass("scrolled", true);
    //     }, 1000));
    // }
})
