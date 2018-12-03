


/* 1. Reversing a String using Built-in functions in JavaScript */

function FirstReverse(str) { 

  
  
  return str.split("") .reverse("") .join("");
    
}
   
// keep this function call here 
FirstReverse(('Hello world'));      
 */



/* 2. Replacing String with letter following it in the alphabet and converting vowels to Upper Case in JavaScript */
function LetterChanges(str) { 

  // we will replace every letter in the string with the letter following it
  // by first getting the charCode number of the letter, adding 1 to it, then 
  // converting this new charCode number to a letter using the fromCharCode function
  // we also check to see if the character is z and if so we simply convert the z to an a
  var converted = str.replace(/[a-z]/gi, function(char) { 
    return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
  });

  // we have now successfully converted each letter to the letter following it
  // in the alphabet, and all we need to do now is capitalize the vowels
  var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel) { 
    return vowel.toUpperCase();
  });

  // return the final string
  return capitalized;
         
}
   
LetterChanges("Hello World!");   







/* 3. Capitalizing a string using a function and for loop in JavaScript */

var str = "i ran there";

function LetterCapitalize(str) {
	var words = str.split(" ");
	
	for (var i = 0; i < words.length; i++) {
		words[i] = words[i] .substr(0, 1) .toUpperCase() + words[i] .substr(1);
		
	}
	return words.join(" ");
}

LetterCapitalize(str);




/* 4. Simple Symbols Challenge to return true/false statement on 
if alphabetic character has "+" symbol before or after character. In JavaScript */

function SimpleSymbols(str) { 

  // pad the strings so that if a character exists at the beginning
  // of the string for example, we don't get on out-of-bounds error by
  // trying to get the character before it
	
  var str = '=' + str + '=';

  // loop through entire string
  for (var i = 0; i < str.length; i++) {
    
    // check to see if current character is an alphabetic character  
    // by using a simple case-insensitive regex pattern 
    if (str[i].match(/[a-z]/i) !== null) {

      // check to see if a + symbol is to the left and right
      // if not, then we know this string is not valid
      if (str[i-1] !== '+' || str[i+1] !== '+') { 
        return false;
      }

    }
 
  }

  return true;
  
}
   
SimpleSymbols("+d+=3=+s+");    




/*5. First Factorial Challenge in JavaScript */

var num = 8;

function firstFactorial(num) {
	return num * 7 * 6 * 5 * 4 * 3 * 2 * 1;
}

or 

function FirstFactorial(num) { 

  var factorial = 1;

  for (var i = 1; i <= num; i++) {  
    // multiply each number between 1 and num  
    // factorial = 1 * 1 = 1
    // factorial = 1 * 2 = 2
    // factorial = 2 * 3 = 6
    // factorial = 6 * 4 = 24
    // ...
    factorial = factorial * i;
  }

  return factorial;
         
}
   
FirstFactorial(4);  

firstFactorial(num);  


/*6. Simple Adding Numbers in JavaScript */

var num = 8;
function simpleAdding(num) {
	for (var i = 1; i <= num; i++) {
		num = num + i;
	}
	return num
}

simpleAdding(8);  */


/*Checking Numbers and returning True/False Strings

function checkNums(num1, num2) {
	
	return (num2 === num1) ? "-1" : (num2 > num1) ? true : false;
}
 checkNums(8, 8);		





/*7. Time Convert in JavaScript */

function timeConvert(num) {
var num = 8;
var hours = Math.floor(num/60);
var minutes = num % 60;
	return hours + ":" + minutes;
}
 
timeConvert(8);   


/* 8. Determine the longest word in string in JavaScript */

var sen = "This is the longest word";

function LongestWord(sen) { 

  // we use the regex match function which searches the string for the
  // pattern and returns an array of strings it finds
  // in our case the pattern we define below returns words with
  // only the characters a through z and 0 through 9, stripping away punctuation
  // e.g. "hello$% ##all" becomes [hello, all]
  var arr = sen.match(/[a-z0-9]+/gi);

  // the array sort function takes a function as a parameter
  // which is used to compare each element in the array to the
  // next element in the array
  var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });

  // this array now contains all the words in the original
  // string but in order from longest to shortest length
  // so we simply return the first element
  return sorted[0];
         
}
   
LongestWord(sen); 


/* 9.  Sort the string in alphabetical order in JavaScript */

function AlphabetSoup(str) { 

  // convert the string into an array of characters
  var chars = str.split("");

  // sort the array in alphabetical order
  var sorted = chars.sort();

  // return the newly sorted string
  return sorted.join("");
         
}
   
