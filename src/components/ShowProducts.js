import { NavLink } from "react-router-dom";

const ShowProducts = ({ filter, setFilter, data }) => {

  const filterData = (cat) => {
    const updatedList = data.filter((x) => x.category === cat)
    setFilter(updatedList)
  }


  return (
    <>
      <div className="buttons d-flex justify-content-center">
        <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterData("men's clothing")}>Men's Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterData("women's clothing")}>Women's Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterData("jewellery")}>Jewellery</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterData("electronics")}>Electronics</button>
      </div>
      {filter.map((product) => {
        return (
          <div className="col-md-3 my-5 " key={product.id}>
            <div className="card my-0 h-100 text-center" >
              <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
              <div className="card-body">
                <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                <p className="card-text lead fw-bold">
                  {product.price}
                </p>
                <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                  Buy
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShowProducts;
