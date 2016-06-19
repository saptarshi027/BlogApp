var React=require('react');


var PostFormMain=React.createClass({
  handleTitleChange: function(e) {
    this.setState({Title: e.target.value});
  },
  handleContentChange: function(e) {
    this.setState({Content: e.target.value});
  },
  handleSavePost: function(e) {
     e.preventDefault();
     //this.props.handleCloseModal();

     var Content = this.state.Content;
     var Title = this.state.Title;
     if (!Title || !Content) {
         return;
     }
    $.ajax({
     url: "http://localhost:8080/api/posts/add",
     dataType: 'json',
     type: 'POST',
     data: this.state,
     success: function(data) {
       console.log('saved');

     }.bind(this),
     error: function(xhr, status, err) {
       console.error("http://localhost:8080/api/posts/add", status, err.toString());
     }.bind(this)

     });
   //transition.redirect('/login', null, { redirect: transition.path });
   },
   handleAfterPost: function(e){
     e.preventDefault();
   },
  render: function(){
    return(
      <div className=" container col-lg-10" id="PostFormMain">
        <form method="POST" action="#" className="form-horizontal" id="myform" onSubmit={this.handleSavePost}>
          <input className="col-lg-4 form-control" ref="title" type="text" id="t" name="Title" onChange={this.handleTitleChange} placeholder="Title Goes Here"/><br/><br/>
          <textarea className="col-lg-6 form-control" ref="content" rows="4" name="Content" onChange={this.handleContentChange} placeholder="Want Do You Want The World To Know Today "></textarea>
          <p><input className="btn btn-primary" type="submit" value="Let It Know" /></p>
          </form>
      </div>);
  }
});



module.exports=<PostFormMain />;
