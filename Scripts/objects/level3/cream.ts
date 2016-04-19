module objects {
    export class Cream extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("cream");
            this._speed.x=-15;
           this._reset(this._rightBounds);
           this.name = "cream";
           this.soundString = "toast";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the left of the cream 
            // is outside the viewport         
            if(this.x <= (value-this.width)) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the cream offscreen
        protected _reset(value:number):void {
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds-10;
            console.log(this.y);
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the cream down the screen
            this.x += this._speed.x;
           // this.y += this._speed.y;
            this._checkBounds(this._leftBounds);
        }
    }
}