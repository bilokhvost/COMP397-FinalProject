var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//*********************************************************************
//Source file: levelOneEnd.ts                                         *
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
            // score background 
            this._scoreBackground = new createjs.Bitmap(assets.getResult("scorebackground"));
            this._scoreBackground.x = 0;
            this._scoreBackground.y = 150;
            this.addChild(this._scoreBackground);
            //Add Menu Label
            this._endLabel = new objects.Label("GAME OVER", "60px Lucinda Fax", "#ffffff", config.Screen.CENTER_X, config.Screen.CENTER_Y - 50, true);
            this.addChild(this._endLabel);
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button("restartButton", config.Screen.CENTER_X - 40, config.Screen.CENTER_Y + 30, true);
            this.addChild(this._restartButton);
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            this._menuButton = new objects.Button("menuButton", config.Screen.CENTER_X + 80, config.Screen.CENTER_Y + 30, true);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._menuButtonClick, this);
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
            scene = config.Scene.LEVEL1;
            changeScene();
        };
        levelOneEnd.prototype._menuButtonClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return levelOneEnd;
    }(objects.Scene));
    scenes.levelOneEnd = levelOneEnd;
})(scenes || (scenes = {}));

//# sourceMappingURL=levelOneEnd.js.map
