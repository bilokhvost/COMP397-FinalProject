//bird objects
module objects{
    export class Bird extends objects.GameObject{
        //Constructor Method
        constructor(){
            super("bird");
            
            this._reset(this._rightBounds);
            this.name= "bird";
        }
        // Private Methods
        protected _checkBounds(value:number):void{
            if(this.x<=(value-this.width)){
                this._reset(this._rightBounds);
            }
        }
        
        protected _reset(value:number):void{
            this._speed.x=  Math.floor(Math.random() * 5) + 5;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
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