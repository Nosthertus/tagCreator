(function(a)
{
	/*
	*	Create function for jQuery
	*/
	a.fn.tagCreator = function(obj)
	{
		var tagObj;

		if(typeof obj === 'object')
		{
			for(tag in obj)
				tagObj = createTag(tag, obj[tag]);
		}

		if(typeof obj === 'string')
			tagObj = createTag(obj);

		return tagObj;
	};

	/*
	*	Create tag element
	*/
	function createTag(obj, attr)
	{
		var tag = '';
		var single = isSingle(obj);

		else
		{
			if(single)
				tag += '<' + obj + '>';

			else
			{
				tag += '<' + obj + '>';
				tag += '</' + obj + '>';
			}
		}

		return tag;
	}

	/*
	*	Check if the provided tag is single tag
	*/
	function isSingle(tag)
	{
		var single = ['input'];

		if(single.indexOf(tag) != -1)
			return true;

		return false;
	}
})(window.jQuery);