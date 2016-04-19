// PLAY SCENE
module scenes {
    export class levelThree extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _kitchenThree: objects.KitchenThree;
        private _strawberry: objects.Strawberry ;
        private _cream: objects.Cream;     
        private _pie: objects.Pie;     
        private _birds: objects.Bird[];
        private _birdCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _timeLabel: objects.Label;
        private _creamLabel: objects.Label;
        private _strawberryLabel: objects.Label;
        private _pieLabel: objects.Label;
        // icons for images
        private _pieIcon:createjs.Bitmap;
        private _strawberryIcon:createjs.Bitmap;
        private _creamIcon:createjs.Bitmap;
        private _timerIcon:createjs.Bitmap;
        private _timer: number;


        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        // PRIVATE METHODS

        /**
         * @method _updateScore
         * @return void
         */
        private _updateScore(): void {
            this._timeLabel.text = " " + timeValue;
            this._creamLabel.text = " " + creamValue + "/2";
            this._strawberryLabel.text = " " + strawberryValue + "/3";
            this._pieLabel.text = " " + pieValue + "/5";
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
        
            // Set bird Count
            this._birdCount = 3;

            livesValue = 5;
            creamValue = 0;
            strawberryValue = 0;
            pieValue = 0;
            this._timer= 30 * 60; //3 Seconds
 // Instantiate Pie array
            this._pie = new objects.Pie();


            // Instantiate Cream array
            this._cream = new objects.Cream();

           
            // Instantiate birds array
            this._birds = new Array<objects.Bird>();

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
            for (var bird: number = 0; bird < this._birdCount; bird++) {
                this._birds[bird] = new objects.Bird();
                this.addChild(this._birds[bird]);
            }

            //added LivesLabel to the scene
            this._timeLabel = new objects.Label(
                " " + livesValue,
                "25px Consolas",
                "#000000",
                50, 15, false
            );
            this.addChild(this._timeLabel);

            //added creamLabel to the scene
            this._creamLabel = new objects.Label(
                ": " + creamValue + " /2",
                "25px Consolas",
                "#000000",
               530, 5, false
            );
            this.addChild(this._creamLabel);

            //added StrawberryLabel to the scene
            this._strawberryLabel = new objects.Label(
                ": " + strawberryValue + " /3",
                "25px Consolas",
                "#000000",
                530, 60, false
            );
            this.addChild(this._strawberryLabel);

            //added PieLabel to the scene
            
            this._pieLabel = new objects.Label(
                ": " + pieValue + " /5",
                "25px Consolas",
                "#000000",
                540, 100, false
            );
            this.addChild(this._pieLabel);
            //add the images for scoring
            // timer Icon
            this._timerIcon= new createjs.Bitmap(assets.getResult("timer"));
            this._timerIcon.x=10;
            this._timerIcon.y=10;
            this.addChild(this._timerIcon);
            
            //cream icon
            this._creamIcon= new createjs.Bitmap(assets.getResult("cream"));
            this._creamIcon.x=500;
            this._creamIcon.y=5;
            this.addChild(this._creamIcon);
            
            //strawberry icon
            this._strawberryIcon= new createjs.Bitmap(assets.getResult("strawberry"));
            this._strawberryIcon.x=500;
            this._strawberryIcon.y=60;
            this.addChild(this._strawberryIcon);
            
            //Pie icon
            this._pieIcon= new createjs.Bitmap(assets.getResult("pie"));
            this._pieIcon.x=500;
            this._pieIcon.y=100;
            this.addChild(this._pieIcon);
            

            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            

            // add this scene to the global stage container
            stage.addChild(this);
        }



        // PLAY Scene updates here
        public update(): void {
            this._kitchenThree.update();
            this._player.update();
            
            this._strawberry.update();

            this._cream.update();
           if(this._collision.check(this._cream)){
               this.removeChild(this._cream);
               this._cream=new objects.Cream();
               this.addChild(this._cream);
           }
           

            this._pie.update();
             if(this._collision.check(this._pie)){
              this.removeChild(this._pie);
               this._pie=new objects.Pie();
               this.addChild(this._pie);
             }
            

            this._birds.forEach(bird => {
                bird.update();
                if(this._collision.check(bird)){
                    
                }
            });

           if(this._collision.check(this._strawberry)){
               this.removeChild(this._strawberry);
               this._strawberry=new objects.Strawberry();
               this.addChild(this._strawberry);
           }

            //Status Change
            if (strawberryValue >= 3) {
                this._strawberryLabel.color = "GREEN";
            }
            else{
                this._strawberryLabel.color = "BLACK";
            }
            if (creamValue >= 2) {
                this._creamLabel.color = "GREEN";
            }

            if (pieValue >= 5) {
                this._pieLabel.color = "GREEN";
            }

            //Scene Change
            if (strawberryValue >= 3 && creamValue >= 2 && pieValue >= 5) {
                // Switch to the Transition Scene
               creamValue*=100;
               strawberryValue*=200;
               pieValue*=50;
               scoreLevelOne = creamValue+strawberryValue+pieValue;
                scene = config.Scene.LEVEL1CHANGE;
                changeScene();
            }

            
            //Calculate Time Remaining
            this._timer--;
            timeValue = Math.floor((this._timer)/60);
            if(this._timer<=0){
                // Switch to the End Scene
                
                scene = config.Scene.LEVEL1END;
                changeScene();
            }
            this._updateScore();
        }


        //EVENT HANDLERS ++++++++++++++++++++

    }
}