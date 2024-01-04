let imageArray = ["https://cdn.britannica.com/90/7490-050-5D33348F/Flag-China.jpg",
 "https://cdn.britannica.com/89/179589-138-3EE27C94/Overview-Great-Wall-of-China.jpg?w=800&h=450&c=crop",
 "https://images.tripadeal.com.au/cdn-cgi/image/format=auto,width=800/https://cstad.s3.ap-southeast-2.amazonaws.com/4721_China_WEB_HERO_1.jpg"
];
let interval = setInterval(next, 3000);
let currentIndex = 0;
let arrayLength = imageArray.length-1;

function next() {
  clearInterval(interval);
  currentIndex === arrayLength ? currentIndex = 0 : currentIndex++;
  document.getElementById('image').src = imageArray[currentIndex];
  interval = setInterval(next, 3000);
  return currentIndex;
}

function prev() {
  clearInterval(interval);
  currentIndex === 0 ? currentIndex = arrayLength: currentIndex--;
  document.getElementById('image').src = imageArray[currentIndex];
  console.log(currentIndex);
  interval = setInterval(next, 3000);
  return currentIndex;
}