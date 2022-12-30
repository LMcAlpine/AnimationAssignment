const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();


ASSET_MANAGER.queueDownload("./halo.png");
ASSET_MANAGER.queueDownload("./shootingTest.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	ctx.imageSmoothingEnabled = false;


	let player = new Player(gameEngine);
	gameEngine.addEntity(player);
	gameEngine.player = player;

	gameEngine.init(ctx);

	gameEngine.start();
});
