let totalPrice =0;
function ClickOnBtn(target){
  const addedItemContainer = document.getElementById('added-item'); //create class container

  const itemName = (target.parentNode.childNodes[3].innerText);

  const li = document.createElement('li');
  li.innerText = itemName;
  addedItemContainer.appendChild(li);

 const price = target.parentNode.childNodes[5].innerText.split(" ")[1];

 
 totalPrice = parseInt(totalPrice) + parseInt(price);
 
 document.getElementById('total-price').innerText = totalPrice;


     // discount and total after discount
     let discount = 0;
     let totalAfterDiscount = totalPrice;

     if (totalPrice > 200) {
         discount = totalPrice* 0.2; 
         totalAfterDiscount -= discount;
     }

     document.getElementById('discount').innerText = discount.toFixed(2);
     document.getElementById('total-after-discount').innerText = totalAfterDiscount.toFixed(2);




     function resetValues() {   //reset values function
        totalPrice = 0;
        document.getElementById('added-item').innerHTML = '';
        document.getElementById('total-price').innerText = '00';
        document.getElementById('discount').innerText = '0.00';
        document.getElementById('total-after-discount').innerText = '00';
    }

}