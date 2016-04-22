var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//*********************************************************************
//Source file: kitchenThree.ts                                        *
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
    // Kitchen 3 CLASS ++++++++++++++++++++++++++++++++++++
    var KitchenThree = (function (_super) {
        __extends(KitchenThree, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function KitchenThree() {
            _super.call(this, "kitchenThree");
            this._speed.x = -5; //kitchen3 speed
            this._reset(0);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        KitchenThree.prototype._checkBounds = function (value) {
            // check to see if the top of the kitchen3 
            // is met the top of the scene
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the kitchen3 offscreen
        KitchenThree.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        KitchenThree.prototype.update = function () {
            // scroll the kitchen3 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(-2565); //2599
        };
        return KitchenThree;
    }(objects.GameObject));
    objects.KitchenThree = KitchenThree;
})(objects || (objects = {}));

//# sourceMappingURL=kitchenThree.js.map
