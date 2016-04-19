var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//*********************************************************************
//Source file: pie.ts                                                 *
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
    // EGG CLASS ++++++++++++++++++++++++++++++++++++
    var Pie = (function (_super) {
        __extends(Pie, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Pie() {
            _super.call(this, "pie");
            this._speed.x = -10;
            this._reset(this._rightBounds);
            this.name = "pie";
            this.soundString = "crack";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Pie.prototype._checkBounds = function (value) {
            // check to see if the left of the pie 
            // is outside the viewport         
            if (this.x <= (value - this.width)) {
                this._reset(this._rightBounds);
            }
        };
        // reset the pie offscreen
        Pie.prototype._reset = function (value) {
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds - 10;
            console.log(this.y);
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Pie.prototype.update = function () {
            // scroll the pie down the screen
            this.x += this._speed.x;
            //this.y += this._speed.y;
            this._checkBounds(this._leftBounds);
        };
        return Pie;
    }(objects.GameObject));
    objects.Pie = Pie;
})(objects || (objects = {}));

//# sourceMappingURL=pie.js.map
