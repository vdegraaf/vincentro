import React from 'react';

const SvgAdd = (props) => (
  <svg onClick={props.onSubmit} className='orange' viewBox="0 0 48 48" height="48px" width="48px" fill="none" icon="true" {...props}>
    <path
      d="M34.547 22.5H25.5v-9.047c0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5V22.5h-9.047c-.825 0-1.5.675-1.5 1.5 0 .413.169.788.44 1.06.273.271.648.44 1.06.44H22.5v9.047c0 .412.169.787.44 1.06.272.271.647.44 1.06.44.825 0 1.5-.675 1.5-1.5V25.5h9.047c.825 0 1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAdd;
