const main=document.body.firstElementChild;

function getDate(){
const currentDate= new Date;
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
const dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const year=currentDate.getFullYear()
const month=monthNames[currentDate.getMonth()]
const date=currentDate.getDate()
const hours=("0" + currentDate.getHours()).slice(-2);
const minutes=("0" + currentDate.getMinutes()).slice(-2);
const seconds=("0" + currentDate.getSeconds()).slice(-2);
const day=dayNames[currentDate.getDay()]



main.innerHTML=`<div id="date">
            <span id="month">${month.toUpperCase()}</span>
            <span id="currentdate"> ${date}</span>,
            <span id="year"> ${year}</span>
        </div>
        <div id="time">
            <span>${hours}:${minutes}:${seconds}</span>
        </div>
        <div id="day">
            <span>${day.toUpperCase()}</span>
        </div>`

}

setInterval(getDate,1000);