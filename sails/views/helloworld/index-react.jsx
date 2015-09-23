var OrganiserList = React.createClass({
  getInitialState : function () {
    return { organisers: [], loadingCount : 0 };
  },

  handleClick : function (thing) {
    console.log("Going to delete", thing);
    this.setState({loadingCount: this.state.loadingCount + 1});
    setTimeout(function () {
      this.setState({loadingCount: this.state.loadingCount - 1});
    }.bind(this), 1500)
  },

  componentDidMount: function () {
    $.get(this.props.source, function (result) {
      if(this.isMounted()) {
        this.setState({ organisers: result });
      }
    }.bind(this));
  },

  render: function () {
    var that = this;
    return (
      <div>
        <Spinner spinning={this.state.loadingCount > 0} src="/images/spinner.gif" />
        <ul>
          {this.state.organisers.map(function (thing) {
            return <li key={thing.id} onClick={that.handleClick.bind(that, thing)}>{thing.name}</li>
          })}
        </ul>
      </div>
    );
  }
});

React.render(
  <OrganiserList source="/organisers" />,
  document.getElementById('example')
);

