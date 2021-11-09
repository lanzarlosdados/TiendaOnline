const addToShopingCartButtons = document.querySelectorAll('.cart_plus');
addToShopingCartButtons.forEach((addToShopingCartButton) => {
    addToShopingCartButton.addEventListener('click', addToCartClicked);
});
function addToCartClicked(event) {
    const button = event.target;
    const lentes = button.closest('.lentes');
    const lentesTitle = lentes.querySelector('.lentes_text').textContent;
    const lentesPrice = lentes.querySelector('.lentes_precio').textContent;
    const lentesImage = lentes.querySelector('.img_lentes').src;

    addItemToShopingCart(lentesTitle, lentesPrice, lentesImage);

    Swal.fire({
        title: 'El producto se ha agregado al carrito',
        icon:'success',
        padding: '1rem',
        timer:2000,
        timerProgressBar:true,
        showConfirmButton:false,
        toast: true,
        position: 'bottom'
    });
}

function addItemToShopingCart(lentesTitle, lentesPrice, lentesImage){

    const elementTitle = contentCartItems.getElementsByClassName('title_shoping_cart');

    for(let i = 0; i < elementTitle.length; i++){

        if(elementTitle[i].innerText === lentesTitle){
           const elementCantidad = elementTitle[i].closest('.row_cart_item').querySelector('.cantidad_shoping_cart');
           elementCantidad.value++;
           updateShopingCartTotal();
           return;
        }
        

    }


    const rowCartItem = document.createElement('div');
    const shopingCartContent = `
    <div class="row_cart_item">
                              <div>
                                   <img src=${lentesImage} alt="" class="img_shoping_cart" >
                                   <h6 class="title_shoping_cart">${lentesTitle}</h2>
                              </div> 
                              
                              <div>
                              <h6 class="price_shoping_cart">${lentesPrice}</h2>
                              </div>
                              
                              <div>
                                   <input value="1" type="number" class="cantidad_shoping_cart">
                              </div>

                              <div>
                                    <button type="button" class="delete_shoping_cart">X</button>
                              </div>
    </div>`;

    rowCartItem.innerHTML = shopingCartContent;

    contentCartItems.appendChild(rowCartItem);

    rowCartItem.querySelector('.delete_shoping_cart').addEventListener('click',deleteItemShopingCart);

    rowCartItem.querySelector('.cantidad_shoping_cart').addEventListener('change',actualizarCantidadItem);
    
    updateShopingCartTotal()
}
function updateShopingCartTotal(){
    let total= 0;
    
    const totalShopingCart = document.querySelector('.shoping_cart_total');
    const shopingCartItems = document.querySelectorAll('.row_cart_item');

    shopingCartItems.forEach(shopingCartItem =>{

        const priceShopingCartItemElement= shopingCartItem.querySelector('.price_shoping_cart');
        const priceShopingCartItem = Number(priceShopingCartItemElement.textContent.replace('$',''));

        const cantidadShopingCartElement = shopingCartItem.querySelector('.cantidad_shoping_cart');
        const cantidadShopingCart = Number(cantidadShopingCartElement.value);
        
        total += priceShopingCartItem * cantidadShopingCart;

    });
    
    totalShopingCart.innerHTML =  `$ ${total.toFixed(2)}`;
}

function deleteItemShopingCart(event){
    
    const btnItemDelete = event.target;

    btnItemDelete.closest('.row_cart_item').remove();
    updateShopingCartTotal();
    
}

function actualizarCantidadItem(event){

    const valueCantidadItem = event.target;
    if(valueCantidadItem.value <= 0){
        valueCantidadItem.value = 1
    }
    updateShopingCartTotal();
}


var btnCar = document.getElementById('icon_cart');
var btnCerrar = document.getElementById('cerrar-carrito');
var btnCerrarToast = document.getElementById('cerrar-carrito-toast');

var carContainer = document.getElementById('shopingCartContainer');

btnCerrar.addEventListener('click',function(){
    carContainer.classList.toggle("show-cart");
});
btnCar.addEventListener('click',function(){
    carContainer.classList.toggle("show-cart");
});
btnCerrarToast.addEventListener('click',function(){
    carContainer.classList.toggle("show-cart");
});
