module scenes {
    export class LevelTwoChange extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _kitchen: objects.KitchenTwo;
        private _endLabel: objects.Label;
        private _scoreLabel: objects.Label;
        private _nextLabel: objects.Label;
        private _highScoreLabel: objects.Label;
         private _totalScoreLabel: objects.Label;
         private _startButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS ++++++++++++++++++++


        // Start Method
        public start(): void {
            

            // added ocean to the scene
            this._kitchen = new objects.KitchenTwo();
            this.addChild(this._kitchen);
          
            //Add Menu Label
            this._endLabel = new objects.Label(
                "Level 2 completed", "60px Consolas",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 80, true);
            this.addChild(this._endLabel);
            
             this._scoreLabel = new objects.Label(
                "Previous score: " + scoreLevelOne, "25px Consolas",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._scoreLabel);
            
            
            this._highScoreLabel =  new objects.Label(
           "New score: " + steakValue+" + " + friesValue+" + "+ sauceValue+" = " + scoreLevelTwo, "25px Consolas",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y+25, true);
            this.addChild(this._highScoreLabel);

            //Add Score Label
          this._totalScoreLabel = new objects.Label(
                "Total score: " + highScoreValue, "25px Consolas",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y+50, true);
            this.addChild(this._totalScoreLabel);
            
            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "NextButton",
                config.Screen.CENTER_X-50,
                config.Screen.CENTER_Y+80 , false);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick, this);            
            


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._kitchen.update();
        }


        //EVENT HANDLERS ++++++++++++++++++++

        // START_OVER Button click event handler
     private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEVEL ONE Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        }
    }
}