var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var levelOne = (function (_super) {
        __extends(levelOne, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function levelOne() {
            _super.call(this);
        }
        // PRIVATE METHODS
        /**
         * @method _updateScore
         * @return void
         */
        levelOne.prototype._updateScore = function () {
            this._timeLabel.text = "Time Remaining: " + timeValue;
            this._breadLabel.text = "B: " + breadValue + "/2";
            this._cheeseLabel.text = "C: " + cheeseValue + "/3";
            this._eggLabel.text = "E: " + eggValue + "/5";
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        levelOne.prototype.start = function () {
            // Set Bread Count
            this._breadCount = 1;
            // Set Egg Count
            this._eggCount = 1;
            // Set Mouse Count
            this._mouseCount = 4;
            livesValue = 5;
            breadValue = 0;
            cheeseValue = 0;
            eggValue = 0;
            this._timer = 30 * 60; //3 Seconds
            // Instantiate Bread array
            this._breads = new Array();
            // Instantiate Egg array
            this._eggs = new Array();
            // Instantiate Mouse array
            this._mice = new Array();
            // added kitchen to the scene
            this._kitchenOne = new objects.KitchenOne();
            this.addChild(this._kitchenOne);
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // added cheese to the scene
            this._cheese = new objects.Cheese();
            this.addChild(this._cheese);
            //added bread to the scene
            for (var bread = 0; bread < this._breadCount; bread++) {
                this._breads[bread] = new objects.Bread();
                this.addChild(this._breads[bread]);
            }
            //added egg to the scene
            for (var egg = 0; egg < this._eggCount; egg++) {
                this._eggs[egg] = new objects.Egg();
                this.addChild(this._eggs[egg]);
            }
            //added mouse to the scene
            for (var mouse = 0; mouse < this._mouseCount; mouse++) {
                this._mice[mouse] = new objects.Mouse();
                this.addChild(this._mice[mouse]);
            }
            //added LivesLabel to the scene
            this._timeLabel = new objects.Label("Lives: " + livesValue, "25px Consolas", "#ffff00", 10, 10, false);
            this.addChild(this._timeLabel);
            //added BreadLabel to the scene
            this._breadLabel = new objects.Label("B: " + breadValue + " /2", "25px Consolas", "#ffff00", 510, 10, false);
            this.addChild(this._breadLabel);
            //added CheeseLabel to the scene
            this._cheeseLabel = new objects.Label("C: " + cheeseValue + " /3", "25px Consolas", "#ffff00", 510, 40, false);
            this.addChild(this._cheeseLabel);
            //added EggLabel to the scene
            this._eggLabel = new objects.Label("E: " + eggValue + " /5", "25px Consolas", "#ffff00", 510, 70, false);
            this.addChild(this._eggLabel);
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        levelOne.prototype.update = function () {
            var _this = this;
            this._kitchenOne.update();
            this._player.update();
            this._cheese.update();
            this._breads.forEach(function (bread) {
                bread.update();
                _this._collision.check(bread);
            });
            this._eggs.forEach(function (egg) {
                egg.update();
                _this._collision.check(egg);
            });
            this._mice.forEach(function (mouse) {
                mouse.update();
                _this._collision.check(mouse);
            });
            this._collision.check(this._cheese);
            //Status Change
            if (cheeseValue >= 3) {
                this._cheeseLabel.color = "GREEN";
            }
            else {
                this._cheeseLabel.color = "YELLOW";
            }
            if (breadValue >= 2) {
                this._breadLabel.color = "GREEN";
            }
            if (eggValue >= 5) {
                this._eggLabel.color = "GREEN";
            }
            //Scene Change
            if (cheeseValue >= 3 && breadValue >= 2 && eggValue >= 5) {
                // Switch to the Transition Scene
                scene = config.Scene.LEVEL1CHANGE;
                changeScene();
            }
            //Calculate Time Remaining
            this._timer--;
            timeValue = Math.floor((this._timer) / 60);
            if (this._timer <= 0) {
                // Switch to the End Scene
                scene = config.Scene.LEVEL1END;
                changeScene();
            }
            this._updateScore();
        };
        return levelOne;
    }(objects.Scene));
    scenes.levelOne = levelOne;
})(scenes || (scenes = {}));

//# sourceMappingURL=levelOne.js.map
