// eslint-disable-next-line import/no-extraneous-dependencies
import type { SliceSimulatorParams } from "@slicemachine/adapter-next/simulator";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  SliceSimulator,
  getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";

export default function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams) {
  const slices = getSlices(searchParams.state);

  return (
    <SliceSimulator background="#030712">
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  );
}
