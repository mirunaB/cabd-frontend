import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Grid, MuiThemeProvider, Paper} from "@material-ui/core";
import MyForm from "./components/MuForm/MyForm";
import Table from "./components/Table";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

class App extends React.Component {

  state = {
    rows: []
  }

  componentDidMount(){
    this.getAllCarte();
  }

  getAllCarte = () => {
    fetch('http://localhost:8080/carte', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
    })
  .then(response => response.json())
  .then(data => this.setState({rows: data}));
  }

  getAllIstoric = () => {
    fetch('http://localhost:8080/istoric', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
    })
  .then(response => response.json())
  .then(data => this.setState({rows: data}));
  }

  adaugaCarte = (carte) => {
    fetch('http://localhost:8080/carte', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(carte)
      })
    .then(response => response.json())
    .then(data => this.setState({rows: data}));
  }

  actualizeazaCarte = (carte) => {
    fetch('http://localhost:8080/carte', {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(carte)
      })
    .then(response => response.json())
    .then(data => this.setState({rows: data}));
  }

  stergeCarte = (id) => {
    fetch(`http://localhost:8080/carte/${id}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then(response => response.json())
    .then(data => this.setState({rows: data}));
  }

  getPerioadaMax = () => {
    fetch('http://localhost:8080/istoric/perioada/min', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
    })
  .then(response => response.json())
  .then(data => this.setState({rows: data}));
  }

  determinaStare = (moment) => {
    fetch('http://localhost:8080/istoric/stare', {
        method: 'POST', 
        headers: {
          'Content-Type': 'text/plain'
        },
        body: moment
      })
    .then(response => response.json())
    .then(data => this.setState({rows: data}));
  }

  getPretDiff = () => {
    fetch('http://localhost:8080/istoric/pret', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
    })
  .then(response => response.json())
  .then(data => this.setState({rows: data}));
  }
  

  render() {

    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Container>
              <Grid container>
                <Grid item xs={4}>
                  <MyForm 
                  adaugaCarte={this.adaugaCarte}
                  stergeCarte={this.stergeCarte}
                  actualizeazaCarte={this.actualizeazaCarte}
                  getPerioadaMax={this.getPerioadaMax}
                  determinaStare={this.determinaStare}
                  getPretDiff={this.getPretDiff}
                  getCarti={this.getAllCarte}
                  getIstoric={this.getAllIstoric}
                />
                </Grid>
                <Grid item xs={8}>
                  <Table rows={this.state.rows} />
                </Grid>
              </Grid>
            </Container>
          </ThemeProvider>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
