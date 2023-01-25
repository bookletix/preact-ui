import { h,  Component } from 'preact';
import './style.css'

class Spinner extends Component {
    render() {
        return (
            <div>
                <div className={"bx-lds-ellipsis"}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Spinner;