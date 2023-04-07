
(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equals = document.querySelector('.button-equal');
    let clears = document.querySelector('.button-clear');



    buttons.forEach(function(button){
       button.addEventListener('click', function(e){
           let value = e.target.dataset.num;
           screen.value += value;
       });
    });

    // we arw egayegiua

    equals.addEventListener('click', function(results){

    })
})();