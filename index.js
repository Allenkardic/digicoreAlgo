// Ques 1
// this function adds two strings and return the output as a string
function addString(num1, num2) {
  // num1 and num2 are strings
  //   Number method can also be used to sum strings
  const sum = num1 * 1 + num2 * 1;
  return sum.toString();
}

// Ques 2
// this function compares two array with equal length and increase the value of the result by one base on the highest score of each index
function highestTennisScore(arr1, arr2) {
  // the result start from zero
  let results = [0, 0];

  //   looping through the array
  for (let i = 0; i < arr1.length; i++) {
    //   assign player one score (TOM) to index of the array
    let player1Score = arr1[i];
    //   assign player two score (JACK) to index of the array
    let player2Score = arr2[i];
    if (player1Score > player2Score) {
      // add plus one to the first index of the result if TOM Score higher than JACK score
      results[0] = results[0] + 1;
    } else if (player2Score > player1Score) {
      // add plus one to the second index of the result if JACK Score higher than TOM score
      results[1] = results[1] + 1;
    }
  }
  return results;
}
