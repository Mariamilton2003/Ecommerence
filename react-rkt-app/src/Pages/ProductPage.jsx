import React from 'react';
import AppBar from '../components/AppBar';
import ProductDetails from '../components/ProductDetails';

const ProductPage = () => {
    const products=[{
        "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/t/a/x/-original-imaghmtch6qfmfxg.jpeg?q=70",
        "title": "POCO C50 (Royal Blue, 32 GB)",
        "price": "5,499",
        "description": [
          "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB16.56 cm (6.52 inch) HD+ Display8MP Dual Camera | 5MP Front Camera5000 mAh Lithium Polymer BatteryMediatek Helio A22 Processor, Upto 2.0 GHz Processor1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
        ],
        "anchor": "https://www.flipkart.com/poco-c50-royal-blue-32-gb/p/itma43af9d14952e?pid=MOBGK8WZUTGDEZFA&lid=LSTMOBGK8WZUTGDEZFAWKBDLT&marketplace=FLIPKART&q=phone&store=tyy%2F4io&srno=s_1_1&otracker=search&fm=organic&iid=a50e5be0-405c-443a-bab7-d09383bf6ef1.MOBGK8WZUTGDEZFA.SEARCH&ppt=None&ppn=None&ssid=mtdkimk1o00000001688540050079&qH=f7a42fe7211f98ac"
      }]
    return (
        <>
           <AppBar />
          <div className="flex flex-col sm:mx-[2rem]">
           {
            products.map((product,i)=>(
            <ProductDetails product={product} key={i} />
            ))
           }   
          </div> 
        </>
    );
};

export default ProductPage;