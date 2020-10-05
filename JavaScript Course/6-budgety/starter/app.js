/*
 * ******************************************************** *
 * Created Date: Thursday, 30th July 2020 1:01:58 pm        *
 * Author: Marcello Alfaro                                  *
 * Email: marcello.alfaro1@gmail.com                        *
 *                --------------------------                *
 * Last Modified: Monday, 5th October 2020 3:34:32 pm       * 
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
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function (totalIncome) {
    this.percentage = totalIncome > 0 ? Math.round((this.value / totalIncome) * 100) : -1;
  };

  Expense.prototype.getPercentage = function () {
    return this.percentage;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function (type) {
    var sum = 0;
    data.allItems[type].forEach(function (curr) {
      sum += curr.value;
    });
    data.total[type] = sum;
    return sum;
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
    budget: 0,
    percentage: -1,
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
    calculateBudget: function () {
      // Calculate total income and expenses
      calculateTotal('exp');
      calculateTotal('inc');
      // Calculate the budget income - expenses
      data.budget = data.total.inc - data.total.exp;
      // calculate the percentage of income that we spent
      data.percentage =
        data.total.inc > 0 ? Math.round((data.total.exp / data.total.inc) * 100) : -1;
    },
    getBudget: function () {
      return {
        budget: data.budget,
        totalInc: data.total.inc,
        totalExp: data.total.exp,
        percentage: data.percentage,
      };
    },
    testing: function () {
      console.log(data);
    },
    deleteItem: function (id, type) {
      var ids, index;
      ids = data.allItems[type].map(function (curr) {
        return curr.id;
      });

      index = ids.indexOf(id);
      index !== -1 ? data.allItems[type].splice(index, 1) : -1;
    },
    calculatePercentages: function () {
      data.allItems.exp.forEach(function (curr) {
        curr.calcPercentage(data.total.inc);
      });
    },
    getPercentages: function () {
      var allPerc = data.allItems.exp.map(function (curr) {
        return curr.getPercentage();
      });

      return allPerc;
    },
  };
})();

/* UI CONTROLLER */
var UIController = (function () {
  var DOM = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expenseContainer: '.expense__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expenseLabel: '.budget__expense--value',
    percentageLabel: '.budget__expense--percentage',
    container: '.container',
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOM.inputType).value,
        description: document.querySelector(DOM.inputDescription).value,
        value: Number(document.querySelector(DOM.inputValue).value),
      };
    },
    addlistItem: function (obj, type) {
      var HTML, newHTML, element;
      // Create HTML string with placeholder text
      if (type === 'inc') {
        element = DOM.incomeContainer;
        HTML =
          '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === 'exp') {
        element = DOM.expenseContainer;
        HTML =
          '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
      // Replace the placeholder text with some actual data
      newHTML = HTML.replace('%id%', obj.id);
      newHTML = newHTML.replace('%description%', obj.description);
      newHTML = newHTML.replace('%value%', obj.value);
      // Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('afterbegin', newHTML);
    },
    getDOM: function () {
      return DOM;
    },
    clearFields: function () {
      var fields, fieldsArr;
      fields = document.querySelectorAll(DOM.inputDescription + ', ' + DOM.inputValue);
      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function (current, index, array) {
        current.value = ' ';
      });
      fieldsArr[0].focus();
    },
    displayBudget: function (obj) {
      document.querySelector(DOM.budgetLabel).textContent = obj.budget;
      document.querySelector(DOM.incomeLabel).textContent = obj.totalInc;
      document.querySelector(DOM.expenseLabel).textContent = obj.totalExp;
      document.querySelector(DOM.percentageLabel).textContent =
        obj.percentage > 0 ? obj.percentage + '%' : '---';
    },
    deleteListItem: function (id) {
      var el = document.getElementById(id);
      el.parentNode.removeChild(el);
    },
  };
})();

/* GLOBAL APP CONTROLLER */
/* Here we tell other controllers what to do */
var AppController = (function (UICtrl, BudgetCtrl) {
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOM();
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (evt) {
      if (evt.keyCode === 13 || evt.which === 13) {
        ctrlAddItem();
      }
    });

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
  };

  var updateBudget = function () {
    var budget;
    // 1. Calculate the budget
    BudgetCtrl.calculateBudget();
    // 2. Return the budget
    budget = BudgetCtrl.getBudget();
    // 3. Display the budget on the UI
    UICtrl.displayBudget(budget);
  };

  var updatePercentages = function () {
    // 1. Calculate percentages
    BudgetCtrl.calculatePercentages();
    // 2. Read percentags from the budget controller
    var percentages = BudgetCtrl.getPercentages();
    //3. Update the UI with the new percentanges
    console.log(percentages);
  };

  var ctrlAddItem = function () {
    var input, newItem;
    // 1. Get the field input data
    input = UICtrl.getInput();
    if (input.description === ' ' || input.value <= 0) return;
    // 2. Add the item to the budget controller
    newItem = BudgetCtrl.addItem(input.type, input.description, input.value);
    // 3. Add the item to the UI
    UICtrl.addlistItem(newItem, input.type);
    // 4. Clear Fields
    UICtrl.clearFields();
    // 5. Calculate and update budget
    updateBudget();
    // 6. Calculate and update percentages
    updatePercentages();
  };

  var ctrlDeleteItem = function (evt) {
    var itemID, splitID, type, id;
    itemID = evt.target.parentNode.parentNode.parentNode.parentNode.id;
    if (itemID) {
      splitID = itemID.split('-');
      type = splitID[0];
      id = Number(splitID[1]);

      // 1. Delete the item from the data structure
      BudgetCtrl.deleteItem(id, type);
      // 2. Delete the item from the UI
      UICtrl.deleteListItem(itemID);
      // 3. Update and show the new budget
      updateBudget();
      // 4. Calculate and update percentages
      updatePercentages();
    }
  };

  return {
    init: function () {
      setupEventListeners();
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1,
      });
      console.log('Application has started');
    },
  };
})(UIController, budgetController);

AppController.init();

// next -> 92
