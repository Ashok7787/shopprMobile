import React, {useEffect} from 'react';
import {View,ScrollView } from 'react-native';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Card, Input, Button, Text,withTheme} from 'react-native-elements';
import MainHeader from '../../Navigation/MainHeader';
import {addQuizName} from './QuizAction';
import externalStyle from '../../style/externalStyle';

function QuizName(props) { 
 
  function handeleCallBack(data) {
    if(data==="success"){props.navigation.navigate('Quiz')}
    else{alert("Wrong")}
 }; 
  
  return (
    <>
      <MainHeader />
      <Formik
        initialValues={{
          duration: "",
          quizName: "",        
          quizHostId: "QH4472404666122022",         
        }}
        onSubmit={(values,{resetForm}) => {
          //alert(JSON.stringify(values));         
          props.addQuizName(values,handeleCallBack)
          resetForm();
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          errors,
          values,
        }) => (
          <View style={externalStyle.firstView}>
            
            <View style={externalStyle.container}>
            <ScrollView>
                <Card containerStyle={externalStyle.mainCardPlayQuiz}>
                <Input
                  name="quizName"
                  onChangeText={handleChange('quizName')}
                  style={{textAlign: 'center'}}
                  placeholder="Enter Quiz Name"
                />
                 <Input
                  name="duration"
                  onChangeText={handleChange('duration')}
                  style={{textAlign: 'center'}}
                  placeholder="Enter Response time per question"
                />
                 <Text                 
                  onChangeText={handleChange('quizName')}
                  style={externalStyle.firstCardText}>
                  Standard                  
                  </Text>
                <Button
                title={'Add Quiz'}
                titleStyle={externalStyle.titleStyleLB}
                containerStyle={externalStyle.containerStyleLB}
                buttonStyle={externalStyle.buttonStyleHP}
                onPress={handleSubmit}
               // onPress={() => props.navigation.navigate('Quiz')}
                />
                {/* <AntIcon name="enter" color="green" size={40} /> */}
              </Card>
              </ScrollView>
              </View>           
           
            
          </View>
        )}
      </Formik>
     
    </>
  );
}
const mapStateToProps = ({auth, quiz}) => ({
  addingQuizName: quiz.addingQuizName,
  addingQuizNameError: quiz.addingQuizNameError,  
  quizName: quiz.quizName, 
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {      
      addQuizName,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(QuizName);
