import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { Button, Paper } from "@material-ui/core";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

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

const MyForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    condition: "",
    price: 0,
  });

  return (
    <StyledContainer>
      <Wrapper>
        <Form noValidate>
          <Grid container spacing={2}>
            <StyledGridCol item md={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setFormData({ ...formData, id: e.target.value })
                }
                value={formData.id}
                id="id"
                label="Book id"
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
                label="Title"
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
                label="Condition"
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
                label="Price"
                name="price"
                type="number"
              />
            </StyledGridCol>
            <Grid item xs={12} sm={4}>
              <Button
                color="primary"
                variant="outlined"
                onClick={() => console.log("click")}
                disabled={formData.tableName === ""}
              >
                Add
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                color="primary"
                variant="outlined"
                onClick={() => console.log("click")}
                disabled={formData.tableName === ""}
              >
                Update
              </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button
                color="primary"
                variant="outlined"
                onClick={() => console.log("click")}
                disabled={formData.tableName === ""}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Wrapper>
    </StyledContainer>
  );
};

export default MyForm;
