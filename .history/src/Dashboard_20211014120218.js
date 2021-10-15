import React from 'react'
//import Data from './data.json';
import Data from './data/data1.json'
//import Data from './data2.json';
//import './App.css';

function App() {
   

    // for data.json file
    // return (
    //     <div className="App">
    //         <div className="posts">
    //             {Data.map(post => {
    //                 return(
    //                     <div key={post.id} className="post">
    //                     <h4> { post.title}</h4>
    //                     <p> {post.content}</p>
    //                     </div>
    //                 )
    //             })}

    //         </div>
            
    //     </div>
    // )
//}


return (
   // for data1.json file
    <div className="App">
        <div className="posts">
            {Data.map(post => {
                return(
                    <div key={post.id} className="post">

                        <div> 
                            <h5>Student Name</h5>
                        </div>
                    <h4> {post.Full_Legal_Name}</h4>
                    <div> 
                            <h5>Training Status</h5>
                        </div>
                    <h4> {post.Training_Status}</h4>

                    <div> 
                            <h5>Enrollment date</h5>
                        </div>
                    <p> {post.Enroll_Date}</p>
                    <div> 
                            <h5>Student Status</h5>
                        </div>
                    <p> {post.Student_Status}</p> 

                

                    </div>
                )
            })}

        </div>
        
    </div>
    )
}

export default App;
