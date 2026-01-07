import React from "react";
import { Text, Flex, Button } from "@hubspot/ui-extensions";
import { hubspot } from "@hubspot/ui-extensions";

hubspot.extend<'crm.record.tab'>(({ actions }) => <Extension openIframe={actions.openIframeModal}/>);

const Extension = ({ openIframe }) => {
  
  const handleClick = () => {
    openIframe(
      {
        uri: "http://localhost:8000/_index.html",
        height: 420,
        width: 640,
        title: "HDOOM",
        flush: true,
      },
      () => console.log("This message will display upon closing the modal.")
    );
  };

  return (
    <>
      <Button onClick={handleClick}>Load DOOM?</Button>
    </>
  );
};
