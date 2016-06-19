var React=require('react');
var Posts=require('./Posts.js');
var PostFormMain=require('./PostFormMain.js');
var Navbar=require('./Navbar.js');
var Foot=require('./Foot.js');
var MainLayout=React.createClass({
  render: function(){

    return(<div>
      {Navbar}
      {PostFormMain}
      <div className="postsHeader col-lg-12"><h3>Latest Posts</h3></div>
      {Posts}
      {Foot}</div>);
  }
});

module.exports=<MainLayout />;
