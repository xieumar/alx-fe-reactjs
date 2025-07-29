import useRecipeStore from "./RecipeStore";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
        <div>
            {recipes.map(recipe => {
                const {id, title, description} = recipe;
                let { id: recipeId } = useParams();
                return (
                    <div key={id}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <Link to={`/${id}`}>Details</Link>
                    </div>
                )
            })}
        </div>
    );
};

export default RecipeList;