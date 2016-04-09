/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
var livesValue;
var timeValue;
var breadValue;
var cheeseValue;
var eggValue;
var highScoreValue = 0;
// Game Scenes
var menu;
var play;
var end;
var level1;
var level1end;
var level1change;
//var level2: scenes.levelTwo;
//var level3: scenes.levelThree;
var assetData = [
    // Add your Assets here
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "InstructionsButton", src: "../../Assets/images/InstructionsButton.png" },
    { id: "ExitButton", src: "../../Assets/images/ExitButton.png" },
    { id: "menuBackground", src: "../../Assets/images/menuBackground.png" },
    { id: "ocean", src: "../../Assets/images/ocean.gif" },
    { id: "plane", src: "../../Assets/images/plane.png" },
    { id: "chef", src: "../../Assets/images/chef1.png" },
    { id: "island", src: "../../Assets/images/island.png" },
    { id: "kitchenOne", src: "../../Assets/images/kitchenOne.png" },
    { id: "cloud", src: "../../Assets/images/cloud.png" },
    { id: "bread", src: "../../Assets/images/bread.png" },
    { id: "cheese", src: "../../Assets/images/cheese.png" },
    { id: "egg", src: "../../Assets/images/egg.png" },
    { id: "mouse", src: "../../Assets/images/mouse.png" },
    { id: "engine", src: "../../Assets/audio/engine.ogg" },
    { id: "yay", src: "../../Assets/audio/yay.ogg" },
    { id: "thunder", src: "../../Assets/audio/thunder.ogg" },
    { id: "toast", src: "../../Assets/audio/toast.mp3" },
    { id: "snap", src: "../../Assets/audio/snap.mp3" },
    { id: "crack", src: "../../Assets/audio/crack.mp3" },
    { id: "squeak", src: "../../Assets/audio/squeak.mp3" },
    { id: "funk", src: "../../Assets/audio/funk.mp3" }
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
        case config.Scene.LEVEL1:
            // show the LEVEL1 scene
            stage.removeAllChildren();
            level1 = new scenes.levelOne();
            currentScene = level1;
            console.log("Starting LEVEL 1 Scene");
            break;
        case config.Scene.LEVEL1END:
            // show the LEVEL1END scene
            stage.removeAllChildren();
            level1end = new scenes.levelOneEnd();
            currentScene = level1end;
            console.log("Starting LEVEL 1 Scene");
            break;
        case config.Scene.LEVEL1CHANGE:
            // show the LEVEL1CHANGE scene
            stage.removeAllChildren();
            level1change = new scenes.levelOneChange();
            currentScene = level1change;
            console.log("Starting LEVEL 1 Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
window.onload = preload;

//# sourceMappingURL=game.js.map
