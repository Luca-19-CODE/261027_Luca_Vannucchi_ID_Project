document.addEventListener("DOMContentLoaded", function() {

    // Select all quantity boxes
    let boxes = document.querySelectorAll(".Amount-Selector, .Amount-Selector-Second");

    boxes.forEach(function(box, index) {
        
        let minus = box.querySelector(".Minus");
        let plus = box.querySelector(".Plus");
        let num = box.querySelector(".Value");

        // Give each box a unique ID for localStorage
        const boxId = `quantity-${index}`;

        // Load saved value from localStorage (or start at 0)
        let count = parseInt(localStorage.getItem(boxId)) || 0;
        num.innerHTML = count;

        // Minus Button
        minus.addEventListener("click", function() {
            if (count > 0) {
                count--;
                num.innerHTML = count;
                localStorage.setItem(boxId, count);   // Save
            }
        });

        // Plus Button
        plus.addEventListener("click", function() {
            count++;
            num.innerHTML = count;
            localStorage.setItem(boxId, count);       // Save
        });
    });

});