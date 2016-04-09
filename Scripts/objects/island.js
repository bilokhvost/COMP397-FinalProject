var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // ISLAND CLASS ++++++++++++++++++++++++++++++++++++
    var Cheese = (function (_super) {
        __extends(Cheese, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Cheese() {
            _super.call(this, "island");
            this._speed.x = -5; //island speed
            this._reset(this._rightBounds);
            this.name = "island";
            this.soundString = "yay";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Cheese.prototype._checkBounds = function (value) {
            // check to see if the top of the island 
            // is outside the viewport         
            if (this.x <= value - this.width) {
                this._reset(this._rightBounds);
            }
        };
        // reset the ocean offscreen
        Cheese.prototype._reset = function (value) {
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Cheese.prototype.update = function () {
            // scroll the island 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Cheese;
    }(objects.GameObject));
    objects.Cheese = Cheese;
})(objects || (objects = {}));

//# sourceMappingURL=island.js.map
