
const vm = new Vue({
    el: '#app',

data: {
    inputPao: "",
    inputMolhos: [],
    inputSalada: [],
    inputHamburguer: "",
    etapa: 1,
    inputNome:"",
    inputEndereco:"",
},
methods: {
    fazerpedido(){
        if(this.inputPao && this.inputHamburguer){
            this.etapa = 2

        }else {
            alert("Você precisa selecionar um pão e um hambuguer!")
        }
    }

},
computed: {
  pao() {
    switch(this.inputPao){
        case "gergelim":
            return ["./imagens/pao_gergelim_superior.png", "./imagens/pao_gergelim_inferior.png"]
            break
        case "australiano":
            return ["./imagens/pao_australiano_superior.png", "./imagens/pao_australiano_inferior.png"]  
            break
            default:
            return ["./imagens/padrao/pao_superior.png", "./imagens/padrao/pao_inferior.png"]
    }
   
  },
  alface(){
    if(this.inputSalada.includes("alface")){
        return "./imagens/alface.png"
    } else{
    return "./imagens/padrao/alface.png"
    }
  },
  ketchup(){
    if(this.inputMolhos.includes("ketchup")){
        return "./imagens/ketchup.png"
    }else{
    return "./imagens/padrao/molho.png"
    }
  },
  maionese(){
    if(this.inputMolhos.includes("maionese")){
        return "./imagens/maionese.png"
    }else{
    return "./imagens/padrao/molho.png"
    }
  },
  mostarda(){
    if(this.inputMolhos.includes("mostarda")){
        return "./imagens/mostarda.png"
    }else{
    return "./imagens/padrao/molho.png"
    }
  },
  hamburguer(){
    switch(this.inputHamburguer){
    case 'bovino':
        return "./imagens/bovino.png"
        break
    case 'soja':
        return "./imagens/soja.png"
        break
    case 'frango':
        return "./imagens/frango.png"
        default:   
        return "./imagens/padrao/hamburguer.png"     
    }
    
  },
  
}

})
