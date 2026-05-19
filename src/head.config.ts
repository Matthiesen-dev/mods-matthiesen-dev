export const HEAD_CONFIG = [
    {
        tag: 'link' as const,
        attrs: {
            rel: 'icon',
            type: "image/png",
            sizes: "96x96",
            href: "/favicon-96x96.png"
        },
    },
    {
        tag: 'link' as const,
        attrs: {
            rel: 'shortcut icon',
            href: "/favicon.ico"
        }
    },
    {
        tag: 'link' as const,
        attrs: {
            rel: 'apple-touch-icon',
            sizes: "180x180",
            href: "/apple-touch-icon.png"
        }
    },
    {
        tag: 'meta' as const,
        attrs: {
            name: 'apple-mobile-web-app-title',
            content: "Adam's MC Dev"
        }
    },
    {
        tag: 'link' as const,
        attrs: {
            rel: 'manifest',
            href: "/site.webmanifest"
        }
    }
];