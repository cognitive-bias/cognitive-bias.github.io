import styles from './styles';
var React = require('react');
var ReactDOM = require('react-dom');
var Block = require('react-blocks');
var NotificationSystem = require('react-notification-system');
var SwitchButton = require( 'react-switch-button' );

//let { flexible } = styles;
let { wrap } = styles;
let { toplevel } = styles;
let { secondlevel } = styles;
let { objblock } = styles;

var data = null

var locale = "Ru"

function lattr(obj, attr, locale){
    return obj[attr+locale]
}

var _topLevelEntryList = null;

var TopLevelEntryList = React.createClass({
    componentDidMount: function() {
        _topLevelEntryList = this
    },
    render: function () {
        var elist = this.props.node.children.map(function (e){
              var name = lattr(e, "name", locale)
              if ( e.label != "todo") {
                  return <TopLevelEntry node={e} key={name.replace(/ /g, "")} />
              }
        })
        return ( <Block>
                    <NotificationSystem ref="notificationSystem" />
                    <Block style={wrap.block}>{elist}</Block>
                </Block> )
    }
});

var TopLevelEntry = React.createClass({
    render: function () {
        var node = this.props.node
        var name = lattr(node, "name", locale)
        var elist = node.children.map(function (e){
            var name = lattr(e, "name", locale)
            if (name != undefined){
                return <SecondLevelEntryList node={e} key={name.replace(/ /g, "")} />
            }
        })
        return (<Block style={toplevel.entry}>
                    <Block style={toplevel.header}>{name}</Block>
                    {elist}</Block>)
    }
});

var SecondLevelEntryList = React.createClass({
    render: function () {
        var tname
        var node = this.props.node
        var elist = node.children.map(function (e){
          var n = lattr(e, "name", locale)
          if (Array.isArray(n)){
              var iad = n[0].replace(/ /g, "")
          } else {
              var iad = n.replace(/ /g, "")
          }
          return <SecondLevelEntry node={e} key={iad} />
        })
        var name = lattr(node, "name", locale)
        if (Array.isArray(name)){
              tname = name[0]
        } else {
              tname = name
        }
        return <Block style={secondlevel.entry}>
        <Block style={secondlevel.header}>{tname}</Block>
        {elist}
        </Block>
    }
})

var WikiLink = React.createClass({
    render: function (){
      return (
              <Block style={{padding: 5}}>
              <a href={this.props.href}>{this.props.href}</a>
              </Block>
             )

    }
})

var SecondLevelEntry = React.createClass({
    _notificationSystem: null,
    handleClick: function () {
        this._notificationSystem = _topLevelEntryList.refs.notificationSystem
        var wiki = lattr(this.props.node, "wiki", locale)
        this._notificationSystem.addNotification({
          message: lattr(this.props.node, "desc", locale),
          title: lattr(this.props.node, "name", locale),
          children: (
                  <WikiLink href={wiki} />
                  ),
          level: 'success'
        });
    },
    render: function () {
        var node = this.props.node
        var name = lattr(node, "name", locale)
        var tname
        if (Array.isArray(name)){
              tname = name[0]
        } else {
              tname = name
        }
        return (<Block style={objblock} onClick={this.handleClick}>{tname}</Block>)
    }
})

var RootComponent = React.createClass({
    locale: locale,
    switchLocale: function() {
        if (this.locale == 'Ru'){
            this.locale = 'En'
        } else {
            this.locale = 'Ru'
        }
        locale = this.locale
        this.setState({'locale': locale})
    },
    render: function () {
        return (
              <Block>
                  <SwitchButton onChange={this.switchLocale} label="Русский" labelRight="English"/>
                  <TopLevelEntryList node={data} />
              </Block>
              )
    }
})

axios.get('data/cognitive-bias-cheat-sheet-ru.json')
      .then(function (response) {
          //var resp =  <TopLevelEntryList node={response.data} />
          data = response.data
          var state = false
          if (locale == "En") {
              state = true
          }
          ReactDOM.render(
              <RootComponent />,
              document.getElementById("root"));
      })
      .catch(function (error) {
              console.log(error);
                });
