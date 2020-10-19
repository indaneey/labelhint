
"use strict"

/**
* Labelling your HTML elements in an easy way and customise your label container.
* @function labelHint
* @param {void,string & number}  Container properties
* @returns {Container Properties} Random bytes
* @throws {Error} If no any labelHint funtion
* @inner
*/

var labelHint = function ({ timeout = Number(), backgroundColor = String(), color = String(), padding = String(), fontSize = String(), border = String(), borderRadius = String()} = {}){
        var timeoutCheck;
        var container = document.createElement('div');
    
        labelHint.prototype.class = function (name = String()) {
            container.className = name
        };

                container.style.zIndex = 1000000000000;
                container.style.pointerEvents = 'none';
                // container.style.setProperty("background-color", container.style.backgroundColor || backgroundColor || "rgb(53, 53, 53)");
                // container.style.setProperty("color", container.style.color || color || "rgb(192, 192, 192)");
                // container.style.setProperty("padding", container.style.padding || padding || "6px");
                // container.style.setProperty("font-size", container.style.fontSize || fontSize || "13px");
                // container.style.setProperty("border-radius", container.style.borderRadius || borderRadius || "3px");
                // container.style.setProperty("border", container.style.border || border || "1px solid");

        
        
        if(!timeout || typeof timeout =="string"){
            timeoutCheck = 1000000
            console.log("Default value 1m40s applied or set timeout value : number type")
        }else{
            timeoutCheck = timeout
        }
      
        window.onmousemove = function(e){
            if(e.target.getAttribute('data-labelHint')){
                var text = e.target.getAttribute('data-labelHint')
                container.style.position = 'absolute'
                if (e.clientX >= e.view.innerWidth - 100){
                    container.style.top = `${e.pageY + 5}px`
                    container.style.left = `${e.pageX - 100}px`
                } else{
                    container.style.top = `${e.pageY + 5}px`
                    container.style.left = `${e.pageX + 5}px`
                }
                // container.style.top = `${e.clientY + 5}px`
                // container.style.left = `${e.clientX + 5}px`
                
                var conatinerText = `<span style= "pointer-events: none"><label>${text}</label></span>`
                container.innerHTML = conatinerText
                window.document.body.appendChild(container)
                container.style.display = 'block'
            }
            setTimeout(() => {
                container.style.display = 'none'
            }, timeoutCheck);
            
        }
        window.onmouseout = function(){
            container.style.display = 'none'
        }
    }
export {labelHint}

