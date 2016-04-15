module objects {
    // BREAD CLASS ++++++++++++++++++++++++++++++++++++
    export class Sauce extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("sauce");
            this._speed.x=-15;
           this._reset(this._rightBounds);
           this.name = "sauce";
           this.soundString = "toast";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the left of the sauce 
            // is outside the viewport         
            if(this.x <= (value-this.width)) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the sauce offscreen
        protected _reset(value:number):void {
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the sauce down the screen
            this.x+= this._speed.x;
        
            this._checkBounds(this._leftBounds);
        }
    }
}