var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
//*********************************************************************
//Source file: levelOne.ts                                            *
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
            this._timeLabel.text = " " + timeValue;
            this._breadLabel.text = " " + breadValue + "/2";
            this._cheeseLabel.text = " " + cheeseValue + "/3";
            this._eggLabel.text = " " + eggValue + "/5";
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        levelOne.prototype.start = function () {
            // Set Mouse Count
            this._mouseCount = 3;
            livesValue = 5;
            breadValue = 0;
            cheeseValue = 0;
            eggValue = 0;
            this._timer = 30 * 60; //3 Seconds
            // Instantiate Bread array
            this._bread = new objects.Bread();
            // Instantiate Egg array
            this._egg = new objects.Egg();
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
            this.addChild(this._bread);
            //added egg to the scene
            this.addChild(this._egg);
            //added mouse to the scene
            for (var mouse = 0; mouse < this._mouseCount; mouse++) {
                this._mice[mouse] = new objects.Mouse();
                this.addChild(this._mice[mouse]);
            }
            //added LivesLabel to the scene
            this._timeLabel = new objects.Label(" " + livesValue, "25px Lucinda Fax", "#007ec0", 60, 20, false);
            this.addChild(this._timeLabel);
            //adding game panel
            this._panel = new createjs.Bitmap(assets.getResult("panel"));
            this._panel.x = 490;
            this._panel.y = -10;
            this.addChild(this._panel);
            //added BreadLabel to the scene
            this._breadLabel = new objects.Label(": " + breadValue + " /2", "25px Lucinda Fax", "#007ec0", 540, 10, false);
            this.addChild(this._breadLabel);
            //added CheeseLabel to the scene
            this._cheeseLabel = new objects.Label(": " + cheeseValue + " /3", "25px Lucinda Fax", "#007ec0", 540, 50, false);
            this.addChild(this._cheeseLabel);
            //added EggLabel to the scene
            this._eggLabel = new objects.Label(": " + eggValue + " /5", "25px Lucinda Fax", "#007ec0", 540, 90, false);
            this.addChild(this._eggLabel);
            //add the images for scoring
            // timer Icon
            this._timerIcon = new createjs.Bitmap(assets.getResult("timer"));
            this._timerIcon.x = 10;
            this._timerIcon.y = 10;
            this.addChild(this._timerIcon);
            //bread icon
            this._breadIcon = new createjs.Bitmap(assets.getResult("bread"));
            this._breadIcon.x = 500;
            this._breadIcon.y = 10;
            this.addChild(this._breadIcon);
            //cheese icon
            this._cheeseIcon = new createjs.Bitmap(assets.getResult("cheese"));
            this._cheeseIcon.x = 500;
            this._cheeseIcon.y = 50;
            this.addChild(this._cheeseIcon);
            //egg icon
            this._eggicon = new createjs.Bitmap(assets.getResult("egg"));
            this._eggicon.x = 500;
            this._eggicon.y = 90;
            this.addChild(this._eggicon);
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
            this._bread.update();
            if (this._collision.check(this._bread)) {
                this.removeChild(this._bread);
                this._bread = new objects.Bread();
                this.addChild(this._bread);
            }
            this._egg.update();
            if (this._collision.check(this._egg)) {
                this.removeChild(this._egg);
                this._egg = new objects.Egg();
                this.addChild(this._egg);
            }
            this._mice.forEach(function (mouse) {
                mouse.update();
                if (_this._collision.check(mouse)) {
                }
            });
            if (this._collision.check(this._cheese)) {
                this.removeChild(this._cheese);
                this._cheese = new objects.Cheese();
                this.addChild(this._cheese);
            }
            //Status Change
            if (cheeseValue >= 3) {
                this._cheeseLabel.color = "GREEN";
            }
            else {
                this._cheeseLabel.color = "#007ec0";
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
                breadValue *= 100;
                cheeseValue *= 200;
                eggValue *= 50;
                scoreLevelOne = breadValue + cheeseValue + eggValue;
                scene = config.Scene.LEVEL1CHANGE;
                changeScene();
            }
            //Calculate Time Remaining
            this._timer--;
            timeValue = Math.floor((this._timer) / 60);
            if (this._timer <= 0) {
                // Switch to the End Scene
                breadValue *= 100;
                cheeseValue *= 200;
                eggValue *= 50;
                scoreLevelOne = breadValue + cheeseValue + eggValue;
                highScoreValue = scoreLevelOne;
                scene = config.Scene.END;
                changeScene();
            }
            this._updateScore();
        };
        return levelOne;
    }(objects.Scene));
    scenes.levelOne = levelOne;
})(scenes || (scenes = {}));

//# sourceMappingURL=levelOne.js.map
