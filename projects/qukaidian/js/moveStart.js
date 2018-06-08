
	function getStyle(obj,name)
		{
			if(obj.currentStyle)
			{
				return obj.currentStyle[name];
			}
			else{
				return getComputedStyle(obj,false)[name];
			}
		}

		function moveStart(obj,json,fnEnd)
		{	
			clearInterval(obj.timer);
			var Stop=true;
			obj.timer=setInterval(function(){
				for(attr in json)
				{
					Stop=true;
					if (attr=='opacity')
					{			 		
					 	  var speed=(json[attr]-Math.round(parseFloat(getStyle(obj,attr))*100))/3;	
				     	  speed=speed>0?Math.ceil(speed):Math.floor(speed);
				 		  if(Math.round(parseFloat(getStyle(obj,attr))*100)==json[attr])
					 		{
					 			if(fnEnd)
					 			{
					 				fnEnd();
					 			}
					 		}				
					 		else
							{
								obj.style.filter="alpha(opacity:"+Math.round(parseFloat(getStyle(obj,attr))*100)+speed+")";
								obj.style[attr]=(Math.round(parseFloat(getStyle(obj,attr))*100)+speed)/100;
								Stop=false; 
					 		};
					} 			
					else
					{
						
					 	  var speed=(json[attr]-parseInt(getStyle(obj,attr)))/3;	
				     	  speed=speed>0?Math.ceil(speed):Math.floor(speed);
				 		  if(parseInt(getStyle(obj,attr))==json[attr])
					 		{
					 			if(fnEnd)
					 			{
					 				fnEnd();
					 			}
					 		}			
					 		else
							{
								obj.style[attr]=parseInt(getStyle(obj,attr))+speed+"px";	
								Stop=false;     
					 		};		 	
					}
				}
				if(Stop)
				{
					clearInterval(obj.timer);
				}
			},50)
		}
