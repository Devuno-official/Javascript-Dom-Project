let textInput = document.getElementById("textInput");
let wordCount = document.getElementById("wordCount");
let charCount = document.getElementById("charCount");
  
textInput.addEventListener("input",(e)=>{
    let trimtext = textInput.value.trim();
    if(trimtext === ''){
        wordCount.innerText = 0;
        charCount.innerText = 0;
        return;
    }
    // Count words by splitting on whitespace
    let words = trimtext.split(/\s+/g).filter(word => word.length > 0);
    let wordTotal = words.length;
    // Count characters (excluding spaces)
    let charTotal = trimtext.replace(/\s+/g, '').length;
    wordCount.innerText = wordTotal;
    charCount.innerText = charTotal;
})

