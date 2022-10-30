const ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'A smartwatch is a wearable computing device that closely resembles a wristwatch or other time-keeping device.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;