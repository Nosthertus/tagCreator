# tagCreator

This plugin creates by parsing objects, no more adding tags manually by append function in jquery.

#Usage
tagCreator returns a string by accessing directly to the function

    $.tagCreator(object);

example:

    $.tagCreator({
    	div: {
    		id: 'firstTag',
    		class: 'normal'
    	}
    });

returns 

    <div id="firstTag" class="normal"></div>


to insert tag inside an element with jQuery

    $(element).tagCreator(object);


example:

    $('#testingTag').tagCreator({
    	div: {
    		id: 'firstTag',
    		class: 'normal'
    	}
    });

this creates the tag with its attributes inside `#testingTag` element

#Options

tagCreator also has option properties


**Content**
can be added as a property in the tag.
example:

    $('#testingTag').tagCreator({
    	div: {
    		id: 'firstTag',
    		class: 'normal',
    		content: 'This is the content'
    	}
    });
this will add the content text inside the tag

**Style**
can also be added as property object
example:

    $('#testingTag').tagCreator({
    	div: {
    		id: 'firstTag',
    		class: 'normal',
    		style: {
    			width: '80px',
    			height: '80px',
    			'background-color': 'black'
    		}
    	}
    });
this will parse the style object and insert to style property of the tag
