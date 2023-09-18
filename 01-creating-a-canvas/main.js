var canvas;
var gl;

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

    drawScene();
}

function drawScene()
{
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}
