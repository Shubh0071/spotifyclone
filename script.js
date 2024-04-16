console.log("Welcome to spotify");
let songIndex=0;
let audioElement=new audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let songs = [
    {songName:"Bedardiya",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName:"Bedardiya",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName:"Bedardiya",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName:"Bedardiya",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName:"Bedardiya",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-cicle');
        masterPlay.classList.add('fa-pause-circle');
    }
})
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

})