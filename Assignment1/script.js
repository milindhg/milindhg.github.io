document.addEventListener('DOMContentLoaded', function(){ 
    // le magic
	register_row_listeners();
	register_login_listeners();
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

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var result = re.test(email);
	return result;
}

function validatePassword(pwd) {
	if(pwd.length>6)
		return true;
	else 
		return false;
}

var register_login_listeners = function(){
	var submit_btn = document.getElementById('login-btn');
	submit_btn.disabled=true;
	var email_txt = document.getElementById('email');
	var password_txt = document.getElementById('pwd');
	
	var input_fields = document.getElementsByTagName('input');
		input_fields[0].addEventListener("keyup",function(){
			if(validateEmail(email_txt.value)==true){
				this.className = this.className.replace('invalid',' ')
			}
			else{
				submit_btn.disabled = true;
				if(!hasClass(this, 'invalid'))
					this.className += " invalid";
			}
			if(validatePassword(password_txt.value)==true && validateEmail(email_txt.value)==true)
				submit_btn.disabled = false;
		});
		input_fields[1].addEventListener("keyup",function(){
			if(validatePassword(password_txt.value)==true){
				this.className = this.className.replace('invalid',' ')
			}
			else{
				submit_btn.disabled = true;
				if(!hasClass(this, 'invalid'))
					this.className += " invalid";
			}
			if(validatePassword(password_txt.value)==true && validateEmail(email_txt.value)==true)
				submit_btn.disabled = false;
		});
}