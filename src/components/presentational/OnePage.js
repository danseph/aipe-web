import React from 'react';
// import Popup from '../presentational/Popup';
import CharTransition from './CharTransition';
import Slider from 'react-slick';
import './styles.scss';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
import ja from 'react-intl/locale-data/ja';
import zh from 'react-intl/locale-data/zh';
import locale from '../../locale';
import { FormattedMessage } from 'react-intl';
import Highcharts from 'highcharts';
import HighchartsReactOfficial from 'highcharts-react-official'
addLocaleData([...en, ...ko, ...ja, ...zh]);

const OnePage = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };

    let lanTelgramLink = () => {
        let link;
        if (props.defaultLang === 'ko') {
            return link = "https://bit.ly/2CTzfYb";
        } else if (props.defaultLang === 'en') {
            return link = "https://bit.ly/2WLNyFV";
        } else if (props.defaultLang === 'zh') {
            return link = "https://t.me/AIPE_official_CHN";
        } else {
            return link = "https://bit.ly/2WLNyFV";
        }
    }
        
    const highchartOption = {   
        credits: {
            enabled: false
        },
        colors: ['#191919', '#303030', '#595959', '#898989', '#b7b7b7'],
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            margin: [0, 0, 80, 0],
            // spacingTop: 0,
            // spacingBottom: 0,
            // spacingLeft: 0,
            // spacingRight: 0,
            // marginBottom: 35,
            // marginTop: -80,
            // backgroundColor: '#FCFFC5',
            // polar: true,
        },
        title: {
            text: null
        },
        tooltip: {
            pointFormat: '{point.detail}',
            useHTML: true
        },
        plotOptions: {
            pie: {
                states: {
                    inactive: {
                        opacity: .3
                    }
                },
                size: '100%',
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    useHTML: true,
                    format: '{point.name} <br> {point.percentage} %',
                    distance: -45,
                    style: {fontFamily: '\'Questrial\', sans-serif', fontSize: '12px', textAlign: 'center', color:'#FFF'} 
                },
            }
        },
        series: [{
            name: 'Brand',
            colorByPoint: true,
            data: [{
                        name: 'Coin Sale',
                        detail: '(4 Years Lockup, 5% Release Each Year)',
                        y: 40,
                    }, {
                        name: 'Ecosystem',
                        detail: '(4 Years Lockup, 5% Release Each Year)',
                        y: 20
                    }, {
                        name: 'Marketing',
                        detail: '(2 Years Lockup, 4.5% Release Every 6 Months)',
                        y: 18
                    }, {
                        name: 'Team',
                        detail: '(2 Years Lockup, 5% Release Each Year)',
                        y: 10
                    }, {
                        name: 'Foundation',
                        detail: '(Release After 3 Years)',
                        y: 12
                }]
            }]
    };



    return (
        <>
            {!props.loader ?
                <IntlProvider
                    locale={props.defaultLang}
                    messages={locale[props.defaultLang]}
                >
                    <>
                        {/* {!props.popupClose &&
                            <Popup handlePopupClose={props.handlePopupClose} toggleChange={props.toggleChange}/>
                        } */}
                        {props.loader &&
                        <div className="loader-wrap">
                            <img src={require("../../images/loader.gif")} className="loader"/>
                        </div>
                        }
                        {props.lanShow &&
                        <div className="lan-list-none-wrap" onClick={props.handleLanShow}/>
                        }
                        <h1 className={`header-logo m`}>
                            <a href="javascript:void(0)">
                                <img src={require("../../images/logo_v2.png")} alt="로고"/>
                            </a>
                        </h1>
                        <div className="header-wrap">
                            <header className="header">
                                <h1 className="header-logo" onClick={props.handleRefresh}>
                                    <a href="javascript:void(0)">
                                        <img src={require("../../images/logo_v2.png")} alt="로고"/>
                                    </a>
                                </h1>
                                {/*메뉴 클릭하면 ((header-nav, menu-btn, header-btn)) 여기에 on 붙여주세요 */}
                                <nav className={`header-nav ${props.activeMnav ? "on": ""}`} onClick={props.handleLanHide}>
                                    <a href="javascript:void(0)" className={`menu-btn ${props.activeMnav ? "on": ""}`} onClick={props.handleMnvaBtn}>
                                        <span className="bar-wrap">
                                            <span className="bar" />
                                            <span className="bar" />
                                            <span className="bar" />
                                        </span>
                                    </a>
                                    {props.nav.map((item, i) => {
                                        return (
                                            <a href="javascript:void(0)"
                                               className={props.activeNav === item.num ? "active" : ""}
                                               onClick={() => props.handleSectionMove(item.num)}
                                               key={i}>
                                                <FormattedMessage id={item.text} />
                                            </a>
                                        )
                                    })}
                                </nav>
                                <div className={`header-btn ${props.activeMnav ? "on": ""}`}>
                                    <a href="javascript:void(0)" onClick={() => props.handleWhitePaperMove(20)}>
                                        <FormattedMessage id="header-whitepaper" />
                                    </a>
                                    <a href="javascript:void(0)" className={`lang ${props.lanShow ? "active" : ""}`}
                                       onClick={props.handleLanShow}>
                                        <FormattedMessage id="header-lan-btn" />
                                    </a>
                                    <ul className={`header-btn-lang ${props.lanShow ? "active" : ""}`}>
                                        {props.lan.map((item, i) => {
                                            return (
                                                <li key={i}>
                                                    <a href="javascript:void(0)" className={`${item.className} ${item.lanSet === props.defaultLang ? "active": ""}`} onClick={props.handleLanChoice}>{item.text}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="lan-hide-wrap" onClick={props.handleLanHide}/>
                            </header>
                        </div>

                        {/* CONTAINER */}
                        <div className="container">
                            {/* MAIN */}
                            <div className="main-wrap" id="section1">
                                <section className="main">
                                    <div className="main-img">
                                        <img src={require("../../images/main01.png")}/>
                                    </div>
                                    <div className="main-txt">
                                        <CharTransition defaultLang={props.defaultLang} activeMainTitle={props.activeMainTitle} />
                                    </div>
                                </section>
                            </div>
                            {/* MAIN */}

                            {/* PLATFORM */}
                            <div className="platform-wrap">
                                <section className="platform" id="section2">
                                    <div className={`platform-title ${props.activePlatFormTitle && "active"}`} ref={props.platFormTitle}>
                                        <h2><FormattedMessage id="ai-prediction-title" /></h2>
                                    </div>
                                    <div className="platform-content">
                                        <ul>
                                            {props.platformContent.map((item, i) => {
                                                return (
                                                    <li
                                                        key={i}
                                                        className={`${item.className1}`}
                                                        ref={
                                                            (item.className1 === "content1" && props.platFormContent1) ||
                                                            (item.className1 === "content2" && props.platFormContent2) ||
                                                            (item.className1 === "content3" && props.platFormContent3) ||
                                                            (item.className1 === "content4" && props.platFormContent4) ||
                                                            (item.className1 === "content5" && props.platFormContent5) ||
                                                            (item.className1 === "content6" && props.platFormContent6)
                                                        }>
                                                        <div className={item.className2}>
                                                            <div className={item.className2_1}>
                                                                <img src={require(`../../images/${item.image}`)}/>
                                                            </div>
                                                            <div className={item.className2_1}>
                                                                <img src={require(`../../images/${item.image2}`)}/>
                                                            </div>
                                                        </div>
                                                        <div className={item.className3}>
                                                            <h4><FormattedMessage id={item.text1} /></h4>
                                                            <p><FormattedMessage id={item.text2} values={{br: <br />, lineBreak: <div className="desktop-inline"></div>, lineBreak2: <div className="desktop-block"></div>}} /></p>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </section>
                            </div>
                            {/* PLATFORM */}

                            {/* PLATFORM, SOLUTION */}
                            <div className="effect-wrap" id="section3">
                                <div className="effect">
                                    <div className={`effect-title`} ref={props.effectTitle}>
                                        <h2><FormattedMessage id="aipe-ecosystem" /></h2>
                                    </div>
                                    <div className={`effect-img-wrap web`} ref={props.effectContent}>
                                        <div className="effect-img">
                                            {
                                                props.defaultLang === "zh" ?
                                                    <img src={require("../../images/web_bg_contents_cn.png")} />
                                                    :
                                                    <img src={require("../../images/web_bg_contents.png")} />
                                            }
                                        </div>
                                        <div className="effect-img bot">
                                            <img src={require("../../images/web_bg_effect.png")}/>
                                        </div>
                                    </div>
                                    <div className={`effect-img-wrap mobile`} ref={props.effectContentM}>
                                        <div className="effect-img">
                                            {
                                                props.defaultLang === "zh" ?
                                                    <img src={require("../../images/mobile_bg_contents_cn.png")} />
                                                    :
                                                    <img src={require("../../images/mobile_bg_contents.png")} />
                                            }
                                        </div>
                                        <div className="effect-img bot">
                                            <img src={require("../../images/mobile_bg_effect.png")}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* PLATFORM, SOLUTION */}

                            {/* TECHNIQUE, SOLUTION */}
                            <div className="tech-wrap">
                                <section className="tech">
                                    <div className={`tech-title`} ref={props.techniqueTitle}>
                                        <h2><FormattedMessage id="ai-technique" /></h2>
                                    </div>
                                    <div className="tech-content">
                                        <ul>
                                            {props.techContent.map((item, i) => {
                                                return (
                                                    <li key={i}
                                                        ref={
                                                            (item.num === 1 && props.techniqueContent1) ||
                                                            (item.num === 2 && props.techniqueContent2)
                                                        }>
                                                        <div className={item.className1}>
                                                            <img src={require(`../../images/${item.image}`)}/>
                                                        </div>
                                                        <div className={item.className2}>
                                                            <strong>
                                                                <FormattedMessage id={item.title} values={{kbr: <br />, br: <br />, lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/>
                                                            </strong>
                                                            <p>
                                                                <FormattedMessage id={item.text} values={{kbr: <br />, br: <br />, lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/>
                                                            </p>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </section>
                            </div>
                            {/* TECHNIQUE */}

                            {/* AIPX */}
                            <div className="aipx-wrap">
                                <section className="aipx">
                                    <div className={`aipx-title`} ref={props.aipxTitle}>
                                        <h2><FormattedMessage id="aipx-title" /></h2>
                                    </div>
                                    <div className="aipx-content" ref={props.aipxContent}>
                                        <div className="aipx-content-img">
                                            <div className={`center`}>
                                                <img src={require("../../images/aipe.png")} />
                                            </div>
                                            <ul className={`side`}>
                                                {
                                                    props.aipx.map((item, i) => {
                                                        return (
                                                            <li key={i} className={item.className}>
                                                                <p>
                                                                    <FormattedMessage id={item.text} values={{kbr: <br />}} />
                                                                </p>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className={`aipx-content-txt`} ref={props.aipxText}>
                                            <p>
                                                <FormattedMessage id="aipx-text6" values={{lineBreak:<div className='desktop-inline'></div>}}/>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`aipx-desc`} ref={props.coinAllocation}>
                                        <div className="aipx-desc-structure">
                                            <h3>
                                                <FormattedMessage id='coin-structure'/>
                                            </h3>
                                            <div className="aipx-desc-structure-list">
                                                <ul>
                                                    {props.coinStructure.map((item, i) => {
                                                        return (
                                                            <li key={i}>
                                                                <strong className={item.className1}>
                                                                    <FormattedMessage id={item.text1} />
                                                                </strong>
                                                                <span className={item.className2}>
                                                                    <FormattedMessage id={item.text2} />
                                                                </span>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="aipx-desc-graph">
                                            <h3>
                                                <FormattedMessage id='coin-allocation' />
                                            </h3>
                                                <HighchartsReactOfficial 
                                                    highcharts={Highcharts}
                                                    options={highchartOption}
                                                />
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {/* AIPX */}

                            {/* WHITEPAPER */}
                            <div className="paper-wrap" id="section20">
                                <section className="paper" >
                                    <div className="paper-title">
                                        <h2><FormattedMessage id="whitepaper" /></h2>
                                    </div>
                                    <div className="paper-link">
                                        {props.whitePaper.map((item, i) => {
                                            return (
                                                <a href={item.link} target="_blank" key={i}>
                                                    <FormattedMessage id={item.text} />
                                                </a>
                                            )
                                        })}
                                    </div>
                                </section>
                            </div>
                            {/* WHITEPAPER */}

                            {/* ROADMAP */}
                            <div className="roadmap-wrap">
                                <section className="roadmap">
                                    <div className={`roadmap-title`} id="section4" ref={props.roadmapTitle}>
                                        <h2><FormattedMessage id="roadmap" /></h2>
                                    </div>
                                    <div className={`roadmap-img web`} ref={props.roadmapContent}>
                                        <img src={require("../../images/roadmap2.png")}/>
                                    </div>
                                    <div className={`roadmap-img mobile`} ref={props.roadmapContentM}>
                                        <img src={require("../../images/mb_roadmap.png")}/>
                                    </div>
                                </section>
                            </div>
                            {/* ROADMAP */}

                            {/* TEAM */}
                            <div className="team-wrap">
                                <section className="team" id="section5">
                                    <div className={`team-title`} ref={props.teamTitle}>
                                        <h2><FormattedMessage id="team" /></h2>
                                    </div>
                                    <div className={`team-desc`} ref={props.teamList}>
                                        <div className="team-desc-list">
                                            <ul>
                                                {props.team1.map((item, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <div className={item.className}>
                                                                <img src={require(`../../images/teams/${item.image}`)} />
                                                            </div>
                                                            <div className={item.className2}>
                                                                <strong>{item.name}</strong>
                                                                <em>{item.position}</em>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <div className="team-desc-paging">
                                            {/* 페이징은 여기 */}
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {/* TEAM */}

                            {/* PARTNERS */}
                            <div className="partners-wrap">
                                <section className="partners">
                                    <div className={`partners-title`} ref={props.partnerTitle1}>
                                        <h2>AIPE Partners</h2>
                                    </div>
                                    <div className={`partners-logo`} ref={props.partnerContent1}>
                                        <ul>
                                            <li className="nbp">
                                                <a href="javascript:void(0)">
                                                    <img src={require(`../../images/nbp.jpg`)}/>
                                                </a>
                                            </li>
                                            <li className="coinbene">
                                                <a href="javascript:void(0)">
                                                    <img src={require(`../../images/coinbene.png`)}/>
                                                </a>
                                            </li>
                                            <li className="blockinside">
                                                <a href="javascript:void(0)">
                                                    <img src={require(`../../images/blockinside.png`)}/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                            {/* PARTNERS */}

                            {/* MEDIA */}
                            <div className="media-wrap">
                                <section className="media" id="section6">
                                    <div className={`media-title`} ref={props.mediaTitle}>
                                        <h2><FormattedMessage id="media" /></h2>
                                    </div>
                                    <div className={`media-list`} ref={props.mediaList}>
                                        <div className="contents">
                                            <ul>
                                                {props.media1.map((item, i) => {
                                                    return (
                                                    <li key={i}>
                                                            <a href={item.url} target="_blank">
                                                                <div className={item.classNameWrap}>
                                                                    <div className={item.className}>
                                                                    </div>
                                                                </div>
                                                                <div className={item.className2}>
                                                                    <div className={item.className2_1}>
                                                                        <strong>
                                                                            {item.title}
                                                                        </strong>
                                                                    </div>
                                                                    <div className={item.className2_2}>
                                                                        <span className={item.className2_2_1}>{item.date}</span>
                                                                        <span className={item.className2_2_2}>{item.writer}</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <div className="media-list-paging">
                                            {/* 페이징은 여기 */}
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {/* MEDIA */}

                            {/* FAQ */}
                            <div className="faq-wrap">
                                <section className="faq" id="section7">
                                    <div className="faq-title">
                                        <h2><FormattedMessage id="faq" /></h2>
                                    </div>
                                    <div className="faq-list">
                                        <ul>
                                            {props.faq.map((item, i) => {
                                                return (
                                                    <li onClick={() => props.handleActiveFaq(item.num)} key={i}>
                                                        <a href="javascript:void(0)" className={props.typeFaq === item.num ? "active" : ""}>
                                                            <FormattedMessage id={item.text1} />
                                                        </a>
                                                        <div className={`desc ${props.typeFaq === item.num ? "active" : ""}`}>
                                                            <p>
                                                                <FormattedMessage id={item.text2} />
                                                            </p>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </section>
                            </div>
                            {/* FAQ */}
                        </div>
                        {/* CONTAINER */}

                        {/* FOOTER */}
                        <div className="footer-wrap">
                            <footer className="footer">
                                <div className="footer-sns">
                                    <a href={lanTelgramLink()} target="_blank" className="ico-tele" />
                                    <a href="https://medium.com/cosmicbc" target="_blank" className="ico-medium" />
                                    <a href="https://twitter.com/AIPE_official" target="_blank" className="ico-twitter" />
                                    <a href="https://www.youtube.com/channel/UC6w2g-waOQ0UzSvL4WEVFQw" target="_blank" className="ico-youtube" />
                                    <a href="https://open.kakao.com/o/gxoWNPkb" target="_blank" className="ico-kakaco" />
                                    <a href="https://www.reddit.com/r/CosmicBC/" target="_blank" className="ico-reddit" />
                                </div>  
                                <div className="footer-copy">
                                    <div className = "test"> 
                                            <div className="flex-column">  
                                                <div className="address">
                                                    <ul className="flex"> 
                                                        <li>
                                                            <img className="mapIcon" src={require(`../../images/ic-map.svg`)}/>
                                                        </li>
                                                        <li>
                                                            3 Fraser Street, DUO Tower #05-21, Singapore 189352  
                                                        </li> 
                                                    </ul>
                                                    <br />
                                                    <div className="copyRight">
                                                        ©2019 CosmicBC Pte., Ltd. All rights reserved.     
                                                    </div> 
                                                </div>                      
                                            </div>
                                            <div className="cosmic">
                                                <img  src={require(`../../images/footer_logo.png`)}/>
                                            </div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                        {/* FOOTER */}
                    </>
                </IntlProvider>
                :
                <div className="loader-wrap">
                    <img src={require("../../images/loader.gif")} className="loader"/>
                </div>
            }
        </>
    )
};

export default OnePage;