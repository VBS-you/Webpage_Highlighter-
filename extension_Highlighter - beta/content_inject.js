
var occurrence = 0
var target


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
   
        // target_painting()
        // console.log(occurrence)
        //alert("ahead of rolling ")

        rolling(400)

        addlistener()


});




/////////////////////////////////////////////////////////////////////////////////////


function addlistener() {

   
    bottom_area=document.querySelector("#tikuImgshow > div.operate-buttons")
    
    bottom_btns=bottom_area.querySelectorAll("div.btn")
    
    if (bottom_btns.length==2) {
        rightbtn=bottom_btns[1]
        leftbtn=bottom_btns[0]
    }else{
        console.log(bottom_btns)
        return
    }

    
        if (rightbtn!=null) {

            rightbtn.addEventListener("click",()=>{rolling()})
        }

        if (leftbtn!=null) {
                leftbtn.addEventListener("click",()=>{
    

    
                    setTimeout(() => {

                        confirmbtn=document.querySelectorAll("div.pop-btn")[0]
                        if (confirmbtn!=null) {
                            confirmbtn.addEventListener("click",()=>{rolling()})
                        } 
                    }, 400);
                } )
            }
        


}








function rolling(delay=2400) {

 
 

    setTimeout(() => {


        minesweeping()


        target = document.querySelector("#tikuImgshow > div.right-part.common-style > div")
        if (target != null) {
            htmltext = target.innerHTML
            target.innerHTML = painting(htmltext)
          
        }
        
        console.log(occurrence)

     

    }, delay);
}







function minesweeping() {
    
    
        var answerdiv=document.querySelector("#tikuImgshow > div.left-part.common-style > div.question-cont.answer-cont")
        var waittime 
            if (answerdiv==null) {
                reveal()
                          
            }else{
                if (answerdiv.innerText=="") {
                    reveal()
                }
            }
        

        comparing(waittime)

            
       function comparing(waittime=700) {
        setTimeout(() => {
        answerdiv=document.querySelector("#tikuImgshow > div.left-part.common-style > div.question-cont.answer-cont")
        if (answerdiv!=null) {
            target = document.querySelector("#tikuImgshow > div.right-part.common-style > div")
            targettext=target.innerText
            answertext=answerdiv.innerText
 
            if(targettext!=null && answertext!=null ){
                if(answertext==targettext){
                    alert("!!!小心地雷！！！")
                } 
            }
           
        }     
        }, waittime);
       }
 
         //mining   #mind of landmine


         function reveal() {
            reveal_answer_btn=document.querySelector("#tikuImgshow > div.left-part.common-style > h5 > div.mini-btn")
            if (reveal_answer_btn!=null) {
                reveal_answer_btn.click()

            }  else{
               setTimeout(() => {
                reveal_answer_btn=document.querySelector("#tikuImgshow > div.left-part.common-style > h5 > div.mini-btn")

                if (reveal_answer_btn!=null) {
                reveal_answer_btn.click()
                } 

               }, 1800); 
            }
         }
}


/////////////////////////////////////////////////////////////////////////////////////

//function target_painting() {}



function painting(raw_text = "") {

    rawtext_whole_lenth = raw_text.length
    if (rawtext_whole_lenth <= 1) {
        return ""
    }

    text = raw_text

    for (let i = 0; i < rules.length; i++) {
        keyword = rules[i].word

        level = rules[i].level
        keyword_length = keyword.length


        pos = 0
        while (pos >= 0) {
            pos = text.indexOf(keyword, pos)
            if (pos >= 0) {
                processed_text = background_coloring(text, pos, keyword_length, level)
                deff = processed_text.length - text.length
                pos = pos + deff + keyword_length  // make sure the pos pointor works well
                text = processed_text
            }
        }



    }


    processed_text = text
    return processed_text
}



function background_coloring(text, pos, word_length, level) {
    background_color = color_selection[level]

    prevtext = text.substring(0, pos)
    midtext = text.substr(pos, word_length)
    posttext = text.substring(pos + word_length)


    midtext = "<span style=background:" + background_color + ">" + midtext + "</span>"


    text = prevtext + midtext + posttext

    occurrence++
    return text
}


