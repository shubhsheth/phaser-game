const gameStart = {
    Key: 'gameStart',
    Preload: function() {
        //todo
    },
    Create: function() {
        //todo
    },
    Update: function() {
        //todo
    }
}


const config = {
    Type: Phaser.AUTO,
    Width: 800,
    Height: 600,
    Parent: 'app',
    Scene: [
        gameStart,
    ]
}

const game = new Phaser.Game(config);