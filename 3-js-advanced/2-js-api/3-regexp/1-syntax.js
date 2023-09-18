/**
 * @see https://learn.javascript.ru/regular-expressions
 * @see https://regexr.com/
 */

// Syntax

/ /gimsuy
// g - Global
// i - case Insensitive
// m - Multiline
// s - Single line (dot all)
// u - Unicode
// y - stickY

/^a$/ // a

/a{1,5}/ // a, aa, aaa, aaaa, aaaaa
/a+/ // /a{1,}/
/a*/ // /a{0,}/
/a?/ // /a{0,1}/

/[abcd]/ // a, b, c, d
/[^abcd]/ // NOT a, b, c, d
/(a|b|c|d)/ // a, b, c, d

/a(?=b)/
/a(?!b)/
/(?<=b)a/
/(?<!b)a/