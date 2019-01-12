// s̶t̶o̶l̶e̶n̶ forked from https://github.com/Candunc/xkcd-substitutions

// Replacement function from: http://stackoverflow.com/a/17606289/1687505
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

var replacement_array = {
	"acially-charged":"acist",
	"acially-Charged":"acist",
	"acially charged":"acist",
	"acially Charged":"acist",
	"acially tinged":"acist",
	"acially Tinged":"acist",
	"acially-tinged":"acist" ,
	"acially-Tinged":"acist"
	// this regex should work but i'm too lazy to actually implement it: /^racially[(\-)( )]?(charged|tinged)$/i
};


//Below function modified from: http://stackoverflow.com/a/7275856/1687505
var allTextNodes = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),tmpnode,tmptext;

while (allTextNodes.nextNode()) {
	tmpnode = allTextNodes.currentNode;
	tmptext = tmpnode.nodeValue
	for (var key in replacement_array) {
		tmptext = tmptext.replaceAll(key,replacement_array[key]);
	}
	tmpnode.nodeValue = tmptext;
}
