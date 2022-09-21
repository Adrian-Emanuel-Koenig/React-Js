const products = [{
    id: "0",
    mark: "Gibson",
    tag: "Les Paul Standard 50s - Heritage Cherry Sunburst",
    category: "guitar",
    price: 2999,
    img: require("../assets/imgs/Guitars/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_front-500x500.png"),
    stock: 6
}, {
    id: "1",
    mark: "Gibson",
    tag: "Les Paul Special Tribute - P-90 - Worn White Satin",
    category: "guitar",
    price: 1999,
    img: require("../assets/imgs/Guitars/__static.gibson.com_product-images_USA_USAPF9427_Worn_White_Satin_front-500_500.png"),
    stock: 4
}, {
    id: "2",
    mark: "Gibson",
    tag: "Jerry Cantrell Wino Les Paul Custom (Aged & Signed) - Wine Red",
    category: "guitar",
    price: 7999,
    img: require("../assets/imgs/Guitars/__static.gibson.com_product-images_Custom_CUSKBN534_Wine_Red_front-500_500.png"),
    stock: 5
}, {
    id: "3",
    mark: "Gibson",
    tag: "1957 Les Paul Custom Reissue - Ebony 2-Pickup",
    category: "guitar",
    price: 6899,
    img: require("../assets/imgs/Guitars/3.png"),
    stock: 5
}, {
    id: "4",
    mark: "Gibson",
    tag: "Slash Les Paul Standard Limited 4 Album Edition - Translucent Cherry",
    category: "guitar",
    price: 3299,
    img: require("../assets/imgs/Guitars/4.png"),
    stock: 9
}, {
    id: "5",
    mark: "Gibson",
    tag: "Les Paul Special Double Cut Figured Top - Cobra Burst",
    category: "guitar",
    price: 4999,
    img: require("../assets/imgs/Guitars/5.png"),
    stock: 3
}, {
    id: "6",
    mark: "Epiphone",
    tag: "Viola Bass - Vintage Sunburst",
    category: "bass",
    price: 499,
    img: require("../assets/imgs/E-Basses/6.png"),
    stock: 8
}, {
    id: "7",
    mark: "Epiphone",
    tag: "Jack Casady Bass - Metallic Gold",
    category: "bass",
    price: 799,
    img: require("../assets/imgs/E-Basses/7.png"),
    stock: 6
}, {
    id: "8",
    mark: "Epiphone",
    tag: "Allen Woody Rumblekat Bass - Wine Red",
    category: "bass",
    price: 549,
    img: require("../assets/imgs/E-Basses/8.png"),
    stock: 7
}, {
    id: "9",
    mark: "Ibanez",
    tag: "Ibanez 4-String Bass Guitar, Right Handed, Metallic Purple",
    category: "bass",
    price: 649,
    img: require("../assets/imgs/E-Basses/9.jpg"),
    stock: 4
}, {
    id: "10",
    mark: "Ibanez",
    tag: "Ibanez 4 String Bass Guitar, Right Handed, Brown (GSR200SMCNB)",
    category: "bass",
    price: 849,
    img: require("../assets/imgs/E-Basses/10.jpg"),
    stock: 5
}, {
    id: "11",
    mark: "Ibanez",
    tag: "Ibanez TMB 4 String Bass Guitar, Right, Black (TMB30BK)",
    category: "bass",
    price: 999,
    img: require("../assets/imgs/E-Basses/11.jpg"),
    stock: 10
}]

export const data = new Promise((resolve, reject) => {
    let condition = true
    setTimeout(() => {
        if (condition) {
            resolve(products)
        } else {
            reject(console.log("Error"))
        }
    }, 2000)
})