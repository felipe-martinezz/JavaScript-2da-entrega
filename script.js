let promedioFinal

function CalcularPromedio() {
    let v1 = document.getElementById("n1").value
    let v2 = document.getElementById("n2").value
    let v3 = document.getElementById("n3").value
    let v4 = document.getElementById("n4").value
    let v5 = document.getElementById("n5").value
    let v6 = document.getElementById("n6").value
    
    let promedioFinal = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3)+parseFloat(v4)+parseFloat(v5)+parseFloat(v6))/6

    document.getElementById("promedio").innerHTML = promedioFinal

    if(isNaN(v1) || isNaN(v2) || isNaN(v3) || isNaN(v4) || isNaN(v5) || isNaN(v6)) {
        alert("Por favor ingrese una nota valida")
    }

    if(promedioFinal >= 6) {
        alert("Aprobaste el año campeón!")
    }else(promedioFinal < 6); {
        alert("Desaprobaste el año campeón :(")
    }
}

