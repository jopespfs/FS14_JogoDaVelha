let vez = 0;
let jogadas = 0;
let victory = false;
// let quemComeca = 0;

function marcarCasa(){
    let casa = event.target;
    if(victory == false){
        if(!casa.classList.contains("bola") && !casa.classList.contains("xis") && jogadas <= 9){
            if(vez == 0){
                casa.classList.add("bola");
                casa.setAttribute("value",0)
                vez = 1
            }else{
                casa.classList.add("xis");
                casa.setAttribute("value",1)
                vez = 0
            }
            jogadas += 1;
        }else{
            if(jogadas == 9){
                result.classList.add("active")
                document.querySelector("#result h1").innerHTML = "Empate"
                return;
            }else{
                alert("Não pode clicar de novo")
            }
        }
        checkVictory();
    }else{
        result.classList.add("active")
                document.querySelector("#result h1").innerHTML = "Fim de jogo"
    }
}

function checkVictory(){
    let c1_value = c1.getAttribute("value");
    let c2_value = c2.getAttribute("value");
    let c3_value = c3.getAttribute("value");
    let c4_value = c4.getAttribute("value");
    let c5_value = c5.getAttribute("value");
    let c6_value = c6.getAttribute("value");
    let c7_value = c7.getAttribute("value");
    let c8_value = c8.getAttribute("value");
    let c9_value = c9.getAttribute("value");

    if(c1_value == c2_value && c2_value == c3_value && c3_value != null){
        result.classList.add("active")
        document.querySelector("#result h1").innerHTML = (vez != 0) ? "Bola Venceu!" : "'X' Venceu!"
        victory = true;
        return
    }
    if(c4_value == c5_value && c5_value == c6_value && c6_value != null){
        result.classList.add("active")
        document.querySelector("#result h1").innerHTML = (vez != 0) ? "Bola Venceu!" : "'X' Venceu!"
        victory = true;
        return
    }
    if(c7_value == c8_value && c8_value == c9_value && c9_value != null){
        result.classList.add("active")
        document.querySelector("#result h1").innerHTML = (vez != 0) ? "Bola Venceu!" : "'X' Venceu!"
        victory = true;
        return
    }
    if(c1_value == c4_value && c4_value == c7_value && c7_value != null){
        result.classList.add("active")
        document.querySelector("#result h1").innerHTML = (vez != 0) ? "Bola Venceu!" : "'X' Venceu!"
        victory = true;
        return
    }
    if(c2_value == c5_value && c5_value == c8_value && c8_value != null){
        result.classList.add("active")
        document.querySelector("#result h1").innerHTML = (vez != 0) ? "Bola Venceu!" : "'X' Venceu!"
        victory = true;
        return
    }
    if(c3_value == c6_value && c6_value == c9_value && c9_value != null){
        result.classList.add("active")
        document.querySelector("#result h1").innerHTML = (vez != 0) ? "Bola Venceu!" : "'X' Venceu!"
        victory = true;
        return
    }
    if(c1_value == c5_value && c5_value == c9_value && c9_value != null){
        result.classList.add("active")
        document.querySelector("#result h1").innerHTML = (vez != 0) ? "Bola Venceu!" : "'X' Venceu!"
        victory = true;
        return
    }
    if(c3_value == c5_value && c5_value == c7_value && c7_value != null){
        result.classList.add("active")
        document.querySelector("#result h1").innerHTML = (vez != 0) ? "Bola Venceu!" : "'X' Venceu!"
        victory = true;
        return
    }
    
}