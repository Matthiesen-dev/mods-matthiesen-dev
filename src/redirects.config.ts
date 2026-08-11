

export const matthiesenLibWebhooksRedirects = [
    undefined,
    "index",
    "examples",
    "installation"
].reduce((acc, path) => {
    acc[`/matthiesen-lib-webhooks/${path ?? ""}`] = "/matthiesen-core-webhooks/";
    return acc;
}, {} as Record<string, string>);