AlphabetSoup("coderbyte");  



/* 10. Counting vowels of a string in JavaScript */

function VowelCount(str) { 

  // convert the string to all lowercase characters
  var str = str.toLowerCase();

  // possible vowels
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  // where we store our vowel count
  var count = 0;

  // loop through string checking each character
  for (var i = 0; i < str.length; i++) { 

    // if this character is found in vowels array
    // then the character is a vowel and we add 1 to count
    if (vowels.indexOf(str[i]) !== -1) {
      count = count + 1;
    }

  }

  // return the number of vowels found
  return count;
         
}
   
VowelCount("All cows eat grass");   


/* 11. Word Count in JavaScript  */

   var str = "this world";
 function WordCount(str) {
	 return str.split(" ").length
	 
 } 

WordCount(str);
 
				


/* 12. Determining the distance of letters in a string in JavaScript */

function ABcheck(str) {
	var check = /(a...b|b...a)/
	return check.test(str);
	
}

ABcheck(("adam bestalialieb"));
									




/* 13. Determining Equal amount of characters in a string in JavaScript */

function WordCount(str) { 

  // we split the string with the separator being
  // the x's and o's and compare them

  // this returns a string containing only o's
  var x = str.split("x").join("");

  // this returns a string containing only x's
  var o = str.split("o").join("");

  // see if their lengths are equal
  return x.length === o.length;
         
}
   
WordCount("xxoxoxooxoxo");   
							




/* 14. Palindrome function in JavaScript */

function Palindrome(str) { 

  // first we'll get rid of spaces and make the characters 
  // all lowercase to make it easier to work with
  var str = str.split(" ").join("").toLowerCase();

  // we wrote this reverse code in a previous solution
  var rev = str.split("").reverse().join("");

  // now it's very easy to check if a string is a palindrome
  return str === rev;
         
}
   
Palindrome("Never odd or even");   

/* 15. Determining Mathematical Sequence in JavaSCript */

function ArithGeo(arr) { 

  // this function will loop through the provided array
  // checking to see if the difference provided matches
  // every element-pair difference in the array
  function arrayDiffs(diff, arr, subtract) {

    // loop starting from i=2 and check if every difference is the same
    for (var i = 2; i < arr.length; i++) { 

      // store the temporary difference 
      var tempDiff = (subtract) ? arr[i] - arr[i-1] : arr[i] / arr[i-1];

      // if differences do not match return false
      if (tempDiff !== diff) { return false; }

      // if we reach the end of the array and all differences matched, return true
      else if (i === arr.length-1 && tempDiff === diff) { return true; }

    }

  }

  // store the first difference for a potential arithmetic sequence
  var diffArith = arr[1] - arr[0];

  // store the first difference for a potential geometric sequence
  var diffGeo = arr[1] / arr[0];

  // check the whole array for an arithmetic sequence
  var isArithSeq = arrayDiffs(diffArith, arr, true);
  
  // if not an arithmetic sequence, check for geometric sequence
  if (!isArithSeq) {

    var isGeoSeq = arrayDiffs(diffGeo, arr, false);
    return (isGeoSeq) ? "Geometric" : -1;

  } else {

    return "Arithmetic";

  }
         
}
   
ArithGeo([3, 9, 27, 81]);        
 


/* 16. Array Addition in JavaScript */
var arr = [1, 2, 3, 8];

function ArrayAddition(arr) { 
     var target;
    var addArr = arrayPrep(arr);
    var len = addArr.length;
    var permNum = Math.pow(2, len);
    console.log('test0 ', permNum, target, addArr);

    for(var i = 0; i <= permNum; i++) {
        permStr = (i).toString(2);
        strlen = permStr.length;
        var counter = 0;
        for(var j = 0; j < strlen; j++) {
            if(permStr[j] === '1') {
                counter += addArr[j];
            }
        }
        if (counter === target) {
            return true;
        }
    }
    return false;

    function arrayPrep(arr2) {
        arr.sort(function(a, b){
            return a - b;
        });
        target = arr2.pop();
        return arr2;
    }
}
   

ArrayAddition(arr);  



