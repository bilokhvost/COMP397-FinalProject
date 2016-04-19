module scenes {
    export class Instruction extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
          private _menuBackground: createjs.Bitmap;
      
        private _startButton: objects.Button;
        private _level1Button:objects.Button;
        private _level2Button:objects.Button;
        private _level3Button:objects.Button;
        private _restartButton:objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
           //Add Menu background
              this._menuBackground = new createjs.Bitmap(assets.getResult("background"));
            this.addChild(this._menuBackground);  
            
            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X-50,
                config.Screen.CENTER_Y+160 , false);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick, this);            
            
             this._level1Button = new objects.Button(
                "level1Button",
                config.Screen.CENTER_X-150,
                config.Screen.CENTER_Y+200 , false);
            this.addChild(this._level1Button);
            this._level1Button.on("click", this._level1ButtonClick, this);
            
             this._level2Button = new objects.Button(
                "level2Button",
                config.Screen.CENTER_X-50,
                config.Screen.CENTER_Y+200 , false);
            this.addChild(this._level2Button);
            this._level2Button.on("click", this._level2ButtonClick, this);
              
               this._level3Button = new objects.Button(
                "level3Button",
                config.Screen.CENTER_X+50,
                config.Screen.CENTER_Y+200 , false);
            this.addChild(this._level3Button);
            this._level3Button.on("click", this._level3ButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {           
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // PLAY SCENE Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEVEL ONE Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        }
        private _level1ButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEVEL ONE Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        }
         // INSTRUCTIONS Button click event handler
        private _level2ButtonClick(event: createjs.MouseEvent) {
            // Switch to the INSTRUCTIONS Scene
            scene = config.Scene.LEVEL2;
            changeScene();
        }
          // EXIT Button click event handler
          private _level3ButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene

            scene = config.Scene.LEVEL3;


            changeScene();
        }

    }
}