var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Level Two SCENE
var scenes;
(function (scenes) {
    var levelTwo = (function (_super) {
        __extends(levelTwo, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function levelTwo() {
            _super.call(this);
        }
        // PRIVATE METHODS
        /**
         * @method _updateScore
         * @return void
         */
        levelTwo.prototype._updateScore = function () {
            this._timeLabel.text = "Time Remaining: " + timeValue;
            this._steakLabel.text = " " + steakValue + "/3";
            this._sauceLabel.text = " " + sauceValue + "/4";
            this._friesLabel.text = " " + friesValue + "/6";
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        levelTwo.prototype.start = function () {
            // Set Bread Count
            this._steakCount = 1;
            // Set Egg Count
            this._friesCount = 1;
            // Set Mouse Count
            this._mouseCount = 4;
            livesValue = 5;
            steakValue = 0;
            friesValue = 0;
            sauceValue = 0;
            this._timer = 30 * 60; //3 Seconds
            // Instantiate Mouse array
            this._mice = new Array();
            // added kitchen to the scene
            this._kitchenTwo = new objects.KitchenTwo();
            this.addChild(this._kitchenTwo);
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // added cheese to the scene
            this._steak = new objects.Steak();
            this.addChild(this._steak);
            this._fries = new objects.Fries();
            this.addChild(this._fries);
            this._sauce = new objects.Sauce();
            this.addChild(this._sauce);
            //added mouse to the scene
            for (var mouse = 0; mouse < this._mouseCount; mouse++) {
                this._mice[mouse] = new objects.Mouse();
                this.addChild(this._mice[mouse]);
            }
            //added LivesLabel to the scene
            this._timeLabel = new objects.Label("Lives: " + livesValue, "25px Consolas", "#000000", 10, 10, false);
            this.addChild(this._timeLabel);
            //added SteakLabel to the scene
            this._steakLabel = new objects.Label(":" + steakValue + "/3", "25px Consolas", "#000000", 540, 10, false);
            this.addChild(this._steakLabel);
            //added SauceLabel to the scene
            this._sauceLabel = new objects.Label(":" + sauceValue + "/4", "25px Consolas", "#000000", 540, 50, false);
            this.addChild(this._sauceLabel);
            //added FriesLabel to the scene
            this._friesLabel = new objects.Label(":" + friesValue + "/6", "25px Consolas", "#ffff00", 540, 90, false);
            this.addChild(this._friesLabel);
            //add the images for scoring
            //steak icon
            this._steakIcon = new createjs.Bitmap(assets.getResult("steak"));
            this._steakIcon.x = 500;
            this._steakIcon.y = 20;
            this.addChild(this._steakIcon);
            //sauce icon
            this._sauceIcon = new createjs.Bitmap(assets.getResult("sauce"));
            this._sauceIcon.x = 510;
            this._sauceIcon.y = 50;
            this.addChild(this._sauceIcon);
            //fries icon
            this._friesIcon = new createjs.Bitmap(assets.getResult("fries"));
            this._friesIcon.x = 500;
            this._friesIcon.y = 100;
            this.addChild(this._friesIcon);
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        levelTwo.prototype.update = function () {
            var _this = this;
            this._kitchenTwo.update();
            this._player.update();
            this._steak.update();
            this._fries.update();
            this._sauce.update();
            this._mice.forEach(function (mouse) {
                mouse.update();
                _this._collision.check(mouse);
            });
            this._collision.check(this._steak);
            this._collision.check(this._fries);
            this._collision.check(this._sauce);
            //Status Change
            if (sauceValue >= 3) {
                this._sauceLabel.color = "GREEN";
            }
            else {
                this._sauceLabel.color = "BLACK";
            }
            if (steakValue >= 2) {
                this._steakLabel.color = "GREEN";
            }
            if (friesValue >= 5) {
                this._friesLabel.color = "GREEN";
            }
            //Scene Change
            if (sauceValue >= 3 && steakValue >= 2 && sauceValue >= 5) {
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
        return levelTwo;
    }(objects.Scene));
    scenes.levelTwo = levelTwo;
})(scenes || (scenes = {}));

//# sourceMappingURL=levelTwo.js.map
