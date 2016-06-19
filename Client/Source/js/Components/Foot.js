var React=require('react');


var Posts=React.createClass({
  render: function(){
    return(<div className="col-lg-12" id="myPosts">
    <div className="col-lg-6" id="footAboutUs"><h3>About us</h3>Hang In There A Bit!! Will update soon</div>
    <div className="col-lg-6" id="footContactUs"><h3>Contact us</h3>Email at: Bogged@blogged.com</div>
    </div>);
  }
});

module.exports=<Posts />;
