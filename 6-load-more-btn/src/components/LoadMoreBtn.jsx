import { useEffect, useState } from "react";

const LoadMoreBtn = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${count * 10}`
      );

      const result = await response.json();
      if (result && result.products && result.products.length > 0) {
        setProducts((prev) => [...prev, ...result.products]);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisableBtn(true);
    }
  }, [products]);

  if (loading) {
    return (
      <h3 className="text-emerald-500 font-bold text-center text-2xl my-10 ">
        Loading...
      </h3>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl text-emerald-400 text-center mt-10">
        Dummy Json Products || click load more button to see more products
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between mt-10">
        {products && products.length
          ? products.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2 border-b border-gray-200 w-80"
              >
                <div className="flex items-center ">
                  <img src={item.images[2]} className="w-40 h-40 rounded-lg" />
                  <div className="ml-4 ">
                    <div className="text-sm font-medium text-gray-100">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-300 ">
                      {item.category}
                    </div>
                    <div className="text-sm text-yellow-500 mt-2">
                      {item.price}$
                    </div>
                    <h3 className="text-emerald-500 font-semibold">
                      Product No. {item.id}
                    </h3>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
      <button
        className="px-4 py-3 bg-emerald-500 hover:bg-white hover:text-emerald-500 transition-colors w-max  rounded-lg text-white font-bold mb-10 "
        onClick={() => setCount(count + 1)}
        disabled={disableBtn}
      >
        {disableBtn ? "No more products" : "Load More"}
      </button>
    </div>
  );
};

export default LoadMoreBtn;
