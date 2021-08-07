document.addEventListener('keydown', arrowKeyPress);

function createCSSstring(nr, size){
    let styleString = "";
    for(let i = 0; i < nr; i++){
      styleString += size + " ";
    }
    return styleString
  }
  
function createMap(){
  
    let idCounter = 0;
    let mapContainer = document.createElement("div");
    mapContainer.className = "map";
  
    mapContainer.style.display = "inline-grid";
    mapContainer.style.gridTemplateColumns = createCSSstring(tileMap01.width, "1fr");
    mapContainer.style.gridTemplateRows = createCSSstring(tileMap01.height, "1fr");
  
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
  
