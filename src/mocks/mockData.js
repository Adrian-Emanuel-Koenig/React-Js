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
    mark: "Gibson",
    tag: 'Jerry Cantrell "Atone" Songwriter - Ebony',
    category: "acoustic",
    price: 3749,
    img: require("https://images.ctfassets.net/m8onsx4mm13s/6TjMM7nhOY3574lmGHMvX3/964baae400ac36bcb2af0c643c7f92bc/__static.gibson.com_product-images_Acoustic_ACC9WR562_Ebony_front-500_500.png?fit=fill&w=250&h=500"),
    stock: 10
}, {
    id: "11",
    mark: "Gibson",
    tag: "Les Paul Junior Tribute DC Bass",
    category: "bass",
    price: 999,
    img: require("https://images.ctfassets.net/m8onsx4mm13s/45G4u299LdeICDxbjChvZq/7451bd1a6fd90fa9b1ceac9e90a9ec96/__static.gibson.com_product-images_USA_USACYC512_Worn_Ebony_front-500x500.png?fit=fill&w=250&h=500"),
    stock: 5
}, {
    id: "11",
    mark: "Gibson",
    tag: "Dove Original - Vintage Cherry Sunburst",
    category: "acoustic",
    price: 4499,
    img: require("https://images.ctfassets.net/m8onsx4mm13s/5zcSqRVN7ar5jNVzF2iuJd/1b4bb055be5f582e98cabe1824792e86/__static.gibson.com_product-images_Acoustic_ACCN8H793_Vintage_Cherry_Sunburst_front-500_500.png?fit=fill&w=250&h=500"),
    stock: 10
}, {
    id: "11",
    mark: "Gibson",
    tag: "Eric Church Hummingbird Dark - Cobra Burst",
    category: "acoustic",
    price: 3299,
    img: require("https://images.ctfassets.net/m8onsx4mm13s/0ZZwXXXtjewpzWyLJwHQqH/3e166b91593f1fb7f7c2b7f815d02dd8/__static.gibson.com_product-images_Acoustic_ACCNEP695_Cobra_Burst_front-500_500.png?fit=fill&w=250&h=500"),
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