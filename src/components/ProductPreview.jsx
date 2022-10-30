import React from 'react'
import classes from './ProductPreview.module.css'



const ProductPreview = (props) => {
    const currentHour=new Date().getHours() > 9 ? new Date().getDate() : '0'+new Date().getDate();
    const currentMinute=new Date().getMinutes() >9 ? new Date().getMinutes() :'0'+new Date().getMinutes();
  return (
    <div className={classes.ProductPreview}>

            <img src={props.currentPreviewImage} alt=""/>

            {

                props.currentSelectedFeature===0 ? 

                <div className={classes.TimeSection}>
                    <p>{`${currentHour}:${currentMinute}`}</p>
                </div>

                :

                <div className={classes.HeartSection}>
                    <i className="fa-solid fa-heart-pulse"></i>
                    <p>78</p>
                </div>

            }

    </div>
  )
}

export default ProductPreview