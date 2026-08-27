$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
        createPlatform(0,700,200,100,"pink");
        createPlatform(400,600,100,10,"pink");
        createPlatform(500,470,10,500,"pink");
        createPlatform(400,470,100,10,"pink");
        createPlatform(500,600,900,150,"pink");
        createPlatform(600,450,50,10,"pink");
        createPlatform(300,698.5,3,2,"pink");
        createPlatform(850,375,50,10,"pink");
        createPlatform(1150,300,50,10,"pink");
        createPlatform(1300,245,100,10,"pink");
        createPlatform(1300,145,100,10,"pink");
        createPlatform(1300,355,100,10,"pink");
        createPlatform(1300,465,100,10,"pink");
        createPlatform(100,145,1000,10,"pink");
        createPlatform(1250,520,3,2,"pink");
        createPlatform(1150,520,3,2,"pink");
        createPlatform(1050,520,3,2,"pink");
        createPlatform(1198,180,3,2,"pink");
        
        


        
        createBadPlatform(200,720,300,100);
        createBadPlatform(500,590,1000,20);
    // TODO 3 - Create Collectables
      createCollectable("database",300,670 );
      createCollectable("database",1350,160);
      createCollectable("database",120,100);
      createCollectable("database",1035,480);


    
    // TODO 4 - Create Cannons
      createCannon("top",875,800);
      createCannon("top",600,800);
      createCannon("top",1350,1600);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
