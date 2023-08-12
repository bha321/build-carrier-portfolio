const str= 'store a set of words in an array and display the contents both forward and backward'
console.log('(16) ["store", "a", "set", "of", "words", "in", "an", "array", "and", "display", "the", "contents", "both", "forward", "and", "backward"]')
console.log("Forward Implementation")
for(var i of str.split(" "))
{
    console.log(i);
}
const a=str.split(" ");
console.log("Backwards Implementation")
for(var i=a.length-1;i>=0;i--)
{
    console.log(a[i]);
}