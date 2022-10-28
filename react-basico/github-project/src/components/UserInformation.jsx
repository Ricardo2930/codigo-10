import hotel from "../assets/icons/hotel.png";
import link from "../assets/icons/link.png";
import pin from "../assets/icons/pin.png";
import twitter from "../assets/icons/twitter.png";

import search from "../assets/icons/search.png";
import img from "../assets/icons/IMG_20180202_070622.jpg";


function UserInformation(props) {
    const { user } = props;
  
    return (


<div className="information-container">
        <div className="foto">
          <img
            width="100"
            src={user?.avatar_url}
            alt=""
          />
        </div>

        <div className="description-container">
          <div className="user-date-container">
            <h4>{user.name}</h4>
            <p>{user.created_at}</p>
          </div>
          <div className="user-bio-container">
            <p>@{user?.login}</p>
            <p>{user?.bio}</p>
          </div>
          <div className="card-information">
            <div>
              <h6>Repos</h6>
              <h4>{user?.public_repos}</h4>
            </div>
            <div className="div">
              <h6>Followers</h6>
              <h4>{user?.followers}</h4>
            </div>
            <div>
              <h6>Following</h6>
              <h4>{user?.following}</h4>
            </div>
          </div>

          <div className="info-container">
            <div>
              <p>
                <img width="15" src={pin} alt="" /> {user?.location}
              </p>
              <p>
                <img width="15" src={twitter} alt="" /> {user?.twitter_username}
              </p>
            </div>
            <div>
              <p>
                <img width="15" src={link} alt="" />
                {user?.blog}
              </p>
              <p><img width="15" src={hotel} alt="" /> {user?.company}</p>
            </div>
          </div>
        </div>
      </div>
      );
}

export default UserInformation;