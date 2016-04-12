var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // STEAK CLASS ++++++++++++++++++++++++++++++++++++
    var Steak = (function (_super) {
        __extends(Steak, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Steak() {
            _super.call(this, "steak");
            this._reset(this._rightBounds);
            this.name = "steak";
            this.soundString = "toast";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Steak.prototype._checkBounds = function (value) {
            // check to see if the left of the steak 
            // is outside the viewport         
            if (this.x <= (value - this.width)) {
                this._reset(this._rightBounds);
            }
        };
        // reset the steak offscreen
        Steak.prototype._reset = function (value) {
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Steak.prototype.update = function () {
            // scroll the steak down the screen
            this.x -= this._speed.x;
            this.y += this._speed.y;
            this._checkBounds(this._leftBounds);
        };
        return Steak;
    }(objects.GameObject));
    objects.Steak = Steak;
})(objects || (objects = {}));

//# sourceMappingURL=steak.js.map
