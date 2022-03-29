import React from "react";
import { useState, useRef } from "react";
import { Box, Grid } from "@mui/material";
import "./App.css";
import Navbar from "./navbar";
import Banner from "./banner";
import Rating from '@mui/material/Rating';
import Footer from './footer.js'
export default function App(props) {
  const [value, setValue] = useState(5);
  const [state, setState] = useState([
    {
      Id: "1",
      Img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      Item_Name: "Fancy Product",
      Item_Price: "$40.00 - $80.00",
      Offer_Price: null,
      Button_Name: "View Options",
      selected: false,
      selected_qty: 1,
    },
    {
      Id: "2",
      Img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      Item_Name: "Special Item",
      Item_Price: "$20.00",
      Offer_Price: "$18.00",
      Button_Name: "Add to cart",
      selected: false,
      selected_qty: 1,
    },
    {
      Id: "3",
      Img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      Item_Name: "Sale Item",
      Item_Price: " $50.00",
      Offer_Price: "$25.00",
      Button_Name: "Add to cart",
      selected: false,
      selected_qty: 1,
    },
    {
      Id: "4",
      Img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      Item_Name: "Popular Item",
      Item_Price: "$40.00",
      Offer_Price: null,
      Button_Name: "Add to cart",
      selected: false,
      selected_qty: 1,
    },
    {
      Id: "5",
      Img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      Item_Name: "Sale Item",
      Item_Price: "$50.00",
      Offer_Price: "$25.00",
      Button_Name: "Add to cart",
      selected: false,
      selected_qty: 1,
    },
    {
      Id: "6",
      Img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      Item_Name: "Fancy Product",
      Item_Price: "$120.00 - $280.00",
      Offer_Price: null,
      Button_Name: "Add to cart",
      selected: false,
      selected_qty: 1,
    },
    {
      Id: "7",
      Img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      Item_Name: "Special Item",
      Item_Price: "$20.00",
      Offer_Price: "$18.00",
      Button_Name: "Add to cart",
      selected: false,
      selected_qty: 1,
    },
    {
      Id: "8",
      Img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      Item_Name: "Popular Item",
      Item_Price: "$40.00",
      Offer_Price: null,
      Button_Name: "Add to cart",
      selected: false,
      selected_qty: 1,
    },
  ]);
  const [cart_qty, setCart_qty] = useState(0);

  // function Cart(e) {
  //   if (e.Button_Name === 'View Options') {
  //     return View_Options(e);
  //   } else {
  //     return Add_to_cart(e);
  //   }
  // }
  function View_Options(e) {
    console.log("view option function");
  }
  function Add_to_cart(e) {
    if(e.Button_Name==="Add to cart"){
    let new_arr = [...state];
    setCart_qty(0);
    setCart_qty(cart_qty + 1);
    new_arr[e.Id - 1].selected = true;
    setState(new_arr);
    }
  }

  function Plus_btn(e) {
    if (e.selected_qty < 10) {
      setCart_qty(cart_qty + 1);
      e.selected_qty++;
    } else {
      alert("Item Limit Reached!");
    }
  }
  function Minus_btn(e) {
    if (e.selected_qty > 1) {
      setCart_qty(cart_qty - 1);
      e.selected_qty--;
    } else {
      let new_state = { ...state };
      let index = state.findIndex((data) => data.Id == e.Id);
      new_state[index].selected = false;
      let new_arr = Object.values(new_state);
      setState(new_arr);
      if (cart_qty === 1) {
        setCart_qty(0);
      } else {
        setCart_qty(cart_qty - 1);
      }
    }
  }

  return (
    <div className="main_container">
      <Navbar cart_qty={cart_qty} />
      <Banner />
      <div className="container">
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Grid
            container
            sx={{ justifyContent: "space-evenly", rowGap: 6 }}
            spacing={6}
            columns={{ xs: 1, sm: 2, md: 32 }}
          >
            {state.map((e) => (
              <Grid item xs={1} sm={1} md={8} key={e.Id}>
                <div className={` item item${e.Id}`}>
                  <p className="sale">Sale</p>
                  <img src={e.Img} alt="img" />
                  <h2>{e.Item_Name}</h2>
                  <div className={`rating rating${e.Id}`}><Rating name="read-only" size="small" value={value} readOnly /></div>
                  <p className="price">
                    <span>{e.Item_Price}</span> {e.Offer_Price}
                  </p>
                  <div className={` btn_div btn_div${e.Id}`}>
                    {e.selected === true && e.Button_Name === "Add to cart" ? (
                      <div className="plus_minus_div">
                        <button
                          className="minus_btn"
                          onClick={() => Minus_btn(e)}
                        >
                          <span className="minus">-</span>
                        </button>{" "}
                        &nbsp;
                        <span className={`item_qty${e.Id}`}>
                          {e.selected_qty}
                        </span>{" "}
                        &nbsp;
                        <button
                          className="plus_btn"
                          onClick={() => Plus_btn(e)}
                        >
                          <span className="plus">+</span>
                        </button>
                      </div>
                    ) : (
                      <button
                        className={`button button${e.Id}`}
                        onClick={() => Add_to_cart(e)}
                      >
                        {e.Button_Name}
                      </button>
                    )}
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <Footer/>
    </div>
  );
}
