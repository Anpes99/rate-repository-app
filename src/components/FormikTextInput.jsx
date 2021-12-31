
import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
  TextInput:{
      borderStyle:"solid",
      borderWidth:2,
      borderColor:"#D2D2D2",
      padding:5,
      paddingLeft:10,
      borderRadius:5,
      width:350,
      margin:7
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);	// useField has to be under Formik component to work
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
      style={styles.TextInput}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;