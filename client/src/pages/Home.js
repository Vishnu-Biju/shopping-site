/* import React from "react";
import Jumbotron from "../components/cards/jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";

const Home = () => {



  return (
    <div className="home-content">
      <div className="jumbo">
        <Jumbotron
          text={["Latest Products", "New Arrivals", " Best Sellers"]}
        />
      </div>

      <NewArrivals/>
     
      <h4 className="jumbow">
        Best Sellers
      </h4>

      <BestSellers/>
      <br/>
      <br/>


      <h4 className="jumbow">
        Category List
      </h4>

      <CategoryList/>
      <br/>
      <br/>

      <h4 className="jumbow">
        SubCategory List
      </h4>

      <SubList/>
      <br/>
      <br/>
    </div>
  );
};

export default Home;
 */
import React from "react";
import Jumbotron from "../components/cards/jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";

const Home = () => {
  return (
    <div className="home-content">
      <div className="jumbo">
        <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} />
      </div>

      <NewArrivals />

      <h4 className="jumbow">Best Sellers</h4>

      <BestSellers />

      <h4 className="section-title">Category List</h4>

      <CategoryList />

      <h4 className="section-title">SubCategory List</h4>

      <SubList />
    </div>
  );
};

export default Home;
