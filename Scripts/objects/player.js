// module objects {
//     // PLAYER CLASS ++++++++++++++++++++++++++++++
//     export class Player extends createjs.Bitmap {
//         // PRIVATE INSTANCE VARIABLES
//         private _leftBounds: number;
//         private _rightBounds: number;
//         protected _topBounds: number;
//         protected _bottomBounds: number;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//         // PUBLIC INSTANCE VARIABLES
//         public width: number;
//         public height: number;
//         public engineSound: createjs.AbstractSoundInstance;
//         constructor() {
//             super(assets.getResult("chef"));
//             this.width = this.getBounds().width;
//             this.height = this.getBounds().height;
//             this.regX = this.width * 0.5;
//             this.regY = this.height * 0.5;
//             this._leftBounds = this.width * 0.5;
//             this._topBounds = this.regX+120;
//             this._bottomBounds = config.Screen.HEIGHT - this.regX;
//             this._rightBounds = config.Screen.WIDTH - (this.width * 0.75);
//             //this.y = 360;
//             // assign and play the engine sound
//             this.engineSound = createjs.Sound.play("funk");
//             // Loop engine sound forever
//             this.engineSound.loop = -1;
//         }
//         // PRIVATE METHODS
//         private _checkBounds(): void {
//             // Left Bound Check
//             if (this.x < this._leftBounds) {
//                 this.x = this._leftBounds;
//             }
//             // Top Bound Check
//             if (this.y < this._topBounds) {
//                 this.y = this._topBounds;
//             }
//             //Bottom bound Check
//             if (this.y > this._bottomBounds) {
//                 this.y = this._bottomBounds;
//             }
//         }
//         // PUBLIC METHODS
//         public update(): void {
//             this.y = stage.mouseY;
//             this.x=stage.mouseX;
//             this._checkBounds();
//         }
//     }
// }
//++++++++++++++++++++++++++++++++++++++/////++++++++++++++++++++++////++++++++++++++++++++
var objects;
(function (objects) {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.call(this, textureAtlas, "plane");
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._leftBounds = this.width * 0.5;
            this._rightBounds = config.Screen.WIDTH - (this.width * 0.5);
            this.y = 430;
            // assign and play the engine sound
            this.engineSound = createjs.Sound.play("engine");
            // Loop engine sound forever
            this.engineSound.loop = -1;
        }
        // PRIVATE METHODS
        Player.prototype._checkBounds = function () {
            if (this.x < this._leftBounds) {
                this.x = this._leftBounds;
            }
            if (this.x > this._rightBounds) {
                this.x = this._rightBounds;
            }
        };
        //PUBLIC METHODS
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
