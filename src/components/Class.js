
        function Class({ name, img, description, date, place, eventURL }) {

            const style={
              backgroundImage: img?`url('https://github.com/NastasiaKarpenko/my-eire-app/blob/main/src/images/events/${img}.jpeg?raw=true')`:`url('https://github.com/NastasiaKarpenko/my-eire-app/blob/main/src/images/events/IMG_2.jpeg?raw=true')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }
            
            return (
              <div className="eventItem">
                <div className="eventImg" style={style}>
                </div>
                <div className="eventMain">
                  <div className="eventDate">{date}</div>
                  <div className="eventTitle">{name}</div>
                  <div className="eventDesc">{description}</div>
                  <a href={eventURL} className="eventMore" target="_blank" rel="noopener noreferrer"> More details </a>
                </div>
                <div className="eventLocation">{place}</div>
              </div>
            );
          }

export default Class;