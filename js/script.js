// Modal Win

const square = document.querySelectorAll('[data-square]')

const btn = document.querySelectorAll('[data-btn-close]')

const modalBg = document.querySelectorAll('[data-btn]')

square.forEach(function(item){
    item.addEventListener('click', function(){
        this.dataset.square
        const mSquare = document.querySelector('#' + this.dataset.square)
        mSquare.classList.remove('hidden')

        mSquare.querySelector('.modal__square').addEventListener('click', function(e){
            e.stopPropagation();
    })
})

btn.forEach(function(item){
    item.addEventListener('click', function(){
        const mSquare = this.closest('[data-btn]')
        mSquare.classList.add('hidden')
        
        })
    })
})

modalBg.forEach(function(item){
    item.addEventListener('click', function(){
        this.classList.add('hidden')
    })
})

// Checkbox Even

const even = document.querySelectorAll('.row :nth-child(even)');

const checkbox = document.querySelector('.checkbox')

checkbox.addEventListener('click' , function(){
    even.forEach(function(item){
        item.classList.toggle('square-check')
    })
})