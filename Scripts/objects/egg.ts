module objects {
    // EGG CLASS ++++++++++++++++++++++++++++++++++++
    export class Egg extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("egg");
            
           this._reset(this._rightBounds);
           this.name = "egg";
           this.soundString = "crack";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the left of the egg 
            // is outside the viewport         
            if(this.x <= (value-this.width)) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the egg offscreen
        protected _reset(value:number):void {
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the egg down the screen
            this.x -= this._speed.x;
            this.y += this._speed.y;
            this._checkBounds(this._leftBounds);
        }
    }
}