var utop={
      "अ": "c",
      "आ": "cf",
      "ा": "f",
      "इ": "O",
      "ई": "O{",
      "र्": "{",
      "उ": "p",
      "ए": "P",
      "े": "]",
      "ै": "}",
      "ो": "f]",
      "ौ": "f}",
      "ओ": "cf]",
      "औ": "cf}",
      "ं": "+",
      "ँ": "F",
      "ि": "l",
      "ी": "L",
      "ु": "'",
      "ू": '"',
      "क": "s",
      "ख": "v",
      "ग": "u",
      "घ": "3",
      "ङ": "ª",
      "च": "r",
      "छ": "5",
      "ज": "h",
      "झ": "´",
      "ञ": "`",
      "ट": "6",
      "ठ": "7",
      "ड": "8",
      "ढ": "9",
      "ण": "0f",
      "त": "t",
      "थ": "y",
      "द": "b",
      "ध": "w",
      "न": "g",
      "प": "k",
      "फ": "km",
      "ब": "a",
      "भ": "e",
      "म": "d",
      "य": "o",
      "र": "/",
      "रू": "?",
      "ृ": "[",
      "ल": "n",
      "व": "j",
      "स": ";",
      "श": "z",
      "ष": "if",
      "ज्ञ": "1",
      "ह": "x",
      "१": "!",
      "२": "@",
      "३": "#",
      "४": "$",
      "५": "%",
      "६": "^",
      "७": "&",
      "८": "*",
      "९": "(",
      "०": ")",
      "।": ".",
      "्": "\\",
      "ऊ": "pm",
      "-": " ",
      "(": "-",
      ")": "_"
  }
  function unicodeToPreeti(){
    text=document.getElementById("unicode").value;
    var output = '';
    output=convertToPreeti(text);
    document.getElementById("preeti").value=output
  }
function normalizeUnicode(unicodetext) {
    normalized='';
  
    for(var i=0;i<unicodetext.length;i++){
      currentChar=unicodetext[i];
      try{
        try{
          if (currentChar != 'र') {
            if (unicodetext[i + 1] == '्' && unicodetext[i + 2] != ' ' && unicodetext[i + 2] != '।' && unicodetext[i + 2] != ',') {
              // debugger;
              if (unicodetext[i + 2] != 'र') {
                if ("wertyuxasdghjkzvn".includes(utop[i])) {
                  normalized+=char(parseInt(utop[i])-32);
                  i++;
                  continue;
                }else if (currentChar == 'स') {
                    normalized+=":";
                    i++;
                    continue;
                } else if (currentChar == 'ष') {
                    normalized+='i';
                    i++;
                    continue;
                }
  
              }
            }
          }
          if (unicodetext[i - 1] != 'र' && currentChar == '्' && unicodetext[i + 1] == 'र') {
              if (unicodetext[i - 1] != 'ट' && unicodetext[i - 1] != 'ठ' && unicodetext[i - 1] != 'ड') {
                  normalized+='|';
                  i++;
                  continue;
              } else {
                  normalized+='«';
                  i++;
                  continue;
              }
          }
        }catch(err){}
        normalized+=currentChar;
      }catch(err){
        normalized+=currentChar;
      }
  
    }//for unicodetext loop
    return normalized.replace("त|", "q");
  }
  function convertToPreeti(text){
    // debugger;
    normalizedUnicodeText=normalizeUnicode(text);
    //debugger
    converted='';
    for(var i=0;i<normalizedUnicodeText.length;i++){
      var currentChar = normalizedUnicodeText[i];
      if (currentChar == '\ufeff')
        continue;
      try {
        try {
          if (normalizedUnicodeText[i+1] == 'ि') {
            if (currentChar == 'q')
                converted+='l' + currentChar;
            else{
              if(utop[currentChar]){
                converted+='l'+utop[currentChar];
              }else{
                converted+='l'+currentChar;
              }
            }
            i++;
            continue;
          }
          if (normalizedUnicodeText[i+2] == 'ि') {
            //yasma tyo value ho haina sure xaina hai currentChar to string value huna sakxa
            if ("WERTYUXASDGHJK:ZVN".includes(currentChar)) {
                if (normalizedUnicodeText[i+1] != 'q') {
                    converted+='l'+currentChar+utop[normalizedUnicodeText[i+1]];
                    i = i + 2;
                    continue;
                } else if (normalizedUnicodeText[i+1] == 'q') {
                    converted+=('l')+currentChar+normalizedUnicodeText[i+1];
                    i = i + 2;
                    continue;
                }
            }
          }
          if (normalizedUnicodeText[i+1] == '्' && currentChar == 'र') {
            if (normalizedUnicodeText[i+3] == 'ा' || normalizedUnicodeText[i+3] == 'ो' || normalizedUnicodeText[i+3] == 'ौ' || normalizedUnicodeText[i+3] == 'े' || normalizedUnicodeText[i+3] == 'ै' || normalizedUnicodeText[i+3] == 'ी') {
                converted+=utop[normalizedUnicodeText[i+2]]+utop[normalizedUnicodeText[i+3]]+'{';
                i += 3;
                continue;
            } else if (normalizedUnicodeText[i+3] == 'ि') {
                converted+=utop[normalizedUnicodeText[i+3]]+utop[normalizedUnicodeText[i+2]]+'{';
                i += 3;
                continue;
            }
            converted+=utop[normalizedUnicodeText[i+2]]+'{';
            i += 2;
            continue;
        }
        if (normalizedUnicodeText[i+3] == 'ि') {
          if (normalizedUnicodeText[i+2] == '|' || normalizedUnicodeText[i+2] == '«') {
            //yasma pani currentchar ko value of thyo so doubt  
            if ("WERTYUXASDGHJK:ZVNIi".includes(currentChar)) {
                  converted+='l'+currentChar+utop[normalizedUnicodeText[i+1]]+normalizedUnicodeText[i+2];
                  i += 3;
                  continue;
              }
          }
        }
  
          
        }catch(err){}
        converted+=utop[currentChar]||currentChar;
      }catch(err){
        converted+=currentChar;
      }
    }
    finalString=converted;
    finalString = finalString.replace("Si", "I");
    finalString = finalString.replace("H`", "1");
    finalString = finalString.replace("b\\\\w", "4");
    finalString = finalString.replace("z|", ">");
    finalString = finalString.replace("/'", "?");
    //finalString = finalString.replace("\"", "¿");
    finalString = finalString.replace("Tt", "Q");
    finalString = finalString.replace("b\\\\lj", "lå");
    finalString = finalString.replace("b\\\\\\j", "å");
    finalString = finalString.replace("0f\\", "0");
    finalString = finalString.replace("`\\", "~");
  
    //pri
    finalString=finalString.replace(new RegExp("(.)[l][|]",'g'),"l$1|")
    //fri
    finalString=finalString.replace(new RegExp("[k][l][m][|]",'g'),"lk|m")
    //  finalString=finalString.replace(new RegExp("(.)(l|)$",'g'),"l$1|")
  
    return finalString;
  }