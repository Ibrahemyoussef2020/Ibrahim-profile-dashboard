const storageMode = localStorage.getItem('mode') || 'dark-mode';

const root = document.getElementsByTagName('html')[0],
        toggleMode = document.querySelector('.custom-toggle-checkbox')


        if (storageMode) {
            root.classList.add(storageMode);

            if (storageMode === 'dark-mode') {
                toggleMode.checked = true;
            }else{
                toggleMode.checked = false;
            }
        }

toggleMode.addEventListener('click' , _ =>{

    root.classList.toggle('dark-mode');

    if (root.classList.contains('dark-mode')) {
        toggleMode.checked = true
        return  localStorage.setItem('mode', 'dark-mode');
    }
        toggleMode.checked = false
        localStorage.setItem('mode', 'light-mode');
})


/************************* */

const headerToggle = document.querySelector('.header__toggle'),
        dropToggleMenu = document.querySelector('.mode-settings');


        dropToggleMenu.addEventListener('click',e=>{
            headerToggle.classList.toggle('drop-mode')
        })