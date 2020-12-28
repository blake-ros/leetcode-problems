const queryTheDom = document.getElementById('user-list');

function runThisFunction() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function() {
    console.log(xhr.status);
    console.log(xhr.response);
    var array = xhr.response
    for(let i = 0; i < array.length; i++) {
      var objectElement = document.createElement('li');
      objectElement.textContent = array[i].name
      queryTheDom.append(objectElement);
    }
  });
  xhr.send();
}

runThisFunction();

// What is AJAX and what does the acronym stand for?
// AJAX is asynchronous javascript and xml, it is how we get data from API's

//Which object is built into the browser for making HTTP requests in JavaScript?
// before the fetch API existed, all javascript requests were done with an XML http request object

//What event is fired by XMLHttpRequest objects when they are finished loading the data from the server?
// The load event is fired when the xml objects are finished loading the data from the server

// An XMLHttpRequest object has an addEventListener() method just like DOM elements. How is it possible that they
// both share this functionality?
// an xml http request object inherits properties of xmlhttprequesteventtarget and of eventtarget
