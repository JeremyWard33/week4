//create an array
var colorList = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];

//output the first item to the console
//console.log(colorList[0]);

////sort the colors
//console.log(colorList);
//colorList.sort();
//console.log(colorList);
//colorList.reverse();
//console.log(colorList);



//make a list of scores
var scores = [1, 2, 3, 4, 5, 6, 80, 22, 92, 382];

//colorList.pop(); //removes the end element, and returns the element to the console.

////assign the end element to a result variable
//var removedEndElement = colorList.pop();

//console.log(removedEndElement);

//colorList.shift(); //removes the first element in the array

//colorList.unshift("brown");  //adds to the start of the list

//console.log(colorList);

//splice takes out 1 or many elements
//first argument is the starting position
//second argument is the number of removed elements
//third argument is an array?
colorList.splice(4);  

//console.log(scores);

//scores.sort();

//console.log(scores);

//var myArray = [];
//var myArray2 = new Array();


var myThumbDiv = document.getElementById("thumbs");
 

//variables IN functions (function scope), can see global varibles)

var imageListA = [];
for (var a = 1; a < 18; a++) {
    imageListA[a] = "images/drawing/thumbs/artwork_" + a + ".jpg";
}

//imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
//imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
//imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
//imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
//imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
//imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
//imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
//imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
//imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
//imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
//imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
//imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
//imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
//imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
//imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
//imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";
//imageListA[16] = "images/drawing/thumbs/artwork_17.jpg";

//Oil color art
var imageListB = [];

//imageListB[0] = "images/oil/thumbs/artwork_1.jpg";
//imageListB[1] = "images/oil/thumbs/artwork_2.jpg";
//imageListB[2] = "images/oil/thumbs/artwork_3.jpg";
//imageListB[3] = "images/oil/thumbs/artwork_4.jpg";
//imageListB[4] = "images/oil/thumbs/artwork_5.jpg";
//imageListB[5] = "images/oil/thumbs/artwork_6.jpg";
//imageListB[6] = "images/oil/thumbs/artwork_7.jpg";
//imageListB[7] = "images/oil/thumbs/artwork_8.jpg";


//Water color art
//var imageListC = [];
//imageListC[0] = "images/watercolor/thumbs/artwork_1.jpg";
//imageListC[1] = "images/watercolor/thumbs/artwork_2.jpg";
//imageListC[2] = "images/watercolor/thumbs/artwork_3.jpg";
//imageListC[3] = "images/watercolor/thumbs/artwork_4.jpg";
//imageListC[4] = "images/watercolor/thumbs/artwork_5.jpg";
//imageListC[5] = "images/watercolor/thumbs/artwork_6.jpg";
//imageListC[6] = "images/watercolor/thumbs/artwork_7.jpg";
//imageListC[7] = "images/watercolor/thumbs/artwork_8.jpg";
//imageListC[8] = "images/watercolor/thumbs/artwork_9.jpg";
//imageListC[9] = "images/watercolor/thumbs/artwork_10.jpg";



//create the buildThumbnail function
function buildThumbnails()
{
	//hook onto the thumbs div
    var thumbsDiv = document.getElementById("purchaseableThumbsDiv");
	
	//create an output variable
	var output = "";
	//first part: counter (we set up 0 to start counting the loop)
	//second part: condition, (the loop will keep looping as long as the condition is true)
	//third part: incrementor - adds one to the counter AFTER the code is executed in the brackets
	output += '<div class="thumbs_block"><h2>Images of STUFF YOU CAN PURCHASE. (this is an h2 header).</h2>';
	for (var i = 1; i < imageListA.length; i++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListA[i] + '" />';
	}
	output += '</div>'
	thumbsDiv.innerHTML = output;

	var thumbsDiv2 = document.getElementById("purchasedThumbsDiv");
    output = '<div class="thumbs_block"><h2>Images of STUFF YOU HAVE PURCHASED. (this is an h2 header).</h2>';
	for(var j=0; j < imageListB.length; j++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListB[j] + '" />';
	}
	output += '</div>'

	//output += '<div class="thumbs_block">';
	//for(var k=0; k < imageListC.length; k++)
	//{
	//	//concatenation assignment operator..
	//	output += '<img src="' + imageListC[k] + '" />';
	//}
	//output += '</div>'
	thumbsDiv2.innerHTML = output;

	//thumbsDiv.className = "thumbs_block";
	// thumbsDiv.innerHTML = 
	// '<img src="' + imageList[0] + '" />' + 
	// '<img src="' + imageList[1] + '" />' +
	// '<img src="' + imageList[2] + '" />' +
	// '<img src="' + imageList[3] + '" />' +	
	// '<img src="' + imageList[4] + '" />'
	// ;
}

window.onload = function()
{
	buildThumbnails();//use or "fire off" this function
	//or invoke the function
};

//get the thumb div and assign it to a variable
//attach a click event to the div with id = "thumbs"
purchaseableThumbsDiv.addEventListener("click", onImageClick, false);

purchasedThumbsDiv.addEventListener("click", onImageClick2, false);

//the function handler
function onImageClick(evt) {

    //evt.target.setAttribute("src", "images/drawing/thumbs/artwork_22.jpg");
    //evt.target.style.display = "none";
    //evt.target.setAttribute("style", "display:none;");
    //evt.target.setAttribute("style", "padding: 3em;");

    var targetSrcString = evt.target.getAttribute("src");
    console.log(targetSrcString);

    if (targetSrcString != null)
    {
        //remove clicked image from purchaseable array and put in the purchased array.
        var clickedImageIndex = imageListA.indexOf(targetSrcString);
        console.log(clickedImageIndex);
        console.log("imageListA.length: " + imageListA.length)
        //remove image from purchaseable array if that array still has images.
        if (imageListA.length > 0) {
            imageListA.splice(clickedImageIndex, 1);
        }

        //add same image to purchased array if it's not already there.
        if (imageListB.indexOf(targetSrcString) == -1) {
            imageListB.push(targetSrcString);
        }

        buildThumbnails();
    }
}
function onImageClick2(evt) {
    //console.log("reached click2 event!")
    var targetSrcString = evt.target.getAttribute("src");
    console.log(targetSrcString);

    //remove clicked image from purchaseable array and put in the purchased array.
    if (targetSrcString != null)
    {
        var clickedImageIndex = imageListB.indexOf(targetSrcString);
        console.log(clickedImageIndex);
        console.log("imageListB.length: " + imageListB.length)
        //remove image from purchased array if that array still has images.
        if (imageListB.length > 0) {
            imageListB.splice(clickedImageIndex, 1);
        }

        //add same image to purchased array if it's not already there.
        if (imageListA.indexOf(targetSrcString) == -1) {
            imageListA.push(targetSrcString);
        }

        buildThumbnails();

    }


}