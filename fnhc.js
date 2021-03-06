var selectContainsOption = function(selectNode, text){
	var foundOptions = [];
	var selectOptions = selectNode.options;
	var o;
	for (i = 0; i < selectOptions.length; i++) {
		o = selectOptions[i];
		if(o.text == text){
			foundOptions.push(o);
		}
	}
	return foundOptions;
};

$(document).ready(function(){
	// remove names from the dropdown
	[
		'Dan Martin',
		'Dave Ducane',
		'Dave\'s Friend2',
		'Rob Vaillencourt',
		'test test',
	].forEach(function(name){
		var $select = $("select[name='playerid']");
		if($select.length == 0){return null;}
		var options = selectContainsOption($select[0], name);
		options.forEach(function(o){ o.remove(); });
	});

	// disable "Sign Up" if player blacklisted
	[
		'Arthur Clark',
		'Brooks Dibeler',
		'David Moser',
		'Dustin Lind',
		'Josh Buck',
		'Karl Ness',
		'Kory Zasadzinski',
		'Luke Voltin',
		'Mike Good',
		'Rob Vaillencourt',
		'Shawn Gralish',
		'Tommy Valento',
	].forEach(function(name){
		var $select = $("select[name='playerid']");
		if($select.length == 0){return null;}
		var badOptions = selectContainsOption($select[0], name);

		if(badOptions.length > 0){
			var title = 'Contact the commish to be removed from the blacklist';
			var newHtml = "<strong title='" + title + "'>BLACKLISTED</strong>";
			$("select[name='playerid']").replaceWith(newHtml);
			$("select[name='waitplayerid']").replaceWith(newHtml);
			$("input[name='addplayertoskatetime']").attr('disabled', true);
			$("input[name='addplayertoskatetime']").attr('title', title);
			$("input[name='addplayertowaitlist']").attr('disabled', true);
			$("input[name='addplayertowaitlist']").attr('title', title);
		}
	});

	// add FNHC banner
	var a = document.createElement('a');
	var img = document.createElement('img');
	a.title = 'Friday Night Hockey Club';
	a.href ='/Keyla/';
	img.style.maxHeight = '200px';
	img.style.float = 'left';
	img.src = 'http://i.imgur.com/aID2iBI.jpg';
	a.appendChild(img);
	$('.span12.banner')[0].children[0].appendChild(a);
});