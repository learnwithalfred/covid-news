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
    <div>
      <main className="container py-5">
        <h1>24 latest news</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, nobis. Quod quas tempore exercitationem modi excepturi
          minima nemo ab sapiente molestiae at quisquam, nesciunt necessitatibus
          distinctio illum, eveniet unde accusamus vitae dolorem sunt
          laboriosam! Fuga architecto modi a minus at?
        </p>

        <hr className="my-5" />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {renderCategories}
        </div>
      </main>
    </div>
  );
};

export default App;
