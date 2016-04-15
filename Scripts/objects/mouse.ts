module objects {
    // MOUSE CLASS ++++++++++++++++++++++++++++++++++++
    export class Mouse extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("mouse");
            
           this._reset(this._rightBounds);
           this.name = "mouse";
           this.soundString = "squeak";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the left of the mouse 
            // is outside the viewport         
            if(this.x <= (value-this.width)||this.y<=this._topBounds) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the mouse offscreen
        protected _reset(value:number):void {
            this._speed.x = Math.floor(Math.random() * 5) + 6;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds);
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the mouse down the screen
            this.x -= this._speed.x;
            this.y += this._speed.y;
            this._checkBounds(this._leftBounds);
        }
    }
}