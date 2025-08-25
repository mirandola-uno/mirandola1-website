import React from "react";

const GoogleMapContainer = ({ address }: { address: string }) => {
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        title="Google Maps"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapSrc}
      />
    </div>
  );
};

export default GoogleMapContainer;
