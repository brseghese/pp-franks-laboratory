let playerState = "ocioso";
const dropDown = document.getElementById("animations");
dropDown.addEventListener("change", function (e) {
  playerState = e.target.value;
});

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "./assets/shadow_dog.png";

const spriteWidth = 575; // largura de cada sprite na folha
const spriteHeight = 523; // altura de cada sprite na folha

let gameFrame = 0; // quadros/s do jogo
const staggerFrame = 5; // escala

const spriteAnimations = [];

// popula o array spriteAnimations
const animationStates = [
  {
    name: "ocioso",
    frames: 7,
  },
  {
    name: "pular",
    frames: 7,
  },
  {
    name: "cair",
    frames: 7,
  },
  {
    name: "correr",
    frames: 9,
  },
  {
    name: "tonto",
    frames: 11,
  },
  {
    name: "sentar",
    frames: 5,
  },
  {
    name: "rolar",
    frames: 7,
  },
  {
    name: "morder",
    frames: 7,
  },
  {
    name: "morrer",
    frames: 12,
  },
  {
    name: "atingido",
    frames: 4,
  },
];

animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let i = 0; i < state.frames; i++) {
    let positionX = i * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // calculo progressivo
  let position =
    Math.floor(gameFrame / staggerFrame) %
    spriteAnimations[playerState].loc.length;

  // calculo acima está atualizando a variável criando um loop conforme o array no final
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y;

  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  gameFrame++; // incrementa a cada loop
  requestAnimationFrame(animate); // função recursiva
}

animate();

// 3 ou 5 ou 9 argumentos

// 3 argumentos
// 1 é a imagem, 2 e 3 coordenadas de onde a imagem ficará

// 5 argumentos
// 1 é a imagem, 2 e 3 coordenadas de onde a imagem ficará
// 4 e 5 coordenadas do tamanho da imagem

// 9 argumentos
// 1 é a imagem
// 2, 3, 4 e 5 determina onde o recorte (retangulo) na folha sprite será feita
// 6 e 7 coordenada de onde a imagem recortada ficará
// 8 e 9 coordenada do tamanho da imagem recortada

// a folha sprite usada nesse exemplo tem 10 linhas e 12 colunas
// 6876px de largura / 12 colunas = 573px arredondou para 575px por detalhe na folha sprite
// 5230px de altura / 10 linhas = 523px

// ctx.fillRect(100, 50, 100, 100);
// ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)

// ctx.drawImage(
//   playerImage,
//   frameX * spriteWidth, // multiplica para andar nas colunas
//   frameY * spriteHeight, // multiplica para andar nas linhas
//   spriteWidth,
//   spriteHeight,
//   0,
//   0,
//   spriteWidth,
//   spriteHeight
// );

// reduzir o tempo da animação, executando a cada 5 frames
// alterna entre os quadros na horizontal
// if (gameFrame % staggerFrame == 0) {
//   if (frameX < 6) frameX++;
//   else frameX = 0;
// }

// coluna
// let frameX = 0;
// linha
// let frameY = 0;

// frameX = spriteWidth * position;

// let playerState = "correr";
