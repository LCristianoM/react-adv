import { Form, Formik } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Formik Page</h1>

			<Formik
				initialValues={{
					name: "",
					email: "",
					password1: "",
					password2: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(2, "el nombre debe contener al menos 3 caracteres")
						.max(15, "el nombre debe contener maximo 15 caracteres")
						.required("Requerido"),
					email: Yup.string().email("Revise el formato del correo").required("Requerido"),
					password1: Yup.string().min(6, "Minimo de 6 letras").required("Requerido"),
					password2: Yup.string()
						.oneOf([Yup.ref("password1")], "Las contraseñas no coinciden")
						.required("Requerido"),
				})}
			>
				{({ handleReset }) => (
					<Form>
						<MyTextInput label="Nombre" name="name" placeholder="Nombre" />
						<MyTextInput label="Email" name="email" type="email" placeholder="correo@correo.com" />
						<MyTextInput label="Password" name="password1" type="password" placeholder="*********" />
						<MyTextInput label="Confirmar contraseña" name="password2" type="password" placeholder="*********" />
						<button type="submit">Create</button>
						<button type="button" onClick={handleReset}>
							Reset Form
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
