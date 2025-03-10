import "../css/intro.css";

const Intro = () => {
  class Scene {
    constructor(model) {
      this.views = [
        { bottom: 0, height: 1 },
        { bottom: 0, height: 0 },
      ];

      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.renderer.setPixelRatio(window.devicePixelRatio);

      document.body.appendChild(this.renderer.domElement);

      this.scene = new THREE.Scene();

      for (var ii = 0; ii < this.views.length; ++ii) {
        var view = this.views[ii];
        var camera = new THREE.PerspectiveCamera(
          45,
          window.innerWidth / window.innerHeight,
          1,
          2000
        );
        camera.position.fromArray([0, 0, 180]);
        camera.layers.disableAll();
        camera.layers.enable(ii);
        view.camera = camera;
        camera.lookAt(new THREE.Vector3(0, 5, 0));
      }
      this.light = new THREE.PointLight(0xffffff, 0.75);
      this.light.position.z = 150;
      this.light.position.x = 70;
      this.light.position.y = -20;
      this.scene.add(this.light);

      this.softLight = new THREE.AmbientLight(0xffffff, 1.5);
      this.scene.add(this.softLight);
      this.onResize();
      window.addEventListener("resize", this.onResize, false);

      var edges = new THREE.EdgesGeometry(model.children[0].geometry);
      let line = new THREE.LineSegments(edges);
      line.material.depthTest = false;
      line.material.opacity = 0.5;
      line.material.transparent = true;
      line.position.x = 0.5;
      line.position.z = -1;
      line.position.y = 0.2;

      this.modelGroup = new THREE.Group();

      model.layers.set(0);
      line.layers.set(1);

      this.modelGroup.add(model);
      this.modelGroup.add(line);
      this.scene.add(this.modelGroup);
    }

    render = () => {
      for (var ii = 0; ii < this.views.length; ++ii) {
        var view = this.views[ii];
        var camera = view.camera;

        var bottom = Math.floor(this.h * view.bottom);
        var height = Math.floor(this.h * view.height);

        this.renderer.setViewport(0, 0, this.w, this.h);
        this.renderer.setScissor(0, bottom, this.w, height);
        this.renderer.setScissorTest(true);

        camera.aspect = this.w / this.h;
        this.renderer.render(this.scene, camera);
      }
    };

    onResize = () => {
      this.w = window.innerWidth;
      this.h = window.innerHeight;

      for (var ii = 0; ii < this.views.length; ++ii) {
        var view = this.views[ii];
        var camera = view.camera;
        camera.aspect = this.w / this.h;
        let camZ = (screen.width - this.w * 1) / 3;
        camera.position.z = camZ < 180 ? 180 : camZ;
        camera.updateProjectionMatrix();
      }

      this.renderer.setSize(this.w, this.h);
      this.render();
    };
  }

  function loadModel() {
    gsap.registerPlugin(ScrollTrigger);
    var object;

    function onModelLoaded() {
      object.traverse(function (child) {
        let mat = new THREE.MeshPhongMaterial({
          color: 0x171511,
          specular: 0xd0cbc7,
          shininess: 5,
          flatShading: true,
        });
        child.material = mat;
      });

      setupAnimation(object);
    }

    var manager = new THREE.LoadingManager(onModelLoaded);
    manager.onProgress = (item, loaded, total) =>
      console.log(item, loaded, total);

    var loader = new THREE.OBJLoader(manager);
    loader.load(
      "https://assets.codepen.io/557388/1405+Plane_1.obj",
      function (obj) {
        object = obj;
      }
    );
  }

  function setupAnimation(model) {
    let scene = new Scene(model);
    let plane = scene.modelGroup;

    gsap.fromTo(
      "canvas",
      { x: "50%", autoAlpha: 0 },
      { duration: 1, x: "0%", autoAlpha: 1 }
    );
    gsap.to(".loading", { autoAlpha: 0 });
    gsap.to(".scroll-cta", { opacity: 1 });
    gsap.set("svg", { autoAlpha: 1 });

    let tau = Math.PI * 2;

    gsap.set(plane.rotation, { y: tau * -0.25 });
    gsap.set(plane.position, { x: 80, y: -32, z: -60 });

    scene.render();

    var sectionDuration = 1;
    gsap.fromTo(
      scene.views[1],
      { height: 1, bottom: 0 },
      {
        height: 0,
        bottom: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".blueprint",
          scrub: true,
          start: "bottom bottom",
          end: "bottom top",
        },
      }
    );

    gsap.fromTo(
      scene.views[1],
      { height: 0, bottom: 0 },
      {
        height: 1,
        bottom: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".blueprint",
          scrub: true,
          start: "top bottom",
          end: "top top",
        },
      }
    );

    gsap.to(".ground", {
      y: "30%",
      scrollTrigger: {
        trigger: ".ground-container",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    });

    gsap.from(".clouds", {
      y: "25%",
      scrollTrigger: {
        trigger: ".ground-container",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    });

    let tl = new gsap.timeline({
      onUpdate: scene.render,
      scrollTrigger: {
        trigger: ".content",
        scrub: true,
        start: "top top",
        end: "bottom bottom",
      },
      defaults: { duration: sectionDuration, ease: "power2.inOut" },
    });

    let delay = 0;

    tl.to(".scroll-cta", { duration: 0.25, opacity: 0 }, delay);
    tl.to(plane.position, { x: -10, ease: "power1.in" }, delay);

    delay += sectionDuration;

    tl.to(
      plane.rotation,
      { x: tau * 0.25, y: 0, z: -tau * 0.05, ease: "power1.inOut" },
      delay
    );
    tl.to(
      plane.position,
      { x: -40, y: 0, z: -60, ease: "power1.inOut" },
      delay
    );

    delay += sectionDuration;

    tl.to(
      plane.rotation,
      { x: tau * 0.25, y: 0, z: tau * 0.05, ease: "power3.inOut" },
      delay
    );
    tl.to(plane.position, { x: 40, y: 0, z: -60, ease: "power2.inOut" }, delay);

    delay += sectionDuration;

    tl.to(
      plane.rotation,
      { x: tau * 0.2, y: 0, z: -tau * 0.1, ease: "power3.inOut" },
      delay
    );
    tl.to(
      plane.position,
      { x: -40, y: 0, z: -30, ease: "power2.inOut" },
      delay
    );

    delay += sectionDuration;

    tl.to(plane.rotation, { x: 0, z: 0, y: tau * 0.25 }, delay);
    tl.to(plane.position, { x: 0, y: -10, z: 50 }, delay);

    delay += sectionDuration;
    delay += sectionDuration;

    tl.to(
      plane.rotation,
      { x: tau * 0.25, y: tau * 0.5, z: 0, ease: "power4.inOut" },
      delay
    );
    tl.to(plane.position, { z: 30, ease: "power4.inOut" }, delay);

    delay += sectionDuration;

    tl.to(
      plane.rotation,
      { x: tau * 0.25, y: tau * 0.5, z: 0, ease: "power4.inOut" },
      delay
    );
    tl.to(plane.position, { z: 60, x: 30, ease: "power4.inOut" }, delay);

    delay += sectionDuration;

    tl.to(
      plane.rotation,
      { x: tau * 0.35, y: tau * 0.75, z: tau * 0.6, ease: "power4.inOut" },
      delay
    );
    tl.to(plane.position, { z: 100, x: 20, y: 0, ease: "power4.inOut" }, delay);

    delay += sectionDuration;

    tl.to(
      plane.rotation,
      { x: tau * 0.15, y: tau * 0.85, z: -tau * 0, ease: "power1.in" },
      delay
    );
    tl.to(plane.position, { z: -150, x: 0, y: 0, ease: "power1.inOut" }, delay);

    delay += sectionDuration;

    tl.to(
      plane.rotation,
      {
        duration: sectionDuration,
        x: -tau * 0.05,
        y: tau,
        z: -tau * 0.1,
        ease: "none",
      },
      delay
    );
    tl.to(
      plane.position,
      { duration: sectionDuration, x: 0, y: 30, z: 320, ease: "power1.in" },
      delay
    );

    tl.to(
      scene.light.position,
      { duration: sectionDuration, x: 0, y: 0, z: 0 },
      delay
    );
  }

  loadModel();

  return (
    <>
      <div className="body">
        <div className="content">
          <div className="loading">Loading</div>
          <div className="trigger"></div>
          <div className="section">
            <h1 style={{ fontSize: "45px" }}>Hi I'm ASHWIN</h1>
            <h3>This is My Boring Description</h3>
            <p>Enjoy the ride getting bored while reading if you want to</p>
            <div className="scroll-cta">Scroll down gently</div>
          </div>

          <div className="section right">
            <h2>Basically I'm into ... </h2>
          </div>

          <div className="ground-container">
            <div className="parallax ground"></div>
            <div className="section right">
              <h2>1. Web Development</h2>
              <p style={{ fontSize: "25px" }}>
                coming up with creative designs.. n .. all
              </p>
            </div>

            <div className="section">
              <h2>2. Data Science</h2>
              <p style={{ fontSize: "25px" }}>
                Love python, so have grasp of its libraries.. n .. all{" "}
              </p>
            </div>

            <div className="section right">
              <h2>3. Mathematics</h2>
              <p style={{ fontSize: "25px" }}>
                I love Math most of all, especially calculus and statistics, its
                just awesome ...
              </p>
            </div>
            <div className="parallax clouds"></div>
          </div>

          <div className="blueprint">
            <div className="section dark">
              <h2>About Me : </h2>
              <p
                style={{
                  width: "600px",
                  lineHeight: "40px",
                  color: "rgb(21, 255, 0)",
                }}
              >
                Meet Ashwin Gowda (Myself), a React enthusiast with a 9.2 GPA
                and a deep love for math. Currently studying at Ramaiah
                Institute of Technology in Bangalore, they're all about building
                sleek UIs and solving data science problems, all while cracking
                numbers like it's a game. From Python to Go, I love every
                programming language they meet, and they’re always ready to
                solve bugs and equations with equal enthusiasm.
              </p>
            </div>
            <div
              className="section dark length"
              style={{ marginBottom: "100px" }}
            >
              <h2>Tech and Skills</h2>
              <h3 style={{ marginTop: "80px", color: "rgb(203, 255, 32)" }}>
                Web Development :{" "}
              </h3>
              <ul>
                <li style={{ display: "flex", cursor: "pointer" }}>
                  <div style={{ width: "30px" }}>
                    <img style={{ width: "100%" }} src="html.png" alt="" />
                  </div>
                  <h4 style={{ marginTop: "5px", marginLeft: "10px" }}>HTML</h4>
                </li>
                <li style={{ display: "flex", cursor: "pointer" }}>
                  <div style={{ width: "30px" }}>
                    <img style={{ width: "100%" }} src="css.png" alt="" />
                  </div>
                  <h4 style={{ marginTop: "5px", marginLeft: "10px" }}>CSS</h4>
                </li>
                <li style={{ display: "flex", cursor: "pointer" }}>
                  <div style={{ width: "30px" }}>
                    <img style={{ width: "100%" }} src="js.png" alt="" />
                  </div>
                  <h4 style={{ marginTop: "5px", marginLeft: "10px" }}>
                    JAVASCRIPT
                  </h4>
                </li>
                <li style={{ display: "flex", cursor: "pointer" }}>
                  <div style={{ width: "30px" }}>
                    <img style={{ width: "100%" }} src="react.png" alt="" />
                  </div>
                  <h4 style={{ marginTop: "5px", marginLeft: "10px" }}>
                    REACT JS
                  </h4>
                </li>
                <li style={{ display: "flex", cursor: "pointer" }}>
                  <div style={{ width: "30px" }}>
                    <img style={{ width: "100%" }} src="nodejs.png" alt="" />
                  </div>
                  <h4 style={{ marginTop: "5px", marginLeft: "10px" }}>
                    NODE JS
                  </h4>
                </li>
                <li style={{ display: "flex", cursor: "pointer" }}>
                  <div style={{ width: "40px" }}>
                    <img style={{ width: "100%" }} src="mongodb.svg" alt="" />
                  </div>
                  <h4 style={{ marginTop: "5px", marginLeft: "10px" }}>
                    MONGO DB
                  </h4>
                </li>
                <li style={{ display: "flex", cursor: "pointer" }}>
                  <div style={{ width: "40px" }}>
                    <img style={{ width: "100%" }} src="flask.png" alt="" />
                  </div>
                  <h4 style={{ marginTop: "5px", marginLeft: "10px" }}>
                    FLASK (PYTHON)
                  </h4>
                </li>
                <li style={{ display: "flex", cursor: "pointer" }}>
                  <div style={{ width: "30px" }}>
                    <img style={{ width: "100%" }} src="express.png" alt="" />
                  </div>
                  <h4 style={{ marginTop: "5px", marginLeft: "10px" }}>
                    EXPRESS JS
                  </h4>
                </li>
                <li style={{ display: "flex", cursor: "pointer" }}>
                  <div style={{ width: "30px" }}>
                    <img style={{ width: "100%" }} src="mysql.png" alt="" />
                  </div>
                  <h4 style={{ marginTop: "5px", marginLeft: "10px" }}>
                    MYSQL DB
                  </h4>
                </li>
              </ul>
            </div>
            <div className="section dark wingspan">
              <h3 style={{ marginTop: "100px", color: "rgb(203, 255, 32)" }}>
                Data Science :{" "}
              </h3>
              <p>Currently Learning ...</p>
            </div>
            <div className="section dark">
              <h3 style={{ color: "rgb(203, 255, 32)" }}>
                Programming Languages :{" "}
              </h3>
              <ul>
                <li style={{ display: "flex", cursor: "pointer" }}>
                  <div style={{ width: "30px" }}>
                    <img style={{ width: "100%" }} src="python.png" alt="" />
                  </div>
                  <h4 style={{ marginTop: "5px", marginLeft: "10px" }}>
                    PYTHON
                  </h4>
                </li>
                <li style={{ display: "flex", cursor: "pointer" }}>
                  <div style={{ width: "30px" }}>
                    <img style={{ width: "100%" }} src="java.png" alt="" />
                  </div>
                  <h4 style={{ marginTop: "5px", marginLeft: "10px" }}>JAVA</h4>
                </li>
                <li style={{ display: "flex", cursor: "pointer" }}>
                  <div style={{ width: "30px" }}>
                    <img style={{ width: "100%" }} src="c.png" alt="" />
                  </div>
                  <h4 style={{ marginTop: "5px", marginLeft: "10px" }}>C</h4>
                </li>
                <li style={{ display: "flex", cursor: "pointer" }}>
                  <div style={{ width: "30px" }}>
                    <img style={{ width: "100%" }} src="cpp.png" alt="" />
                  </div>
                  <h4 style={{ marginTop: "5px", marginLeft: "10px" }}>C++</h4>
                </li>
                <li style={{ display: "flex", cursor: "pointer" }}>
                  <div style={{ width: "30px" }}>
                    <img style={{ width: "100%" }} src="js.png" alt="" />
                  </div>
                  <h4 style={{ marginTop: "5px", marginLeft: "10px" }}>
                    JAVASCRIPT
                  </h4>
                </li>
                <li style={{ display: "flex", cursor: "pointer" }}>
                  <div style={{ width: "50px" }}>
                    <img style={{ width: "100%" }} src="go.png" alt="" />
                  </div>
                  <h4 style={{ marginTop: "5px", marginLeft: "10px" }}>GO</h4>
                </li>
              </ul>
            </div>
          </div>
          <div className="sunset">
            <div className="section"></div>
            <div className="section end">
              <h2>Thanks for getting Bored!!</h2>
              <p>
                {" "}
                if you are wondering about email and contacting go to main page
              </p>
              <a href="/">Click here to go back</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Intro;
