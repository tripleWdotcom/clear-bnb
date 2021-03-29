import React from 'react';
import Radium from 'radium';
import QuestionForm from '../components/QuestionForm'

function FAQ() {

  return (
    <div className="content" key="1" style={styles.context}>
      <h2 style={styles.h2}>Q: Do you have any restrictions during the pandemic?</h2>

      <p style={styles.p} >
        A: Yes we do!Guests and house owner must wear masks when interacting.
           Please keep the social distancing.House owner and guests are required
           to maintain a social distance of six feet (two meters) or more—as recommended by global health organizations.
      </p>
      
     
      <h2 style={styles.h2}>Q: Do I need to meet my host?</h2>
      <p style={styles.p}>
        A: Because someone has booked it before you click on booking button.
        Options like self check-in or booking an entire home allow you to interact with your host mainly through in-app messaging—you can message them anytime if something comes up.
      </p>

      <h2 style={styles.h2}>Q: Why I can not book after I click on booking button ?</h2>
      <p style={styles.p}>
        A: Because someone has booked it before you click on booking button.
        or the house owner has removed this avaiable house from the ClearBnB before you subbmit.
      </p>

      <h2 style={styles.h2}>Q: Can I add more than five avaiable houses on ClearBnB ?</h2>
      <p style={styles.p}>
        A: Yes,you can. You add it one house by one house on my new rentals page.
      </p>
      <br />
      <h3 style={styles.h3}>Do you have any questions? Send us a message!</h3>
      <br />
      <br />
      <QuestionForm />
    </div >
  )
}



const styles = {
  h2:{
    paddingTop: '4vh',
    margin: '20px',
  },
  h3: {
    textalign: 'center',
    borderBottom: '#6e1020 1px solid',
    width: '55%',
    margin: 'auto'
  },
  p: {
    margin: '20px',
  },
  content: {
    margin: '0 auto',
    width: '60vw',
    marginTop: '15vh'
  }
}

export default Radium(FAQ);
