import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, m as maybeRenderHead } from '../astro.ddb7b3f8.mjs';
import 'html-escaper';

const $$Astro$1 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>Astro</title>
	${renderHead($$result)}</head>
	<body>
		<h1>Astro</h1>
		<p>Test with astro@2.0.0-beta.2 and prerender option and Netlify adapter configurated</p>
		<p>I have created 2 pages with getStaticPatch [cat].astro and [dog].astro (and prerender = true)</p>
		<p>If we have more than one page with dinamic routes in the same folder we get an error...</p>
		<p>In this example we have 7 routes</p>
		<p>
			<a href="/">/ - Index (this page)</a> <br>
			<a href="/cat1">/cat1</a><br>
			<a href="/cat2">/cat2</a><br>
			<a href="/cat3">/cat3</a><br>
			<a href="/dog1">/dog1</a><br>
			<a href="/dog2">/dog2</a><br>
			<a href="/dog3">/dog3</a><br>
		</p>
		<p>All dog routes doesn't works...</p>

		<p>And if you input any route then cat page will appear... never enter in the dog page.</p>

		<p>For example: <a href="/hello-world">/hello-world</a></p>

		<p>If you take out the Netlify adapter configuration... everything works fine.</p>
		
	</body></html>`;
}, "/Users/juanmi/Desktop/astro-beta-2/src/pages/index.astro");

const $$file$1 = "/Users/juanmi/Desktop/astro-beta-2/src/pages/index.astro";
const $$url$1 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
function getStaticPaths() {
  return [
    {
      params: { cat: "cat1" },
      props: { cat: "cat1" }
    },
    {
      params: { cat: "cat2" },
      props: { cat: "cat2" }
    },
    {
      params: { cat: "cat3" },
      props: { cat: "cat3" }
    }
  ];
}
const $$cat = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$cat;
  const { cat } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div>Good cat, ${cat}!</div>

<a href="/">back</a>`;
}, "/Users/juanmi/Desktop/astro-beta-2/src/pages/test/[cat].astro");

const $$file = "/Users/juanmi/Desktop/astro-beta-2/src/pages/test/[cat].astro";
const $$url = "/test/[cat]";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$cat,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a };
