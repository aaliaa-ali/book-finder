import React from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { textAlign } from "@mui/system";

function BooksContainer() {
  const { books, isLoading, error } = useSelector((state) => state.books);

  console.log(books, isLoading, error);
  {
    if (!books && error) {
      return <h1 align="center">Try another Key</h1>;
    } else {
      return (
        <div>
          <Grid
            container
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {books?.map((book) => {
              return (
                <Grid item xs={4}>
                  <BookCard {...book.volumeInfo} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      );
    }
  }
}

export default BooksContainer;
