import React, { Component } from 'react'
import './char.scss';

class CharTransition extends Component {
    constructor(props) {
        super(props);
        this.charTitle = [
            {text: "T"},
            {text: "h"},
            {text: "e"},
            {text: " "},
            {text: "F"},
            {text: "u"},
            {text: "t"},
            {text: "u"},
            {text: "r"},
            {text: "e"},
            {text: " "},
            {text: "L"},
            {text: "e"},
            {text: "a"},
            {text: "d"},
            {text: "e"},
            {text: "r"},
            {text: " "},
            {text: "o"},
            {text: "f"},
            {text: <br/>},
            {text: "A"},
            {text: "I"},
            {text: " "},
            {text: "P"},
            {text: "r"},
            {text: "e"},
            {text: "d"},
            {text: "i"},
            {text: "c"},
            {text: "t"},
            {text: "i"},
            {text: "o"},
            {text: "n"},
            {text: " "},
            {text: "P"},
            {text: "l"},
            {text: "a"},
            {text: "t"},
            {text: "f"},
            {text: "o"},
            {text: "r"},
            {text: "m"},
        ];
        this.charZhTitle = [
            {text: "A"},
            {text: "I"},
            {text: "预"},
            {text: "测"},
            {text: "平"},
            {text: "台"},
            {text: "，"},
            {text: "引"},
            {text: "领"},
            {text: "未"},
            {text: "来"},
            {text: "！"},
        ];
        this.charTextKo = [
            {text: "A"},
            {text: "I"},
            {text: "와"},
            {text: " "},
            {text: "블"},
            {text: "록"},
            {text: "체"},
            {text: "인"},
            {text: "의"},
            {text: " "},
            {text: "콜"},
            {text: "라"},
            {text: "보"},
            {text: "레"},
            {text: "이"},
            {text: "션"},
            {text: <br />},
            {text: "리"},
            {text: "워"},
            {text: "드"},
            {text: " "},
            {text: "플"},
            {text: "랫"},
            {text: "폼"},
            {text: "과"},
            {text: " "},
            {text: "암"},
            {text: "호"},
            {text: "화"},
            {text: "폐"},
            {text: " "},
            {text: "가"},
            {text: "격"},
            {text: "변"},
            {text: "동"},
            {text: " "},
            {text: "알"},
            {text: "림"},
            {text: " "},
            {text: "서"},
            {text: "비"},
            {text: "스"},
            {text: "를"},
            {text: " "},
            {text: "통"},
            {text: "해"},
            {text: " "},
            {text: "거"},
            {text: "래"},
            {text: "소"},
            {text: " "},
            {text: "T"},
            {text: "r"},
            {text: "a"},
            {text: "f"},
            {text: "f"},
            {text: "i"},
            {text: "c"},
            {text: "과"},
            {text: " "},
            {text: <div className="desktop-inline"></div>},
            {text: "거"},
            {text: "래"},
            {text: " "},
            {text: "유"},
            {text: "동"},
            {text: "성"},
            {text: " "},
            {text: "확"},
            {text: "보"},
            {text: "를"},
            {text: " "},
            {text: "통"},
            {text: "합"},
            {text: "적"},
            {text: "으"},
            {text: "로"},
            {text: " "},
            {text: "제"},
            {text: "공"},
            {text: "하"},
            {text: "는"},
            {text: " "},
            {text: "암"},
            {text: "호"},
            {text: "화"},
            {text: "폐"},
            {text: " "},
            {text: "E"},
            {text: "c"},
            {text: "o"},
            {text: "s"},
            {text: "y"},
            {text: "s"},
            {text: "t"},
            {text: "e"},
            {text: "m"},
        ];
        this.charTextEn = [
            {text: "C"},
            {text: "o"},
            {text: "l"},
            {text: "l"},
            {text: "a"},
            {text: "b"},
            {text: "o"},
            {text: "r"},
            {text: "a"},
            {text: "t"},
            {text: "i"},
            {text: "o"},
            {text: "n"},
            {text: " "},
            {text: "b"},
            {text: "e"},
            {text: "t"},
            {text: "w"},
            {text: "e"},
            {text: "e"},
            {text: "n"},
            {text: " "},
            {text: "A"},
            {text: "I"},
            {text: " "},
            {text: "a"},
            {text: "n"},
            {text: "d"},
            {text: " "},
            {text: "b"},
            {text: "l"},
            {text: "o"},
            {text: "c"},
            {text: "k"},
            {text: "c"},
            {text: "h"},
            {text: "a"},
            {text: "i"},
            {text: "n"},
            {text: <br />},
            {text: "C"},
            {text: "r"},
            {text: "y"},
            {text: "p"},
            {text: "t"},
            {text: "o"},
            {text: "c"},
            {text: "u"},
            {text: "r"},
            {text: "r"},
            {text: "e"},
            {text: "n"},
            {text: "c"},
            {text: "y"},
            {text: " "},
            {text: "E"},
            {text: "c"},
            {text: "o"},
            {text: "s"},
            {text: "y"},
            {text: "s"},
            {text: "t"},
            {text: "e"},
            {text: "m"},
            {text: " "},
            {text: "s"},
            {text: "e"},
            {text: "c"},
            {text: "u"},
            {text: "r"},
            {text: "e"},
            {text: "s"},
            {text: " "},
            {text: "e"},
            {text: "x"},
            {text: "c"},
            {text: "h"},
            {text: "a"},
            {text: "n"},
            {text: "g"},
            {text: "e"},
            {text: "'"},
            {text: "s"},
            {text: " "},
            {text: "t"},
            {text: "r"},
            {text: "a"},
            {text: "f"},
            {text: "f"},
            {text: "i"},
            {text: "c"},
            {text: " "},
            {text: "a"},
            {text: "n"},
            {text: "d"},
            {text: " "},
            {text: "t"},
            {text: "r"},
            {text: "a"},
            {text: "d"},
            {text: "i"},
            {text: "n"},
            {text: "g"},
            {text: " "},
            {text: "l"},
            {text: "i"},
            {text: "q"},
            {text: "u"},
            {text: "i"},
            {text: "d"},
            {text: "i"},
            {text: "t"},
            {text: "y"},
            {text: <br />},
            {text: "t"},
            {text: "h"},
            {text: "r"},
            {text: "o"},
            {text: "u"},
            {text: "g"},
            {text: "h"},
            {text: " "},
            {text: "r"},
            {text: "e"},
            {text: "w"},
            {text: "a"},
            {text: "r"},
            {text: "d"},
            {text: " "},
            {text: "p"},
            {text: "l"},
            {text: "a"},
            {text: "t"},
            {text: "f"},
            {text: "o"},
            {text: "r"},
            {text: "m"},
            {text: " "},
            {text: "a"},
            {text: "n"},
            {text: "d"},
            {text: " "},
            {text: "p"},
            {text: "r"},
            {text: "e"},
            {text: "d"},
            {text: "i"},
            {text: "c"},
            {text: "t"},
            {text: "i"},
            {text: "o"},
            {text: "n"},
            {text: " "},
            {text: "n"},
            {text: "o"},
            {text: "t"},
            {text: "i"},
            {text: "f"},
            {text: "i"},
            {text: "c"},
            {text: "a"},
            {text: "t"},
            {text: "i"},
            {text: "o"},
            {text: "n"},
            {text: " "},
            {text: "s"},
            {text: "e"},
            {text: "r"},
            {text: "v"},
            {text: "i"},
            {text: "c"},
            {text: "e"},
            {text: " "},
            {text: "o"},
            {text: "n"},
            {text: " "},
            {text: "c"},
            {text: "r"},
            {text: "y"},
            {text: "p"},
            {text: "t"},
            {text: "o"},
            {text: "c"},
            {text: "u"},
            {text: "r"},
            {text: "r"},
            {text: "n"},
            {text: "e"},
            {text: "c"},
            {text: "y"},
            {text: " "},
            {text: "c"},
            {text: "h"},
            {text: "a"},
            {text: "n"},
            {text: "g"},
            {text: "e"},
        ];
        this.charTextJp = [
            {text: "A"},
            {text: "I"},
            {text: "と"},
            {text: "ブ"},
            {text: "ロ"},
            {text: "ッ"},
            {text: "ク"},
            {text: "チ"},
            {text: "ェ"},
            {text: "ー"},
            {text: "ン"},
            {text: "の"},
            {text: "コ"},
            {text: "ラ"},
            {text: "ボ"},
            {text: "レ"},
            {text: "ー"},
            {text: "シ"},
            {text: "ョ"},
            {text: "ン"},
            {text: <br />},
            {text: "リ"},
            {text: "ワ"},
            {text: "ー"},
            {text: "ド"},
            {text: "プ"},
            {text: "ラ"},
            {text: "ッ"},
            {text: "ト"},
            {text: "フ"},
            {text: "ォ"},
            {text: "ー"},
            {text: "ム"},
            {text: "と"},
            {text: "価"},
            {text: "格"},
            {text: "変"},
            {text: "動"},
            {text: "通"},
            {text: "知"},
            {text: "サ"},
            {text: "ー"},
            {text: "ビ"},
            {text: "ス"},
            {text: "を"},
            {text: "通"},
            {text: "じ"},
            {text: "て"},
            {text: "取"},
            {text: "引"},
            {text: "所"},
            {text: "T"},
            {text: "r"},
            {text: "a"},
            {text: "f"},
            {text: "f"},
            {text: "i"},
            {text: "c"},
            {text: "や"},
            {text: "流"},
            {text: "動"},
            {text: "性"},
            {text: "の"},
            {text: "確"},
            {text: "保"},
            {text: "を"},
            {text: "統"},
            {text: "合"},
            {text: "的"},
            {text: "に"},
            {text: "提"},
            {text: "供"},
            {text: "す"},
            {text: "る"},
            {text: "仮"},
            {text: "想"},
            {text: "通"},
            {text: "貨"},
            {text: "E"},
            {text: "c"},
            {text: "o"},
            {text: "s"},
            {text: "y"},
            {text: "s"},
            {text: "t"},
            {text: "e"},
            {text: "m"},
        ];

        this.charTextZh = [
            {text: "人"},
            {text: "工"},
            {text: "智"},
            {text: "能"},
            {text: "与"},
            {text: "区"},
            {text: "块"},
            {text: "链"},
            {text: "的"},
            {text: "相"},
            {text: "结"},
            {text: "合"},
            {text: <br />},
            {text: "我"},
            {text: "们"},
            {text: "将"},
            {text: "通"},
            {text: "过"},
            {text: "奖"},
            {text: "励"},
            {text: "平"},
            {text: "台"},
            {text: "与"},
            {text: "加"},
            {text: "密"},
            {text: "货"},
            {text: "币"},
            {text: "价"},
            {text: "格"},
            {text: "变"},
            {text: "动"},
            {text: "通"},
            {text: "知"},
            {text: "服"},
            {text: "务"},
            {text: "对"},
            {text: "于"},
            {text: "交"},
            {text: "易"},
            {text: "所"},
            {text: "的"},
            {text: "参"},
            {text: "与"},
            {text: "用"},
            {text: "户"},
            {text: "数"},
            {text: "以"},
            {text: "及"},
            {text: "确"},
            {text: "保"},
            {text: "交"},
            {text: "易"},
            {text: "流"},
            {text: "动"},
            {text: "性"},
            {text: "进"},
            {text: "行"},
            {text: "整"},
            {text: "合"},
            {text: "来"},
            {text: "实"},
            {text: "现"},
            {text: "加"},
            {text: "密"},
            {text: "货"},
            {text: "币"},
            {text: "的"},
            {text: "生"},
            {text: "态"},
            {text: "体"},
            {text: "系。"},
        ]
    }
    render() {
        return (
            <>
                <div className={`main-txt-title ${this.props.activeMainTitle ? "active" : ""}`}>
                    <strong>
                        {
                            this.props.defaultLang === "zh" ?
                                this.charZhTitle.map((item, i) => {
                                    return (
                                        <span key={i} className="char">{item.text}</span>
                                    )
                                })
                                :
                                this.charTitle.map((item, i) => {
                                    return (
                                        <span key={i} className="char">{item.text}</span>
                                    )
                                })
                        }
                    </strong>
                </div>
                <div
                    className={
                        `main-txt-desc
                        ${this.props.activeMainTitle ? "active" : ""}
                        ${
                            (this.props.defaultLang === "ko" && "ko") ||
                            (this.props.defaultLang === "en" && "en") ||
                            (this.props.defaultLang === "ja" && "ja") ||
                            (this.props.defaultLang === "zh" && "zh")
                        }
                    `}>
                    <p>
                        {this.props.defaultLang === "ko" &&
                            this.charTextKo.map((item, i) => {
                                return (
                                    <span key={i} className="char">{item.text}</span>
                                )
                            })
                        }
                        {this.props.defaultLang === "en" &&
                            this.charTextEn.map((item, i) => {
                                return (
                                    <span key={i} className="char">{item.text}</span>
                                )
                            })
                        }

                        {this.props.defaultLang === "ja" &&
                            this.charTextJp.map((item, i) => {
                                return (
                                    <span key={i} className="char">{item.text}</span>
                                )
                            })
                        }
                        {this.props.defaultLang === "zh" &&
                        this.charTextZh.map((item, i) => {
                            return (
                                <span key={i} className="char">{item.text}</span>
                            )
                        })
                        }
                    </p>
                </div>

            </>
        )
    }
};

export default CharTransition;