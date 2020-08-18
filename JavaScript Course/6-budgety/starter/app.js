/*
 * ******************************************************** *
 * Created Date: Thursday, 30th July 2020 1:01:58 pm        *
 * Author: Marcello Alfaro                                  *
 * Email: marcello.alfaro1@gmail.com                        *
 *                --------------------------                *
 * Last Modified: Tuesday, 18th August 2020 5:34:59 pm      * 
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

// BUDGET CONTROLLER
var budgetController = (function () {
  var Expense = function (id, descripcion, value) {
    this.id = id;
    this.descripcion = descripcion;
    this.value = value;
  };

  var Income = function (id, descripcion, value) {
    this.id = id;
    this.descripcion = descripcion;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
  };

  return {
    addItem: function (type, des, val) {
      var newItem, ID;
      ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      data.allItems[type].push(newItem);

      return newItem;
    },
  };
})();

// UI CONTROLLER
var UIController = (function () {
  var DOMStrings = {
    inputType: '.add__type',
    inputDescripcion: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMStrings.inputType).value,
        descripcion: document.querySelector(DOMStrings.inputDescripcion).value,
        value: document.querySelector(DOMStrings.inputValue).value,
      };
    },
    getDOMStrings: function () {
      return DOMStrings;
    },
  };
})();

// APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMStrings();
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (evt) {
      if (evt.keyCode === 13 || evt.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function () {
    // 1. Get the field input data
    var input = UICtrl.getInput();
    console.log(input);
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the Budget
    //5. Display the budget
  };

  return {
    init: function () {
      console.log('Aplication has started');
      setupEventListeners();
    },
  };
})(budgetController, UIController);

// we create a init() function cuz we want to have a place where we can put
// all the code that we want to be executed right at the beginning when our
// aplication starts
controller.init();
