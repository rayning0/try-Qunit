// test method initializes and runs automatically. 
// It first argument is simmiliar to rspec describe
// block it allows you to describe the feature you are testing.
test( "describe the feature we are testing", function() {

  // arrange
  var color = 'red';
  var $p = $('p').first();

  // assert using ok
  // ok's first argument accepts a value and 
  // returns its truthy falsey nature
  // true is a passing test, false is a fail.
  // The second argument is an optional message.
  ok(color, "color exists");

  // assert using equal (==)
  // equal's first argument is actual value to compare 
  // with the second argument which is the expected value.
  // The third argument is an optional message.
  equal(color, 'red', 'color should be red'); // ==
 
  // setup a click event listener on the paragraph
  $p.on("click", function() {
    var greeting = $p.text();
    // assert using deepEqual (===)
    // similar to equal asset except that deepEqual checks datatype also.
    deepEqual( greeting, "Hello", 'greeting should be Hello ' );
  });
  $p.trigger("click"); // act upon elements (capistrano like) 
  // to trigger the click event.
});

