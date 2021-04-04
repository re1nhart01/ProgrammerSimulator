class Chmo {
    constructor(name,realname,IQ,HP,happiness,food,Actions,MaxActions) {
        this.name = name;
        this.realname = realname;
        this.IQ = IQ
        this.HP = HP;
        this.happiness = happiness;
        this.food = food;
        this.day = 1;
        this.Actions = Actions;
        this.MaxActions = MaxActions;
    }
}


let StartGameBtn = document.querySelector(".main").addEventListener('click', () => {
    let realname = prompt('Ввведите имя', 'Сэр Чмо');
    let player = new Chmo('Сэр Чмо',realname,100,60,50,40,0,3);
    confirm('Вы ввели имя: ' + player.name + '?');
    confirm('Вы уверены что хотите имя: ' + player.name + '?')
    alert('Теперь ваше имя: '  +  player.name);
localStorage.clear();
    localStorage.setItem('player', JSON.stringify(player));
    window.location.href = 'day_1.html';
});



let a = document.querySelector(".a").addEventListener('click', () => {
    alert('Два поляка inc');
})