function getByClass(oParent,sClass){
		var aEle=oParent.getElementsByTagName('*');
		var aBox=[];
		for(var i=0;i<aEle.length;i++){
			 if(aEle[i].className.indexOf(sClass)!=-1)
			 {
			 	aBox.push(aEle[i]);
			 }
		 }
		 return aBox;
	}