import PopupModal from "./Adpopup";
import { WebAbout } from "./WebAbout";
import { WebBanner } from "./WebBanner";
import { WebContact } from "./WebContact";
import { WebEvent } from "./WebEvent";
import { WebFooter } from "./WebFooter";
import { WebHeader } from "./WebHeader";
import { WebImpact } from "./WebImpact";
import { WebObjectives } from "./WebObjectives";
import { WebPartner } from "./WebPartner";
import { WebPartnersWithus } from "./WebPartnersWithus";
import { WebUpcomingEvent } from "./WebUpcomingEvent";
import { WebWhatWeDo } from "./WebwhatweDo";

export const WebLayout = () => {
  return (
    <>
      <WebHeader />
      <WebBanner />
      <WebAbout />
      <WebWhatWeDo />
      <WebImpact />
      <WebObjectives />
      <WebUpcomingEvent />
      <WebPartnersWithus />
      <WebEvent />
      <WebPartner />
      <WebContact />
      <WebFooter />
      <PopupModal />
    </>
  );
};
