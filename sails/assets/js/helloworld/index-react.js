      var HelloWorld = React.createClass({displayName: "HelloWorld",
        render: function() {
          return (
            React.createElement("p", null, 
              "Hi There!!!, ", React.createElement("input", {type: "text", placeholder: "Your name here"}), "!" + ' ' +
              "It is ", this.props.date.toTimeString()
            )
           );
         }
      });

      setInterval(function() {
        React.render(
           React.createElement(HelloWorld, {date: new Date()}),
           document.getElementById('example')
        );
      }, 500);

