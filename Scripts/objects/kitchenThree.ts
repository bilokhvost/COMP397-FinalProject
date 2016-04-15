module objects{
     export class kitchenThree extends objects.GameObject{
         constructor(){
             super("kitchenThree");
             
             this._speed.x=-6;
             this._reset(0);
         }
         
         protected _checkBounds(value:number):void{
             if(this.x<=value){
                 this._reset(0);
             }
         }
         protected _reset(value:number):void{
             this.x= value;
         }
         public update():void{
             this.x+=this._speed.x;
             this._checkBounds(0);
         }
     }
}