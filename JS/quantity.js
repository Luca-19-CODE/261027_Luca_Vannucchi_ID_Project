document.addEventListener("DOMContentLoaded", function() {

    let boxes = document.querySelectorAll(".Amount-Selector, .Amount-Selector-Second");

    boxes.forEach(function(box) {
        
        let minus = box.querySelector(".Minus");
        let plus = box.querySelector(".Plus");
        let num = box.querySelector(".Value");

        let count = 0;

        minus.addEventListener("click", function decrease() {
            if (count > 0) count--;
            num.innerHTML = count;
        });

        plus.addEventListener("click", function increase() {
            count++;
            num.innerHTML = count;
        });
    });

   });
