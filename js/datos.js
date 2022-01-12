const btnProductos = document.getElementById('agregarProductos');

btnProductos.addEventListener('click', (event) => {
    event.preventDefault();
    fetch('json/productos.json')
    .then(res => res.json())
    .then(datos => {
        mostrarDatos(datos);
    }) 
}
    );

    function mostrarDatos(datos){
 
    for (let valor of datos) {
    
        sectionLentes.innerHTML +=  `
              <div class="lentes">
                   <img src="${valor.rutaImg}" alt="" class="img_lentes">
                  <div class="content_text">
                    <p class="lentes_text">${valor.nombre}</p>
                    <p class="lentes_precio">${valor.precio}</p>
                  </div>
                  <div class="content_star">
                       <div class="star icon-star"></div>
                       <div class="star icon-star"></div>
                       <div class="star icon-star"></div>
                       <div class="star icon-star"></div>
                       <div class="star icon-star"></div>
                  </div>
                  <div class="cart_plus icon-cart-plus"></div>
               </div>
    `;

    }
    
    

    }

