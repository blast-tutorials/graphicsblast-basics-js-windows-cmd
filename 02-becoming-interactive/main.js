var canvas;
var gl;

var currentKeysPressed = {};

function initialise()
{
    canvas = document.getElementById("webgl-canvas");
    if(!canvas)
    {
        alert("Unable to get canvas!");
        return -1;
    }

    gl = canvas.getContext("webgl2");
    if(!gl)
    {
        alert("Unable to initialise WebGL!");
        return -1;
    }

    gl.clearColor(0.04, 0.23, 0.51, 1.0);

    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;

    window.requestAnimationFrame(mainLoop);
}

function handleKeyDown(event)
{
    console.log(event.keyCode);
	currentKeysPressed[event.keyCode] = true;
}

function handleKeyUp(event)
{
	currentKeysPressed[event.keyCode] = false;
}

function handleEvents()
{
    if(currentKeysPressed[32])
    {
        console.log("Spacebar pressed!")
    }
}

function drawScene()
{
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

function mainLoop()
{
    drawScene();
    handleEvents();

    window.requestAnimationFrame(mainLoop);
}
