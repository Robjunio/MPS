import React from 'react';
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios"
import { useHistory } from 'react-router-dom';

function CreatePost() {
    let history = useHistory();

    const initialValues = {
        title: "",
        postText: "",
        username: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input a Title!"),
        postText: Yup.string().required("You must input a Text!"),
        username: Yup.string().min(3).max(15).required("You must input a Username!"),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then((response) => {
            history.push("/");
        });
    };

    
  return (
    <div className='createPostPage'> 
        <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit} 
            validationSchema={validationSchema}
        > 
            <Form className='formContainer'>
                <label>Title: </label>
                <ErrorMessage name="title" component="span" />
                <Field
                    id="inputCreatePost" 
                    name="title" 
                    placeholder="Ex.: Title..."
                />
                <label>Post: </label>
                <ErrorMessage name="postText" component="span" />
                <Field 
                    id="inputCreatePost" 
                    name="postText" 
                    placeholder="Ex.: Post..."
                />
                <label>Username: </label>
                <ErrorMessage name="username" component="span" />
                <Field
                    id="inputCreatePost" 
                    name="username" 
                    placeholder="Ex.: Boberto"
                />

                <button type='submit'> Create Post </button>
            </Form>
        </Formik>
    </div>
  );
}

export default CreatePost;
