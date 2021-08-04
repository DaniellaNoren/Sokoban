/*   This is the base file for the Sokoban assignment - include this one in your HTML page, before you add the main script file*/


/*   Enum of CSS Classes for the static elements   */
var Tiles = {
  Wall: "tile-wall",
  Space: "tile-space",
  Goal: "tile-goal",
};

/*   Enum of CSS Classes for the moving elements   */
var Entities = {
  Character: "entity-player",
  Block: "entity-block",
  BlockDone: "entity-block-goal",
};


/*  Legend
    W = Wall
    B = Movable block
    P = Player starting position
    G = Goal area for the blocks
*/
var tileMap01 = {
  width: 19,
  height: 16,
  mapGrid: [
    [
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      ["W"],
      [" "],
      [" "],
      [" "],
      ["W"],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      ["W"],
      ["B"],
      [" "],
      [" "],
      ["W"],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      ["W"],
      ["W"],
      ["W"],
      [" "],
      [" "],
      ["B"],
      ["W"],
      ["W"],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      ["W"],
      [" "],
      [" "],
      ["B"],
      [" "],
      ["B"],
      [" "],
      ["W"],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      ["W"],
      ["W"],
      ["W"],
      [" "],
      ["W"],
      [" "],
      ["W"],
      ["W"],
      [" "],
      ["W"],
      [" "],
      [" "],
      [" "],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
    ],
    [
      ["W"],
      [" "],
      [" "],
      [" "],
      ["W"],
      [" "],
      ["W"],
      ["W"],
      [" "],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      [" "],
      [" "],
      ["G"],
      ["G"],
      ["W"],
    ],
    [
      ["W"],
      [" "],
      ["B"],
      [" "],
      [" "],
      ["B"],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      ["G"],
      ["G"],
      ["W"],
    ],
    [
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      [" "],
      ["W"],
      ["W"],
      ["W"],
      [" "],
      ["W"],
      ["P"],
      ["W"],
      ["W"],
      [" "],
      [" "],
      ["G"],
      ["G"],
      ["W"],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      ["W"],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
  ],
};

function createStyle(nr, size){
  let stylestring = "";
  for(let i = 0; i < nr; i++){
    stylestring += size + " ";
  }
  return stylestring
}

function createMap(){

  let idCounter = 0;
  let mapContainer = document.createElement("div");
  mapContainer.className = "map";
  mapContainer.style.display = "inline-grid";
  mapContainer.style.gridTemplateColumns = createStyle(tileMap01.width, "1fr");
  mapContainer.style.gridTemplateRows = createStyle(tileMap01.height, "1fr");

  tileMap01.mapGrid.forEach(tileArr => {
    tileArr.forEach(tile => {

      let element = document.createElement("div");
      element.classList.add("tile");
      element.id = ++idCounter;
      
      switch(tile[0]){
        case "W":  createWall(element); break;
        case "B": createBlock(element); break;
        case " ": createSpace(element); break;
        case "G": createGoal(element); break;
        case "P": createPlayer(element); break;
      }

      mapContainer.appendChild(element);
    })
    
    document.body.appendChild(mapContainer);
    
  })
}

function createBlock(element){
  element.classList.add(Entities.Block);
}

function createWall(element){
  element.classList.add(Tiles.Wall);
}

function createPlayer(element){
  element.classList.add(Entities.Character);
}

function createSpace(element){
  element.classList.add(Tiles.Space);
}

function createGoal(element){
  element.classList.add(Tiles.Goal);
}

document.addEventListener('keydown', logKey);

function logKey(e){
  switch(e.code){
    case "ArrowUp":  movePlayerY(-1); break;
    case "ArrowRight":  movePlayerX(1); break;
    case "ArrowDown":  movePlayerY(1); break;
    case "ArrowLeft": movePlayerX(-1); break;
  }
}


let playerPositionX = 11;
let playerPositionY = 11;

function tileC(tile, y, x){
  console.log("y: " + y)
  console.log("x: " + x)
  let id = Number(y * tileMap01.width + x + 1);
  console.log(id);
  
  return { Tile: document.getElementById(id), type: tile, X: x, Y: y};
}

function movePlayerY(nr){
  let tile = tileC(tileMap01.mapGrid[playerPositionY + nr][playerPositionX][0], Number(playerPositionY + nr), playerPositionX);
 
  movePlayer(tile);
}

function movePlayerX(nr){
  let tile = tileC(tileMap01.mapGrid[playerPositionY][playerPositionX + nr][0], playerPositionY, Number(playerPositionX + nr));
  
  movePlayer(tile);
}



function movePlayer(tile){

  
  let player = document.getElementsByClassName("entity-player")[0];

  console.log(tile.type)
  switch(tile.type){
    case " ": {
     
      let tempId = player.id;

      player.style.gridColumn = Number(tile.X + 1) + "/" + Number(tile.X + 1);
      player.style.gridRow = Number(tile.Y + 1) + "/" + Number(tile.Y + 1);
      player.id = tile.Tile.id;

      tile.Tile.style.gridColumn = Number(playerPositionX + 1) + "/" + Number(playerPositionX + 1);
      tile.Tile.style.gridRow = Number(playerPositionY + 1) + "/" + Number(playerPositionY + 1);
      tile.Tile.id = tempId;

      tileMap01.mapGrid[playerPositionY][playerPositionX][0] = tile.type;
      tileMap01.mapGrid[tile.Y][tile.X][0] = "P";

      playerPositionX = tile.X;
      playerPositionY = tile.Y;

      


    } break;
    case "W": console.log("hit a wall"); return; 
    case "B": {  
        console.log("hit a brick")
    } break;
    case "G": {
      console.log("hit goal")
    } break;
  }
}