/* 17. Letter Count, Returning word with most letters in JavaScript */
function LetterCountI(str) { 

  // array of words
  var words = str.split(" ");
  
  // the table that will contain each word with a key and value pair
  // being the characters and the number of times they appeared
  // e.g. {hello: {h: 1, e: 1, l: 2, o: 1}}
  var table = {};
  
  // loop through each word
  for (var i = 0; i < words.length; i++) {
    
    // create new entry in table with the key 
    // being this word
    var thisWord = words[i];
    table[thisWord] = {};
    
    // create a key/value pair that will store
    // the highest letter count for each word
    table[thisWord]["highest"] = 0;
    
    // loop through each character in word and
    // store number of times each letter appears
    for (var c = 0; c < words[i].length; c++) {
     
      // see if this character already exists in table for
      // this word: if so add 1 to the count, if not set count = 1
      var thisChar = thisWord[c];
      table[thisWord][thisChar] === undefined ?
        table[thisWord][thisChar] = 1 :
      	table[thisWord][thisChar] += 1;
      
      // update the highest letter count for each 
      // new letter in the iteration
      if (table[thisWord][thisChar] > table[thisWord]["highest"]) {
      	table[thisWord]["highest"] = table[thisWord][thisChar];
      }
      
    }
    
  }

  // setup a new object that will store the word
  // with the highest number of repeating characters
  var answer = {word: null, count: 1};
  
  // now determine what word has the highest number 
  // of repeating letters by accessing the "highest"
  // property of each word in the table
  for (var w in table) {
    if (table[w]["highest"] > answer["count"]) {
      answer["count"] = table[w]["highest"];
      answer["word"] = w;
    }
  }
  
  return (answer["count"] === 1) ? -1 : answer["word"];
       
}
   
LetterCountI("Hello world from John");       



/* 18. Returning the Second Smallest and Second Largest Numbers from an array in JavaScript */
function SecondGreatLow(arr) { 

  // Create a unique array by using the filter function
  // Then we have to see if the index of the current element in the array 
  // is equal to the first index of the element. If so, then add the
  // element to the new array
  var unique = arr.filter(function(elem, index, self) {
    return self.indexOf(elem) === index;
  });

  // sort the unique array in ascending order
  var sorted = unique.sort(function(a, b) {
    return a - b;
  });

  // return the second smallest and largest elements
  // and check to make sure there is more than 1
  // element in the array
  if (sorted.length < 2) { 
    return sorted[0] + " " + sorted[0]; 
  } else {
    return sorted[1] + " " + sorted[sorted.length - 2];
  }
         
}
   
SecondGreatLow([2, 10, 5, 1, -12, 140]);            


/* 19. Divided number stringified in JavaScript */


function DivisionStringified(num1, num2) { 

  // first we divide and then round accordingly
  var div = Math.round(num1/num2);
  
  // convert answer to string and then
  // to an array separating each number
  div = div.toString().split('');
  
  // keep counter for inserting comma logic
  var insert = 0;
  
  // logic for inserting a comma every 3
  // elements in the array starting from the end
  // e.g. ['4', '5', '3', '2'] becomes ['4', ',5', '3', '2']
  // and then we would join all the numbers into a string
  if (div.length > 3) {
    for (var i = div.length-1; i >= 0; i--) {
      insert++;
      if (insert === 3) { 
        div[i] = ',' + div[i];
        insert = 0;
      }
    }
  }
  
  // return the elements joined into a proper string
  return div.join('');
         
}

DivisionStringified(20, 5);      


/* 20. Counting Minutes in JavaScript */

function CountingMinutes(str) { 
var seps = str.split("-");
var col1 = seps[0].indexOf(":");
var col2 = seps[1].indexOf(":");
var hour1 = parseInt(seps [0].slice(0, col1));
var hour2 = parseInt(seps[1].slice(0, col2));
var min1 = parseInt(seps[0].slice(col1+1, col1+3));
var min2 = parseInt(seps[1].slice(col2+1, col2+3));
var ampm1 = seps[0].slice(-2);
var ampm2 = seps[1].slice(-2);
  if (ampm1 == "pm" && hour1 != 12) {
    hour1 = hour1 + 12;
  }
  if (ampm2 == "pm" && hour2 != 12) {
    hour2 = hour2 + 12; 
  }
  if (hour1 == 12 && ampm1 == "am") {
    hour1 = 0;
  }
  if (hour2 == 12 && ampm2 == "am") {
    hour2 = 0;
      }
var time1 = (hour1*60) + min1;
var time2 = (hour2*60) + min2;

  var diff = time2 - time1;
  
  if (diff < 0) {
    diff = diff + (60 * 24);
  }
  
  return diff; 
         
}
   

CountingMinutes("9:00am-1:30pm"); 
