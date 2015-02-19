document.addEventListener('DOMContentLoaded', startTimer);
document.getElementById('clock').style.borderRadius = '100%';
document.getElementById('clock').style.border = "2px solid black";
document.getElementById('clock').style.background = "#CCCC98";
document.body.style.background = "#CCCC98";


function displayTime() {
    var now = new Date();
    var hr = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    // --- Analog clock ---//
    var canvas = document.querySelector("#clock");
    var context = canvas.getContext("2d");

    var clockRadius = 100; //clock size

    // Make sure the clock is centered in the canvas
    var clockX = canvas.width / 2;
    var clockY = canvas.height / 2;


    Math.TAU = 2 * Math.PI;

    function drawArm(progress, armThickness, armLength, armColor) {
        var armRadians = (Math.TAU * progress) - (Math.TAU/4);
        var targetX = clockX + Math.cos(armRadians) * (armLength * clockRadius);
        var targetY = clockY + Math.sin(armRadians) * (armLength * clockRadius);

        context.lineWidth = armThickness;
        context.strokeStyle = armColor;

        context.beginPath();
        context.moveTo(clockX, clockY); // Start at the center
        context.lineTo(targetX, targetY); // Draw a line outwards
        context.stroke();
    }

context.clearRect(0, 0, canvas.width, canvas.height);

//draw background
for (var i = 0; i < 12; i++)
	{
		var innerDist		= (i % 3) ? 0.75 : 0.7;
		var outerDist		= (i % 3) ? 0.95 : 1.0;
		context.lineWidth 	= (i % 3) ? 4 : 10;
		context.strokeStyle = 'green';

		var armRadians = (Math.TAU * (i/12)) - (Math.TAU/4);
		var x1 = clockX + Math.cos(armRadians) * (innerDist * clockRadius);
		var y1 = clockY + Math.sin(armRadians) * (innerDist * clockRadius);
		var x2 = clockX + Math.cos(armRadians) * (outerDist * clockRadius);
		var y2 = clockY + Math.sin(armRadians) * (outerDist * clockRadius);

		context.beginPath();
		context.moveTo(x1, y1); // Start at the center
		context.lineTo(x2, y2); // Draw a line outwards
		context.stroke();
	}

drawArm(hr / 12, 7, 0.50, '#619ECC'); // Hour
drawArm(min / 60,  4, 0.75, '#619ECC'); // Minute
drawArm(sec / 60,  2, 1.00, '#3FC738'); // Second


}

function startTimer() {
    setInterval(displayTime, 1000);
    displayTime();
}



