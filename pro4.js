const prompt = require("prompt-sync")();

const humor = [
  "Triste",
  "Feliz",
  "Frustrado",
  "Normal",
  "Estressado",
  "Euforico",
];

const docas = () => {
  console.log(`Introduzir os codigos do cenário docas`);
};

const centro = () => {
  console.log(`Introduzir os codigos do cenário centro da vila`);
};

const torre = () => {
  console.log(`Introduzir os codigos do cenário torre`);
};

const local = () => {
  const cenario = prompt(`Para onde deseja ir? `).toLowerCase();

  if (cenario === "docas") {
    
    return docas();

  } else {
    if(cenario === "centro da vila") {

      return centro();

    } else if (cenario === "torre de vigia"){

      return torre();
    } else if (cenario === "taberna"){

      return taberna();

    } else {
      console.log(`Local inexistente tente novamente`)

      return local();
    }

  }
}

const taberna = () => {
  console.log(`Bem-vindo a Taberna grande Bruxo!`);


  for (; ;) {
    let resphumor = prompt(`Como está se sentindo agora? `);

    if (resphumor !== "feliz") {
      let resphumor = prompt(`Como deseja melhora? `).toLowerCase();
    
    } else {
      const irVila = prompt("Vamos reconstruir a vila? ").toLowerCase();

      if (irVila === "sim") {
        local();
      }
    }
    break;
  }
};

taberna();
