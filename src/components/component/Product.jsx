import { Button, Grid, TablePagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import MuiCard from "../coreComponentd/MuiCard";
import { TableContainerDiv } from "../tableComponent/tableComponent";
import { useDispatch, useSelector } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";

import {
  setCartItem,
  setComponentData,
  setPageReduxdata,
  setRowsPerPageReduxData,
} from "../../store/action";

const images = [
  { url: "images/1.jpg" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];
function Product() {
  const masterData = useSelector((el) => el?.masterdata);
  const data = useSelector((el) => el?.data);
  const page = useSelector((el) => el?.page);
  const rowPerPage = useSelector((el) => el?.rowPerPage);

  // console.log(rowPerPage, "rowPerPage product page");

  const dispatch = useDispatch();
  const [Data, setData] = useState(10);

  const handleChangePage = (event, newPage) => {
    dispatch(setPageReduxdata(newPage));
  };

  const handleChangeRowsPerPage = (event) => {
    dispatch(setRowsPerPageReduxData(+event.target.value));
    setPageReduxdata(0);
  };
  const handleAdd = (el) => {
    dispatch(setCartItem(el));
  };

  useEffect(() => {
    const setMasterData = () => {
      const newData = masterData.slice(0, 12);
      dispatch(setComponentData(newData));
    };
    setMasterData();
  }, []);

  return (
    <>
      <TableContainerDiv>
        <Grid container spacing={2} sx={{ margin: "auto" }}>
          {masterData
            .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
            .map((el) => (
              <>
                <Grid item xs={2}>
                  <MuiCard
                    itemImg={el.image}
                    price={el.price}
                    ItemName={el.name}
                    description={el.description}
                    alt={el.url}
                    Share={"Share"}
                    Button={
                      <Button
                        variant="contained"
                        onClick={() => handleAdd(el)}
                        sx={{
                          width: "100%",
                          background: "blue",
                          color: "white",
                        }}
                      >
                        Add to cart
                      </Button>
                    }
                  />
                </Grid>
              </>
            ))}
        </Grid>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={masterData.length}
          rowsPerPage={rowPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainerDiv>
    </>
  );
}

export default Product;
