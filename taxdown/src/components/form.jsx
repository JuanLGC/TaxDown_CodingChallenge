import React, {Fragment, useContext, useState} from 'react';
import { Context } from "../store/appContext";
import '../form.css';
import logo from "../img/logo.png"

export const Form = () => {
    const { store, actions } = useContext(Context);  

    return (
        <div className="form-container"> 
            <img
                    src={logo}
                    width="250"
                    height="40"
                    className="d-inline-block align-center form-title"
                    />
            <p className="form-description">Fill in this form to <b>join us</b> and <b>save money!!</b></p>
            <form>
                {store.inputFields.map((item, index) => {
                     
                    return (
                        <div key={index} className="input-box">
                            <label for={item.id}>{item.label + ":"}</label>
                            <input  type={item.type} id={item.id} name={item.id} placeholder={item.placeholder} maxLength={item.maxLength} defaultValue="" /> 
                        </div>   
                    );
                    
				})}
                <div className="submit-box">
                    <input className="submit-button" type="submit" value="Submit" onClick={e => {
                        e.preventDefault();
                        let name = document.getElementById("name").value;
                        let surname = document.getElementById("surname").value;
                        let age = document.getElementById("age").value;
                        
                        console.log("Name: " + name + "," + " Surname: " + surname + "," + " Age: " + age );

                        actions.addSubmission(name, surname, age);
                        
                        document.getElementById("name").value = "";
                        document.getElementById("surname").value = "";
                        document.getElementById("age").value = "";

                    }}/>
                </div>
            </form>
        </div>
    );
}
