const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			inputFields:  [
                {
                    "id":  "name",
                    "label":  "Name",
                    "placeholder":  "Your first name",
                    "type":  "text",
                    "maxLength":  20
                },
                {
                    "id":  "surname",
                    "label":  "Surname",
                    "placeholder":  "Your last name",
                    "type":  "text",
                    "maxLength":  40
                },
                {
                    "id":  "age",
                    "label":  "Age",
                    "placeholder":  "Your age",
                    "type":  "number",
                }
            ],

            submissions: [
                {
                    name: "Juan",
                    surname: "Gonzalez",
                    age: "24"
                }
            ]
        },
        actions: {

            addSubmission: (name, surname, age) => {
                
                let newSubmit =  {name: name, surname: surname, age: age};
               
                setStore({submissions: [...getStore().submissions, newSubmit]});
            }
            
		}
		
	};
};

export default getState;
