module objects {
    // Kitchen One CLASS ++++++++++++++++++++++++++++++++++++
    export class KitchenThree extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("kitchenThree");
            
           this._speed.x = -5; //kitchenOne speed
            this._reset(0);
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the kitchenOne 
            // is met the top of the scene
            
            if (this.x <= value) {
                this._reset(0);
            }
        }
        
        // reset the kitchenOne offscreen
        protected _reset(value: number): void {
            this.x = value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the kitchenOne 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(-2565); //2599
        }
    }
} 