var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Kitchen One CLASS ++++++++++++++++++++++++++++++++++++
    var KitchenTwo = (function (_super) {
        __extends(KitchenTwo, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function KitchenTwo() {
            _super.call(this, "kitchenTwo");
            this._speed.x = -5; //kitchenOne speed
            this._reset(0);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        KitchenTwo.prototype._checkBounds = function (value) {
            // check to see if the top of the kitchenOne 
            // is met the top of the scene
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the kitchenOne offscreen
        KitchenTwo.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        KitchenTwo.prototype.update = function () {
            // scroll the kitchenOne 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(-2565); //2599
        };
        return KitchenTwo;
    }(objects.GameObject));
    objects.KitchenTwo = KitchenTwo;
})(objects || (objects = {}));

//# sourceMappingURL=kitchenTwo.js.map
