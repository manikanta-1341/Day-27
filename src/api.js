import Items from "./card"

export  function Arr(){
  let items_arr=[
    {
        Id:"1",
        Img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        Item_Name:"Fancy Product",
        Item_Price:"$40.00 - $80.00",
        Button_Name:"View Options"
  
    },
    {
        Id:"2",
        Img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        Item_Name:"Special Item",
        Item_Price:"$20.00",
        Button_Name:"Add to cart"
  
    },
    {
        Id:"3",
        Img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        Item_Name:"Sale Item",
        Item_Price:" $50.00",
        Button_Name:"Add to cart"
  
    },
    {
        Id:"4",
        Img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        Item_Name:"Popular Item",
        Item_Price:"$40.00",
        Button_Name:"Add to cart"
  
    },
    {
        Id:"5",
        Img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        Item_Name:"Sale Item",
        Item_Price:"$50.00",
        Button_Name:"Add to cart"
  
    },
    {
        Id:"6",
        Img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        Item_Name:"Fancy Product",
        Item_Price:"$120.00 - $280.00",
        Button_Name:"Add to cart"
  
    },
    {
        Id:"7",
        Img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        Item_Name:"Special Item",
        Item_Price:"$20.00",
        Button_Name:"Add to cart"
  
    },
    {
        Id:"8",
        Img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        Item_Name:"Popular Item",
        Item_Price:"$40.00",
        Button_Name:"Add to cart"
  
    }
  ]
  return items_arr
}

export default function Api(items_arr){
  console.log(items_arr)
  items_arr.forEach((e)=>{
   <Items Id={e.Id} Img={e.Img} Item_Name={e.Item_Name} Item_Price={e.Item_Price} Button_Name={e.Button_Name}/>
  })
  return <Items/>
}