music_1 = "";
music_2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
song_1_status = "";
song_2_status = "";

preload()
{
music_1 = loadSound("music.mp3");
music_2 = loadSound("music2.mp3");
}

setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCanvas(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        scoreLeftWrist = results[0].pose.keypoints[9].score;


        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY" + rightWristY);
    }
}
draw()
{
    fill("#FF0000");
    stroke("#FF0000");
    song_1_status = music_1.isPlaying();
    song_2_status = music_2.isPlaying();
    if(scoreLeftWrist > 0.2)
    {
        circle(leftWrist,rightWrist,20);
        music_2.stop();
        if(music_1 == false)
        {
            music_1.play();
        }
    }
    
}