var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//*********************************************************************
//Source file: kitchenOne.ts                                          *
//Authors names:Nashia Amourdon                                       *
//              Kateryna Bilokhvost                                   *
//              Milan Verma                                           *
//Initial commit: April 3, 2016                                       *
//Last modified by: Kateryna Bilokhvost                               *
//Last date modified: April 18, 2016                                  *
//Commit history: GitHub Link: https://github.com/bilokhvost/COMP397- *
//FinalProject/commits/master                                         *
//                                                                    *
//Program description: This is a simple side scrolling 2D arcade game *
// (left to right). The main hero is a chef that collects different   *
//types of food to prepare a dinner. The main purpose is to collect   *
//all the required goods and to avoid enemies that steal player’s     *
// collected items or health                                          *
//*********************************************************************
var objects;
(function (objects) {
    // Kitchen One CLASS ++++++++++++++++++++++++++++++++++++
    var KitchenOne = (function (_super) {
        __extends(KitchenOne, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function KitchenOne() {
            _super.call(this, "kitchenOne");
            this._speed.x = -5; //kitchenOne speed
            this._reset(0);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        KitchenOne.prototype._checkBounds = function (value) {
            // check to see if the top of the kitchenOne 
            // is met the top of the scene
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the kitchenOne offscreen
        KitchenOne.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        KitchenOne.prototype.update = function () {
            // scroll the kitchenOne 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(-2565); //2599
        };
        return KitchenOne;
    }(objects.GameObject));
    objects.KitchenOne = KitchenOne;
})(objects || (objects = {}));

//# sourceMappingURL=kitchenOne.js.map
