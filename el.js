export default function cssPrefixLoader(content) {
    // Example logic: Add vendor prefixes to CSS properties
    const prefixedContent = content.replace(/border-radius/g, '-webkit-border-radius');
    return prefixedContent;
}
