import React from 'react';
import Categories from './components/Categories';
import CategoriesData from './Utils/CategoriesData';

const App = () => {
  const renderCategories = CategoriesData.map((data) => (
    <Categories
      name={data.name}
      title={data.title}
      imgUrl={data.imgUrl}
      key={data.name}
    />
  ));

  return (
    // show categories
    <div>
      App
      <h1>categories</h1>
      {renderCategories}
    </div>
  );
};

export default App;
