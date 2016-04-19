// LEFT_CAVE SCENE
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _kitchen: objects.KitchenTwo;
        private _endLabel: objects.Label;
        private _scoreLabel: objects.Label
        private _highScoreLabel: objects.Label;
        private _restartButton: objects.Button;
        private _scoreBackground: createjs.Bitmap;
        private _menuButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS ++++++++++++++++++++


        // Start Method
        public start(): void {
            //Set High Score Value


            // added ocean to the scene
            this._kitchen = new objects.KitchenTwo();
            this.addChild(this._kitchen);
            // score background 
            this._scoreBackground = new createjs.Bitmap(assets.getResult("scorebackground"));
            this._scoreBackground.x = 0;
            this._scoreBackground.y = 100;
            this.addChild(this._scoreBackground);
            //Add Menu Label
            this._endLabel = new objects.Label(
                "GAME OVER", "60px Lucinda Fax",
                "#ffffff",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 100, true);
            this.addChild(this._endLabel);

            //Add Score Label
            this._scoreLabel = new objects.Label(
                "Your Score: " + highScoreValue, "40px Lucinda Fax",
                "#ffffff",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 50, true);
            this.addChild(this._scoreLabel);



            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button(
                "restartButton",
                config.Screen.CENTER_X -40,
                config.Screen.CENTER_Y + 30, true);
            this.addChild(this._restartButton)
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            
            this._menuButton = new objects.Button(
                "menuButton",
                config.Screen.CENTER_X + 80,
                config.Screen.CENTER_Y + 30, true);
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