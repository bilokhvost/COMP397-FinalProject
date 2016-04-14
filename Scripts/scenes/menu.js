var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            //Add Menu background
            this._menuBackground = new createjs.Bitmap(assets.getResult("menuBackground"));
            this.addChild(this._menuBackground);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X - 50, config.Screen.CENTER_Y - 150, false);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick, this);
            // add the Instructions button to the MENU scene
            this._instructionsButton = new objects.Button("InstructionsButton", config.Screen.CENTER_X - 50, config.Screen.CENTER_Y - 80, false);
            this.addChild(this._instructionsButton);
            // Start Button event listener
            this._instructionsButton.on("click", this._instructionsButtonClick, this);
            // add the Exit button to the MENU scene
            this._exitButton = new objects.Button("ExitButton", config.Screen.CENTER_X - 50, config.Screen.CENTER_Y - 10, false);
            this.addChild(this._exitButton);
            // Start Button event listener
            this._exitButton.on("click", this._exitButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // PLAY SCENE Button click event handler
        Menu.prototype._startButtonClick = function (event) {
            // Switch to the LEVEL ONE Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        };
        // INSTRUCTIONS Button click event handler
        Menu.prototype._instructionsButtonClick = function (event) {
            // Switch to the INSTRUCTIONS Scene
            scene = config.Scene.LEVEL2;
            changeScene();
        };
        // EXIT Button click event handler
        Menu.prototype._exitButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));

//# sourceMappingURL=menu.js.map
