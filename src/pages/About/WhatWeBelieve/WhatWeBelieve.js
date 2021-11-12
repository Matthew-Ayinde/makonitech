import React from "react";
import AboutHero from "../../../components/Hero/AboutHero/AboutHero";
import AboutTab from "../../../components/Tab/AboutTab/AboutTab";
import WhatWeBelieveContent from "../../../components/Tab/AboutTab/AboutTabContent/WhatWeBelieve";

const WhatWeBelieve = () => {
  return (
    <div>
      <AboutHero
        title="Our commitment to inclusion & diversity"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim purus tristique tincidunt sem ac dictum nam."
        heroImageIndex="bg_styles--6"
      />
      <AboutTab WhatWeBelieveContent={WhatWeBelieveContent} />
      <WhatWeBelieveContent />
    </div>
  );
};

export default WhatWeBelieve;
