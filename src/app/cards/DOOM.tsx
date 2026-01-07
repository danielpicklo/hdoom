import React from "react";
import { Text, Flex, Button } from "@hubspot/ui-extensions";
import { hubspot } from "@hubspot/ui-extensions";

hubspot.extend<'crm.record.tab'>(({ actions }) => <Extension openIframe={actions.openIframeModal}/>);

const Extension = ({ openIframe }) => {
  
  const handleClick = () => {
    openIframe(
      {
        uri: "https://wikipedia.org/",
        height: 1000,
        width: 1000,
        title: "Wikipedia in an iframe",
        flush: true,
      },
      () => console.log("This message will display upon closing the modal.")
    );
  };

  return (
    <>
      <Flex>Hello, world!</Flex>
      <Button onClick={handleClick}>Load DOOM</Button>
    </>
  );
};
