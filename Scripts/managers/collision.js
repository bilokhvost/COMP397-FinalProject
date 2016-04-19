var managers;
(function (managers) {
    // COLLISION MANAGER CLASS
    var Collision = (function () {
        function Collision(player) {
            this._player = player;
        }
        Collision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        Collision.prototype.check = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfHeight = this._player.height * 0.5;
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = playerHalfHeight + objectHalfHeight;
            var isCollided = false;
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            /* check if the distance between the player and
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                //    if (!object.isColliding) {
                // check if it's an cheese hit
                if (object.name === "cheese") {
                    createjs.Sound.play("snap");
                    cheeseValue += 1; //award 1 cheese
                    isCollided = true;
                }
                // check if it's an bread hit
                if (object.name === "bread") {
                    createjs.Sound.play("toast");
                    breadValue += 1; //award 1 bread
                    isCollided = true;
                }
                // check if it's an egg hit
                if (object.name === "egg") {
                    createjs.Sound.play("crack");
                    eggValue += 1; //award 1 egg  
                    isCollided = true;
                }
                // check if it's a mouse hit
                if (object.name === "mouse") {
                    createjs.Sound.play("squeak");
                    cheeseValue--; // lose a cheese
                    // check if player has no more lives
                    if (cheeseValue <= 0) {
                        cheeseValue = 0;
                    }
                }
                if (object.name === "steak") {
                    createjs.Sound.play("crack");
                    steakValue += 1; //award 1 egg  
                    isCollided = true;
                }
                if (object.name === "fries") {
                    createjs.Sound.play("crack");
                    friesValue += 1; //award 1 egg  
                    isCollided = true;
                }
                if (object.name === "sauce") {
                    createjs.Sound.play("crack");
                    sauceValue += 1; //award 1 egg  
                    isCollided = true;
                }
                if (object.name === "pepper") {
                    createjs.Sound.play("squeak");
                    //livesValue--; // lose a cheese
                    // check if player has no more lives
                    isCollided = true;
                }
                //strawberry amount
                if (object.name === "strawberry") {
                    createjs.Sound.play("snap");
                    strawberryValue += 1; //award 1 strawberry
                    isCollided = true;
                }
                // cream hit
                if (object.name === "cream") {
                    createjs.Sound.play("toast");
                    creamValue += 1; //award 1 cream
                    isCollided = true;
                }
                // pie hit
                if (object.name === "pie") {
                    createjs.Sound.play("crack");
                    pieValue += 1; //award 1 pie  
                    isCollided = true;
                }
                if (object.name === "bird") {
                    createjs.Sound.play("squeak");
                    strawberryValue--; // lose a strawberry
                    // check if player has no more lives
                    if (strawberryValue <= 0) {
                        strawberryValue = 0;
                    }
                }
            }
            // } 
            return isCollided;
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//Game over mechanism
// check if player has no more lives
// if (livesValue <= 0) {
//     // turn off player engine
//     this._player.engineSound.stop();
//     // show the Game Over Screen
//     scene = config.Scene.END;
//     changeScene();
// } 

//# sourceMappingURL=collision.js.map
