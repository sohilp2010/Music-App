song_1= "";
song_2 = "";
status_1 ="";
status_2 = "";

first_song = "Harry Potter";
second_song = "Peter Pan";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload()
{
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    canvas.position(400, 140);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function draw()
{
    image(video,0,0,600,500);

    fill("#FF0000");
    stroke("#FF0000");

    status_1 = song_2.isPlaying();
   
        if (scoreLeftWrist > 0.2)
        {
            circle(leftWristX,leftWristY,20);
            song_1.stop();
       
        if (status_1 == false)
        {
            document.getElementById("Playing").innerHTML = "Song Name : " + second_song;
            song_2.play();
        }  
    }

    status_2 = song_1.isPlaying();
    
        if (scoreRightWrist > 0.2)
        {
            circle(rightWristX,rightWristY,20);   
            song_2.stop();
    

        if (status_2 == false)
        {           
            document.getElementById("Playing").innerHTML = "Song Name : " + first_song; 
            song_1.play();
        }
    }
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist =  results[0].pose.keypoints[9].score;
        scoreRightWrist =  results[0].pose.keypoints[10].score;
        

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);

    }
}

function isPlaying()
{
    song.play();
}

function stop()
{
    song.stop();
}