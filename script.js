
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