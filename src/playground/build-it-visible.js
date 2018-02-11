class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      visibility: false
    }
  }
  toggle() {
    this.setState((prevState)=> {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Toggle</h1>
        <button onClick = {this.toggle}>{this.state.visibility ? 'Hide' : 'Show'}</button>
        {this.state.visibility && (
          <div>
            <p>Wat</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));