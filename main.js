const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();


ASSET_MANAGER.queueDownload("./city/cityfar.png")
ASSET_MANAGER.queueDownload("./city/nightsky.png")
ASSET_MANAGER.queueDownload("./city/cityclose.png")
ASSET_MANAGER.queueDownload("./halo.png");
ASSET_MANAGER.queueDownload("./shootingTest.png");
ASSET_MANAGER.queueDownload("./gruntWalk-Sheet.png");
ASSET_MANAGER.queueDownload("./moon.png");
ASSET_MANAGER.queueDownload("./elitespritesheet.png");
ASSET_MANAGER.queueDownload("./elitespritesheetLeft.png");
ASSET_MANAGER.queueDownload("./brutesprites.png");
ASSET_MANAGER.queueDownload("./brutespritesLeft.png");

ASSET_MANAGER.queueDownload("./gruntKilledFleeing-Sheet.png");

ASSET_MANAGER.queueDownload("./gruntWalkLeft.png");

ASSET_MANAGER.queueDownload("./droppodstest-Sheet2.png");
ASSET_MANAGER.queueDownload("./droppod_impact_ground.png");

ASSET_MANAGER.queueDownload("./podStill.png");

ASSET_MANAGER.queueDownload("./city1.png");

ASSET_MANAGER.queueDownload("./droppod_impact_with_odst.png");

ASSET_MANAGER.queueDownload("./odst.png");
ASSET_MANAGER.queueDownload("./redODST.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");



	canvas.requestPointerLock = canvas.requestPointerLock ||
		canvas.mozRequestPointerLock;




	if (document.pointerLockElement === canvas ||
		document.mozPointerLockElement === canvas) {
		console.log('The pointer lock status is now locked');
	} else {
		console.log('The pointer lock status is now unlocked');
	}


	let cityfar = ASSET_MANAGER.getAsset("./city/cityfar.png")
	let nightsky = ASSET_MANAGER.getAsset("./city/nightsky.png")
	let cityclose = ASSET_MANAGER.getAsset("./city/cityclose.png")

	ctx.imageSmoothingEnabled = false;





	let animation = new Animation(gameEngine);
	gameEngine.addEntity(animation);
	//gameEngine.player = player;

	let odst = new ODST(gameEngine);
	gameEngine.addEntity(odst);




	let layer = new Layer(cityclose, 0.2);
	gameEngine.addEntity(layer);





	//layer = new Layer(cityfar, 0.4);

	//gameEngine.addEntity(layer);


	layer = new Layer(nightsky, 0);
	gameEngine.addEntity(layer)









	//let camera = new Camera();
	//gameEngine.addEntity(camera);





	gameEngine.init(ctx);

	gameEngine.start();
});
