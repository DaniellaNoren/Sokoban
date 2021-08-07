let playerMovement = "UP";
let playerTile;
let currentTile;
  
let playerPositionY = tileMap01.mapGrid.findIndex(arr1 => arr1.findIndex(arr2 => arr2[0] == "P") != -1);
let playerPositionX = tileMap01.mapGrid[playerPositionY].findIndex(arr1 => arr1[0] == "P");

function arrowKeyPress(e){

  switch(e.code){
    case "ArrowUp":   playerMovement = "UP"; movePlayer(playerPositionX, playerPositionY - 1); 
    break;
    case "ArrowRight": playerMovement = "RIGHT"; movePlayer(playerPositionX + 1, playerPositionY); 
    break;
    case "ArrowDown":  playerMovement = "DOWN"; movePlayer(playerPositionX, playerPositionY + 1); 
    break;
    case "ArrowLeft": playerMovement = "LEFT"; movePlayer(playerPositionX - 1, playerPositionY); 
    break;
  }

  
  if(nrOfFilledGoals == nrOfGoals){
    console.log("you won")
    window.location.reload();
  }
}

function getTile(y, x){
  return tileMap01.mapGrid[y][x][0];
}

function getType(type){
  switch(type){
    case " ": return Tiles.Space;
    case "G": return Tiles.Goal;
    case "W": return Tiles.Wall;
    case "B": return Entities.Block;
    case "P": return Entities.Character;
  }
}

function getTileObject(x, y){
  let id = Number(y * tileMap01.width + x + 1);
  return { Tile: document.getElementById(id), X: x, Y: y};
}



function movePlayer(x, y){

  let tile = getTileObject(x, y);

  if(movePlayerTile(playerTile, tile)){
    playerPositionX = tile.X;
    playerPositionY = tile.Y;
  }

}

function movePlayerTile(player, nextTile){

  if(nextTile.Tile.classList.contains(Tiles.Space)){
     
      nextTile.Tile.classList.replace(Tiles.Space, Entities.Character);
      player.classList.replace(Entities.Character, currentTile); 
    
      currentTile = Tiles.Space;
      playerTile = nextTile.Tile;

      return true;
  }else if(nextTile.Tile.classList.contains(Tiles.Goal)){
   
      nextTile.Tile.classList.replace(Tiles.Goal, Entities.Character);
      player.classList.replace(Entities.Character, currentTile); 
      playerTile = nextTile.Tile;

      currentTile = Tiles.Goal;

     return true;
  }else if(nextTile.Tile.classList.contains(Entities.Block)){
    return moveBlock(nextTile, player);
  }

  return false;
}

let nrOfGoals = 6;
let nrOfFilledGoals = 0;

function moveBlock(blockTile, player){
  let nextTile;
  
  switch(playerMovement){
    case "UP":  nextTile = getTileObject(blockTile.X, blockTile.Y - 1)
    break;
    case "DOWN":  nextTile = getTileObject(blockTile.X, blockTile.Y + 1); 
      break;
    case "LEFT":  nextTile = getTileObject(blockTile.X - 1, blockTile.Y); 
      break;
    case "RIGHT":  nextTile = getTileObject(blockTile.X + 1, blockTile.Y); 
      break;
  }

  let blockCurrentTile = getType(getTile(blockTile.Y, blockTile.X));

  if(blockCurrentTile == Entities.Block){
    blockCurrentTile = Tiles.Space;
  }
  
  if(nextTile.Tile.classList.contains(Tiles.Space)){
    
    if(blockCurrentTile == Tiles.Goal){
      blockTile.Tile.classList.replace(Entities.BlockDone, Entities.Character);
      nrOfFilledGoals--;
    }else{
      blockTile.Tile.classList.replace(Entities.Block, Entities.Character);
    }

    nextTile.Tile.classList.replace(Tiles.Space, Entities.Block);
    player.classList.replace(Entities.Character, currentTile);
 
    currentTile = blockCurrentTile;
    playerTile = blockTile.Tile;

    return true;
  }else if(nextTile.Tile.classList.contains(Tiles.Goal)){

    blockTile.Tile.classList.replace(Entities.Block, Entities.Character);
    blockTile.Tile.classList.remove(Entities.BlockDone);

    nextTile.Tile.classList.replace(Tiles.Goal, Entities.BlockDone);
    nextTile.Tile.classList.add(Entities.Block);

    player.classList.replace(Entities.Character, currentTile);

    currentTile = blockCurrentTile;
    playerTile = blockTile.Tile;

    if(blockCurrentTile == Tiles.Space){
      nrOfFilledGoals++;
    }
   
    return true;
  }

  return false;
}
