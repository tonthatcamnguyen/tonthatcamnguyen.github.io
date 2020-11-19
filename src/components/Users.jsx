import React, { useState } from 'react';
import { ApproveButton, RejectButton } from './ApprovalButtons';
import { faCheck, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

export default function Users(props) {
  const { user } = props;
  console.log(user);

  const { id, name, username, email, phone, website } = user;

  const [approve, setApprove] = useState(false);
  const [reject, setReject] = useState(false);

  const clickApprove = () => {
    if (reject === true) {
      setReject(false);
      return setApprove(true);
    }
    return setApprove(true);
  };

  const clickReject = () => {
    if (approve === true) {
      setApprove(false);
      return setReject(true);
    }
    return setReject(true);
  };

  const showReviewIcon = () => {
    if (approve) {
      return <FontAwesomeIcon icon={faCheck} size="2x" className="approved" />;
    }
    if (reject) {
      return <FontAwesomeIcon icon={faTimes} size="2x" className="rejected" />;
    }
    return '';
  };

  return (
    <div
      key={id}
      id="users-row"
      className={`users-row ${id % 2 !== 0 ? 'primary' : 'secondary'} row`}
    >
      <div className="user media">
        <div className="user-user-icon mr-3">
          <FontAwesomeIcon icon={faUser} size="2x" />
        </div>
        <div className="user-body media-body">
          <h5 className="user-user row">
            {name}
            {username}
            <small className="user-timestamp">
              {moment().calendar().replace(' at ', ', ')}
            </small>
          </h5>
          <p className="user-email row">
            <a
              href={'mailto:' + email}
              className="user-email-link"
              aria-label="email-address"
            >
              {email}
            </a>
          </p>
          
          <p className="user-text row">{phone}</p>
          <p className="user-text row">{website}</p>
          <div className="user-review row">
            <ApproveButton clickedApprove={clickApprove} />
            <RejectButton clickedReject={clickReject} />
          </div>
        </div>
        <div className="user-review-results mr-3">{showReviewIcon()}</div>
      </div>
    </div>
  );
}