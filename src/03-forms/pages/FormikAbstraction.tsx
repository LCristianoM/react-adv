import { Formik, Form, } from "formik";
import * as Yup from "yup";

import { MyCheckbox, MyTextInput, MySelect } from '../components'

import "../styles/styles.css";


export const FormikAbstraction = () => {
	return (
		<div>
			<h1>Formik Abstraction</h1>

			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					terms: false,
					jobType: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
					lastName: Yup.string().max(15, "Must be 25 characters or less").required("Required"),
					email: Yup.string().email("Format invalid email address").required("Required"),
					terms: Yup.boolean().oneOf([true], "Must be accept the conditions"),
					jobType: Yup.string().notOneOf(["it-jr"], "That options is not aviable").required("Required"),
				})}
			>
				{(formik) => {
					return (
						<Form>
							<MyTextInput
								label="First Name"
								name="firstName"
								placeholder="First name" />
							<MyTextInput
								label="Last Name"
								name="lastName"
								placeholder="Last name" />
							<MyTextInput
								label=" Email Address"
								name="email"
								placeholder="test@correo.com"
								type="email" />

							
							<MySelect label="Job Type" name="jobType">
								<option value="">Pick something</option>
								<option value="developer">Developer</option>
								<option value="designer"> Designer</option>
								<option value="it-senior"> IT Senior</option>
								<option value="it-jr">IT Junior</option>
							</MySelect>
							
							<MyCheckbox label="Terms & conditions" name="terms"/>

							<button type="submit"> Post </button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};
