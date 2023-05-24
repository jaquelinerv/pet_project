function showCharacter(event) {
  personagem.innerHTML = null; //funciona mas nao é o ideal =)
  const nomePersonagem = event.innerText;
  const personagemEncontrado = characters.find((campeao) => {
    return campeao.name == nomePersonagem;
  });

  const imagem = createChampImage(personagemEncontrado.image);
  const atributosCampeao = createAttributesElement(
    personagemEncontrado.attributes
  );

  personagem.append(document.createElement('br'));
  personagem.append(atributosCampeao);
  personagem.append(imagem);
}

function createChampImage(image) {
  const imagem = document.createElement('img');
  imagem.setAttribute('src', image);
  return imagem;
}
