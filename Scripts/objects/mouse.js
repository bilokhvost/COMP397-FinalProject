var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//*********************************************************************
//Source file: mouse.ts                                               *
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
    // MOUSE CLASS ++++++++++++++++++++++++++++++++++++
    var Mouse = (function (_super) {
        __extends(Mouse, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Mouse() {
            _super.call(this, "mouse");
            this._reset(this._rightBounds);
            this.name = "mouse";
            this.soundString = "squeak";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Mouse.prototype._checkBounds = function (value) {
            // check to see if the left of the mouse 
            // is outside the viewport         
            if (this.x <= (value - this.width) || this.y <= this._topBounds) {
                this._reset(this._rightBounds);
            }
        };
        // reset the mouse offscreen
        Mouse.prototype._reset = function (value) {
            this._speed.x = Math.floor(Math.random() * 5) + 6;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds);
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Mouse.prototype.update = function () {
            // scroll the mouse down the screen
            this.x -= this._speed.x;
            this.y += this._speed.y;
            this._checkBounds(this._leftBounds);
        };
        return Mouse;
    }(objects.GameObject));
    objects.Mouse = Mouse;
})(objects || (objects = {}));

//# sourceMappingURL=mouse.js.map
