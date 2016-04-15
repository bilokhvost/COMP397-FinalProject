//Level Three 
module scenes {
    export class levelThree extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _kitchenThree: objects.kitchenThree;
        private _cream: objects.Cream;
        private _birds: objects.Bird[];
        private _birdCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private scoreValue: number;
        private livesValue: number;
        private livesLabel: createjs.Text;
        private scoreLabel: createjs.Text;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            //set monster 
            this._birdCount = 4;
            this._birds = new Array<objects.Bird>();

            //add grass to the scene
            this._kitchenThree = new objects.kitchenThree();
            this.addChild(this._kitchenThree);

            //add the eggs to the scene
            this._cream = new objects.Cream();
            this.addChild(this._cream);

            //add the player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //initialize socre and lives values
            this.scoreValue = 0;
            this.livesValue = 5;
            //add the monster to the scene
            for (var bird: number = 0; bird < this._birdCount; bird++) {
                this._birds[bird] = new objects.Bird();
                this.addChild(this._birds[bird]);
            }
            this.livesLabel = new createjs.Text(
                "LIVES: " + this.livesValue,
                "40px Consolas",
                "#ffffff"
            );
            this.livesLabel.x = config.Screen.WIDTH * 0.1;
            this.livesLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.addChild(this.livesLabel);
            //Add Score Label

            this.scoreLabel = new createjs.Text(
                "SCORE: " + this.scoreValue,
                "40px Consolas",
                "#ffffff"
            );
            this.scoreLabel.x = config.Screen.WIDTH * 0.6;
            this.scoreLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.addChild(this.scoreLabel);

            //added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        }




        // PLAY Scene updates here
        public update(): void {
            this._kitchenThree.update();
            this._cream.update();
            this._player.update();
            this._birds.forEach(monster => {
                monster.update();
                //this._collision.check(monster);

                if (this._collision.check(monster)) {
                    this.livesValue -= 1;
                    //this.removeChild(monster);
                    this.livesLabel.text = "Lives: " + this.livesValue;
                    //monster= new objects.Monster();
                    //this.addChild(monster);
                }

            });

            if (this._collision.check(this._cream)) {
                this.scoreValue += 10;
                this.removeChild(this._cream);
                this.scoreLabel.text = "Score: " + this.scoreValue;
                this._cream = new objects.Cream();
                this.addChild(this._cream);

            }


            //EVENT HANDLERS ++++++++++++++++++++

        }
    }
}