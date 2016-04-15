var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.END = 2;
        Scene.LEVEL1 = 3;
        Scene.LEVEL2 = 4;
        Scene.LEVEL3 = 5;
        Scene.LEVEL1END = 6;
        Scene.LEVEL1CHANGE = 7;
        Scene.LEVEL2CHANGE = 8;
        return Scene;
    }());
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    }());
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));

//# sourceMappingURL=config.js.map
