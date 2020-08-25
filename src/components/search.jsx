import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Nominations from "./nominations";
class Search extends Component {
  state = {
    items: [],
    isLoaded: false,
    statekeyword: "",
    nominees: [],
  };
  inputRef = React.createRef();
  componentDidUpdate() {
    if (this.state.statekeyword == this.props.keyword) {
    } else {
      fetch(
        "https://www.omdbapi.com/?s=" +
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

    if (
      JSON.stringify(this.state.nominees) ===
        JSON.stringify(
          this.state.nominees.filter((item) => item.Id !== this.props.k4)
        ) ||
      this.state.nominees.length == 0
    ) {
    } else {
      let x = this.state.nominees.filter((item) => item.Id !== this.props.k4);

      this.setState(
        {
          nominees: x,
        },
        console.log(this.state.nominees)
      );
      let xs = document.getElementById(this.props.k4);
      xs.removeAttribute("disabled");
      console.log(this.props.k4);
    }
  }
  addNomination = (nomination, e) => {
    if (this.state.nominees.length > 4) {
      alert(
        "5 nominations done, remove any movie if you want to nominate an other one "
      );
      // this.props.k2("undefined");
    } else {
      this.setState({ nominees: [...this.state.nominees, nomination] }, () =>
        console.log("in search" + this.state.nominees)
      );

      let title = nomination.Title;

      console.log(this.state.nominees);
      e.target.setAttribute("disabled", "disabled");

      this.props.k2(nomination);
    }
  };
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
            <h3>Results for {this.props.keyword}</h3>
            <ul>
              {itemss.map((tag) => (
                <li key={tag.imdbID + "He"}>
                  <span>
                    {" "}
                    {tag.Title} ({tag.Year}){" "}
                    <button
                      type="button"
                      id={tag.imdbID}
                      className="btn btn-dark btn-sm"
                      onClick={(e) =>
                        this.addNomination(
                          {
                            Title: tag.Title,
                            Year: tag.Year,
                            Id: tag.imdbID,
                          },
                          e
                        )
                      }
                    >
                      Nominate
                    </button>
                  </span>
                  <br /> <br />
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default Search;
