var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
//*********************************************************************
//Source file: levelThree.ts                                          *
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
    var levelThree = (function (_super) {
        __extends(levelThree, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function levelThree() {
            _super.call(this);
        }
        // PRIVATE METHODS
        /**
         * @method _updateScore
         * @return void
         */
        levelThree.prototype._updateScore = function () {
            this._timeLabel.text = " " + timeValue;
            this._creamLabel.text = " " + creamValue + "/2";
            this._strawberryLabel.text = " " + strawberryValue + "/3";
            this._pieLabel.text = " " + pieValue + "/5";
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        levelThree.prototype.start = function () {
            // Set bird Count
            this._birdCount = 3;
            livesValue = 5;
            creamValue = 0;
            strawberryValue = 0;
            pieValue = 0;
            this._timer = 30 * 60; //3 Seconds
            // Instantiate Pie array
            this._pie = new objects.Pie();
            // Instantiate Cream array
            this._cream = new objects.Cream();
            // Instantiate birds array
            this._birds = new Array();
            // added kitchen to the scene
            this._kitchenThree = new objects.KitchenThree();
            this.addChild(this._kitchenThree);
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // added strawberry to the scene
            this._strawberry = new objects.Strawberry();
            this.addChild(this._strawberry);
            //added cream to the scene
            this.addChild(this._cream);
            //added pie to the scene
            this.addChild(this._pie);
            //added bird to the scene
            for (var bird = 0; bird < this._birdCount; bird++) {
                this._birds[bird] = new objects.Bird();
                this.addChild(this._birds[bird]);
            }
            this._timeContainer = new createjs.Shape;
            this._timeContainer.graphics.beginFill("#ffffff").drawRect(5, 10, 100, 50);
            this._timeContainer.alpha = 0.9;
            this.addChild(this._timeContainer);
            //added LivesLabel to the scene
            this._timeLabel = new objects.Label(" " + livesValue, "25px Lucinda Fax", "#007ec0", 60, 20, false);
            this.addChild(this._timeLabel);
            //adding game panel
            this._panel = new createjs.Bitmap(assets.getResult("backscore3"));
            this._panel.x = 490;
            this._panel.y = -10;
            this.addChild(this._panel);
            //added creamLabel to the scene
            this._creamLabel = new objects.Label(": " + creamValue + " /2", "20px Lucinda Fax", "#ffffff", 550, 5, false);
            this.addChild(this._creamLabel);
            //added StrawberryLabel to the scene
            this._strawberryLabel = new objects.Label(": " + strawberryValue + " /3", "20px Lucinda Fax", "#ffffff", 550, 40, false);
            this.addChild(this._strawberryLabel);
            //added PieLabel to the scene
            this._pieLabel = new objects.Label("   :   " + pieValue + " /5", "20px Lucinda Fax", "#ffffff", 550, 70, false);
            this.addChild(this._pieLabel);
            //add the images for scoring
            // timer Icon
            this._timerIcon = new createjs.Bitmap(assets.getResult("timer"));
            this._timerIcon.x = 10;
            this._timerIcon.y = 10;
            this.addChild(this._timerIcon);
            /*

            //cream icon
            this._creamIcon = new createjs.Bitmap(assets.getResult("cream"));
            this._creamIcon.x = 500;
            this._creamIcon.y = 5;
            this.addChild(this._creamIcon);

            //strawberry icon
            this._strawberryIcon = new createjs.Bitmap(assets.getResult("strawberry"));
            this._strawberryIcon.x = 500;
            this._strawberryIcon.y = 60;
            this.addChild(this._strawberryIcon);

            //Pie icon
            this._pieIcon = new createjs.Bitmap(assets.getResult("pie"));
            this._pieIcon.x = 500;
            this._pieIcon.y = 100;
            this.addChild(this._pieIcon);
*/
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        levelThree.prototype.update = function () {
            var _this = this;
            this._kitchenThree.update();
            this._player.update();
            this._strawberry.update();
            this._cream.update();
            if (this._collision.check(this._cream)) {
                this.removeChild(this._cream);
                this._cream = new objects.Cream();
                this.addChild(this._cream);
            }
            this._pie.update();
            if (this._collision.check(this._pie)) {
                this.removeChild(this._pie);
                this._pie = new objects.Pie();
                this.addChild(this._pie);
            }
            this._birds.forEach(function (bird) {
                bird.update();
                if (_this._collision.check(bird)) {
                }
            });
            if (this._collision.check(this._strawberry)) {
                this.removeChild(this._strawberry);
                this._strawberry = new objects.Strawberry();
                this.addChild(this._strawberry);
            }
            //Status Change
            if (strawberryValue >= 3) {
                this._strawberryLabel.color = "#053702";
            }
            else {
                this._strawberryLabel.color = "#ffffff";
            }
            if (creamValue >= 2) {
                this._creamLabel.color = "#053702";
            }
            if (pieValue >= 5) {
                this._pieLabel.color = "#053702";
            }
            //Scene Change
            if (strawberryValue >= 3 && creamValue >= 2 && pieValue >= 5) {
                // Switch to the Transition Scene
                creamValue *= 100;
                strawberryValue *= 200;
                pieValue *= 50;
                scoreLevelThree = creamValue + strawberryValue + pieValue;
                highScoreValue = scoreLevelOne + scoreLevelTwo + scoreLevelThree;
                scene = config.Scene.WIN;
                changeScene();
            }
            //Calculate Time Remaining
            this._timer--;
            timeValue = Math.floor((this._timer) / 60);
            if (this._timer <= 0) {
                // Switch to the End Scene
                creamValue *= 100;
                strawberryValue *= 200;
                pieValue *= 50;
                scoreLevelThree = creamValue + strawberryValue + pieValue;
                highScoreValue = scoreLevelOne + scoreLevelTwo + scoreLevelThree;
                scene = config.Scene.END;
                changeScene();
            }
            this._updateScore();
        };
        return levelThree;
    }(objects.Scene));
    scenes.levelThree = levelThree;
})(scenes || (scenes = {}));

//# sourceMappingURL=levelThree.js.map
