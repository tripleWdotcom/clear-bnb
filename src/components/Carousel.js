import Radium from 'radium'

const MyCarousel = () => {

  const openModal = () =>  {
    document.getElementsByClassName("myModal").style.display = "block";
  }

  const closeModal = () => {
    document.getElementsByClassName("myModal").style.display = "none";
  }
   
  let slideIndex = 1;
  showSlides(slideIndex);

  const plusSlides = (n) => {
    showSlides(slideIndex += n);
  }
   
  const currentSlide = (n) => {
    showSlides(slideIndex = n);
  }
   
  
  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementsByClassName("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
   }
    
   
  

  return (

      <div className="carousel">
  <h2 style={{textAlign: 'center'}}>Lightbox</h2>

      <div className="row" style={styles.row}>
        <div className="column" style={styles.column}>
          <img className={styles.pictureWidth} src="https://houseoftheyear.co.nz/media/45245/ak-6550-1-13-1.jpg?width=1260&height=1000&mode=max" style={styles.pictureWidth} onClick={openModal}
            />
    </div>

        <div className="column" style={styles.column}>
          <img className="hover-shadow cursor" src="https://cf.bstatic.com/images/hotel/max1024x768/195/195731211.jpg" style={styles.pictureWidth} onClick={openModal}
          />
        </div>

        <div className="column" style={styles.column}>
          <img className="hover-shadow cursor" src="https://ca-times.brightspotcdn.com/dims4/default/1b3c5f0/2147483647/strip/true/crop/5000x3334+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F51%2F0c%2F3fa849c04319b5aaf5aa540621ea%2Ffi-hotprop-davis-5.jpg" style={styles.pictureWidth} onClick={openModal}
          />
        </div>

        <div className="column" style={styles.column}>
          <img className="hover-shadow cursor" src="https://occ-0-92-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcsIOBXbIfwxaFmQdqDYYjKoAZKDFdaSGHyZl12mdVuVH1ycK_O5irm1px3HUfRYf78Ydj8Dt-kHYaZE_BTxVV9x4h4M.jpg?r=d4a" style={styles.pictureWidth} onClick={openModal}
          />
        </div> 
    </div>

      <div className="myModal" className="modal">
        <span className="close cursor" onClick={closeModal}>&times;</span>
        <div className="modal-content">
         
          <div className="mySlides">
            <div className="numbertext">1 / 4</div>
            <img src="https://houseoftheyear.co.nz/media/45245/ak-6550-1-13-1.jpg?width=1260&height=1000&mode=max" 
            style={styles.pictureWidth} />
              </div>

          <div className="mySlides">
            <div className="numbertext">2 / 4</div>
            <img src="https://cf.bstatic.com/images/hotel/max1024x768/195/195731211.jpg"
              style={styles.pictureWidth} />
          </div>

          
          <div className="mySlides">
            <div className="numbertext">3 / 4</div>
            <img src="https://ca-times.brightspotcdn.com/dims4/default/1b3c5f0/2147483647/strip/true/crop/5000x3334+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F51%2F0c%2F3fa849c04319b5aaf5aa540621ea%2Ffi-hotprop-davis-5.jpg"
              style={styles.pictureWidth} />
          </div>

          <div className="mySlides">
            <div className="numbertext">3 / 4</div>
            <img src="https://occ-0-92-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcsIOBXbIfwxaFmQdqDYYjKoAZKDFdaSGHyZl12mdVuVH1ycK_O5irm1px3HUfRYf78Ydj8Dt-kHYaZE_BTxVV9x4h4M.jpg?r=d4a"
              style={styles.pictureWidth} />
          </div>

          <div className="mySlides">
            <div className="numbertext">4 / 4</div>
            <img src="https://occ-0-92-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcsIOBXbIfwxaFmQdqDYYjKoAZKDFdaSGHyZl12mdVuVH1ycK_O5irm1px3HUfRYf78Ydj8Dt-kHYaZE_BTxVV9x4h4M.jpg?r=d4a"
              style={styles.pictureWidth} />
          </div>

          <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={plusSlides(1)}>&#10095;</a>

          <div className="caption-container">
            <p className="caption"></p>
          </div>

          <div className="column">
            <img className="demo cursor" src="https://houseoftheyear.co.nz/media/45245/ak-6550-1-13-1.jpg?width=1260&height=1000&mode=max" style={styles.pictureWidth} onClick={currentSlide(1)} alt="Nature and sunrise" />
              </div>

          <div className="column">
            <img className="demo cursor" src="https://cf.bstatic.com/images/hotel/max1024x768/195/195731211.jpg" style={styles.pictureWidth} onClick={currentSlide(2)} alt="Snow" />
          </div>


          <div className="column">
            <img className="demo cursor" src="https://occ-0-92-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcsIOBXbIfwxaFmQdqDYYjKoAZKDFdaSGHyZl12mdVuVH1ycK_O5irm1px3HUfRYf78Ydj8Dt-kHYaZE_BTxVV9x4h4M.jpg?r=d4a" style={styles.pictureWidth} onClick={currentSlide(3)} alt="Mountains and fjords" />
          </div>

          <div className="column">
            <img className="demo cursor" src="https://occ-0-92-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcsIOBXbIfwxaFmQdqDYYjKoAZKDFdaSGHyZl12mdVuVH1ycK_O5irm1px3HUfRYf78Ydj8Dt-kHYaZE_BTxVV9x4h4M.jpg?r=d4a" style={styles.pictureWidth} onClick={currentSlide(4)} alt="Northern Lights" />
          </div>
    
          

          </div>
      </div>
   
   </div>
    
  );
    
}

const styles = { 

  pictureWidth: {
    width: '100%'
  },

  row: {
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