import React from 'react';

const SvgClose = ({ deletePlayer, playerId }) => (
  <svg viewBox="0 0 48 48" width="48px" height="48px" fill="none" icon="true" onClick={() => deletePlayer(playerId)}>
    <path
      d="M26.119 24l6.394-6.394a1.505 1.505 0 0 0 0-2.119 1.505 1.505 0 0 0-2.12 0L24 21.882l-6.394-6.393a1.499 1.499 0 1 0-2.56 1.06c0 .383.15.768.442 1.058L21.88 24l-6.393 6.394c-.291.29-.441.675-.441 1.06a1.499 1.499 0 0 0 2.56 1.058L24 26.12l6.394 6.393a1.505 1.505 0 0 0 2.119 0 1.505 1.505 0 0 0 0-2.118L26.119 24z"
      fill="currentColor"
    />
  </svg>
);

export default SvgClose;
