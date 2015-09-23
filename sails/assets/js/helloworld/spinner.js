var Spinner = React.createClass({displayName: "Spinner",
  render: function () {
    var style = {
      visibility: this.props.spinning ? "visible" : "hidden"
    };

    return (
      React.createElement("img", {src: this.props.src, style: style})
    );
  }
});