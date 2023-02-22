const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { isServer }) => {
		// Here are some stupid workarounds with comments above each to explain what they are trying to work around.
		// If you're editing these, try to avoid replacements causing line numbers to change.
		config.module.rules.push({
			test: /\.[jt]sx?$/,
			loader: 'string-replace-loader',
			options: {
				multiple: [
					// Some scripts which run on both the client and the server contain code which should only run on the client or the server rather than both.
					{
						search: (
							isServer
								? /^[^\n]+ \/\/ @client-only$|\/\/ @client-only {$.*?\/\/ @client-only }$|\/\* @client-only { \*\/.*?\/\* @client-only } \*\//gms
								: /^[^\n]+ \/\/ @server-only$|\/\/ @server-only {$.*?\/\/ @server-only }$|\/\* @server-only { \*\/.*?\/\* @server-only } \*\//gms
						),
						replace: ''
					},
					// Normally, the minifier thinks `import`ed style modules which have nothing `import`ed `from` them are unused, so it omits them from the production build.
					{
						search: /^import '(.+\.module\.(?:s?css|sass))';$/gm,
						replace: (match, matchedPath) => {
							const variableName = `__styles_${matchedPath.replace(/[^\w]/g, '_')}`;
							return `import ${variableName} from '${matchedPath}'; ${variableName};`;
						}
					}
				]
			}
		});

		return config;
	}
};

module.exports = nextConfig;
