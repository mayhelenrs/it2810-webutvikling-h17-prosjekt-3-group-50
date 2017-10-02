export class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({checked: !this.state.checked});
        console.log("HEI");
    }


    render() {
        const text = this.state.checked;

        handle
        return (
            <li key={this.props.index} onClick={this.props.handleClick}>
                <input type="checkbox" key={this.props.index} label={text} onClick={this.props.onClick}/>
                {this.props.value}
            </li>
        );
    }
}