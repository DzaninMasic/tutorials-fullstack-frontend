import { useNavigate  } from "react-router-dom";
import { Button, Typography, Card, CardContent, CardActions, Pagination, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import fetchData from "../fetch";
import { useSelector, useDispatch } from "react-redux";
import { setCategories, setSelectedCategoryId, setNumberOfCategories } from "../redux/categories/categoriesSlice";

const CategoriesScreen = () => {
    const navigate = useNavigate();

    const [page, setPage] = useState(1)
    
    const categories = useSelector((state) => state.categories.categories)
    const lengthOfCategories = useSelector((state) => state.categories.numberOfCategories)
    
    const fetchAllCategories = async() => {
        const categoriesFetched = await fetchData('GET', '/category/', {})
        console.log("testForCat", categoriesFetched)
        if(!categoriesFetched) return 
        if(categoriesFetched.length > 0 ){
            //setCategories(categoriesFetched)
            dispatch(setCategories(categoriesFetched))
            dispatch(setNumberOfCategories(categoriesFetched.length))
        } 
        return categoriesFetched.length
    }

    const fetchPaginatedCategories = async(page) => {
        const paginatedCategoriesFetched = await fetchData('GET', `/category?page=${page}&limit=1`, {})
        console.log("test", paginatedCategoriesFetched)
        if(!paginatedCategoriesFetched) return 
        if(paginatedCategoriesFetched.length > 0 ){
            //setCategories(categoriesFetched)
            dispatch(setCategories(paginatedCategoriesFetched))
        } 
    }

    const editCategoryScren = (id) => {
        dispatch(setSelectedCategoryId(id))
        navigate(id);
    }

    let allCategories=1

    useEffect(()=>{
        fetchAllCategories()
        document.body.style.background = '#F9F5E3';
    }, [])

    const handleChange = (event, value) => {
        setPage(value);
        getCurrentPage(value);
    };

    const getCurrentPage = (value) => {
        console.log("WHAT IS THIS", value)
        fetchPaginatedCategories(value)
    }
    // const [categories, setCategories] = useState([])
    //console.log(categories)

    
    const dispatch = useDispatch()
    
    const createNew = () => {
        navigate('/categories/new');
    }
    
    
    const deleteCategory = async(id) => {
        await fetchData('DELETE', `/category/${id}`, {})
        fetchAllCategories()
    }
    
    //const lengthOfCategories = categories.length/1
    //console.log("testbest", lengthOfCategories)

    return (
        <div>
            {categories.map(el => <Card sx={{ maxWidth: 345 , display: 'inline-flex' , margin: '50px',  background:"#A682FF"}} key={el._id}>
                <CardContent>
                    <Typography sx={{display: 'inline-flex'}} gutterBottom variant="h5" component="div">
                        {el.name}
                    </Typography>
                    {
                        (el?.subCategoryIds || []).map(subCat => <Typography variant="body2" color="text.secondary" key={subCat._id}>{subCat.name}</Typography>)
                    }
                    <CardActions>
                        <Button sx={{ background: 'white', "&:hover": { background: "#87CBAC" }}} onClick={() => editCategoryScren(el._id)}>Edit</Button>
                        <Button sx={{ background: 'white', "&:hover": { background: "#87CBAC" }}} onClick={() => deleteCategory(el._id)}>Delete</Button>
                    </CardActions>
                </CardContent>
            </Card>)}
            <div>
                <Button sx={{ background: 'black', marginLeft: '50px', "&:hover": { background: "#87CBAC" }}} onClick={() => createNew()}>Create New</Button>
            </div>
            <Stack spacing={2} sx={{position: 'absolute', bottom: '10px', left: '43%'}}>
                <Pagination count={lengthOfCategories} page={page} color="secondary" size="large" onChange={handleChange}/>
            </Stack>
        </div>
    );
}

export default CategoriesScreen
