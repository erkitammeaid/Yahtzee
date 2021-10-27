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
                diceState[el.dataset.index].value = x
            }
        });
    }
}

let diceState = [
    {
        value: undefined,
        status: 'active'
    },
    {
        value: undefined,
        status: 'active'
    },
    {
        value: undefined,
        status: 'active'
    },
    {
        value: undefined,
        status: 'active'
    },
    {
        value: undefined,
        status: 'active'
    },
]

function scoreCounter(index){
    return diceState.reduce((counter, el)=>{
        el.value == index ? counter++ : counter;
        return counter;
    }, 0) * index;
}

const scoreCells = document.querySelectorAll('.score');
scoreCells.forEach( el => {
    el.addEventListener('click', e => {
        if (el.dataset.scoreType == 'count'){
            el.innerText = scoreCounter(el.dataset.scoreIndex)
        }
    })
})
