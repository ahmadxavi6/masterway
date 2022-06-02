import React from "react";
/// home page
function Home() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <>
      <div className="workers">{date}</div>
    </>
  );
}

export default Home;
