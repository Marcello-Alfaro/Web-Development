/*
 * ******************************************************** *
 * Created Date: Thursday, 30th July 2020 1:01:58 pm        *
 * Author: Marcello Alfaro                                  *
 * Email: marcello.alfaro1@gmail.com                        *
 *                --------------------------                *
 * Last Modified: Saturday, 26th September 2020 5:45:37 pm  * 
 * Modified By: Marcello Alfaro                             * 
 *                --------------------------                *
 *                    Copyright (c) 2020                    *
 * ******************************************************** *
 */

/* TO-DO LIST */
/*
 * Add event handler
 * Get input values
 * Add the new item to our data structure
 * Add the new item to the UI
 * Calculate the budget
 * Update the UI
 */

/* Structuring our code with modules */
/* Modules
 * Module are an important aspect of any robust application's architecture
 * Keep the units of code for a project both cleanly separated and organized
 * Encapsulate some data into privacy and expose other data publicly
 
 So basically modules allows us to break out our code into logical parts which are the modules
 and then make them interact with one another

 Now lets think about the tasks we have in our to-do list, we can see that some tasks
 have more to do with the UI and others with doing internal data manipulation.

 So we're going to create a module for each of this, so we have cleanly separated
 and organized units of coding our app

 So we start with:
 * UI MODULE : {
     * Get input values
     * Add the new item to the UI
     * Update the UI
 }
 * DATA MODULE : {
    * Add the new item to our data structure
    * Calculate budget
 }
 * CONTROLLER MODULE or APP CONTROLLER: {
     * Add eventt handler
 }
 */

/* We create modules cuz to keep pieces of code that are related one to another
    together, inside of separated, independent, and organized units
    
    Each of these modules will have variables and function that are private, which
    means that they are only accessible inside of the module.
    
    We want this so that no other code can override our data

* Data encapsulation : Allows us to hide the implementation details of a specific module
 from the outside scope, so that we only expose a public interface which is sometimes called
 an API

 We create modules in JavaScript by using the module pattern, all we need is the concepts
 of closures and IIFEs.
 
 the secret of the module pattern is that it returns an object containing all of the functions
 that we want to be public

 Separation of concerns: Means that each part of the application should only be interested in doing
 one thing independently

 These controllers dont know about each other

 It always better to have one data-structure where all of our data goes instead of having
 a lot of random variables flowing around
*/

/* Budget controller variable is simply an object containing all the methods defined in there */

var budgetController = (function () {
  var x = 23;

  var add = function (a) {
    return x + a;
  };

  return {
    publicTest: function (b) {
      return add(b);
    },
  };
})();

var UIController = (function () {
  // some code
})();

var AppController = (function (UICtrl, BudgetCtrl) {
  var c = BudgetCtrl.publicTest(5);

  return {
    anotherPublic: function () {
      console.log(c);
    },
  };
})(UIController, budgetController);

AppController.anotherPublic();
