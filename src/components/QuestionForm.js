import { useState } from 'react';
import Radium from 'radium';

function QuestionForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitOk, setSubmitOk] = useState(false)
  const [remainingChar, setRemainingChar] = useState(0)



  const handleSubmit = async e => {

    e.preventDefault()
    console.log(`
      FirstName: ${firstName}
      LastName: ${lastName}
      Email: ${email}
      message: ${message}
    `);

    const newQuestion = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message
    }

    setSubmitOk(true)
    setTimeout(() => {
      setSubmitOk(false)
    }, 5000)

    setFirstName("")
    setLastName("")
    setEmail("")
    setMessage("")

  }

  const reset = () => {
    setSubmitOk(false)
  }




  return (
    <div>
      <form id='formm' onSubmit={handleSubmit} style={questionsFormStyle.form}>
        <input
          required
          name="firstName"
          type="text"
          value={firstName}
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
          style={questionsFormStyle.firstName} key="1"
          onKeyUp={reset}
        >
        </input>
        <input
          required
          name="lastName"
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => {
            console.log("input last Name", e.target.value)
            setLastName(e.target.value)
          }}
          style={questionsFormStyle.lastName} key="2"
          onKeyUp={reset}
        >
        </input>
        <input
          required
          name="email"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={questionsFormStyle.email} key="3"
          onKeyUp={reset}
        >
        </input>
        <textarea
          required
          name="message"
          type="text"
          value={message}
          placeholder="Write your message here"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          maxLength={250}
          style={questionsFormStyle.message} key="4"
          onKeyUp={reset}
        >
        </textarea>
        
        <button style={questionsFormStyle.button} >Submit</button>
        <br />
        {submitOk ? <h3 style={{ textAlign: 'left', color: '#0D4C80'}}>Thank you for your message! We'll try to respond within 48 hrs.</h3> : ''}
      </form>
    </div>
  )
}
const questionsFormStyle = {
  form: {
    display: "grid",
    flexDirection: 'column',
 
    padding: '20px 40px',
    borderRadius: '6px',
    backgroundColor: '#047361',
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: '30px 30px 170px 30px 30px',
    gap: '15px',
 
   
  },
  firstName: {
    gridArea: '1 / 1 / 2 / auto',
    border: '2px teal solid',
    padding: '15px',

    borderRadius: '5px',
    fontFamily: 'Oswald", sans - serif',
    fontWeight: 'bold',
  },
  lastName: {
    gridArea: '1 / 2/ 2 / auto',
    padding: '15px',
    border: '2px teal solid',
    borderRadius: '5px',
    fontFamily: 'Oswald", sans - serif',
    fontWeight: 'bold',
  },
  email: {
    gridArea: '2 / 1 / 3 / 3',
    padding: '15px',
    border: '2px teal solid',
    borderRadius: '5px',
    fontFamily: 'Oswald", sans - serif',
    fontWeight: 'bold',
  },
  message: {
    gridArea: '3 / 1 / 4 / 3',
    padding: '15px',
    border: '0',
    borderRadius: '5px',
    fontSize: 'inherit',
    fontFamily: 'Oswald", sans - serif',
    fontWeight: 'bold',
  },
  counter: {
    gridArea: '4 / 1 / 4 / 2'
  },
  button: {
    gridArea: '4 / 1 / 5 ,/ 3',
    width: '100px',

    textalign: 'center',
    border: 'none',
    backgroundColor: 'white',
    borderRadius: '5px',
    color: 'black',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: "#A8BACE",
      border: "none",
      color: "#fefefe"
    },
  }
}


export default Radium(QuestionForm)
