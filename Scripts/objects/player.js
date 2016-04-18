var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
            this._topBounds = this.regX;
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
