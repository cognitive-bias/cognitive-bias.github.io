
axios.get('data/cognitive-bias-cheat-sheet-ru.json')
  .then(function (response) {
          console.log(response);
            })
  .catch(function (error) {
          console.log(error);
            });
/*
ReactDOM.render(React.createElement(ReactJSONViewer, {
        json: sheetData
}), document.getElementById("root"));
*/
