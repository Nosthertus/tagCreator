# tagCreator

This plugin creates by parsing objects, no more adding tags manually by append function in jquery.

#Usage
tagCreator returns a string by accessing directly to the function

    $.tagCreator(object);

example:

```Javascript
$.tagCreator({
    div: {
        id: 'firstTag',
        class: 'normal'
    }
});
```

returns 

```HTML
<div id="firstTag" class="normal"></div>
```

to insert tag inside an element with jQuery

```Javascript
$(element).tagCreator(object);
```

example:

```Javascript
$('#testingTag').tagCreator({
    div: {
        id: 'firstTag',
        class: 'normal'
    }
});
```

this creates the tag with its attributes inside `#testingTag` element.

**Note:** The plugin can create multiple tags, just define more tag properties. Also, the plugin has a callback when accesing from jquery element `$(document).tagCreator(object, callback);`

#Options

tagCreator also has option properties


**Content**
can be added as a property in the tag.
example:

```Javascript
$('#testingTag').tagCreator({
    div: {
        id: 'firstTag',
        class: 'normal',
        content: 'This is the content'
    }
});
```

this will add the content text inside the tag

**Style**
can also be added as property object
example:

```Javascript
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
```

this will parse the style object and insert to style property of the tag

**Data**
This property can be used to add multiple data attrs into the compiled element

```Javascript
$("#testingTag").tagCreator({
	div: {
    	id: 'firstTag',
        class: 'normal',
        data: {
        	target: '#modal-1'
        }
    }
});
```