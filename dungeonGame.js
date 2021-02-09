
class Player {
    constructor(name) {
        this.name = name;
        // this.role = role;
    }   

    //Getter
    get name() {
        return this.name;
    }
    get roles(){
        return['Warrior', 'Thief', 'Mage'];
    }
    //Method
    calcPowers(){
        switch(role) {
            case 'Warrior':
                return ['slash', 'shield', 'rush'];
            case 'Thief':
                return ['shoot', 'sheath', 'stab'];
            case 'Mage':
                return ['fire', 'confuse', 'heal'];
        }
    }


}
let hero;

function runGame() {
    let hero = new Player('Nick' );
    hero.roles.forEach((item,index) => {
        console.log(`${index}:  ${item}`)
    })
}

runGame();