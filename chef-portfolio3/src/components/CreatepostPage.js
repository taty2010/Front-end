import React, {useState} from 'react';


export const CreatepostPage = () => {
   
    const [recipe, setRecipe] = useState({
        title: '',
        meal: '',
        ingredients: '',
        instructions: ''
    });
    

    const handleChange = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
       
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handled submit:recipe',recipe)
        document.getElementById('formPost').reset()
    }

    return (
        <>
            <h1>Create A New Post Of Your Delicious Recipe</h1>
            <form id='formPost' onSubmit={handleSubmit}>
                <label htmlFor='title'> DISH TITLE:</label>
                    <input 
                        type="text" 
                        name="title"
                        onChange={handleChange}
                    />
                
                <select name='meal' onChange={handleChange}>
                    <option value=''>--choose a meal type--</option>
                    <option value='breakfast'>Breakfast</option>
                    <option value='lunch'>Lunch</option>
                    <option value='dinner'>Dinner</option>
                    <option value='snack'>Snack</option>
                    <option value='dessert'>Dessert</option>
                </select>
                <label htmlFor='ingredients'>INGREDIENTS</label>
                <textarea 
                    name='ingredients' 
                    cols='50' 
                    rows='10'
                    placeholder='add ingredients'
                    onChange={handleChange}
                >
                </textarea>

                <label htmlFor='instructions'>INSTRUCTIONS</label>
                <textarea 
                    name='instructions' 
                    cols='50' 
                    rows='10'
                    placeholder='add instructions'
                    onChange={handleChange}
                >
                </textarea>
                <button type='submit'>ADD RECIPE</button>
                
            </form>


        </>
    );
}