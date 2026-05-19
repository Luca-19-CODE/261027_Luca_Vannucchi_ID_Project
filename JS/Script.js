let cartTotal = 0;

document.addEventListener("DOMContentLoaded", function() {

    let boxes = document.querySelectorAll(".Amount-Selector, .Amount-Selector-Second");

    boxes.forEach(function(box) {
        
        let minus = box.querySelector(".Minus");
        let plus = box.querySelector(".Plus");
        let num = box.querySelector(".Value");

        let count = 0;

        minus.addEventListener("click", function() {
            if (count > 0) count--;
            num.textContent = count;
        });

        plus.addEventListener("click", function() {
            count++;
            num.textContent = count;
        });
    });

   });