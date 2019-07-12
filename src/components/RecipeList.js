import React from 'react';
import Recipe from './Recipe';
import LoadingError from './LoadingError';
import RecipeSearch from './RecipeSearch';

function RecipeList(props){
        
        const {recipes, value} = props;  
        const {recipeDetailsHandler,recipeSearchChangeHandler, searchSubmitHandler } = props;
        return(
            <React.Fragment>
                {/*recipe search component  */}
                <RecipeSearch 
                // passing the searchSubmitHandler
                searchSubmitHandler = {searchSubmitHandler}
                // paaing the recipeSearchChangeHandler
                recipeSearchChangeHandler={recipeSearchChangeHandler}
                // value
                value={value}
                />

                <div className="container my-5">
                    {/* title */}
                    <div className="row ">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb3">
                            <h1 className="text-slanded">Top 30 Recipes</h1>
                            
                        </div>
                         {/* end of title*/}
                    
                    </div>
                   
                    <div className="row">
                    {/* pass recipe properties to the recipe component */}
                    { recipes?
                        recipes.map(recipe =>{
                            return(
                                <Recipe
                                    key={recipe.recipe_id}
                                    recipe={recipe}
                                    recipeDetailsHandler={()=>recipeDetailsHandler(0,recipe.recipe_id )}
                                />  
                                );
                            }):
                            ()=>{
                                return(
                                    <LoadingError/>
                                )
                                    
                                
                            }   
                    }
                   
                    </div>
           

                </div>
                                
                  
            </React.Fragment>
            
        )
    }

export default RecipeList;