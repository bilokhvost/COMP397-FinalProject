var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Cream Class
    var Strawberry = (function (_super) {
        __extends(Strawberry, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Strawberry() {
            _super.call(this, "strawberry");
            this._speed.x = -5; //strawberry speed
            this._reset(this._rightBounds);
            this.name = "strawberry";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Strawberry.prototype._checkBounds = function (value) {
            // check to see if the top of the strawberry 
            // is outside the viewport         
            if (this.x <= value - this.width) {
                this._reset(this._rightBounds);
            }
        };
        // reset the kitchen offscreen
        Strawberry.prototype._reset = function (value) {
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Strawberry.prototype.update = function () {
            // scroll the strawberry 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Strawberry;
    }(objects.GameObject));
    objects.Strawberry = Strawberry;
})(objects || (objects = {}));

//# sourceMappingURL=strawberry.js.map
