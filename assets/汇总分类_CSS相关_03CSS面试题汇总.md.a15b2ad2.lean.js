import{_ as s,r as a,c as p,a as t,b as e,o as l}from"./app.91b9ffc3.js";const h='{"title":"CSS\u9762\u8BD5\u9898\u6C47\u603B","description":"","frontmatter":{"published":true,"date":"2022-2-26","tags":"CSS\u76F8\u5173"},"headers":[{"level":2,"title":"CSS\u57FA\u7840","slug":"css\u57FA\u7840"},{"level":3,"title":"1. CSS\u9009\u62E9\u5668\u53CA\u5176\u4F18\u5148\u7EA7","slug":"_1-css\u9009\u62E9\u5668\u53CA\u5176\u4F18\u5148\u7EA7"},{"level":3,"title":"2. CSS\u4E2D\u53EF\u7EE7\u627F\u4E0E\u4E0D\u53EF\u7EE7\u627F\u5C5E\u6027\u6709\u54EA\u4E9B","slug":"_2-css\u4E2D\u53EF\u7EE7\u627F\u4E0E\u4E0D\u53EF\u7EE7\u627F\u5C5E\u6027\u6709\u54EA\u4E9B"},{"level":3,"title":"3. display\u7684\u5C5E\u6027\u503C\u53CA\u5176\u4F5C\u7528","slug":"_3-display\u7684\u5C5E\u6027\u503C\u53CA\u5176\u4F5C\u7528"},{"level":3,"title":"4. display\u7684block\u3001inline\u548Cinline-block\u7684\u533A\u522B","slug":"_4-display\u7684block\u3001inline\u548Cinline-block\u7684\u533A\u522B"},{"level":3,"title":"5. \u9690\u85CF\u5143\u7D20\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B","slug":"_5-\u9690\u85CF\u5143\u7D20\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B"},{"level":3,"title":"6. link\u548C@import\u7684\u533A\u522B","slug":"_6-link\u548C-import\u7684\u533A\u522B"},{"level":3,"title":"7. transition\u548Canimation\u7684\u533A\u522B","slug":"_7-transition\u548Canimation\u7684\u533A\u522B"},{"level":3,"title":"8. display:none\u4E0Evisibility:hidden\u7684\u533A\u522B","slug":"_8-display-none\u4E0Evisibility-hidden\u7684\u533A\u522B"},{"level":3,"title":"9. \u4F2A\u5143\u7D20\u548C\u4F2A\u7C7B\u7684\u533A\u522B\u548C\u4F5C\u7528\uFF1F","slug":"_9-\u4F2A\u5143\u7D20\u548C\u4F2A\u7C7B\u7684\u533A\u522B\u548C\u4F5C\u7528\uFF1F"},{"level":3,"title":"10. \u5BF9requestAnimationframe\u7684\u7406\u89E3","slug":"_10-\u5BF9requestanimationframe\u7684\u7406\u89E3"},{"level":3,"title":"11. \u5BF9\u76D2\u6A21\u578B\u7684\u7406\u89E3","slug":"_11-\u5BF9\u76D2\u6A21\u578B\u7684\u7406\u89E3"},{"level":3,"title":"12. \u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u2F64translate\u6765\u6539\u53D8\u4F4D\u7F6E\u2F7D\u4E0D\u662F\u5B9A\u4F4D\uFF1F","slug":"_12-\u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u2F64translate\u6765\u6539\u53D8\u4F4D\u7F6E\u2F7D\u4E0D\u662F\u5B9A\u4F4D\uFF1F"},{"level":3,"title":"13. li \u4E0E li \u4E4B\u95F4\u6709\u770B\u4E0D\u89C1\u7684\u7A7A\u767D\u95F4\u9694\u662F\u4EC0\u4E48\u539F\u56E0\u5F15\u8D77\u7684\uFF1F\u5982\u4F55\u89E3\u51B3\uFF1F","slug":"_13-li-\u4E0E-li-\u4E4B\u95F4\u6709\u770B\u4E0D\u89C1\u7684\u7A7A\u767D\u95F4\u9694\u662F\u4EC0\u4E48\u539F\u56E0\u5F15\u8D77\u7684\uFF1F\u5982\u4F55\u89E3\u51B3\uFF1F"},{"level":3,"title":"14. CSS3\u4E2D\u6709\u54EA\u4E9B\u65B0\u7279\u6027","slug":"_14-css3\u4E2D\u6709\u54EA\u4E9B\u65B0\u7279\u6027"},{"level":3,"title":"15. \u66FF\u6362\u5143\u7D20\u7684\u6982\u5FF5\u53CA\u8BA1\u7B97\u89C4\u5219","slug":"_15-\u66FF\u6362\u5143\u7D20\u7684\u6982\u5FF5\u53CA\u8BA1\u7B97\u89C4\u5219"},{"level":3,"title":"17. \u5BF9 CSS Sprites \u7684\u7406\u89E3","slug":"_17-\u5BF9-css-sprites-\u7684\u7406\u89E3"},{"level":3,"title":"18. \u4EC0\u4E48\u662F\u7269\u7406\u50CF\u7D20\uFF0C\u903B\u8F91\u50CF\u7D20\u548C\u50CF\u7D20\u5BC6\u5EA6\uFF0C\u4E3A\u4EC0\u4E48\u5728\u79FB\u52A8\u7AEF\u5F00\u53D1\u65F6\u9700\u8981\u7528\u5230@3x, @2x\u8FD9\u79CD\u56FE\u7247\uFF1F","slug":"_18-\u4EC0\u4E48\u662F\u7269\u7406\u50CF\u7D20\uFF0C\u903B\u8F91\u50CF\u7D20\u548C\u50CF\u7D20\u5BC6\u5EA6\uFF0C\u4E3A\u4EC0\u4E48\u5728\u79FB\u52A8\u7AEF\u5F00\u53D1\u65F6\u9700\u8981\u7528\u5230-3x-2x\u8FD9\u79CD\u56FE\u7247\uFF1F"},{"level":3,"title":"19. margin \u548C padding \u7684\u4F7F\u7528\u573A\u666F","slug":"_19-margin-\u548C-padding-\u7684\u4F7F\u7528\u573A\u666F"},{"level":3,"title":"20. \u5BF9line-height \u7684\u7406\u89E3\u53CA\u5176\u8D4B\u503C\u65B9\u5F0F","slug":"_20-\u5BF9line-height-\u7684\u7406\u89E3\u53CA\u5176\u8D4B\u503C\u65B9\u5F0F"},{"level":3,"title":"21. CSS \u4F18\u5316\u548C\u63D0\u9AD8\u6027\u80FD\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF1F","slug":"_21-css-\u4F18\u5316\u548C\u63D0\u9AD8\u6027\u80FD\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF1F"},{"level":3,"title":"22. CSS\u9884\u5904\u7406\u5668/\u540E\u5904\u7406\u5668\u662F\u4EC0\u4E48\uFF1F\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u5B83\u4EEC\uFF1F","slug":"_22-css\u9884\u5904\u7406\u5668-\u540E\u5904\u7406\u5668\u662F\u4EC0\u4E48\uFF1F\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u5B83\u4EEC\uFF1F"},{"level":3,"title":"23. ::before \u548C :after \u7684\u53CC\u5192\u53F7\u548C\u5355\u5192\u53F7\u6709\u4EC0\u4E48\u533A\u522B\uFF1F","slug":"_23-before-\u548C-after-\u7684\u53CC\u5192\u53F7\u548C\u5355\u5192\u53F7\u6709\u4EC0\u4E48\u533A\u522B\uFF1F"},{"level":3,"title":"24. display:inline-block \u4EC0\u4E48\u65F6\u5019\u4F1A\u663E\u793A\u95F4\u9699\uFF1F","slug":"_24-display-inline-block-\u4EC0\u4E48\u65F6\u5019\u4F1A\u663E\u793A\u95F4\u9699\uFF1F"},{"level":3,"title":"25. \u5355\u884C\u3001\u591A\u884C\u6587\u672C\u6EA2\u51FA\u9690\u85CF","slug":"_25-\u5355\u884C\u3001\u591A\u884C\u6587\u672C\u6EA2\u51FA\u9690\u85CF"},{"level":3,"title":"27. \u5BF9\u5A92\u4F53\u67E5\u8BE2\u7684\u7406\u89E3\uFF1F","slug":"_27-\u5BF9\u5A92\u4F53\u67E5\u8BE2\u7684\u7406\u89E3\uFF1F"},{"level":3,"title":"28. \u5BF9 CSS \u5DE5\u7A0B\u5316\u7684\u7406\u89E3","slug":"_28-\u5BF9-css-\u5DE5\u7A0B\u5316\u7684\u7406\u89E3"},{"level":3,"title":"29. \u5982\u4F55\u5224\u65AD\u5143\u7D20\u662F\u5426\u5230\u8FBE\u53EF\u89C6\u533A\u57DF","slug":"_29-\u5982\u4F55\u5224\u65AD\u5143\u7D20\u662F\u5426\u5230\u8FBE\u53EF\u89C6\u533A\u57DF"},{"level":3,"title":"30. z-index\u5C5E\u6027\u5728\u4EC0\u4E48\u60C5\u51B5\u4E0B\u4F1A\u5931\u6548","slug":"_30-z-index\u5C5E\u6027\u5728\u4EC0\u4E48\u60C5\u51B5\u4E0B\u4F1A\u5931\u6548"},{"level":3,"title":"31. CSS3\u4E2D\u7684transform\u6709\u54EA\u4E9B\u5C5E\u6027","slug":"_31-css3\u4E2D\u7684transform\u6709\u54EA\u4E9B\u5C5E\u6027"},{"level":2,"title":"\u9875\u9762\u5E03\u5C40","slug":"\u9875\u9762\u5E03\u5C40"},{"level":3,"title":"1. \u5E38\u89C1\u7684CSS\u5E03\u5C40\u5355\u4F4D","slug":"_1-\u5E38\u89C1\u7684css\u5E03\u5C40\u5355\u4F4D"},{"level":3,"title":"2. px\u3001em\u3001rem\u7684\u533A\u522B\u53CA\u4F7F\u7528\u573A\u666F","slug":"_2-px\u3001em\u3001rem\u7684\u533A\u522B\u53CA\u4F7F\u7528\u573A\u666F"},{"level":3,"title":"3. \u4E24\u680F\u5E03\u5C40\u7684\u5B9E\u73B0","slug":"_3-\u4E24\u680F\u5E03\u5C40\u7684\u5B9E\u73B0"},{"level":3,"title":"4. \u4E09\u680F\u5E03\u5C40\u7684\u5B9E\u73B0","slug":"_4-\u4E09\u680F\u5E03\u5C40\u7684\u5B9E\u73B0"},{"level":3,"title":"5. \u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\u7684\u5B9E\u73B0","slug":"_5-\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\u7684\u5B9E\u73B0"},{"level":3,"title":"6. \u5982\u4F55\u6839\u636E\u8BBE\u8BA1\u7A3F\u8FDB\u884C\u79FB\u52A8\u7AEF\u9002\u914D\uFF1F","slug":"_6-\u5982\u4F55\u6839\u636E\u8BBE\u8BA1\u7A3F\u8FDB\u884C\u79FB\u52A8\u7AEF\u9002\u914D\uFF1F"},{"level":3,"title":"7. \u5BF9Flex\u5E03\u5C40\u7684\u7406\u89E3\u53CA\u5176\u4F7F\u7528\u573A\u666F","slug":"_7-\u5BF9flex\u5E03\u5C40\u7684\u7406\u89E3\u53CA\u5176\u4F7F\u7528\u573A\u666F"},{"level":3,"title":"8. \u54CD\u5E94\u5F0F\u8BBE\u8BA1\u7684\u6982\u5FF5\u53CA\u57FA\u672C\u539F\u7406","slug":"_8-\u54CD\u5E94\u5F0F\u8BBE\u8BA1\u7684\u6982\u5FF5\u53CA\u57FA\u672C\u539F\u7406"},{"level":2,"title":"\u5B9A\u4F4D\u4E0E\u6D6E\u52A8","slug":"\u5B9A\u4F4D\u4E0E\u6D6E\u52A8"},{"level":3,"title":"1. \u4E3A\u4EC0\u4E48\u9700\u8981\u6E05\u9664\u6D6E\u52A8\uFF1F\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F","slug":"_1-\u4E3A\u4EC0\u4E48\u9700\u8981\u6E05\u9664\u6D6E\u52A8\uFF1F\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F"},{"level":3,"title":"2. \u4F7F\u7528 clear \u5C5E\u6027\u6E05\u9664\u6D6E\u52A8\u7684\u539F\u7406\uFF1F","slug":"_2-\u4F7F\u7528-clear-\u5C5E\u6027\u6E05\u9664\u6D6E\u52A8\u7684\u539F\u7406\uFF1F"},{"level":3,"title":"3. \u5BF9BFC\u7684\u7406\u89E3\uFF0C\u5982\u4F55\u521B\u5EFABFC","slug":"_3-\u5BF9bfc\u7684\u7406\u89E3\uFF0C\u5982\u4F55\u521B\u5EFAbfc"},{"level":3,"title":"4. \u4EC0\u4E48\u662Fmargin\u91CD\u53E0\u95EE\u9898\uFF1F\u5982\u4F55\u89E3\u51B3\uFF1F","slug":"_4-\u4EC0\u4E48\u662Fmargin\u91CD\u53E0\u95EE\u9898\uFF1F\u5982\u4F55\u89E3\u51B3\uFF1F"},{"level":3,"title":"5. \u5143\u7D20\u7684\u5C42\u53E0\u987A\u5E8F","slug":"_5-\u5143\u7D20\u7684\u5C42\u53E0\u987A\u5E8F"},{"level":3,"title":"6. position\u7684\u5C5E\u6027\u6709\u54EA\u4E9B\uFF0C\u533A\u522B\u662F\u4EC0\u4E48","slug":"_6-position\u7684\u5C5E\u6027\u6709\u54EA\u4E9B\uFF0C\u533A\u522B\u662F\u4EC0\u4E48"},{"level":3,"title":"7. display\u3001float\u3001position\u7684\u5173\u7CFB","slug":"_7-display\u3001float\u3001position\u7684\u5173\u7CFB"},{"level":3,"title":"8. absolute\u4E0Efixed\u5171\u540C\u70B9\u4E0E\u4E0D\u540C\u70B9","slug":"_8-absolute\u4E0Efixed\u5171\u540C\u70B9\u4E0E\u4E0D\u540C\u70B9"},{"level":3,"title":"9. \u5BF9 sticky \u5B9A\u4F4D\u7684\u7406\u89E3","slug":"_9-\u5BF9-sticky-\u5B9A\u4F4D\u7684\u7406\u89E3"},{"level":2,"title":"\u573A\u666F\u5E94\u7528","slug":"\u573A\u666F\u5E94\u7528"},{"level":3,"title":"1. \u5B9E\u73B0\u4E00\u4E2A\u4E09\u89D2\u5F62","slug":"_1-\u5B9E\u73B0\u4E00\u4E2A\u4E09\u89D2\u5F62"},{"level":3,"title":"2. \u5B9E\u73B0\u4E00\u4E2A\u6247\u5F62","slug":"_2-\u5B9E\u73B0\u4E00\u4E2A\u6247\u5F62"},{"level":3,"title":"3. \u5B9E\u73B0\u4E00\u4E2A\u5BBD\u9AD8\u81EA\u9002\u5E94\u7684\u6B63\u65B9\u5F62","slug":"_3-\u5B9E\u73B0\u4E00\u4E2A\u5BBD\u9AD8\u81EA\u9002\u5E94\u7684\u6B63\u65B9\u5F62"},{"level":3,"title":"4. \u753B\u4E00\u67610.5px\u7684\u7EBF","slug":"_4-\u753B\u4E00\u67610-5px\u7684\u7EBF"},{"level":3,"title":"5. \u8BBE\u7F6E\u5C0F\u4E8E12px\u7684\u5B57\u4F53","slug":"_5-\u8BBE\u7F6E\u5C0F\u4E8E12px\u7684\u5B57\u4F53"},{"level":3,"title":"6. \u5982\u4F55\u89E3\u51B3 1px \u95EE\u9898\uFF1F","slug":"_6-\u5982\u4F55\u89E3\u51B3-1px-\u95EE\u9898\uFF1F"}],"relativePath":"\u6C47\u603B\u5206\u7C7B/CSS\u76F8\u5173/03CSS\u9762\u8BD5\u9898\u6C47\u603B.md","lastUpdated":1645889124623}',o={},c=e("",338);function i(r,u,d,b,k,m){const n=a("Comment");return l(),p("div",null,[c,t(n)])}var f=s(o,[["render",i]]);export{h as __pageData,f as default};
