//get components

let player = document.getElementById('video_player');
let previous = document.getElementById('prev');
let play_pause_btn = document.getElementById('play_pause_btn');
let current_duration = document.getElementById('current_duration');
let total_duration = document.getElementById('total_duration');
let progress_bar = document.getElementById('progress_bar');
let skip_backward_btn = document.getElementById('skip_backward_btn');
let skip_forward_btn= document.getElementById('skip_forward_btn');
let next = document.getElementById('next');


// player status is 0 implies video is paused while 1 implies video is playing
player_status=0;

function play_pause(){
    if(player_status==0){
        player.play();
        player_status=1;
        timer = setInterval(update_player,1000);
        play_pause_btn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    }else{
        player.pause();
        player_status=0;
        play_pause_btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
}
play_pause_btn.addEventListener('click',play_pause);


//fuction update_player
function update_player(){
    current_duration.innerHTML="0" + ":" + Math.floor(player.currentTime);
    const percent = (player.currentTime) * (100) / (player.duration) ;
    progress_bar.style.width = '$(percent)%';
    if(player.ended)
    {
        player_status=0;
        play_pause_btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
}

//function skip_player
function skip(){
    player.currentTime += parseFloat(this.dataset.skip);
    update_player();
}

skip_forward_btn.addEventListener('click',skip)

//function skip_player_back
function skip_back(){
    player.currentTime += parseFloat(this.dataset.skip);
    update_player();
}

skip_backward_btn.addEventListener('click',skip_back)


window.onload = function(){
    total_duration.innerHTML = "0" + ":" + Math.floor(player.duration)
}
