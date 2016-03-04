// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;
        private _dice: createjs.Bitmap[];
        private _backgroundImage: createjs.Bitmap;

        private _displayDice: createjs.Bitmap;
        private _roll: createjs.Bitmap;

        private _oneDice: number;
        private _twoDice: number;

        private _lableOne: objects.Label;
        private _lableTwo: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        public start(): void {

            this._initialize();
            
            this._backgroundImage = new createjs.Bitmap(assets.getResult("BlackBackground"));
            this.addChild(this._backgroundImage);
            
            // add the ROLL button to the PLAY scene
            this._roll = new objects.Button(
                "RollButton",
                config.Screen.CENTER_X + 15,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._roll);
            
            // ROLL Button event listeners
            this._roll.on("click", this._rollButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        // PRIVATE METHODS
        private _initialize(): void {
            // default dice images is ONE
            this._dice = new Array<createjs.Bitmap>();
            for (var dice: number = 0; dice < 2; dice++) {
                this._dice[dice] = new createjs.Bitmap(assets.getResult("Dice1"));
                this._dice[dice].x = 134 + (dice * 200);
                this._dice[dice].y = 130;
                this.addChild(this._dice[dice]);
            }
        }
        
        // ROLL Button click event handler
        private _rollButtonClick(event: createjs.MouseEvent) {
            this.removeChild(this._lableOne);
            this.removeChild(this._lableTwo);
            
            // Create values between one to six 
            this._oneDice = Math.floor((Math.random() * 6) + 1);
            this._twoDice = Math.floor((Math.random() * 6) + 1);
            console.log(this._oneDice + " AND " + this._twoDice);
            
            // Adding the DICE
            
            switch (this._oneDice) {
                case 1:

                    this._displayDice = new createjs.Bitmap(assets.getResult("Dice1"));
                    this._displayDice.x = 134;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);

                    this._lableOne = new objects.Label(
                        "1", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 50, config.Screen.CENTER_Y = 130 + 150);
                    this.addChild(this._lableOne);
                    break;
                case 2:

                    this._displayDice = new createjs.Bitmap(assets.getResult("Dice2"));
                    this._displayDice.x = 134;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);

                    this._lableOne = new objects.Label(
                        "2", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 250, config.Screen.CENTER_Y = 130 + 150);
                    this.addChild(this._lableOne);
                    break;
                case 3:

                    this._displayDice = new createjs.Bitmap(assets.getResult("Dice3"));
                    this._displayDice.x = 134;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);

                    this._lableOne = new objects.Label(
                        "3", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 50, config.Screen.CENTER_Y = 130 + 150);
                    this.addChild(this._lableOne);
                    break;
                case 4:

                    this._displayDice = new createjs.Bitmap(assets.getResult("Dice4"));
                    this._displayDice.x = 134;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);

                    this._lableOne = new objects.Label(
                        "4", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 50, config.Screen.CENTER_Y = 130 + 150);
                    this.addChild(this._lableOne);
                    break;
                case 5:

                    this._displayDice = new createjs.Bitmap(assets.getResult("Dice5"));
                    this._displayDice.x = 134;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);

                    this._lableOne = new objects.Label(
                        "5", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 50, config.Screen.CENTER_Y = 130 + 150);
                    this.addChild(this._lableOne);
                    break;
                case 6:

                    this._displayDice = new createjs.Bitmap(assets.getResult("Dice6"));
                    this._displayDice.x = 134;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);

                    this._lableOne = new objects.Label(
                        "6", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 50, config.Screen.CENTER_Y = 130 + 150);
                    this.addChild(this._lableOne);
                    break;
            }
                
            // Adding Another DICE
                
            switch (this._twoDice) {
                case 1:

                    this._displayDice = new createjs.Bitmap(assets.getResult("Dice1"));
                    this._displayDice.x = 334;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);

                    this._lableTwo = new objects.Label(
                        "1", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 250, config.Screen.CENTER_Y = 130 + 150);
                    this.addChild(this._lableTwo);
                    break;
                case 2:

                    this._displayDice = new createjs.Bitmap(assets.getResult("Dice2"));
                    this._displayDice.x = 334;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);

                    this._lableTwo = new objects.Label(
                        "2", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 250, config.Screen.CENTER_Y = 130 + 150);
                    this.addChild(this._lableTwo);
                    break;
                case 3:

                    this._displayDice = new createjs.Bitmap(assets.getResult("Dice3"));
                    this._displayDice.x = 334;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);

                    this._lableTwo = new objects.Label(
                        "3", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 250, config.Screen.CENTER_Y = 130 + 150);
                    this.addChild(this._lableTwo);
                    break;
                case 4:

                    this._displayDice = new createjs.Bitmap(assets.getResult("Dice4"));
                    this._displayDice.x = 334;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);
                    // Display text
                    this._lableTwo = new objects.Label(
                        "4", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 250, config.Screen.CENTER_Y = 130 + 150);
                    this.addChild(this._lableTwo);
                    break;
                case 5:

                    this._displayDice = new createjs.Bitmap(assets.getResult("Dice5"));
                    this._displayDice.x = 334;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);

                    this._lableTwo = new objects.Label(
                        "5", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 250, config.Screen.CENTER_Y = 130 + 150);
                    this.addChild(this._lableTwo);
                    break;
                case 6:

                    this._displayDice = new createjs.Bitmap(assets.getResult("Dice6"));
                    this._displayDice.x = 334;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);

                    this._lableTwo = new objects.Label(
                        "6", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 250, config.Screen.CENTER_Y = 130 + 150);
                    this.addChild(this._lableTwo);
                    break;
            }
        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}