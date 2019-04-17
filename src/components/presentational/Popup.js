import React, {Component} from 'react';
import './popup.scss';

class Popup extends Component {
    render() {
        return (
            <div className="popup-wrap">
                <div className="popup">
                    <a href="javascript:void(0)" className="btn-x" role="button" onClick={this.props.handlePopupClose}/>
                    <div className="popup-img">
                        <img src={require("../../images/pop_txt_web_v2.png")} alt="meet up" className="web"/>
                        <img src={require("../../images/pop_txt_mobile.png")} alt="meet up" className="mobile"/>
                    </div>
                    <div className="popup-check btn_close">
                        <label>
                            <input type="checkbox" checked={this.props.isChecked} onChange={this.props.toggleChange}/>
                            <i/>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}
export default Popup;