import { Field, Form, Formik } from "formik";

const LoginComponent = () => {
  console.log("logged In");
  // const handleSubmit =(values) =>{
  //     console.log("handleSUbmit" , values);
  // }
  return (
    <div className="login-container">
      <section className="h-screen">
        <div className="px-6 py-12 h-full">
          <div className="flex flex-col justify-center items-center flex-wrap h-full g-6 text-gray-dark lg:py-12 lg:shadow-lg lg:rounded-lg">
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <div className="login-header text-5xl font-medium">
                Log in to Food Villa
              </div>
              <Formik
                initialValues={intialValues}
                onSubmit={(values) => handleSubmit(values)}
              >
                <Form>
                  <Field
                  className="border p-4 border-gray-100 shadow-sm rounded-md outline-none"
                    name="emailAddress"
                    type="email"
                    placeholder="Email Address"
                    id="email"
                  />
                  <Field name="password" placeholder="Password" id="password" />
                  <button type="submit">Log In </button>
                  <p>
                    By clicking on Login, I accept the Terms and Conditions and
                    Privacy Policy
                  </p>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

let intialValues = {
  emial: "",
  password: "",
};

export default LoginComponent;
