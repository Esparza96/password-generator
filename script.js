const characterAmountRange = document.getElementsByClassName('characterAmountRange')[0];
const characterAmountNumber = document.getElementsByClassName('characterAmountNumber')[0];

const passDisplay = document.getElementsByClassName("passDisplay")[0];
const includeUppercaseElement = document.getElementsByClassName("includeUppercase")[0];
const includeNumbersElement = document.getElementsByClassName("includeNumbers")[0];
const includeSymbolsElement = document.getElementsByClassName("includeSymbols")[0];
const form = document.getElementsByClassName("passwordGeneratorForm")[0];
const lowercaseCharCodes = arrayFromLowToHigh(97, 122);
const uppercaseCharCodes = arrayFromLowToHigh(65, 90);
const numberCharCodes = arrayFromLowToHigh(48, 57);
const symbolCharCodes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const password = generatePassword(
        characterAmount,
        includeUppercase,
        includeNumbers,
        includeSymbols
    );
    passDisplay.value = password;
});

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    var charCodes = lowercaseCharCodes;
    if (includeUppercase)charCodes = charCodes.concat(uppercaseCharCodes);

    if (includeNumbers) charCodes = charCodes.concat(numberCharCodes);

    if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes);

    var passwordCharacters = [];
    for (var i = 0; i < characterAmount; i++) {
        var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join("");

}

function arrayFromLowToHigh(low, high) {
    const array = [];
    for (var i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}

characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);

function syncCharacterAmount(e) {
    const value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}
function copypass(){
    document.querySelector(".pass-display").select();

    document.execCommand("copy");

    alert("!!copied to clipboard!!");
}
    
