music_1 = "";
music_2 = "";

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
}

draw()
{
    
}