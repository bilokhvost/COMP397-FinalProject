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
            this._liveValue = 100;
        }
        // PRIVATE METHODS
        /**
         * @method _updateScore
         * @return void
         */
        levelTwo.prototype._updateScore = function () {
            this._steakLabel.text = " " + steakValue + "/3";
            this._sauceLabel.text = " " + sauceValue + "/4";
            this._friesLabel.text = " " + friesValue + "/6";
            this._liveLabel.text = " " + this._liveValue;
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        levelTwo.prototype.start = function () {
            // Set Bread Count
            this._steakCount = 1;
            // Set Egg Count
            this._friesCount = 1;
            // Set Mouse Count
            this._pepperCount = 4;
            steakValue = 0;
            friesValue = 0;
            sauceValue = 0;
            this._timer = 30 * 60; //3 Seconds
            // Instantiate Pepper array
            this._peppers = new Array();
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
            for (var pepper = 0; pepper < this._pepperCount; pepper++) {
                this._peppers[pepper] = new objects.Pepper();
                this.addChild(this._peppers[pepper]);
            }
            //added LivesLabel to the scene
            this._liveLabel = new objects.Label(" " + this._liveValue, "25px Consolas", "#000000", 50, 15, false);
            this.addChild(this._liveLabel);
            //added SteakLabel to the scene
            this._steakLabel = new objects.Label(":" + steakValue + "/3", "25px Consolas", "#000000", 540, 10, false);
            this.addChild(this._steakLabel);
            //added SauceLabel to the scene
            this._sauceLabel = new objects.Label(":" + sauceValue + "/4", "25px Consolas", "#000000", 540, 50, false);
            this.addChild(this._sauceLabel);
            //added FriesLabel to the scene
            this._friesLabel = new objects.Label(":" + friesValue + "/6", "25px Consolas", "#000000", 540, 90, false);
            this.addChild(this._friesLabel);
            //add the images for scoring
            //life icon
            this._lifeIcon = new createjs.Bitmap(assets.getResult("life"));
            this._lifeIcon.x = 10;
            this._lifeIcon.y = 10;
            this.addChild(this._lifeIcon);
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
            this._peppers.forEach(function (pepper) {
                pepper.update();
                if (_this._collision.check(pepper)) {
                    //   this.removeChild(pepper);
                    _this._liveValue--;
                    _this.checkLife(_this._liveValue);
                }
            });
            if (this._collision.check(this._steak)) {
                this.removeChild(this._steak);
                this._steak = new objects.Steak();
                this.addChild(this._steak);
            }
            if (this._collision.check(this._fries)) {
                this.removeChild(this._fries);
                this._fries = new objects.Fries();
                this.addChild(this._fries);
            }
            if (this._collision.check(this._sauce)) {
                this.removeChild(this._sauce);
                this._sauce = new objects.Sauce();
                this.addChild(this._sauce);
            }
            //Status Change
            if (sauceValue >= 4) {
                this._sauceLabel.color = "GREEN";
            }
            if (steakValue >= 3) {
                this._steakLabel.color = "GREEN";
            }
            if (friesValue >= 6) {
                this._friesLabel.color = "GREEN";
            }
            //Scene Change
            if (sauceValue >= 4 && steakValue >= 3 && friesValue >= 6) {
                // Switch to the Transition Scene
                sauceValue *= 100;
                steakValue *= 200;
                friesValue *= 50;
                scoreLevelTwo = sauceValue + steakValue + friesValue;
                highScoreValue = scoreLevelOne + scoreLevelTwo;
                scene = config.Scene.LEVEL2CHANGE;
                changeScene();
            }
            this._updateScore();
        };
        levelTwo.prototype.checkLife = function (value) {
            if (value <= 0) {
                sauceValue *= 100;
                steakValue *= 200;
                friesValue *= 50;
                scoreLevelTwo = sauceValue + steakValue + friesValue;
                highScoreValue = scoreLevelOne + scoreLevelTwo;
                // Switch to the Game Over Scene
                scene = config.Scene.END;
                changeScene();
            }
        };
        return levelTwo;
    }(objects.Scene));
    scenes.levelTwo = levelTwo;
})(scenes || (scenes = {}));

//# sourceMappingURL=levelTwo.js.map
