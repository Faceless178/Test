// Modal Win

let square = document.querySelectorAll('[data-square]');

let btn = document.querySelectorAll('[data-btn-close]');

let modalBg = document.querySelectorAll('[data-btn]');

square.forEach(function(item){
    item.addEventListener('click', function(){
        this.dataset.square
        const mSquare = document.querySelector('#' + this.dataset.square);
        mSquare.classList.remove('hidden');
        mSquare.querySelector('.modal__square').addEventListener('click', function(e){
            e.stopPropagation();
    })
})


btn.forEach(function(item){
    item.addEventListener('click', function(){
        const mSquare = this.closest('[data-btn]');
        mSquare.classList.add('hidden');
        })
    })
})


modalBg.forEach(function(item){
    item.addEventListener('click', function(){
        this.classList.add('hidden');
    })
})

// Checkbox Even

let checkbox = document.querySelector('#check');
checkbox.addEventListener('click' , function(){
    let even = document.querySelectorAll('.row :nth-child(2n)');
    even.forEach(function(item){
        item.classList.toggle('square-check');
    })
})

// Create new elem

function createSquare(){
    let row = document.querySelector('.row');
    let div = document.createElement('div');
    let span = document.createElement('span');
    let squareLenght = document.querySelectorAll('.square').length;
    let number = squareLenght + 1;

    div.classList.add('square');
    div.setAttribute("data-square", `square-${number}`);

    span.classList.add('square__number');
    span.innerText = number;

    div.append(span);
    row.append(div);

    if( checkbox.checked && number %2==0) {
        div.classList.add('square-check');
    }

    square = document.querySelectorAll('[data-square]');
}

// Create new popap

function createPopap(){
    let modal = document.querySelector('.modal');
    let mBg = document.createElement('div');
    let mSquare = document.createElement('div');
    let btnClose = document.createElement('div');
    let mText = document.createElement('span');
    let modalSquareLenght = document.querySelectorAll('.modal__square').length;
    let number = modalSquareLenght + 1;

    mBg.classList.add('modal__bg');
    mBg.classList.add('hidden');
    mBg.setAttribute('id', `square-${number}`)
    mBg.setAttribute('data-btn','');

    mSquare.classList.add('modal__square');

    btnClose.classList.add('btn');
    btnClose.setAttribute("data-btn-close", `btn-${number}`)
    btnClose.innerText = 'x';

    mText.classList.add('modal__text');
    mText.innerText = 'Выбран ' + number + ' квадрат!';

    modal.append(mBg);

    mBg.append(mSquare);

    mSquare.append(btnClose);
    mSquare.append(mText);

    modalBg = document.querySelectorAll('[data-btn]');
    btn = document.querySelectorAll('[data-btn-close]');

}


const btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', createSquare);
btn1.addEventListener('click', createPopap);

btn1.addEventListener('click', ()=>{
    square.forEach(function(item){
        item.addEventListener('click', function(){
            this.dataset.square
            const mSquare = document.querySelector('#' + this.dataset.square);
            mSquare.classList.remove('hidden');
            mSquare.querySelector('.modal__square').addEventListener('click', function(e){
                e.stopPropagation();
        })
    })
    btn.forEach(function(item){
        item.addEventListener('click', function(){
            const mSquare = this.closest('[data-btn]');
            mSquare.classList.add('hidden');
            
            })
        })
    })
    modalBg.forEach(function(item){
        item.addEventListener('click', function(){
            this.classList.add('hidden');
        })
    })
    
    
})

