const btnTheme = document.querySelector('#btn-theme')
const iconTheme = btnTheme.querySelector('i');

export function darkTheme() {
    btnTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    
        if(document.body.classList.contains('dark-theme')) {
            iconTheme.className = 'bx bxs-sun';
        }else {
            iconTheme.className = 'bx bxs-moon';
        }
    })
};
