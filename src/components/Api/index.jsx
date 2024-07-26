import React from 'react';
import './index.module.css';

const RegistrationForm = () => {
  return (
    <div className="form-container">
      <form className="registration-form">
        <h2 className="form-title">YourEvent</h2>
        <h3 className="form-subtitle">Online Registration</h3>

        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="First Name" />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Email Address" />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company (if applicable)</label>
          <input type="text" id="company" name="company" placeholder="Company" />
        </div>

        <div className="form-group">
          <label htmlFor="address">Physical Address</label>
          <input type="text" id="address" name="address" placeholder="Physical Address" />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <div className="dob-container">
            <select name="dobMonth">
              <option value="">Month</option>
            </select>
            <select name="dobDay">
              <option value="">Day</option>
            </select>
            <select name="dobYear">
              <option value="">Year</option>
            </select>
          </div>
        </div>

        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
