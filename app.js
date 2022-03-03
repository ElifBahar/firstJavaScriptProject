let userName  = prompt('Lütfen adınızı giriniz :');     
document.querySelector('#userName').innerHTML = userName.toUpperCase();


function showTime(){
    const date = new Date();
    let hour = date.toLocaleTimeString();
    let day = date.getDay();
    let dayName = "";
    
    switch (day) {
        case 1 :
            dayName = 'Pazartesi';
            break;
        
        case 2 :
            dayName = 'Salı';
            break;
        case 3 :
            dayName =  'Çarşamba';
            break;
        case 4 :
            dayName =  'Perşembe';
            break;
        case 5 :
            dayName =  'Cuma';
            break;
        case 6 :
            dayName =  'Cumartesi';
            break;
        case 7 :
            dayName =  'Pazar';
            break;
        default :
            dayName = " ";
            break;
    }


    document.querySelector('#myClock').innerHTML =  hour+ " " + dayName ;
    setTimeout(showTime, 1000);
}