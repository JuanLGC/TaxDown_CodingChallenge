import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from "../store/appContext";
import '../submission.css';


export function Submissions() {
  const { store } = useContext(Context);  
  console.log(store);
    return (
      <>       
        <div className="card-container">
          {store.submissions.map((item, index) => {         
            return (
              <div key={index} className="submit-card">
                <div>
                  <p className="submission-title">Submission {index + 1}:</p>
                  <ul className="submission-info">
                    <li>Name: {item.name}</li>
                    <li>Surname: {item.surname}</li>
                    <li>Age: {item.age}</li>
                  </ul>
                </div>
              </div>   
            );           
          })} 
        </div>
      </>
    );
  }

  