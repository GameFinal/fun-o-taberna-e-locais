const prompt = require("prompt-sync")();

const bruxo = {
  nome: "Crowster",
  armadura: ["sim"],
  humor: ["mal"],
  vida: 100,
  atençao: 100,
  energia: 100,
  vigor: 100,
  fome: 5,
  sede: 5,
  nivel: "Salvador",
  itens: " ",
};

const pessoasBar = {
  garcons: "",
  bruxos: "",
  mosntros: "",
};

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
  console.log(`Para qual local deseja ir?`);

  const cenario = prompt(`digite sua escolha: `).toLowerCase();

  if (cenario === "docas") {
    return docas();
  } else {
    if (cenario === "centro da vila") {
      return centro();
    } else if (cenario === "torre de vigia") {
      return torre();
    } else if (cenario === "taberna") {
      return taberna();
    } else {
      console.log(`Local inexistente tente novamente`);

      return local();
    }
  }
};

const conversar = () => {
  console.log(`Pessoas na taberna`);
  console.log(pessoasBar);

  let convera = prompt(`Com quem deseja conversar? `);

  if (conversa === "garcons") {
    console.log(`A conversa alterou o humor do bruxo`);

    bruxo.humor = "Bom";

  } else if (conversa === "bruxos") {
    console.log(`A conversa alterou o humor do bruxo`);

    bruxo.humor = "Ótimo";

  } else if (convera === "monstros"); {
    
    console.log(`A conversa alterou o humor do bruxo`);

    bruxo.humor = "Entusiasmado";
  }
};

const bebida = () => {
  let bebidas = prompt(`O que deseja beber? `);
};

const garcom = () => {
  for (;;) {
    console.log(bruxo.humor[0]);

    if (bruxo.humor[0] !== "feliz") {
      let resp = prompt(`O Que deseja? `).toLowerCase();

      if (resp === "conversar") {
        conversar();
      } else if (resp === "bebida") {
        bebida();
      } else {
        console.log(
          `Não temos está opção, escolha outra coisa que deseja fazer`
        );
      }
    } else {
      const irVila = prompt("Vamos reconstruir a vila? ").toLowerCase();

      if (irVila === "sim") {
        local();
      }
    }
    break;
  }
};

const taberna = () => {
  console.log(`Bem-vindo a Taberna grande Bruxo!`);

  garcom();
};

taberna();
