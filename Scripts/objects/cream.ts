module objects {
    // Cream Class
    export class Cream extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("cream");
            
           this._speed.x = -5; //cream speed
           this._reset(this._rightBounds);
           this.name = "cream";
           
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the cream 
            // is outside the viewport         
            if(this.x <= value-this.width) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the ocean offscreen
        protected _reset(value:number):void {          
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x =  value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the cream 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        }
    }
}