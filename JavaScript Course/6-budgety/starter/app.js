/*
 * ******************************************************** *
 * Created Date: Thursday, 30th July 2020 1:01:58 pm        *
 * Author: Marcello Alfaro                                  *
 * Email: marcello.alfaro1@gmail.com                        *
 *                --------------------------                *
 * Last Modified: Friday, 2nd October 2020 2:24:54 pm       * 
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

/* BUDGET CONTROLLER */
var budgetController = (function () {
  // Functions constructors
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    total: {
      exp: 0,
      inc: 0,
    },
  };

  return {
    addItem: function (type, description, value) {
      var newItem, id;

      // Create new ID
      id =
        data.allItems[type].length !== 0
          ? data.allItems[type][data.allItems[type].length - 1].id + 1
          : 1;

      // Create new item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(id, description, value);
      } else if (type === 'inc') {
        newItem = new Income(id, description, value);
      }

      // Push it into our data structure
      data.allItems[type].push(newItem);

      return newItem;
    },
    testing: function () {
      console.log(data);
    },
  };
})();

/* UI CONTROLLER */
var UIController = (function () {
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

/* GLOBAL APP CONTROLLER */
/* Here we tell other controllers what to do */
var AppController = (function (UICtrl, BudgetCtrl) {
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (evt) {
      if (evt.keyCode === 13 || evt.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function () {
    var input, newItem;
    // 1. Get teh field input data
    input = UICtrl.getInput();
    // 2. Add the item to the budget controller
    newItem = BudgetCtrl.addItem(input.type, input.description, input.value);
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  };

  return {
    init: function () {
      setupEventListeners();
      console.log('Application has started');
    },
  };
})(UIController, budgetController);

AppController.init();
