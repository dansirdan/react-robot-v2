import React from 'react';
import {
  Form,
  Button,
  Col
} from 'react-bootstrap';
import API from "../../utils/API";
import { Formik } from 'formik';
import * as Yup from 'yup';
import './style.css';

const schema = Yup.object({
  userInt: Yup.string()
    .matches(/^[A-Za-z]+$/, 'Must only be letters')
    .test('len', 'Must be exactly 3 characters', val => val.length === 3)
    .required('Required')
});

function ScoreForm(props) {

  return (
    <Formik
      validationSchema={schema}
      onSubmit={values => {

        console.log(values.userInt);
        let newScorer = values.userInt.toUpperCase();
        console.log(newScorer);

        API.saveScore({
          name: newScorer,
          score: props.score,
          level: props.level
        })
          .then(res => console.log(res.data))
          .catch(err => console.log(err))

      }}
      initialValues={{
        userInt: 'AAA'
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row className='justify-content-center text-center'>
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Control
                  type="text"
                  name="userInt"
                  value={values.userInt}
                  onChange={handleChange}
                  isValid={touched.userInt && !errors.userInt}
                />
                {<div className="input-feedback">{errors.userInt}</div>}
              </Form.Group>
            </Form.Row>
            <Button disabled={!isValid} type="submit">Save Score</Button>
          </Form>
        )}
    </Formik>
  );
}

export default ScoreForm;