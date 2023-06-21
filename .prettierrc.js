/** @type {import('prettier').Config} */
module.exports = {
   singleQuote: true,
   trailingComma: 'all',
   bracketSameLine: true,
   tabWidth: 3,
   arrowParens: 'avoid',
   quoteProps: 'consistent',
   proseWrap: 'always',
   singleAttributePerLine: true,
   overrides: [
      {
         files: ['**/*.css', '**/*.scss', '**/*.pcss', '**/*.html'],
         options: {
            singleQuote: false,
         },
      },
   ],
};
