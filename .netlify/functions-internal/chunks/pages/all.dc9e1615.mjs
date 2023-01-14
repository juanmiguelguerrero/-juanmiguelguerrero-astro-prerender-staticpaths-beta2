import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro.ddb7b3f8.mjs';
import 'html-escaper';

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
}, "/Users/juanmi/Desktop/astro-beta-2/src/pages/test/api/[cat].astro");

const $$file = "/Users/juanmi/Desktop/astro-beta-2/src/pages/test/api/[cat].astro";
const $$url = "/test/api/[cat]";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$cat,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page1 as _ };
