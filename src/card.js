
export default function Items(props){
    console.log(props)
    document.querySelector(".items").innerHTML+=`
    <div class="item${props.Id}">
        <img src=${props.Img}/>
        <h2>${props.Item_Name}</h2>
        <p>${props.Item_Price}</p>
        <button>${props.Button_Name}</button>
    </div>
    `
    return  document.querySelector(".items");
}