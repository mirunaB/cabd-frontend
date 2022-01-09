import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { Button, Paper, Typography } from "@material-ui/core";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Divider } from "@material-ui/core";

const Form = styled.form`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(3)}px;
`;

const Wrapper = styled(Paper)`
  margin-top: ${({ theme }) => theme.spacing(8)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(3)}px;
`;

const StyledGridCol = styled(Grid)`
  padding: 8px;
  & > div {
    background: #fff;
  }
`;

const StyledContainer = styled(Container)`
  max-width: 400px;
`;

const MyForm = (props) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    condition: "",
    price: 0,
    moment: "",
  });

  return (
    <StyledContainer>
      <Wrapper>
        <Form noValidate>
          <Grid container spacing={2}>
            <Typography variant="h5" color="secondary">Detalii carte</Typography>
            <StyledGridCol item md={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setFormData({ ...formData, id: e.target.value })
                }
                value={formData.id}
                id="id"
                label="Id carte"
                name="id"
              />
            </StyledGridCol>
            <StyledGridCol item md={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                value={formData.title}
                id="title"
                label="Titlu"
                name="title"
              />
            </StyledGridCol>
            <StyledGridCol item md={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setFormData({ ...formData, condition: e.target.value })
                }
                value={formData.condition}
                id="condition"
                label="Stare"
                name="condition"
              />
            </StyledGridCol>
            <StyledGridCol item md={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                value={formData.price}
                id="price"
                label="Pret"
                name="price"
                type="number"
              />
            </StyledGridCol>
            <Grid item xs={12} sm={4}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => props.adaugaCarte({titlu: formData.title, stare: formData.condition, pret: formData.price})}
                disabled={formData.tableName === ""}
              >
                Add
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => props.actualizeazaCarte({id:formData.id, titlu: formData.title, stare: formData.condition, pret: formData.price})}
                disabled={formData.tableName === ""}
              >
                Update
              </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => props.stergeCarte(formData.id)}
                disabled={formData.tableName === ""}
                style={{
                  padding: "8px 2px"
                }}
              >
                Delete
              </Button>
            </Grid>

            <Typography variant="h5" color="secondary">Rapoarte</Typography>
            <StyledGridCol item md={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setFormData({ ...formData, moment: e.target.value })
                }
                value={formData.moment}
                id="moment"
                label="Moment"
                name="moment"
              />
            </StyledGridCol>

            <Grid item xs={12} sm={4}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => props.determinaStare(formData.moment)}
                disabled={formData.tableName === ""}
                style={{
                  padding: "30px 5px"
                }}
              >
                Determina stare
              </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => props.getPerioadaMax()}
                disabled={formData.tableName === ""}
                style={{
                  padding: "30px 5px",
                  "&:hover": {
                    color: "#fffff !important",
                  }
                }}
              >
                Perioada max
              </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => props.getPretDiff()}
                disabled={formData.tableName === ""}
                style={{
                  padding: "30px 5px"
                }}
              >
                Diferente pret
              </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => props.getCarti()}
                disabled={formData.tableName === ""}
                style={{
                  padding: "30px 5px"
                }}
              >
                Afiseaza carti
              </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => props.getIstoric()}
                disabled={formData.tableName === ""}
                style={{
                  padding: "30px 5px"
                }}
              >
                Afiseaza istoric
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Wrapper>
    </StyledContainer>
  );
};

export default MyForm;
