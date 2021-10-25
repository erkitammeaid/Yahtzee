const diceDivs = document.querySelectorAll('.dice');
diceDivs.forEach( el => {
    el.addEventListener('click', e => {
        if (el.dataset.state == 'active'){
            el.dataset.state = 'inactive'
        } else{
            el.dataset.state = 'active'
        }
    })
})

let rollCount = 0

function rng() {
    if (rollCount <= 3){
        rollCount++
        diceDivs.forEach( function(el){
            if (el.dataset.state == 'active'){
                var x = Math.floor((Math.random() * 6) + 1);
                el.innerText = x ;
            }
        });
    }
}
