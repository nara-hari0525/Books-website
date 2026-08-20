import "../styles/CategoryFilter.css";

function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="category-container">

      {categories.map((category) => (
        <button
          key={category}
          className={
            selectedCategory === category
              ? "category-button active"
              : "category-button"
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default CategoryFilter;