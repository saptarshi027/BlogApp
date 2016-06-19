var React = require('react');

var Posts = React.createClass({

    loadPostsFromServer: function(){
        $.ajax({
            url: "http://localhost:8080/api/posts",
            dataType: 'json',
            cache: false,
            success: function(data) {
              console.log(data);
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("http://localhost:8080/api/posts", status, err.toString());
            }.bind(this)
        });
    },

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        this.loadPostsFromServer();
        setInterval(this.loadPostsFromServer, 1000);
    },


    render : function(){
      var posterIds=[];
      this.state.data.forEach(function(post){
        if(post.Title != null){
          posterIds.push(
            <div className="posterId col-lg-9" id="posterId">
              <div className="userImage col-lg-2">
                <img src="imgs/userimg.png" className="img-rounded" alt="User Image" width="70" height="70"/>
              </div>
              <div className="postContent col-lg-7">
                <h4>{post.Title}</h4>
                <p>{post.Content}</p>
              </div>
            </div>
          );
        }
      });
        return(
            <div className="postMain col-lg-12" id="postMain">
            {posterIds}
                </div>
        );
    }
});

module.exports = <Posts /> ;
