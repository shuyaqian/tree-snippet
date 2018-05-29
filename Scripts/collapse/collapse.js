+ function() {
	var collapse = document.querySelectorAll('.accordion-item');
	for(var i = 0; i < collapse.length; i++) {
		addEvent(collapse[i].querySelector('.accordion-item-toggle'), 'click', function() {
			var parent = this.parentNode.parentNode.parentNode;
			if(parent.classList.contains('accordion-list')) {
				var item = parent.querySelectorAll('.accordion-item');
				for(var j = 0; j < item.length; j++) {
					if(item[j].querySelector('.accordion-item-toggle') != this){
						var con = item[j].querySelector('.accordion-item-content');
						con.style.height = '0px';
						con.parentNode.classList.remove('open');
					}
				}
			};
			var con = this.nextElementSibling;
			if(!con) return;
			if(con.parentNode.classList.contains('open')) {
				con.style.height = '0px';
				con.parentNode.classList.remove('open');
			} else {
				con.parentNode.classList.add('open');
				var height = con.scrollHeight;
				con.style.height = height + 'px';
			}
		}, false);
	}
}();