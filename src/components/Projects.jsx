import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "../css/styles.css";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

const Projects = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="Biotwin.png" />
          <button
            style={{
              backgroundColor: "#FF7C00",
              borderRadius: "5px",
              width: "80px",
              border: "none",
              position: "relative",
              top: "-40%",
              left: "40%",
              height: "30px",
              cursor: "pointer",
            }}
            className="btn-visit"
          >
            <a
              href="https://biotwins.netlify.app/"
              target="_blank"
              style={{ color: "white" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ fontSize: "16px", marginTop: "1px", color: "white" }}
                >
                  visit
                </div>
                <div
                  style={{
                    marginTop: "2px",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "#FF7C00",
                    marginLeft: "10px",
                  }}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="/new-window (1).png"
                    alt="Share Icon"
                  />
                </div>
              </div>
            </a>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="movierec.png" />
          <button
            style={{
              backgroundColor: "#FF7C00",
              borderRadius: "5px",
              width: "80px",
              border: "none",
              position: "relative",
              top: "-40%",
              left: "40%",
              height: "30px",
              cursor: "pointer",
            }}
            className="btn-visit"
          >
            <a
              href="https://moviesgraph.vercel.app/"
              target="_blank"
              style={{ color: "white" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ fontSize: "16px", marginTop: "1px", color: "white" }}
                >
                  visit
                </div>
                <div
                  style={{
                    marginTop: "2px",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "#FF7C00",
                    marginLeft: "10px",
                  }}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="/new-window (1).png"
                    alt="Share Icon"
                  />
                </div>
              </div>
            </a>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Macro.png" />
          <button
            style={{
              backgroundColor: "#FF7C00",
              borderRadius: "5px",
              width: "80px",
              border: "none",
              position: "relative",
              top: "-40%",
              left: "40%",
              height: "30px",
              cursor: "pointer",
            }}
            className="btn-visit"
          >
            <a
              href="https://macrophage.onrender.com/"
              target="_blank"
              style={{ color: "white" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ fontSize: "16px", marginTop: "1px", color: "white" }}
                >
                  visit
                </div>
                <div
                  style={{
                    marginTop: "2px",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "#FF7C00",
                    marginLeft: "10px",
                  }}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="/new-window (1).png"
                    alt="Share Icon"
                  />
                </div>
              </div>
            </a>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Biotwin.png" />
          <button
            style={{
              backgroundColor: "#FF7C00",
              borderRadius: "5px",
              width: "80px",
              border: "none",
              position: "relative",
              top: "-40%",
              left: "40%",
              height: "30px",
              cursor: "pointer",
            }}
            className="btn-visit"
          >
            <a
              href="https://biotwins.netlify.app/"
              target="_blank"
              style={{ color: "white" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ fontSize: "16px", marginTop: "1px", color: "white" }}
                >
                  visit
                </div>
                <div
                  style={{
                    marginTop: "2px",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "#FF7C00",
                    marginLeft: "10px",
                  }}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="/new-window (1).png"
                    alt="Share Icon"
                  />
                </div>
              </div>
            </a>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="movierec.png" />
          <button
            style={{
              backgroundColor: "#FF7C00",
              borderRadius: "5px",
              width: "80px",
              border: "none",
              position: "relative",
              top: "-40%",
              left: "40%",
              height: "30px",
              cursor: "pointer",
            }}
            className="btn-visit"
          >
            <a
              href="https://moviesgraph.vercel.app/"
              target="_blank"
              style={{ color: "white" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ fontSize: "16px", marginTop: "1px", color: "white" }}
                >
                  visit
                </div>
                <div
                  style={{
                    marginTop: "2px",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "#FF7C00",
                    marginLeft: "10px",
                  }}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="/new-window (1).png"
                    alt="Share Icon"
                  />
                </div>
              </div>
            </a>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Macro.png" />
          <button
            style={{
              backgroundColor: "#FF7C00",
              borderRadius: "5px",
              width: "80px",
              border: "none",
              position: "relative",
              top: "-40%",
              left: "40%",
              height: "30px",
              cursor: "pointer",
            }}
            className="btn-visit"
          >
            <a
              href="https://macrophage.onrender.com/"
              target="_blank"
              style={{ color: "white" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ fontSize: "16px", marginTop: "1px", color: "white" }}
                >
                  visit
                </div>
                <div
                  style={{
                    marginTop: "2px",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "#FF7C00",
                    marginLeft: "10px",
                  }}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="/new-window (1).png"
                    alt="Share Icon"
                  />
                </div>
              </div>
            </a>
          </button>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Projects;
