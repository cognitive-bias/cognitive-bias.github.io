var TopLevelEntry = React.createClass({
    render: function () {
        var node = this.props.node
        var id = node.name.replace(/ /g, "");
        var elist = node.children.map(function (e){
            if (e.name != undefined){
                return <SecondLevelEntryList node={e} key={e.name.replace(/ /g, "")} />
            }
        })
        return (<div id={id}>{node.name}{elist}</div>)
        return (<div />)
    }
})

var SecondLevelEntry = React.createClass({
    render: function () {
        var node = this.props.node
        var id = node.name.replace(/ /g, "");
        var elist = node.children.map(function (e){
        })
        return (<div id={id}>{node.name}</div>)
    }
})

var SecondLevelEntryList = React.createClass({
    render: function () {
        var id
        var node = this.props.node
        //console.log(node.children)
        var elist = node.children.map(function (e){
          /*if (Array.isArray(e.name)){
              id = node.name[0].replace(/ /g, "");
          } else {
              id = node.name.replace(/ /g, "");
              return <SecondLevelEntry node={e} key={e.name.replace(/ /g, "")} />
          } */
        })
        return <div id={id}>{node.name}{elist}</div>
    }
})
var TopLevelEntryList = React.createClass({
    render: function () {
        var elist = this.props.node.children.map(function (e){
              return <TopLevelEntry node={e} key={e.name.replace(/ /g, "")} />
        })
        return <div>{elist}</div>
    }
})

axios.get('data/cognitive-bias-cheat-sheet-ru.json')
  .then(function (response) {
      //var rootNode = <p>{response.data.name}</p>
      var resp =  <TopLevelEntryList node={response.data} />
      ReactDOM.render(
          resp,
          document.getElementById("root"));
  })
  .catch(function (error) {
          console.log(error);
            });
