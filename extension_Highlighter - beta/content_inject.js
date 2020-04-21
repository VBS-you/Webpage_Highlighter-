

/////////////////////////parameter////////////////////////////////////////////////////////////
{
    var rightgreen = "#7FFFAA", gray = "#C0C0C0", brown = "#F4A460", pink = "#FFC0CB";
    var orange = "#FFA500", skyblue = "#87CEEB", lightgray = "#DCDCDC"; 
    var purplegray = "#E6E6FA",	lightorange="#FFDEAD"
    var lightgreen = "#98FB98"; azure = "#F0FFFF"; lightcyan = "#E1FFFF";tomatored="#FF6347"

    var rules = [
        { word: "考察", level: 19 }, //orange
        { word: "考查", level: 14 },  //azure
        //level:12    },  //gray

        //    {        word:"与",        level:12    },  //lightgray
        //    {        word:"于",        level:10    },  //skyblue 
        // { word: "既", level: 13 },  //lightgreen 略微有点亮
        // { word: "即", level: 10 },  //skyblue 有点亮
        { word: "既", level: 11 },  //purplegray
        { word: "即", level: 15 },  //lightcyan
        { word: "权利", level: 11 },  //purplegray
        { word: "权力", level: 15 },  //lightcyan  可 
        //   {        word:"检查",        level:13    },  //lightgreen
        //   {        word:"检察",        level:10    },  //skyblue

        { word: "完法", level: 27 }, //tomatored
        { word: "自已", level: 27 },
        { word: "检查机关", level: 27 },

        { word: "-", level: 18 }, //pink
        { word: "—", level: 18 }, //pink

        { word: "入", level: 11 },  //purplegray
        { word: "那", level: 11 },  //purplegray



        { word: "正确", level: 16 }, //rightgreen
        { word: "错误", level: 19 }, //lightorange


    ]

    var color_selection = []
    color_selection[11] = purplegray; color_selection[12] = lightgray;
    color_selection[13] = lightgreen; color_selection[16] = rightgreen;
    color_selection[27] = tomatored; color_selection[17] = brown;
    color_selection[21] = orange;color_selection[19] = lightorange;
    color_selection[18] = pink; color_selection[10] = skyblue;
    color_selection[14] = azure;color_selection[15] = lightcyan;

}

////////////////////////////////////////////////////////////////////////////////////
var occurrence = 0





chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
   
        target_painting()
        console.log(occurrence)
    
});

/////////////////////////////////////////////////////////////////////////////////////

function target_painting() {

    var target = document.querySelector("#tikuImgshow > div.right-part.common-style > div")

    if (target != null) {
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








