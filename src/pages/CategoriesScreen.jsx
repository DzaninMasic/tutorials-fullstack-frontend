import { useNavigate  } from "react-router-dom";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import fetchData from "../fetch";
import { useSelector, useDispatch } from "react-redux";
import { setCategories, setSelectedCategoryId } from "../redux/categories/categoriesSlice";

const CategoriesScreen = () => {
    const navigate = useNavigate();
    const editCategoryScren = (id) => {
        dispatch(setSelectedCategoryId(id))
        navigate(id);
    }
    // const [categories, setCategories] = useState([])
    const categories = useSelector((state) => state.categories.categories)

    const dispatch = useDispatch()

    const createNew = () => {
        navigate('/categories/new');
    }

    const fetchAllCategories = async() => {
        const categoriesFetched = await fetchData('GET', '/category/', {})
        if(!categoriesFetched) return 
        if(categoriesFetched.length > 0 ){
            //setCategories(categoriesFetched)
            dispatch(setCategories(categoriesFetched))
        } 
    }

    const deleteCategory = async(id) => {
        await fetchData('DELETE', `/category/${id}`, {})
        fetchAllCategories()
    }

    useEffect(()=>{
        fetchAllCategories()
    }, [])

    return (
        <div>
            {categories.map(el => <div style={{ width: '200px',  height: '200px', marginBottom: '20px', background: 'red'}} key={el._id}>
                <div>
                    {el.name}
                </div>
                <div>
                    <Button sx={{ background: 'white'}} onClick={() => editCategoryScren(el._id)}>Edit</Button>
                    <Button sx={{ background: 'white'}} onClick={() => deleteCategory(el._id)}>Delete</Button>
                </div>
            </div>)}
            <Button sx={{ background: 'black'}} onClick={() => createNew()}>Create New</Button>
        </div>
    );
}

export default CategoriesScreen