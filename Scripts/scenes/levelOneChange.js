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
            this._kitchen = new objects.kitchenOne();
            this.addChild(this._kitchen);
            //Add Menu Label
            this._endLabel = new objects.Label("Level 1 completed", "60px Consolas", "#ffff00", config.Screen.CENTER_X, config.Screen.CENTER_Y - 160, true);
            this.addChild(this._endLabel);
            //Add Score Label
            this._scoreLabel = new objects.Label("Loading Level 2, please wait...", "25px Consolas", "#ffff00", config.Screen.CENTER_X, config.Screen.CENTER_Y - 80, true);
            this.addChild(this._scoreLabel);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        levelOneChange.prototype.update = function () {
            this._kitchen.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        levelOneChange.prototype._restartButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        return levelOneChange;
    }(objects.Scene));
    scenes.levelOneChange = levelOneChange;
})(scenes || (scenes = {}));

//# sourceMappingURL=levelOneChange.js.map
