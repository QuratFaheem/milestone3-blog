import { createClient, type ClientConfig } from "next-sanity";

const SanityClient:ClientConfig={
    projectId: "s4vzxcqz",
    dataset: "production",
    apiVersion:"2025-01-07",
    useCdn: true
}

export default createClient(SanityClient);
