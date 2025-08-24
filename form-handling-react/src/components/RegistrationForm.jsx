import { useState } from 'react';

const ControlledForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '' , password: ''});
    const [errors, setErrors] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        if (!formData.username || !formData.email || !formData.password) {
            setErrors("All fields are required.");
            return;
        }

        setErrors("");
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ControlledForm;
