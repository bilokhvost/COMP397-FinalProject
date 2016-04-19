 //*********************************************************************
//Source file: player.ts                                          *
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
 module objects {
     // PLAYER CLASS ++++++++++++++++++++++++++++++
     export class Player extends createjs.Sprite {
         // PRIVATE INSTANCE VARIABLES
         private _leftBounds: number;
         private _rightBounds: number;
         protected _topBounds: number;
         protected _bottomBounds: number;

         // PUBLIC INSTANCE VARIABLES
         public width: number;
         public height: number;
         public engineSound: createjs.AbstractSoundInstance;
         constructor() {
             super(textureAtlas, "player");

             this.width = this.getBounds().width;
             this.height = this.getBounds().height;
             this.regX = this.width * 0.5;
             this.regY = this.height * 0.5;
            this._leftBounds = this.width * 0.5;
             this._topBounds = this.regX+80;
             this._bottomBounds = config.Screen.HEIGHT - this.regX;
             this._rightBounds = config.Screen.WIDTH - (this.width * 0.75);

             //this.y = 360;
             // assign and play the engine sound
             this.engineSound = createjs.Sound.play("funk");
             // Loop engine sound forever
             this.engineSound.loop = -1;
         }
         // PRIVATE METHODS
         private _checkBounds(): void {
             // Left Bound Check
             if (this.x < this._leftBounds) {
                 this.x = this._leftBounds;
             }
             // Top Bound Check
             if (this.y < this._topBounds) {
                 this.y = this._topBounds;
             }

             //Bottom bound Check
             if (this.y > this._bottomBounds) {
                 this.y = this._bottomBounds;
             }
        }


         // PUBLIC METHODS
         public update(): void {
             this.y = stage.mouseY;
             this.x=stage.mouseX;
             this._checkBounds();
         }
     }
}