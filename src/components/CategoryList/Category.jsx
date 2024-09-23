/* eslint-disable react/prop-types */
const Category = ({ category }) => {
  const { availability, category_name, logo } = category;
  return (
    <div className="card bg-base-100  shadow-xl mt-14 mb-8">
      <figure>
        <img src={logo} alt={category_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category_name}</h2>
        <p>{availability}</p>
      </div>
    </div>
  );
};

export default Category;
