var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Kitchen One CLASS ++++++++++++++++++++++++++++++++++++
    var KitchenThree = (function (_super) {
        __extends(KitchenThree, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function KitchenThree() {
            _super.call(this, "kitchenThree");
            this._speed.x = -5; //kitchenOne speed
            this._reset(0);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        KitchenThree.prototype._checkBounds = function (value) {
            // check to see if the top of the kitchenOne 
            // is met the top of the scene
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the kitchenOne offscreen
        KitchenThree.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        KitchenThree.prototype.update = function () {
            // scroll the kitchenOne 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(-2565); //2599
        };
        return KitchenThree;
    }(objects.GameObject));
    objects.KitchenThree = KitchenThree;
})(objects || (objects = {}));

//# sourceMappingURL=kitchenThree.js.map
