﻿/// <reference path = "_reference.ts" />
//*********************************************************************
//Source file: game.ts                                                *
//Authors names:Nashia Amourdon                                       *
//              Kateryna Bilokhvost                                   *
//              Milan Verma                                           *
//Initial commit: April 3, 2016                                       *
//Last modified by: Kateryna Bilokhvost                               *
//Last date modified: April 18, 2016                                  *
//Commit history: GitHub Link: https://github.com/bilokhvost/COMP397- *
//FinalProject/commits/master                                         *
//                                                                    *
//Program description: This is a simple side scrolling 2D arcade game *
// (left to right). The main hero is a chef that collects different   *
//types of food to prepare a dinner. The main purpose is to collect   *
//all the required goods and to avoid enemies that steal player’s     *
// collected items or health                                          *
//*********************************************************************
// global variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var textureAtlas: createjs.SpriteSheet;

var currentScene: objects.Scene;
var scene: number;

var livesValue: number;
var timeValue: number;

var steakValue: number;
var friesValue: number;
var sauceValue: number;
//level 3
var strawberryValue: number;
var creamValue: number;
var pieValue: number;

var scoreLevelOne: number = 0;
var scoreLevelTwo: number = 0;
var scoreLevelThree: number = 0;
var highScoreValue: number = 0;
var cheeseValue: number;
var eggValue: number;
var breadValue: number;

// Game Scenes
var menu: scenes.Menu;
var end: scenes.End;
var level1: scenes.levelOne;
var level1end: scenes.levelOneEnd;
var level1change: scenes.levelOneChange;
var level2change: scenes.LevelTwoChange;
var level2: scenes.levelTwo;
var level3: scenes.levelThree;
var win: scenes.Win;
var instruction: scenes.Instruction;

var atlas = {
    "images": [
        "../../Assets/images/player.png"
    ],
    "frames": [
        [1, 1, 99, 93, 0, -1, 0],
        [102, 1, 99, 93, 0, -1, 0],
        [203, 1, 100, 90, 0, 0, 0],
        [305, 1, 100, 90, 0, 0, 0]
    ],

    "animations": {
        "player": {
            "frames": [0, 1, 2, 3],
            "speed": 0.1
        }
    },
}


var assetData: objects.Asset[] = [
    // Add your Assets here
    //button
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "InstructionsButton", src: "../../Assets/images/InstructionsButton.png" },
    { id: "ExitButton", src: "../../Assets/images/ExitButton.png" },
    { id: "NextButton", src: "../../Assets/images/NextButton.png" },
    { id: "menuBackground", src: "../../Assets/images/menuBackground.png" },
    { id: "level1Button", src: "../../Assets/images/level1Btn.png" },
    { id: "level2Button", src: "../../Assets/images/level2Btn.png" },
    { id: "level3Button", src: "../../Assets/images/level3Btn.png" },
    { id: "restartButton", src: "../../Assets/images/restart.png" },
    { id: "menuButton", src: "../../Assets/images/menu.png" },
//score Level 1
{id:"backscore1", src:"../../Assets/images/backSc1.png"},
{id:"scBread", src:"../../Assets/images/bread1.png"},

//score level 2
{id:"backscore2",src:"../../Assets/images/scLevel2.png"},

//score level 3
{id:"backscore3", src:"../../Assets/images/scLevel3.png"},
    { id: "plane", src: "../../Assets/images/plane.png" },
    { id: "timer", src: "../../Assets/images/timer.png" },
    { id: "life", src: "../../Assets/images/life.png" },
    { id: "chef", src: "../../Assets/images/chef1.png" },
    { id: "kitchenOne", src: "../../Assets/images/kitchenOne.png" },
    { id: "kitchenTwo", src: "../../Assets/images/kitchenTwoo.png" },

    { id: "bread", src: "../../Assets/images/bread.png" },
    { id: "cheese", src: "../../Assets/images/cheese.png" },
    { id: "steak", src: "../../Assets/images/steak.png" },
    { id: "fries", src: "../../Assets/images/fries.png" },
    { id: "sauce", src: "../../Assets/images/sauce.png" },
    { id: "egg", src: "../../Assets/images/egg.png" },

    { id: "mouse", src: "../../Assets/images/mouse.png" },

    { id: "pepper", src: "../../Assets/images/pepper.png" },

    { id: "mouse", src: "../../Assets/images/mouse.png" },
    { id: "pepper", src: "../../Assets/images/pepper.png" },
    { id: "panel", src: "../../Assets/images/score.png" },
    { id: "background", src: "../../Assets/images/background1.png" },
    { id: "scorebackground", src: "../../Assets/images/scoreBk1.png" },
    { id: "scorebackgroundWin", src: "../../Assets/images/scoreBk2.png" },

    //images level 3
    { id: "strawberry", src: "../../Assets/images/strawberry.png" },
    { id: "kitchenThree", src: "../../Assets/images/kitchenThree.png" },
    { id: "cream", src: "../../Assets/images/cream.png" },
    { id: "pie", src: "../../Assets/images/pie.png" },
    { id: "bird", src: "../../Assets/images/bird.png" },


    //audio 

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

function init(): void {
    // instantiate textureAtlas
    textureAtlas = new createjs.SpriteSheet(atlas);

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
function gameLoop(event: createjs.Event): void {
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
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {

    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;

        case config.Scene.INSTRUCTION:
            // show the END scene
            stage.removeAllChildren();
            instruction = new scenes.Instruction();
            currentScene = instruction;
            console.log("Starting INSTRUCTION Scene");
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

        case config.Scene.LEVEL2:
            //     // show the LEVEL2 scene
            stage.removeAllChildren();
            level2 = new scenes.levelTwo();
            currentScene = level2;
            console.log("Starting LEVEL 2 Scene");
            break;

        case config.Scene.LEVEL2CHANGE:
            // show the LEVEL1CHANGE scene
            stage.removeAllChildren();
            level2change = new scenes.LevelTwoChange();
            currentScene = level2change;
            console.log("Starting LEVEL 2 Scene");
            break;

        case config.Scene.LEVEL3:
            // show the LEVEL3 scene
            stage.removeAllChildren();
            level3 = new scenes.levelThree();
            currentScene = level3;
            console.log("Starting LEVEL 3 Scene");
            break;


        case config.Scene.WIN:
            // show the LEVEL3 scene
            stage.removeAllChildren();
            win = new scenes.Win();
            currentScene = win;
            console.log("Starting winning scene");
            break;

    }

    console.log(currentScene.numChildren);
}

window.onload = preload;