var Spinner = React.createClass({
  render: function () {
    var style = {
      display: this.props.spinning ? "block" : "none"
    };

    return (
      <img src={this.props.src} style={style}/>
    );
  }
});