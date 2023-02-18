// import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY = [
  {
    id: 'p1',
    price: 6,
    title: 'My book',
    description: 'Only book'
  },{
    id: 'p2',
    price: 66,
    title: 'My home',
    description: 'Only home'
  },{
    id: 'p3',
    price: 33,
    title: 'My store',
    description: 'Only store'
  },
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY.map(item =>(
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
        ))
}
        
        
      </ul>
    </section>
  );
};

export default Products;
