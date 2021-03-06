import React from 'react';

const UserData = 
[{
    name: "蔡英文",
    pic: "http://i.imgur.com/tSfIYtw.png",
    contents: [
        ["誒誒你知道你的貼圖現在很夯嗎XD", true],
        ["什麼鬼= =", false],
        [<img className = "attach" src="http://i.imgur.com/n8MgSNB.jpg"/> , true],
        ["...........", false],
    ],
    time: "11:20pm",
    info: "蔡英文（1956年8月31日－）是中華民國政治人物，現任民主進步黨主席，同時為中華民國候任總統（第14任；預計2016年5月20日就任。\
    	本籍屏東縣枋山鄉，生於臺北市中山區，學歷至臺灣大學法律學士、美國康乃爾大學法學碩士和英國倫敦政治經濟學院法學博士。\
    	留學歸國後，在東吳大學和國立政治大學擔任法學教授，專長為國際貿易法、競爭法等，擔任教職期間亦曾受聘於央行與經濟部擔任關貿總協定以及世貿組織的談判顧問。\
    	1990年代在李登輝政府期間擔任智慧財產局委員和國安會經濟諮詢委員；2000年正式踏入政壇，擔任陳水扁政府時期第一任陸委會主委、同時兼任政務委員。\
    	2004年加入民主進步黨，並接受黨內提名為不分區立法委員，2006年被延攬擔任行政院副院長至2008年馬英九政府執政止。"
}, {
    name: "蔣介石",
    pic: "http://i.imgur.com/eb1dwwf.jpg",
    contents: [
        ["漢賊不兩立！", false],
        ["...?", true],
        ["退出聯合國！", false],
        ["...........?!", true],
    ],
    time: "2:24pm",
    info: "蔣中正（1887年10月31日－1975年4月5日），字介石，原名瑞元，譜名周泰，學名志清。\
    	中國近代史著名政治家及軍事家。中華民國國軍特級上將，生於浙江省奉化溪口，逝世於臺北市的士林官邸。\
    	早年赴日本學習軍事，並加入中國同盟會。蔣首先是反抗清朝，接著是軍閥混戰，而後是抵抗日本帝國主義入侵。\
    	蔣歷任大元帥府參謀長、大本營參謀長、陸軍軍官學校（黃埔軍校）校長、國民革命軍總司令、行政院院長、\
    	國民政府軍事委員會委員長、中國國民黨總裁、國民政府主席、三民主義青年團團長、第二次世界大戰同盟國中緬印戰區最高統帥、\
    	中華民國總統等職。一再連任第一至五任中華民國總統，並連續當選中國國民黨總裁。蔣中正統治中國大陸近二十年直至中共建政。\
    	1950年3月1日，蔣宣布復行視事，直至1975年去世。"
}, {
    name: "蔣經國",
    pic: "http://i.imgur.com/4ROT3HG.jpg",
    contents: [
        ["快快快！十大建設！", false],
        ["好好好", true],
        ["讚讚讚！解嚴囉！", false],
        ["呵呵呵", true],
    ],
    time: "6:18pm",
    info: "蔣經國（1910年4月27日－1988年1月13日），字建豐。\
    	他是中國國民黨總裁及中華民國總統蔣中正的長子，1975年蔣中正逝世後的中國國民黨主席，\
    	同時也是中華民國第六、第七兩任總統，於1988年1月13日的第七任總統任期內逝世。\
    	在蘇聯期間，蔣經國接受正統馬列主義教育。回國後他成為三民主義忠實信徒。\
    	自1972年擔任行政院院長起，蔣經國於1978年接任中華民國總統，至1988年逝世為止。\
    	蔣經國在國際上孤立情勢中，大力發展經濟，解除臺灣多年戒嚴，促進政治民主。"
}, {
    name: "李登輝",
    pic: "http://i.imgur.com/6QapKnL.jpg",
    contents: [
        ["這麼晚了你怎麼還不睡？", true],
        ["我是第一任民選總統，啊你現在是想怎樣", false],
        ["...沒啊，關心你而已啊= =兇啥", true],
        ["爺可是日本皇民，休想污辱我", false],
        ["日本人可以當台灣總統？", true],
    ],
    time: "4:13am",
    info: "李登輝，（1923年1月15日－ ），生於日治臺灣臺北州淡水郡三芝莊下的埔頭坑聚落「源興居」（今新北市三芝區埔坪里）\
    	，福佬客家人，農業經濟學家出身，臺灣政治人物。曾任農村復興委員會薦任官員、臺北市長、\
    	臺灣省政府主席、副總統等職，並於1988年至2000年擔任中華民國總統以及中國國民黨主席。"
}, {
    name: "陳水扁",
    pic: "http://i.imgur.com/YcMPPxS.jpg",
    contents: [
        ["阿扁錯了嗎？", false],
        ["誒...你要我怎麼回答", true],
        ["阿扁錯了嗎？", false],
        ["不要跳針好嗎= =", true],
        ["難道阿扁錯了嗎？", false],
        ["........你錯了....", true],
    ],
    time: "12:04am",
    info: "陳水扁（1950年10月12日－），臺南市官田人，生於中華民國臺灣省臺南縣官田鄉西莊村（今臺南市官田區西莊里）\
    	，律師出身，民主進步黨籍政治人物。曾任海商法律師、中華民國第十、十一任總統（2000年－2008年）。\
    	歷任民主進步黨第十屆主席、民主進步黨第十一屆主席、臺北市議會議員、立法委員、臺北市市長、\
    	中華民國總統等職。由於涉及龍潭購地案而被判刑20年，三審定讞發監執行，\
    	2015年1月5日核准暫時出獄，進行保外就醫。[3][4]2016年2月4日第5次延長保外就醫至2016年5月4日止。"
}, {
    name: "馬英九",
    pic: "http://i.imgur.com/jJ3bYTi.png",
    contents: [
        ["一個總統，施政滿意度只剩18%就可以下台了，不下台就是沒有羞恥心！", false],
        ["嗯...可是你只有9%誒", true],
        ["你說什麼？我聽不到", false],
        ["你耳朵長毛嗎？", true],
        ["你說什麼？", false],
    ],
    time: "3:21pm",
    info: "馬英九（1950年7月13日－），是中華民國第12任及第13任總統，生於英屬香港九龍油麻地，\
    	籍貫湖南省衡山縣，1952年隨雙親定居台灣。中國國民黨籍，曾任中國國民黨副秘書長與黨主席、\
    	總統府第一局副局長、行政院研考會主委、陸委會副主委、法務部長與台北市長等職位。"
}]

export default UserData;
