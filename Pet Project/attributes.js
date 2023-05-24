function createAttributesElement(attributes) {
  const ul = document.createElement('ul');
  const danoCampeao = document.createElement('li');
  const manaCampeao = document.createElement('li');

  danoCampeao.innerText = `${'Dano do campeão: ' + attributes.damage.value}`;
  manaCampeao.innerText = `${'Mana do campeão: ' + attributes.mana.value}`;

  //   Object.keys(personagemEncontrado).forEach((objectKey) => {
  //     const element = document.createElement('li');
  //     element.innerText = `${personagemEncontrado[objectKey].label}: ${personagemEncontrado[objectKey].value}`;
  //     ul.append(element);
  //   });

  ul.append(danoCampeao);
  ul.append(manaCampeao);

  return ul;
}
