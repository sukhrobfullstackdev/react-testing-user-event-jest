import React from 'react'
import image_for_test from '../../assets/image_for_test.jpg'
const Application = () => {
  const imgStyles = {
    maxWidth: '300px',
    height: 'auto',
  }
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <span title="close">X</span>
      <img src={image_for_test} alt="developer" style={imgStyles} />
      <div data-testid="custom_element">Custom element</div>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Please enter your name!"
            value="Sukhrobbek"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location: </label>
          <select name="job-location" id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="PA">Pakistan</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label htmlFor="terms">
            <input id="terms" name="terms" type="checkbox" />I agree to the
            terms and conditions
          </label>
        </div>
        <button data-testid="submit_button">Submit</button>
      </form>
    </>
  )
}

export default Application
