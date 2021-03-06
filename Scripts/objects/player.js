var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var objects;
(function (objects) {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.call(this, textureAtlas, "player");
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._leftBounds = this.width * 0.5;
            this._topBounds = this.regX + 80;
            this._bottomBounds = config.Screen.HEIGHT - this.regX;
            this._rightBounds = config.Screen.WIDTH - (this.width * 0.75);
            //this.y = 360;
            // assign and play the engine sound
            this.engineSound = createjs.Sound.play("funk");
            // Loop engine sound forever
            this.engineSound.loop = -1;
        }
        // PRIVATE METHODS
        Player.prototype._checkBounds = function () {
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
        };
        // PUBLIC METHODS
        Player.prototype.update = function () {
            this.y = stage.mouseY;
            this.x = stage.mouseX;
            this._checkBounds();
        };
        return Player;
    }(createjs.Sprite));
    objects.Player = Player;
})(objects || (objects = {}));

//# sourceMappingURL=player.js.map
