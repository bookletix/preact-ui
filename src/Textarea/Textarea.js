import {h, Component} from 'preact';

export default class Textarea extends Component {
    render() {
        return (
            <div>
                <textarea>
                  {this.props.children}
                </textarea>
            </div>
        );
    }
}