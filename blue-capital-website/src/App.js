import React from "react";

export default function App() {
  return (
    <div style={{fontFamily: "Arial", padding: "40px"}}>
      <h1>Blue Capital Holdings LLC</h1>
      <p>Acquiring and Growing Profitable Businesses</p>

      <h2>Submit Your Business</h2>
      <form action="https://formspree.io/f/mojkyrap" method="POST">
        <input name="name" placeholder="Name" /><br/><br/>
        <input name="company" placeholder="Company Name" /><br/><br/>
        <input name="revenue" placeholder="Revenue" /><br/><br/>
        <input name="location" placeholder="Location" /><br/><br/>
        <input name="email" placeholder="Email" /><br/><br/>
        <input name="phone" placeholder="Phone" /><br/><br/>
        <textarea name="message" placeholder="Message"></textarea><br/><br/>
        <button type="submit">Submit</button>
      </form>

      <p>Contact: info@bluecapitalholdings.com | 812-312-1910</p>
    </div>
  );
}
