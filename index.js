console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');

let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Let Me Love You", filePath: "song/1.mp3", coverPath: "covers/cover1.jpg"},
    {songName:"song2", filePath: "song/2.mp3", coverPath: "covers/cover2.jpg"},
    {songName:"A.Guitar Sikhda", filePath: "song/3.mp3", coverPath: "covers/cover3.jpg"},
    {songName:"Kaise Hua-Kabir Singh", filePath: "song/4.mp3", coverPath: "covers/cover4.jpg"},
    {songName:"Laare_Jaani__B_Praak", filePath: "song/5.mp3", coverPath: "covers/cover5.jpg"},
    {songName:"Pachtaoge__Vicky_Kaushal", filePath: "song/6.mp3", coverPath: "covers/cover6.jpg"},
    {songName:"Allah_Ve_-_Jassi_Gill", filePath: "song/7.mp3", coverPath: "covers/cover7.jpg"},
    {songName:"Bilal_Saeed___Paranday", filePath: "song/8.mp3", coverPath: "covers/cover8.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.querySelector(".songName").innerText = songs[i].songName;
})

// audioElement.play();

// Play/Pause handler

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1; 
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0; 
    }
})
// Listn to event
audioElement.addEventListener('timeupdate',() =>{

    // Seekbar Update

    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change' ,()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100; 
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
        
    })

}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = `song/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }

    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }

    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})