//*********************************************************************
//Source file: config.ts                                          *
//Authors names:Nashia Amourdon                                       *
//              Kateryna Bilokhvost                                   *
//              Milan Verma                                           *
//Initial commit: April 3, 2016                                       *
//Last modified by: Kateryna Bilokhvost                               *
//Last date modified: April 18, 2016                                  *
//Commit history: GitHub Link: https://github.com/bilokhvost/COMP397- *
//FinalProject/commits/master                                         *
//                                                                    *
//Program description: This is a simple side scrolling 2D arcade game *
// (left to right). The main hero is a chef that collects different   *
//types of food to prepare a dinner. The main purpose is to collect   *
//all the required goods and to avoid enemies that steal player’s     *
// collected items or health                                          *
//*********************************************************************
module config {

    // Scene Constants
    export class Scene {
        public static MENU: number = 0;
        public static END: number = 2;
        public static LEVEL1: number = 3;
        public static LEVEL2: number = 4;
        public static LEVEL3: number = 5;
        public static LEVEL1END: number = 6;
        public static LEVEL1CHANGE: number = 7;
        public static LEVEL2CHANGE: number = 8;
        public static WIN: number=9;
        public static INSTRUCTION:number=10;
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}