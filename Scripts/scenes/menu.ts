﻿// MENU SCENE
//*********************************************************************
//Source file: menu.ts                                                *
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
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
          private _menuBackground: createjs.Bitmap;
      
        private _startButton: objects.Button;
         private _instructionsButton: objects.Button;
          private _exitButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
           //Add Menu background
              this._menuBackground = new createjs.Bitmap(assets.getResult("menuBackground"));
            this.addChild(this._menuBackground);  
            
            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X-50,
                config.Screen.CENTER_Y-150 , false);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick, this);            
            
               // add the Instructions button to the MENU scene
            this._instructionsButton = new objects.Button(
                "InstructionsButton",
                config.Screen.CENTER_X-50,
                config.Screen.CENTER_Y-80, false);
            this.addChild(this._instructionsButton);
            // Start Button event listener
            this._instructionsButton.on("click", this._instructionsButtonClick, this);
            
            
               // add the Exit button to the MENU scene
            this._exitButton = new objects.Button(
                "ExitButton",
                config.Screen.CENTER_X-50,
                config.Screen.CENTER_Y -10, false);
            this.addChild(this._exitButton);
            // Start Button event listener
            this._exitButton.on("click", this._exitButtonClick, this);
            
            
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
        
         // INSTRUCTIONS Button click event handler
        private _instructionsButtonClick(event: createjs.MouseEvent) {
            // Switch to the INSTRUCTIONS Scene
            scene = config.Scene.INSTRUCTION;
            changeScene();
        }
          // EXIT Button click event handler
          private _exitButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene

            scene = config.Scene.WIN ;


            changeScene();
        }

    }
}