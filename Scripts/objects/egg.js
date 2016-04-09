var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // EGG CLASS ++++++++++++++++++++++++++++++++++++
    var Egg = (function (_super) {
        __extends(Egg, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Egg() {
            _super.call(this, "egg");
            this._reset(this._rightBounds);
            this.name = "egg";
            this.soundString = "crack";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Egg.prototype._checkBounds = function (value) {
            // check to see if the left of the egg 
            // is outside the viewport         
            if (this.x <= (value - this.width)) {
                this._reset(this._rightBounds);
            }
        };
        // reset the egg offscreen
        Egg.prototype._reset = function (value) {
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Egg.prototype.update = function () {
            // scroll the egg down the screen
            this.x -= this._speed.x;
            this.y += this._speed.y;
            this._checkBounds(this._leftBounds);
        };
        return Egg;
    }(objects.GameObject));
    objects.Egg = Egg;
})(objects || (objects = {}));

//# sourceMappingURL=egg.js.map
