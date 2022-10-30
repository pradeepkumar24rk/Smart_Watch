import React from 'react'
import classes from './ProductDetail.module.css'
// import ProductData from './ProductData.js'

const ProductDetail=(props)=> {
    const colorOption=props.data.colorOptions.map((item,pos)=>{
        const classArr=[classes.ProductImage]
        if(pos===props.currentPreviewImagepos)
        {
            classArr.push(classes.SelectedProductImage)
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=>props.onColorOptionClick(pos)}/>
        );
        
    });

    const featureList=props.data.featureList.map((item,pos)=>{ 
        const classArr=[classes.FeatureItem]
        if(pos===props.currentSelectedFeature)
        {
            classArr.push(classes.SelectedFeatureItem)
        }
        return(
            <button key={pos} className={classArr.join(' ')} onClick={()=>props.onFeatureItemClick(pos)}>{item}</button>
        );
        
    });


  return (
    <div className={classes.ProductData}>
            <h1 className={classes.ProductTitle}>{props.data.title}</h1>
            <p className={classes.ProductDescription}>{props.data.description}</p>

            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>
                {colorOption}
              {/* <img className={[classes.ProductImage,classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt=""/>
              <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt=""/>
              <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt=""/>
              <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt=""/> */}
            </div>

            <h3 className={classes.FeaturesHeading}>Features</h3>
            <div>
                {featureList}
              {/* <button className={[classes.FeatureItem,classes.SelectedFeatureItem].join(' ')}>Time</button>
              <button className={classes.FeatureItem}>Heart Rate</button> */}
            </div>

            <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
  )
}

export default ProductDetail