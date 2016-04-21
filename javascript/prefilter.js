//Copied from http://stackoverflow.com/a/28323156 to deal with browser warnings
$.ajaxPrefilter(function(options) {
	options.async = true;
});