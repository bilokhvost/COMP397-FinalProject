var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // MOUSE CLASS ++++++++++++++++++++++++++++++++++++
    var Pepper = (function (_super) {
        __extends(Pepper, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Pepper() {
            _super.call(this, "pepper");
            this._reset(this._rightBounds);
            this.name = "pepper";
            this.soundString = "squeak";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Pepper.prototype._checkBounds = function (value) {
            // check to see if the left of the pepper 
            // is outside the viewport         
            if (this.x <= (value - this.width) || this.y <= this._topBounds) {
                this._reset(this._rightBounds);
            }
        };
        // reset the pepper offscreen
        Pepper.prototype._reset = function (value) {
            this._speed.x = Math.floor(Math.random() * 5) + 6;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds);
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Pepper.prototype.update = function () {
            // scroll the pepper down the screen
            this.x -= this._speed.x;
            this.y += this._speed.y;
            this._checkBounds(this._leftBounds);
        };
        return Pepper;
    }(objects.GameObject));
    objects.Pepper = Pepper;
})(objects || (objects = {}));

//# sourceMappingURL=pepper.js.map
