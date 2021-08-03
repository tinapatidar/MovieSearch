import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from "react-bootstrap";
import { movies } from "../actions";
import { connect } from "react-redux";
import { API_KEY } from "../secrets";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }
  search() {
    console.log("Movie: ", this.state.query);
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.query}`;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonObj) => {
        this.props.movies(jsonObj.results);
      });
  }
  render() {
    return (
      <div>
        <Form inline className="col-md-12 col-md-offset-4">
          <FormGroup>
            <ControlLabel>Search: </ControlLabel>{" "}
            <FormControl
              type="text"
              placeholder="Search any movie"
              onChange={(event) => this.setState({ query: event.target.value })}
            ></FormControl>{" "}
            <Button bsStyle="success" onClick={() => this.search()}>
              Submit
            </Button>
          </FormGroup>
        </Form>
        </div>
    );
  }
}
export default connect(null, { movies })(Search);