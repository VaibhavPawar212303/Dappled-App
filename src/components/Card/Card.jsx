import React from "react";
import { userData } from "../../Data/UserData";
function Card() {
  return (
    <>
      <div>
        {userData.map((user) => {
          return (
            <>
              <div className="flex flex-col card">
                <img src={user.authImg} alt="Author-Image" height={100} width={100} />
              <div className="items-center">
                <h4>{user.Author}</h4>
                <h4><a href={user.GitRepo}>Plawright API Repository</a></h4>
                <h4>{user.Describtion}</h4>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Card;
