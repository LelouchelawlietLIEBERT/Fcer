import Mailform from "./Mailform";

const Sendmail = () => {
  return (
    <>
      <div className="grid-container">
        <div className="plane">
          <div className="grid"></div>
          <div className="glow"></div>
        </div>
        <div className="plane">
          <div className="grid"></div>
          <div className="glow"></div>
        </div>
      </div>
      <div className="sendmail">
        <h1 className="h1regi">SEND MAIL</h1>
        <Gbl3 />
        <Mailform />
      </div>
    </>
  );
};
export default Sendmail;
