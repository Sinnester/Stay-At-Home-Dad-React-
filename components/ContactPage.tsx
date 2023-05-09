import React from 'react';

function ContactPage() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [comments, setComments] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, { name, message }]);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Comments</h2>
        {comments.map((comment, index) => (
          <div key={index}>
            <h3>{comment.name}</h3>
            <p>{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactPage;
