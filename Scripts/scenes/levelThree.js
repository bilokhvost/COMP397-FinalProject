var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Level Three 
var scenes;
(function (scenes) {
    var levelThree = (function (_super) {
        __extends(levelThree, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function levelThree() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        levelThree.prototype.start = function () {
            //set monster 
            this._birdCount = 4;
            this._birds = new Array();
            //add grass to the scene
            this._kitchenThree = new objects.kitchenThree();
            this.addChild(this._kitchenThree);
            //add the eggs to the scene
            this._cream = new objects.Cream();
            this.addChild(this._cream);
            //add the player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //initialize socre and lives values
            this.scoreValue = 0;
            this.livesValue = 5;
            //add the monster to the scene
            for (var bird = 0; bird < this._birdCount; bird++) {
                this._birds[bird] = new objects.Bird();
                this.addChild(this._birds[bird]);
            }
            this.livesLabel = new createjs.Text("LIVES: " + this.livesValue, "40px Consolas", "#ffffff");
            this.livesLabel.x = config.Screen.WIDTH * 0.1;
            this.livesLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.addChild(this.livesLabel);
            //Add Score Label
            this.scoreLabel = new createjs.Text("SCORE: " + this.scoreValue, "40px Consolas", "#ffffff");
            this.scoreLabel.x = config.Screen.WIDTH * 0.6;
            this.scoreLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.addChild(this.scoreLabel);
            //added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        levelThree.prototype.update = function () {
            var _this = this;
            this._kitchenThree.update();
            this._cream.update();
            this._player.update();
            this._birds.forEach(function (monster) {
                monster.update();
                //this._collision.check(monster);
                if (_this._collision.check(monster)) {
                    _this.livesValue -= 1;
                    //this.removeChild(monster);
                    _this.livesLabel.text = "Lives: " + _this.livesValue;
                }
            });
            if (this._collision.check(this._cream)) {
                this.scoreValue += 10;
                this.removeChild(this._cream);
                this.scoreLabel.text = "Score: " + this.scoreValue;
                this._cream = new objects.Cream();
                this.addChild(this._cream);
            }
            //EVENT HANDLERS ++++++++++++++++++++
        };
        return levelThree;
    }(objects.Scene));
    scenes.levelThree = levelThree;
})(scenes || (scenes = {}));

//# sourceMappingURL=levelThree.js.map
