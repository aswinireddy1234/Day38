function checkPalindrome(inputNum){
    let i=inputNum;
    let rev=0;
    while (i > 0){
        let remainder=i%10;
        rev=parseInt(rev*10+remainder);
        i=parseInt(i/10);
    }
    if (inputNum == rev) {
        return true;
    }else
        return false;
}
let number = 131;
let isPalindrome = checkPalindrome(number);

if(isPalindrome){
  console.log(number," is palindrome number");
} else {
    console.log(number," is not palindrome number");
}