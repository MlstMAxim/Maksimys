window.onload = function (){
    //Фото вставленно из интернета//
    var images = [
        "https://www.zastavki.com/pictures/640x480/2013Animals___Cats_Grumpy_British_cat_in_hat_044298_29.jpg", 
        "https://i.ytimg.com/vi/EaBL-H-Xedk/maxresdefault.jpg", 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb9uigmOJW84bNY5ssvvr2dLZtZEZ0DTamsg&usqp=CAU"
    ];
    
    var num = 0;
    var slider = document.getElementById("slider");
    
    var prevBtn = document.getElementById("prevBtn");
    prevBtn.onclick = function (){
        prev();
    }
    
    var nextBtn = document.getElementById("nextBtn");
    nextBtn.onclick = function (){
        next();
    }
    
    
    function next() {
        num++;
        if(num >= images.length) {
            num = 0;
        }
        slider.src = images[num];
    }
    
    function prev() {
        num--;
        if(num < 0) {
            num = images.length-1;
        }
        slider.src = images[num];
    }
    };   
 //Таймер//   
 let timer_show = document.getElementById("timer");
    
 function diffSubtract(date1, date2) {
     return date2 - date1;
 }
 
 let end_date = {
     "full_year": "2021",
     "month": "01",
     "day": "01",
     "hours": "00",
     "minutes": "00",
     "seconds": "00"
 }
 
 let end_date_str = `${end_date.full_year}-${end_date.month}-${end_date.day}T${end_date.hours}:${end_date.minutes}:${end_date.seconds}`;
 
 timer = setInterval(function () {
     let now = new Date();
     let date = new Date(end_date_str);
     let ms_left = diffSubtract(now, date);
     if (ms_left <= 0) {
         clearInterval(timer);
         alert("С наступающим Новым Годом и Рождеством");
     } else {
         let res = new Date(ms_left);
         let str_timer = `${res.getUTCFullYear() - 1970}.${res.getUTCMonth()}.${res.getUTCDate() - 1} ${res.getUTCHours()}:${res.getUTCMinutes()}:${res.getUTCSeconds()}`;
         timer_show.innerHTML = str_timer;
     }
 }, 1000)
 // Таймер  
 document.addEventListener('DOMContentLoaded', function () {
     const deadline = new Date(2022, 00, 01);
     let timerId = null;
     function declensionNum(num, words) {
       return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
     }
     function countdownTimer() {
       const diff = deadline - new Date();
       if (diff <= 0) {
         clearInterval(timerId);
       }
       const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
       const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
       const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
       const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
       $days.textContent = days < 10 ? '0' + days : days;
       $hours.textContent = hours < 10 ? '0' + hours : hours;
       $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
       $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
       $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
       $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
       $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
       $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
     }

     const $days = document.querySelector('.timer__days');
     const $hours = document.querySelector('.timer__hours');
     const $minutes = document.querySelector('.timer__minutes');
     const $seconds = document.querySelector('.timer__seconds');
     countdownTimer();
     timerId = setInterval(countdownTimer, 1000);
   });
 
   // конечная дата
 const deadline = new Date(2022, 00, 01);
 
 
 function countdownTimer() {
 const diff = deadline - new Date();
 const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
 const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
 const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
 const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
 $days.textContent = days < 10 ? '0' + days : days;
 $hours.textContent = hours < 10 ? '0' + hours : hours;
 $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
 $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
 $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
 $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
 $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
 $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
 const $days = document.querySelector('.timer__days');
 const $hours = document.querySelector('.timer__hours');
 const $minutes = document.querySelector('.timer__minutes');
 const $seconds = document.querySelector('.timer__seconds');
 function declensionNum(num, words) {
     return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
   }
 let timerId = null;
 timerId = setInterval(countdownTimer, 1000);
 function countdownTimer() {
     if (diff <= 0) {
       clearInterval(timerId);
     }
 }
   }
    