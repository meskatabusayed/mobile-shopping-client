import { useState } from "react";
import { useLoaderData } from "react-router-dom";



const MyCart = () => {
    

    const loadedMyCartUsers = useLoaderData();
    const [users , setUsers] = useState(loadedMyCartUsers);

    const handleDelete = id => {
        fetch(`http://localhost:5000/user/${id}` , {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('Deleted Successfully')
                const remaingUsers = users.filter(user => user._id !== id)
                setUsers(remaingUsers);
            }
        })


    }



    return (
        <div>
            <h2 className="text-center font-extrabold text-3xl my-10">My Cart :{loadedMyCartUsers.length} </h2>
            {
                <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      
                      <th>Name -</th>
                      <th>Price -</th>
                      <th>Action -</th>
                    </tr>
                  </thead>
                  <tbody>
                
                    {
                        users.map(user => <tr key={user._id}>
                            
                            <td>{user.name}</td>
                            <td>{user.price}</td>
                            <td> <button onClick={() => handleDelete(user._id)} className="btn">X</button> </td>
                          </tr>)
                    }
                    
                   
                  </tbody>
                </table>
              </div>
            }
        </div>
    );
};

export default MyCart;