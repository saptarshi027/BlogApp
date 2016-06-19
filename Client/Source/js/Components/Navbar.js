var React=require('react');
// var Link = require('react-router').Link;

var Navbar=React.createClass({
  render: function(){
    return(
      <div className="navbar">
        <ul className="nav navbar-nav" id="mynav" >
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">List</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    );
  }
});

module.exports=<Navbar />;
