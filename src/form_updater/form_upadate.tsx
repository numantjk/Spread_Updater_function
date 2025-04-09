import {useState} from "react";


function FormUpdater() {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [submittedData, setSubmittedData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // @ts-ignore
        setSubmittedData(prev => [...prev, formData]);
        setFormData({ name: "", email: "" }); // Clear form after submit
    };

    return (
        <div><br/>
            <h2>فرم ثبت اطلاعات</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">  نام:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    /><br/>
                </div><br/>
                <div>
                    <label htmlFor="email">ایمیل:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    /><br/>
                </div>
                <button type="submit">ارسال</button><br/>
            </form>

            <h3>داده‌های ارسال شده:</h3>
            <ul>
                {submittedData.map((data, index) => (
                    <li key={index}>
                        نام: {data.name}, ایمیل: {data.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FormUpdater;
