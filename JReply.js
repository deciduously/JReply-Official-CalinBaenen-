var _ = function _(command, x = null, y = null, strInput = null, strInput2 = null) {
	var finalReturn = null;
	if(command == "Timer" || command == "-t") {
		Timer(x,y);
	} else if(command == "HTML" || command == "-web") {
		HTML(x,y,strInput);
	} else if(command == "Image" || command == "-img") {
		Image(x,y,strInput);
	} else if(command == "Notify" || command == "-note") {
		Notify(x);
	} else if(command == "Help" || command == "help" || command == "-?") {
		Help(x);
	} else if(command == "pickBetween" || command == "-between") {
		pickBetween(x,y);
	} else if(command == "randomNumberBetween" || command == "-numbersInbetween") {
		randomNumberBetween(x,y)
	} else if(command == "$" || command.toUpperCase() == "CREDITS") {
		credits();
	} else if(command == "CSS" || command == "-C") {
		ManipulateCSS(x,y,strInput);
	} else if(command == "JRScript" || command == "-JRS") {
		script(x,y,strInput,strInput2);
	} else if(command == "newElement" || command == "-aElement") {
		newElement(x,y,strInput);
	} else if(command == "injectElement" || command == "-iElement") {
		injectElement(x);
	} else if(command == "patchNotes" || command == "notes" || command == "//" || command == "?") {
		patchNotes();
	} else if(command == "Banner" || command == "-EB") {
		newBanner(x,y,strInput);
	} else if(command == "Canvas" || command == "-EC") {
		newCanvas(x,y,strInput);
	} else if(command == "Java" || command == "-J") {
		executeJava(x,y,strInput,strInput2);
	}
	 /*else if(command == "elementOnclick" || command == "-CEOCP") {
		changeElementOnClickProperty(x,y);
	} else if(command == "elementOnMouseover" || command == "-CEOMP") {
		changeElementOnMouseoverProperty(x,y);
	}*/
	else if(command == undefined || command == null || command == "") {
		console.log("Please don't use blank/empty rules.");
	}
	else {
		console.log("\""+command+"\" does not exist... Do '_(\"Help\")' for help!");
	}
	function patchNotes() {
		document.write("<b><br/>JReply v0.0.4:<br/> added \"Canvas\" command.<br/>added \"Java\" command</b>")
	}
	function credits() {
		document.write("MADE BY: CALIN BAENEN (MADE: 2019)<br/>BASED OFF OF: JQUERY");
	}
	function Timer(func, seconds=1) {
		seconds = seconds * 999.3145312;
		seconds = seconds / 1.5600011;
		setTimeout(func, seconds);
	}
	function randomNumberBetween(p1,p2) {
		p1 = Math.round(p1);
		p2 = Math.round(p2);
		var between = Math.round(((p1*2) / p2) * ((p2*2) / p1));
		between = Math.floor(between * Math.random());
		if(between > p2) {
			between = p2;
		} else if(between < p1) {
			between = p1;
		}
		else if(between == NaN) {
			between = p1;
		}
		finalReturn = between;
	}
	function pickBetween(p1,p2) {
		var between = Math.round(Math.random() * 1.6233424532224532) * (Math.random() + 1);
		between = between - 0.2462346624532553;
		if(between < 0.51) {
			finalReturn = p1;
		}
		else if(between >= 0.51) {
			finalReturn = p2;
		}
	}
	function Help(TOPIC=null) {
		if(TOPIC == null || TOPIC == undefined || TOPIC == "") {
			document.write("<br/>");
			document.write("<h3>_(\"Help\",subject) ~ Provides help specified subject.</h3>");
			document.write("<h3>_(\"HTML\",JReply html command) ~ Used for direct HTML manipulation.</h3>");
			document.write("<h3>_(\"Timer\",function (string format),time (in seconds)) ~ Executes a function after a defined amount of seconds.</h3>");
			document.write("<h3>_(\"Image\",src,x,y) ~ Gets an image from a specified source and will let you specify the resolution.</h3>");
			document.write("<h3>_(\"Notify\",message) ~ Displays an alert box with \"! Notification !\" ontop.</h3>");
			document.write("<h3>_(\"newElement\",name,type,InnerHTML (optional)) ~ makes a new html element.</h3>");
			document.write("<h3>_(\"injectElement\",element name) ~ adds the element to the html.</h3>");
			document.write("<h3>_(\"$\") or _(\"credits\") ~ shows the credits.</h3>")
		} else if(TOPIC.toUpperCase() == "HELP") {
			alert("FAILED TO- MDJRJNR CEFV EFVNEFV FE NFV \n WE ARE NUMBER ONE! HEY! \n ERROR: OVERLOADING");
		} else if(TOPIC.toUpperCase() == "HTML") {
			document.write("<h3>JReply HTML commands:</h3>");
			document.write("<h3>\"text\" ~ replaces all elements in the document with some custom text.</h3>");
			document.write("<h3>\"new-text\" ~ similar to \"text\", but it appends text to the document.</h3>");
			document.write("<h3>\"new-button\" ~ adds a new button to the html document.</h3>");
			document.write("<h3>\"new-image\" ~ adds an image from a specified source, at its original resolution.</h3>");
			document.write("<h3>\"clear-page\" ~ clears a page. can be used as short-hand for \"document.body.innerHTML = '';\"</h3>");
		} else {
			console.log("Sorry but the topic\""+TOPIC+"\" was not found.")
		}
	}
	function Notify(str) {
		alert("! NOTIFICATION ! \n "+str);
	}
	function Image(src, imgX=100, imgY=100) {
		document.write("<img src=\""+src+"\" width=\""+imgX+"\" height=\""+imgY+"\"/>");
	}
	function HTML(HF, str="",color="black") {
		if(HF == "text") {
			document.body.innerHTML = "";
			document.write("<h3 style=\"color:"+color+"\">"+str+"</h3>");
		}
		else if(HF == "new-text") {
			document.write("<h3 style=\"color:"+color+";\">"+str+"</h3>");
		}
		else if(HF == "new-button") {
			document.write("<input type=\"button\" value=\""+str+"\" />");
		}
		else if(HF == "new-image") {
			document.write("<img src=\""+str+"\" />");
		}
		else if(HF == "clear-page") {
			document.body.innerHTML = "";
		}
	}
	function ManipulateCSS(rule,tag,value) {
		document.write("<style>"+rule+"{"+tag+":"+value+";}</style>");
	}
	function script(JRSC, in1, in2, in3) {
		if(JRSC == "out") {
			if(in1 == "text") {
				document.write(in2);
			} else {
				console.log("JReplyScript's \"out\" command must not have a blank or unknown mode (modes \"text\", \"variable\"");
			}
		}
	}
	function newElement(name,type,IH="") {
		if(name == "_" || name == "finalReturn" || name == "newElement") {
			console.log("Sorry but the name:\""+name+"\" is reserved for JReply.");
		} else if(name == "" || name == undefined || name == null) {
			console.log("The name of a new element must not be blank.");
		} else {
			document.write("<script>var "+name+" = document.createElement(\""+type+"\"); "+name+".innerHTML = \""+IH+"\";</script>");
		}
	}
	function injectElement(elementName) {
		document.write("<script>document.body.appendChild("+elementName+");</script>");
	}
	function changeElementOnClickProperty(elementName,property="") {
		eval(elementName+".onclick = "+property+";");
	}
	function changeElementOnMouseoverProperty(elementName,property="") {
		eval(elementName+".onmouseover = "+property+";");
	} function newBanner(src,resX=236,resY=54) {
		document.write("<div><span><img src=\""+src+"\" style=\"position:absolute;\" width=\""+resX+"\" height=\""+resY+"\" /></span></div><br/>");
	} function newCanvas(width,height,id="newJReplyCanvas") {
		document.write("<canvas width=\""+width+"\" height=\""+height+"\" id=\""+id+"\"></canvas>");
	} function executeJava(Jclass,src,WX=200,HY=200) {
		document.write("<object width=\""+WX+"\" height=\""+HY+"\" code=\""+Jclass+".class\" archive=\""+src+"\" codetype=\"application/java\"");
	}
	return finalReturn;
}