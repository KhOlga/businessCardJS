$(document).ready(function(){
    $("header").css({ "position" : "absolute", "top" : "0", "left" : "0", "right" : "0",
					  "width" : "100%", "height" : "100px",
					  "background-image" : "url('cream-blue.png')" });

	$(".representation").css({ "position" : "absolute", "top" : "100px", 
							   "display" : "flex", "flex-wrap" : "nowrap", "flex-direction" : "row",
							   "justify-content" : "flex-start", "height" : "200px", "left" : "0",
							   "margin" : "20px 20px", "padding" : "20px 20px", "align-items": "center" });

	$("div.representation").css({ "margin" : "20px 20px", "padding" : "20px 20px",
								  "width" : "150px", "height" : "214px" });

	$("img").css({ "margin" : "0", "padding" : "0", "width" : "150px", "height" : "214px",
				   "box-shadow" : "-10px -10px 5px rgba(35,41,77, 0.2)"});

	$(".name").css({ "left" : "200px", "padding" : "40px 40px", "margin" : "10px 10px"});

	$("div > h1").css({ "color" : "#23294D", "font-size" : "40px", "align-self" : "center" });

	$(".tabsMenu").css({ "display" : "inline-block"});

	$(".tabsMenu ul").css({ "width" : "100%", "display" : "-webkit-flex", "display" : "-moz-flex", 
				   "display" : "-ms-flex", "display" : "flex", "flex-direction" : "row",
				   "text-align" : "center", "text-align" : "justify", "justify-content" : "space-around" });

	$(".tabsMenu li").css({ "display" : "inline-block", "background-color" : "#D0D4E0", 
					        "box-shadow" : "-5px -5px 5px rgba(35,41,77, 0.2)", "justify-content" : "space-around", "width" : "170px"});

	$(".tabsMenu li a").css({ "display" : "inline-block", "background-color" : "#D0D4E0", "align-self" : "justify", 
							  "font-size" : "22px", "text-decoration" : "none", "text-align" : "center",
							  "color" : "#23294D", "padding" : "5px 10px 5px 10px",
							  "margin" : "20px, 20px, 20px, 20px", "width" : "200px"});

	$("span:only-child").css({ "color" : "#23294D", "text-decoration" : "none", "font-size" : "12px",
					  "padding" : "5px 10px 5px 10px", "width" : "200px" });

	$(".tabsBox").css({ "position" : "absolute", "width" : "1200px", "height" : "300px", "top" : "380px", "padding" : "0",
						"margin" : "0", "left" : "50%", "margin-left" : "-600px", "display" : "flex",
						"display" : "-webkit-flex", "display" : "-moz-flex",
						"flex-direction" : "column", "text-align" : "justify" });

	
	$("#skills, #experience, #goal, #contacts").css("display", "none");

	$(".tab").css({"margin" : "0", "padding" : "0", "width" : "1200px", "height" : "300px", "top" : "80px",
					"position" : "absolute"});

	$("#divContent, .divContent > p").css({ "text-align" : "justify", "color" : "#23294D", 
											"text-indent" : "45px", "border" : "1px solid rgb(138, 102, 153)",
							   				"background-color" : "rgba(231, 182, 150, 0.2)",
							   				"box-shadow" : "-10px -10px 5px rgba(35, 41, 77, 0.2)"
							   				 });
	
	$(".contacts a").css({ "font-size" : "100%", "text-decoration" : "none", "color" : "#23294D" });

	var tabLink = $(".tabsMenu a");

	$(tabLink).click(function(e) {
    	e.preventDefault();
    	$(".tabsMenu .active").removeClass("active");
    	$(this).addClass("active");
    	var tab = $(this).attr("href");
		$(".tab").not(tab).css("display", "none");
		$(tab).fadeIn(700);

    });

    $(function () {
            $(tabLink).hover(onTabLink, outTabLink);
    });

    function onTabLink() {
        $(this).css({ "font-size" : "22px", "font-weight" : "bold", "font-style" : "italic",
            				 "width" : "200px", "border" : "none",
            				 "box-shadow" : "-5px -5px 5px rgba(35,41,77, 0.4)" });
    }

    function outTabLink() {
        $(tabLink).css({ "font-size" : "22px", "font-weight" : "normal",
            				 "width" : "200px", "border" : "none",
            				 "box-shadow" : "-5px -5px 5px rgba(35,41,77, 0.2)" });
    }


});


