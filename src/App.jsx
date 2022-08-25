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

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="container">
        <ResponsiveAppBar/>
      </div>
      <div className="container" style={{marginTop: '70px'}}>
        <Routes>
          <Route path="*" element={<FirstScreen />} />
          <Route path="categories" element={<CategoriesScreen />} />
          <Route path="categories/:categoryId" element={<EditCategoryScreen />} />
          <Route path="categories/new" element={<NewCategoryScreen />} />

          <Route path="subcategories" element={<SubCategoriesScreen />} />
          <Route path="subcategories/:subcategoryId" element={<EditSubCategoryScreen/>} />
          <Route path="subcategories/new" element={<NewSubCategoryScreen/>} />

          <Route path="items" element={<ItemsScreen />} />
          <Route path="items/:itemId" element={<EditItemScreen/>} />
          <Route path="items/new" element={<NewItemScreen/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
