
alert('Давай сыграем? \nПравила очень просты, тебе нужно угадать число\nЧто бы закончить изру введи - stop');
console.info('start');
while(true){
    
    let n = Math.floor(Math.random()*1000);
    console.dir(`Загадано число ${n}`);

    const userNumber = prompt('Попробуйте угадать число, ввдеите от 1 до 1000 :');
    console.log(`Выбранное число ${userNumber}`);

    if (userNumber !== 'stop'){
        if (isNaN(userNumber)){
            alert(`Не хулигань , я иuраю только с числами, попробуй еще`)
        }
        else if (userNumber > n){
            alert(`Число не угаданно , загаданное число меньше вашего на ${userNumber - n}, было загадано число ${n}`)
        }
        else if (userNumber < n){
            alert(`Число не угаданно, загаданное число больше вашего на ${n - userNumber}, было загадно число ${n}`)
        }
        else{
            alert(`Здорово , ты угадал, загаданное число действительно ${userNumber}`)
        };
    }
    else {
        break;
    }
};


  
    

