import React from "react";

function ExampleComponent(){
    const [data,setData] = useState(null);
    useEffect(()=> {
        fetch ('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(result => setData(result))

    return () => {

    };   
    }, []);
    
  result{
    <div>
        {data ?}
    </div>
  }  

}