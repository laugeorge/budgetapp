//************************* Budget Controller ********************/
var budgetController = (function() {
    
    // code

}) ();

//************************* UI Controller ********************/
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'

    };

    return {
        getInput: function() {

            return {

                type: document.querySelector(DOMstrings.inputType).value, // will be inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value

            };
        },
        
        //pass the DOMstrings to public so we can call in Global App Controller
        getDOMstrings: function() {
            return DOMstrings;
        }

    };

}) ();


//************************* Global App Controller ********************/
// call back function below for calling budgetController and UIController
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {
        // 1. grabbing input data
        var input = UICtrl.getInput();
        console.log(input);

        // 2. add the item to the budget controller
        // 3. add the item to the UI
        // 4. calculate the budget
        // 5. display the budget on the UI
        

    }


    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) {

            ctrlAddItem ();
        }


    });

}) (budgetController, UIController);

