import { h, Component } from 'preact';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
    }

    onChange = e => {
        this.setState({ value: e.target.value });
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default Input;