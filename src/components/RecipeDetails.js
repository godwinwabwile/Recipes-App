import React, {Component} from 'react';
import {recipe} from '../tempDetails';

class RecipeDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            recipe:recipe,
            url:`https://www.food2fork.com/api/get?key=871808d2890050df9f41ba685fc2108f&rId=${this.props.details_id}`
        };
    }
     //Ajax request
        async getRecipe(){
            //catching ay possible errors during data fetching
            try{ 
            const Data = await fetch(this.state.url);//fetch data from api
            const jsonData = await Data.json(); //convert the data to json

            this.setState({
                recipe:jsonData.recipe
            })

            }catch(error){
            console.log(error);
            }
        }
        componentDidMount(){
            this.getRecipe();
        }
    render(){
        const {
            image_url,
            publisher,
            publisher_url,
            source_url,
            title,
            ingredients
        } = this.state.recipe;
        const{pageIndexHandler} = this.props;
        return(
            <React.Fragment>
               <div className="container">
                    <div className="row">
                        {/* left screen image and button column */}
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button type="button" className="btn btn-warning mb-5 text-capitalize text-slanded"
                            onClick={()=>pageIndexHandler(1)}
                            >
                                back to recipes
                            </button>
                            <img
                                src={image_url} 
                                className="d-block w-100"
                                alt="recipedetails"
                            />
                        </div>
                        {/* right screen column --recipe details */}
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">{title}</h6>
                            <h6 className="text-warning text-capitalize text-slanded">{publisher}</h6>
                            <a href={publisher_url}
                                target ="_blank"
                                rel ="noopener noreferrer"
                                className=" btn btn-primary mt-2 text-capitalize"
                            >
                                Publisher
                            </a>
                            <a href={source_url}
                                target ="_blank"
                                rel ="noopener noreferrer"
                                className=" btn btn-success mt-2 mx-3 text-capitalize"
                            >
                                Source
                            </a>
                            <ul className="list-group mt-4">
                                <h2 className="mt-3 mb-4"> Ingredients</h2>
                                {ingredients.map((indgredient, index) =>{
                                    return(
                                        <li key={index} className="list-group-item text-slanded">{indgredient}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
               </div>
            </React.Fragment>
        )
    }
}
export default RecipeDetails;