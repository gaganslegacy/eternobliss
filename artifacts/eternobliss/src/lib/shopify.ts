const envDomain = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || "";
const envToken = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN || "";

const looksLikeDomain = (s: string) => s.includes(".myshopify.com") || (s.includes(".") && !(/^[a-f0-9]{20,}$/i.test(s)));
const looksLikeToken = (s: string) => /^[a-f0-9]{20,}$/i.test(s) && !s.includes(".");

let resolvedDomain: string;
let resolvedToken: string;

if (looksLikeToken(envDomain) && looksLikeDomain(envToken)) {
  resolvedDomain = envToken;
  resolvedToken = envDomain;
} else {
  resolvedDomain = envDomain || "16cee9-2.myshopify.com";
  resolvedToken = envToken;
}

const apiVersion = "2024-01";
const endpoint = `https://${resolvedDomain}/api/${apiVersion}/graphql.json`;

export async function shopifyFetch({
  query,
  variables,
}: {
  query: string;
  variables?: Record<string, unknown>;
}) {
  if (!resolvedToken) {
    throw new Error("Shopify Storefront Access Token not configured.");
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": resolvedToken,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`Shopify API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  if (data.errors) {
    throw new Error(data.errors[0].message);
  }

  return data;
}
