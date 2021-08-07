let playerMovement = "UP";

let currentTile = Tiles.Space;

let playerPositionY = tileMap01.mapGrid.findIndex(arr1 => arr1.findIndex(arr2 => arr2[0] == "P") != -1);
let playerPositionX = tileMap01.mapGrid[playerPositionY].findIndex(arr1 => arr1[0] == "P");

let nrOfGoals = tileMap01.mapGrid.flat(2).filter(tile => tile == "G").length;
let nrOfFilledGoals = 0;

function arrowKeyPress(e){
 
  playerMovement = e.code;

  switch(e.code){
    case "ArrowUp":  
        e.preventDefault();
        movePlayer(playerPositionX, playerPositionY - 1); 
    break;
    case "ArrowRight": 
        e.preventDefault();
        movePlayer(playerPositionX + 1, playerPositionY); 
    break;
    case "ArrowDown":  
        e.preventDefault();
        movePlayer(playerPositionX, playerPositionY + 1); 
    break;
    case "ArrowLeft": 
        e.preventDefault();
        movePlayer(playerPositionX - 1, playerPositionY); 
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



function moveBlock(blockTile, player){
  let nextTile;
  
  switch(playerMovement){
    case "ArrowUp":  nextTile = getTileObject(blockTile.X, blockTile.Y - 1)
    break;
    case "ArrowDown":  nextTile = getTileObject(blockTile.X, blockTile.Y + 1); 
      break;
    case "ArrowLeft":  nextTile = getTileObject(blockTile.X - 1, blockTile.Y); 
      break;
    case "ArrowRight":  nextTile = getTileObject(blockTile.X + 1, blockTile.Y); 
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
