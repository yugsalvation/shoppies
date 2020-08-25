import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Search extends Component {
  state = {
    items: [],
    isLoaded: false,
    statekeyword: "",
    nominees: [],
  };
  componentDidUpdate() {
    if (this.state.statekeyword == this.props.keyword) {
    } else {
      fetch(
        "http://www.omdbapi.com/?s=" +
          this.props.keyword +
          "&type=movie&apikey=ec3ae572"
      )
        .then((res) => res.json())
        .then((json) =>
          this.setState({
            isLoaded: true,
            items: json,
            statekeyword: this.props.keyword,
          })
        );
      console.log(this.props.keyword);
    }
  }
  render() {
    var isLoaded = this.state.isLoaded;
    var itemss = this.state.items.Search;
    if (!isLoaded) {
      return <div>not loaded</div>;
    } else if (itemss == undefined) {
      return <div>No results found or too many results</div>;
    } else {
      //console.log(this.props.keyword);
      return (
        <div>
          <div className="row">
            <div class="col-sm-6 searchresults">
              <h3>results for {this.state.keywor}</h3>
              <ul>
                {itemss.map((tag) => (
                  <li key={tag.imdbID}>
                    {tag.Title} ({tag.Year})
                  </li>
                ))}
              </ul>
            </div>
            <div class="col-sm-6 nominations">
              <h3>hello</h3>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Search;
