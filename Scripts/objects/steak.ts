module objects {
    // STEAK CLASS ++++++++++++++++++++++++++++++++++++
    export class Steak extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("steak");
            this._speed.x=-6;
           this._reset(this._rightBounds);
           this.name = "steak";
           this.soundString = "toast";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the left of the steak 
            // is outside the viewport         
            if(this.x <= (value-this.width)) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the steak offscreen
        protected _reset(value:number):void {
           
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds-20;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the steak down the screen
            this.x += this._speed.x;
        
            this._checkBounds(this._leftBounds);
        }
    }
}