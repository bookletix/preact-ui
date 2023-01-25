import { h, Component } from 'preact';

import './style.css'

class Checkbox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="switch-container">
                <div class="switch">
                    <label htmlFor="switch">
                        <input type="checkbox" id="switch" {...this.props}/>
                        <span class="indicator"></span>
                        <span class="switch-label bx-form-label">{this.props.label}</span>
                    </label>
                </div>
            </div>
        )
    }
}

export default Checkbox;