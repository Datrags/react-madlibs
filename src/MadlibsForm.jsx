import {useState} from 'react'
//MadlibsForm
//Creates a form that takes in input from user. 
//Takes a function as a prop to pass information as an object to Madlibs component.
const MadlibsForm = ({getInfo}) => {
    const initState = {
        name: "",
        adj1: "",
        adj2: "",
        animal: "",
        plural_noun: "",
        adj3: "",
        adj4: "",
        verb_ing: "",
        noun: "",
        adj5: ""
    }
    const [formData, setFormData] = useState(initState)

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        for (let key in formData) {
            if (formData[key] == ""){
                alert("Error: Empty Fields Detected");
                return;
            }
        }
        getInfo(formData);
        setFormData(initState);
        

    }

    return(
        <div>
<form onSubmit={handleSubmit}>
            <label htmlFor="name">Name </label>
            <input
                id="name"
                type="text"
                name="name"
                placeholder='name'
                value={formData.name}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="adj1">Adjective </label>
            <input
                id="adj1"
                type="text"
                name="adj1"
                placeholder='adj1'
                value={formData.adj1}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="adj2">Adjective </label>
            <input
                id="adj2"
                type="text"
                name="adj2"
                placeholder='adj2'
                value={formData.adj2}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="animal">Animal </label>
            <input
                id="animal"
                type="text"
                name="animal"
                placeholder='animal'
                value={formData.animal}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="plural_noun">Plural Noun </label>
            <input
                id="plural_noun"
                type="text"
                name="plural_noun"
                placeholder='plural_noun'
                value={formData.plural_noun}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="adj3">Adjective </label>
            <input
                id="adj3"
                type="text"
                name="adj3"
                placeholder='adj3'
                value={formData.adj3}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="adj4">Adjective </label>
            <input
                id="adj4"
                type="text"
                name="adj4"
                placeholder='adj4'
                value={formData.adj4}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="verb_ing">Ing Verb </label>
            <input
                id="verb_ing"
                type="text"
                name="verb_ing"
                placeholder='verb_ing'
                value={formData.verb_ing}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="noun">Noun </label>
            <input
                id="noun"
                type="text"
                name="noun"
                placeholder='noun'
                value={formData.noun}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="adj5">Adjective </label>
            <input
                id="adj5"
                type="text"
                name="adj5"
                placeholder='adj5'
                value={formData.adj5}
                onChange={handleChange}
            />
            <br />
            <button>Submit</button>
        </form>
        </div>
        
        )
}

export default MadlibsForm;