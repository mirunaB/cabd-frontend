import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import { MuiThemeProvider } from "@material-ui/core";
import Table from "./components/Table";
import MyForm from "./components/MuForm/MyForm";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Container>
            <MyForm />
            <Table />
          </Container>
        </ThemeProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
