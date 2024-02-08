import style from "./home.module.css"

function Home() {
  return (
    <main >
    
     <div className={style.main} >
        <div className="container hero_con">
          <div className="main_container">
            
          <h4 className={style.titleOne}>
            POSTED ON <span className={style.titleOneSpan}>STARTUP</span>
          </h4>
          <h1 className={style.titleTwo}>
            Step-by-step guide to choosing great font pairs
          </h1>
          <p className={style.mainTitle}>
            By <span className={style.span}>James West</span> | May 23, 2022
          </p>
          <p className={style.mainTitleLong}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button className={style.btn}>{"Read More >"}</button>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="max-container hero">
        <p className={style.hero__p}>Popular blogs</p>
        <div className={style.heroCard}>
          <div className={style.heroCard__item}>
            <img
              className={style.heroCardImg}
              src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p className="heroP">
              By <span className={style.heroCardSpan}> John Doe</span> | Aug 23,
              2021
            </p>
            <h2 className={style.heroCardTitle}>
              A UX Case Study Creating a Studious Environment for Students:{" "}
            </h2>
            <p className={style.heroCardP}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div className={style.heroCard__item}>
            <img
              className={style.heroCardImg}
              src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p className="heroP">
              By <span className={style.heroCardSpan}> John Doe</span> | Aug 23,
              2021
            </p>
            <h2 className={style.heroCardTitle}>
              A UX Case Study Creating a Studious Environment for Students:{" "}
            </h2>
            <p className={style.heroCardP}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div className={style.heroCard__item}>
            <img
              className={style.heroCardImg}
              src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p className="heroP">
              By <span className={style.heroCardSpan}> John Doe</span> | Aug 23,
              2021
            </p>
            <h2 className={style.heroCardTitle}>
              A UX Case Study Creating a Studious Environment for Students:{" "}
            </h2>
            <p className={style.heroCardP}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>
        <hr className={style.hr} />
        <h1 className={style.heroTitle}>Choose A Catagory</h1>
        <div className={style.card}>
          <div className={style.cardItem}>
            <img
              className={style.cardImg}
              src="../../../../public/Icon.png"
              alt=""
            />
            <h2 className={style.cardTitle}>Business</h2>
            <p className={style.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className={style.cardItem}>
            <img
              className={style.cardImg}
              src="../../../../public/icon4.png"
              alt=""
            />
            <h2 className={style.cardTitle}>Business</h2>
            <p className={style.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className={style.cardItem}>
            <img
              className={style.cardImg}
              src="../../../../public/icon3.png"
              alt=""
            />
            <h2 className={style.cardTitle}>Business</h2>
            <p className={style.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className={style.cardItem}>
            <img
              className={style.cardImg}
              src="../../../../public/icon4.png"
              alt=""
            />
            <h2 className={style.cardTitle}>Business</h2>
            <p className={style.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </div>
      </div>
     </div>
    </main>
  )
}

export default Home
