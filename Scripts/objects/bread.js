var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // BREAD CLASS ++++++++++++++++++++++++++++++++++++
    var Bread = (function (_super) {
        __extends(Bread, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Bread() {
            _super.call(this, "bread");
            this._speed.x = -15;
            this._reset(this._rightBounds);
            this.name = "bread";
            this.soundString = "toast";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Bread.prototype._checkBounds = function (value) {
            // check to see if the left of the bread 
            // is outside the viewport         
            if (this.x <= (value - this.width)) {
                this._reset(this._rightBounds);
            }
        };
        // reset the bread offscreen
        Bread.prototype._reset = function (value) {
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Bread.prototype.update = function () {
            // scroll the bread down the screen
            this.x += this._speed.x;
            // this.y += this._speed.y;
            this._checkBounds(this._leftBounds);
        };
        return Bread;
    }(objects.GameObject));
    objects.Bread = Bread;
})(objects || (objects = {}));

//# sourceMappingURL=bread.js.map
