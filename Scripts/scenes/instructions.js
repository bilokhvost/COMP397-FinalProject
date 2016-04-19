var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//*********************************************************************
//Source file: instructions.ts                                        *
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
    var Instruction = (function (_super) {
        __extends(Instruction, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Instruction() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Instruction.prototype.start = function () {
            //Add Menu background
            this._menuBackground = new createjs.Bitmap(assets.getResult("background"));
            this.addChild(this._menuBackground);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X - 50, config.Screen.CENTER_Y + 160, false);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick, this);
            this._level1Button = new objects.Button("level1Button", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 200, false);
            this.addChild(this._level1Button);
            this._level1Button.on("click", this._level1ButtonClick, this);
            this._level2Button = new objects.Button("level2Button", config.Screen.CENTER_X - 50, config.Screen.CENTER_Y + 200, false);
            this.addChild(this._level2Button);
            this._level2Button.on("click", this._level2ButtonClick, this);
            this._level3Button = new objects.Button("level3Button", config.Screen.CENTER_X + 50, config.Screen.CENTER_Y + 200, false);
            this.addChild(this._level3Button);
            this._level3Button.on("click", this._level3ButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Instruction.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // PLAY SCENE Button click event handler
        Instruction.prototype._startButtonClick = function (event) {
            // Switch to the LEVEL ONE Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        };
        Instruction.prototype._level1ButtonClick = function (event) {
            // Switch to the LEVEL ONE Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        };
        // INSTRUCTIONS Button click event handler
        Instruction.prototype._level2ButtonClick = function (event) {
            // Switch to the INSTRUCTIONS Scene
            scene = config.Scene.LEVEL2;
            changeScene();
        };
        // EXIT Button click event handler
        Instruction.prototype._level3ButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.LEVEL3;
            changeScene();
        };
        return Instruction;
    }(objects.Scene));
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));

//# sourceMappingURL=instructions.js.map
