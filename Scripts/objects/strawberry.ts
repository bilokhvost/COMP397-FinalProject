module objects {
    // Cream Class
    export class Strawberry extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("strawberry");
            
           this._speed.x = -5; //strawberry speed
           this._reset(this._rightBounds);
           this.name = "strawberry";
           
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the strawberry 
            // is outside the viewport         
            if(this.x <= value-this.width) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the kitchen offscreen
        protected _reset(value:number):void {          
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x =  value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the strawberry 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        }
    }
}