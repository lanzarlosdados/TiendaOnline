function traerDatos(){
    fetch('json\productos.json')
    .then(res => res.json)
    .then(datos => {
        console.log(datos)
    })
}