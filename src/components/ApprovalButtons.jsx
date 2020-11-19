import React from 'react';

export const ApproveButton = (props) => {
  const { clickedApprove } = props;
  
  return (
    <button
      id="btnApprove"
      name="btnApprove"
      type="button"
      className="button button-approve"
      onClick={clickedApprove}
    >
      Approve
    </button>
  );
};

export const RejectButton = (props) => {
  const { clickedReject } = props;
  return (
    <button
      id="btnReject"
      name="btnReject"
      type="button"
      className="button button-reject"
      onClick={clickedReject}
    >
      Reject
    </button>
  );
};
