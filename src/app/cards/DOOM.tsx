import React, { useState, useEffect } from "react";
import { Text, Flex, Button } from "@hubspot/ui-extensions";
import { hubspot } from "@hubspot/ui-extensions";

hubspot.extend<'crm.record.tab'>(({ context }) => <Extension context={context} />);

const Extension = ({ context }) => {
  const [doomModule, setDoomModule] = useState<any>(null);

  useEffect(() => {
    //loadDoom();
  }, []);

  async function loadDoom() {
    try {
      const { default: DoomModule } = await import("../doom/doomgeneric.js");
      setDoomModule(DoomModule);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <>
      <Flex>Hello, world!</Flex>
      <Button onClick={() => loadDoom()}>Click me</Button>
      {doomModule && <Flex>Doom module loaded</Flex>}
    </>
  );
};
