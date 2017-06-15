$(document).ready(function() {

    //Variables
    var firstNumber = "";
    var secondNumber = "";
    var operator = "";
    var result = 0;
    var hasNumber = false;
    var firstNumberComplete = false;
    var lockButtons = false;

    //Check if any button is clicked...
    $(document).on("click", "button", function() {

        // Checks if it's a number and that it's not the end of the calculation ("!lockButtons")
        if ($(this).hasClass("number") && !lockButtons) {

            //We will then set out "hasNumber" variable to true to indicate that we can proceed in selecting an operator.
            hasNumber = true;

            //if we haven't received an operator yet....
            if (firstNumberComplete === false) {
                // Then grab the number of the value clicked and build a string with it
                firstNumber += $(this).attr("value");
                // Print it to the div
                $("#first-number").html(firstNumber);

                // if we've already received an operator
            } else {
                // grab the number of the value clicked and build a string with it
                secondNumber += $(this).attr("value");

                // print the number to the firstPage
                console.log(secondNumber);

                //print it to the div
                $("#second-number").html(secondNumber);
            }
        }

        // checks if it's an operator (but not "=")

        if ($(this).hasClass("operator") && hasNumber && !lockButtons) {
            firstNumberComplete = true;

            // set the visual to show the operator's symbol
            $("#operator").html("<h1>" + $(this).text() + "</h1>");
            operator = $(this).attr("value");
        }

        // Checks if the equal button has been pressed. If so...
        if ($(this).hasClass("equal")) {

            // lock the keyboard from being clicked
            lockButtons = true;

            // Convert the numbers into integers
            firstNumber = parseInt(firstNumber);
            secondNumber = parseInt(secondNumber);

            // Then figure out which operator was clicked and perform the necessary functions
            // Then show the result in the HTML
            if (operator === "plus") {
                result = firstNumber + secondNumber;
            }

            if (operator === "minus") {
                result = firstNumber - secondNumber;
            }

            if (operator === "times") {
                result = firstNumber * secondNumber;
            }

            if (operator === "divide") {
                result = firstNumber / secondNumber;
            }

            if (operator === "power") {
                result = Math.pow(firstNumber, secondNumber);
            }

            $("#result").html(result);
        }

        // If clear is selected then wipe away all of the content from the screen and unlock the buttons.
        if ($(this).hasClass("clear")) {

            firstNumber = "";
            secondNumber = "";
            operator = "";
            result = 0;
            hasNumber = false;
            firstNumberComplete = false;
            lockButtons = false;

            $("#first-number, #second-number, #operator, #result").empty();
        }
    }); // Closes my onclick code
}); // Closes the ready code