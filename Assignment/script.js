document.addEventListener('DOMContentLoaded', function(){ 
    // le magic
	register_row_listeners();
}, false);


var register_row_listeners = function(){
	var trs = document.getElementsByTagName( "tr" );

	for( var i = 1; i < trs.length; i++ ) {
		trs[i].addEventListener("click",function(){
			var checked = this.children[0].getElementsByTagName('input');
			if(checked[0].checked==true)
				checked[0].checked=false;
			else
				checked[0].checked=true;
			if(!hasClass(this, 'selected'))
				this.className += " selected";
			else
				this.className = this.className.replace('selected',' ')
		});
	}
};

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}