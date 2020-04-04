const regex = /[\n\r\s]+/g;
let wordObj ={};
let sortedWords = [];
 countWord = () =>{
   let inputText =  $("#textarea")[0].value;
   let arrOfWords = regex[Symbol.split](inputText);
   arrOfWords = arrOfWords.filter(function(entry) { return entry.trim() != ''; });
   createObjForTable(arrOfWords);
}


 createObjForTable =(wordsArray) =>{
    wordObj ={};
    wordsArray.forEach(function (key) {
        if (wordObj.hasOwnProperty(key)) {
            wordObj[key]++;
        } else {
            wordObj[key] = 1;
        }
      });
      sortWords(wordObj);
}


sortWords = (wordMap) =>{
    sortedWords =[];
    for (var word in wordObj) {
        sortedWords.push([word, wordObj[word]]);
    }
    
    sortedWords.sort(function(a, b) {
        return b[1] - a[1];
    });
    createTable(sortedWords);
}

createTable =(sortedWords) =>{
    let table = document.getElementById("wordTable");
    $("tbody").remove();
    let sum = 0;
    let tbody = document.createElement("TBODY");
    for(let i=0; i<sortedWords.length; i++){
        let row = tbody.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = sortedWords[i][0];
        cell2.innerHTML = sortedWords[i][1];
        sum += sortedWords[i][1];
    }
    let lastRow = tbody.insertRow(sortedWords.length);
    let sumCell1 = lastRow.insertCell(0);
    let sumCell2 = lastRow.insertCell(1);
    sumCell1.innerHTML = "TOTAL WORDS";
    sumCell2.innerHTML = sum;
    $(lastRow).css({background:"#4cbaed"});
    table.appendChild(tbody);

}