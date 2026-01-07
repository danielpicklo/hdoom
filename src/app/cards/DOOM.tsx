import React from "react";
import { Text, Flex } from "@hubspot/ui-extensions";
import { hubspot } from "@hubspot/ui-extensions";

hubspot.extend<'crm.record.tab'>(({ context }) => <Extension context={context} />);

const Extension = ({ context }) => {

  return (
    <>
      <Flex><Text variant="microcopy">////////////////////////////////
        //////////////////////////</Text></Flex>
      <Flex><Text variant="microcopy">//////////////////////////////////////////////////////////</Text></Flex>
      <Flex><Text variant="microcopy">//////////////////////////////////////////////////////////</Text></Flex>
    </>
  );
};
