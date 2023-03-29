import React from 'react'
import ProductCard from './ProductCard'
import Carousel from 'react-grid-carousel';
import "./ProductList.css"

const products = [
    {
        title: "Modern watch Brand Model 1",
        img : require("../../assets/images/watch-01.jpg"),
        specialPrice: "12",
        oriPrice: "10"
    },
    {
        title: "Modern watch Brand Model 2",
        img : require("../../assets/images/watch-02.jpg"),
        specialPrice: "12",
        oriPrice: "10"
    },
    {
        title: "Modern watch Brand Model 3",
        img : require("../../assets/images/watch-03.jpg"),
        specialPrice: "12",
        oriPrice: "10"
    },
    {
        title: "Modern watch Brand Model 4",
        img : require("../../assets/images/watch-04.jpg"),
        specialPrice: "12",
        oriPrice: "10"
    },
    {
        title: "Modern headset Brand Model 1",
        img : require("../../assets/images/wireless-01.png"),
        specialPrice: "12",
        oriPrice: "10"
    },
    {
        title: "Modern headset Brand Model 2",
        img : require("../../assets/images/wireless-02.png"),
        specialPrice: "12",
        oriPrice: "10"
    },
    {
        title: "Modern headset Brand Model 3",
        img : require("../../assets/images/wireless-02.png"),
        specialPrice: "12",
        oriPrice: "10"
    },
    {
        title: "Modern headset Brand Model 4",
        img : require("../../assets/images/wireless-03.png"),
        specialPrice: "12",
        oriPrice: "10"
    },
]

const ProductList = () => {
  return (
        <Carousel cols={5} rows={1} gap={10} loop>
            {products.map((val, i) => (
                <Carousel.Item key={i}>
                    <div className='product__carousel'>
                    <img src={val.img} className="list__img"/>
                    <div>
                    <div className="product__info">
                    <h5><a href='2'>{val.title}</a></h5>
                    </div>
                    <div className="product__info">
                        <h6>Seller Name</h6>
                    </div>
                    <div className="product__info">
                    <span>{val.specialPrice}</span>
                    <span>{val.oriPrice}</span> 
                    </div>
                    </div>
                    </div>
                </Carousel.Item>
            ))}
            </Carousel>

  )
}

export default ProductList