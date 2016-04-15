var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var levelOneChange = (function (_super) {
        __extends(levelOneChange, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function levelOneChange() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        levelOneChange.prototype.start = function () {
            // added ocean to the scene
            this._kitchen = new objects.KitchenOne();
            this.addChild(this._kitchen);
            //Add Menu Label
            this._endLabel = new objects.Label("Level 1 completed", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 80, true);
            this.addChild(this._endLabel);
            this._scoreLabel = new objects.Label("Your Score:", "25px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._scoreLabel);
            this._highScoreLabel = new objects.Label(breadValue + " + " + cheeseValue + " + " + eggValue + " = " + highScoreValue, "25px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y + 25, true);
            this.addChild(this._highScoreLabel);
            //Add Score Label
            this._nextLabel = new objects.Label("Click Play to start level two", "25px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._scoreLabel);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X - 50, config.Screen.CENTER_Y + 80, false);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        levelOneChange.prototype.update = function () {
            this._kitchen.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        levelOneChange.prototype._startButtonClick = function (event) {
            // Switch to the LEVEL ONE Scene
            scene = config.Scene.LEVEL2;
            changeScene();
        };
        return levelOneChange;
    }(objects.Scene));
    scenes.levelOneChange = levelOneChange;
})(scenes || (scenes = {}));

//# sourceMappingURL=levelOneChange.js.map
