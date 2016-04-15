var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var kitchenThree = (function (_super) {
        __extends(kitchenThree, _super);
        function kitchenThree() {
            _super.call(this, "kitchenThree");
            this._speed.x = -6;
            this._reset(0);
        }
        kitchenThree.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(0);
            }
        };
        kitchenThree.prototype._reset = function (value) {
            this.x = value;
        };
        kitchenThree.prototype.update = function () {
            this.x += this._speed.x;
            this._checkBounds(0);
        };
        return kitchenThree;
    }(objects.GameObject));
    objects.kitchenThree = kitchenThree;
})(objects || (objects = {}));

//# sourceMappingURL=kitchenThree.js.map
