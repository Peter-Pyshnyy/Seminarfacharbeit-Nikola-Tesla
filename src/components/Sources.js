import React, { Component } from "react";
import "./Sources.css";

const sources = `
https://www.sciencefocus.com/science/nikola-tesla-a-genius-or-a-charlatan/,
https://www.mediamarkt.at/de/product/_apple-tv-remote-mqge2z-a-fernbedienung-f%C3%BCr-apple-tv-1604098.html?utm_term=3878&utm_source=google&utm_medium=seo-productfeed,
https://ffrefills.com/shop/baseus-wxsx-01-digital-led-display-wireless-charger-black/,
https://shop.retoura.de/SILVERCRESTZ-Radio-DAB-Taschenradio-tSDR-15-AT-B-Ware-einwandfrei?curr=EUR&utm_source=adwords&gclid=CjwKCAiAz--OBhBIEiwAG1rIOu05PrnuWc_nD4WUNPBrAqtkOah0Ou2DhEFWuqFkY094e_Nh7XWp6xoCKNQQAvD_BwE,
https://www.mhz-powerboats.com/shop/en/motors/e-motors/inrunner-motors/449/brushless-56110-inrunner-electromotor,
https://insideevs.com/news/487500/all-new-tesla-models-now-blacked-out/,
http://docplayer.org/115091815-Ein-selbstgebauter-elektromotor.html
`;

export class Sources extends Component {
  render() {
    return (
      <div
        className="sources"
        onClick={() => {
          alert(sources);
        }}>
        Bildquellen
      </div>
    );
  }
}

export default Sources;
