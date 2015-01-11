(function(a)
{
	/*
	*	Create function for jQuery
	*/
	a.fn.tagCreator = function(obj)
	{
		var tagObj = '';

		if(typeof obj === 'object')
		{
			for(tag in obj)
				tagObj += createTag(tag, obj[tag]);
		}

		if(typeof obj === 'string')
			tagObj = createTag(obj);

		$(this).append(tagObj);
	};

	/*
	*	Create tag element
	*/
	function createTag(obj, attr)
	{
		var tag = '';
		var single = isSingle(obj);
		var content = '';

		if(attr)
		{
			tag += '<' + obj;

			for(e in attr)
			{
				if(e != 'content')
					tag += ' ' + e + '="' + attr[e] + '"';

				else
					content += attr[e];
			}

			tag += '>';
			tag += content;

			if(!single)
				tag += '</' + obj + '>';
		}

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