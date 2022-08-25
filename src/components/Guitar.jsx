import React from 'react'

const products = [{
  id: 0,
  mark: "Gibson",
  tag: "Les Paul Standard 50s - Heritage Cherry Sunburst",
  price: 3.000,
  img: "../src/assets/imgs/Guitars/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_front-500x500.png"
},{
  id: 1,
  mark: "Gibson",
  tag: "Les Paul Special Tribute - P-90 - Worn White Satin",
  price: 1.000,
  img: "../src/assets/imgs/Guitars/__static.gibson.com_product-images_USA_USAPF9427_Worn_White_Satin_front-500_500.png"
},{
  id: 2,
  mark: "Gibson",
  tag: "Jerry Cantrell Wino Les Paul Custom (Aged & Signed) - Wine Red",
  price: 8.000,
  img: "../src/assets/imgs/Guitars/__static.gibson.com_product-images_Custom_CUSKBN534_Wine_Red_front-500_500.png"
},{
  id: 3,
  mark: "Gibson",
  tag: "1957 Les Paul Custom Reissue - Ebony 2-Pickup",
  price: 6.900,
  img: "../src/assets/imgs/Guitars/3.png"
},{
  id: 4,
  mark: "Gibson",
  tag: "Slash Les Paul Standard Limited 4 Album Edition - Translucent Cherry",
  price: 3.299,
  img: "../src/assets/imgs/Guitars/4.png"
},{
  id: 5,
  mark: "Gibson",
  tag: "Les Paul Special Double Cut Figured Top - Cobra Burst",
  price: 4.999,
  img: "../src/assets/imgs/Guitars/5.png"
}]

export default function Gibson() {

  return (
    <div>
      <h2>Les Paul Models</h2>
    <ul className='lista'>
      <li>{products[0].tag}</li>
      <li>{products[1].tag}</li>    
      <li>{products[2].tag}</li>
      <li>{products[3].tag}</li>
      <li>{products[4].tag}</li>
      <li>{products[5].tag}</li>
    </ul>
</div>
  )
}