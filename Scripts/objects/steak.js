var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//*********************************************************************
//Source file: steak.ts                                               *
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
    // STEAK CLASS ++++++++++++++++++++++++++++++++++++
    var Steak = (function (_super) {
        __extends(Steak, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Steak() {
            _super.call(this, "steak");
            this._speed.x = -6;
            this._reset(this._rightBounds);
            this.name = "steak";
            this.soundString = "toast";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Steak.prototype._checkBounds = function (value) {
            // check to see if the left of the steak 
            // is outside the viewport         
            if (this.x <= (value - this.width)) {
                this._reset(this._rightBounds);
            }
        };
        // reset the steak offscreen
        Steak.prototype._reset = function (value) {
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds - 20;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Steak.prototype.update = function () {
            // scroll the steak down the screen
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Steak;
    }(objects.GameObject));
    objects.Steak = Steak;
})(objects || (objects = {}));

//# sourceMappingURL=steak.js.map
