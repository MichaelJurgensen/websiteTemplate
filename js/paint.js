// List that contains all of the available colors
var selectColorList = $('.controls');

// Button for creating a new color
var newColorButton = $('#revealColorSelect');

// Div that holds the new color UI
var colorSelect = $('#colorSelect');

// Class for the sliders elements for creating a new color (rgb)
var sliders = $('.sliders');

// Span that holds the preview of the new color
var newColorPreview = $('#newColor');

// Button that adds the new color to the selectColorList
var addNewColorButton = $("#addNewColor");

// The current color selected
var color = $("#colorList > .selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;


selectColorList.on("click", "li", function()
{
	// Remove the selected class from all list elements
	$(this).siblings().removeClass("selected");

	// Add class to the current selected list item
	$(this).addClass("selected");

	// Save the current color
	color = $(this).css('background-color');
});

newColorButton.click(function()
{
	// Toggle the visible of the #colorSelect div element
	colorSelect.toggle();

	//Set default color for newColorPreview
	changeColor();

});

addNewColorButton.click(function()
{
	// Create a new list item
	var newColorAdded = $('<li></li>');

	// Change the list item's background color
	newColorAdded.css('background-color', getColor());

	// Add the item to the selectColorList
	$('.controls ul').append(newColorAdded);

});

function getColor()
{
	return newColorPreview.css('background-color');
}

function changeColor()
{
	// Get the rgb values
	var red = $('#red').val();
	var green = $('#green').val();
	var blue = $('#blue').val();

	// Change the newColorPreview's background color
	newColorPreview.css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
}

// Research Easier way to update color?
sliders.change(changeColor);

//On mouse events on the canvas
$canvas.mousedown(function(e)
{
	//  Save the lastEvent
 	lastEvent = e;
  	mouseDown = true;
}
).mousemove(function(e)
{
	//Draw lines
	if(mouseDown)
	{
		context.beginPath();
		context.moveTo(getOffsetX(lastEvent), getOffsetY(lastEvent));
		context.lineTo(getOffsetX(e), getOffsetY(e));
		context.strokeStyle = color;
		context.stroke();
		lastEvent = e;
	}
}
).mouseup(function()
{
  mouseDown = false;
});

// Used to get the offset
// Fixes cross-browser problem with Firefox
function getOffsetX(e)
{
	if (typeof e.offsetX != 'undefined')
	{
		return e.offsetX;
	}
	else
	{
		return e.pageX-$canvas.offset().left;
	}
}

function getOffsetY(e)
{
	if (typeof e.offsetY != 'undefined')
	{
		return e.offsetY;
	}
	else
	{
		return e.pageY-$canvas.offset().top;
	}
}



