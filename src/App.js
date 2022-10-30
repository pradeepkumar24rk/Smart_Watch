import React,{Component} from 'react';
import classes from'./App.module.css';

import Topbar from './components/Topbar';
import ProductPreview from './components/ProductPreview';
import ProductDetail from './components/ProductDetail';
import ProductData from './components/ProductData';
// import Footer from './components/Footer';

class App extends Component {

  state={
    productData:ProductData,
    currentPreviewImage:'https://imgur.com/iOeUBV7.png',
    currentPreviewImagepos:0,
    showHeartBeatSection:false,
  }

  onColorOptionClick=(pos)=>{
    const updatedPreviewImage=this.state.productData.colorOptions[pos].imageUrl
    console.log(updatedPreviewImage)
    this.setState({currentPreviewImage:updatedPreviewImage})
    this.setState({currentPreviewImagepos:pos})
  }
  
  onFeatureItemClick=(pos)=>{
    this.setState({currentSelectedFeature:pos})
  }
    


  render(){
    return (
      <div className="App">
        
        <header>
         {/* <h1>pradeep</h1> */}
            <Topbar/>
        </header>
  
        <div className={classes.MainContainer}>
  
          <div className={classes.ProductPreview}>
                <ProductPreview
                  currentPreviewImage={this.state.currentPreviewImage}
                  currentSelectedFeature={this.state.currentSelectedFeature}
                />
          </div> 
  
          <div className={classes.ProductData}>
              <ProductDetail 
              data={this.state.productData}
              onColorOptionClick={this.onColorOptionClick}
              currentPreviewImagepos={this.state.currentPreviewImagepos}
              onFeatureItemClick={this.onFeatureItemClick}
              currentSelectedFeature={this.state.currentSelectedFeature}
              />
          </div>
 
        </div>

        {/* <Footer/> */}
  
      </div>
    );
  }
  
}

export default App;
