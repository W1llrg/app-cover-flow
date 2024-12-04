import { defineComponent, useSSRContext, withAsyncContext, ref, computed, mergeProps, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
import axios from 'axios';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'bcrypt';
import 'typeorm';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {
  __name: "CoverFlow",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let coversData;
    [__temp, __restore] = withAsyncContext(() => axios.get("http://localhost:3000/api/song/getAll").then((res) => {
      coversData = res.data.songs;
      console.log(coversData);
    })), await __temp, __restore();
    let covers = [];
    for (let cover of coversData) {
      const coverEntry = { title: cover.name, artist: cover.artist, image: cover.cover };
      covers.push(coverEntry);
    }
    const currentIndex = ref(0);
    ref(null);
    const currentCover = computed(() => covers[currentIndex.value]);
    const coverStyle = (index) => {
      const offset = index - currentIndex.value;
      const rotateY = offset * 45;
      const translateZ = Math.abs(offset) * 50;
      const opacity = 1 - Math.abs(offset) * 0.3;
      return {
        transform: `translateX(${offset * 50}%) rotateY(${rotateY}deg) translateZ(${-translateZ}px)`,
        opacity,
        zIndex: covers.length - Math.abs(offset)
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "coverflow-container" }, _attrs))} data-v-dea944ec><div class="coverflow" tabindex="0" data-v-dea944ec><!--[-->`);
      ssrRenderList(unref(covers), (cover, index) => {
        _push(`<div class="${ssrRenderClass([{ "center": index === currentIndex.value }, "cover"])}" style="${ssrRenderStyle(coverStyle(index))}" data-v-dea944ec><img${ssrRenderAttr("src", cover.image)}${ssrRenderAttr("alt", cover.title)} data-v-dea944ec><div class="reflection" data-v-dea944ec></div></div>`);
      });
      _push(`<!--]--></div><div class="controls" data-v-dea944ec><button${ssrIncludeBooleanAttr(currentIndex.value === 0) ? " disabled" : ""} data-v-dea944ec>&lt; Previous</button><button${ssrIncludeBooleanAttr(currentIndex.value === unref(covers).length - 1) ? " disabled" : ""} data-v-dea944ec>Next &gt;</button></div><div class="album-info" data-v-dea944ec><h2 data-v-dea944ec>${ssrInterpolate(currentCover.value.title)}</h2><p data-v-dea944ec>${ssrInterpolate(currentCover.value.artist)}</p></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CoverFlow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CoverFlow = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-dea944ec"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(CoverFlow, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/coverFlow/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BZTL8aFG.mjs.map
