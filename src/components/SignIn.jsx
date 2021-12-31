import React from 'react';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import { Pressable, View, Text, StyleSheet } from 'react-native';

const initialValues= {
    username:'',
    password:''
};

const styles = StyleSheet.create({
    submitButton:{
        padding:10,
        borderRadius:5,
        width:350,
        margin:5,
        alignItems:"center",
        backgroundColor:"blue"
    }
  });

const SignInForm = ({ onSubmit }) => {		// 
    return (
      <View style={{alignItems:"center", flexGrow:1}} >
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" />
        <Pressable style={styles.submitButton} onPress={onSubmit}>
          <Text style={{color:"white", fontWeight:"bold"}} >Sign In</Text>
        </Pressable>
      </View>
    );
  };

const SignIn = () => {

    const onSubmit = (values) =>{
        console.log(values.username,"  ", values.password);
    };

  return (

    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;