import React from "react";
import { Alert } from "react-bootstrap";
import styles from "../css/TrackResult.module.css";
import { PropsTrack } from "../commons/interfaces";

function TrackResult(props: PropsTrack) {
  const defaultImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAAAD///8FBQXMzMzV1dXy8vIWFhaMjIz7+/tvb28qKiofHx/R0dE6Ojrx8fG6urqSkpIkJCQaGhrAwMANDQ3j4+NfX19mZmZ2dnZMTExtbW2vr685OTklJSWWlpbc3Nyfn59WVlaAgIBBQUG0tLQxMTGFhYWnp6dPT097e3t5H71fAAADiUlEQVR4nO3YbVfaMBTA8dyU0qo8CRSnMFHRMb//F1xuoKUwkoDD447n//OFC2YhNzcPTY0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADfjv3qDlyaNa2grDGxEG37T+mRsPaE0TpS5dJjPB/ul8bx3kzf15NsPlokOvIzG7Vq3GrpeJPWPC57nZbJ7el9P8lC5LX5OjMVeQhWdb3pvpay0bmPNjsS+bHLeSFlN1Tz50D2PZ4ZQcrKtfmrmZ9dkatARe3uc+5qD5bLSuN8ijVbuAqLJomjSITXA1lmO73YJPoQF2Ep93VfwhHqonpw3Z48a+ntsWzl/ggXk1RNKZbD61xHeO+rTuv5qfo6MfK6FIvQ9HOdetsu9JciRbhZF5MbjVYpFmHhB7B2dggJLsKJSG9bikaY+UXq/uF+pmZc6TwMKWTgqo+aUirCT+Rm6Wyui8oPXmQdmueDpXcvMjShIS/cvHBDMNtMuUSEu4328hn0Obwyy+30i+XQDCW/2ftoInlwV3ARdt9KGVz7EE/P4SeEuNLg3nLJ/YyL5bDarauNO5Hn0L5Q6HBcuUNlWzpnp7kwn0PtbJU4LYwuq71wpnXmj/ARmrXIelOKnxa9RrDBj/MRWvOki8qYcTTCl4OE6ScBmwhNzx/8qRy2VKFqH7eN0C0qnSypHB5+ksihuRlIeZ+cpdXume39/AhSNhFa3fzL3+etw5nulQE+Qtes24Cr6Tnr8PI7Tb+OyW3+1Ti2l7qts7srWd1cBzfHKzc5tPqAOjl5L/2Um1sdoTUvIpmJRDjz5+G2Ey7AhV+64fNwG71O/5evPPHrCKfWuIN/HXum6bVmpUuiO9BX+vto9TqHVme3DP+HCLUvS93NwhGucinvmo519J4TfIxsIvT/TcovjHDR2hD7bucL7zTG3y2G/l44Hg3id4uitUbfXavR8/DwbnHZ5bjaZU2vR2XkBuweDPReWHWypf5ex3aGdoQ6/cvg852eFq37YTYM7l4ftGjNS2seE3f88aQ5mmcmHmHzEOsqdYI5tOZ278SXv0/dfzYf1l+us2MeGUI/e8bFa9aZPMXfYbjMZO2XEeH3NM5nv6dRNlL6Bva3w/Qd2yZeOTbt7Dd7atXLX58OQkq9RrCbO745L9U2FeJBbQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvrk/vhAfSDTOxmIAAAAASUVORK5CYII=";

  if (props.dataTrackItems && props.dataTrackItems.length > 0) {
    return (
      <>
        {props.dataTrackItems?.map((item, index) => {
          return (
            <div className={styles.trackItem} key={index}>
              <div className="row">
                <div className="col-sm-1 align-self-center">
                  <img
                    src={
                      item.album.images[2]
                        ? item.album.images[2].url
                        : defaultImage
                    }
                    className={styles.trackImg}
                  />
                </div>
                <div className="col-sm-4 align-self-center">
                  <h6>{item.name}</h6>
                </div>
                <div className="col-sm-4 align-self-center">
                  <audio
                    src={item.preview_url ? item.preview_url : "#"}
                    controls
                  />
                </div>
                <div className="col-sm-1 align-self-center">
                  <span>{item.type}</span>
                </div>
                <div className="col-sm-2 align-self-center">
                  <span>{item.album.release_date}</span>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  } else {
    return (
      <Alert variant="info" className="mt-3">
        Please choose a artist!!! The list track will show here!
      </Alert>
    );
  }
}

export default TrackResult;
