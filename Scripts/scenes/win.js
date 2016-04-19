var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Win = (function (_super) {
        __extends(Win, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Win() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        Win.prototype.start = function () {
            // added kitchen to the scene
            this._kitchen = new objects.KitchenThree();
            this.addChild(this._kitchen);
            // score background 
            this._scoreBackground = new createjs.Bitmap(assets.getResult("scorebackgroundWin"));
            this._scoreBackground.x = 0;
            this._scoreBackground.y = 100;
            this.addChild(this._scoreBackground);
            //Add Menu Label
            this._endLabel = new objects.Label("Level 3 completed", "60px Lucinda Fax", "#ffffff", config.Screen.CENTER_X, config.Screen.CENTER_Y - 60, true);
            this.addChild(this._endLabel);
            this._highScoreLabel = new objects.Label("New score: " + creamValue + " + " + strawberryValue + " + " + pieValue + " = " + scoreLevelThree, "25px Lucinda Fax", "#ffffff", config.Screen.CENTER_X, config.Screen.CENTER_Y + 25, true);
            this.addChild(this._highScoreLabel);
            //Add Score Label
            this._totalScoreLabel = new objects.Label("Total score: " + highScoreValue, "25px Lucinda Fax", "#ffffff", config.Screen.CENTER_X, config.Screen.CENTER_Y + 50, true);
            this.addChild(this._totalScoreLabel);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("restartButton", config.Screen.CENTER_X - 50, config.Screen.CENTER_Y + 80, false);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Win.prototype.update = function () {
            this._kitchen.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        Win.prototype._startButtonClick = function (event) {
            // Switch to the LEVEL ONE Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        };
        return Win;
    }(objects.Scene));
    scenes.Win = Win;
})(scenes || (scenes = {}));

//# sourceMappingURL=win.js.map
