    //I make dirt texture =)
            var randirt = 1;
    while(randirt < 6){
           	 //edit dirt image
             var dirtimg = document.createElement("img");
             dirtimg.style = "display:none;"
             dirtimg.id = "dirt"+randirt;
             document.body.appendChild(dirtimg);
         var dirty = document.createElement("canvas");
		 dirty.style = "display:none;"
		 dirty.width = "64";
		 dirty.height = "64";
		 document.body.appendChild(dirty);
		 {
			 var dirtyctx = dirty.getContext("2d");
    		 var xdirt = 0;
    		 var ydirt = 0;
    		 while(xdirt < dirty.width){
    			 while(ydirt < dirty.height){
        			 var randint = Math.floor((Math.random() * 3) + 1);
           			 if(randint == 1){
           			      dirtyctx.fillStyle = "rgba(97,65,78,1)";
              			  dirtyctx.fillRect( xdirt, ydirt, 1, 1 );
            			}else if(randint == 2){
                			dirtyctx.fillStyle = "rgba(112,84,59,1)";
                			dirtyctx.fillRect( xdirt, ydirt, 1, 1 );
            			}else if(randint == 3){
                			dirtyctx.fillStyle = "rgba(140,118,98,1)";
                			dirtyctx.fillRect( xdirt, ydirt, 1, 1 );
            			}
           				var ydirt = ydirt+1;
        			}
        			var ydirt = 0;
    				var xdirt = xdirt+1;
    			}
			}
			var dataurl = dirty.toDataURL();
            document.getElementById("dirt"+randirt).src = dataurl;
var randirt = randirt+1;
        }
        //Yay! made dirt texture!
