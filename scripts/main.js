function handleLoad() {
    var buttons = document.querySelectorAll('.tabsft__btn');
    var items = document.querySelectorAll('.tabsft__item');
    console.log(buttons);
    function handleClick(event){
        console.log(event);
    }

    buttons.addEventListener('click', handleClick);
    
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
    
}