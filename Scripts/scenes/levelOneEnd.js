var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var levelOneEnd = (function (_super) {
        __extends(levelOneEnd, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function levelOneEnd() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        levelOneEnd.prototype.start = function () {
            // added ocean to the scene
            this._kitchen = new objects.KitchenOne();
            this.addChild(this._kitchen);
            //Add Menu Label
            this._endLabel = new objects.Label("GAME OVER", "60px Consolas", "#ffff00", config.Screen.CENTER_X, config.Screen.CENTER_Y - 160, true);
            this.addChild(this._endLabel);
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._restartButton);
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        levelOneEnd.prototype.update = function () {
            this._kitchen.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        levelOneEnd.prototype._restartButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        return levelOneEnd;
    }(objects.Scene));
    scenes.levelOneEnd = levelOneEnd;
})(scenes || (scenes = {}));

//# sourceMappingURL=levelOneEnd.js.map
