$(document).ready(function()
{
	var $overlay = $('<div class = "overlay"></div>') ;
    var $lightbox = $('<div class = "lightbox"></div>');
	var $image = $('<img src = "">');
	var $caption = $('<p class = "caption"></p>');
    var $pages = $('<p class = "pages"></p>');
    var numberOfImages = 0;
    var imageSource;
    var width;
    var height;
    var $imageIndex;

	$("body").append($overlay);
    $overlay.append($lightbox);
    
    $lightbox.append($caption);
	$lightbox.append($image);
    $lightbox.append($pages);

    //Get the number of images in the gallery
    $('.imageViewer a ').each(function()
    {
        numberOfImages++;
    });
    
    //Get the dimensions of the image
    $('.overlay img').load(function()
    {
        //WHY WONT CHROME FIX THIS!!!
        /*if (typeof width === 'undefined' || typeof height === 'undefined')
        {
            width = $(this).width();
            height = $(this).height();
        }
        
        $image.width(width * 2);
        $image.height(height * 2);
        */
        
        
    });
    
    function displayPages($imageIndex)
    {
        var changePageText = "";
        
        $('.imageViewer img').each(function()
        {
            var imageHref = $(this).attr("src");
            
            if ($('.imageViewer img').index(this) === $imageIndex)
            {
                changePageText += '<a class = "currentImage" href = "' + imageHref + '"> &#9679 </a>';  
            }
            else
            {
                changePageText += '<a href = "' + imageHref + '" class = "unselectedImage">&#9679; </a>';
            }
            
        });
        
        return changePageText;
    }
    
    function getImage(event,selection)
    {
         // Prevent the link from going to another page
		event.preventDefault();

        // Grab the imageIndex
        $imageIndex = $(selection).index(this);
        
        
        $pages.html(displayPages($imageIndex));
        
       // Grab the caption text
		var captionText = $('.imageViewer a').children("img").eq($imageIndex).attr("alt")
		$caption.text(captionText); 
    }
    
    $image.load(function()
    {   
         $image.fadeTo("normal", 1.0).css('overflow', 'visible');
    });
    
    function fadeImage(imageSource)
    {
         $image.fadeTo("normal", 0, function()
        {
            $image.attr("src", imageSource).fadeTo("normal", 1.0).css('overflow', 'visible');
            
        });
       
    }
                  

	$(".imageViewer a").click(function(event)
	{   
        var initialImage = $(this).children("img").attr("src");
        $image.attr("src", initialImage);
    
        // Get the image data
        getImage.call(this, event, ".imageViewer a");
        
		// Show the overlay
		$overlay.show();
	});
    
    

	$overlay.click(function()
	{
		$(this).hide();
	});
    
    $lightbox.click(function(e)
    {
        e.stopPropagation();
    });
    
    $pages.on("click", "a", function(event)
    {
        imageSource = $(this).attr("href");
        fadeImage(imageSource);
        getImage.call(this, event, ".pages a");
    });
});