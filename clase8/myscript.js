var name= prompt("Cual es tu nombre?")
var age= prompt("Que edad tenes?")
var edad= Number(age)
var gender= prompt("Con que genero te identificas?")
var isMember=prompt("Sos miembro del club?")
var thirsty= prompt("Tenes sed?")
var drinkName= prompt("Cual es tu trago favorito?")

var respuesta=prompt("Como te sentis hoy?")
if (respuesta==="enojada") {
  alert("Quema todo")
}
var numeroSecreto= prompt("Cual es el numero secreto?")
if (numeroSecreto !=="3"){
  alert("Te equivocaste!")
}
numeroSecreto==="3"

var password=prompt("Ingrese su password")
if (password ==="gatites") {alert("Bienvenides!")

} else { window.location = "http://www.google.com"

}

var edad= prompt("Cual es tu edad?")
if (edad <=0)
  {alert("No podes cumplir en negativo")

} else {alert("Feliz cumple! Adelante, eres bienvenido!")
if (edad % 2 !== 0) {alert("Tu edad es impar")
}
}
var numero=prompt("Adivina el numero")
var secretNumber=Number(numero)
if (secretNumber===8) {alert("Adivinaste")

} else { alert("Raja de aca")

}

if (drinkName!=="cafe") {alert("Si"+name+"un"+drinkName+"viniendo")

} else {alert("Raja de aca")

}
