const imgArray = [
  'img/1.jpeg',
  'img/2.jpeg',
  'img/3.jpeg',
  'img/4.jpeg',
  'img/5.jpeg',
  'img/6.jpeg',
]
const bgElement = document.getElementById('bg')
function getRandom(array) {
  const random = Math.floor(Math.random() * array.length)
  return array[random]
}

const img = getRandom(imgArray)

bgElement.src = img

