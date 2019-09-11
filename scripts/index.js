function handleLoad() {
    var buttons = document.querySelectorAll('.tabsft__btn');
    var items = document.querySelectorAll('.tabsft__item');

    var prev = null;
    var prevIndex = null;

    function iterateButtons (btn, index) {
        
        function handleClick(){
            if(prev != null){
                prev.classList.remove('btnline--active');                
                items[prevIndex].classList.remove('tabsft__item--active');
            }
            btn.classList.add('btnline--active');
            items[index].classList.add('tabsft__item--active');

            prev = btn;
            prevIndex = index;
        }

        btn.addEventListener('click', handleClick);
    }
    buttons.forEach(iterateButtons);

    
    var range = document.querySelector('.input__range');
    var specifications = document.querySelector('.range__img');
    range.value = 0;
    function handleRange () {
        specifications.style.opacity = range.value / 100;
    }
    range.addEventListener('input', handleRange);

   
}

window.addEventListener('load', handleLoad);