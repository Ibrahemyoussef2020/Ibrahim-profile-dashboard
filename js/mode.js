const root = document.getElementsByTagName('html')[0],
        mode = document.getElementById('app-mode');

        mode.addEventListener('click' , e =>{
            root.classList.toggle('dark-mode');
        })
