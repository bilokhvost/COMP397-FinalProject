    // Level Two SCENE
module scenes {
    export class levelTwo extends objects.Scene {
    //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _kitchenTwo: objects.KitchenTwo;
        private _steak: objects.Steak;
        private _steakCount: number;
         private _sauce: objects.Sauce;
        private _sauceCount: number;
        private _fries: objects.Fries;
        private _friesCount: number;
        private _mice: objects.Mouse[];
        private _mouseCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _timeLabel: objects.Label;
        private _steakLabel: objects.Label;
        private _sauceLabel: objects.Label;
        private _friesLabel: objects.Label;
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
            this._timeLabel.text = "Time Remaining: " + timeValue;
            this._steakLabel.text = "S[" + steakValue + "],";
            this._sauceLabel.text = "K[" + sauceValue + "],";
            this._friesLabel.text = "F[" + friesValue + "]";
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // Set Bread Count
            this._steakCount = 1;

            // Set Egg Count
            this._friesCount = 1;

            // Set Mouse Count
            this._mouseCount = 4;

            livesValue = 5;
            steakValue = 0;
            friesValue = 0;
            sauceValue = 0;
            this._timer= 30 * 60; //3 Seconds


            // Instantiate Mouse array
            this._mice = new Array<objects.Mouse>();

            // added kitchen to the scene
            this._kitchenTwo = new objects.KitchenTwo();
            this.addChild(this._kitchenTwo);

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            // added cheese to the scene
            this._steak = new objects.Steak();
           this.addChild(this._steak);
            
           this._fries = new objects.Fries();
            this.addChild(this._fries);
            
           this._sauce=new objects.Sauce();
          this.addChild(this._sauce);
            

            //added mouse to the scene
            for (var mouse: number = 0; mouse < this._mouseCount; mouse++) {
                this._mice[mouse] = new objects.Mouse();
                this.addChild(this._mice[mouse]);
            }

            //added LivesLabel to the scene
            this._timeLabel = new objects.Label(
                "Lives: " + livesValue,
                "25px Consolas",
                "#000000",
                10, 10, false
            );
            this.addChild(this._timeLabel);

            //added BreadLabel to the scene
            this._steakLabel = new objects.Label(
                "S[" + steakValue + "],",
                "25px Consolas",
                "#000000",
                440, 10, false
            );
            this.addChild(this._steakLabel);

            //added CheeseLabel to the scene
            this._sauceLabel = new objects.Label(
                "K[" + sauceValue + "],",
                "25px Consolas",
                "#000000",
                510, 10, false
            );
            this.addChild(this._sauceLabel);

            //added EggLabel to the scene
            this._friesLabel = new objects.Label(
                "F[" + friesValue + "]",
                "25px Consolas",
                "#ffff00",
                580, 10, false
            );
            this.addChild(this._friesLabel);

            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);

            // add this scene to the global stage container
            stage.addChild(this);
        }



        // PLAY Scene updates here
        public update(): void {
            this._kitchenTwo.update();
            this._player.update();

            this._steak.update();
            this._fries.update();
            this._sauce.update();
            
            this._mice.forEach(mouse => {
                mouse.update();
                this._collision.check(mouse);
            });

            this._collision.check(this._steak);
            this._collision.check(this._fries);
            this._collision.check(this._sauce);

            //Status Change
            if (sauceValue >= 3) {
                this._sauceLabel.color = "GREEN";
            }
            else{
                this._sauceLabel.color = "BLACK";
            }

            if (steakValue >= 2) {
                this._steakLabel.color = "GREEN";
            }

            if (friesValue >= 5) {
                this._friesLabel.color = "GREEN";
            }

            //Scene Change
            if (sauceValue >= 3 && steakValue >= 2 && sauceValue >= 5) {
                // Switch to the Transition Scene
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