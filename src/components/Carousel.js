import Radium from 'radium'

const MyCarousel = () => {

  return (

      <div className="carousel">
  <h2 style={{textAlign: 'center'}}>Lightbox</h2>

      <div className="raw" style={styles.raw}>
        <div className="column" style={styles.column}>
          <img className={styles.pictureWidth} src="https://houseoftheyear.co.nz/media/45245/ak-6550-1-13-1.jpg?width=1260&height=1000&mode=max" style={styles.pictureWidth}
            />
    </div>

        <div className="column" style={styles.column}>
          <img className="hover-shadow cursor" src="https://cf.bstatic.com/images/hotel/max1024x768/195/195731211.jpg" style={styles.pictureWidth}
          />
        </div>

        <div className="column" style={styles.column}>
          <img className="hover-shadow cursor" src="https://ca-times.brightspotcdn.com/dims4/default/1b3c5f0/2147483647/strip/true/crop/5000x3334+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F51%2F0c%2F3fa849c04319b5aaf5aa540621ea%2Ffi-hotprop-davis-5.jpg" style={styles.pictureWidth}
          />
        </div>

        <div className="column" style={styles.column}>
          <img className="hover-shadow cursor" src="https://occ-0-92-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcsIOBXbIfwxaFmQdqDYYjKoAZKDFdaSGHyZl12mdVuVH1ycK_O5irm1px3HUfRYf78Ydj8Dt-kHYaZE_BTxVV9x4h4M.jpg?r=d4a" style={styles.pictureWidth}
          />
        </div>

  </div>

    </div>
    
  );
    
}

const styles = { 

  pictureWidth: {
    width: '100%'
  },

  raw: {
    padding: '0 8px',
    ':after': {
      content: '""',
      display: 'table',
      clear: 'both'
    },
  },

  column: {
    padding: '0 8px',
    float: 'left',
    width: '25%'
  },



};


export default Radium(MyCarousel);