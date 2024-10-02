import "./suspense.css";

function SuspenseComponent() {
  return (
    <>
      <div className="hero-suspense">
        <div className="suspence-loader"></div>
        <h2>Loading...</h2>
      </div>
    </>
  );
}

export default SuspenseComponent;
