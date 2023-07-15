echo "# guesswords.github.io" 
Objective:
The objective of the 'meaning' function is to search for a user input word in the 'word' object and display its meaning on the webpage. If the input word is not found in the object, the function increases a count variable and displays a message indicating that the word was not found. If the count variable exceeds a certain value, the function ends the game and displays a message indicating that the user has lost.

Inputs:
- The 'search' variable, which is a reference to an HTML input element where the user enters a word to search for.
- The 'submitButton' variable, which is a reference to an HTML button element that the user clicks to submit their search.
- The 'showValue' variable, which is a reference to an HTML element where the meaning of the searched word is displayed.
- The 'heading' variable, which is a reference to an HTML element where the game status is displayed.
- The 'word' object, which contains a list of words and their meanings.

Flow:
1. The function starts by getting the value of the 'search' input element and converting it to lowercase.
2. The function checks if the lowercase input value exists as a key in the 'word' object.
3. If the input value exists in the 'word' object, the function displays the meaning of the word in the 'showValue' element and changes the background color of the 'submitButton' element.
4. If the input value does not exist in the 'word' object, the function increases the 'count' variable and displays a message indicating that the word was not found.
5. If the 'count' variable exceeds 5, the function ends the game by removing the event listener from the 'submitButton' element, hiding the 'submitButton' and 'search' elements, and displaying a message in the 'heading' element indicating that the user has lost.

Outputs:
- The meaning of the searched word is displayed in the 'showValue' element if the word exists in the 'word' object.
- A message indicating that the word was not found is displayed in the 'showValue' element if the word does not exist in the 'word' object.
- If the 'count' variable exceeds 5, the game ends and a message indicating that the user has lost is displayed in the 'heading' element.

Additional aspects:
- The 'count' variable is a global variable that is used to keep track of the number of times the user has entered a word that does not exist in the 'word' object.
- The 'submitButton' element's background color is changed to indicate whether the searched word was found or not.
- The 'submitButton' element's event listener is removed if the user enters too many incorrect words, effectively ending the game.