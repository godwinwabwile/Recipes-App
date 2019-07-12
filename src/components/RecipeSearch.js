import React from 'react';

const RecipeSearch = (props) =>{
        const {value} =props;
        const{recipeSearchChangeHandler, searchSubmitHandler}= props;
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                            <h1 className="text-slanded text-capitalize"> 
                        Recipes with: {" "}  
                            <strong className="text-danger">Queen Beryne Foods</strong>
                            </h1>
                            <form className="mt-4" onSubmit={searchSubmitHandler}//called onSubmit handler
                            >
                                <label htmlFor="search" 
                                className="text-capitalize">
                                    submit recipes separated by a comma
                                </label>
                                <div className="input-group">
                                    <input 
                                        type="text"
                                        name="search"
                                        className="form-control"
                                        placeholder="onions,chicken,carrots"
                                        value={value}
                                        onChange={recipeSearchChangeHandler} //called onChange handler

                                    />
                                    <div className="input-group-append">
                                        <button 
                                            type="submit"
                                            className="input-group-text bg-primary text-white text-slanded"  
                                        >
                                           search
                                        </button>
                                    </div>

                                </div>
                            </form>

                        </div>

                    </div>
                
                </div>  
            </React.Fragment>
        )
    }
    
export default RecipeSearch;