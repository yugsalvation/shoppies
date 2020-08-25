import React, { Component } from "react";
import Search from "./search";
import "bootstrap/dist/css/bootstrap.css";
import "./search.css";
class SearchBar extends Component {
  state = { keywor: "" };
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
          <div class="col-sm-4"></div>
          <div class="col-sm-4">
            <h1>{this.state.keywor}</h1>
            <input
              type="text"
              class="form-control"
              ref={this.inputRef}
              onKeyUp={this.setKeywor}
            />
          </div>
          <div class="col-sm-4"></div>
        </div>
        <br />
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-6 ">
            <Search keyword={this.state.keywor} />
          </div>

          <div class="col-sm-3"></div>
        </div>
      </div>
    );
  }
  setKeywor = () => {
    this.setState({ keywor: this.inputRef.current.value });
    let k = this.state.keywor;
    // alert(k);
    //return k;
  };
}

export default SearchBar;
