// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "8pe7spjr",
  dataset: "production",
  apiVersion: "2023-10-23",
  useCdn: false,
};

const client = createClient(config);

export default client;