import React, { useEffect } from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllProducts} from '../Products/ProductAction';
import externalStyle from '../../style/externalStyle';
import {getCategory} from '../Quiz/QuizAction'
function AllProducts(props) {
  useEffect(() => {
    getAllProducts();
    getCategory();
  }, []);
  console.warn(props.products);
  return (
    <>
      <View style={externalStyle.firstView}>
        <Text>All</Text>
        {props.category.map(item => {
          return (
            <View>
              <Card containerStyle={externalStyle.containerStyleC}>
                <Text>{item.categoryName}</Text>
              </Card>
            </View>
          );
        })}
      </View>
    </>
  );
}
const mapStateToProps = ({products,quiz}) => ({
  products: products.products, category: quiz.category,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllProducts,getCategory
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
