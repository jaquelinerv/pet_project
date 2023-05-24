let characters = [
  {
    name: 'Lux',
    attributes: {
      life: {
        label: 'Vida',
        value: 100,
      },
      mana: {
        label: 'Mana',
        value: 100,
      },
      damage: {
        label: 'Dano',
        value: 500,
      },
      seila: {
        label: 'Magia fofa',
        value: 500,
      },
      armor: {
        label: 'Armadura',
        value: 50,
      },
      mana_regen: {
        label: 'Regeneração de Mana',
        value: 20,
      },
    },
    image: 'imgs/lux-lux.jpg',
  },
  // {
  //   name: 'Caitlyn',
  //   life: 100,
  //   mana: 100,
  //   damage: 200,
  //   armor: 50,
  //   mana_regen: 20,
  //   image: 'imgs/caitlyn-caitlyn.jpg',
  // },
  // {
  //   name: 'Zed',
  //   life: 100,
  //   mana: 100,
  //   damage: 250,
  //   armor: 50,
  //   mana_regen: 20,
  //   image: 'imgs/zed-zed.jpg',
  // },
];

//passar por todos campeos coom loop
const personagem = document.getElementById('personagem');
const containerPersonagem = document.getElementById('container-personagens');

characters.forEach((campeao) => {
  const botao = document.createElement('button');
  botao.setAttribute('id', campeao.name);
  botao.innerText = campeao.name;
  botao.setAttribute('onclick', `showCharacter(${campeao.name})`);

  containerPersonagem.append(botao);
});

//função que adiciona a imagem do campeão na tela. falta adicionar o resto dos dados do campeão.

//adiconar a imagem num container e apagar depois q clicou no proximo (limpar e add um novo)
