import React, { Component } from "react";
import Search from "./search";
import "bootstrap/dist/css/bootstrap.css";
import "./search.css";
import Nominations from "./nominations";
import "./search.css";
class SearchBar extends Component {
  state = {
    keywor: "",
    nominees: [],
    removed: -1,
  };
  //   constructor(props) {
  //     super(props);
  //     this.setKeyword = this.setKeyword.bind(this);
  //   }
  inputRef = React.createRef();
  render() {
    //console.log(this.state.keywor);

    return (
      <div>
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-8">
            <h1 align="center">Welcome to Shoppies</h1>
            <input
              type="text"
              class="form-control"
              ref={this.inputRef}
              onKeyUp={this.setKeywor}
            />
          </div>
          <div class="col-sm-2"></div>
        </div>
        <br />
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-4 searchresults">
            <Search
              keyword={this.state.keywor}
              k2={this.addNomination}
              k4={this.state.removed}
            />
          </div>

          <div class="col-sm-4 nominations">
            {" "}
            <Nominations
              nominees={this.state.nominees}
              k3={this.deleteNomination}
            />
          </div>
          <div class="col-sm-2"></div>
        </div>
        <div class="footer">
          <a href="https://www.linkedin.com/in/yug-rawal/" target="_blank">
            Linked In:Yug Rawal
          </a>
        </div>
      </div>
    );
  }
  setKeywor = () => {
    this.setState({ keywor: this.inputRef.current.value });
    let k = this.state.keywor;
  };
  deleteNomination = (nomination) => {
    this.setState({
      nominees: this.state.nominees.filter((item) => item.Id !== nomination),
      removed: nomination,
    });
  };
  addNomination = (nomination) => {
    if (this.state.nominees.length > 4) {
    } else {
      this.setState(
        { nominees: [...this.state.nominees, nomination] },
        console.log("in bar" + this.state.nominees)
      );
    }
  };
  addNomination2 = (nomination) => {
    if (this.state.nominees.length > 5) {
    } else {
      this.setState({ nominees: nomination });
    }
  };
}

export default SearchBar;
