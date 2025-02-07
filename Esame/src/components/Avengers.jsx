import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Avengers extends Component {
  state = {
    displayMovies: [],
  };

  fetchMovies = () => {
    fetch(" http://www.omdbapi.com/?apikey=d8c0d897&s=avengers")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore chiamata");
        }
      })
      .then((movies) => {
        console.log(movies);
        this.setState({
          displayMovies: movies.Search.slice(0, 6),
        });
      })
      .catch((e) => {
        console.log("errore!", e);
      });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <h4 className="mt-4">New releases</h4>

          {this.state.displayMovies.map((movie) => {
            return (
              <Col md={2} className="mb-2  px-1" key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.title} className="img-fluid" />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Avengers;
