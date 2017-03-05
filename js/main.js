var gmail,
	emails = [],
	$container = null,
	$sideBar = null;


function refresh(f) {
	if( (/in/.test(document.readyState)) || (typeof Gmail === undefined) ) {
		setTimeout('refresh(' + f + ')', 10);
	} else {
		f();
	}
}

var triggerToContent = function() {
		var event = document.createEvent('Event');
		event.initEvent('email_changed');
		document.dispatchEvent(event);
	},
	updateIndex = function() {
		var $paginators = $("span.Di span.Dj span.ts").slice(0, 3),
			from = parseInt($($paginators[0]).text()) || 0,
			to = parseInt($($paginators[1]).text()) || 0,
			count = parseInt($($paginators[2]).text()) || 0;

		localStorage.setItem("from", JSON.stringify(from));
		localStorage.setItem("to", JSON.stringify(to));
		localStorage.setItem("count", JSON.stringify(count));

		triggerToContent();
	}


var main = function(callback){
	gmail = new Gmail();
	emails = gmail.get.visible_emails();
	localStorage.setItem("emails", JSON.stringify(emails));

	jQuery(document).ready(function(event) {
		console.log("Hello");

		$container = jQuery("body"),
		$sideBar = jQuery('<div id="gmail-chrome-extension-container"></div>'),
		$innerContainer = jQuery('<div class="gmail-chrome-extension-inner-container"></div>')

		var $toggleContainer = jQuery('<div/>').attr({
				id:'gmail-chrome-extension-toggle-container'
			}),
			$contentContainer = jQuery('<div/>').attr({
				id: 'gmail-chrome-extension-content-container'
			});

		//	TODO

		$sideBar.append($innerContainer.append($toggleContainer, $contentContainer));
		$container.append($sideBar);

		$("div.T-I.J-J5-Ji.amD").click(function(event) {
			event.preventDefault();
			updateIndex();
		});

		updateIndex();
	})
}


refresh(main);