module objects {
    // EGG CLASS ++++++++++++++++++++++++++++++++++++
    export class Pie extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("pie");
            this._speed.x=-10;
           this._reset(this._rightBounds);
           this.name = "pie";
           this.soundString = "crack";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the left of the pie 
            // is outside the viewport         
            if(this.x <= (value-this.width)) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the pie offscreen
        protected _reset(value:number):void {
            
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds)+ this._topBounds-10;
            console.log(this.y);
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the pie down the screen
            this.x += this._speed.x;
            //this.y += this._speed.y;
            this._checkBounds(this._leftBounds);
        }
    }
}