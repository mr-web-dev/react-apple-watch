import React from 'react'

export default function Comfort() {
    const obj = [
        {
            id: 1,
            title: "Know your runs. In and out.",
            text: "Train smarter with more in-run stats. Want to compare a run to your last five? Just swipe left. Mark splits by selecting pause or using gestures, like tapping the screen or double-clicking the side button. And get a full post-run report, including elevation.",
            dot: true
        },
        {
            id: 2,
            title: "Run in good spirits.",
            text: "A little support can go a long way. You can receive encouraging emoji from friends. And reminders triggered by your friends’ shared activity, the current weather, or your own history give you every reason to run.",
            dot: true
        },
        {
            id: 3,
            title: "Just do it. Sunday.",
            text: "Run every Sunday and see how long you can keep your streak alive. Fuel your run with exclusive Nike+ Run Club playlists on Apple Music.",
            dot: false
        }
    ]
  return (
    <>
    <div className="comfort" id="about">

        <div className="container comfort__container">

            {obj.map((item)=> {
                return (
                <div className="card" key={item.id}>
                    <h2 className="card__title">{item.title}</h2>
                    <p className="card__text">{item.text}</p>
                    {item.dot == true ?
                    <div className="dots">
                        <span className="box"></span>
                        <span className="box"></span>
                        <span className="box"></span>
                    </div>
                    :
                    <div className="more-wrap">

                    <a href="#offers" className="more">

                        <span className="more__line"></span>

                        <span className="more__text">Learn more</span>
                        
                    </a>

                    </div>}
                </div>
                )
            })}
            
        </div>

    </div>
    </>
  );
}
