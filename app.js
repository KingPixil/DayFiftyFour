window.onload = function(){
	var password = document.getElementById('password');
	var icon = document.getElementById('password-icon');
	var tooltip = document.getElementById('tooltip');
	var tooltiptext = document.getElementById('tooltip-text');

	password.oninput = function(){
		var result = zxcvbn(this.value, userInputs = []);
		if(this.value.length > 0){
			tooltip.style.display = 'block';
			this.className = "score-" + result.score.toString();
			if(parseInt(result.score) > 2) {
				icon.className = "fa fa-smile-o";
				tooltiptext.style.display = 'none';
			} else {
				icon.className = "fa fa-frown-o";
				if(result.feedback.warning == ''){
					result.feedback.warning = 'Your password is too short';
				}
				tooltiptext.style.display = '';
				tooltiptext.innerHTML = result.feedback.warning + '.<br /><br />' + result.feedback.suggestions.join(' ');
			}
		} else {
			tooltip.style.display = '';
			this.className = "password";
		}
	}
}
