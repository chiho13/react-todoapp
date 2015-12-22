var React = require('react');
var ListItem = require('./list-item')


module.exports = React.createClass({
  render:function() {

    return <div>
      {this.renderList()}
    </div>
  },
  renderList: function() {
    if(this.props.items && Object.keys(this.props.items).length === 0) {
      return <h4>
        Add a todo to get started.
      </h4>
    } else {
      var children = [];

      for (var key in this.props.items) {
        var item = this.props.items[key];
        key = item['.key'];

        children.push(
          <ListItem
            item = {item}
            key = {key}
             >
          </ListItem>
        )
      }

      return children;
    }
  }
});

//each key represents a single todo.
//loop over all the key
//each key, access the object it represents
//and the access the text propert
//puts inside the <li> tag
//puts inside a children and the renderered in the <ul> tag
