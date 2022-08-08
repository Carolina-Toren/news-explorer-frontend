import {useState, useCallback} from 'react';

export const useForm = () => {
	const [values, setValues] = useState({
		username: '',
		email: '',
		password: '',
		search: '',
	});

	const [errors, setErrors] = useState({});
	const [isValid, setIsValid] = useState(false);

	const handleInputChange = (e) => {
		const {id, value} = e.target;
		setValues({
			...values,
			[id]: value,
		});
		setErrors({
			...errors,
			[id]: e.target.validationMessage,
		});
		setIsValid(e.target.closest('form').checkValidity());
	};
	const resetForm = useCallback(
		(newValues = {}, newErrors = {}, newIsValid = false) => {
			setValues(newValues);
			setErrors(newErrors);
			setIsValid(newIsValid);
		},
		[setValues, setErrors, setIsValid]
	);

	return {handleInputChange, values, setValues, isValid, errors, resetForm};
};
