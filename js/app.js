let circle = document.getElementById('circle');

let input = document.getElementById('colorInput');

let formatIn = document.getElementById('inputC');
let formatOut = document.getElementById('outputC');

let output = document.getElementById('convertedColor');

let btn = document.getElementById('btn');

  
function hexToRGBA(hex, opacity) {
    let rgb =  'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).concat(isFinite(opacity) ? opacity : 1).join(',') + ')';
    output.innerText = rgb;
    console.log(rgb);
}




function isHash(){
    if(input.value.match(/^#(?:[A-Fa-f0-9]{3}){1,2}$/gm) ){ //regex for 8 letter hex include !
        circle.style.backgroundColor = input.value;
        let newColor = input.value;
        hexToRGBA(newColor)
        console.log(newColor);
        console.log("Workng");
    }else{
        let finalHex = `#${input.value}`;
        circle.style.backgroundColor = finalHex;
        hexToRGBA(finalHex)
    }
}

function isRGB(){
    if(input.value.match(/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/)){
        circle.style.backgroundColor = input.value
        let rgbCode = input.value;

        rgbCode = rgbCode.replace(/[rgb()]+/g,"");
        rgbCode = rgbCode.split(",");

        let condition = rgbCode.every((value) => {
            return parseInt(value) <= 255;
        });
        if(condition){
            let hex = '#';
            rgbCode.forEach(value => {
                value = parseInt(value).toString(16);
                hex += value.length == 1? "0"+value : value;
                output.innerText = hex;
                
            });
        }
        


        
    }else if(input.value.match(/^[0-9]{1,3},[0-9]{1,3},[0-9]{1,3}$/)){
        circle.style.backgroundColor = `rgb(${input.value})`
        let rgbCode = `rgb(${input.value})`;
        console.log(input.value);

        rgbCode = rgbCode.replace(/[rgb()]+/g,"");
        rgbCode = rgbCode.split(",");

        let condition = rgbCode.every((value) => {
            return parseInt(value) <= 255;
        });
        if(condition){
            let hex = '#';
            rgbCode.forEach(value => {
                value = parseInt(value).toString(16);
                hex += value.length == 1? "0"+value : value;
                output.innerText = hex;
                
            });
        }

    }
    
}

// rgb(1,1,245)

function isHex(){
     formatIn.innerText = ""
     formatOut.innerText = ""
     circle.style.backgroundColor = "transparent";

    if(input.value.match(/^#(?:[0-9a-fA-F]{3,4}){1,2}$/gm) || input.value.match(/^(?:[0-9a-fA-F]{3,4}){1,2}$/gm) || input.value.match(/^#$/gm) || input.value.match(/^(?:[0-9a-fA-F]{1,2}){1,3}$/gm) || input.value.match(/^#(?:[0-9a-fA-F]{1,2}){1,3}$/gm) ){
        formatIn.innerText = "Hex"
        formatOut.innerText = "RGB"
        if(input.value.length >= 3 ){
            isHash()
            
        


        }else{
            output.innerText = '';
                        
        }
        

        
    }else{
        formatIn.innerText = "";
        formatOut.innerText = "";
        circle.style.backgroundColor = "transparent";

        if(input.value.match(/^(rgb)?\(?([01]?\d\d?|2[0-4]\d|25[0-5])(\W+)([01]?\d\d?|2[0-4]\d|25[0-5])\W+(([01]?\d\d?|2[0-4]\d|25[0-5])\)?)$/gm) || input.value.match(/[,\/]/gm) || input.value.match(/[rgb\/]/gm) ){
            formatIn.innerText = "RGB"
            formatOut.innerText = "Hex"
            if(input.value.length < 3){
                output.innerText = ""

                
            }else{
                // output.innerText = input.value;
                isRGB()
            }
        }else{
            formatIn.innerText = ""
            formatOut.innerText = ""
        }
    }
}

 
