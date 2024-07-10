// // SLIDER
// let movies = [
//   {
//     name: "Falcon and the winter soldier",
//     des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic explicabo recusandae aspernatur ex! Accusamus.",
//     image: "assets/images/slide2.PNG",
//   },
//   {
//     name: "Loki",
//     des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic explicabo recusandae aspernatur ex! Accusamus.",
//     image: "assets/images/slide1.PNG",
//   },
//   {
//     name: "Wanda vision",
//     des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic explicabo recusandae aspernatur ex! Accusamus.",
//     image: "assets/images/slide3.PNG",
//   },
//   {
//     name: "Raya and the last dragon",
//     des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic explicabo recusandae aspernatur ex! Accusamus.",
//     image: "assets/images/slide4.PNG",
//   },
//   {
//     name: "Luca",
//     des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic explicabo recusandae aspernatur ex! Accusamus.",
//     image: "assets/images/slide5.PNG",
//   },
// ];

// const carousel=document.querySelector(".carousel");
// let sliders=[];

// let slideIndex=0; //track the current slide

// const createSlide=() => {
//   if (slideIndex>=movies.length) {
//     slideIndex=0;
//   }

//   // Create DOM elements
//   let slide=document.createElement('div');
//   var imgElememt=document.createElement('img');
//   let content=document.createElement('div');
//   let h1=document.createElement('h1');
//   let p=document.createElement('p');

//   // Attaching all elements
//   imgElememt.appendChild(document.createTextNode(''));
//   h1.appendChild(document.createTextNode(movies[slideIndex].name));
//   p.appendChild(document.createTextNode(movies[slideIndex].des));
//   content.appendChild(h1);
//   content.appendChild(p);
//   slide.appendChild(imgElememt);
//   carousel.appendChild(slide);

//   // Setting up images
//   imgElememt.src=movies[slideIndex].image;
//   slideIndex++;

//   slide.className='slider';
//   content.className='slide-content';
//   h1.className='movie-title';
//   p.className='movie-des';

//   sliders.push(slide);

//   if (sliders.length > 1) {
//     sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
//       30 * (sliders.length - 2)
//     }px)`;
//   }
// };

// for (let i = 0; i < 3; i++) {
//   createSlide();
// }
// setInterval(() => {
//   createSlide();
// }, 3000);

//VIDEO CARDS
const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
  item.addEventListener('mouseover',()=>{
    let video=item.children[1];
    video.play()
  })
  item.addEventListener('mouseleave',()=>{
    let video=item.children[1];
    video.pause();
  });
});

//CARD SLIDER 
let cardContainers = [...document.querySelectorAll('.card-container'),...document.querySelect('.card-container')];
let preBtns = [...document.querySelectorAll()]
 