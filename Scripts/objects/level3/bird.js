var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//bird objects
var objects;
(function (objects) {
    var Bird = (function (_super) {
        __extends(Bird, _super);
        //Constructor Method
        function Bird() {
            _super.call(this, "bird");
            this._reset(this._rightBounds);
            this.name = "bird";
        }
        // Private Methods
        Bird.prototype._checkBounds = function (value) {
            if (this.x <= (value - this.width)) {
                this._reset(this._rightBounds);
            }
        };
        Bird.prototype._reset = function (value) {
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Bird.prototype.update = function () {
            // scroll the mouse down the screen
            this.x -= this._speed.x;
            this.y += this._speed.y;
            this._checkBounds(this._leftBounds);
        };
        return Bird;
    }(objects.GameObject));
    objects.Bird = Bird;
})(objects || (objects = {}));

//# sourceMappingURL=bird.js.map
