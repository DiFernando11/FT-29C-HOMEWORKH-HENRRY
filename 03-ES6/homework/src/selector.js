var traverseDomAndCollectElements = function (matchFunc, startEl) {
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  if (matchFunc(startEl)) resultSet.push(startEl);

  for (let i = 0; i < startEl.children.length; i++) {
    let elements = traverseDomAndCollectElements(
      matchFunc,
      startEl.children[i]
    );
    resultSet = [...resultSet, ...elements];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  let typeMatcher = "";
  let verifyType = selector.split(".");

  if (verifyType.length === 2) typeMatcher = "tag.class";
  else typeMatcher = "tag";
  if (selector.charAt(0) == "#") typeMatcher = "id";
  if (selector.charAt(0) == ".") typeMatcher = "class";
  return typeMatcher;
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function (el) {
      return `#${el.id}` === selector;
    };
  } else if (selectorType === "class") {
    matchFunction = function (el) {
      let selectClass = el.classList; // [clase1, clas2, clase 3]
      for (let i = 0; i < selectClass.length; i++) {
        if (`.${selectClass[i]}` === selector) return true;
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    matchFunction = function (el) {
      var [tagBuscado, classBuscada] = selector.split(".");
      return (
        matchFunctionMaker(tagBuscado)(el) &&
        matchFunctionMaker(`.${classBuscada}`)(el)
      );
    };
  } else if (selectorType === "tag") {
    matchFunction = function (el) {
      return el.tagName.toLowerCase() === selector;
    };
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
