// let musicArr = [
//     {
//         songName : "Jale 2",
//         url: "./songs/Jale 2.mp3",
//         img : "./images/jale.jpg",
//         duration : "2:39"
//     },
//     {
//         songName : "Pehle Bhi Main",
//         url: "./songs/Pehle Bhi Main.mp3",
//         img : "./images/animal.jpg",
//         duration : "4:10"
//     },
//     {
//         songName : "Arjan Vailly Ne",
//         url: "./songs/Arjan Vailly Ne.mp3",
//         img : "./images/animal.jpg",
//         duration : "3:02"
//     },
//     {
//         songName : "Ram Siya Ram",
//         url: "./songs/Ram Siya Ram.mp3",
//         img : "./images/ram.jpg",
//         duration : "3:50"
//     },
//     {
//         songName: "Apa Fer Milange",
//         url : "./songs/Apa Fer Milange.mp3",
//         img: "https://i.scdn.co/image/ab67616d0000b273ca9e78bd9b0864fefd1a2f44",
//         duration: "4:14"
//     }, 
//     {
//         songName: "Bebe Bapu",
//         url : "./songs/Bebe Bapu.mp3",
//         img: "https://c.saavncdn.com/910/Bebe-Bapu-Hindi-2024-20240325050606-500x500.jpg",
//         duration: "3:55"   
//     },
//     {
//         songName: "Aam Jahe Munde",
//         url : "./songs/Aam Jahe Munde.mp3",
//         img: "https://c.saavncdn.com/135/Aam-Jahe-Munde-Punjabi-2020-20240424043015-500x500.jpg",
//         duration: "3:27"  
//     }
// ];

// let allSongs = document.querySelector('#all-songs');
// let audio = new Audio();
// let selectedSong = 0;
// let poster = document.querySelector("#left")
// let play = document.querySelector("#play");
// let backward = document.querySelector("#backward");
// let forward = document.querySelector("#forward");

// function addSongs(){
//     let clutter = "";
//     musicArr.forEach(function(song, index){

//         clutter += ` <div class = "song-card" id=${index}>
//         <div class="part1">
//                 <img src="${song.img}" alt="">
//                 <h2>${song.songName}</h2>
                
//             </div>
//             <h6>${song.duration}</h6>
//             </div>`;
//     })
//     // console.log(clutter);
    
//     allSongs.innerHTML  = clutter;
//     audio.src = musicArr[selectedSong].url;
//     poster.style.backgroundImage = `url(${musicArr[selectedSong].img})`;
// }

// addSongs();


// allSongs.addEventListener("click", function(dets){
//     // console.log(dets.target.id);
//     // console.log(musicArr[dets.target.id].url);
//     selectedSong = dets.target.id;
//     play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
//     flag = 1
//     addSongs();
//     audio.play(); 

// })

// let flag = 0;
// play.addEventListener('click', function(){
//     if(flag === 0){
//         play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
//         addSongs();
//         audio.play();
//         flag = 1;
//     } else {
//         play.innerHTML = `<i class="ri-play-mini-fill"></i>`
//         addSongs();
//         audio.pause();
//         flag = 0;
//     }
    
// });

// forward.addEventListener("click", function(){
//     if(selectedSong < musicArr.length-1){
//         selectedSong++;
//         addSongs()
//         audio.play()
//     } else {
//         forward.style.opacity = 0.4;
//     }
// })

// backward.addEventListener("click", function(){
//     if(selectedSong < musicArr.length-1){
//         selectedSong--;
//         addSongs()
//         audio.play()
//     } else {
//         backward.style.opacity = 0.4;
//     }
// })

let musicArr = [
    {
        songName: "Jale 2",
        url: "./songs/Jale 2.mp3",
        img: "./images/jale.jpg",
        duration: "2:39"
    },
    {
        songName: "Pehle Bhi Main",
        url: "./songs/Pehle Bhi Main.mp3",
        img: "./images/animal.jpg",
        duration: "4:10"
    },
    {
        songName: "Arjan Vailly Ne",
        url: "./songs/Arjan Vailly Ne.mp3",
        img: "./images/animal.jpg",
        duration: "3:02"
    },
    {
        songName: "Ram Siya Ram",
        url: "./songs/Ram Siya Ram.mp3",
        img: "./images/ram.jpg",
        duration: "3:50"
    },
    {
        songName: "Apa Fer Milange",
        url: "./songs/Apa Fer Milange.mp3",
        img: "https://i.scdn.co/image/ab67616d0000b273ca9e78bd9b0864fefd1a2f44",
        duration: "4:14"
    },
    {
        songName: "Bebe Bapu",
        url: "./songs/Bebe Bapu.mp3",
        img: "https://c.saavncdn.com/910/Bebe-Bapu-Hindi-2024-20240325050606-500x500.jpg",
        duration: "3:55"
    },
    {
        songName: "Aam Jahe Munde",
        url: "./songs/Aam Jahe Munde.mp3",
        img: "https://c.saavncdn.com/135/Aam-Jahe-Munde-Punjabi-2020-20240424043015-500x500.jpg",
        duration: "3:27"
    }
];

let allSongs = document.querySelector('#all-songs');
let audio = new Audio();
let selectedSong = 0;
let poster = document.querySelector("#left");
let play = document.querySelector("#play");
let backward = document.querySelector("#backward");
let forward = document.querySelector("#forward");
let progressBar = document.querySelector('#progress-bar');
let isPlaying = false;

function addSongs() {
    let clutter = "";
    musicArr.forEach(function (song, index) {
        clutter += `<div class="song-card" id="${index}">
            <div class="part1">
                <img src="${song.img}" alt="">
                <h2>${song.songName}</h2>
            </div>
            <h6>${song.duration}</h6>
        </div>`;
    });
    allSongs.innerHTML = clutter;
    audio.src = musicArr[selectedSong].url;
    poster.style.backgroundImage = `url(${musicArr[selectedSong].img})`;
}

addSongs();

allSongs.addEventListener("click", function (dets) {
    selectedSong = dets.target.closest('.song-card').id;
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    isPlaying = true;
    audio.src = musicArr[selectedSong].url;
    audio.play();
    poster.style.backgroundImage = `url(${musicArr[selectedSong].img})`;
});

play.addEventListener('click', function () {
    if (!isPlaying) {
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        audio.play();
        isPlaying = true;
    } else {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
        audio.pause();
        isPlaying = false;
    }
});

forward.addEventListener("click", function () {
    if (selectedSong < musicArr.length - 1) {
        selectedSong++;
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        isPlaying = true;
        audio.src = musicArr[selectedSong].url;
        audio.play();
        poster.style.backgroundImage = `url(${musicArr[selectedSong].img})`;
    }
});

backward.addEventListener("click", function () {
    if (selectedSong > 0) {
        selectedSong--;
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        isPlaying = true;
        audio.src = musicArr[selectedSong].url;
        audio.play();
        poster.style.backgroundImage = `url(${musicArr[selectedSong].img})`;
    } 
});

audio.addEventListener('timeupdate', function () {
    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
});
