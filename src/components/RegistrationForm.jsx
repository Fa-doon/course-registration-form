import { useState } from 'react';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!age) {
      newErrors.age = 'Age is required.';
    } else if (Number(age) < 18) {
      newErrors.age = 'You must be at least 18 years old.';
    }

    if (!course) {
      newErrors.course = 'Please select a course.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setAge("");
      setCourse("");
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>First Name: </label>
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>

      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
         {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>

      <div className="form-group">
        <label>Course:</label>
        <select value={course} onChange={e => setCourse(e.target.value)}>
          <option value="">Select a course</option>
          <option value="networking">Introduction to Networking</option>
          <option value="systemDesign">System Design</option>
          <option value="dataStructures">Data Structures</option>
        </select>
        {errors.course && <p className="error">{errors.course}</p>}
      </div>

      <button type="submit">Register</button>
      {isSubmitted && (<p className="success">Registration successful!</p>)}
    </form>
  );
}

export default RegistrationForm;
