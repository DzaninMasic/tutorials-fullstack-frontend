import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { setSelectedCategoryId, setSelectedCategory } from "../redux/categories/categoriesSlice";
import fetchData from "../fetch";
import { Button } from "@mui/material";

const EditCategoryScreen = () => {
    const location = useLocation()
    const categories = useSelector((state) => state.categories)
    const {selectedCategoryId, selectedCategory} = categories
    const [name, setName] = useState('')

    //console.log("testbest", selectedCategoryId)
    const dispatch = useDispatch()

    const onChangeValue = (event) => {
        setName(event.target.value)
    }

    const editCategory = async() => {
        const updateCategory = await fetchData('POST' , `/category/${selectedCategoryId}`,{
            name
        })
        dispatch(setSelectedCategory(updateCategory))
    }

    const fetchOneCategory = async(id) => {
        const oneCategory = await fetchData('GET', `/category/${id}`, {})
        if(!oneCategory) return 
        dispatch(setSelectedCategory(oneCategory))
    }

    useEffect(() => {
        const locationArray = location.pathname.split('/')
        const id = locationArray[locationArray.length-1]
        if(!selectedCategoryId || selectedCategoryId !== id){
            dispatch(setSelectedCategoryId(id))
        }
        fetchOneCategory(id)
    }, [])

    useEffect(() => {
        setName(selectedCategory?.name || '')
    },[selectedCategory])

    return(
        <>
            <div>
                <label>Category Name: </label>
            </div>
            <div>
                <input value={name} onChange={onChangeValue}></input>
                <Button sx={{color: 'black', background: 'blue'}} onClick={() => editCategory()}>Update</Button>
            </div>
        </>
    )
}

export default EditCategoryScreen