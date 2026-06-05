document.addEventListener("DOMContentLoaded", function() {

    let totalItems = 0;

    //  Quantity Buttons (+ and -) 
    let boxes = document.querySelectorAll(".Amount-Selector, .Amount-Selector-Second");

    boxes.forEach(function(box) {
        let minus = box.querySelector(".Minus");
        let plus = box.querySelector(".Plus");
        let num = box.querySelector(".Value");

        let count = 0;

        minus.addEventListener("click", function() {
            if (count > 0) count--;
            num.innerHTML = count;
        });

        plus.addEventListener("click", function() {
            count++;
            num.innerHTML = count;
        });
    });

    //  Add to Cradle Buttons
    let addButtons = document.querySelectorAll(".js-add-to-cart, button");

    addButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            let wrapper = this.closest(".Adoption-wrapper");
            if (!wrapper) return;

            let qtyElement = wrapper.querySelector(".Value");
            let quantity = qtyElement ? parseInt(qtyElement.textContent) : 1;

           
            totalItems += quantity;
            
            
            let cartAmount = document.querySelector(".cartAmount");
            if (cartAmount) {
                cartAmount.textContent = totalItems;
            }

            console.log(`Added ${quantity} items - Total in cart: ${totalItems}`);
        });
    });

});


let ContactForm = document.getElementById('ContactForm')



ContactForm.addEventListener('submit', (Event) => {
Event.preventDefault();

let output = `<p>Thank you </p>` 

document.querySelector('.FormMessage') .innerHTML = output

let FormMessageId = new bootstrap.Modal(document.getElementById("FormMessageId"))
FormMessageId.show();



});