// Using JSX to express UI components.
var dropdown =
  React.createElement(Dropdown, null, 
    "A dropdown list", 
    React.createElement(Menu, null, 
      React.createElement(MenuItem, null, "Do Something"), 
      React.createElement(MenuItem, null, "Do Something Fun!"), 
      React.createElement(MenuItem, null, "Do Something Else")
    )
  );

render(dropdown);