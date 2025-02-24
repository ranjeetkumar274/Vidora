import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { faPhone, faVideo } from '@fortawesome/free-solid-svg-icons';
import ActionButton from './ActionButton';
import { socket } from '../communication';
import './MainWindow.scss';

function useClientID() {
  const [clientID, setClientID] = useState('');

  useEffect(() => {
    socket
      .on('init', ({ id }) => {
        document.title = `${id} - VideoCall`;
        setClientID(id);
      });
  }, []);

  return clientID;
}

function MainWindow({ startCall }) {
  const clientID = useClientID();
  const [friendID, setFriendID] = useState(null);

  /**
   * Start the call with or without video
   * @param {Boolean} video
   */
  const callWithVideo = (video) => {
    const config = { audio: true, video };
    return () => friendID && startCall(true, friendID, config);
  };

  return (
    <div className="container-main-window">
      <div className="container-1">
        <div className='sub-container1'>
        <h3>
          Share this Code with friends
        </h3>
        <input
          type="text"
          className="txt-clientId-own"
          defaultValue={clientID}
          readOnly
        />
        </div>
        <div className="intructions">
          <h5>Instructions :</h5>
          <ul>
            <li>Your unique code is shown on the left panel.</li>
            <li>Share this code with friends who you want to connect with.</li>
            <li>Enjoy your communication :) </li>
          </ul>
        </div>
      </div>
      <div className="container-2">
        <h3>Enter your friend's Code below</h3>
        <input
          type="text"
          className="txt-clientId"
          spellCheck={false}
          placeholder="Your friend ID"
          onChange={(event) => setFriendID(event.target.value)}
        />
        <div>
          <ActionButton icon={faVideo} onClick={callWithVideo(true)} />
          <ActionButton icon={faPhone} onClick={callWithVideo(false)} />
        </div>
        <div className="intructions">
          <h5>Instructions :</h5>
          <ul>
            <li>Use the right panel where it says "Enter your friend's Code below"</li>
            <li>Enter the code in the "Your friend ID" field</li>
            <li>You have options to connect via video call (camera icon) or phone call (phone icon).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

MainWindow.propTypes = {
  startCall: PropTypes.func.isRequired
};

export default MainWindow;
