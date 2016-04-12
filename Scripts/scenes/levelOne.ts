// PLAY SCENE
module scenes {
    export class levelOne extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _kitchenOne: objects.KitchenOne;
        private _cheese: objects.Cheese;
        private _breads: objects.Bread[];
        private _breadCount: number;
        private _eggs: objects.Egg[];
        private _eggCount: number;
        private _mice: objects.Mouse[];
        private _mouseCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _timeLabel: objects.Label;
        private _breadLabel: objects.Label;
        private _cheeseLabel: objects.Label;
        private _eggLabel: objects.Label;
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
            this._breadLabel.text = "B[" + breadValue + "],";
            this._cheeseLabel.text = "C[" + cheeseValue + "],";
            this._eggLabel.text = "E[" + eggValue + "]";
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // Set Bread Count
            this._breadCount = 1;

            // Set Egg Count
            this._eggCount = 1;

            // Set Mouse Count
            this._mouseCount = 4;

            livesValue = 5;
            breadValue = 0;
            cheeseValue = 0;
            eggValue = 0;
            this._timer= 30 * 60; //3 Seconds


            // Instantiate Bread array
            this._breads = new Array<objects.Bread>();

            // Instantiate Egg array
            this._eggs = new Array<objects.Egg>();

            // Instantiate Mouse array
            this._mice = new Array<objects.Mouse>();

            // added kitchen to the scene
            this._kitchenOne = new objects.KitchenOne();
            this.addChild(this._kitchenOne);

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            // added cheese to the scene
            this._cheese = new objects.Cheese();
            this.addChild(this._cheese);

            //added bread to the scene
            for (var bread: number = 0; bread < this._breadCount; bread++) {
                this._breads[bread] = new objects.Bread();
                this.addChild(this._breads[bread]);
            }

            //added egg to the scene
            for (var egg: number = 0; egg < this._eggCount; egg++) {
                this._eggs[egg] = new objects.Egg();
                this.addChild(this._eggs[egg]);
            }

            //added mouse to the scene
            for (var mouse: number = 0; mouse < this._mouseCount; mouse++) {
                this._mice[mouse] = new objects.Mouse();
                this.addChild(this._mice[mouse]);
            }

            //added LivesLabel to the scene
            this._timeLabel = new objects.Label(
                "Lives: " + livesValue,
                "25px Consolas",
                "#ffff00",
                10, 10, false
            );
            this.addChild(this._timeLabel);

            //added BreadLabel to the scene
            this._breadLabel = new objects.Label(
                "B[" + breadValue + "],",
                "25px Consolas",
                "#ffff00",
                440, 10, false
            );
            this.addChild(this._breadLabel);

            //added CheeseLabel to the scene
            this._cheeseLabel = new objects.Label(
                "C[" + cheeseValue + "],",
                "25px Consolas",
                "#ffff00",
                510, 10, false
            );
            this.addChild(this._cheeseLabel);

            //added EggLabel to the scene
            this._eggLabel = new objects.Label(
                "E[" + eggValue + "]",
                "25px Consolas",
                "#ffff00",
                580, 10, false
            );
            this.addChild(this._eggLabel);

            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);

            // add this scene to the global stage container
            stage.addChild(this);
        }



        // PLAY Scene updates here
        public update(): void {
            this._kitchenOne.update();
            this._player.update();

            this._cheese.update();

            this._breads.forEach(bread => {
                bread.update();
                this._collision.check(bread);
            });

            this._eggs.forEach(egg => {
                egg.update();
                this._collision.check(egg);
            });

            this._mice.forEach(mouse => {
                mouse.update();
                this._collision.check(mouse);
            });

            this._collision.check(this._cheese);

            //Status Change
            if (cheeseValue >= 3) {
                this._cheeseLabel.color = "GREEN";
            }
            else{
                this._cheeseLabel.color = "YELLOW";
            }

            if (breadValue >= 2) {
                this._breadLabel.color = "GREEN";
            }

            if (eggValue >= 5) {
                this._eggLabel.color = "GREEN";
            }

            //Scene Change
            if (cheeseValue >= 3 && breadValue >= 2 && eggValue >= 5) {
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