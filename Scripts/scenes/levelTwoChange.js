var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//*********************************************************************
//Source file: levelTwoChnge.ts                                       *
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
    var LevelTwoChange = (function (_super) {
        __extends(LevelTwoChange, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function LevelTwoChange() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        LevelTwoChange.prototype.start = function () {
            // added ocean to the scene
            this._kitchen = new objects.KitchenTwo();
            this.addChild(this._kitchen);
            // score background 
            this._scoreBackground = new createjs.Bitmap(assets.getResult("scorebackgroundWin"));
            this._scoreBackground.x = 0;
            this._scoreBackground.y = 120;
            this.addChild(this._scoreBackground);
            //Add Menu Label
            this._endLabel = new objects.Label("Level 2 completed", "60px Lucinda Fax", "#ffffff", config.Screen.CENTER_X, config.Screen.CENTER_Y - 60, true);
            this.addChild(this._endLabel);
            this._highScoreLabel = new objects.Label("New score: " + steakValue + " + " + friesValue + " + " + sauceValue + " = " + scoreLevelTwo, "25px Lucinda Fax", "#ffffff", config.Screen.CENTER_X, config.Screen.CENTER_Y + 25, true);
            this.addChild(this._highScoreLabel);
            //Add Score Label
            this._totalScoreLabel = new objects.Label("Total score: " + highScoreValue, "25px Lucinda Fax", "#ffffff", config.Screen.CENTER_X, config.Screen.CENTER_Y + 50, true);
            this.addChild(this._totalScoreLabel);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("NextButton", config.Screen.CENTER_X - 50, config.Screen.CENTER_Y + 80, false);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        LevelTwoChange.prototype.update = function () {
            this._kitchen.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        LevelTwoChange.prototype._startButtonClick = function (event) {
            // Switch to the LEVEL ONE Scene
            scene = config.Scene.LEVEL3;
            changeScene();
        };
        return LevelTwoChange;
    }(objects.Scene));
    scenes.LevelTwoChange = LevelTwoChange;
})(scenes || (scenes = {}));

//# sourceMappingURL=levelTwoChange.js.map
