var occurrence = 0



chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
   
        // target_painting()
        // console.log(occurrence)
        rolling()

        var rightbtn=document.querySelector("#tikuImgshow > div.operate-buttons > div:nth-child(4)")

        if (rightbtn.innerText=="正确") {

            rightbtn.addEventListener("click",rolling )
            //alert(rightbtn)
            leftbtn=document.querySelector("#tikuImgshow > div.operate-buttons > div:nth-child(3)")
            if (leftbtn.innerText=="错误") {
                leftbtn.addEventListener("click",()=>{
                    setTimeout(() => {
                    
                        confirmbtn=document.querySelector("#moveCont > div.pop-footer > div:nth-child(1) > div")
                        confirmbtn.addEventListener("click",rolling )

                    }, 800);
                } )
            }
        }

});





function rolling() {
    setTimeout(() => {
        target_painting()
        console.log(occurrence)
    }, 1200);
}




/////////////////////////////////////////////////////////////////////////////////////

function target_painting() {

    var target = document.querySelector("#tikuImgshow > div.right-part.common-style > div")

    if (target != null) {
        {
        var answerdiv=document.querySelector("#tikuImgshow > div.left-part.common-style > div.question-cont.answer-cont")

        if (answerdiv==null) {
            reveal_answer_btn=document.querySelector("#tikuImgshow > div.left-part.common-style > h5 > div.mini-btn")
            reveal_answer_btn.click()            
        }

        setTimeout(() => {
            if(answerdiv.innerText==target.innerText){alert("!!!小心地雷！！！")}
        }, 800);
        } //mining   #mind of landmine

        
        htmltext = target.innerHTML
        target.innerHTML = painting(htmltext)
    }

}



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

