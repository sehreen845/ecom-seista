import React from 'react';
import { connect } from 'react-redux';
import './CSS/ShopCategory.css'
// import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assests/dropdown_icon.png'
import Item from '../Components/Item/Item'
import {addToCart} from '../redux/actions/action';
import all_product from '../Components/Assests/all_product';


const ShopCategory = ({ all_product, category ,addToCart,banner}) => {
  // Ensure all_product is defined before using it
  if (!all_product) {
    return null; // or render a loading indicator or an error message
  }
  // const {all_product}=props;
  // const {all_product} = useContext(ShopContext);
  
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={banner} alt=''/>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt=''/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(category===item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>


      
    </div>
  );
};

const mapStateToProps = (state) => ({
  all_product: state.products.all_product,
  // all_product: state.products.all_product,
});

// export default ShopCategory


export default connect(mapStateToProps, { addToCart })(ShopCategory); // Connect ShopCategory component to Redux store

//import ,{useContext}