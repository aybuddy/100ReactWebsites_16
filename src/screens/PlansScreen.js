import React, { useEffect, useState } from 'react';
import db from '../firebase';
import './PlansScreen.css';

const PlansScreens = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection('products')
      .where('active', '==', true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection('prices').get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  const loadCheckout = async (priceId) => {};

  console.log(products);

  return (
    <div className='plansScreen'>
      {Object.entries(products).map(([productId, productData]) => {
        // TODO: add some logic to check if user sub is active
        return (
          <div className='plansScreen__plan'>
            <div className='plansScreen__info'>
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              className='plansScreen__button'
              onClick={() => loadCheckout(productData.prices.priceId)}
            >
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlansScreens;
