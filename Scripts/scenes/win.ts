//*********************************************************************
//Source file: win.ts                                                 *
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
module scenes {
    export class Win extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _kitchen: objects.KitchenThree;
        private _endLabel: objects.Label;
        private _scoreLabel: objects.Label;
        private _nextLabel: objects.Label;
        private _highScoreLabel: objects.Label;
        private _totalScoreLabel: objects.Label;
        private _menuButton: objects.Button;
        private _restartButton: objects.Button;
        private _scoreBackground: createjs.Bitmap;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS ++++++++++++++++++++


        // Start Method
        public start(): void {


            // added kitchen to the scene
            this._kitchen = new objects.KitchenThree();
            this.addChild(this._kitchen);
            // score background 
            this._scoreBackground = new createjs.Bitmap(assets.getResult("scorebackgroundWin"));
            this._scoreBackground.x = 0;
            this._scoreBackground.y = 100;
            this.addChild(this._scoreBackground);
            //Add Menu Label
            this._endLabel = new objects.Label(
                "CONGRATULATIONS!!!", "50px Lucinda Fax",
                "#ffffff",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 60, true);
            this.addChild(this._endLabel);

            this._highScoreLabel = new objects.Label(
                "New score: " + creamValue + " + " + strawberryValue + " + " + pieValue + " = "  + scoreLevelThree, "25px Lucinda Fax",
                "#ffffff",
                config.Screen.CENTER_X, config.Screen.CENTER_Y + 25, true);
            this.addChild(this._highScoreLabel);

            //Add Score Label
            this._totalScoreLabel = new objects.Label(
                "Total score: " + highScoreValue, "25px Lucinda Fax",
                "#ffffff",
                config.Screen.CENTER_X, config.Screen.CENTER_Y + 50, true);
            this.addChild(this._totalScoreLabel);

         
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button(
                "restartButton",
                config.Screen.CENTER_X -40,
                config.Screen.CENTER_Y +120, true);
            this.addChild(this._restartButton)
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            
            this._menuButton = new objects.Button(
                "menuButton",
                config.Screen.CENTER_X + 80,
                config.Screen.CENTER_Y +120, true);
                this.addChild(this._menuButton);
            this._menuButton.on("click", this._menuButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._kitchen.update();
        }


        //EVENT HANDLERS ++++++++++++++++++++

        // START_OVER Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        }
        private _menuButtonClick(event: createjs.MouseEvent) {
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}