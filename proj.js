
(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clears = document.querySelector('.btn-clear');
    let equals = document.querySelector('.btn-equal');

    buttons.forEach(function(button){
       button.addEventListener('click', function(e){
           let value = e.target.dataset.num;
           screen.value += value;
       })
    });

   
    equals.addEventListener('click', function(e){ 
        if (screen.value === '') {
            screen.value = " ";
        }
        else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
        
    })
    
    clears.addEventListener('click', function(e){
        screen.value ="";
    })
})();