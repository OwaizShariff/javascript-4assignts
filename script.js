//Function to calculate percentage of marks.
function marks(a,b,c,d) {
    var total = a + b + c + d;
    var per = total / 400 * 100;
    return per
}

var percentage = marks(100,99,98,92);
console.log(percentage+ "%");

//Function to print given number is odd or even.
function oddeven(a) {
    if (a%2==0) {
        return "even number"
    }
    else {
        return "odd number"
    }
}

var result = oddeven(2);
console.log(result);

//Function to reverse a string.
function reverse(str) {
    var reversestr = "";
    for(var i=str.length-1; i >= 0; i--) //atleast one character in str(>=0).
    {
        reversestr += str[i]; 
    }
    return reversestr;
}

console.log(reverse("abcd"));



//Sorting an array
a=[8,2,4,9,6,3];
n=a.length;
m=a.length;
for (i=0 ; i<n; i++){
    for (j=0 ; j<m-i-1; j++){
        if (a[j] > a[j+1]){
            temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp;
        }
    }            
}
console.log(a);


