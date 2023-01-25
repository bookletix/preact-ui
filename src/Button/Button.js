import {h, Component} from 'preact';
import Spinner from '../Spinner/Spinner'

import './style.css'

class BxButton extends Component {
    render() {
        const {
            text,
            children,
            loading,
            color
        } = this.props;

        const multiChildren = children ? 'button-content_mod' : '';

        let colorClass = "ui-bx-btn-blue"
        switch (color) {
            case "purpl":
                colorClass = "ui-bx-btn-purpl";
                break
            case "white":
                colorClass = "ui-bx-btn-white";
                break
        }

        return (
            <button className={colorClass}
                    disabled={this.props.disabled || loading} {...this.props}>
                <div className={`button-content ${multiChildren}`}>
                    <div className="button-content__inner">
                        {loading ? (
                            <Spinner/>
                        ) : (
                            <span>
                            {children}
                                {text && <span>{text}</span>}
                        </span>
                        )}
                    </div>
                </div>
            </button>
        );
    }
}

export default BxButton;