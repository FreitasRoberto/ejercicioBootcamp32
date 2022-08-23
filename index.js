const  nombre  =  "Roberto"
const  apellido  =  "Freitas"

 datos objeto =  {
    nombre ,
    apellido
}

sessionStorage.setItem("datos", JSON.stringify(datos))
localStorage.setItem("datos", JSON.stringify(datos))

const  ahora  =  nueva  Fecha ( )
documento.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`