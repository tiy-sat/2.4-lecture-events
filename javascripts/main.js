// WAIT FOR THE DOM TO LOAD
document.addEventListener("DOMContentLoaded", function(){
  // This is where all of our code wil run

  // Query Selector All gives us an *array* as the
  //   return data. Very important.
  var linksArray = document.querySelectorAll(".link");

  linksArray.forEach(function(currentLink){
    // Listening for an "onclick" event to happen
    //   And naming my argument "e" for "Event"
    //     This object will hold all of the relevant
    //       Event data to use
    currentLink.addEventListener("click", function(e){
      // only happens for the button thats clicked
      //  WHEN it is clicked
      var clickedLink = e.target;
      clickedLink.className = "link link--clicked";
      // console.log(clickedLink.className === "link");
      // @TODO: Create a function that loops through
      //   all links to replace classes
      //
      // if(clickedLink.className === "link"){
      //   // the link is just a regular link
      //   clickedLink.className = "link link--clicked";
      // }else {
      //   // the link is link and clicked
      //   clickedLink.className = "link";
      // }
    });  // closes event listener anon function
  }); // Ends for loop around links

  // The sentence code!!!
  // function
  var wordElements = document.querySelectorAll(".word");
  var paragraphElement = document.querySelector(".sentence");

  wordElements.forEach(function(wordElement){
    // wordElement argument represents each
    //   iterative word from the array
    // two arguments: the type of event, what happens(callback)
    wordElement.addEventListener("click", function(e){
      // "e" is the "event" information...
      //   We can get the currently clicked ELEMENT
      //   through `e.target` or `wordElement`
      //   see lines ~37-40
      var word = e.target.textContent;
      // update the text in paragraph with the word
      // that was clicked
      paragraphElement.textContent += word + " ";
    });
  });

  var signInFormElement = document.querySelector(".signIn__form");
  // Selecting all input elements NOT with type of submit
  var inputElements = document.querySelectorAll("input:not([type='submit'])");
  var inputSubmitElement = document.querySelector("input[type='submit']");

  // inputSubmitElement.addEventListener("click", function(e){
  //   // Return the value of... (think of objects)
  //   // e.preventDefault;
  //   // Presses start on the function
  //   console.log(e.target.value);
  //   console.log("prevented");
  //   e.preventDefault();
  // });
  signInFormElement.addEventListener("submit", function(e){
    console.log(e);
    e.preventDefault();
  });
  inputElements.forEach(function(inputElement){
    inputElement.addEventListener("input", function(e){
      e.preventDefault();
      if(e.target.value.length >= 8){
        // update the border to be green
        e.target.className = "email__input--valid";
      }
    });
  });
});
