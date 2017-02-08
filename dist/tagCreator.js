(function(a) {
	/**
	 * Injects the plugin into jQuery core and compiles the value
	 * 
	 * @param  {String|Object} tag The value to compile into tag element
	 * @return {String}            The compiled tag element
	 */
	a.tagCreator = function(tag) {
		return create(tag);
	};

	/*
	 *	Inject the plugin into selected element
	 */
	a.fn.tagCreator = function(tag, callback) {
		var element = $(create(tag));

		$(this).append(element);

		if (callback) {
			callback(element);
		}
	};

	/**
	 * Creates a tag from either object or string
	 * 
	 * @param  {Object|String} obj The element to create from the value
	 * @return {String}            The string element compiled
	 */
	function create(obj) {
		var tagObj = '';

		if (typeof obj === 'object') {
			for (tag in obj) {
				tagObj += createTag(tag, obj[tag]);
			}
		}

		if (typeof obj === 'string') {
			tagObj = createTag(obj);
		}

		return tagObj;
	};

	/**
	 * Creates an element string from an object
	 * 
	 * @param  {String} element  The element name for creating the tag
	 * @param  {Object} attr     The structure of the element
	 * @return {String}          The created tag element
	 */
	function createTag(element, attr) {
		var tag = '';
		var single = isSingle(element);
		var content = '';

		if (attr) {
			tag += '<' + element;

			for (e in attr) {
				// Add attr if no content prop is present
				if (e != 'content') {
					// Create style attributes from object style
					if (e == 'style') {
						tag += ' ' + e + '="' + parseStyle(attr[e]) + '"';
					}

					// Create data attributes from object data
					else if (e == "data" && typeof attr[e] == "object") {
						var dataString = parseData(attr[e]);
						tag += dataString;
					}

					// Create any other attr
					else {
						tag += ' ' + e + '="' + attr[e] + '"';
					}
				}

				// Add the content of the element
				else {
					content += attr[e];
				}
			}

			tag += '>';
			tag += content;

			if (!single) {
				tag += '</' + element + '>';
			}
		} else {
			if (single) {
				tag += '<' + element + '>';
			} else {
				tag += '<' + element + '>';
				tag += '</' + element + '>';
			}
		}

		return tag;
	}

	/**
	 * Checks if the provided tag value is single tag
	 * 
	 * @param  {String}  tag The name of the tag to check
	 * @return {Boolean}     Whether the provided tag is single
	 */
	function isSingle(tag) {
		var single = ['input', 'base', 'br', 'hr', 'img', 'keygen', 'link', 'menuitem', 'meta', 'source', 'track'];

		if (single.indexOf(tag) != -1) {
			return true;
		}

		return false;
	}

	/**
	 * Parses the style object into style attr values
	 * 
	 * @param  {Object} obj The object of style structure
	 * @return {String}     The compiled style string attr
	 */
	function parseStyle(obj) {
		var style = '';

		for (rule in obj) {
			style += rule + ':' + obj[rule] + ';';
		}

		return style;
	}

	/**
	 * Parses data object into data attr string
	 * 
	 * @param  {Object} obj The data structure to parse
	 * @return {String}     The parsed data object structure into string
	 */
	function parseData(obj) {
		var str = [];

		for (p in obj) {
			str.push("data-" + p + "=\"" + obj[p] + "\"");
		}

		return str.join(" ");
	}
})(window.jQuery);