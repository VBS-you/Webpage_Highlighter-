

/////////////////////////parameter////////////////////////////////////////////////////////////
{
    const rightgreen = "#7FFFAA", slivergray = "#C0C0C0", brown = "#F4A460", pink = "#FFC0CB";
    const orange = "#FFA500", skyblue = "#87CEEB", lightgray = "#DCDCDC"; 
    const purplegray = "#E6E6FA",	lightorange="#FFDEAD", Lime="#00FF00";//亮绿色
    const lightgreen = "#98FB98", azure = "#F0FFFF", Aqua = "#D4F2E7";//淡水绿色
    const lightcyan = "#E1FFFF", tomatored="#FF6347", Ivory="#FFFFF0";
    const GreenYellow="#ADFF2F", Khaki="#F0E68C";//卡其色
    const Lavender="#E6E6FA" , MistyRose="#FFE4E1";// 薰衣草淡紫 //薄雾玫瑰 MistyRose淡粉红



    var rules = [
         //      长词在前，否则短词span切割会导致长词检索不到



        { word: "不符合题意", level: 29 }, //lightorange
        { word: "不正确", level: 29 },
        { word: "进中国故事", level: 29 },
        { word: "战役情", level: 29 },//
        { word: "能动新", level: 29 },
        { word: "既使", level: 29 },
        { word: "认命", level: 29 },
        { word: "共商国事", level: 29 },    
        


        { word: "完法", level: 57 }, //tomatored
        { word: "自已", level: 57 },
        { word: "己经", level: 57 },
        { word: "检查机关", level: 57 },
        
        { word: "领导入", level: 57 },// 绝对错误
        { word: "矛厝", level: 57 },//
        { word: "蚂蚊", level: 57 },
        { word: "良妍", level: 57 },
        { word: "决第", level: 57 },
        { word: "轻犯", level: 57 },
        { word: "部们", level: 57 },//   绝对错误
        { word: "开关之年", level: 57 },//tomatored
        // { word: "决第", level: 57 },
        // { word: "轻犯", level: 57 },
        // { word: "部们", level: 57 },


        { word: "-", level: 48 }, //pink
        { word: "—", level: 48 }, //pink
        { word: "给与", level: 48 },
        { word: "给于", level: 48 },
        { word: "是是", level: 48 },
        { word: "当家做主", level: 48 },
        { word: "属于属于", level: 48 }, //pink 相对错误
        // { word: "给于", level: 48 },
        // { word: "是是", level: 48 },
        // { word: "当家做主", level: 48 },
        // { word: "属于属于", level: 48 }, //pink 相对错误


        { word: "尊重考核", level: 27 }, //27] = brown; 可
        { word: "放放", level: 27 }, 
        { word: "参于", level: 27 }, // 可能错误
        // { word: "放放", level: 27 }, 
        // { word: "放放", level: 27 }, 
        // { word: "放放", level: 27 }, 
        // { word: "放放", level: 27 }, 
        // { word: "放放", level: 27 }, 

        { word: "考察", level: 27 }, // brown;
        { word: "考查", level: 21 },  //Lavender 

        { word: "全是", level: 21 },  //Lavender 



        // { word: "躲过", level: 12 },
        // { word: "躲过", level: 12 },
        // { word: "躲过", level: 12 },
        // { word: "躲过", level: 12 },

        //    {        word:"与",        level:12    },  //lightgray
        //    {        word:"于",        level:10    },  //skyblue 
        // { word: "既", level:  },  //lightgreen 略微有点亮
        // { word: "即", level: 10 },  //skyblue 有点亮
        { word: "既", level: 17 },  //purplegray
        { word: "即", level: 15 },  //lightcyan
        // { word: "已", level: 17 },  //purplegray
        // { word: "己", level: 15 },  //lightcyan
        { word: "权利", level: 13 },  // Ivory;
        { word: "权力", level: 16 },  //Aqua
        {        word:"检查",     level: 19 },  //Khaki 可
        {        word:"检察",     level: 18 },  //MistyRose
        { word: "这样做法", level: 18 },  //MistyRose
        { word: "躲过", level: 18 },
        { word: "简介参", level: 18 },


        { word: "入",level: 19 },  //Khaki
        { word: "人", level: 14 },  //azure





        { word: "那", level: 17 },  //purplegray

        

        { word: "正确", level: 26 }, //rightgreen
        { word: "错误", level: 29 }, //lightorange




    ]

    var color_selection = [];
    color_selection[17] = purplegray;    color_selection[22] = lightgray;
    color_selection[23] = lightgreen;    color_selection[26] = rightgreen;
    color_selection[57] = tomatored;     color_selection[27] = brown;
    color_selection[41] = orange;        color_selection[29] = lightorange;
    color_selection[48] = pink;          color_selection[30] = skyblue;
    color_selection[14] = azure;         color_selection[15] = lightcyan;
    color_selection[18] = MistyRose;     color_selection[19] = Khaki;
    color_selection[36] = GreenYellow;   color_selection[21] = Lavender;
    color_selection[16] = Aqua;          color_selection[13] = Ivory;
    
}

////////////////////////////////////////////////////////////////////////////////////
