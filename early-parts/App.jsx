class App extends React.Component {
  state = {
    name: "Ryu",
    age: 30
  };
  render() {
    return (
      <div className="app-content">
        <h1>Hello there</h1>
        <p>
          State: {this.state.name} age: {this.state.age}
        </p>
      </div>
    );
  }
}
