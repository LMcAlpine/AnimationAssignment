const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();


ASSET_MANAGER.queueDownload("./halo.png");
ASSET_MANAGER.queueDownload("./shootingTest.png");
ASSET_MANAGER.queueDownload("./gruntWalk-Sheet.png");
ASSET_MANAGER.queueDownload("./moon.png");
ASSET_MANAGER.queueDownload("./elitespritesheet.png");
ASSET_MANAGER.queueDownload("./elitespritesheetLeft.png");
ASSET_MANAGER.queueDownload("./brutesprites.png");
ASSET_MANAGER.queueDownload("./brutespritesLeft.png");

ASSET_MANAGER.queueDownload("./gruntWalkLeft.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	ctx.imageSmoothingEnabled = false;


	let player = new Player(gameEngine);
	gameEngine.addEntity(player);
	gameEngine.player = player;

	//let camera = new Camera();
	//gameEngine.addEntity(camera);


	gameEngine.init(ctx);

	gameEngine.start();
});
