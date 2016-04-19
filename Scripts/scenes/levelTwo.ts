// Level Two SCENE
//*********************************************************************
//Source file: levelTwo.ts                                            *
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
    export class levelTwo extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _kitchenTwo: objects.KitchenTwo;
        private _steak: objects.Steak;
        private _steakCount: number;
        private _sauce: objects.Sauce;
        private _sauceCount: number;
        private _fries: objects.Fries;
        private _friesCount: number;
        private _peppers: objects.Pepper[];
        private _pepper: objects.Pepper;
        private _pepperCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _liveLabel: objects.Label;
        private _steakLabel: objects.Label;
        private _sauceLabel: objects.Label;
        private _friesLabel: objects.Label;
        //image icon
        private _steakIcon:createjs.Bitmap;
        private _sauceIcon:createjs.Bitmap;
        private _friesIcon:createjs.Bitmap;
        private _lifeIcon:createjs.Bitmap;
        private _panel:createjs.Bitmap;
        private _timer: number;
        private _liveValue: number = 10;
        private _rightBounds: number;

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


            this._steakLabel.text = " " + steakValue + "/3" ;
            this._sauceLabel.text = " " + sauceValue + "/4";
            this._friesLabel.text = " " + friesValue + "/6";
            this._liveLabel.text = " " + this._liveValue;
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // Set Steak Count
            this._steakCount = 1;
            this._rightBounds = config.Screen.WIDTH - 60;
            // Set Fries Count
            this._friesCount = 1;

            // Set Pepper Count
            this._pepperCount = 4;


            steakValue = 0;
            friesValue = 0;
            sauceValue = 0;
            this._timer = 30 * 60; //3 Seconds


            // Instantiate Pepper array
            this._peppers = new Array<objects.Pepper>();

            // added kitchen to the scene
            this._kitchenTwo = new objects.KitchenTwo();
            this.addChild(this._kitchenTwo);

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            // added steak to the scene
            this._steak = new objects.Steak();
            this.addChild(this._steak);

            // added fries to the scene
            this._fries = new objects.Fries();
            this.addChild(this._fries);

            // added sauce to the scene
            this._sauce = new objects.Sauce();
            this.addChild(this._sauce);
            

            //added pepper to the scene
            for (var pepper: number = 0; pepper < this._pepperCount; pepper++) {
                this._peppers[pepper] = new objects.Pepper();
                this.addChild(this._peppers[pepper]);
            }

            //added LivesLabel to the scene
            this._liveLabel = new objects.Label(
                " " + this._liveValue,
                "25px Lucinda Fax",
                "#007ec0",
                60, 20, false
            );
            this.addChild(this._liveLabel);
 //adding game panel
            this._panel= new createjs.Bitmap(assets.getResult("panel"));
            this._panel.x=490;
            this._panel.y=-10;
            this.addChild(this._panel);
            //added SteakLabel to the scene
            this._steakLabel = new objects.Label(

                ":" + steakValue+"/3",
                "25px Lucinda Fax",
                "#007ec0",
                540, 10, false

            );
            this.addChild(this._steakLabel);

            //added SauceLabel to the scene
            this._sauceLabel = new objects.Label(

                ":" + sauceValue + "/4",
                "25px Lucinda Fax",
                "#007ec0",
                540, 50, false

            );
            this.addChild(this._sauceLabel);

            //added FriesLabel to the scene
            this._friesLabel = new objects.Label(

                ":" + friesValue + "/6",
                "25px Lucinda Fax",
                "#007ec0",
                540, 90, false

            );
            this.addChild(this._friesLabel);
            
            //add the images for scoring
            //life icon
            this._lifeIcon= new createjs.Bitmap(assets.getResult("life"));
            this._lifeIcon.x=10;
            this._lifeIcon.y=10;
            this.addChild(this._lifeIcon);
            //steak icon
            this._steakIcon= new createjs.Bitmap(assets.getResult("steak"));
            this._steakIcon.x=500;
            this._steakIcon.y=20;
            this.addChild(this._steakIcon);
            //sauce icon
            this._sauceIcon= new createjs.Bitmap(assets.getResult("sauce"));
            this._sauceIcon.x=510;
            this._sauceIcon.y=50;
            this.addChild(this._sauceIcon);
            //fries icon
            this._friesIcon= new createjs.Bitmap(assets.getResult("fries"));
            this._friesIcon.x=500;
            this._friesIcon.y=100;
            this.addChild(this._friesIcon);
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

            this._peppers.forEach(pepper => {
                pepper.update();
                if (this._collision.check(pepper)) {
                    // this.removeChild(pepper);
                    //     pepper = new objects.Pepper();
                    //   this.addChild(pepper);
                    pepper._reset(this._rightBounds);
                    this._liveValue--;
                    this.checkLife(this._liveValue);
                }

            });

            if (this._collision.check(this._steak)) {
                this.removeChild(this._steak);
                this._steak = new objects.Steak();
                this.addChild(this._steak);
            }

            if (this._collision.check(this._fries)) {
                this.removeChild(this._fries);
                this._fries = new objects.Fries();
                this.addChild(this._fries);

            }
            if (this._collision.check(this._sauce)) {
                this.removeChild(this._sauce);
                this._sauce = new objects.Sauce();
                this.addChild(this._sauce);
            }
            //Status Change
            if (sauceValue >= 4) {
                this._sauceLabel.color = "GREEN";
            }

            if (steakValue >= 3) {
                this._steakLabel.color = "GREEN";
            }

            if (friesValue >= 6) {
                this._friesLabel.color = "GREEN";
            }

            //Scene Change
            if (sauceValue >= 4 && steakValue >= 3 && friesValue >= 6) {
                // Switch to the Transition Scene
                scoreLevelTwo = sauceValue + steakValue + friesValue;
                highScoreValue = scoreLevelOne + scoreLevelTwo;
                scene = config.Scene.LEVEL2CHANGE;
                changeScene();
            }

            this._updateScore();
        }
        private checkLife(value: number) {
            if (value <= 0) {
                sauceValue *= 75;
                steakValue *= 100;
                friesValue *= 50;
                scoreLevelTwo = sauceValue + steakValue + friesValue;
                highScoreValue = scoreLevelOne + scoreLevelTwo;
                // Switch to the Game Over Scene
                scene = config.Scene.END;
                changeScene();
            }
        }

        //EVENT HANDLERS ++++++++++++++++++++

    }
}