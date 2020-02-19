(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{144:function(t,a,s){"use strict";s.r(a);var n=s(5),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",[s("a",{attrs:{href:"#%EC%98%81%EC%83%81-%EA%B0%95%EC%9D%98"}},[t._v("영상 강의")]),t._v("를 시청하며 글을 읽고 실습하면 더욱 효과적입니다.")])]),t._v(" "),s("h1",{attrs:{id:"컴포넌트-통신"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#컴포넌트-통신","aria-hidden":"true"}},[t._v("#")]),t._v(" 컴포넌트 통신")]),t._v(" "),s("p",[t._v("React 클래스 컴포넌트는 컴포넌트 내에서만 접근 가능한 상태("),s("code",[t._v("state")]),t._v(")를 가질 수 있어 관리가 용이하지만,\n컴포넌트가 중첩되더라도 각 컴포넌트마다 개별적으로 상태를 관리하므로 상태를 공유하는 것이 까다롭습니다.")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",[t._v("일반적으로 클라이언트 환경의 JavaScript는 "),s("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures#%ED%81%B4%EB%A1%9C%EC%A0%80_%EC%8A%A4%EC%BD%94%ED%94%84_%EC%B2%B4%EC%9D%B8",target:"_blank",rel:"noopener noreferrer"}},[t._v("스코프 체인"),s("OutboundLink")],1),t._v("에 의해 상위(부모) 영역으로 거슬러 올라가 데이터를 참조하지만, React 프로그래밍에서는 각 컴포넌트의 상태(데이터)가 스코프 체인 되지 않습니다.")])]),t._v(" "),s("p",[t._v("보다 효과적으로 상태를 관리하기 위해서 React 프로그래밍에서는 부모(상위) 컴포넌트가 (공유가 필요한) 상태를 관리하고,\n자손(하위) 컴포넌트는 부모 컴포넌트와 통신(Communication)하여 상태 공유를 처리합니다.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("React 공식 문서는 해당 내용을 "),s("a",{attrs:{href:"https://ko.reactjs.org/docs/lifting-state-up.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("상태 끌어올리기(Lifting State Up)"),s("OutboundLink")],1),t._v("로 기술하고 있습니다. 필자는 '상태 끌어올리기'라는 표현이 선뜻 이해하기 쉽지 않다고 판단하여, 해당 섹션 이름을 '컴포넌트(부모 ➪ 자식) 간 통신'으로 바꿔 기술했습니다.")])]),t._v(" "),s("h2",{attrs:{id:"props-⇌-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props-⇌-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" props ⇌ callback")]),t._v(" "),s("p",[t._v("전달 속성("),s("RouterLink",{attrs:{to:"/lecture/r-component.html#전달-속성-props"}},[t._v("props")]),t._v(")를 사용해 부모 컴포넌트는 자식 컴포넌트에 속성을 전달할 수 있습니다.\n바꿔 말하면 자식 컴포넌트는 부모 컴포넌트로 부터 속성을 전달 받을 수 있습니다.\n컴포넌트의 메서드 또한 속성이므로 props로 전달할 수 있습니다.\n예를 들어 부모 컴포넌트의 메서드를\n자식 컴포넌트에 전달하면 자식 컴포넌트는 전달 받은 메서드를 실행(callback)해 부모 컴포넌트의 상태를 변경할 수 있습니다.")],1),t._v(" "),s("base-img",{staticStyle:{"max-width":"300px"},attrs:{src:"props-callback.jpg"}}),t._v(" "),s("h2",{attrs:{id:"부모-➡︎-자식-메서드-전달"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#부모-➡︎-자식-메서드-전달","aria-hidden":"true"}},[t._v("#")]),t._v(" 부모 ➡︎ 자식 (메서드 전달)")]),t._v(" "),s("p",[t._v("자식 컴포넌트에 전달된("),s("code",[t._v("1")]),t._v(") 부모 컴포넌트 메서드("),s("code",[t._v("2")]),t._v(")는 "),s("strong",[t._v("자식 컴포넌트에 의해 실행되면\n부모 컴포넌트의 상태를 업데이트("),s("code",[t._v("3")]),t._v(")")]),t._v(" 합니다.")]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParentComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'자식 컴포넌트의 요청을 대기 중입니다.'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 자식 컴포넌트에 의해 실행되는 부모 컴포넌트의 메서드")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("processRequested")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 부모 컴포넌트의 상태 업데이트")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" message "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n        // 1. 자식 컴포넌트에 props.receivedMethod 속성으로 메서드 전달\n        ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChildComponent")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("receivedMethod")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("processRequested"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n        ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("h2",{attrs:{id:"부모-⬅︎-자식-메서드-실행"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#부모-⬅︎-자식-메서드-실행","aria-hidden":"true"}},[t._v("#")]),t._v(" 부모 ⬅︎ 자식 (메서드 실행)")]),t._v(" "),s("p",[t._v("자식 컴포넌트는 state를 가질 필요가 없으므로 '함수형'으로 작성합니다.\n눈여겨 볼 부분은 부모 컴포넌트가 전달한 속성 props.receivedMethod 유형이 메서드라는 점입니다.\n사용자에 의해 이벤트가 발생(버튼 요소 클릭) 하면 전달 받은 부모 컴포넌트의 메서드를 실행해 부모 컴포넌트의 state를 교체합니다.")]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ChildComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onClick")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("receivedMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'전달 받은 메서드 잘 사용했습니다!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      부모 컴포넌트의 상태를 바꿔봅시다!\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h2",{attrs:{id:"props-⇌-callback-문제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props-⇌-callback-문제","aria-hidden":"true"}},[t._v("#")]),t._v(" props ⇌ callback 문제")]),t._v(" "),s("p",[t._v("불행히도 props, callback을 활용한 컴포넌트 통신 방법은 간단한 시나리오를 벗어나면 현실적이지 않습니다.\n애플리케이션은 많은 컴포넌트가 상태를 가지고 있거나, 다른 컴포넌트와 공유(동기화)해 상호 작용 되어야 합니다.\n하지만 애플리케이션의 상태를 컴포넌트가 개별적으로 소유하다 보니 관리의 어려움이 생기는 겁니다. 자신의 상태를\n하위 컴포넌트에 전송 → 전송 → 전송, 다시 하위 컴포넌트에서 상위 컴포넌트로 콜백 ← 콜백 ← 콜백 하니\n복잡하고 어려워집니다. 다시 말해 컴포넌트 간 관계가 복잡해지면 props, callback은 관리가 매우 어려워집니다.")]),t._v(" "),s("base-img",{staticStyle:{"max-width":"400px","margin-left":"0"},attrs:{src:"prop-callback2.jpg"}}),t._v(" "),s("h2",{attrs:{id:"컨텍스트-context-활용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#컨텍스트-context-활용","aria-hidden":"true"}},[t._v("#")]),t._v(" 컨텍스트(Context) 활용")]),t._v(" "),s("p",[t._v("React는 중첩된 컴포넌트의 데이터 공유 문제를 해결하기 위한 방법으로 "),s("a",{attrs:{href:"r-context"}},[t._v("컨텍스트(Context)")]),t._v("를 제공합니다.\nContext를 사용하면 컴포넌트 트리로 묶인 컴포넌트 간 데이터 공유가 비교적 수월해집니다. 단, Context는 컴포넌트를\n재사용하기 어렵게 만드므로 꼭 필요한 경우만 사용하는 것이 좋습니다.")]),t._v(" "),s("base-img",{staticStyle:{"max-width":"600px","margin-left":"0"},attrs:{src:"context-02.jpg"}}),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"상태-관리-시스템의-필요성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#상태-관리-시스템의-필요성","aria-hidden":"true"}},[t._v("#")]),t._v(" 상태 관리 시스템의 필요성")]),t._v(" "),s("p",[t._v("상태 관리 시스템은 상태 관리의 복잡한 문제를 해결하기 위해 고안되었습니다. 상태를 각 컴포넌트가 소유하는데서\n기인된 문제 해결 방안으로 모든 상태를 하나의 저장소(Store)에서 관리하도록 만드는 것입니다. 이러한 접근법은\n여러가지 문제를 해결할 수 있습니다. 복잡한 컴포넌트 계층을 위/아래로 탐색하지 않고도 상태를 공유할 수 있기 때문입니다.\n대표적인 상태 관리 라이브러리로 "),s("a",{attrs:{href:"rd-redux"}},[t._v("Redux")]),t._v(", "),s("a",{attrs:{href:"https://mobx.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mobx"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://yamoo9.github.io/vuex/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex"),s("OutboundLink")],1),t._v(" 등이 있습니다.")]),t._v(" "),s("base-img",{staticStyle:{"max-width":"600px","margin-left":"0"},attrs:{src:"store-pattern.jpg"}}),t._v(" "),s("h2",{attrs:{id:"영상-강의"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#영상-강의","aria-hidden":"true"}},[t._v("#")]),t._v(" 영상 강의")]),t._v(" "),s("h3",{attrs:{id:"react-컴포넌트-간-통신이-필요한-이유"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-컴포넌트-간-통신이-필요한-이유","aria-hidden":"true"}},[t._v("#")]),t._v(" React 컴포넌트 간 통신이 필요한 이유")]),t._v(" "),s("wistia",{attrs:{source:"mzs9prwj7u",color:"4A30E9"}}),t._v(" "),s("h3",{attrs:{id:"부모-컴포넌트와-자식-컴포넌트-사이의-props-⇌-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#부모-컴포넌트와-자식-컴포넌트-사이의-props-⇌-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" 부모 컴포넌트와 자식 컴포넌트 사이의 props ⇌ callback")]),t._v(" "),s("wistia",{attrs:{source:"c6rfvhdcwp",color:"4A30E9"}}),t._v(" "),s("h3",{attrs:{id:"복잡한-컴포넌트-트리-구조에서-props-⇌-callback의-문제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#복잡한-컴포넌트-트리-구조에서-props-⇌-callback의-문제","aria-hidden":"true"}},[t._v("#")]),t._v(" 복잡한 컴포넌트 트리 구조에서 props ⇌ callback의 문제")]),t._v(" "),s("wistia",{attrs:{source:"jq7149lpr5",color:"4A30E9"}}),t._v(" "),s("h3",{attrs:{id:"상태-관리를-효율적으로-관리하기-위한-방법-context-react-redux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#상태-관리를-효율적으로-관리하기-위한-방법-context-react-redux","aria-hidden":"true"}},[t._v("#")]),t._v(" 상태 관리를 효율적으로 관리하기 위한 방법 Context, React Redux")]),t._v(" "),s("wistia",{attrs:{source:"fgywen7jsl",color:"4A30E9"}})],1)}),[],!1,null,null,null);a.default=r.exports}}]);