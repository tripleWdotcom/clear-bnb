import React from 'react';
import QuestionForm from '../components/QuestionForm'

function FAQ() {

  return (
    <div style={styles.context}>
      <h1 style={{ margin: '50px 0', textAlign: 'center', color: '#0D4C80' }}>FREQUENTLY ASKED QUESTIONS</h1>
      <hr style={{
        width: '50vw', borderTop: '1px solid', borderRadius: '5px', color: '#0D4C80', margin: '50px auto'
      }} />
      <h2 style={styles.h2}>Q: Do you have any restrictions during the pandemic?</h2>

      <p style={styles.p} >
        A: Yes we do! Guests and house owners must wear masks when interacting.
        Please keep the social distancing. House owners and guests are required
        to maintain a social distance of six feet (two meters) or more — as recommended by global health organizations.
      </p>


      <h2 style={styles.h2}>Q: Do I need to meet my host?</h2>
      <p style={styles.p}>
        A: Options like self check-in or booking an entire home allow you to interact with your host mainly through in-app messaging — you can message or email them anytime if something comes up.
      </p>

      <h2 style={styles.h2}>Q: How many dates can I pick for one rental?</h2>
      <p style={styles.p}>
        A: You can pick up to three date ranges when creating your rental. Sign up with premium account if you want more than that.
      </p>

      <h2 style={styles.h2}>Q: Why can't I add more than 5 pictures when creating a rental?</h2>
      <p style={styles.p}>
        A: You can add up to five free pictures for your house. Sign up with premium account if you want more than that.
      </p>

      <h2 style={styles.h2}>Q: What does it mean to make a house an offer?</h2>
      <p style={styles.p}>
        A: You can choose to create an offer for one period of time for your house. That means that your offer will be featured on the front page and you will get more exposure for a higher fee.
      </p>
      <hr style={{
        width: '50vw', borderTop: '1px solid', borderRadius: '5px', color: '#0D4C80', margin: '50px auto'
      }} />
      <h3 style={styles.h3}>Do you have any further questions? Send us a message!</h3>
      <br />
      <br />
      <QuestionForm />
    </div >
  )
}

const styles = {
  context: {
    backgroundColor: 'white',
    borderRadius: '10px',
    width: '100%'
  },
  h2: {
    paddingTop: '4vh',
    margin: '20px',
  },
  h3: {
    textAlign: 'center',
    margin: '0 40px',
    color: '#005751'
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

export default FAQ
