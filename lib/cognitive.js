var TopLevelEntry = React.createClass({
    render: function () {
        var node = this.props.node
        var id = node.name.replace(/ /g, "");
        var elist = node.children.map(function (e){
            if (e.name != undefined){
                return <SecondLevelEntryList node={e} key={e.name.replace(/ /g, "")} />
            }
        })
        return (<div className="topLevelEntry" id={id}>
                    <div className="topLevelEntryHeader">{node.name}</div>
                    {elist}</div>)
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

var SecondLevelEntry = React.createClass({
    handleClick: function () {
        console.log("click", this.props.node)
    },
    render: function () {
        var node = this.props.node
        var node
        if (Array.isArray(node.name)){
              name = node.name.join(" / ")
        } else {
              name = node.name
        }
        return (<div className="objblock" onClick={this.handleClick} id={this.key}>{name}</div>)
    }
})

var SecondLevelEntryList = React.createClass({
    render: function () {
        var id
        var name
        var node = this.props.node
        var elist = node.children.map(function (e){
          if (Array.isArray(e.name)){
              var iad = e.name[0].replace(/ /g, "")
          } else {
              var iad = e.name.replace(/ /g, "")
          }
          return <SecondLevelEntry node={e} key={iad} />
        })
        if (Array.isArray(node.name)){
              id = node.name[0].replace(/ /g, "");
              name = node.name.join(" / ")
        } else {
              name = node.name
              id = node.name.replace(/ /g, "");
        }
        return <div className="secondLevelEntry" id={id}>
        <div className="secondLevelEntryHeader">{name}</div>
        {elist}
        </div>
    }
})

var BiasCard = React.createClass({
    render: function () {
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
