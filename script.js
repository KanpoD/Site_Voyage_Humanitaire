document.addEventListener('DOMContentLoaded', function() {

    var cardToggle = document.getElementById('card__toggle');
    var btnShower = document.getElementById("btn_shower");
    var open = false;

    function ShowMore(){
        open = true;
        cardToggle.classList.remove('hidden');
        btnShower.innerHTML = "Masquer les voyages"
    }

    function CloseDiv(){
        open = false;
        cardToggle.classList.add('hidden');
        btnShower.innerHTML = "Afficher plus de voyage"
    }

    btnShower.onclick = function(){
        if(!open){
            ShowMore();
        }else{
            CloseDiv();
        }
    }



















    console.log('Le DOM est chargé. :) ');
  });