import { h, Component } from 'preact';

class Dropdown extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            value: ''
        };
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    render() {
        const { options } = this.props;
        const { isOpen, value } = this.state;

        return (
            <div className="dropdown">
                <div
                    className="dropdown__selected"
                    onClick={this.toggleDropdown}
                >
                    {value || 'Select an option'}
                </div>
                {
                    isOpen &&
                    <ul className="dropdown__options">
                        {
                            options.map(option => (
                                <li
                                    className="dropdown__option"
                                    key={option}
                                    onClick={this.handleChange}
                                >
                                    {option}
                                </li>
                            ))
                        }
                    </ul>
                }
            </div>
        );
    }
}

export default Dropdown;