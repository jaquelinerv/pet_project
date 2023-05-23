let characters = [{
    name: "Lux",
    life: 100,
    mana: 100,
    damage: 100,
    armor: 50,
    mana_regen: 20,
    image: "imgs/lux-lux.jpg"
},
{
    name: "Caitlyn",
    life: 100,
    mana: 100,
    damage: 100,
    armor: 50,
    mana_regen: 20,
    image: "imgs/caitlyn-caitlyn.jpg"
},
{
    name: "Zed",
    life: 100,
    mana: 100,
    damage: 100,
    armor: 50,
    mana_regen: 20,
    image: "imgs/zed-zed.jpg"
},
]

//passar por todos campeos coom loop
const personagem = document.getElementById("personagem");
const containerPersonagem = document.getElementById("container-personagens");

characters.forEach( (campeao)=> {
  const botao = document.createElement("button");
  botao.setAttribute('id', campeao.name);
  botao.innerText = campeao.name;
  botao.setAttribute('onclick', `showCharacter(${campeao.name})`);

  containerPersonagem.append(botao);
  
})


//função que adiciona a imagem do campeão na tela. falta adicionar o resto dos dados do campeão.
function showCharacter(event){
personagem.innerHTML = null; //funciona mas nao é o ideal =)
const nomePersonagem = event.innerText;
const personagemEncontrado = characters.find((campeao)=> {
  return campeao.name == nomePersonagem;
})

const imagem = document.createElement("img")
imagem.setAttribute('src', personagemEncontrado.image) 
const danoCampeao = document.createElement('span');
danoCampeao.innerText = personagemEncontrado.damage;
personagem.append(danoCampeao)
personagem.append(imagem);

};



//adiconar a imagem num container e apagar depois q clicou no proximo (limpar e add um novo)