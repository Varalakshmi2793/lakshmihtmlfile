function handleFormSubmit(event){
    event.preventDefault();
    const chocolatedetails={
        candyname: event.target.candyname.value,
        description: event.target.description.value,
        price: event.target.price.value,
        quantity: event.target.quantity.value
    };
    axios.post("https://crudcrud.com/api/8884879f7492473d8cfa30347967375d/chocolateshop", 
    chocolatedetails
    )
    .then((resolve)=> displayshopdetails(resolve.data))
    .catch((error)=> console.log(error));
    document.getElementById("candyname").value="";
    document.getElementById("description").value="";
    document.getElementById("price").value="";
    document.getElementById("quantity").value="";
    }
    window.addEventListener("DOMContentLoaded", ()=>{
        axios.get("https://crudcrud.com/api/8884879f7492473d8cfa30347967375d/chocolateshop")
        .then((resolve)=> {
            console.log(resolve);
            for(let i=0;i<=resolve.data.length; i++)
            {
                displayshopdetails(resolve.data[i])
            }
        })
        .catch((error)=>{
            console.log(error);
        });
    })
    function displayshopdetails(chocolatedetails){

            const chocoItem = document.createElement("li");
            const details = document.createTextNode(`${chocolatedetails.candyname} - ${chocolatedetails.description} - $${chocolatedetails.price} - ${chocolatedetails.quantity}`);
            chocoItem.appendChild(details);

        const buybtn = document.createElement("button");
        buybtn.appendChild(document.createTextNode("buy1"));
        chocoItem.appendChild(buybtn);
        const buybtn2 = document.createElement("button");
        buybtn2.appendChild(document.createTextNode("buy2"));
        chocoItem.appendChild(buybtn2);
        const buybtn3 = document.createElement("button");
        buybtn3.appendChild(document.createTextNode("buy3"));
        chocoItem.appendChild(buybtn3); 
        const chocolist=document.querySelector("ul");
        chocolist.appendChild(chocoItem);
        const chocoid=chocolatedetails._id;
        buybtn.addEventListener("click", function (event){
            
            chocolist.removeChild(event.target.parentElement);
            
            document.getElementById("candyname").value = chocolatedetails.candyname;
            document.getElementById("description").value = chocolatedetails.description;
            document.getElementById("price").value = chocolatedetails.price;
            document.getElementById("quantity").value = parseInt(chocolatedetails.quantity)-1;
            
        }) 
        buybtn2.addEventListener("click", function (event){
            chocolist.removeChild(event.target.parentElement);
            
            document.getElementById("candyname").value = chocolatedetails.candyname;
            document.getElementById("description").value = chocolatedetails.description;
            document.getElementById("price").value = chocolatedetails.price;
            document.getElementById("quantity").value = parseInt(chocolatedetails.quantity)-2;
        })
        buybtn3.addEventListener("click", function (event){
            chocolist.removeChild(event.target.parentElement);
            
            document.getElementById("candyname").value = chocolatedetails.candyname;
            document.getElementById("description").value = chocolatedetails.description;
            document.getElementById("price").value = chocolatedetails.price;
            document.getElementById("quantity").value = parseInt(chocolatedetails.quantity)-3;
        })
}
    