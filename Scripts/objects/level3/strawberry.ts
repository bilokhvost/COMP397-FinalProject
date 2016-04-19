module objects {
    // ISLAND CLASS ++++++++++++++++++++++++++++++++++++
    export class Strawberry extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("strawberry");
            
           this._speed.x = -8; //island speed
           this._reset(this._rightBounds);
           this.name = "strawberry";
           this.soundString = "snap";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the island 
            // is outside the viewport         
            if(this.x <= value-this.width) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the ocean offscreen
        protected _reset(value:number):void {          
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds-10;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the island 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        }
    }
}