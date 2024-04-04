import React  from 'react'
import { connect } from 'react-redux';
// import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';


const Product = ({all_product}) => {
  // const{all_product}=useContext(ShopContext);
  const{productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProducts/>
      
      
    </div>
  )
}

const mapStateToProps = (state) => ({
  all_product: state.products.all_product,
});

export default connect(mapStateToProps)(Product); // Connect Product component to Redux store
// export default Product
//import usecontext above