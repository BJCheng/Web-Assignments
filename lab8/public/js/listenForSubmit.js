var form = document.getElementById('submitForm');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let errorDiv = document.getElementById("errorDiv");
    errorDiv.innerHTML = null;
    errorDiv.className = 'invisible';

    var textarea = document.getElementById('input');

    try {
        var input = textarea.value;
        if(!input)
            throw("Please enter something to validate")
        var resultDiv = document.getElementById("resultDiv");
        resultDiv.className = '';
        var liNode = document.createElement('li');
        var textNode = document.createTextNode(input);
        liNode.appendChild(textNode);
        if (checkIsPalindrome(input))
            liNode.className = 'is-palindrome';
        else
            liNode.className = 'not-palindrome';

        var checkedItems = document.getElementById('checkedItems');
        checkedItems.appendChild(liNode);

        textarea.value = null;
        textarea.focus();
    } catch (e) {
        let errorP = document.createElement("P");

        errorDiv.className = '';
        let errorNode = document.createTextNode(e);
        errorP.appendChild(errorNode);
        document.getElementById("errorDiv").appendChild(errorP);
    }
});

function checkIsPalindrome(input) {
    let spaceRegex = /[\s\n\t]+/g;
    let puntuationRegex = /\W/g;
    input = input.toLowerCase();
    input = input.replace(spaceRegex, '');
    input = input.replace(puntuationRegex, '');
    let middle = input.length / 2;
    let i = Math.floor(middle) - 1;
    while (i >= 0) {
        if (input[i] === input[input.length - 1 - i])
            i--;
        else
            return false;
    }
    return true;
}