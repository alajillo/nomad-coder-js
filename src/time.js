const timeElement = document.getElementById('time');

function getCurrentTime() {
  const time = new Date();
  const hour = time.getHours().toString().padStart(2, '0');
  const minute = time.getMinutes().toString().padStart(2, '0');
  timeElement.innerText = `${hour} : ${minute}`;
}


getCurrentTime();
setInterval(getCurrentTime,1000);