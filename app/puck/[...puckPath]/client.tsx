"use client";

import { usePathname } from 'next/navigation'
import { Button } from "@measured/puck";
import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";
import config from "../../../puck.config";import headingAnalyzer from "@measured/puck-plugin-heading-analyzer";




export function Client({ path, data }: { path: string; data: Data }) {
  const overrides = {
    headerActions: ({ children }) => (
      <>
        <div>
          <Button href="/" newTab variant="secondary">
            Test
          </Button>
        </div>
        <div>
          <Button href="/studio" newTab variant="secondary">
            Studio
          </Button>
        </div>
        <div>
          <Button href={path} newTab variant="secondary">
            View page
          </Button>
        </div>
      </>
    ),
  };

  return (
    <>
      <Puck
        plugins={[
          headingAnalyzer
        ]}
        headerPath="Pablo Editor"
        overrides={overrides}
        config={config}
        data={data}
        onPublish={async (data: Data) => {
          console.log(data)
          await fetch("/puck/api", {
            method: "post",
            body: JSON.stringify({ data, path }),
          });
        }}
      />
    </>
  );
}
