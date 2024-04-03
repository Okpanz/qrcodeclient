import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeRenderer = ({ imageData }) => {
  return (
    <div>
      <QRCode value={imageData} />
    </div>
  );
};

export default QRCodeRenderer;
