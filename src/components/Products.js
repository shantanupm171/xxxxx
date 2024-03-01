import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Product = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const categories = [
    {
      id: 1,
      name: "Fruits",
      subcategories: ["Apple", "Banana", "Orange"],
    },
    {
      id: 2,
      name: "Vegetables",
      subcategories: ["Carrot", "Broccoli", "Spinach"],
    },
    {
      id: 3,
      name: "Dairy",
      subcategories: ["Milk", "Cheese", "Yogurt"],
    },
  ];

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={3}>
            {categories.map((category) => (
              <Grid item key={category.id}>
                <div>
                  <button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    {category.name}
                  </button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    {category.subcategories.map((subcategory, index) => (
                      <MenuItem key={index} onClick={handleClose}>
                        {subcategory}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
      {/* Product list and other content */}
    </div>
  );
};

export default Product;
