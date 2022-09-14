import ResponsiveAppBar from './components/header'
import FirstScreen from './pages/FirstScreen';
import CategoriesScreen from './pages/CategoriesScreen';
import NewCategoryScreen from './pages/NewCategoryScreen';
import EditCategoryScreen from './pages/EditCategoryScreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SubCategoriesScreen from './pages/SubCategoriesScreen';
import ItemsScreen from './pages/ItemsScreen';
import EditSubCategoryScreen from './pages/EditSubCategoryScreen';
import NewSubCategoryScreen from './pages/NewSubCategoryScreen';
import EditItemScreen from './pages/EditItemScreen';
import NewItemScreen from './pages/NewItemScreen';
import { useState, useEffect } from 'react';

function App() {

  const [role, setRole] = useState(null)

  useEffect(() => {
    setRole(window.localStorage.getItem('adminRole'))
  },[])

  return (
    <>
      <BrowserRouter>
      <div className="container">
        <ResponsiveAppBar/>
      </div>
      <div className="container">
        <Routes>
          {role === 'admin' ? <> 
          <Route path="categories" element={<CategoriesScreen />} />
          <Route path="categories/:categoryId" element={<EditCategoryScreen />} />
          <Route path="categories/new" element={<NewCategoryScreen />} />

          <Route path="subcategories" element={<SubCategoriesScreen />} />
          <Route path="subcategories/:subcategoryId" element={<EditSubCategoryScreen/>} />
          <Route path="subcategories/new" element={<NewSubCategoryScreen/>} />

          <Route path="items" element={<ItemsScreen />} />
          <Route path="items/:itemId" element={<EditItemScreen/>} />
          <Route path="items/new" element={<NewItemScreen/>} /> 
          <Route path="*" element={<FirstScreen />} /> </> : 
          <> 
          <Route path="*" element={<FirstScreen />} /> </>}
          
          
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
