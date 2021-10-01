import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

import { PropsArtist } from "../commons/interfaces";

import styles from "../css/ArtistResult.module.css";

function ArtistResult(props: PropsArtist) {
  let defaultImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAAAD///8FBQXMzMzV1dXy8vIWFhaMjIz7+/tvb28qKiofHx/R0dE6Ojrx8fG6urqSkpIkJCQaGhrAwMANDQ3j4+NfX19mZmZ2dnZMTExtbW2vr685OTklJSWWlpbc3Nyfn59WVlaAgIBBQUG0tLQxMTGFhYWnp6dPT097e3t5H71fAAADiUlEQVR4nO3YbVfaMBTA8dyU0qo8CRSnMFHRMb//F1xuoKUwkoDD447n//OFC2YhNzcPTY0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADfjv3qDlyaNa2grDGxEG37T+mRsPaE0TpS5dJjPB/ul8bx3kzf15NsPlokOvIzG7Vq3GrpeJPWPC57nZbJ7el9P8lC5LX5OjMVeQhWdb3pvpay0bmPNjsS+bHLeSFlN1Tz50D2PZ4ZQcrKtfmrmZ9dkatARe3uc+5qD5bLSuN8ijVbuAqLJomjSITXA1lmO73YJPoQF2Ep93VfwhHqonpw3Z48a+ntsWzl/ggXk1RNKZbD61xHeO+rTuv5qfo6MfK6FIvQ9HOdetsu9JciRbhZF5MbjVYpFmHhB7B2dggJLsKJSG9bikaY+UXq/uF+pmZc6TwMKWTgqo+aUirCT+Rm6Wyui8oPXmQdmueDpXcvMjShIS/cvHBDMNtMuUSEu4328hn0Obwyy+30i+XQDCW/2ftoInlwV3ARdt9KGVz7EE/P4SeEuNLg3nLJ/YyL5bDarauNO5Hn0L5Q6HBcuUNlWzpnp7kwn0PtbJU4LYwuq71wpnXmj/ARmrXIelOKnxa9RrDBj/MRWvOki8qYcTTCl4OE6ScBmwhNzx/8qRy2VKFqH7eN0C0qnSypHB5+ksihuRlIeZ+cpdXume39/AhSNhFa3fzL3+etw5nulQE+Qtes24Cr6Tnr8PI7Tb+OyW3+1Ti2l7qts7srWd1cBzfHKzc5tPqAOjl5L/2Um1sdoTUvIpmJRDjz5+G2Ey7AhV+64fNwG71O/5evPPHrCKfWuIN/HXum6bVmpUuiO9BX+vto9TqHVme3DP+HCLUvS93NwhGucinvmo519J4TfIxsIvT/TcovjHDR2hD7bucL7zTG3y2G/l44Hg3id4uitUbfXavR8/DwbnHZ5bjaZU2vR2XkBuweDPReWHWypf5ex3aGdoQ6/cvg852eFq37YTYM7l4ftGjNS2seE3f88aQ5mmcmHmHzEOsqdYI5tOZ278SXv0/dfzYf1l+us2MeGUI/e8bFa9aZPMXfYbjMZO2XEeH3NM5nv6dRNlL6Bva3w/Qd2yZeOTbt7Dd7atXLX58OQkq9RrCbO745L9U2FeJBbQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvrk/vhAfSDTOxmIAAAAASUVORK5CYII=";

  const [idArtist, setIdArtist] = useState("");

  useEffect(() => {
    props.handleArtistId(idArtist);
  }, [idArtist]);

  if (props.dataArtistItems && props.dataArtistItems.length > 0) {
    return (
      <>
        <div className="row mt-5">
          {props.dataArtistItems?.map((item, index) => {
            if (index < 8) {
              return (
                <div
                  key={index}
                  className="col-sm-3"
                  onClick={(event) => {
                    setIdArtist(item.id);
                  }}
                >
                  <div className={styles.artistItem}>
                    <div className="mb-2">
                      <img
                        src={item.images[0] ? item.images[0].url : defaultImage}
                        className={styles.images}
                      />
                    </div>
                    <h4>{item.name}</h4>
                    <div>
                      <span>{item.popularity}</span>
                    </div>
                    <div>
                      <span>{item.genres}</span>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </>
    );
  } else {
    return (
      <div className="row mt-5 p-3">
        <Alert variant="warning">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            No data can show now! Please enter an other keyword for artist!!!!{" "}
          </p>
        </Alert>
      </div>
    );
  }
}

export default ArtistResult;
