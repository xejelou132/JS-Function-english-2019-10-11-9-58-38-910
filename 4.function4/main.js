function countWords(message){
 var count = message.split(' ');
 document.write(count.length);
}
countWords('Good morning, I love JavaScript.'); // should return 5