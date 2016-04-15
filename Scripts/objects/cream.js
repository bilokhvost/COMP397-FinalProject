var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Cream Class
    var Cream = (function (_super) {
        __extends(Cream, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Cream() {
            _super.call(this, "cream");
            this._speed.x = -5; //cream speed
            this._reset(this._rightBounds);
            this.name = "cream";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Cream.prototype._checkBounds = function (value) {
            // check to see if the top of the cream 
            // is outside the viewport         
            if (this.x <= value - this.width) {
                this._reset(this._rightBounds);
            }
        };
        // reset the ocean offscreen
        Cream.prototype._reset = function (value) {
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Cream.prototype.update = function () {
            // scroll the cream 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Cream;
    }(objects.GameObject));
    objects.Cream = Cream;
})(objects || (objects = {}));

//# sourceMappingURL=cream.js.map
