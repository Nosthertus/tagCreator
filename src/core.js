/**
 * Injects the plugin into jQuery core and compiles the value
 * 
 * @param  {String|Object} tag The value to compile into tag element
 * @return {String}            The compiled tag element
 */
a.tagCreator = function(tag){
	return create(tag);
};

/*
*	Inject the plugin into selected element
*/
a.fn.tagCreator = function(tag, callback){
	var element = $(create(tag));

	$(this).append(element);

	if(callback){
		callback(element);
	}
};