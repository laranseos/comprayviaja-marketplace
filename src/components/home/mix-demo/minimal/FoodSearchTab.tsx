import FoodSearch from "@/components/common/search/food-search";

const FoodSearchTab = () => {
  return (
    <div className="search-panel">
      <h2 className="title-top">Order food from favourite restaurants.</h2>
      <div className="search-section">
        <FoodSearch />
      </div>
    </div>
  );
};

export default FoodSearchTab;
