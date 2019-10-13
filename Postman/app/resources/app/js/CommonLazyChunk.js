webpackJsonp([23],{

/***/ 3448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageIdentifier", function() { return LanguageIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenMetadata", function() { return TokenMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completionKindToCssClass", function() { return completionKindToCssClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completionKindFromString", function() { return completionKindFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureHelpTriggerKind", function() { return SignatureHelpTriggerKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlightKind", function() { return DocumentHighlightKind; });
/* harmony export (immutable) */ __webpack_exports__["isLocationLink"] = isLocationLink;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbolKindToCssClass", function() { return symbolKindToCssClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRangeKind", function() { return FoldingRangeKind; });
/* harmony export (immutable) */ __webpack_exports__["isResourceTextEdit"] = isResourceTextEdit;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceProviderRegistry", function() { return ReferenceProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameProviderRegistry", function() { return RenameProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionProviderRegistry", function() { return CompletionProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureHelpProviderRegistry", function() { return SignatureHelpProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverProviderRegistry", function() { return HoverProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSymbolProviderRegistry", function() { return DocumentSymbolProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlightProviderRegistry", function() { return DocumentHighlightProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionProviderRegistry", function() { return DefinitionProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclarationProviderRegistry", function() { return DeclarationProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImplementationProviderRegistry", function() { return ImplementationProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeDefinitionProviderRegistry", function() { return TypeDefinitionProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeLensProviderRegistry", function() { return CodeLensProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeActionProviderRegistry", function() { return CodeActionProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentFormattingEditProviderRegistry", function() { return DocumentFormattingEditProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentRangeFormattingEditProviderRegistry", function() { return DocumentRangeFormattingEditProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnTypeFormattingEditProviderRegistry", function() { return OnTypeFormattingEditProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkProviderRegistry", function() { return LinkProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorProviderRegistry", function() { return ColorProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeRegistry", function() { return SelectionRangeRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRangeProviderRegistry", function() { return FoldingRangeProviderRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenizationRegistry", function() { return TokenizationRegistry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_common_types_js__ = __webpack_require__(3498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_common_uri_js__ = __webpack_require__(3527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_range_js__ = __webpack_require__(3482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__ = __webpack_require__(4293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modes_tokenizationRegistry_js__ = __webpack_require__(4296);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





/**
                                                                             * @internal
                                                                             */
var LanguageIdentifier = /** @class */function () {
  function LanguageIdentifier(language, id) {
    this.language = language;
    this.id = id;
  }
  return LanguageIdentifier;
}();

/**
                                * @internal
                                */
var TokenMetadata = /** @class */function () {
  function TokenMetadata() {
  }
  TokenMetadata.getLanguageId = function (metadata) {
    return (metadata & 255 /* LANGUAGEID_MASK */) >>> 0 /* LANGUAGEID_OFFSET */;
  };
  TokenMetadata.getTokenType = function (metadata) {
    return (metadata & 1792 /* TOKEN_TYPE_MASK */) >>> 8 /* TOKEN_TYPE_OFFSET */;
  };
  TokenMetadata.getFontStyle = function (metadata) {
    return (metadata & 14336 /* FONT_STYLE_MASK */) >>> 11 /* FONT_STYLE_OFFSET */;
  };
  TokenMetadata.getForeground = function (metadata) {
    return (metadata & 8372224 /* FOREGROUND_MASK */) >>> 14 /* FOREGROUND_OFFSET */;
  };
  TokenMetadata.getBackground = function (metadata) {
    return (metadata & 4286578688 /* BACKGROUND_MASK */) >>> 23 /* BACKGROUND_OFFSET */;
  };
  TokenMetadata.getClassNameFromMetadata = function (metadata) {
    var foreground = this.getForeground(metadata);
    var className = 'mtk' + foreground;
    var fontStyle = this.getFontStyle(metadata);
    if (fontStyle & 1 /* Italic */) {
        className += ' mtki';
      }
    if (fontStyle & 2 /* Bold */) {
        className += ' mtkb';
      }
    if (fontStyle & 4 /* Underline */) {
        className += ' mtku';
      }
    return className;
  };
  TokenMetadata.getInlineStyleFromMetadata = function (metadata, colorMap) {
    var foreground = this.getForeground(metadata);
    var fontStyle = this.getFontStyle(metadata);
    var result = "color: " + colorMap[foreground] + ";";
    if (fontStyle & 1 /* Italic */) {
        result += 'font-style: italic;';
      }
    if (fontStyle & 2 /* Bold */) {
        result += 'font-weight: bold;';
      }
    if (fontStyle & 4 /* Underline */) {
        result += 'text-decoration: underline;';
      }
    return result;
  };
  return TokenMetadata;
}();

/**
                           * @internal
                           */
var completionKindToCssClass = function () {
  var data = Object.create(null);
  data[0 /* Method */] = 'method';
  data[1 /* Function */] = 'function';
  data[2 /* Constructor */] = 'constructor';
  data[3 /* Field */] = 'field';
  data[4 /* Variable */] = 'variable';
  data[5 /* Class */] = 'class';
  data[6 /* Struct */] = 'struct';
  data[7 /* Interface */] = 'interface';
  data[8 /* Module */] = 'module';
  data[9 /* Property */] = 'property';
  data[10 /* Event */] = 'event';
  data[11 /* Operator */] = 'operator';
  data[12 /* Unit */] = 'unit';
  data[13 /* Value */] = 'value';
  data[14 /* Constant */] = 'constant';
  data[15 /* Enum */] = 'enum';
  data[16 /* EnumMember */] = 'enum-member';
  data[17 /* Keyword */] = 'keyword';
  data[25 /* Snippet */] = 'snippet';
  data[18 /* Text */] = 'text';
  data[19 /* Color */] = 'color';
  data[20 /* File */] = 'file';
  data[21 /* Reference */] = 'reference';
  data[22 /* Customcolor */] = 'customcolor';
  data[23 /* Folder */] = 'folder';
  data[24 /* TypeParameter */] = 'type-parameter';
  return function (kind) {
    return data[kind] || 'property';
  };
}();
/**
      * @internal
      */
var completionKindFromString = function () {
  var data = Object.create(null);
  data['method'] = 0 /* Method */;
  data['function'] = 1 /* Function */;
  data['constructor'] = 2 /* Constructor */;
  data['field'] = 3 /* Field */;
  data['variable'] = 4 /* Variable */;
  data['class'] = 5 /* Class */;
  data['struct'] = 6 /* Struct */;
  data['interface'] = 7 /* Interface */;
  data['module'] = 8 /* Module */;
  data['property'] = 9 /* Property */;
  data['event'] = 10 /* Event */;
  data['operator'] = 11 /* Operator */;
  data['unit'] = 12 /* Unit */;
  data['value'] = 13 /* Value */;
  data['constant'] = 14 /* Constant */;
  data['enum'] = 15 /* Enum */;
  data['enum-member'] = 16 /* EnumMember */;
  data['enumMember'] = 16 /* EnumMember */;
  data['keyword'] = 17 /* Keyword */;
  data['snippet'] = 25 /* Snippet */;
  data['text'] = 18 /* Text */;
  data['color'] = 19 /* Color */;
  data['file'] = 20 /* File */;
  data['reference'] = 21 /* Reference */;
  data['customcolor'] = 22 /* Customcolor */;
  data['folder'] = 23 /* Folder */;
  data['type-parameter'] = 24 /* TypeParameter */;
  data['typeParameter'] = 24 /* TypeParameter */;
  return function (value, strict) {
    var res = data[value];
    if (typeof res === 'undefined' && !strict) {
      res = 9 /* Property */;
    }
    return res;
  };
}();
var SignatureHelpTriggerKind;
(function (SignatureHelpTriggerKind) {
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["Invoke"] = 1] = "Invoke";
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["TriggerCharacter"] = 2] = "TriggerCharacter";
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["ContentChange"] = 3] = "ContentChange";
})(SignatureHelpTriggerKind || (SignatureHelpTriggerKind = {}));
/**
                                                                  * A document highlight kind.
                                                                  */
var DocumentHighlightKind;
(function (DocumentHighlightKind) {
  /**
                                    * A textual occurrence.
                                    */
  DocumentHighlightKind[DocumentHighlightKind["Text"] = 0] = "Text";
  /**
                                                                      * Read-access of a symbol, like reading a variable.
                                                                      */
  DocumentHighlightKind[DocumentHighlightKind["Read"] = 1] = "Read";
  /**
                                                                      * Write-access of a symbol, like writing to a variable.
                                                                      */
  DocumentHighlightKind[DocumentHighlightKind["Write"] = 2] = "Write";
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
/**
                                                            * @internal
                                                            */
function isLocationLink(thing) {
  return thing &&
  __WEBPACK_IMPORTED_MODULE_1__base_common_uri_js__["a" /* URI */].isUri(thing.uri) &&
  __WEBPACK_IMPORTED_MODULE_2__core_range_js__["a" /* Range */].isIRange(thing.range) && (
  __WEBPACK_IMPORTED_MODULE_2__core_range_js__["a" /* Range */].isIRange(thing.originSelectionRange) || __WEBPACK_IMPORTED_MODULE_2__core_range_js__["a" /* Range */].isIRange(thing.targetSelectionRange));
}
/**
   * @internal
   */
var symbolKindToCssClass = function () {
  var _fromMapping = Object.create(null);
  _fromMapping[0 /* File */] = 'file';
  _fromMapping[1 /* Module */] = 'module';
  _fromMapping[2 /* Namespace */] = 'namespace';
  _fromMapping[3 /* Package */] = 'package';
  _fromMapping[4 /* Class */] = 'class';
  _fromMapping[5 /* Method */] = 'method';
  _fromMapping[6 /* Property */] = 'property';
  _fromMapping[7 /* Field */] = 'field';
  _fromMapping[8 /* Constructor */] = 'constructor';
  _fromMapping[9 /* Enum */] = 'enum';
  _fromMapping[10 /* Interface */] = 'interface';
  _fromMapping[11 /* Function */] = 'function';
  _fromMapping[12 /* Variable */] = 'variable';
  _fromMapping[13 /* Constant */] = 'constant';
  _fromMapping[14 /* String */] = 'string';
  _fromMapping[15 /* Number */] = 'number';
  _fromMapping[16 /* Boolean */] = 'boolean';
  _fromMapping[17 /* Array */] = 'array';
  _fromMapping[18 /* Object */] = 'object';
  _fromMapping[19 /* Key */] = 'key';
  _fromMapping[20 /* Null */] = 'null';
  _fromMapping[21 /* EnumMember */] = 'enum-member';
  _fromMapping[22 /* Struct */] = 'struct';
  _fromMapping[23 /* Event */] = 'event';
  _fromMapping[24 /* Operator */] = 'operator';
  _fromMapping[25 /* TypeParameter */] = 'type-parameter';
  return function toCssClassName(kind, inline) {
    return "symbol-icon " + (inline ? 'inline' : 'block') + " " + (_fromMapping[kind] || 'property');
  };
}();
var FoldingRangeKind = /** @class */function () {
  /**
                                                  * Creates a new [FoldingRangeKind](#FoldingRangeKind).
                                                  *
                                                  * @param value of the kind.
                                                  */
  function FoldingRangeKind(value) {
    this.value = value;
  }
  /**
     * Kind for folding range representing a comment. The value of the kind is 'comment'.
     */
  FoldingRangeKind.Comment = new FoldingRangeKind('comment');
  /**
                                                               * Kind for folding range representing a import. The value of the kind is 'imports'.
                                                               */
  FoldingRangeKind.Imports = new FoldingRangeKind('imports');
  /**
                                                               * Kind for folding range representing regions (for example marked by `#region`, `#endregion`).
                                                               * The value of the kind is 'region'.
                                                               */
  FoldingRangeKind.Region = new FoldingRangeKind('region');
  return FoldingRangeKind;
}();

/**
                              * @internal
                              */
function isResourceTextEdit(thing) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__base_common_types_js__["g" /* isObject */])(thing) && thing.resource && Array.isArray(thing.edits);
}
// --- feature registries ------
/**
 * @internal
 */
var ReferenceProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                       * @internal
                                                                       */
var RenameProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                    * @internal
                                                                    */
var CompletionProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                        * @internal
                                                                        */
var SignatureHelpProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                           * @internal
                                                                           */
var HoverProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                   * @internal
                                                                   */
var DocumentSymbolProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                            * @internal
                                                                            */
var DocumentHighlightProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                               * @internal
                                                                               */
var DefinitionProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                        * @internal
                                                                        */
var DeclarationProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                         * @internal
                                                                         */
var ImplementationProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                            * @internal
                                                                            */
var TypeDefinitionProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                            * @internal
                                                                            */
var CodeLensProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                      * @internal
                                                                      */
var CodeActionProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                        * @internal
                                                                        */
var DocumentFormattingEditProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                                    * @internal
                                                                                    */
var DocumentRangeFormattingEditProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                                         * @internal
                                                                                         */
var OnTypeFormattingEditProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                                  * @internal
                                                                                  */
var LinkProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                  * @internal
                                                                  */
var ColorProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                   * @internal
                                                                   */
var SelectionRangeRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                    * @internal
                                                                    */
var FoldingRangeProviderRegistry = new __WEBPACK_IMPORTED_MODULE_3__modes_languageFeatureRegistry_js__["a" /* LanguageFeatureRegistry */]();
/**
                                                                          * @internal
                                                                          */
var TokenizationRegistry = new __WEBPACK_IMPORTED_MODULE_4__modes_tokenizationRegistry_js__["a" /* TokenizationRegistryImpl */]();

/***/ }),

/***/ 3450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["alertFormattingEdits"] = alertFormattingEdits;
/* harmony export (immutable) */ __webpack_exports__["getRealAndSyntheticDocumentFormattersOrdered"] = getRealAndSyntheticDocumentFormattersOrdered;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattingConflicts", function() { return FormattingConflicts; });
/* harmony export (immutable) */ __webpack_exports__["formatDocumentRangeWithSelectedProvider"] = formatDocumentRangeWithSelectedProvider;
/* harmony export (immutable) */ __webpack_exports__["formatDocumentRangeWithProvider"] = formatDocumentRangeWithProvider;
/* harmony export (immutable) */ __webpack_exports__["formatDocumentWithSelectedProvider"] = formatDocumentWithSelectedProvider;
/* harmony export (immutable) */ __webpack_exports__["formatDocumentWithProvider"] = formatDocumentWithProvider;
/* harmony export (immutable) */ __webpack_exports__["getDocumentRangeFormattingEditsUntilResult"] = getDocumentRangeFormattingEditsUntilResult;
/* harmony export (immutable) */ __webpack_exports__["getDocumentFormattingEditsUntilResult"] = getDocumentFormattingEditsUntilResult;
/* harmony export (immutable) */ __webpack_exports__["getOnTypeFormattingEdits"] = getOnTypeFormattingEdits;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_browser_ui_aria_aria_js__ = __webpack_require__(3711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_common_arrays_js__ = __webpack_require__(3502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_common_cancellation_js__ = __webpack_require__(3565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_common_errors_js__ = __webpack_require__(3493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_common_uri_js__ = __webpack_require__(3527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__browser_core_editorState_js__ = __webpack_require__(3858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__browser_editorBrowser_js__ = __webpack_require__(3859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__browser_editorExtensions_js__ = __webpack_require__(3538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_core_position_js__ = __webpack_require__(3487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_core_range_js__ = __webpack_require__(3482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_core_selection_js__ = __webpack_require__(3511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_modes_js__ = __webpack_require__(3448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_services_editorWorkerService_js__ = __webpack_require__(3589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_services_modelService_js__ = __webpack_require__(3566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__formattingEdit_js__ = __webpack_require__(3860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__nls_js__ = __webpack_require__(3491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__platform_extensions_common_extensions_js__ = __webpack_require__(4339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__platform_instantiation_common_instantiation_js__ = __webpack_require__(3485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__base_common_linkedList_js__ = __webpack_require__(3652);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}
        function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}
        function step(result) {result.done ? resolve(result.value) : new P(function (resolve) {resolve(result.value);}).then(fulfilled, rejected);}
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function () {if (t[0] & 1) throw t[1];return t[1];}, trys: [], ops: [] },f,y,t,g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {return this;}), g;
    function verb(n) {return function (v) {return step([n, v]);};}
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0:case 1:t = op;break;
                case 4:_.label++;return { value: op[1], done: false };
                case 5:_.label++;y = op[1];op = [0];continue;
                case 7:op = _.ops.pop();_.trys.pop();continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {_ = 0;continue;}
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {_.label = op[1];break;}
                    if (op[0] === 6 && _.label < t[1]) {_.label = t[1];t = op;break;}
                    if (t && _.label < t[2]) {_.label = t[2];_.ops.push(op);break;}
                    if (t[2]) _.ops.pop();
                    _.trys.pop();continue;}

            op = body.call(thisArg, _);
        } catch (e) {op = [6, e];y = 0;} finally {f = t = 0;}
        if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};



















function alertFormattingEdits(edits) {
    edits = edits.filter(function (edit) {return edit.range;});
    if (!edits.length) {
        return;
    }
    var range = edits[0].range;
    for (var i = 1; i < edits.length; i++) {
        range = __WEBPACK_IMPORTED_MODULE_9__common_core_range_js__["a" /* Range */].plusRange(range, edits[i].range);
    }
    var startLineNumber = range.startLineNumber,endLineNumber = range.endLineNumber;
    if (startLineNumber === endLineNumber) {
        if (edits.length === 1) {
            Object(__WEBPACK_IMPORTED_MODULE_0__base_browser_ui_aria_aria_js__["a" /* alert */])(__WEBPACK_IMPORTED_MODULE_15__nls_js__["a" /* localize */]('hint11', "Made 1 formatting edit on line {0}", startLineNumber));
        } else
        {
            Object(__WEBPACK_IMPORTED_MODULE_0__base_browser_ui_aria_aria_js__["a" /* alert */])(__WEBPACK_IMPORTED_MODULE_15__nls_js__["a" /* localize */]('hintn1', "Made {0} formatting edits on line {1}", edits.length, startLineNumber));
        }
    } else
    {
        if (edits.length === 1) {
            Object(__WEBPACK_IMPORTED_MODULE_0__base_browser_ui_aria_aria_js__["a" /* alert */])(__WEBPACK_IMPORTED_MODULE_15__nls_js__["a" /* localize */]('hint1n', "Made 1 formatting edit between lines {0} and {1}", startLineNumber, endLineNumber));
        } else
        {
            Object(__WEBPACK_IMPORTED_MODULE_0__base_browser_ui_aria_aria_js__["a" /* alert */])(__WEBPACK_IMPORTED_MODULE_15__nls_js__["a" /* localize */]('hintnn', "Made {0} formatting edits between lines {1} and {2}", edits.length, startLineNumber, endLineNumber));
        }
    }
}
function getRealAndSyntheticDocumentFormattersOrdered(model) {
    var result = [];
    var seen = new Set();
    // (1) add all document formatter
    var docFormatter = __WEBPACK_IMPORTED_MODULE_11__common_modes_js__["DocumentFormattingEditProviderRegistry"].ordered(model);
    for (var _i = 0, docFormatter_1 = docFormatter; _i < docFormatter_1.length; _i++) {
        var formatter = docFormatter_1[_i];
        result.push(formatter);
        if (formatter.extensionId) {
            seen.add(__WEBPACK_IMPORTED_MODULE_16__platform_extensions_common_extensions_js__["a" /* ExtensionIdentifier */].toKey(formatter.extensionId));
        }
    }
    // (2) add all range formatter as document formatter (unless the same extension already did that)
    var rangeFormatter = __WEBPACK_IMPORTED_MODULE_11__common_modes_js__["DocumentRangeFormattingEditProviderRegistry"].ordered(model);
    var _loop_1 = function (formatter) {
        if (formatter.extensionId) {
            if (seen.has(__WEBPACK_IMPORTED_MODULE_16__platform_extensions_common_extensions_js__["a" /* ExtensionIdentifier */].toKey(formatter.extensionId))) {
                return "continue";
            }
            seen.add(__WEBPACK_IMPORTED_MODULE_16__platform_extensions_common_extensions_js__["a" /* ExtensionIdentifier */].toKey(formatter.extensionId));
        }
        result.push({
            displayName: formatter.displayName,
            extensionId: formatter.extensionId,
            provideDocumentFormattingEdits: function (model, options, token) {
                return formatter.provideDocumentRangeFormattingEdits(model, model.getFullModelRange(), options, token);
            } });

    };
    for (var _a = 0, rangeFormatter_1 = rangeFormatter; _a < rangeFormatter_1.length; _a++) {
        var formatter = rangeFormatter_1[_a];
        _loop_1(formatter);
    }
    return result;
}
var FormattingConflicts = /** @class */function () {
    function FormattingConflicts() {
    }
    FormattingConflicts.select = function (formatter, document, mode) {
        return __awaiter(this, void 0, void 0, function () {
            var selector;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (formatter.length === 0) {
                            return [2 /*return*/, undefined];
                        }
                        selector = FormattingConflicts._selectors.iterator().next().value;
                        if (!selector) return [3 /*break*/, 2];
                        return [4 /*yield*/, selector(formatter, document, mode)];
                    case 1:return [2 /*return*/, _a.sent()];
                    case 2:return [2 /*return*/, formatter[0]];}

            });
        });
    };
    FormattingConflicts._selectors = new __WEBPACK_IMPORTED_MODULE_18__base_common_linkedList_js__["a" /* LinkedList */]();
    return FormattingConflicts;
}();

function formatDocumentRangeWithSelectedProvider(accessor, editorOrModel, range, mode, token) {
    return __awaiter(this, void 0, void 0, function () {
        var instaService, model, provider, selected;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    instaService = accessor.get(__WEBPACK_IMPORTED_MODULE_17__platform_instantiation_common_instantiation_js__["a" /* IInstantiationService */]);
                    model = Object(__WEBPACK_IMPORTED_MODULE_6__browser_editorBrowser_js__["a" /* isCodeEditor */])(editorOrModel) ? editorOrModel.getModel() : editorOrModel;
                    provider = __WEBPACK_IMPORTED_MODULE_11__common_modes_js__["DocumentRangeFormattingEditProviderRegistry"].ordered(model);
                    return [4 /*yield*/, FormattingConflicts.select(provider, model, mode)];
                case 1:
                    selected = _a.sent();
                    if (!selected) return [3 /*break*/, 3];
                    return [4 /*yield*/, instaService.invokeFunction(formatDocumentRangeWithProvider, selected, editorOrModel, range, token)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:return [2 /*return*/];}

        });
    });
}
function formatDocumentRangeWithProvider(accessor, provider, editorOrModel, range, token) {
    return __awaiter(this, void 0, void 0, function () {
        var workerService, model, validate, state_1, versionNow_1, rawEdits, edits, range_1, initialSelection_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    workerService = accessor.get(__WEBPACK_IMPORTED_MODULE_12__common_services_editorWorkerService_js__["a" /* IEditorWorkerService */]);
                    if (Object(__WEBPACK_IMPORTED_MODULE_6__browser_editorBrowser_js__["a" /* isCodeEditor */])(editorOrModel)) {
                        model = editorOrModel.getModel();
                        state_1 = new __WEBPACK_IMPORTED_MODULE_5__browser_core_editorState_js__["a" /* EditorState */](editorOrModel, 1 /* Value */ | 4 /* Position */);
                        validate = function () {return state_1.validate(editorOrModel);};
                    } else
                    {
                        model = editorOrModel;
                        versionNow_1 = editorOrModel.getVersionId();
                        validate = function () {return versionNow_1 === editorOrModel.getVersionId();};
                    }
                    return [4 /*yield*/, provider.provideDocumentRangeFormattingEdits(model, range, model.getFormattingOptions(), token)];
                case 1:
                    rawEdits = _a.sent();
                    return [4 /*yield*/, workerService.computeMoreMinimalEdits(model.uri, rawEdits)];
                case 2:
                    edits = _a.sent();
                    if (!validate()) {
                        return [2 /*return*/, true];
                    }
                    if (!edits || edits.length === 0) {
                        return [2 /*return*/, false];
                    }
                    if (Object(__WEBPACK_IMPORTED_MODULE_6__browser_editorBrowser_js__["a" /* isCodeEditor */])(editorOrModel)) {
                        // use editor to apply edits
                        __WEBPACK_IMPORTED_MODULE_14__formattingEdit_js__["a" /* FormattingEdit */].execute(editorOrModel, edits);
                        alertFormattingEdits(edits);
                        editorOrModel.pushUndoStop();
                        editorOrModel.focus();
                        editorOrModel.revealPositionInCenterIfOutsideViewport(editorOrModel.getPosition(), 1 /* Immediate */);
                    } else
                    {
                        range_1 = edits[0].range;
                        initialSelection_1 = new __WEBPACK_IMPORTED_MODULE_10__common_core_selection_js__["a" /* Selection */](range_1.startLineNumber, range_1.startColumn, range_1.endLineNumber, range_1.endColumn);
                        model.pushEditOperations([initialSelection_1], edits.map(function (edit) {
                            return {
                                text: edit.text,
                                range: __WEBPACK_IMPORTED_MODULE_9__common_core_range_js__["a" /* Range */].lift(edit.range),
                                forceMoveMarkers: true };

                        }), function (undoEdits) {
                            for (var _i = 0, undoEdits_1 = undoEdits; _i < undoEdits_1.length; _i++) {
                                var range_2 = undoEdits_1[_i].range;
                                if (__WEBPACK_IMPORTED_MODULE_9__common_core_range_js__["a" /* Range */].areIntersectingOrTouching(range_2, initialSelection_1)) {
                                    return [new __WEBPACK_IMPORTED_MODULE_10__common_core_selection_js__["a" /* Selection */](range_2.startLineNumber, range_2.startColumn, range_2.endLineNumber, range_2.endColumn)];
                                }
                            }
                            return null;
                        });
                    }
                    return [2 /*return*/, true];}

        });
    });
}
function formatDocumentWithSelectedProvider(accessor, editorOrModel, mode, token) {
    return __awaiter(this, void 0, void 0, function () {
        var instaService, model, provider, selected;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    instaService = accessor.get(__WEBPACK_IMPORTED_MODULE_17__platform_instantiation_common_instantiation_js__["a" /* IInstantiationService */]);
                    model = Object(__WEBPACK_IMPORTED_MODULE_6__browser_editorBrowser_js__["a" /* isCodeEditor */])(editorOrModel) ? editorOrModel.getModel() : editorOrModel;
                    provider = getRealAndSyntheticDocumentFormattersOrdered(model);
                    return [4 /*yield*/, FormattingConflicts.select(provider, model, mode)];
                case 1:
                    selected = _a.sent();
                    if (!selected) return [3 /*break*/, 3];
                    return [4 /*yield*/, instaService.invokeFunction(formatDocumentWithProvider, selected, editorOrModel, mode, token)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:return [2 /*return*/];}

        });
    });
}
function formatDocumentWithProvider(accessor, provider, editorOrModel, mode, token) {
    return __awaiter(this, void 0, void 0, function () {
        var workerService, model, cts, rawEdits, edits, range, initialSelection_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    workerService = accessor.get(__WEBPACK_IMPORTED_MODULE_12__common_services_editorWorkerService_js__["a" /* IEditorWorkerService */]);
                    if (Object(__WEBPACK_IMPORTED_MODULE_6__browser_editorBrowser_js__["a" /* isCodeEditor */])(editorOrModel)) {
                        model = editorOrModel.getModel();
                        cts = new __WEBPACK_IMPORTED_MODULE_5__browser_core_editorState_js__["b" /* EditorStateCancellationTokenSource */](editorOrModel, 1 /* Value */ | 4 /* Position */, token);
                    } else
                    {
                        model = editorOrModel;
                        cts = new __WEBPACK_IMPORTED_MODULE_5__browser_core_editorState_js__["d" /* TextModelCancellationTokenSource */](editorOrModel, token);
                    }
                    return [4 /*yield*/, provider.provideDocumentFormattingEdits(model, model.getFormattingOptions(), cts.token)];
                case 1:
                    rawEdits = _a.sent();
                    return [4 /*yield*/, workerService.computeMoreMinimalEdits(model.uri, rawEdits)];
                case 2:
                    edits = _a.sent();
                    if (cts.token.isCancellationRequested) {
                        return [2 /*return*/, true];
                    }
                    if (!edits || edits.length === 0) {
                        return [2 /*return*/, false];
                    }
                    if (Object(__WEBPACK_IMPORTED_MODULE_6__browser_editorBrowser_js__["a" /* isCodeEditor */])(editorOrModel)) {
                        // use editor to apply edits
                        __WEBPACK_IMPORTED_MODULE_14__formattingEdit_js__["a" /* FormattingEdit */].execute(editorOrModel, edits);
                        if (mode !== 2 /* Silent */) {
                                alertFormattingEdits(edits);
                                editorOrModel.pushUndoStop();
                                editorOrModel.focus();
                                editorOrModel.revealPositionInCenterIfOutsideViewport(editorOrModel.getPosition(), 1 /* Immediate */);
                            }
                    } else
                    {
                        range = edits[0].range;
                        initialSelection_2 = new __WEBPACK_IMPORTED_MODULE_10__common_core_selection_js__["a" /* Selection */](range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
                        model.pushEditOperations([initialSelection_2], edits.map(function (edit) {
                            return {
                                text: edit.text,
                                range: __WEBPACK_IMPORTED_MODULE_9__common_core_range_js__["a" /* Range */].lift(edit.range),
                                forceMoveMarkers: true };

                        }), function (undoEdits) {
                            for (var _i = 0, undoEdits_2 = undoEdits; _i < undoEdits_2.length; _i++) {
                                var range_3 = undoEdits_2[_i].range;
                                if (__WEBPACK_IMPORTED_MODULE_9__common_core_range_js__["a" /* Range */].areIntersectingOrTouching(range_3, initialSelection_2)) {
                                    return [new __WEBPACK_IMPORTED_MODULE_10__common_core_selection_js__["a" /* Selection */](range_3.startLineNumber, range_3.startColumn, range_3.endLineNumber, range_3.endColumn)];
                                }
                            }
                            return null;
                        });
                    }
                    return [2 /*return*/, true];}

        });
    });
}
function getDocumentRangeFormattingEditsUntilResult(workerService, model, range, options, token) {
    return __awaiter(this, void 0, void 0, function () {
        var providers, _i, providers_1, provider, rawEdits;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    providers = __WEBPACK_IMPORTED_MODULE_11__common_modes_js__["DocumentRangeFormattingEditProviderRegistry"].ordered(model);
                    _i = 0, providers_1 = providers;
                    _a.label = 1;
                case 1:
                    if (!(_i < providers_1.length)) return [3 /*break*/, 5];
                    provider = providers_1[_i];
                    return [4 /*yield*/, Promise.resolve(provider.provideDocumentRangeFormattingEdits(model, range, options, token)).catch(__WEBPACK_IMPORTED_MODULE_3__base_common_errors_js__["f" /* onUnexpectedExternalError */])];
                case 2:
                    rawEdits = _a.sent();
                    if (!Object(__WEBPACK_IMPORTED_MODULE_1__base_common_arrays_js__["l" /* isNonEmptyArray */])(rawEdits)) return [3 /*break*/, 4];
                    return [4 /*yield*/, workerService.computeMoreMinimalEdits(model.uri, rawEdits)];
                case 3:return [2 /*return*/, _a.sent()];
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5:return [2 /*return*/, undefined];}

        });
    });
}
function getDocumentFormattingEditsUntilResult(workerService, model, options, token) {
    return __awaiter(this, void 0, void 0, function () {
        var providers, _i, providers_2, provider, rawEdits;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    providers = getRealAndSyntheticDocumentFormattersOrdered(model);
                    _i = 0, providers_2 = providers;
                    _a.label = 1;
                case 1:
                    if (!(_i < providers_2.length)) return [3 /*break*/, 5];
                    provider = providers_2[_i];
                    return [4 /*yield*/, Promise.resolve(provider.provideDocumentFormattingEdits(model, options, token)).catch(__WEBPACK_IMPORTED_MODULE_3__base_common_errors_js__["f" /* onUnexpectedExternalError */])];
                case 2:
                    rawEdits = _a.sent();
                    if (!Object(__WEBPACK_IMPORTED_MODULE_1__base_common_arrays_js__["l" /* isNonEmptyArray */])(rawEdits)) return [3 /*break*/, 4];
                    return [4 /*yield*/, workerService.computeMoreMinimalEdits(model.uri, rawEdits)];
                case 3:return [2 /*return*/, _a.sent()];
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5:return [2 /*return*/, undefined];}

        });
    });
}
function getOnTypeFormattingEdits(workerService, model, position, ch, options) {
    var providers = __WEBPACK_IMPORTED_MODULE_11__common_modes_js__["OnTypeFormattingEditProviderRegistry"].ordered(model);
    if (providers.length === 0) {
        return Promise.resolve(undefined);
    }
    if (providers[0].autoFormatTriggerCharacters.indexOf(ch) < 0) {
        return Promise.resolve(undefined);
    }
    return Promise.resolve(providers[0].provideOnTypeFormattingEdits(model, position, ch, options, __WEBPACK_IMPORTED_MODULE_2__base_common_cancellation_js__["a" /* CancellationToken */].None)).catch(__WEBPACK_IMPORTED_MODULE_3__base_common_errors_js__["f" /* onUnexpectedExternalError */]).then(function (edits) {
        return workerService.computeMoreMinimalEdits(model.uri, edits);
    });
}
Object(__WEBPACK_IMPORTED_MODULE_7__browser_editorExtensions_js__["i" /* registerLanguageCommand */])('_executeFormatRangeProvider', function (accessor, args) {
    var resource = args.resource,range = args.range,options = args.options;
    if (!(resource instanceof __WEBPACK_IMPORTED_MODULE_4__base_common_uri_js__["a" /* URI */]) || !__WEBPACK_IMPORTED_MODULE_9__common_core_range_js__["a" /* Range */].isIRange(range)) {
        throw Object(__WEBPACK_IMPORTED_MODULE_3__base_common_errors_js__["b" /* illegalArgument */])();
    }
    var model = accessor.get(__WEBPACK_IMPORTED_MODULE_13__common_services_modelService_js__["a" /* IModelService */]).getModel(resource);
    if (!model) {
        throw Object(__WEBPACK_IMPORTED_MODULE_3__base_common_errors_js__["b" /* illegalArgument */])('resource');
    }
    return getDocumentRangeFormattingEditsUntilResult(accessor.get(__WEBPACK_IMPORTED_MODULE_12__common_services_editorWorkerService_js__["a" /* IEditorWorkerService */]), model, __WEBPACK_IMPORTED_MODULE_9__common_core_range_js__["a" /* Range */].lift(range), options, __WEBPACK_IMPORTED_MODULE_2__base_common_cancellation_js__["a" /* CancellationToken */].None);
});
Object(__WEBPACK_IMPORTED_MODULE_7__browser_editorExtensions_js__["i" /* registerLanguageCommand */])('_executeFormatDocumentProvider', function (accessor, args) {
    var resource = args.resource,options = args.options;
    if (!(resource instanceof __WEBPACK_IMPORTED_MODULE_4__base_common_uri_js__["a" /* URI */])) {
        throw Object(__WEBPACK_IMPORTED_MODULE_3__base_common_errors_js__["b" /* illegalArgument */])('resource');
    }
    var model = accessor.get(__WEBPACK_IMPORTED_MODULE_13__common_services_modelService_js__["a" /* IModelService */]).getModel(resource);
    if (!model) {
        throw Object(__WEBPACK_IMPORTED_MODULE_3__base_common_errors_js__["b" /* illegalArgument */])('resource');
    }
    return getDocumentFormattingEditsUntilResult(accessor.get(__WEBPACK_IMPORTED_MODULE_12__common_services_editorWorkerService_js__["a" /* IEditorWorkerService */]), model, options, __WEBPACK_IMPORTED_MODULE_2__base_common_cancellation_js__["a" /* CancellationToken */].None);
});
Object(__WEBPACK_IMPORTED_MODULE_7__browser_editorExtensions_js__["i" /* registerLanguageCommand */])('_executeFormatOnTypeProvider', function (accessor, args) {
    var resource = args.resource,position = args.position,ch = args.ch,options = args.options;
    if (!(resource instanceof __WEBPACK_IMPORTED_MODULE_4__base_common_uri_js__["a" /* URI */]) || !__WEBPACK_IMPORTED_MODULE_8__common_core_position_js__["a" /* Position */].isIPosition(position) || typeof ch !== 'string') {
        throw Object(__WEBPACK_IMPORTED_MODULE_3__base_common_errors_js__["b" /* illegalArgument */])();
    }
    var model = accessor.get(__WEBPACK_IMPORTED_MODULE_13__common_services_modelService_js__["a" /* IModelService */]).getModel(resource);
    if (!model) {
        throw Object(__WEBPACK_IMPORTED_MODULE_3__base_common_errors_js__["b" /* illegalArgument */])('resource');
    }
    return getOnTypeFormattingEdits(accessor.get(__WEBPACK_IMPORTED_MODULE_12__common_services_editorWorkerService_js__["a" /* IEditorWorkerService */]), model, __WEBPACK_IMPORTED_MODULE_8__common_core_position_js__["a" /* Position */].lift(position), ch, options);
});

/***/ }),

/***/ 3451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickLinkMouseEvent", function() { return ClickLinkMouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickLinkKeyboardEvent", function() { return ClickLinkKeyboardEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickLinkOptions", function() { return ClickLinkOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickLinkGesture", function() { return ClickLinkGesture; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__goToDefinitionMouse_css__ = __webpack_require__(4346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__goToDefinitionMouse_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__goToDefinitionMouse_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_browser_browser_js__ = __webpack_require__(3515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_common_lifecycle_js__ = __webpack_require__(3480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_common_event_js__ = __webpack_require__(3481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_common_platform_js__ = __webpack_require__(3488);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
        { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
        function (d, b) {for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {this.constructor = d;}
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();





function hasModifier(e, modifier) {
    return !!e[modifier];
}
/**
   * An event that encapsulates the various trigger modifiers logic needed for go to definition.
   */
var ClickLinkMouseEvent = /** @class */function () {
    function ClickLinkMouseEvent(source, opts) {
        this.target = source.target;
        this.hasTriggerModifier = hasModifier(source.event, opts.triggerModifier);
        this.hasSideBySideModifier = hasModifier(source.event, opts.triggerSideBySideModifier);
        this.isNoneOrSingleMouseDown = __WEBPACK_IMPORTED_MODULE_1__base_browser_browser_js__["j" /* isIE */] || source.event.detail <= 1; // IE does not support event.detail properly
    }
    return ClickLinkMouseEvent;
}();

/**
                                 * An event that encapsulates the various trigger modifiers logic needed for go to definition.
                                 */
var ClickLinkKeyboardEvent = /** @class */function () {
    function ClickLinkKeyboardEvent(source, opts) {
        this.keyCodeIsTriggerKey = source.keyCode === opts.triggerKey;
        this.keyCodeIsSideBySideKey = source.keyCode === opts.triggerSideBySideKey;
        this.hasTriggerModifier = hasModifier(source, opts.triggerModifier);
    }
    return ClickLinkKeyboardEvent;
}();

var ClickLinkOptions = /** @class */function () {
    function ClickLinkOptions(triggerKey, triggerModifier, triggerSideBySideKey, triggerSideBySideModifier) {
        this.triggerKey = triggerKey;
        this.triggerModifier = triggerModifier;
        this.triggerSideBySideKey = triggerSideBySideKey;
        this.triggerSideBySideModifier = triggerSideBySideModifier;
    }
    ClickLinkOptions.prototype.equals = function (other) {
        return this.triggerKey === other.triggerKey &&
        this.triggerModifier === other.triggerModifier &&
        this.triggerSideBySideKey === other.triggerSideBySideKey &&
        this.triggerSideBySideModifier === other.triggerSideBySideModifier;
    };
    return ClickLinkOptions;
}();

function createOptions(multiCursorModifier) {
    if (multiCursorModifier === 'altKey') {
        if (__WEBPACK_IMPORTED_MODULE_4__base_common_platform_js__["d" /* isMacintosh */]) {
            return new ClickLinkOptions(57 /* Meta */, 'metaKey', 6 /* Alt */, 'altKey');
        }
        return new ClickLinkOptions(5 /* Ctrl */, 'ctrlKey', 6 /* Alt */, 'altKey');
    }
    if (__WEBPACK_IMPORTED_MODULE_4__base_common_platform_js__["d" /* isMacintosh */]) {
        return new ClickLinkOptions(6 /* Alt */, 'altKey', 57 /* Meta */, 'metaKey');
    }
    return new ClickLinkOptions(6 /* Alt */, 'altKey', 5 /* Ctrl */, 'ctrlKey');
}
var ClickLinkGesture = /** @class */function (_super) {
    __extends(ClickLinkGesture, _super);
    function ClickLinkGesture(editor) {
        var _this = _super.call(this) || this;
        _this._onMouseMoveOrRelevantKeyDown = _this._register(new __WEBPACK_IMPORTED_MODULE_3__base_common_event_js__["a" /* Emitter */]());
        _this.onMouseMoveOrRelevantKeyDown = _this._onMouseMoveOrRelevantKeyDown.event;
        _this._onExecute = _this._register(new __WEBPACK_IMPORTED_MODULE_3__base_common_event_js__["a" /* Emitter */]());
        _this.onExecute = _this._onExecute.event;
        _this._onCancel = _this._register(new __WEBPACK_IMPORTED_MODULE_3__base_common_event_js__["a" /* Emitter */]());
        _this.onCancel = _this._onCancel.event;
        _this._editor = editor;
        _this._opts = createOptions(_this._editor.getConfiguration().multiCursorModifier);
        _this.lastMouseMoveEvent = null;
        _this.hasTriggerKeyOnMouseDown = false;
        _this._register(_this._editor.onDidChangeConfiguration(function (e) {
            if (e.multiCursorModifier) {
                var newOpts = createOptions(_this._editor.getConfiguration().multiCursorModifier);
                if (_this._opts.equals(newOpts)) {
                    return;
                }
                _this._opts = newOpts;
                _this.lastMouseMoveEvent = null;
                _this.hasTriggerKeyOnMouseDown = false;
                _this._onCancel.fire();
            }
        }));
        _this._register(_this._editor.onMouseMove(function (e) {return _this.onEditorMouseMove(new ClickLinkMouseEvent(e, _this._opts));}));
        _this._register(_this._editor.onMouseDown(function (e) {return _this.onEditorMouseDown(new ClickLinkMouseEvent(e, _this._opts));}));
        _this._register(_this._editor.onMouseUp(function (e) {return _this.onEditorMouseUp(new ClickLinkMouseEvent(e, _this._opts));}));
        _this._register(_this._editor.onKeyDown(function (e) {return _this.onEditorKeyDown(new ClickLinkKeyboardEvent(e, _this._opts));}));
        _this._register(_this._editor.onKeyUp(function (e) {return _this.onEditorKeyUp(new ClickLinkKeyboardEvent(e, _this._opts));}));
        _this._register(_this._editor.onMouseDrag(function () {return _this.resetHandler();}));
        _this._register(_this._editor.onDidChangeCursorSelection(function (e) {return _this.onDidChangeCursorSelection(e);}));
        _this._register(_this._editor.onDidChangeModel(function (e) {return _this.resetHandler();}));
        _this._register(_this._editor.onDidChangeModelContent(function () {return _this.resetHandler();}));
        _this._register(_this._editor.onDidScrollChange(function (e) {
            if (e.scrollTopChanged || e.scrollLeftChanged) {
                _this.resetHandler();
            }
        }));
        return _this;
    }
    ClickLinkGesture.prototype.onDidChangeCursorSelection = function (e) {
        if (e.selection && e.selection.startColumn !== e.selection.endColumn) {
            this.resetHandler(); // immediately stop this feature if the user starts to select (https://github.com/Microsoft/vscode/issues/7827)
        }
    };
    ClickLinkGesture.prototype.onEditorMouseMove = function (mouseEvent) {
        this.lastMouseMoveEvent = mouseEvent;
        this._onMouseMoveOrRelevantKeyDown.fire([mouseEvent, null]);
    };
    ClickLinkGesture.prototype.onEditorMouseDown = function (mouseEvent) {
        // We need to record if we had the trigger key on mouse down because someone might select something in the editor
        // holding the mouse down and then while mouse is down start to press Ctrl/Cmd to start a copy operation and then
        // release the mouse button without wanting to do the navigation.
        // With this flag we prevent goto definition if the mouse was down before the trigger key was pressed.
        this.hasTriggerKeyOnMouseDown = mouseEvent.hasTriggerModifier;
    };
    ClickLinkGesture.prototype.onEditorMouseUp = function (mouseEvent) {
        if (this.hasTriggerKeyOnMouseDown) {
            this._onExecute.fire(mouseEvent);
        }
    };
    ClickLinkGesture.prototype.onEditorKeyDown = function (e) {
        if (this.lastMouseMoveEvent && (
        e.keyCodeIsTriggerKey // User just pressed Ctrl/Cmd (normal goto definition)
        || e.keyCodeIsSideBySideKey && e.hasTriggerModifier // User pressed Ctrl/Cmd+Alt (goto definition to the side)
        )) {
            this._onMouseMoveOrRelevantKeyDown.fire([this.lastMouseMoveEvent, e]);
        } else
        if (e.hasTriggerModifier) {
            this._onCancel.fire(); // remove decorations if user holds another key with ctrl/cmd to prevent accident goto declaration
        }
    };
    ClickLinkGesture.prototype.onEditorKeyUp = function (e) {
        if (e.keyCodeIsTriggerKey) {
            this._onCancel.fire();
        }
    };
    ClickLinkGesture.prototype.resetHandler = function () {
        this.lastMouseMoveEvent = null;
        this.hasTriggerKeyOnMouseDown = false;
        this._onCancel.fire();
    };
    return ClickLinkGesture;
}(__WEBPACK_IMPORTED_MODULE_2__base_common_lifecycle_js__["a" /* Disposable */]);


/***/ }),

/***/ 3480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = isDisposable;
/* harmony export (immutable) */ __webpack_exports__["d"] = dispose;
/* harmony export (immutable) */ __webpack_exports__["c"] = combinedDisposable;
/* harmony export (immutable) */ __webpack_exports__["f"] = toDisposable;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Disposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ImmortalReference; });
function isDisposable(thing) {
    return typeof thing.dispose === 'function' &&
    thing.dispose.length === 0;
}
function dispose(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    if (Array.isArray(first)) {
        first.forEach(function (d) {return d && d.dispose();});
        return [];
    } else
    if (rest.length === 0) {
        if (first) {
            first.dispose();
            return first;
        }
        return undefined;
    } else
    {
        dispose(first);
        dispose(rest);
        return [];
    }
}
function combinedDisposable(disposables) {
    return { dispose: function () {return dispose(disposables);} };
}
function toDisposable(fn) {
    return { dispose: function () {fn();} };
}
var Disposable = /** @class */function () {
    function Disposable() {
        this._toDispose = [];
        this._lifecycle_disposable_isDisposed = false;
    }
    Disposable.prototype.dispose = function () {
        this._lifecycle_disposable_isDisposed = true;
        this._toDispose = dispose(this._toDispose);
    };
    Disposable.prototype._register = function (t) {
        if (this._lifecycle_disposable_isDisposed) {
            console.warn('Registering disposable on object that has already been disposed.');
            t.dispose();
        } else
        {
            this._toDispose.push(t);
        }
        return t;
    };
    Disposable.None = Object.freeze({ dispose: function () {} });
    return Disposable;
}();

var ImmortalReference = /** @class */function () {
    function ImmortalReference(object) {
        this.object = object;
    }
    ImmortalReference.prototype.dispose = function () {};
    return ImmortalReference;
}();


/***/ }),

/***/ 3481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Emitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PauseableEmitter; });
/* unused harmony export EventMultiplexer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EventBufferer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Relay; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors_js__ = __webpack_require__(3493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functional_js__ = __webpack_require__(4283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lifecycle_js__ = __webpack_require__(3480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__linkedList_js__ = __webpack_require__(3652);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
        { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
        function (d, b) {for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {this.constructor = d;}
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();




var Event;
(function (Event) {
    var _disposable = { dispose: function () {} };
    Event.None = function () {return _disposable;};
    /**
                                                     * Given an event, returns another event which only fires once.
                                                     */
    function once(event) {
        return function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) {thisArgs = null;}
            // we need this, in case the event fires during the listener call
            var didFire = false;
            var result;
            result = event(function (e) {
                if (didFire) {
                    return;
                } else
                if (result) {
                    result.dispose();
                } else
                {
                    didFire = true;
                }
                return listener.call(thisArgs, e);
            }, null, disposables);
            if (didFire) {
                result.dispose();
            }
            return result;
        };
    }
    Event.once = once;
    /**
                        * Given an event and a `map` function, returns another event which maps each element
                        * throught the mapping function.
                        */
    function map(event, map) {
        return snapshot(function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) {thisArgs = null;}
            return event(function (i) {return listener.call(thisArgs, map(i));}, null, disposables);
        });
    }
    Event.map = map;
    /**
                      * Given an event and an `each` function, returns another identical event and calls
                      * the `each` function per each element.
                      */
    function forEach(event, each) {
        return snapshot(function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) {thisArgs = null;}
            return event(function (i) {each(i);listener.call(thisArgs, i);}, null, disposables);
        });
    }
    Event.forEach = forEach;
    function filter(event, filter) {
        return snapshot(function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) {thisArgs = null;}
            return event(function (e) {return filter(e) && listener.call(thisArgs, e);}, null, disposables);
        });
    }
    Event.filter = filter;
    /**
                            * Given an event, returns the same event but typed as `Event<void>`.
                            */
    function signal(event) {
        return event;
    }
    Event.signal = signal;
    /**
                            * Given a collection of events, returns a single event which emits
                            * whenever any of the provided events emit.
                            */
    function any() {
        var events = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            events[_i] = arguments[_i];
        }
        return function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) {thisArgs = null;}
            return Object(__WEBPACK_IMPORTED_MODULE_2__lifecycle_js__["c" /* combinedDisposable */])(events.map(function (event) {return event(function (e) {return listener.call(thisArgs, e);}, null, disposables);}));
        };
    }
    Event.any = any;
    /**
                      * Given an event and a `merge` function, returns another event which maps each element
                      * and the cummulative result throught the `merge` function. Similar to `map`, but with memory.
                      */
    function reduce(event, merge, initial) {
        var output = initial;
        return map(event, function (e) {
            output = merge(output, e);
            return output;
        });
    }
    Event.reduce = reduce;
    /**
                            * Given a chain of event processing functions (filter, map, etc), each
                            * function will be invoked per event & per listener. Snapshotting an event
                            * chain allows each function to be invoked just once per event.
                            */
    function snapshot(event) {
        var listener;
        var emitter = new Emitter({
            onFirstListenerAdd: function () {
                listener = event(emitter.fire, emitter);
            },
            onLastListenerRemove: function () {
                listener.dispose();
            } });

        return emitter.event;
    }
    Event.snapshot = snapshot;
    function debounce(event, merge, delay, leading, leakWarningThreshold) {
        if (delay === void 0) {delay = 100;}
        if (leading === void 0) {leading = false;}
        var subscription;
        var output = undefined;
        var handle = undefined;
        var numDebouncedCalls = 0;
        var emitter = new Emitter({
            leakWarningThreshold: leakWarningThreshold,
            onFirstListenerAdd: function () {
                subscription = event(function (cur) {
                    numDebouncedCalls++;
                    output = merge(output, cur);
                    if (leading && !handle) {
                        emitter.fire(output);
                    }
                    clearTimeout(handle);
                    handle = setTimeout(function () {
                        var _output = output;
                        output = undefined;
                        handle = undefined;
                        if (!leading || numDebouncedCalls > 1) {
                            emitter.fire(_output);
                        }
                        numDebouncedCalls = 0;
                    }, delay);
                });
            },
            onLastListenerRemove: function () {
                subscription.dispose();
            } });

        return emitter.event;
    }
    Event.debounce = debounce;
    /**
                                * Given an event, it returns another event which fires only once and as soon as
                                * the input event emits. The event data is the number of millis it took for the
                                * event to fire.
                                */
    function stopwatch(event) {
        var start = new Date().getTime();
        return map(once(event), function (_) {return new Date().getTime() - start;});
    }
    Event.stopwatch = stopwatch;
    /**
                                  * Given an event, it returns another event which fires only when the event
                                  * element changes.
                                  */
    function latch(event) {
        var firstCall = true;
        var cache;
        return filter(event, function (value) {
            var shouldEmit = firstCall || value !== cache;
            firstCall = false;
            cache = value;
            return shouldEmit;
        });
    }
    Event.latch = latch;
    /**
                          * Buffers the provided event until a first listener comes
                          * along, at which point fire all the events at once and
                          * pipe the event from then on.
                          *
                          * ```typescript
                          * const emitter = new Emitter<number>();
                          * const event = emitter.event;
                          * const bufferedEvent = buffer(event);
                          *
                          * emitter.fire(1);
                          * emitter.fire(2);
                          * emitter.fire(3);
                          * // nothing...
                          *
                          * const listener = bufferedEvent(num => console.log(num));
                          * // 1, 2, 3
                          *
                          * emitter.fire(4);
                          * // 4
                          * ```
                          */
    function buffer(event, nextTick, _buffer) {
        if (nextTick === void 0) {nextTick = false;}
        if (_buffer === void 0) {_buffer = [];}
        var buffer = _buffer.slice();
        var listener = event(function (e) {
            if (buffer) {
                buffer.push(e);
            } else
            {
                emitter.fire(e);
            }
        });
        var flush = function () {
            if (buffer) {
                buffer.forEach(function (e) {return emitter.fire(e);});
            }
            buffer = null;
        };
        var emitter = new Emitter({
            onFirstListenerAdd: function () {
                if (!listener) {
                    listener = event(function (e) {return emitter.fire(e);});
                }
            },
            onFirstListenerDidAdd: function () {
                if (buffer) {
                    if (nextTick) {
                        setTimeout(flush);
                    } else
                    {
                        flush();
                    }
                }
            },
            onLastListenerRemove: function () {
                if (listener) {
                    listener.dispose();
                }
                listener = null;
            } });

        return emitter.event;
    }
    Event.buffer = buffer;
    var ChainableEvent = /** @class */function () {
        function ChainableEvent(event) {
            this.event = event;
        }
        ChainableEvent.prototype.map = function (fn) {
            return new ChainableEvent(map(this.event, fn));
        };
        ChainableEvent.prototype.forEach = function (fn) {
            return new ChainableEvent(forEach(this.event, fn));
        };
        ChainableEvent.prototype.filter = function (fn) {
            return new ChainableEvent(filter(this.event, fn));
        };
        ChainableEvent.prototype.reduce = function (merge, initial) {
            return new ChainableEvent(reduce(this.event, merge, initial));
        };
        ChainableEvent.prototype.latch = function () {
            return new ChainableEvent(latch(this.event));
        };
        ChainableEvent.prototype.on = function (listener, thisArgs, disposables) {
            return this.event(listener, thisArgs, disposables);
        };
        ChainableEvent.prototype.once = function (listener, thisArgs, disposables) {
            return once(this.event)(listener, thisArgs, disposables);
        };
        return ChainableEvent;
    }();
    function chain(event) {
        return new ChainableEvent(event);
    }
    Event.chain = chain;
    function fromNodeEventEmitter(emitter, eventName, map) {
        if (map === void 0) {map = function (id) {return id;};}
        var fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return result.fire(map.apply(void 0, args));
        };
        var onFirstListenerAdd = function () {return emitter.on(eventName, fn);};
        var onLastListenerRemove = function () {return emitter.removeListener(eventName, fn);};
        var result = new Emitter({ onFirstListenerAdd: onFirstListenerAdd, onLastListenerRemove: onLastListenerRemove });
        return result.event;
    }
    Event.fromNodeEventEmitter = fromNodeEventEmitter;
    function fromPromise(promise) {
        var emitter = new Emitter();
        var shouldEmit = false;
        promise.
        then(undefined, function () {return null;}).
        then(function () {
            if (!shouldEmit) {
                setTimeout(function () {return emitter.fire(undefined);}, 0);
            } else
            {
                emitter.fire(undefined);
            }
        });
        shouldEmit = true;
        return emitter.event;
    }
    Event.fromPromise = fromPromise;
    function toPromise(event) {
        return new Promise(function (c) {return once(event)(c);});
    }
    Event.toPromise = toPromise;
})(Event || (Event = {}));
var _globalLeakWarningThreshold = -1;
var LeakageMonitor = /** @class */function () {
    function LeakageMonitor(customThreshold, name) {
        if (name === void 0) {name = Math.random().toString(18).slice(2, 5);}
        this.customThreshold = customThreshold;
        this.name = name;
        this._warnCountdown = 0;
    }
    LeakageMonitor.prototype.dispose = function () {
        if (this._stacks) {
            this._stacks.clear();
        }
    };
    LeakageMonitor.prototype.check = function (listenerCount) {
        var _this = this;
        var threshold = _globalLeakWarningThreshold;
        if (typeof this.customThreshold === 'number') {
            threshold = this.customThreshold;
        }
        if (threshold <= 0 || listenerCount < threshold) {
            return undefined;
        }
        if (!this._stacks) {
            this._stacks = new Map();
        }
        var stack = new Error().stack.split('\n').slice(3).join('\n');
        var count = this._stacks.get(stack) || 0;
        this._stacks.set(stack, count + 1);
        this._warnCountdown -= 1;
        if (this._warnCountdown <= 0) {
            // only warn on first exceed and then every time the limit
            // is exceeded by 50% again
            this._warnCountdown = threshold * 0.5;
            // find most frequent listener and print warning
            var topStack_1;
            var topCount_1 = 0;
            this._stacks.forEach(function (count, stack) {
                if (!topStack_1 || topCount_1 < count) {
                    topStack_1 = stack;
                    topCount_1 = count;
                }
            });
            console.warn("[" + this.name + "] potential listener LEAK detected, having " + listenerCount + " listeners already. MOST frequent listener (" + topCount_1 + "):");
            console.warn(topStack_1);
        }
        return function () {
            var count = _this._stacks.get(stack) || 0;
            _this._stacks.set(stack, count - 1);
        };
    };
    return LeakageMonitor;
}();
/**
      * The Emitter can be used to expose an Event to the public
      * to fire it from the insides.
      * Sample:
         class Document {
     
             private _onDidChange = new Emitter<(value:string)=>any>();
     
             public onDidChange = this._onDidChange.event;
     
             // getter-style
             // get onDidChange(): Event<(value:string)=>any> {
             // 	return this._onDidChange.event;
             // }
     
             private _doIt() {
                 //...
                 this._onDidChange.fire(value);
             }
         }
      */
var Emitter = /** @class */function () {
    function Emitter(options) {
        this._disposed = false;
        this._options = options;
        this._leakageMon = _globalLeakWarningThreshold > 0 ?
        new LeakageMonitor(this._options && this._options.leakWarningThreshold) :
        undefined;
    }
    Object.defineProperty(Emitter.prototype, "event", {
        /**
                                                         * For the public to allow to subscribe
                                                         * to events from this Emitter
                                                         */
        get: function () {
            var _this = this;
            if (!this._event) {
                this._event = function (listener, thisArgs, disposables) {
                    if (!_this._listeners) {
                        _this._listeners = new __WEBPACK_IMPORTED_MODULE_3__linkedList_js__["a" /* LinkedList */]();
                    }
                    var firstListener = _this._listeners.isEmpty();
                    if (firstListener && _this._options && _this._options.onFirstListenerAdd) {
                        _this._options.onFirstListenerAdd(_this);
                    }
                    var remove = _this._listeners.push(!thisArgs ? listener : [listener, thisArgs]);
                    if (firstListener && _this._options && _this._options.onFirstListenerDidAdd) {
                        _this._options.onFirstListenerDidAdd(_this);
                    }
                    if (_this._options && _this._options.onListenerDidAdd) {
                        _this._options.onListenerDidAdd(_this, listener, thisArgs);
                    }
                    // check and record this emitter for potential leakage
                    var removeMonitor;
                    if (_this._leakageMon) {
                        removeMonitor = _this._leakageMon.check(_this._listeners.size);
                    }
                    var result;
                    result = {
                        dispose: function () {
                            if (removeMonitor) {
                                removeMonitor();
                            }
                            result.dispose = Emitter._noop;
                            if (!_this._disposed) {
                                remove();
                                if (_this._options && _this._options.onLastListenerRemove) {
                                    var hasListeners = _this._listeners && !_this._listeners.isEmpty();
                                    if (!hasListeners) {
                                        _this._options.onLastListenerRemove(_this);
                                    }
                                }
                            }
                        } };

                    if (Array.isArray(disposables)) {
                        disposables.push(result);
                    }
                    return result;
                };
            }
            return this._event;
        },
        enumerable: true,
        configurable: true });

    /**
                                * To be kept private to fire an event to
                                * subscribers
                                */
    Emitter.prototype.fire = function (event) {
        if (this._listeners) {
            // put all [listener,event]-pairs into delivery queue
            // then emit all event. an inner/nested event might be
            // the driver of this
            if (!this._deliveryQueue) {
                this._deliveryQueue = new __WEBPACK_IMPORTED_MODULE_3__linkedList_js__["a" /* LinkedList */]();
            }
            for (var iter = this._listeners.iterator(), e = iter.next(); !e.done; e = iter.next()) {
                this._deliveryQueue.push([e.value, event]);
            }
            while (this._deliveryQueue.size > 0) {
                var _a = this._deliveryQueue.shift(),listener = _a[0],event_1 = _a[1];
                try {
                    if (typeof listener === 'function') {
                        listener.call(undefined, event_1);
                    } else
                    {
                        listener[0].call(listener[1], event_1);
                    }
                }
                catch (e) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__errors_js__["e" /* onUnexpectedError */])(e);
                }
            }
        }
    };
    Emitter.prototype.dispose = function () {
        if (this._listeners) {
            this._listeners.clear();
        }
        if (this._deliveryQueue) {
            this._deliveryQueue.clear();
        }
        if (this._leakageMon) {
            this._leakageMon.dispose();
        }
        this._disposed = true;
    };
    Emitter._noop = function () {};
    return Emitter;
}();

var PauseableEmitter = /** @class */function (_super) {
    __extends(PauseableEmitter, _super);
    function PauseableEmitter(options) {
        var _this = _super.call(this, options) || this;
        _this._isPaused = 0;
        _this._eventQueue = new __WEBPACK_IMPORTED_MODULE_3__linkedList_js__["a" /* LinkedList */]();
        _this._mergeFn = options && options.merge;
        return _this;
    }
    PauseableEmitter.prototype.pause = function () {
        this._isPaused++;
    };
    PauseableEmitter.prototype.resume = function () {
        if (this._isPaused !== 0 && --this._isPaused === 0) {
            if (this._mergeFn) {
                // use the merge function to create a single composite
                // event. make a copy in case firing pauses this emitter
                var events = this._eventQueue.toArray();
                this._eventQueue.clear();
                _super.prototype.fire.call(this, this._mergeFn(events));
            } else
            {
                // no merging, fire each event individually and test
                // that this emitter isn't paused halfway through
                while (!this._isPaused && this._eventQueue.size !== 0) {
                    _super.prototype.fire.call(this, this._eventQueue.shift());
                }
            }
        }
    };
    PauseableEmitter.prototype.fire = function (event) {
        if (this._listeners) {
            if (this._isPaused !== 0) {
                this._eventQueue.push(event);
            } else
            {
                _super.prototype.fire.call(this, event);
            }
        }
    };
    return PauseableEmitter;
}(Emitter);

var EventMultiplexer = /** @class */function () {
    function EventMultiplexer() {
        var _this = this;
        this.hasListeners = false;
        this.events = [];
        this.emitter = new Emitter({
            onFirstListenerAdd: function () {return _this.onFirstListenerAdd();},
            onLastListenerRemove: function () {return _this.onLastListenerRemove();} });

    }
    Object.defineProperty(EventMultiplexer.prototype, "event", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: true,
        configurable: true });

    EventMultiplexer.prototype.add = function (event) {
        var _this = this;
        var e = { event: event, listener: null };
        this.events.push(e);
        if (this.hasListeners) {
            this.hook(e);
        }
        var dispose = function () {
            if (_this.hasListeners) {
                _this.unhook(e);
            }
            var idx = _this.events.indexOf(e);
            _this.events.splice(idx, 1);
        };
        return Object(__WEBPACK_IMPORTED_MODULE_2__lifecycle_js__["f" /* toDisposable */])(Object(__WEBPACK_IMPORTED_MODULE_1__functional_js__["a" /* once */])(dispose));
    };
    EventMultiplexer.prototype.onFirstListenerAdd = function () {
        var _this = this;
        this.hasListeners = true;
        this.events.forEach(function (e) {return _this.hook(e);});
    };
    EventMultiplexer.prototype.onLastListenerRemove = function () {
        var _this = this;
        this.hasListeners = false;
        this.events.forEach(function (e) {return _this.unhook(e);});
    };
    EventMultiplexer.prototype.hook = function (e) {
        var _this = this;
        e.listener = e.event(function (r) {return _this.emitter.fire(r);});
    };
    EventMultiplexer.prototype.unhook = function (e) {
        if (e.listener) {
            e.listener.dispose();
        }
        e.listener = null;
    };
    EventMultiplexer.prototype.dispose = function () {
        this.emitter.dispose();
    };
    return EventMultiplexer;
}();

/**
                              * The EventBufferer is useful in situations in which you want
                              * to delay firing your events during some code.
                              * You can wrap that code and be sure that the event will not
                              * be fired during that wrap.
                              *
                              * ```
                              * const emitter: Emitter;
                              * const delayer = new EventDelayer();
                              * const delayedEvent = delayer.wrapEvent(emitter.event);
                              *
                              * delayedEvent(console.log);
                              *
                              * delayer.bufferEvents(() => {
                              *   emitter.fire(); // event will not be fired yet
                              * });
                              *
                              * // event will only be fired at this point
                              * ```
                              */
var EventBufferer = /** @class */function () {
    function EventBufferer() {
        this.buffers = [];
    }
    EventBufferer.prototype.wrapEvent = function (event) {
        var _this = this;
        return function (listener, thisArgs, disposables) {
            return event(function (i) {
                var buffer = _this.buffers[_this.buffers.length - 1];
                if (buffer) {
                    buffer.push(function () {return listener.call(thisArgs, i);});
                } else
                {
                    listener.call(thisArgs, i);
                }
            }, undefined, disposables);
        };
    };
    EventBufferer.prototype.bufferEvents = function (fn) {
        var buffer = [];
        this.buffers.push(buffer);
        var r = fn();
        this.buffers.pop();
        buffer.forEach(function (flush) {return flush();});
        return r;
    };
    return EventBufferer;
}();

/**
                           * A Relay is an event forwarder which functions as a replugabble event pipe.
                           * Once created, you can connect an input event to it and it will simply forward
                           * events from that input event through its own `event` property. The `input`
                           * can be changed at any point in time.
                           */
var Relay = /** @class */function () {
    function Relay() {
        var _this = this;
        this.listening = false;
        this.inputEvent = Event.None;
        this.inputEventListener = __WEBPACK_IMPORTED_MODULE_2__lifecycle_js__["a" /* Disposable */].None;
        this.emitter = new Emitter({
            onFirstListenerDidAdd: function () {
                _this.listening = true;
                _this.inputEventListener = _this.inputEvent(_this.emitter.fire, _this.emitter);
            },
            onLastListenerRemove: function () {
                _this.listening = false;
                _this.inputEventListener.dispose();
            } });

        this.event = this.emitter.event;
    }
    Object.defineProperty(Relay.prototype, "input", {
        set: function (event) {
            this.inputEvent = event;
            if (this.listening) {
                this.inputEventListener.dispose();
                this.inputEventListener = event(this.emitter.fire, this.emitter);
            }
        },
        enumerable: true,
        configurable: true });

    Relay.prototype.dispose = function () {
        this.inputEventListener.dispose();
        this.emitter.dispose();
    };
    return Relay;
}();


/***/ }),

/***/ 3482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Range; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__position_js__ = __webpack_require__(3487);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
                                           * A range in the editor. (startLineNumber,startColumn) is <= (endLineNumber,endColumn)
                                           */
var Range = /** @class */function () {
    function Range(startLineNumber, startColumn, endLineNumber, endColumn) {
        if (startLineNumber > endLineNumber || startLineNumber === endLineNumber && startColumn > endColumn) {
            this.startLineNumber = endLineNumber;
            this.startColumn = endColumn;
            this.endLineNumber = startLineNumber;
            this.endColumn = startColumn;
        } else
        {
            this.startLineNumber = startLineNumber;
            this.startColumn = startColumn;
            this.endLineNumber = endLineNumber;
            this.endColumn = endColumn;
        }
    }
    /**
       * Test if this range is empty.
       */
    Range.prototype.isEmpty = function () {
        return Range.isEmpty(this);
    };
    /**
        * Test if `range` is empty.
        */
    Range.isEmpty = function (range) {
        return range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn;
    };
    /**
        * Test if position is in this range. If the position is at the edges, will return true.
        */
    Range.prototype.containsPosition = function (position) {
        return Range.containsPosition(this, position);
    };
    /**
        * Test if `position` is in `range`. If the position is at the edges, will return true.
        */
    Range.containsPosition = function (range, position) {
        if (position.lineNumber < range.startLineNumber || position.lineNumber > range.endLineNumber) {
            return false;
        }
        if (position.lineNumber === range.startLineNumber && position.column < range.startColumn) {
            return false;
        }
        if (position.lineNumber === range.endLineNumber && position.column > range.endColumn) {
            return false;
        }
        return true;
    };
    /**
        * Test if range is in this range. If the range is equal to this range, will return true.
        */
    Range.prototype.containsRange = function (range) {
        return Range.containsRange(this, range);
    };
    /**
        * Test if `otherRange` is in `range`. If the ranges are equal, will return true.
        */
    Range.containsRange = function (range, otherRange) {
        if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn < range.startColumn) {
            return false;
        }
        if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn > range.endColumn) {
            return false;
        }
        return true;
    };
    /**
        * A reunion of the two ranges.
        * The smallest position will be used as the start point, and the largest one as the end point.
        */
    Range.prototype.plusRange = function (range) {
        return Range.plusRange(this, range);
    };
    /**
        * A reunion of the two ranges.
        * The smallest position will be used as the start point, and the largest one as the end point.
        */
    Range.plusRange = function (a, b) {
        var startLineNumber;
        var startColumn;
        var endLineNumber;
        var endColumn;
        if (b.startLineNumber < a.startLineNumber) {
            startLineNumber = b.startLineNumber;
            startColumn = b.startColumn;
        } else
        if (b.startLineNumber === a.startLineNumber) {
            startLineNumber = b.startLineNumber;
            startColumn = Math.min(b.startColumn, a.startColumn);
        } else
        {
            startLineNumber = a.startLineNumber;
            startColumn = a.startColumn;
        }
        if (b.endLineNumber > a.endLineNumber) {
            endLineNumber = b.endLineNumber;
            endColumn = b.endColumn;
        } else
        if (b.endLineNumber === a.endLineNumber) {
            endLineNumber = b.endLineNumber;
            endColumn = Math.max(b.endColumn, a.endColumn);
        } else
        {
            endLineNumber = a.endLineNumber;
            endColumn = a.endColumn;
        }
        return new Range(startLineNumber, startColumn, endLineNumber, endColumn);
    };
    /**
        * A intersection of the two ranges.
        */
    Range.prototype.intersectRanges = function (range) {
        return Range.intersectRanges(this, range);
    };
    /**
        * A intersection of the two ranges.
        */
    Range.intersectRanges = function (a, b) {
        var resultStartLineNumber = a.startLineNumber;
        var resultStartColumn = a.startColumn;
        var resultEndLineNumber = a.endLineNumber;
        var resultEndColumn = a.endColumn;
        var otherStartLineNumber = b.startLineNumber;
        var otherStartColumn = b.startColumn;
        var otherEndLineNumber = b.endLineNumber;
        var otherEndColumn = b.endColumn;
        if (resultStartLineNumber < otherStartLineNumber) {
            resultStartLineNumber = otherStartLineNumber;
            resultStartColumn = otherStartColumn;
        } else
        if (resultStartLineNumber === otherStartLineNumber) {
            resultStartColumn = Math.max(resultStartColumn, otherStartColumn);
        }
        if (resultEndLineNumber > otherEndLineNumber) {
            resultEndLineNumber = otherEndLineNumber;
            resultEndColumn = otherEndColumn;
        } else
        if (resultEndLineNumber === otherEndLineNumber) {
            resultEndColumn = Math.min(resultEndColumn, otherEndColumn);
        }
        // Check if selection is now empty
        if (resultStartLineNumber > resultEndLineNumber) {
            return null;
        }
        if (resultStartLineNumber === resultEndLineNumber && resultStartColumn > resultEndColumn) {
            return null;
        }
        return new Range(resultStartLineNumber, resultStartColumn, resultEndLineNumber, resultEndColumn);
    };
    /**
        * Test if this range equals other.
        */
    Range.prototype.equalsRange = function (other) {
        return Range.equalsRange(this, other);
    };
    /**
        * Test if range `a` equals `b`.
        */
    Range.equalsRange = function (a, b) {
        return !!a &&
        !!b &&
        a.startLineNumber === b.startLineNumber &&
        a.startColumn === b.startColumn &&
        a.endLineNumber === b.endLineNumber &&
        a.endColumn === b.endColumn;
    };
    /**
        * Return the end position (which will be after or equal to the start position)
        */
    Range.prototype.getEndPosition = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__position_js__["a" /* Position */](this.endLineNumber, this.endColumn);
    };
    /**
        * Return the start position (which will be before or equal to the end position)
        */
    Range.prototype.getStartPosition = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__position_js__["a" /* Position */](this.startLineNumber, this.startColumn);
    };
    /**
        * Transform to a user presentable string representation.
        */
    Range.prototype.toString = function () {
        return '[' + this.startLineNumber + ',' + this.startColumn + ' -> ' + this.endLineNumber + ',' + this.endColumn + ']';
    };
    /**
        * Create a new range using this range's start position, and using endLineNumber and endColumn as the end position.
        */
    Range.prototype.setEndPosition = function (endLineNumber, endColumn) {
        return new Range(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
    };
    /**
        * Create a new range using this range's end position, and using startLineNumber and startColumn as the start position.
        */
    Range.prototype.setStartPosition = function (startLineNumber, startColumn) {
        return new Range(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
    };
    /**
        * Create a new empty range using this range's start position.
        */
    Range.prototype.collapseToStart = function () {
        return Range.collapseToStart(this);
    };
    /**
        * Create a new empty range using this range's start position.
        */
    Range.collapseToStart = function (range) {
        return new Range(range.startLineNumber, range.startColumn, range.startLineNumber, range.startColumn);
    };
    // ---
    Range.fromPositions = function (start, end) {
        if (end === void 0) {end = start;}
        return new Range(start.lineNumber, start.column, end.lineNumber, end.column);
    };
    Range.lift = function (range) {
        if (!range) {
            return null;
        }
        return new Range(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
    };
    /**
        * Test if `obj` is an `IRange`.
        */
    Range.isIRange = function (obj) {
        return obj &&
        typeof obj.startLineNumber === 'number' &&
        typeof obj.startColumn === 'number' &&
        typeof obj.endLineNumber === 'number' &&
        typeof obj.endColumn === 'number';
    };
    /**
        * Test if the two ranges are touching in any way.
        */
    Range.areIntersectingOrTouching = function (a, b) {
        // Check if `a` is before `b`
        if (a.endLineNumber < b.startLineNumber || a.endLineNumber === b.startLineNumber && a.endColumn < b.startColumn) {
            return false;
        }
        // Check if `b` is before `a`
        if (b.endLineNumber < a.startLineNumber || b.endLineNumber === a.startLineNumber && b.endColumn < a.startColumn) {
            return false;
        }
        // These ranges must intersect
        return true;
    };
    /**
        * Test if the two ranges are intersecting. If the ranges are touching it returns true.
        */
    Range.areIntersecting = function (a, b) {
        // Check if `a` is before `b`
        if (a.endLineNumber < b.startLineNumber || a.endLineNumber === b.startLineNumber && a.endColumn <= b.startColumn) {
            return false;
        }
        // Check if `b` is before `a`
        if (b.endLineNumber < a.startLineNumber || b.endLineNumber === a.startLineNumber && b.endColumn <= a.startColumn) {
            return false;
        }
        // These ranges must intersect
        return true;
    };
    /**
        * A function that compares ranges, useful for sorting ranges
        * It will first compare ranges on the startPosition and then on the endPosition
        */
    Range.compareRangesUsingStarts = function (a, b) {
        if (a && b) {
            var aStartLineNumber = a.startLineNumber | 0;
            var bStartLineNumber = b.startLineNumber | 0;
            if (aStartLineNumber === bStartLineNumber) {
                var aStartColumn = a.startColumn | 0;
                var bStartColumn = b.startColumn | 0;
                if (aStartColumn === bStartColumn) {
                    var aEndLineNumber = a.endLineNumber | 0;
                    var bEndLineNumber = b.endLineNumber | 0;
                    if (aEndLineNumber === bEndLineNumber) {
                        var aEndColumn = a.endColumn | 0;
                        var bEndColumn = b.endColumn | 0;
                        return aEndColumn - bEndColumn;
                    }
                    return aEndLineNumber - bEndLineNumber;
                }
                return aStartColumn - bStartColumn;
            }
            return aStartLineNumber - bStartLineNumber;
        }
        var aExists = a ? 1 : 0;
        var bExists = b ? 1 : 0;
        return aExists - bExists;
    };
    /**
        * A function that compares ranges, useful for sorting ranges
        * It will first compare ranges on the endPosition and then on the startPosition
        */
    Range.compareRangesUsingEnds = function (a, b) {
        if (a.endLineNumber === b.endLineNumber) {
            if (a.endColumn === b.endColumn) {
                if (a.startLineNumber === b.startLineNumber) {
                    return a.startColumn - b.startColumn;
                }
                return a.startLineNumber - b.startLineNumber;
            }
            return a.endColumn - b.endColumn;
        }
        return a.endLineNumber - b.endLineNumber;
    };
    /**
        * Test if the range spans multiple lines.
        */
    Range.spansMultipleLines = function (range) {
        return range.endLineNumber > range.startLineNumber;
    };
    return Range;
}();


/***/ }),

/***/ 3483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return empty; });
/* harmony export (immutable) */ __webpack_exports__["r"] = isFalsyOrWhitespace;
/* unused harmony export pad */
/* harmony export (immutable) */ __webpack_exports__["o"] = format;
/* harmony export (immutable) */ __webpack_exports__["l"] = escape;
/* harmony export (immutable) */ __webpack_exports__["m"] = escapeRegExpCharacters;
/* unused harmony export trim */
/* harmony export (immutable) */ __webpack_exports__["y"] = ltrim;
/* unused harmony export rtrim */
/* harmony export (immutable) */ __webpack_exports__["g"] = convertSimple2RegExpPattern;
/* harmony export (immutable) */ __webpack_exports__["B"] = startsWith;
/* harmony export (immutable) */ __webpack_exports__["j"] = endsWith;
/* harmony export (immutable) */ __webpack_exports__["h"] = createRegExp;
/* harmony export (immutable) */ __webpack_exports__["A"] = regExpLeadsToEndlessLoop;
/* harmony export (immutable) */ __webpack_exports__["z"] = regExpFlags;
/* harmony export (immutable) */ __webpack_exports__["n"] = firstNonWhitespaceIndex;
/* harmony export (immutable) */ __webpack_exports__["p"] = getLeadingWhitespace;
/* harmony export (immutable) */ __webpack_exports__["x"] = lastNonWhitespaceIndex;
/* unused harmony export compare */
/* harmony export (immutable) */ __webpack_exports__["v"] = isLowerAsciiLetter;
/* harmony export (immutable) */ __webpack_exports__["w"] = isUpperAsciiLetter;
/* harmony export (immutable) */ __webpack_exports__["k"] = equalsIgnoreCase;
/* harmony export (immutable) */ __webpack_exports__["C"] = startsWithIgnoreCase;
/* harmony export (immutable) */ __webpack_exports__["b"] = commonPrefixLength;
/* harmony export (immutable) */ __webpack_exports__["c"] = commonSuffixLength;
/* harmony export (immutable) */ __webpack_exports__["t"] = isHighSurrogate;
/* harmony export (immutable) */ __webpack_exports__["u"] = isLowSurrogate;
/* harmony export (immutable) */ __webpack_exports__["f"] = containsRTL;
/* harmony export (immutable) */ __webpack_exports__["d"] = containsEmoji;
/* harmony export (immutable) */ __webpack_exports__["q"] = isBasicASCII;
/* harmony export (immutable) */ __webpack_exports__["e"] = containsFullWidthCharacter;
/* harmony export (immutable) */ __webpack_exports__["s"] = isFullWidthCharacter;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UTF8_BOM_CHARACTER; });
/* harmony export (immutable) */ __webpack_exports__["D"] = startsWithUTF8BOM;
/* unused harmony export safeBtoa */
/* unused harmony export repeat */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
                                                                                                  * The empty string.
                                                                                                  */
var empty = '';
function isFalsyOrWhitespace(str) {
    if (!str || typeof str !== 'string') {
        return true;
    }
    return str.trim().length === 0;
}
/**
   * @returns the provided number with the given number of preceding zeros.
   */
function pad(n, l, char) {
    if (char === void 0) {char = '0';}
    var str = '' + n;
    var r = [str];
    for (var i = str.length; i < l; i++) {
        r.push(char);
    }
    return r.reverse().join('');
}
var _formatRegexp = /{(\d+)}/g;
/**
                                 * Helper to produce a string with a variable number of arguments. Insert variable segments
                                 * into the string using the {n} notation where N is the index of the argument following the string.
                                 * @param value string to which formatting is applied
                                 * @param args replacements for {n}-entries
                                 */
function format(value) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (args.length === 0) {
        return value;
    }
    return value.replace(_formatRegexp, function (match, group) {
        var idx = parseInt(group, 10);
        return isNaN(idx) || idx < 0 || idx >= args.length ?
        match :
        args[idx];
    });
}
/**
   * Converts HTML characters inside the string to use entities instead. Makes the string safe from
   * being used e.g. in HTMLElement.innerHTML.
   */
function escape(html) {
    return html.replace(/[<>&]/g, function (match) {
        switch (match) {
            case '<':return '&lt;';
            case '>':return '&gt;';
            case '&':return '&amp;';
            default:return match;}

    });
}
/**
   * Escapes regular expression characters in a given string
   */
function escapeRegExpCharacters(value) {
    return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\[\]\(\)\#]/g, '\\$&');
}
/**
   * Removes all occurrences of needle from the beginning and end of haystack.
   * @param haystack string to trim
   * @param needle the thing to trim (default is a blank)
   */
function trim(haystack, needle) {
    if (needle === void 0) {needle = ' ';}
    var trimmed = ltrim(haystack, needle);
    return rtrim(trimmed, needle);
}
/**
   * Removes all occurrences of needle from the beginning of haystack.
   * @param haystack string to trim
   * @param needle the thing to trim
   */
function ltrim(haystack, needle) {
    if (!haystack || !needle) {
        return haystack;
    }
    var needleLen = needle.length;
    if (needleLen === 0 || haystack.length === 0) {
        return haystack;
    }
    var offset = 0;
    while (haystack.indexOf(needle, offset) === offset) {
        offset = offset + needleLen;
    }
    return haystack.substring(offset);
}
/**
   * Removes all occurrences of needle from the end of haystack.
   * @param haystack string to trim
   * @param needle the thing to trim
   */
function rtrim(haystack, needle) {
    if (!haystack || !needle) {
        return haystack;
    }
    var needleLen = needle.length,haystackLen = haystack.length;
    if (needleLen === 0 || haystackLen === 0) {
        return haystack;
    }
    var offset = haystackLen,idx = -1;
    while (true) {
        idx = haystack.lastIndexOf(needle, offset - 1);
        if (idx === -1 || idx + needleLen !== offset) {
            break;
        }
        if (idx === 0) {
            return '';
        }
        offset = idx;
    }
    return haystack.substring(0, offset);
}
function convertSimple2RegExpPattern(pattern) {
    return pattern.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&').replace(/[\*]/g, '.*');
}
/**
   * Determines if haystack starts with needle.
   */
function startsWith(haystack, needle) {
    if (haystack.length < needle.length) {
        return false;
    }
    if (haystack === needle) {
        return true;
    }
    for (var i = 0; i < needle.length; i++) {
        if (haystack[i] !== needle[i]) {
            return false;
        }
    }
    return true;
}
/**
   * Determines if haystack ends with needle.
   */
function endsWith(haystack, needle) {
    var diff = haystack.length - needle.length;
    if (diff > 0) {
        return haystack.indexOf(needle, diff) === diff;
    } else
    if (diff === 0) {
        return haystack === needle;
    } else
    {
        return false;
    }
}
function createRegExp(searchString, isRegex, options) {
    if (options === void 0) {options = {};}
    if (!searchString) {
        throw new Error('Cannot create regex from empty string');
    }
    if (!isRegex) {
        searchString = escapeRegExpCharacters(searchString);
    }
    if (options.wholeWord) {
        if (!/\B/.test(searchString.charAt(0))) {
            searchString = '\\b' + searchString;
        }
        if (!/\B/.test(searchString.charAt(searchString.length - 1))) {
            searchString = searchString + '\\b';
        }
    }
    var modifiers = '';
    if (options.global) {
        modifiers += 'g';
    }
    if (!options.matchCase) {
        modifiers += 'i';
    }
    if (options.multiline) {
        modifiers += 'm';
    }
    if (options.unicode) {
        modifiers += 'u';
    }
    return new RegExp(searchString, modifiers);
}
function regExpLeadsToEndlessLoop(regexp) {
    // Exit early if it's one of these special cases which are meant to match
    // against an empty string
    if (regexp.source === '^' || regexp.source === '^$' || regexp.source === '$' || regexp.source === '^\\s*$') {
        return false;
    }
    // We check against an empty string. If the regular expression doesn't advance
    // (e.g. ends in an endless loop) it will match an empty string.
    var match = regexp.exec('');
    return !!(match && regexp.lastIndex === 0);
}
function regExpFlags(regexp) {
    return (regexp.global ? 'g' : '') + (
    regexp.ignoreCase ? 'i' : '') + (
    regexp.multiline ? 'm' : '') + (
    regexp.unicode ? 'u' : '');
}
/**
   * Returns first index of the string that is not whitespace.
   * If string is empty or contains only whitespaces, returns -1
   */
function firstNonWhitespaceIndex(str) {
    for (var i = 0, len = str.length; i < len; i++) {
        var chCode = str.charCodeAt(i);
        if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
                return i;
            }
    }
    return -1;
}
/**
   * Returns the leading whitespace of the string.
   * If the string contains only whitespaces, returns entire string
   */
function getLeadingWhitespace(str, start, end) {
    if (start === void 0) {start = 0;}
    if (end === void 0) {end = str.length;}
    for (var i = start; i < end; i++) {
        var chCode = str.charCodeAt(i);
        if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
                return str.substring(start, i);
            }
    }
    return str.substring(start, end);
}
/**
   * Returns last index of the string that is not whitespace.
   * If string is empty or contains only whitespaces, returns -1
   */
function lastNonWhitespaceIndex(str, startIndex) {
    if (startIndex === void 0) {startIndex = str.length - 1;}
    for (var i = startIndex; i >= 0; i--) {
        var chCode = str.charCodeAt(i);
        if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
                return i;
            }
    }
    return -1;
}
function compare(a, b) {
    if (a < b) {
        return -1;
    } else
    if (a > b) {
        return 1;
    } else
    {
        return 0;
    }
}
function isLowerAsciiLetter(code) {
    return code >= 97 /* a */ && code <= 122 /* z */;
}
function isUpperAsciiLetter(code) {
    return code >= 65 /* A */ && code <= 90 /* Z */;
}
function isAsciiLetter(code) {
    return isLowerAsciiLetter(code) || isUpperAsciiLetter(code);
}
function equalsIgnoreCase(a, b) {
    var len1 = a ? a.length : 0;
    var len2 = b ? b.length : 0;
    if (len1 !== len2) {
        return false;
    }
    return doEqualsIgnoreCase(a, b);
}
function doEqualsIgnoreCase(a, b, stopAt) {
    if (stopAt === void 0) {stopAt = a.length;}
    if (typeof a !== 'string' || typeof b !== 'string') {
        return false;
    }
    for (var i = 0; i < stopAt; i++) {
        var codeA = a.charCodeAt(i);
        var codeB = b.charCodeAt(i);
        if (codeA === codeB) {
            continue;
        }
        // a-z A-Z
        if (isAsciiLetter(codeA) && isAsciiLetter(codeB)) {
            var diff = Math.abs(codeA - codeB);
            if (diff !== 0 && diff !== 32) {
                return false;
            }
        }
        // Any other charcode
        else {
                if (String.fromCharCode(codeA).toLowerCase() !== String.fromCharCode(codeB).toLowerCase()) {
                    return false;
                }
            }
    }
    return true;
}
function startsWithIgnoreCase(str, candidate) {
    var candidateLength = candidate.length;
    if (candidate.length > str.length) {
        return false;
    }
    return doEqualsIgnoreCase(str, candidate, candidateLength);
}
/**
   * @returns the length of the common prefix of the two strings.
   */
function commonPrefixLength(a, b) {
    var i,len = Math.min(a.length, b.length);
    for (i = 0; i < len; i++) {
        if (a.charCodeAt(i) !== b.charCodeAt(i)) {
            return i;
        }
    }
    return len;
}
/**
   * @returns the length of the common suffix of the two strings.
   */
function commonSuffixLength(a, b) {
    var i,len = Math.min(a.length, b.length);
    var aLastIndex = a.length - 1;
    var bLastIndex = b.length - 1;
    for (i = 0; i < len; i++) {
        if (a.charCodeAt(aLastIndex - i) !== b.charCodeAt(bLastIndex - i)) {
            return i;
        }
    }
    return len;
}
// --- unicode
// http://en.wikipedia.org/wiki/Surrogate_pair
// Returns the code point starting at a specified index in a string
// Code points U+0000 to U+D7FF and U+E000 to U+FFFF are represented on a single character
// Code points U+10000 to U+10FFFF are represented on two consecutive characters
//export function getUnicodePoint(str:string, index:number, len:number):number {
//	const chrCode = str.charCodeAt(index);
//	if (0xD800 <= chrCode && chrCode <= 0xDBFF && index + 1 < len) {
//		const nextChrCode = str.charCodeAt(index + 1);
//		if (0xDC00 <= nextChrCode && nextChrCode <= 0xDFFF) {
//			return (chrCode - 0xD800) << 10 + (nextChrCode - 0xDC00) + 0x10000;
//		}
//	}
//	return chrCode;
//}
function isHighSurrogate(charCode) {
    return 0xD800 <= charCode && charCode <= 0xDBFF;
}
function isLowSurrogate(charCode) {
    return 0xDC00 <= charCode && charCode <= 0xDFFF;
}
/**
   * Generated using https://github.com/alexandrudima/unicode-utils/blob/master/generate-rtl-test.js
   */
var CONTAINS_RTL = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Returns true if `str` contains any Unicode character that is classified as "R" or "AL".
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
function containsRTL(str) {
    return CONTAINS_RTL.test(str);
}
/**
   * Generated using https://github.com/alexandrudima/unicode-utils/blob/master/generate-emoji-test.js
   */
var CONTAINS_EMOJI = /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEF8]|\uD83E[\uDD00-\uDDE6])/;
function containsEmoji(str) {
    return CONTAINS_EMOJI.test(str);
}
var IS_BASIC_ASCII = /^[\t\n\r\x20-\x7E]*$/;
/**
                                              * Returns true if `str` contains only basic ASCII characters in the range 32 - 126 (including 32 and 126) or \n, \r, \t
                                              */
function isBasicASCII(str) {
    return IS_BASIC_ASCII.test(str);
}
function containsFullWidthCharacter(str) {
    for (var i = 0, len = str.length; i < len; i++) {
        if (isFullWidthCharacter(str.charCodeAt(i))) {
            return true;
        }
    }
    return false;
}
function isFullWidthCharacter(charCode) {
    // Do a cheap trick to better support wrapping of wide characters, treat them as 2 columns
    // http://jrgraphix.net/research/unicode_blocks.php
    //          2E80 — 2EFF   CJK Radicals Supplement
    //          2F00 — 2FDF   Kangxi Radicals
    //          2FF0 — 2FFF   Ideographic Description Characters
    //          3000 — 303F   CJK Symbols and Punctuation
    //          3040 — 309F   Hiragana
    //          30A0 — 30FF   Katakana
    //          3100 — 312F   Bopomofo
    //          3130 — 318F   Hangul Compatibility Jamo
    //          3190 — 319F   Kanbun
    //          31A0 — 31BF   Bopomofo Extended
    //          31F0 — 31FF   Katakana Phonetic Extensions
    //          3200 — 32FF   Enclosed CJK Letters and Months
    //          3300 — 33FF   CJK Compatibility
    //          3400 — 4DBF   CJK Unified Ideographs Extension A
    //          4DC0 — 4DFF   Yijing Hexagram Symbols
    //          4E00 — 9FFF   CJK Unified Ideographs
    //          A000 — A48F   Yi Syllables
    //          A490 — A4CF   Yi Radicals
    //          AC00 — D7AF   Hangul Syllables
    // [IGNORE] D800 — DB7F   High Surrogates
    // [IGNORE] DB80 — DBFF   High Private Use Surrogates
    // [IGNORE] DC00 — DFFF   Low Surrogates
    // [IGNORE] E000 — F8FF   Private Use Area
    //          F900 — FAFF   CJK Compatibility Ideographs
    // [IGNORE] FB00 — FB4F   Alphabetic Presentation Forms
    // [IGNORE] FB50 — FDFF   Arabic Presentation Forms-A
    // [IGNORE] FE00 — FE0F   Variation Selectors
    // [IGNORE] FE20 — FE2F   Combining Half Marks
    // [IGNORE] FE30 — FE4F   CJK Compatibility Forms
    // [IGNORE] FE50 — FE6F   Small Form Variants
    // [IGNORE] FE70 — FEFF   Arabic Presentation Forms-B
    //          FF00 — FFEF   Halfwidth and Fullwidth Forms
    //               [https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms]
    //               of which FF01 - FF5E fullwidth ASCII of 21 to 7E
    // [IGNORE]    and FF65 - FFDC halfwidth of Katakana and Hangul
    // [IGNORE] FFF0 — FFFF   Specials
    charCode = +charCode; // @perf
    return charCode >= 0x2E80 && charCode <= 0xD7AF ||
    charCode >= 0xF900 && charCode <= 0xFAFF ||
    charCode >= 0xFF01 && charCode <= 0xFF5E;
}
// -- UTF-8 BOM
var UTF8_BOM_CHARACTER = String.fromCharCode(65279 /* UTF8_BOM */);
function startsWithUTF8BOM(str) {
    return !!(str && str.length > 0 && str.charCodeAt(0) === 65279 /* UTF8_BOM */);
}
function safeBtoa(str) {
    return btoa(encodeURIComponent(str)); // we use encodeURIComponent because btoa fails for non Latin 1 values
}
function repeat(s, count) {
    var result = '';
    for (var i = 0; i < count; i++) {
        result += s;
    }
    return result;
}

/***/ }),

/***/ 3485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _util; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IInstantiationService; });
/* harmony export (immutable) */ __webpack_exports__["c"] = createDecorator;
/* harmony export (immutable) */ __webpack_exports__["d"] = optional;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// ------ internal util
var _util;
(function (_util) {
    _util.serviceIds = new Map();
    _util.DI_TARGET = '$di$target';
    _util.DI_DEPENDENCIES = '$di$dependencies';
    function getServiceDependencies(ctor) {
        return ctor[_util.DI_DEPENDENCIES] || [];
    }
    _util.getServiceDependencies = getServiceDependencies;
})(_util || (_util = {}));
var IInstantiationService = createDecorator('instantiationService');
function storeServiceDependency(id, target, index, optional) {
    if (target[_util.DI_TARGET] === target) {
        target[_util.DI_DEPENDENCIES].push({ id: id, index: index, optional: optional });
    } else
    {
        target[_util.DI_DEPENDENCIES] = [{ id: id, index: index, optional: optional }];
        target[_util.DI_TARGET] = target;
    }
}
/**
   * A *only* valid way to create a {{ServiceIdentifier}}.
   */
function createDecorator(serviceId) {
    if (_util.serviceIds.has(serviceId)) {
        return _util.serviceIds.get(serviceId);
    }
    var id = function (target, key, index) {
        if (arguments.length !== 3) {
            throw new Error('@IServiceName-decorator can only be used to decorate a parameter');
        }
        storeServiceDependency(id, target, index, false);
    };
    id.toString = function () {return serviceId;};
    _util.serviceIds.set(serviceId, id);
    return id;
}
/**
   * Mark a service dependency as optional.
   */
function optional(serviceIdentifier) {
    return function (target, key, index) {
        if (arguments.length !== 3) {
            throw new Error('@optional-decorator can only be used to decorate a parameter');
        }
        storeServiceDependency(serviceIdentifier, target, index, true);
    };
}

/***/ }),

/***/ 3486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["m"] = clearNode;
/* harmony export (immutable) */ __webpack_exports__["G"] = removeNode;
/* harmony export (immutable) */ __webpack_exports__["C"] = isInDOM;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return addClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return removeClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return toggleClass; });
/* harmony export (immutable) */ __webpack_exports__["g"] = addDisposableListener;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return addStandardDisposableListener; });
/* harmony export (immutable) */ __webpack_exports__["h"] = addDisposableNonBubblingMouseOutListener;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return runAtThisOrScheduleAtNextAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return scheduleAtNextAnimationFrame; });
/* harmony export (immutable) */ __webpack_exports__["i"] = addDisposableThrottledListener;
/* harmony export (immutable) */ __webpack_exports__["q"] = getComputedStyle;
/* unused harmony export Dimension */
/* harmony export (immutable) */ __webpack_exports__["v"] = getTopLeftOffset;
/* harmony export (immutable) */ __webpack_exports__["t"] = getDomNodePagePosition;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return StandardWindow; });
/* harmony export (immutable) */ __webpack_exports__["x"] = getTotalWidth;
/* harmony export (immutable) */ __webpack_exports__["s"] = getContentWidth;
/* harmony export (immutable) */ __webpack_exports__["r"] = getContentHeight;
/* harmony export (immutable) */ __webpack_exports__["w"] = getTotalHeight;
/* harmony export (immutable) */ __webpack_exports__["A"] = isAncestor;
/* harmony export (immutable) */ __webpack_exports__["p"] = findParentWithClass;
/* harmony export (immutable) */ __webpack_exports__["o"] = createStyleSheet;
/* unused harmony export createCSSRule */
/* harmony export (immutable) */ __webpack_exports__["D"] = removeCSSRulesContainingSelector;
/* harmony export (immutable) */ __webpack_exports__["B"] = isHTMLElement;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EventHelper; });
/* harmony export (immutable) */ __webpack_exports__["K"] = saveParentsScrollTop;
/* harmony export (immutable) */ __webpack_exports__["I"] = restoreParentsScrollTop;
/* harmony export (immutable) */ __webpack_exports__["O"] = trackFocus;
/* harmony export (immutable) */ __webpack_exports__["l"] = append;
/* harmony export (immutable) */ __webpack_exports__["a"] = $;
/* harmony export (immutable) */ __webpack_exports__["M"] = show;
/* harmony export (immutable) */ __webpack_exports__["z"] = hide;
/* harmony export (immutable) */ __webpack_exports__["H"] = removeTabIndexAndUpdateFocus;
/* harmony export (immutable) */ __webpack_exports__["u"] = getElementsByTagName;
/* harmony export (immutable) */ __webpack_exports__["n"] = computeScreenAwareSize;
/* harmony export (immutable) */ __webpack_exports__["P"] = windowOpenNoOpener;
/* harmony export (immutable) */ __webpack_exports__["k"] = animate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browser_js__ = __webpack_require__(3515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_js__ = __webpack_require__(3587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keyboardEvent_js__ = __webpack_require__(3569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mouseEvent_js__ = __webpack_require__(3540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_async_js__ = __webpack_require__(3496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_errors_js__ = __webpack_require__(3493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_event_js__ = __webpack_require__(3481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_lifecycle_js__ = __webpack_require__(3480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_platform_js__ = __webpack_require__(3488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_arrays_js__ = __webpack_require__(3502);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
        { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
        function (d, b) {for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {this.constructor = d;}
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();










function clearNode(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}
function removeNode(node) {
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
function isInDOM(node) {
    while (node) {
        if (node === document.body) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
var _manualClassList = new ( /** @class */function () {
    function class_1() {
    }
    class_1.prototype._findClassName = function (node, className) {
        var classes = node.className;
        if (!classes) {
            this._lastStart = -1;
            return;
        }
        className = className.trim();
        var classesLen = classes.length,classLen = className.length;
        if (classLen === 0) {
            this._lastStart = -1;
            return;
        }
        if (classesLen < classLen) {
            this._lastStart = -1;
            return;
        }
        if (classes === className) {
            this._lastStart = 0;
            this._lastEnd = classesLen;
            return;
        }
        var idx = -1,idxEnd;
        while ((idx = classes.indexOf(className, idx + 1)) >= 0) {
            idxEnd = idx + classLen;
            // a class that is followed by another class
            if ((idx === 0 || classes.charCodeAt(idx - 1) === 32 /* Space */) && classes.charCodeAt(idxEnd) === 32 /* Space */) {
                    this._lastStart = idx;
                    this._lastEnd = idxEnd + 1;
                    return;
                }
            // last class
            if (idx > 0 && classes.charCodeAt(idx - 1) === 32 /* Space */ && idxEnd === classesLen) {
                this._lastStart = idx - 1;
                this._lastEnd = idxEnd;
                return;
            }
            // equal - duplicate of cmp above
            if (idx === 0 && idxEnd === classesLen) {
                this._lastStart = 0;
                this._lastEnd = idxEnd;
                return;
            }
        }
        this._lastStart = -1;
    };
    class_1.prototype.hasClass = function (node, className) {
        this._findClassName(node, className);
        return this._lastStart !== -1;
    };
    class_1.prototype.addClasses = function (node) {
        var _this = this;
        var classNames = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            classNames[_i - 1] = arguments[_i];
        }
        classNames.forEach(function (nameValue) {return nameValue.split(' ').forEach(function (name) {return _this.addClass(node, name);});});
    };
    class_1.prototype.addClass = function (node, className) {
        if (!node.className) {// doesn't have it for sure
            node.className = className;
        } else
        {
            this._findClassName(node, className); // see if it's already there
            if (this._lastStart === -1) {
                node.className = node.className + ' ' + className;
            }
        }
    };
    class_1.prototype.removeClass = function (node, className) {
        this._findClassName(node, className);
        if (this._lastStart === -1) {
            return; // Prevent styles invalidation if not necessary
        } else
        {
            node.className = node.className.substring(0, this._lastStart) + node.className.substring(this._lastEnd);
        }
    };
    class_1.prototype.removeClasses = function (node) {
        var _this = this;
        var classNames = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            classNames[_i - 1] = arguments[_i];
        }
        classNames.forEach(function (nameValue) {return nameValue.split(' ').forEach(function (name) {return _this.removeClass(node, name);});});
    };
    class_1.prototype.toggleClass = function (node, className, shouldHaveIt) {
        this._findClassName(node, className);
        if (this._lastStart !== -1 && (shouldHaveIt === undefined || !shouldHaveIt)) {
            this.removeClass(node, className);
        }
        if (this._lastStart === -1 && (shouldHaveIt === undefined || shouldHaveIt)) {
            this.addClass(node, className);
        }
    };
    return class_1;
}())();
var _nativeClassList = new ( /** @class */function () {
    function class_2() {
    }
    class_2.prototype.hasClass = function (node, className) {
        return Boolean(className) && node.classList && node.classList.contains(className);
    };
    class_2.prototype.addClasses = function (node) {
        var _this = this;
        var classNames = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            classNames[_i - 1] = arguments[_i];
        }
        classNames.forEach(function (nameValue) {return nameValue.split(' ').forEach(function (name) {return _this.addClass(node, name);});});
    };
    class_2.prototype.addClass = function (node, className) {
        if (className && node.classList) {
            node.classList.add(className);
        }
    };
    class_2.prototype.removeClass = function (node, className) {
        if (className && node.classList) {
            node.classList.remove(className);
        }
    };
    class_2.prototype.removeClasses = function (node) {
        var _this = this;
        var classNames = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            classNames[_i - 1] = arguments[_i];
        }
        classNames.forEach(function (nameValue) {return nameValue.split(' ').forEach(function (name) {return _this.removeClass(node, name);});});
    };
    class_2.prototype.toggleClass = function (node, className, shouldHaveIt) {
        if (node.classList) {
            node.classList.toggle(className, shouldHaveIt);
        }
    };
    return class_2;
}())();
// In IE11 there is only partial support for `classList` which makes us keep our
// custom implementation. Otherwise use the native implementation, see: http://caniuse.com/#search=classlist
var _classList = __WEBPACK_IMPORTED_MODULE_0__browser_js__["j" /* isIE */] ? _manualClassList : _nativeClassList;
var hasClass = _classList.hasClass.bind(_classList);
var addClass = _classList.addClass.bind(_classList);
var addClasses = _classList.addClasses.bind(_classList);
var removeClass = _classList.removeClass.bind(_classList);
var removeClasses = _classList.removeClasses.bind(_classList);
var toggleClass = _classList.toggleClass.bind(_classList);
var DomListener = /** @class */function () {
    function DomListener(node, type, handler, useCapture) {
        this._node = node;
        this._type = type;
        this._handler = handler;
        this._useCapture = useCapture || false;
        this._node.addEventListener(this._type, this._handler, this._useCapture);
    }
    DomListener.prototype.dispose = function () {
        if (!this._handler) {
            // Already disposed
            return;
        }
        this._node.removeEventListener(this._type, this._handler, this._useCapture);
        // Prevent leakers from holding on to the dom or handler func
        this._node = null;
        this._handler = null;
    };
    return DomListener;
}();
function addDisposableListener(node, type, handler, useCapture) {
    return new DomListener(node, type, handler, useCapture);
}
function _wrapAsStandardMouseEvent(handler) {
    return function (e) {
        return handler(new __WEBPACK_IMPORTED_MODULE_3__mouseEvent_js__["a" /* StandardMouseEvent */](e));
    };
}
function _wrapAsStandardKeyboardEvent(handler) {
    return function (e) {
        return handler(new __WEBPACK_IMPORTED_MODULE_2__keyboardEvent_js__["a" /* StandardKeyboardEvent */](e));
    };
}
var addStandardDisposableListener = function addStandardDisposableListener(node, type, handler, useCapture) {
    var wrapHandler = handler;
    if (type === 'click' || type === 'mousedown') {
        wrapHandler = _wrapAsStandardMouseEvent(handler);
    } else
    if (type === 'keydown' || type === 'keypress' || type === 'keyup') {
        wrapHandler = _wrapAsStandardKeyboardEvent(handler);
    }
    return addDisposableListener(node, type, wrapHandler, useCapture);
};
function addDisposableNonBubblingMouseOutListener(node, handler) {
    return addDisposableListener(node, 'mouseout', function (e) {
        // Mouse out bubbles, so this is an attempt to ignore faux mouse outs coming from children elements
        var toElement = e.relatedTarget || e.target;
        while (toElement && toElement !== node) {
            toElement = toElement.parentNode;
        }
        if (toElement === node) {
            return;
        }
        handler(e);
    });
}
var _animationFrame = null;
function doRequestAnimationFrame(callback) {
    if (!_animationFrame) {
        var emulatedRequestAnimationFrame = function (callback) {
            return setTimeout(function () {return callback(new Date().getTime());}, 0);
        };
        _animationFrame = self.requestAnimationFrame ||
        self.msRequestAnimationFrame ||
        self.webkitRequestAnimationFrame ||
        self.mozRequestAnimationFrame ||
        self.oRequestAnimationFrame ||
        emulatedRequestAnimationFrame;
    }
    return _animationFrame.call(self, callback);
}
/**
   * Schedule a callback to be run at the next animation frame.
   * This allows multiple parties to register callbacks that should run at the next animation frame.
   * If currently in an animation frame, `runner` will be executed immediately.
   * @return token that can be used to cancel the scheduled runner (only if `runner` was not executed immediately).
   */
var runAtThisOrScheduleAtNextAnimationFrame;
/**
                                                     * Schedule a callback to be run at the next animation frame.
                                                     * This allows multiple parties to register callbacks that should run at the next animation frame.
                                                     * If currently in an animation frame, `runner` will be executed at the next animation frame.
                                                     * @return token that can be used to cancel the scheduled runner.
                                                     */
var scheduleAtNextAnimationFrame;
var AnimationFrameQueueItem = /** @class */function () {
    function AnimationFrameQueueItem(runner, priority) {
        if (priority === void 0) {priority = 0;}
        this._runner = runner;
        this.priority = priority;
        this._canceled = false;
    }
    AnimationFrameQueueItem.prototype.dispose = function () {
        this._canceled = true;
    };
    AnimationFrameQueueItem.prototype.execute = function () {
        if (this._canceled) {
            return;
        }
        try {
            this._runner();
        }
        catch (e) {
            Object(__WEBPACK_IMPORTED_MODULE_5__common_errors_js__["e" /* onUnexpectedError */])(e);
        }
    };
    // Sort by priority (largest to lowest)
    AnimationFrameQueueItem.sort = function (a, b) {
        return b.priority - a.priority;
    };
    return AnimationFrameQueueItem;
}();
(function () {
    /**
               * The runners scheduled at the next animation frame
               */
    var NEXT_QUEUE = [];
    /**
                          * The runners scheduled at the current animation frame
                          */
    var CURRENT_QUEUE = null;
    /**
                               * A flag to keep track if the native requestAnimationFrame was already called
                               */
    var animFrameRequested = false;
    /**
                                     * A flag to indicate if currently handling a native requestAnimationFrame callback
                                     */
    var inAnimationFrameRunner = false;
    var animationFrameRunner = function () {
        animFrameRequested = false;
        CURRENT_QUEUE = NEXT_QUEUE;
        NEXT_QUEUE = [];
        inAnimationFrameRunner = true;
        while (CURRENT_QUEUE.length > 0) {
            CURRENT_QUEUE.sort(AnimationFrameQueueItem.sort);
            var top_1 = CURRENT_QUEUE.shift();
            top_1.execute();
        }
        inAnimationFrameRunner = false;
    };
    scheduleAtNextAnimationFrame = function (runner, priority) {
        if (priority === void 0) {priority = 0;}
        var item = new AnimationFrameQueueItem(runner, priority);
        NEXT_QUEUE.push(item);
        if (!animFrameRequested) {
            animFrameRequested = true;
            doRequestAnimationFrame(animationFrameRunner);
        }
        return item;
    };
    runAtThisOrScheduleAtNextAnimationFrame = function (runner, priority) {
        if (inAnimationFrameRunner) {
            var item = new AnimationFrameQueueItem(runner, priority);
            CURRENT_QUEUE.push(item);
            return item;
        } else
        {
            return scheduleAtNextAnimationFrame(runner, priority);
        }
    };
})();
var MINIMUM_TIME_MS = 16;
var DEFAULT_EVENT_MERGER = function (lastEvent, currentEvent) {
    return currentEvent;
};
var TimeoutThrottledDomListener = /** @class */function (_super) {
    __extends(TimeoutThrottledDomListener, _super);
    function TimeoutThrottledDomListener(node, type, handler, eventMerger, minimumTimeMs) {
        if (eventMerger === void 0) {eventMerger = DEFAULT_EVENT_MERGER;}
        if (minimumTimeMs === void 0) {minimumTimeMs = MINIMUM_TIME_MS;}
        var _this = _super.call(this) || this;
        var lastEvent = null;
        var lastHandlerTime = 0;
        var timeout = _this._register(new __WEBPACK_IMPORTED_MODULE_4__common_async_js__["e" /* TimeoutTimer */]());
        var invokeHandler = function () {
            lastHandlerTime = new Date().getTime();
            handler(lastEvent);
            lastEvent = null;
        };
        _this._register(addDisposableListener(node, type, function (e) {
            lastEvent = eventMerger(lastEvent, e);
            var elapsedTime = new Date().getTime() - lastHandlerTime;
            if (elapsedTime >= minimumTimeMs) {
                timeout.cancel();
                invokeHandler();
            } else
            {
                timeout.setIfNotSet(invokeHandler, minimumTimeMs - elapsedTime);
            }
        }));
        return _this;
    }
    return TimeoutThrottledDomListener;
}(__WEBPACK_IMPORTED_MODULE_7__common_lifecycle_js__["a" /* Disposable */]);
function addDisposableThrottledListener(node, type, handler, eventMerger, minimumTimeMs) {
    return new TimeoutThrottledDomListener(node, type, handler, eventMerger, minimumTimeMs);
}
function getComputedStyle(el) {
    return document.defaultView.getComputedStyle(el, null);
}
var SizeUtils = /** @class */function () {
    function SizeUtils() {
    }
    // Adapted from WinJS
    // Converts a CSS positioning string for the specified element to pixels.
    SizeUtils.convertToPixels = function (element, value) {
        return parseFloat(value) || 0;
    };
    SizeUtils.getDimension = function (element, cssPropertyName, jsPropertyName) {
        var computedStyle = getComputedStyle(element);
        var value = '0';
        if (computedStyle) {
            if (computedStyle.getPropertyValue) {
                value = computedStyle.getPropertyValue(cssPropertyName);
            } else
            {
                // IE8
                value = computedStyle.getAttribute(jsPropertyName);
            }
        }
        return SizeUtils.convertToPixels(element, value);
    };
    SizeUtils.getBorderLeftWidth = function (element) {
        return SizeUtils.getDimension(element, 'border-left-width', 'borderLeftWidth');
    };
    SizeUtils.getBorderRightWidth = function (element) {
        return SizeUtils.getDimension(element, 'border-right-width', 'borderRightWidth');
    };
    SizeUtils.getBorderTopWidth = function (element) {
        return SizeUtils.getDimension(element, 'border-top-width', 'borderTopWidth');
    };
    SizeUtils.getBorderBottomWidth = function (element) {
        return SizeUtils.getDimension(element, 'border-bottom-width', 'borderBottomWidth');
    };
    SizeUtils.getPaddingLeft = function (element) {
        return SizeUtils.getDimension(element, 'padding-left', 'paddingLeft');
    };
    SizeUtils.getPaddingRight = function (element) {
        return SizeUtils.getDimension(element, 'padding-right', 'paddingRight');
    };
    SizeUtils.getPaddingTop = function (element) {
        return SizeUtils.getDimension(element, 'padding-top', 'paddingTop');
    };
    SizeUtils.getPaddingBottom = function (element) {
        return SizeUtils.getDimension(element, 'padding-bottom', 'paddingBottom');
    };
    SizeUtils.getMarginLeft = function (element) {
        return SizeUtils.getDimension(element, 'margin-left', 'marginLeft');
    };
    SizeUtils.getMarginTop = function (element) {
        return SizeUtils.getDimension(element, 'margin-top', 'marginTop');
    };
    SizeUtils.getMarginRight = function (element) {
        return SizeUtils.getDimension(element, 'margin-right', 'marginRight');
    };
    SizeUtils.getMarginBottom = function (element) {
        return SizeUtils.getDimension(element, 'margin-bottom', 'marginBottom');
    };
    return SizeUtils;
}();
// ----------------------------------------------------------------------------------------
// Position & Dimension
var Dimension = /** @class */function () {
    function Dimension(width, height) {
        this.width = width;
        this.height = height;
    }
    return Dimension;
}();

function getTopLeftOffset(element) {
    // Adapted from WinJS.Utilities.getPosition
    // and added borders to the mix
    var offsetParent = element.offsetParent,top = element.offsetTop,left = element.offsetLeft;
    while ((element = element.parentNode) !== null && element !== document.body && element !== document.documentElement) {
        top -= element.scrollTop;
        var c = getComputedStyle(element);
        if (c) {
            left -= c.direction !== 'rtl' ? element.scrollLeft : -element.scrollLeft;
        }
        if (element === offsetParent) {
            left += SizeUtils.getBorderLeftWidth(element);
            top += SizeUtils.getBorderTopWidth(element);
            top += element.offsetTop;
            left += element.offsetLeft;
            offsetParent = element.offsetParent;
        }
    }
    return {
        left: left,
        top: top };

}
/**
   * Returns the position of a dom node relative to the entire page.
   */
function getDomNodePagePosition(domNode) {
    var bb = domNode.getBoundingClientRect();
    return {
        left: bb.left + StandardWindow.scrollX,
        top: bb.top + StandardWindow.scrollY,
        width: bb.width,
        height: bb.height };

}
var StandardWindow = new ( /** @class */function () {
    function class_3() {
    }
    Object.defineProperty(class_3.prototype, "scrollX", {
        get: function () {
            if (typeof window.scrollX === 'number') {
                // modern browsers
                return window.scrollX;
            } else
            {
                return document.body.scrollLeft + document.documentElement.scrollLeft;
            }
        },
        enumerable: true,
        configurable: true });

    Object.defineProperty(class_3.prototype, "scrollY", {
        get: function () {
            if (typeof window.scrollY === 'number') {
                // modern browsers
                return window.scrollY;
            } else
            {
                return document.body.scrollTop + document.documentElement.scrollTop;
            }
        },
        enumerable: true,
        configurable: true });

    return class_3;
}())();
// Adapted from WinJS
// Gets the width of the element, including margins.
function getTotalWidth(element) {
    var margin = SizeUtils.getMarginLeft(element) + SizeUtils.getMarginRight(element);
    return element.offsetWidth + margin;
}
function getContentWidth(element) {
    var border = SizeUtils.getBorderLeftWidth(element) + SizeUtils.getBorderRightWidth(element);
    var padding = SizeUtils.getPaddingLeft(element) + SizeUtils.getPaddingRight(element);
    return element.offsetWidth - border - padding;
}
// Adapted from WinJS
// Gets the height of the content of the specified element. The content height does not include borders or padding.
function getContentHeight(element) {
    var border = SizeUtils.getBorderTopWidth(element) + SizeUtils.getBorderBottomWidth(element);
    var padding = SizeUtils.getPaddingTop(element) + SizeUtils.getPaddingBottom(element);
    return element.offsetHeight - border - padding;
}
// Adapted from WinJS
// Gets the height of the element, including its margins.
function getTotalHeight(element) {
    var margin = SizeUtils.getMarginTop(element) + SizeUtils.getMarginBottom(element);
    return element.offsetHeight + margin;
}
// ----------------------------------------------------------------------------------------
function isAncestor(testChild, testAncestor) {
    while (testChild) {
        if (testChild === testAncestor) {
            return true;
        }
        testChild = testChild.parentNode;
    }
    return false;
}
function findParentWithClass(node, clazz, stopAtClazzOrNode) {
    while (node) {
        if (hasClass(node, clazz)) {
            return node;
        }
        if (stopAtClazzOrNode) {
            if (typeof stopAtClazzOrNode === 'string') {
                if (hasClass(node, stopAtClazzOrNode)) {
                    return null;
                }
            } else
            {
                if (node === stopAtClazzOrNode) {
                    return null;
                }
            }
        }
        node = node.parentNode;
    }
    return null;
}
function createStyleSheet(container) {
    if (container === void 0) {container = document.getElementsByTagName('head')[0];}
    var style = document.createElement('style');
    style.type = 'text/css';
    style.media = 'screen';
    container.appendChild(style);
    return style;
}
var _sharedStyleSheet = null;
function getSharedStyleSheet() {
    if (!_sharedStyleSheet) {
        _sharedStyleSheet = createStyleSheet();
    }
    return _sharedStyleSheet;
}
function getDynamicStyleSheetRules(style) {
    if (style && style.sheet && style.sheet.rules) {
        // Chrome, IE
        return style.sheet.rules;
    }
    if (style && style.sheet && style.sheet.cssRules) {
        // FF
        return style.sheet.cssRules;
    }
    return [];
}
function createCSSRule(selector, cssText, style) {
    if (style === void 0) {style = getSharedStyleSheet();}
    if (!style || !cssText) {
        return;
    }
    style.sheet.insertRule(selector + '{' + cssText + '}', 0);
}
function removeCSSRulesContainingSelector(ruleName, style) {
    if (style === void 0) {style = getSharedStyleSheet();}
    if (!style) {
        return;
    }
    var rules = getDynamicStyleSheetRules(style);
    var toDelete = [];
    for (var i = 0; i < rules.length; i++) {
        var rule = rules[i];
        if (rule.selectorText.indexOf(ruleName) !== -1) {
            toDelete.push(i);
        }
    }
    for (var i = toDelete.length - 1; i >= 0; i--) {
        style.sheet.deleteRule(toDelete[i]);
    }
}
function isHTMLElement(o) {
    if (typeof HTMLElement === 'object') {
        return o instanceof HTMLElement;
    }
    return o && typeof o === 'object' && o.nodeType === 1 && typeof o.nodeName === 'string';
}
var EventType = {
    // Mouse
    CLICK: 'click',
    DBLCLICK: 'dblclick',
    MOUSE_UP: 'mouseup',
    MOUSE_DOWN: 'mousedown',
    MOUSE_OVER: 'mouseover',
    MOUSE_MOVE: 'mousemove',
    MOUSE_OUT: 'mouseout',
    MOUSE_ENTER: 'mouseenter',
    MOUSE_LEAVE: 'mouseleave',
    CONTEXT_MENU: 'contextmenu',
    WHEEL: 'wheel',
    // Keyboard
    KEY_DOWN: 'keydown',
    KEY_PRESS: 'keypress',
    KEY_UP: 'keyup',
    // HTML Document
    LOAD: 'load',
    UNLOAD: 'unload',
    ABORT: 'abort',
    ERROR: 'error',
    RESIZE: 'resize',
    SCROLL: 'scroll',
    // Form
    SELECT: 'select',
    CHANGE: 'change',
    SUBMIT: 'submit',
    RESET: 'reset',
    FOCUS: 'focus',
    FOCUS_IN: 'focusin',
    FOCUS_OUT: 'focusout',
    BLUR: 'blur',
    INPUT: 'input',
    // Local Storage
    STORAGE: 'storage',
    // Drag
    DRAG_START: 'dragstart',
    DRAG: 'drag',
    DRAG_ENTER: 'dragenter',
    DRAG_LEAVE: 'dragleave',
    DRAG_OVER: 'dragover',
    DROP: 'drop',
    DRAG_END: 'dragend',
    // Animation
    ANIMATION_START: __WEBPACK_IMPORTED_MODULE_0__browser_js__["m" /* isWebKit */] ? 'webkitAnimationStart' : 'animationstart',
    ANIMATION_END: __WEBPACK_IMPORTED_MODULE_0__browser_js__["m" /* isWebKit */] ? 'webkitAnimationEnd' : 'animationend',
    ANIMATION_ITERATION: __WEBPACK_IMPORTED_MODULE_0__browser_js__["m" /* isWebKit */] ? 'webkitAnimationIteration' : 'animationiteration' };

var EventHelper = {
    stop: function (e, cancelBubble) {
        if (e.preventDefault) {
            e.preventDefault();
        } else
        {
            // IE8
            e.returnValue = false;
        }
        if (cancelBubble) {
            if (e.stopPropagation) {
                e.stopPropagation();
            } else
            {
                // IE8
                e.cancelBubble = true;
            }
        }
    } };

function saveParentsScrollTop(node) {
    var r = [];
    for (var i = 0; node && node.nodeType === node.ELEMENT_NODE; i++) {
        r[i] = node.scrollTop;
        node = node.parentNode;
    }
    return r;
}
function restoreParentsScrollTop(node, state) {
    for (var i = 0; node && node.nodeType === node.ELEMENT_NODE; i++) {
        if (node.scrollTop !== state[i]) {
            node.scrollTop = state[i];
        }
        node = node.parentNode;
    }
}
var FocusTracker = /** @class */function () {
    function FocusTracker(element) {
        var _this = this;
        this._onDidFocus = new __WEBPACK_IMPORTED_MODULE_6__common_event_js__["a" /* Emitter */]();
        this.onDidFocus = this._onDidFocus.event;
        this._onDidBlur = new __WEBPACK_IMPORTED_MODULE_6__common_event_js__["a" /* Emitter */]();
        this.onDidBlur = this._onDidBlur.event;
        this.disposables = [];
        var hasFocus = isAncestor(document.activeElement, element);
        var loosingFocus = false;
        var onFocus = function () {
            loosingFocus = false;
            if (!hasFocus) {
                hasFocus = true;
                _this._onDidFocus.fire();
            }
        };
        var onBlur = function () {
            if (hasFocus) {
                loosingFocus = true;
                window.setTimeout(function () {
                    if (loosingFocus) {
                        loosingFocus = false;
                        hasFocus = false;
                        _this._onDidBlur.fire();
                    }
                }, 0);
            }
        };
        Object(__WEBPACK_IMPORTED_MODULE_1__event_js__["a" /* domEvent */])(element, EventType.FOCUS, true)(onFocus, null, this.disposables);
        Object(__WEBPACK_IMPORTED_MODULE_1__event_js__["a" /* domEvent */])(element, EventType.BLUR, true)(onBlur, null, this.disposables);
    }
    FocusTracker.prototype.dispose = function () {
        this.disposables = Object(__WEBPACK_IMPORTED_MODULE_7__common_lifecycle_js__["d" /* dispose */])(this.disposables);
        this._onDidFocus.dispose();
        this._onDidBlur.dispose();
    };
    return FocusTracker;
}();
function trackFocus(element) {
    return new FocusTracker(element);
}
function append(parent) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    children.forEach(function (child) {return parent.appendChild(child);});
    return children[children.length - 1];
}
var SELECTOR_REGEX = /([\w\-]+)?(#([\w\-]+))?((.([\w\-]+))*)/;
function $(description, attrs) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var match = SELECTOR_REGEX.exec(description);
    if (!match) {
        throw new Error('Bad use of emmet');
    }
    var result = document.createElement(match[1] || 'div');
    if (match[3]) {
        result.id = match[3];
    }
    if (match[4]) {
        result.className = match[4].replace(/\./g, ' ').trim();
    }
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (name) {
        var value = attrs[name];
        if (/^on\w+$/.test(name)) {
            result[name] = value;
        } else
        if (name === 'selected') {
            if (value) {
                result.setAttribute(name, 'true');
            }
        } else
        {
            result.setAttribute(name, value);
        }
    });
    Object(__WEBPACK_IMPORTED_MODULE_9__common_arrays_js__["d" /* coalesce */])(children).
    forEach(function (child) {
        if (child instanceof Node) {
            result.appendChild(child);
        } else
        {
            result.appendChild(document.createTextNode(child));
        }
    });
    return result;
}
function show() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    for (var _a = 0, elements_1 = elements; _a < elements_1.length; _a++) {
        var element = elements_1[_a];
        element.style.display = '';
        element.removeAttribute('aria-hidden');
    }
}
function hide() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    for (var _a = 0, elements_2 = elements; _a < elements_2.length; _a++) {
        var element = elements_2[_a];
        element.style.display = 'none';
        element.setAttribute('aria-hidden', 'true');
    }
}
function findParentWithAttribute(node, attribute) {
    while (node) {
        if (node instanceof HTMLElement && node.hasAttribute(attribute)) {
            return node;
        }
        node = node.parentNode;
    }
    return null;
}
function removeTabIndexAndUpdateFocus(node) {
    if (!node || !node.hasAttribute('tabIndex')) {
        return;
    }
    // If we are the currently focused element and tabIndex is removed,
    // standard DOM behavior is to move focus to the <body> element. We
    // typically never want that, rather put focus to the closest element
    // in the hierarchy of the parent DOM nodes.
    if (document.activeElement === node) {
        var parentFocusable = findParentWithAttribute(node.parentElement, 'tabIndex');
        if (parentFocusable) {
            parentFocusable.focus();
        }
    }
    node.removeAttribute('tabindex');
}
function getElementsByTagName(tag) {
    return Array.prototype.slice.call(document.getElementsByTagName(tag), 0);
}
/**
   * Find a value usable for a dom node size such that the likelihood that it would be
   * displayed with constant screen pixels size is as high as possible.
   *
   * e.g. We would desire for the cursors to be 2px (CSS px) wide. Under a devicePixelRatio
   * of 1.25, the cursor will be 2.5 screen pixels wide. Depending on how the dom node aligns/"snaps"
   * with the screen pixels, it will sometimes be rendered with 2 screen pixels, and sometimes with 3 screen pixels.
   */
function computeScreenAwareSize(cssPx) {
    var screenPx = window.devicePixelRatio * cssPx;
    return Math.max(1, Math.floor(screenPx)) / window.devicePixelRatio;
}
/**
   * See https://github.com/Microsoft/monaco-editor/issues/601
   * To protect against malicious code in the linked site, particularly phishing attempts,
   * the window.opener should be set to null to prevent the linked site from having access
   * to change the location of the current page.
   * See https://mathiasbynens.github.io/rel-noopener/
   */
function windowOpenNoOpener(url) {
    if (__WEBPACK_IMPORTED_MODULE_8__common_platform_js__["e" /* isNative */] || __WEBPACK_IMPORTED_MODULE_0__browser_js__["h" /* isEdgeWebView */]) {
        // In VSCode, window.open() always returns null...
        // The same is true for a WebView (see https://github.com/Microsoft/monaco-editor/issues/628)
        window.open(url);
    } else
    {
        var newTab = window.open();
        if (newTab) {
            newTab.opener = null;
            newTab.location.href = url;
        }
    }
}
function animate(fn) {
    var step = function () {
        fn();
        stepDisposable = scheduleAtNextAnimationFrame(step);
    };
    var stepDisposable = scheduleAtNextAnimationFrame(step);
    return Object(__WEBPACK_IMPORTED_MODULE_7__common_lifecycle_js__["f" /* toDisposable */])(function () {return stepDisposable.dispose();});
}

/***/ }),

/***/ 3487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
                                                                                                  * A position in the editor.
                                                                                                  */
var Position = /** @class */function () {
    function Position(lineNumber, column) {
        this.lineNumber = lineNumber;
        this.column = column;
    }
    /**
       * Create a new postion from this position.
       *
       * @param newLineNumber new line number
       * @param newColumn new column
       */
    Position.prototype.with = function (newLineNumber, newColumn) {
        if (newLineNumber === void 0) {newLineNumber = this.lineNumber;}
        if (newColumn === void 0) {newColumn = this.column;}
        if (newLineNumber === this.lineNumber && newColumn === this.column) {
            return this;
        } else
        {
            return new Position(newLineNumber, newColumn);
        }
    };
    /**
        * Derive a new position from this position.
        *
        * @param deltaLineNumber line number delta
        * @param deltaColumn column delta
        */
    Position.prototype.delta = function (deltaLineNumber, deltaColumn) {
        if (deltaLineNumber === void 0) {deltaLineNumber = 0;}
        if (deltaColumn === void 0) {deltaColumn = 0;}
        return this.with(this.lineNumber + deltaLineNumber, this.column + deltaColumn);
    };
    /**
        * Test if this position equals other position
        */
    Position.prototype.equals = function (other) {
        return Position.equals(this, other);
    };
    /**
        * Test if position `a` equals position `b`
        */
    Position.equals = function (a, b) {
        if (!a && !b) {
            return true;
        }
        return !!a &&
        !!b &&
        a.lineNumber === b.lineNumber &&
        a.column === b.column;
    };
    /**
        * Test if this position is before other position.
        * If the two positions are equal, the result will be false.
        */
    Position.prototype.isBefore = function (other) {
        return Position.isBefore(this, other);
    };
    /**
        * Test if position `a` is before position `b`.
        * If the two positions are equal, the result will be false.
        */
    Position.isBefore = function (a, b) {
        if (a.lineNumber < b.lineNumber) {
            return true;
        }
        if (b.lineNumber < a.lineNumber) {
            return false;
        }
        return a.column < b.column;
    };
    /**
        * Test if this position is before other position.
        * If the two positions are equal, the result will be true.
        */
    Position.prototype.isBeforeOrEqual = function (other) {
        return Position.isBeforeOrEqual(this, other);
    };
    /**
        * Test if position `a` is before position `b`.
        * If the two positions are equal, the result will be true.
        */
    Position.isBeforeOrEqual = function (a, b) {
        if (a.lineNumber < b.lineNumber) {
            return true;
        }
        if (b.lineNumber < a.lineNumber) {
            return false;
        }
        return a.column <= b.column;
    };
    /**
        * A function that compares positions, useful for sorting
        */
    Position.compare = function (a, b) {
        var aLineNumber = a.lineNumber | 0;
        var bLineNumber = b.lineNumber | 0;
        if (aLineNumber === bLineNumber) {
            var aColumn = a.column | 0;
            var bColumn = b.column | 0;
            return aColumn - bColumn;
        }
        return aLineNumber - bLineNumber;
    };
    /**
        * Clone this position.
        */
    Position.prototype.clone = function () {
        return new Position(this.lineNumber, this.column);
    };
    /**
        * Convert to a human-readable representation.
        */
    Position.prototype.toString = function () {
        return '(' + this.lineNumber + ',' + this.column + ')';
    };
    // ---
    /**
     * Create a `Position` from an `IPosition`.
     */
    Position.lift = function (pos) {
        return new Position(pos.lineNumber, pos.column);
    };
    /**
        * Test if `obj` is an `IPosition`.
        */
    Position.isIPosition = function (obj) {
        return obj &&
        typeof obj.lineNumber === 'number' &&
        typeof obj.column === 'number';
    };
    return Position;
}();


/***/ }),

/***/ 3488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isWindows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isMacintosh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isLinux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return globals; });
/* harmony export (immutable) */ __webpack_exports__["h"] = setImmediate;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OS; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var LANGUAGE_DEFAULT = 'en';
var _isWindows = false;
var _isMacintosh = false;
var _isLinux = false;
var _isNative = false;
var _isWeb = false;
var _locale = undefined;
var _language = LANGUAGE_DEFAULT;
var _translationsConfigFile = undefined;
var isElectronRenderer = typeof process !== 'undefined' && typeof process.versions !== 'undefined' && typeof process.versions.electron !== 'undefined' && process.type === 'renderer';
// OS detection
if (typeof navigator === 'object' && !isElectronRenderer) {
    var userAgent = navigator.userAgent;
    _isWindows = userAgent.indexOf('Windows') >= 0;
    _isMacintosh = userAgent.indexOf('Macintosh') >= 0;
    _isLinux = userAgent.indexOf('Linux') >= 0;
    _isWeb = true;
    _locale = navigator.language;
    _language = _locale;
} else
if (typeof process === 'object') {
    _isWindows = process.platform === 'win32';
    _isMacintosh = process.platform === 'darwin';
    _isLinux = process.platform === 'linux';
    _locale = LANGUAGE_DEFAULT;
    _language = LANGUAGE_DEFAULT;
    var rawNlsConfig = process.env['VSCODE_NLS_CONFIG'];
    if (rawNlsConfig) {
        try {
            var nlsConfig = JSON.parse(rawNlsConfig);
            var resolved = nlsConfig.availableLanguages['*'];
            _locale = nlsConfig.locale;
            // VSCode's default language is 'en'
            _language = resolved ? resolved : LANGUAGE_DEFAULT;
            _translationsConfigFile = nlsConfig._translationsConfigFile;
        }
        catch (e) {
        }
    }
    _isNative = true;
}
var _platform = 0 /* Web */;
if (_isNative) {
    if (_isMacintosh) {
        _platform = 1 /* Mac */;
    } else
    if (_isWindows) {
        _platform = 3 /* Windows */;
    } else
    if (_isLinux) {
        _platform = 2 /* Linux */;
    }
}
var isWindows = _isWindows;
var isMacintosh = _isMacintosh;
var isLinux = _isLinux;
var isNative = _isNative;
var isWeb = _isWeb;
var _globals = typeof self === 'object' ? self : typeof global === 'object' ? global : {};
var globals = _globals;
var _setImmediate = null;
function setImmediate(callback) {
    if (_setImmediate === null) {
        if (globals.setImmediate) {
            _setImmediate = globals.setImmediate.bind(globals);
        } else
        if (typeof process !== 'undefined' && typeof process.nextTick === 'function') {
            _setImmediate = process.nextTick.bind(process);
        } else
        {
            _setImmediate = globals.setTimeout.bind(globals);
        }
    }
    return _setImmediate(callback);
}
var OS = _isMacintosh ? 2 /* Macintosh */ : _isWindows ? 1 /* Windows */ : 3 /* Linux */;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3), __webpack_require__(4)))

/***/ }),

/***/ 3491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = localize;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function _format(message, args) {
    var result;
    if (args.length === 0) {
        result = message;
    } else
    {
        result = message.replace(/\{(\d+)\}/g, function (match, rest) {
            var index = rest[0];
            return typeof args[index] !== 'undefined' ? args[index] : match;
        });
    }
    return result;
}
function localize(data, message) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return _format(message, args);
}

/***/ }),

/***/ 3493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ErrorHandler */
/* unused harmony export errorHandler */
/* harmony export (immutable) */ __webpack_exports__["e"] = onUnexpectedError;
/* harmony export (immutable) */ __webpack_exports__["f"] = onUnexpectedExternalError;
/* harmony export (immutable) */ __webpack_exports__["g"] = transformErrorForSerialization;
/* harmony export (immutable) */ __webpack_exports__["d"] = isPromiseCanceledError;
/* harmony export (immutable) */ __webpack_exports__["a"] = canceled;
/* harmony export (immutable) */ __webpack_exports__["b"] = illegalArgument;
/* harmony export (immutable) */ __webpack_exports__["c"] = illegalState;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// Avoid circular dependency on EventEmitter by implementing a subset of the interface.
var ErrorHandler = /** @class */function () {
    function ErrorHandler() {
        this.listeners = [];
        this.unexpectedErrorHandler = function (e) {
            setTimeout(function () {
                if (e.stack) {
                    throw new Error(e.message + '\n\n' + e.stack);
                }
                throw e;
            }, 0);
        };
    }
    ErrorHandler.prototype.emit = function (e) {
        this.listeners.forEach(function (listener) {
            listener(e);
        });
    };
    ErrorHandler.prototype.onUnexpectedError = function (e) {
        this.unexpectedErrorHandler(e);
        this.emit(e);
    };
    // For external errors, we don't want the listeners to be called
    ErrorHandler.prototype.onUnexpectedExternalError = function (e) {
        this.unexpectedErrorHandler(e);
    };
    return ErrorHandler;
}();

var errorHandler = new ErrorHandler();
function onUnexpectedError(e) {
    // ignore errors from cancelled promises
    if (!isPromiseCanceledError(e)) {
        errorHandler.onUnexpectedError(e);
    }
    return undefined;
}
function onUnexpectedExternalError(e) {
    // ignore errors from cancelled promises
    if (!isPromiseCanceledError(e)) {
        errorHandler.onUnexpectedExternalError(e);
    }
    return undefined;
}
function transformErrorForSerialization(error) {
    if (error instanceof Error) {
        var name_1 = error.name,message = error.message;
        var stack = error.stacktrace || error.stack;
        return {
            $isError: true,
            name: name_1,
            message: message,
            stack: stack };

    }
    // return as is
    return error;
}
var canceledName = 'Canceled';
/**
                                * Checks if the given error is a promise in canceled state
                                */
function isPromiseCanceledError(error) {
    return error instanceof Error && error.name === canceledName && error.message === canceledName;
}
/**
   * Returns an error that signals cancellation.
   */
function canceled() {
    var error = new Error(canceledName);
    error.name = error.message;
    return error;
}
function illegalArgument(name) {
    if (name) {
        return new Error("Illegal argument: " + name);
    } else
    {
        return new Error('Illegal argument');
    }
}
function illegalState(name) {
    if (name) {
        return new Error("Illegal state: " + name);
    } else
    {
        return new Error('Illegal state');
    }
}

/***/ }),

/***/ 3496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["h"] = isThenable;
/* harmony export (immutable) */ __webpack_exports__["f"] = createCancelablePromise;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Delayer; });
/* harmony export (immutable) */ __webpack_exports__["i"] = timeout;
/* harmony export (immutable) */ __webpack_exports__["g"] = disposableTimeout;
/* unused harmony export first */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TimeoutTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IntervalTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RunOnceScheduler; });
/* unused harmony export runWhenIdle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IdleValue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cancellation_js__ = __webpack_require__(3565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors_js__ = __webpack_require__(3493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lifecycle_js__ = __webpack_require__(3480);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
        { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
        function (d, b) {for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {this.constructor = d;}
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();



function isThenable(obj) {
    return obj && typeof obj.then === 'function';
}
function createCancelablePromise(callback) {
    var source = new __WEBPACK_IMPORTED_MODULE_0__cancellation_js__["b" /* CancellationTokenSource */]();
    var thenable = callback(source.token);
    var promise = new Promise(function (resolve, reject) {
        source.token.onCancellationRequested(function () {
            reject(__WEBPACK_IMPORTED_MODULE_1__errors_js__["a" /* canceled */]());
        });
        Promise.resolve(thenable).then(function (value) {
            source.dispose();
            resolve(value);
        }, function (err) {
            source.dispose();
            reject(err);
        });
    });
    return new ( /** @class */function () {
        function class_1() {
        }
        class_1.prototype.cancel = function () {
            source.cancel();
        };
        class_1.prototype.then = function (resolve, reject) {
            return promise.then(resolve, reject);
        };
        class_1.prototype.catch = function (reject) {
            return this.then(undefined, reject);
        };
        class_1.prototype.finally = function (onfinally) {
            return promise.finally(onfinally);
        };
        return class_1;
    }())();
}
/**
   * A helper to delay execution of a task that is being requested often.
   *
   * Following the throttler, now imagine the mail man wants to optimize the number of
   * trips proactively. The trip itself can be long, so he decides not to make the trip
   * as soon as a letter is submitted. Instead he waits a while, in case more
   * letters are submitted. After said waiting period, if no letters were submitted, he
   * decides to make the trip. Imagine that N more letters were submitted after the first
   * one, all within a short period of time between each other. Even though N+1
   * submissions occurred, only 1 delivery was made.
   *
   * The delayer offers this behavior via the trigger() method, into which both the task
   * to be executed and the waiting period (delay) must be passed in as arguments. Following
   * the example:
   *
   * 		const delayer = new Delayer(WAITING_PERIOD);
   * 		const letters = [];
   *
   * 		function letterReceived(l) {
   * 			letters.push(l);
   * 			delayer.trigger(() => { return makeTheTrip(); });
   * 		}
   */
var Delayer = /** @class */function () {
    function Delayer(defaultDelay) {
        this.defaultDelay = defaultDelay;
        this.timeout = null;
        this.completionPromise = null;
        this.doResolve = null;
        this.task = null;
    }
    Delayer.prototype.trigger = function (task, delay) {
        var _this = this;
        if (delay === void 0) {delay = this.defaultDelay;}
        this.task = task;
        this.cancelTimeout();
        if (!this.completionPromise) {
            this.completionPromise = new Promise(function (c, e) {
                _this.doResolve = c;
                _this.doReject = e;
            }).then(function () {
                _this.completionPromise = null;
                _this.doResolve = null;
                var task = _this.task;
                _this.task = null;
                return task();
            });
        }
        this.timeout = setTimeout(function () {
            _this.timeout = null;
            _this.doResolve(null);
        }, delay);
        return this.completionPromise;
    };
    Delayer.prototype.isTriggered = function () {
        return this.timeout !== null;
    };
    Delayer.prototype.cancel = function () {
        this.cancelTimeout();
        if (this.completionPromise) {
            this.doReject(__WEBPACK_IMPORTED_MODULE_1__errors_js__["a" /* canceled */]());
            this.completionPromise = null;
        }
    };
    Delayer.prototype.cancelTimeout = function () {
        if (this.timeout !== null) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    };
    Delayer.prototype.dispose = function () {
        this.cancelTimeout();
    };
    return Delayer;
}();

function timeout(millis, token) {
    if (!token) {
        return createCancelablePromise(function (token) {return timeout(millis, token);});
    }
    return new Promise(function (resolve, reject) {
        var handle = setTimeout(resolve, millis);
        token.onCancellationRequested(function () {
            clearTimeout(handle);
            reject(__WEBPACK_IMPORTED_MODULE_1__errors_js__["a" /* canceled */]());
        });
    });
}
function disposableTimeout(handler, timeout) {
    if (timeout === void 0) {timeout = 0;}
    var timer = setTimeout(handler, timeout);
    return Object(__WEBPACK_IMPORTED_MODULE_2__lifecycle_js__["f" /* toDisposable */])(function () {return clearTimeout(timer);});
}
function first(promiseFactories, shouldStop, defaultValue) {
    if (shouldStop === void 0) {shouldStop = function (t) {return !!t;};}
    if (defaultValue === void 0) {defaultValue = null;}
    var index = 0;
    var len = promiseFactories.length;
    var loop = function () {
        if (index >= len) {
            return Promise.resolve(defaultValue);
        }
        var factory = promiseFactories[index++];
        var promise = Promise.resolve(factory());
        return promise.then(function (result) {
            if (shouldStop(result)) {
                return Promise.resolve(result);
            }
            return loop();
        });
    };
    return loop();
}
var TimeoutTimer = /** @class */function (_super) {
    __extends(TimeoutTimer, _super);
    function TimeoutTimer(runner, timeout) {
        var _this = _super.call(this) || this;
        _this._token = -1;
        if (typeof runner === 'function' && typeof timeout === 'number') {
            _this.setIfNotSet(runner, timeout);
        }
        return _this;
    }
    TimeoutTimer.prototype.dispose = function () {
        this.cancel();
        _super.prototype.dispose.call(this);
    };
    TimeoutTimer.prototype.cancel = function () {
        if (this._token !== -1) {
            clearTimeout(this._token);
            this._token = -1;
        }
    };
    TimeoutTimer.prototype.cancelAndSet = function (runner, timeout) {
        var _this = this;
        this.cancel();
        this._token = setTimeout(function () {
            _this._token = -1;
            runner();
        }, timeout);
    };
    TimeoutTimer.prototype.setIfNotSet = function (runner, timeout) {
        var _this = this;
        if (this._token !== -1) {
            // timer is already set
            return;
        }
        this._token = setTimeout(function () {
            _this._token = -1;
            runner();
        }, timeout);
    };
    return TimeoutTimer;
}(__WEBPACK_IMPORTED_MODULE_2__lifecycle_js__["a" /* Disposable */]);

var IntervalTimer = /** @class */function (_super) {
    __extends(IntervalTimer, _super);
    function IntervalTimer() {
        var _this = _super.call(this) || this;
        _this._token = -1;
        return _this;
    }
    IntervalTimer.prototype.dispose = function () {
        this.cancel();
        _super.prototype.dispose.call(this);
    };
    IntervalTimer.prototype.cancel = function () {
        if (this._token !== -1) {
            clearInterval(this._token);
            this._token = -1;
        }
    };
    IntervalTimer.prototype.cancelAndSet = function (runner, interval) {
        this.cancel();
        this._token = setInterval(function () {
            runner();
        }, interval);
    };
    return IntervalTimer;
}(__WEBPACK_IMPORTED_MODULE_2__lifecycle_js__["a" /* Disposable */]);

var RunOnceScheduler = /** @class */function () {
    function RunOnceScheduler(runner, timeout) {
        this.timeoutToken = -1;
        this.runner = runner;
        this.timeout = timeout;
        this.timeoutHandler = this.onTimeout.bind(this);
    }
    /**
       * Dispose RunOnceScheduler
       */
    RunOnceScheduler.prototype.dispose = function () {
        this.cancel();
        this.runner = null;
    };
    /**
        * Cancel current scheduled runner (if any).
        */
    RunOnceScheduler.prototype.cancel = function () {
        if (this.isScheduled()) {
            clearTimeout(this.timeoutToken);
            this.timeoutToken = -1;
        }
    };
    /**
        * Cancel previous runner (if any) & schedule a new runner.
        */
    RunOnceScheduler.prototype.schedule = function (delay) {
        if (delay === void 0) {delay = this.timeout;}
        this.cancel();
        this.timeoutToken = setTimeout(this.timeoutHandler, delay);
    };
    /**
        * Returns true if scheduled.
        */
    RunOnceScheduler.prototype.isScheduled = function () {
        return this.timeoutToken !== -1;
    };
    RunOnceScheduler.prototype.onTimeout = function () {
        this.timeoutToken = -1;
        if (this.runner) {
            this.doRun();
        }
    };
    RunOnceScheduler.prototype.doRun = function () {
        if (this.runner) {
            this.runner();
        }
    };
    return RunOnceScheduler;
}();

/**
                              * Execute the callback the next time the browser is idle
                              */
var runWhenIdle;
(function () {
    if (typeof requestIdleCallback !== 'function' || typeof cancelIdleCallback !== 'function') {
        var dummyIdle_1 = Object.freeze({
            didTimeout: true,
            timeRemaining: function () {return 15;} });

        runWhenIdle = function (runner) {
            var handle = setTimeout(function () {return runner(dummyIdle_1);});
            var disposed = false;
            return {
                dispose: function () {
                    if (disposed) {
                        return;
                    }
                    disposed = true;
                    clearTimeout(handle);
                } };

        };
    } else
    {
        runWhenIdle = function (runner, timeout) {
            var handle = requestIdleCallback(runner, typeof timeout === 'number' ? { timeout: timeout } : undefined);
            var disposed = false;
            return {
                dispose: function () {
                    if (disposed) {
                        return;
                    }
                    disposed = true;
                    cancelIdleCallback(handle);
                } };

        };
    }
})();
/**
       * An implementation of the "idle-until-urgent"-strategy as introduced
       * here: https://philipwalton.com/articles/idle-until-urgent/
       */
var IdleValue = /** @class */function () {
    function IdleValue(executor) {
        var _this = this;
        this._didRun = false;
        this._executor = function () {
            try {
                _this._value = executor();
            }
            catch (err) {
                _this._error = err;
            } finally
            {
                _this._didRun = true;
            }
        };
        this._handle = runWhenIdle(function () {return _this._executor();});
    }
    IdleValue.prototype.dispose = function () {
        this._handle.dispose();
    };
    IdleValue.prototype.getValue = function () {
        if (!this._didRun) {
            this._handle.dispose();
            this._executor();
        }
        if (this._error) {
            throw this._error;
        }
        return this._value;
    };
    return IdleValue;
}();


/***/ }),

/***/ 3498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["h"] = isString;
/* harmony export (immutable) */ __webpack_exports__["g"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["f"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["c"] = isBoolean;
/* harmony export (immutable) */ __webpack_exports__["i"] = isUndefined;
/* harmony export (immutable) */ __webpack_exports__["j"] = isUndefinedOrNull;
/* harmony export (immutable) */ __webpack_exports__["d"] = isEmptyObject;
/* harmony export (immutable) */ __webpack_exports__["e"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["k"] = validateConstraints;
/* unused harmony export validateConstraint */
/* harmony export (immutable) */ __webpack_exports__["a"] = getAllPropertyNames;
/* harmony export (immutable) */ __webpack_exports__["l"] = withNullAsUndefined;
/* harmony export (immutable) */ __webpack_exports__["m"] = withUndefinedAsNull;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var _typeof = {
    number: 'number',
    string: 'string',
    undefined: 'undefined',
    object: 'object',
    function: 'function' };

/**
                             * @returns whether the provided parameter is a JavaScript Array or not.
                             */
function isArray(array) {
    if (Array.isArray) {
        return Array.isArray(array);
    }
    if (array && typeof array.length === _typeof.number && array.constructor === Array) {
        return true;
    }
    return false;
}
/**
   * @returns whether the provided parameter is a JavaScript String or not.
   */
function isString(str) {
    if (typeof str === _typeof.string || str instanceof String) {
        return true;
    }
    return false;
}
/**
   *
   * @returns whether the provided parameter is of type `object` but **not**
   *	`null`, an `array`, a `regexp`, nor a `date`.
   */
function isObject(obj) {
    // The method can't do a type cast since there are type (like strings) which
    // are subclasses of any put not positvely matched by the function. Hence type
    // narrowing results in wrong results.
    return typeof obj === _typeof.object &&
    obj !== null &&
    !Array.isArray(obj) &&
    !(obj instanceof RegExp) &&
    !(obj instanceof Date);
}
/**
   * In **contrast** to just checking `typeof` this will return `false` for `NaN`.
   * @returns whether the provided parameter is a JavaScript Number or not.
   */
function isNumber(obj) {
    if ((typeof obj === _typeof.number || obj instanceof Number) && !isNaN(obj)) {
        return true;
    }
    return false;
}
/**
   * @returns whether the provided parameter is a JavaScript Boolean or not.
   */
function isBoolean(obj) {
    return obj === true || obj === false;
}
/**
   * @returns whether the provided parameter is undefined.
   */
function isUndefined(obj) {
    return typeof obj === _typeof.undefined;
}
/**
   * @returns whether the provided parameter is undefined or null.
   */
function isUndefinedOrNull(obj) {
    return isUndefined(obj) || obj === null;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
                                                       * @returns whether the provided parameter is an empty JavaScript Object or not.
                                                       */
function isEmptyObject(obj) {
    if (!isObject(obj)) {
        return false;
    }
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
/**
   * @returns whether the provided parameter is a JavaScript Function or not.
   */
function isFunction(obj) {
    return typeof obj === _typeof.function;
}
function validateConstraints(args, constraints) {
    var len = Math.min(args.length, constraints.length);
    for (var i = 0; i < len; i++) {
        validateConstraint(args[i], constraints[i]);
    }
}
function validateConstraint(arg, constraint) {
    if (isString(constraint)) {
        if (typeof arg !== constraint) {
            throw new Error("argument does not match constraint: typeof " + constraint);
        }
    } else
    if (isFunction(constraint)) {
        try {
            if (arg instanceof constraint) {
                return;
            }
        }
        catch (_a) {
            // ignore
        }
        if (!isUndefinedOrNull(arg) && arg.constructor === constraint) {
            return;
        }
        if (constraint.length === 1 && constraint.call(undefined, arg) === true) {
            return;
        }
        throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true");
    }
}
function getAllPropertyNames(obj) {
    var res = [];
    var proto = Object.getPrototypeOf(obj);
    while (Object.prototype !== proto) {
        res = res.concat(Object.getOwnPropertyNames(proto));
        proto = Object.getPrototypeOf(proto);
    }
    return res;
}
/**
   * Converts null to undefined, passes all other values through.
   */
function withNullAsUndefined(x) {
    return x === null ? undefined : x;
}
/**
   * Converts undefined to null, passes all other values through.
   */
function withUndefinedAsNull(x) {
    return typeof x === 'undefined' ? null : x;
}

/***/ }),

/***/ 3502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["o"] = tail;
/* harmony export (immutable) */ __webpack_exports__["p"] = tail2;
/* harmony export (immutable) */ __webpack_exports__["g"] = equals;
/* harmony export (immutable) */ __webpack_exports__["c"] = binarySearch;
/* harmony export (immutable) */ __webpack_exports__["h"] = findFirstInSorted;
/* harmony export (immutable) */ __webpack_exports__["m"] = mergeSort;
/* unused harmony export groupBy */
/* harmony export (immutable) */ __webpack_exports__["d"] = coalesce;
/* harmony export (immutable) */ __webpack_exports__["k"] = isFalsyOrEmpty;
/* harmony export (immutable) */ __webpack_exports__["l"] = isNonEmptyArray;
/* harmony export (immutable) */ __webpack_exports__["e"] = distinct;
/* harmony export (immutable) */ __webpack_exports__["f"] = distinctES6;
/* harmony export (immutable) */ __webpack_exports__["j"] = firstIndex;
/* harmony export (immutable) */ __webpack_exports__["i"] = first;
/* unused harmony export flatten */
/* harmony export (immutable) */ __webpack_exports__["n"] = range;
/* harmony export (immutable) */ __webpack_exports__["a"] = arrayInsert;
/* unused harmony export pushToStart */
/* unused harmony export pushToEnd */
/* harmony export (immutable) */ __webpack_exports__["b"] = asArray;
/**
 * Returns the last element of an array.
 * @param array The array.
 * @param n Which element from the end (default is zero).
 */
function tail(array, n) {
    if (n === void 0) {n = 0;}
    return array[array.length - (1 + n)];
}
function tail2(arr) {
    if (arr.length === 0) {
        throw new Error('Invalid tail call');
    }
    return [arr.slice(0, arr.length - 1), arr[arr.length - 1]];
}
function equals(one, other, itemEquals) {
    if (itemEquals === void 0) {itemEquals = function (a, b) {return a === b;};}
    if (one === other) {
        return true;
    }
    if (!one || !other) {
        return false;
    }
    if (one.length !== other.length) {
        return false;
    }
    for (var i = 0, len = one.length; i < len; i++) {
        if (!itemEquals(one[i], other[i])) {
            return false;
        }
    }
    return true;
}
function binarySearch(array, key, comparator) {
    var low = 0,high = array.length - 1;
    while (low <= high) {
        var mid = (low + high) / 2 | 0;
        var comp = comparator(array[mid], key);
        if (comp < 0) {
            low = mid + 1;
        } else
        if (comp > 0) {
            high = mid - 1;
        } else
        {
            return mid;
        }
    }
    return -(low + 1);
}
/**
   * Takes a sorted array and a function p. The array is sorted in such a way that all elements where p(x) is false
   * are located before all elements where p(x) is true.
   * @returns the least x for which p(x) is true or array.length if no element fullfills the given function.
   */
function findFirstInSorted(array, p) {
    var low = 0,high = array.length;
    if (high === 0) {
        return 0; // no children
    }
    while (low < high) {
        var mid = Math.floor((low + high) / 2);
        if (p(array[mid])) {
            high = mid;
        } else
        {
            low = mid + 1;
        }
    }
    return low;
}
/**
   * Like `Array#sort` but always stable. Usually runs a little slower `than Array#sort`
   * so only use this when actually needing stable sort.
   */
function mergeSort(data, compare) {
    _sort(data, compare, 0, data.length - 1, []);
    return data;
}
function _merge(a, compare, lo, mid, hi, aux) {
    var leftIdx = lo,rightIdx = mid + 1;
    for (var i = lo; i <= hi; i++) {
        aux[i] = a[i];
    }
    for (var i = lo; i <= hi; i++) {
        if (leftIdx > mid) {
            // left side consumed
            a[i] = aux[rightIdx++];
        } else
        if (rightIdx > hi) {
            // right side consumed
            a[i] = aux[leftIdx++];
        } else
        if (compare(aux[rightIdx], aux[leftIdx]) < 0) {
            // right element is less -> comes first
            a[i] = aux[rightIdx++];
        } else
        {
            // left element comes first (less or equal)
            a[i] = aux[leftIdx++];
        }
    }
}
function _sort(a, compare, lo, hi, aux) {
    if (hi <= lo) {
        return;
    }
    var mid = lo + (hi - lo) / 2 | 0;
    _sort(a, compare, lo, mid, aux);
    _sort(a, compare, mid + 1, hi, aux);
    if (compare(a[mid], a[mid + 1]) <= 0) {
        // left and right are sorted and if the last-left element is less
        // or equals than the first-right element there is nothing else
        // to do
        return;
    }
    _merge(a, compare, lo, mid, hi, aux);
}
function groupBy(data, compare) {
    var result = [];
    var currentGroup = undefined;
    for (var _i = 0, _a = mergeSort(data.slice(0), compare); _i < _a.length; _i++) {
        var element = _a[_i];
        if (!currentGroup || compare(currentGroup[0], element) !== 0) {
            currentGroup = [element];
            result.push(currentGroup);
        } else
        {
            currentGroup.push(element);
        }
    }
    return result;
}
/**
   * @returns a new array with all falsy values removed. The original array IS NOT modified.
   */
function coalesce(array) {
    if (!array) {
        return array;
    }
    return array.filter(function (e) {return !!e;});
}
/**
   * @returns false if the provided object is an array and not empty.
   */
function isFalsyOrEmpty(obj) {
    return !Array.isArray(obj) || obj.length === 0;
}
/**
   * @returns True if the provided object is an array and has at least one element.
   */
function isNonEmptyArray(obj) {
    return Array.isArray(obj) && obj.length > 0;
}
/**
   * Removes duplicates from the given array. The optional keyFn allows to specify
   * how elements are checked for equalness by returning a unique string for each.
   */
function distinct(array, keyFn) {
    if (!keyFn) {
        return array.filter(function (element, position) {
            return array.indexOf(element) === position;
        });
    }
    var seen = Object.create(null);
    return array.filter(function (elem) {
        var key = keyFn(elem);
        if (seen[key]) {
            return false;
        }
        seen[key] = true;
        return true;
    });
}
function distinctES6(array) {
    var seen = new Set();
    return array.filter(function (element) {
        if (seen.has(element)) {
            return false;
        }
        seen.add(element);
        return true;
    });
}
function firstIndex(array, fn) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (fn(element)) {
            return i;
        }
    }
    return -1;
}
function first(array, fn, notFoundValue) {
    if (notFoundValue === void 0) {notFoundValue = undefined;}
    var index = firstIndex(array, fn);
    return index < 0 ? notFoundValue : array[index];
}
function flatten(arr) {
    var _a;
    return (_a = []).concat.apply(_a, arr);
}
function range(arg, to) {
    var from = typeof to === 'number' ? arg : 0;
    if (typeof to === 'number') {
        from = arg;
    } else
    {
        from = 0;
        to = arg;
    }
    var result = [];
    if (from <= to) {
        for (var i = from; i < to; i++) {
            result.push(i);
        }
    } else
    {
        for (var i = from; i > to; i--) {
            result.push(i);
        }
    }
    return result;
}
/**
   * Insert `insertArr` inside `target` at `insertIndex`.
   * Please don't touch unless you understand https://jsperf.com/inserting-an-array-within-an-array
   */
function arrayInsert(target, insertIndex, insertArr) {
    var before = target.slice(0, insertIndex);
    var after = target.slice(insertIndex);
    return before.concat(insertArr, after);
}
/**
   * Pushes an element to the start of the array, if found.
   */
function pushToStart(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
        arr.unshift(value);
    }
}
/**
   * Pushes an element to the end of the array, if found.
   */
function pushToEnd(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
        arr.push(value);
    }
}
function asArray(x) {
    return Array.isArray(x) ? x : [x];
}

/***/ }),

/***/ 3508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ContextKeyExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ContextKeyDefinedExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ContextKeyEqualsExpr; });
/* unused harmony export ContextKeyNotEqualsExpr */
/* unused harmony export ContextKeyNotExpr */
/* unused harmony export ContextKeyRegexExpr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextKeyAndExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RawContextKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return IContextKeyService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SET_CONTEXT_COMMAND_ID; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_common_strings_js__ = __webpack_require__(3483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instantiation_common_instantiation_js__ = __webpack_require__(3485);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
        { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
        function (d, b) {for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {this.constructor = d;}
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();


var ContextKeyExpr = /** @class */function () {
    function ContextKeyExpr() {
    }
    ContextKeyExpr.has = function (key) {
        return new ContextKeyDefinedExpr(key);
    };
    ContextKeyExpr.equals = function (key, value) {
        return new ContextKeyEqualsExpr(key, value);
    };
    ContextKeyExpr.regex = function (key, value) {
        return new ContextKeyRegexExpr(key, value);
    };
    ContextKeyExpr.not = function (key) {
        return new ContextKeyNotExpr(key);
    };
    ContextKeyExpr.and = function () {
        var expr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expr[_i] = arguments[_i];
        }
        return new ContextKeyAndExpr(expr);
    };
    ContextKeyExpr.deserialize = function (serialized, strict) {
        var _this = this;
        if (strict === void 0) {strict = false;}
        if (!serialized) {
            return undefined;
        }
        var pieces = serialized.split('&&');
        var result = new ContextKeyAndExpr(pieces.map(function (p) {return _this._deserializeOne(p, strict);}));
        return result.normalize();
    };
    ContextKeyExpr._deserializeOne = function (serializedOne, strict) {
        serializedOne = serializedOne.trim();
        if (serializedOne.indexOf('!=') >= 0) {
            var pieces = serializedOne.split('!=');
            return new ContextKeyNotEqualsExpr(pieces[0].trim(), this._deserializeValue(pieces[1], strict));
        }
        if (serializedOne.indexOf('==') >= 0) {
            var pieces = serializedOne.split('==');
            return new ContextKeyEqualsExpr(pieces[0].trim(), this._deserializeValue(pieces[1], strict));
        }
        if (serializedOne.indexOf('=~') >= 0) {
            var pieces = serializedOne.split('=~');
            return new ContextKeyRegexExpr(pieces[0].trim(), this._deserializeRegexValue(pieces[1], strict));
        }
        if (/^\!\s*/.test(serializedOne)) {
            return new ContextKeyNotExpr(serializedOne.substr(1).trim());
        }
        return new ContextKeyDefinedExpr(serializedOne);
    };
    ContextKeyExpr._deserializeValue = function (serializedValue, strict) {
        serializedValue = serializedValue.trim();
        if (serializedValue === 'true') {
            return true;
        }
        if (serializedValue === 'false') {
            return false;
        }
        var m = /^'([^']*)'$/.exec(serializedValue);
        if (m) {
            return m[1].trim();
        }
        return serializedValue;
    };
    ContextKeyExpr._deserializeRegexValue = function (serializedValue, strict) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__base_common_strings_js__["r" /* isFalsyOrWhitespace */])(serializedValue)) {
            if (strict) {
                throw new Error('missing regexp-value for =~-expression');
            } else
            {
                console.warn('missing regexp-value for =~-expression');
            }
            return null;
        }
        var start = serializedValue.indexOf('/');
        var end = serializedValue.lastIndexOf('/');
        if (start === end || start < 0 /* || to < 0 */) {
                if (strict) {
                    throw new Error("bad regexp-value '" + serializedValue + "', missing /-enclosure");
                } else
                {
                    console.warn("bad regexp-value '" + serializedValue + "', missing /-enclosure");
                }
                return null;
            }
        var value = serializedValue.slice(start + 1, end);
        var caseIgnoreFlag = serializedValue[end + 1] === 'i' ? 'i' : '';
        try {
            return new RegExp(value, caseIgnoreFlag);
        }
        catch (e) {
            if (strict) {
                throw new Error("bad regexp-value '" + serializedValue + "', parse error: " + e);
            } else
            {
                console.warn("bad regexp-value '" + serializedValue + "', parse error: " + e);
            }
            return null;
        }
    };
    return ContextKeyExpr;
}();

function cmp(a, b) {
    var aType = a.getType();
    var bType = b.getType();
    if (aType !== bType) {
        return aType - bType;
    }
    switch (aType) {
        case 1 /* Defined */:
            return a.cmp(b);
        case 2 /* Not */:
            return a.cmp(b);
        case 3 /* Equals */:
            return a.cmp(b);
        case 4 /* NotEquals */:
            return a.cmp(b);
        case 6 /* Regex */:
            return a.cmp(b);
        default:
            throw new Error('Unknown ContextKeyExpr!');}

}
var ContextKeyDefinedExpr = /** @class */function () {
    function ContextKeyDefinedExpr(key) {
        this.key = key;
    }
    ContextKeyDefinedExpr.prototype.getType = function () {
        return 1 /* Defined */;
    };
    ContextKeyDefinedExpr.prototype.cmp = function (other) {
        if (this.key < other.key) {
            return -1;
        }
        if (this.key > other.key) {
            return 1;
        }
        return 0;
    };
    ContextKeyDefinedExpr.prototype.equals = function (other) {
        if (other instanceof ContextKeyDefinedExpr) {
            return this.key === other.key;
        }
        return false;
    };
    ContextKeyDefinedExpr.prototype.evaluate = function (context) {
        return !!context.getValue(this.key);
    };
    ContextKeyDefinedExpr.prototype.normalize = function () {
        return this;
    };
    ContextKeyDefinedExpr.prototype.keys = function () {
        return [this.key];
    };
    return ContextKeyDefinedExpr;
}();

var ContextKeyEqualsExpr = /** @class */function () {
    function ContextKeyEqualsExpr(key, value) {
        this.key = key;
        this.value = value;
    }
    ContextKeyEqualsExpr.prototype.getType = function () {
        return 3 /* Equals */;
    };
    ContextKeyEqualsExpr.prototype.cmp = function (other) {
        if (this.key < other.key) {
            return -1;
        }
        if (this.key > other.key) {
            return 1;
        }
        if (this.value < other.value) {
            return -1;
        }
        if (this.value > other.value) {
            return 1;
        }
        return 0;
    };
    ContextKeyEqualsExpr.prototype.equals = function (other) {
        if (other instanceof ContextKeyEqualsExpr) {
            return this.key === other.key && this.value === other.value;
        }
        return false;
    };
    ContextKeyEqualsExpr.prototype.evaluate = function (context) {
        /* tslint:disable:triple-equals */
        // Intentional ==
        return context.getValue(this.key) == this.value;
        /* tslint:enable:triple-equals */
    };
    ContextKeyEqualsExpr.prototype.normalize = function () {
        if (typeof this.value === 'boolean') {
            if (this.value) {
                return new ContextKeyDefinedExpr(this.key);
            }
            return new ContextKeyNotExpr(this.key);
        }
        return this;
    };
    ContextKeyEqualsExpr.prototype.keys = function () {
        return [this.key];
    };
    return ContextKeyEqualsExpr;
}();

var ContextKeyNotEqualsExpr = /** @class */function () {
    function ContextKeyNotEqualsExpr(key, value) {
        this.key = key;
        this.value = value;
    }
    ContextKeyNotEqualsExpr.prototype.getType = function () {
        return 4 /* NotEquals */;
    };
    ContextKeyNotEqualsExpr.prototype.cmp = function (other) {
        if (this.key < other.key) {
            return -1;
        }
        if (this.key > other.key) {
            return 1;
        }
        if (this.value < other.value) {
            return -1;
        }
        if (this.value > other.value) {
            return 1;
        }
        return 0;
    };
    ContextKeyNotEqualsExpr.prototype.equals = function (other) {
        if (other instanceof ContextKeyNotEqualsExpr) {
            return this.key === other.key && this.value === other.value;
        }
        return false;
    };
    ContextKeyNotEqualsExpr.prototype.evaluate = function (context) {
        /* tslint:disable:triple-equals */
        // Intentional !=
        return context.getValue(this.key) != this.value;
        /* tslint:enable:triple-equals */
    };
    ContextKeyNotEqualsExpr.prototype.normalize = function () {
        if (typeof this.value === 'boolean') {
            if (this.value) {
                return new ContextKeyNotExpr(this.key);
            }
            return new ContextKeyDefinedExpr(this.key);
        }
        return this;
    };
    ContextKeyNotEqualsExpr.prototype.keys = function () {
        return [this.key];
    };
    return ContextKeyNotEqualsExpr;
}();

var ContextKeyNotExpr = /** @class */function () {
    function ContextKeyNotExpr(key) {
        this.key = key;
    }
    ContextKeyNotExpr.prototype.getType = function () {
        return 2 /* Not */;
    };
    ContextKeyNotExpr.prototype.cmp = function (other) {
        if (this.key < other.key) {
            return -1;
        }
        if (this.key > other.key) {
            return 1;
        }
        return 0;
    };
    ContextKeyNotExpr.prototype.equals = function (other) {
        if (other instanceof ContextKeyNotExpr) {
            return this.key === other.key;
        }
        return false;
    };
    ContextKeyNotExpr.prototype.evaluate = function (context) {
        return !context.getValue(this.key);
    };
    ContextKeyNotExpr.prototype.normalize = function () {
        return this;
    };
    ContextKeyNotExpr.prototype.keys = function () {
        return [this.key];
    };
    return ContextKeyNotExpr;
}();

var ContextKeyRegexExpr = /** @class */function () {
    function ContextKeyRegexExpr(key, regexp) {
        this.key = key;
        this.regexp = regexp;
        //
    }
    ContextKeyRegexExpr.prototype.getType = function () {
        return 6 /* Regex */;
    };
    ContextKeyRegexExpr.prototype.cmp = function (other) {
        if (this.key < other.key) {
            return -1;
        }
        if (this.key > other.key) {
            return 1;
        }
        var thisSource = this.regexp ? this.regexp.source : '';
        var otherSource = other.regexp ? other.regexp.source : '';
        if (thisSource < otherSource) {
            return -1;
        }
        if (thisSource > otherSource) {
            return 1;
        }
        return 0;
    };
    ContextKeyRegexExpr.prototype.equals = function (other) {
        if (other instanceof ContextKeyRegexExpr) {
            var thisSource = this.regexp ? this.regexp.source : '';
            var otherSource = other.regexp ? other.regexp.source : '';
            return this.key === other.key && thisSource === otherSource;
        }
        return false;
    };
    ContextKeyRegexExpr.prototype.evaluate = function (context) {
        var value = context.getValue(this.key);
        return this.regexp ? this.regexp.test(value) : false;
    };
    ContextKeyRegexExpr.prototype.normalize = function () {
        return this;
    };
    ContextKeyRegexExpr.prototype.keys = function () {
        return [this.key];
    };
    return ContextKeyRegexExpr;
}();

var ContextKeyAndExpr = /** @class */function () {
    function ContextKeyAndExpr(expr) {
        this.expr = ContextKeyAndExpr._normalizeArr(expr);
    }
    ContextKeyAndExpr.prototype.getType = function () {
        return 5 /* And */;
    };
    ContextKeyAndExpr.prototype.equals = function (other) {
        if (other instanceof ContextKeyAndExpr) {
            if (this.expr.length !== other.expr.length) {
                return false;
            }
            for (var i = 0, len = this.expr.length; i < len; i++) {
                if (!this.expr[i].equals(other.expr[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    ContextKeyAndExpr.prototype.evaluate = function (context) {
        for (var i = 0, len = this.expr.length; i < len; i++) {
            if (!this.expr[i].evaluate(context)) {
                return false;
            }
        }
        return true;
    };
    ContextKeyAndExpr._normalizeArr = function (arr) {
        var expr = [];
        if (arr) {
            for (var i = 0, len = arr.length; i < len; i++) {
                var e = arr[i];
                if (!e) {
                    continue;
                }
                e = e.normalize();
                if (!e) {
                    continue;
                }
                if (e instanceof ContextKeyAndExpr) {
                    expr = expr.concat(e.expr);
                    continue;
                }
                expr.push(e);
            }
            expr.sort(cmp);
        }
        return expr;
    };
    ContextKeyAndExpr.prototype.normalize = function () {
        if (this.expr.length === 0) {
            return undefined;
        }
        if (this.expr.length === 1) {
            return this.expr[0];
        }
        return this;
    };
    ContextKeyAndExpr.prototype.keys = function () {
        var result = [];
        for (var _i = 0, _a = this.expr; _i < _a.length; _i++) {
            var expr = _a[_i];
            result.push.apply(result, expr.keys());
        }
        return result;
    };
    return ContextKeyAndExpr;
}();

var RawContextKey = /** @class */function (_super) {
    __extends(RawContextKey, _super);
    function RawContextKey(key, defaultValue) {
        var _this = _super.call(this, key) || this;
        _this._defaultValue = defaultValue;
        return _this;
    }
    RawContextKey.prototype.bindTo = function (target) {
        return target.createKey(this.key, this._defaultValue);
    };
    RawContextKey.prototype.getValue = function (target) {
        return target.getContextKeyValue(this.key);
    };
    RawContextKey.prototype.toNegated = function () {
        return ContextKeyExpr.not(this.key);
    };
    return RawContextKey;
}(ContextKeyDefinedExpr);

var IContextKeyService = Object(__WEBPACK_IMPORTED_MODULE_1__instantiation_common_instantiation_js__["c" /* createDecorator */])('contextKeyService');
var SET_CONTEXT_COMMAND_ID = 'setContext';

/***/ }),

/***/ 3511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Selection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__position_js__ = __webpack_require__(3487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range_js__ = __webpack_require__(3482);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
        { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
        function (d, b) {for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {this.constructor = d;}
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();


/**
                                     * A selection in the editor.
                                     * The selection is a range that has an orientation.
                                     */
var Selection = /** @class */function (_super) {
    __extends(Selection, _super);
    function Selection(selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn) {
        var _this = _super.call(this, selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn) || this;
        _this.selectionStartLineNumber = selectionStartLineNumber;
        _this.selectionStartColumn = selectionStartColumn;
        _this.positionLineNumber = positionLineNumber;
        _this.positionColumn = positionColumn;
        return _this;
    }
    /**
       * Clone this selection.
       */
    Selection.prototype.clone = function () {
        return new Selection(this.selectionStartLineNumber, this.selectionStartColumn, this.positionLineNumber, this.positionColumn);
    };
    /**
        * Transform to a human-readable representation.
        */
    Selection.prototype.toString = function () {
        return '[' + this.selectionStartLineNumber + ',' + this.selectionStartColumn + ' -> ' + this.positionLineNumber + ',' + this.positionColumn + ']';
    };
    /**
        * Test if equals other selection.
        */
    Selection.prototype.equalsSelection = function (other) {
        return Selection.selectionsEqual(this, other);
    };
    /**
        * Test if the two selections are equal.
        */
    Selection.selectionsEqual = function (a, b) {
        return a.selectionStartLineNumber === b.selectionStartLineNumber &&
        a.selectionStartColumn === b.selectionStartColumn &&
        a.positionLineNumber === b.positionLineNumber &&
        a.positionColumn === b.positionColumn;
    };
    /**
        * Get directions (LTR or RTL).
        */
    Selection.prototype.getDirection = function () {
        if (this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn) {
            return 0 /* LTR */;
        }
        return 1 /* RTL */;
    };
    /**
        * Create a new selection with a different `positionLineNumber` and `positionColumn`.
        */
    Selection.prototype.setEndPosition = function (endLineNumber, endColumn) {
        if (this.getDirection() === 0 /* LTR */) {
                return new Selection(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
            }
        return new Selection(endLineNumber, endColumn, this.startLineNumber, this.startColumn);
    };
    /**
        * Get the position at `positionLineNumber` and `positionColumn`.
        */
    Selection.prototype.getPosition = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__position_js__["a" /* Position */](this.positionLineNumber, this.positionColumn);
    };
    /**
        * Create a new selection with a different `selectionStartLineNumber` and `selectionStartColumn`.
        */
    Selection.prototype.setStartPosition = function (startLineNumber, startColumn) {
        if (this.getDirection() === 0 /* LTR */) {
                return new Selection(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
            }
        return new Selection(this.endLineNumber, this.endColumn, startLineNumber, startColumn);
    };
    // ----
    /**
     * Create a `Selection` from one or two positions
     */
    Selection.fromPositions = function (start, end) {
        if (end === void 0) {end = start;}
        return new Selection(start.lineNumber, start.column, end.lineNumber, end.column);
    };
    /**
        * Create a `Selection` from an `ISelection`.
        */
    Selection.liftSelection = function (sel) {
        return new Selection(sel.selectionStartLineNumber, sel.selectionStartColumn, sel.positionLineNumber, sel.positionColumn);
    };
    /**
        * `a` equals `b`.
        */
    Selection.selectionsArrEqual = function (a, b) {
        if (a && !b || !a && b) {
            return false;
        }
        if (!a && !b) {
            return true;
        }
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0, len = a.length; i < len; i++) {
            if (!this.selectionsEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    };
    /**
        * Test if `obj` is an `ISelection`.
        */
    Selection.isISelection = function (obj) {
        return obj &&
        typeof obj.selectionStartLineNumber === 'number' &&
        typeof obj.selectionStartColumn === 'number' &&
        typeof obj.positionLineNumber === 'number' &&
        typeof obj.positionColumn === 'number';
    };
    /**
        * Create with a direction.
        */
    Selection.createWithDirection = function (startLineNumber, startColumn, endLineNumber, endColumn, direction) {
        if (direction === 0 /* LTR */) {
                return new Selection(startLineNumber, startColumn, endLineNumber, endColumn);
            }
        return new Selection(endLineNumber, endColumn, startLineNumber, startColumn);
    };
    return Selection;
}(__WEBPACK_IMPORTED_MODULE_1__range_js__["a" /* Range */]);


/***/ }),

/***/ 3515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getZoomLevel;
/* harmony export (immutable) */ __webpack_exports__["b"] = getTimeSinceLastZoomLevelChanged;
/* harmony export (immutable) */ __webpack_exports__["o"] = onDidChangeZoomLevel;
/* harmony export (immutable) */ __webpack_exports__["a"] = getPixelRatio;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isEdgeOrIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isFirefox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isWebKit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isSafari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return isWebkitWebView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isIPad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isEdgeWebView; });
/* harmony export (immutable) */ __webpack_exports__["d"] = hasClipboardSupport;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_event_js__ = __webpack_require__(3481);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var WindowManager = /** @class */function () {
    function WindowManager() {
        // --- Zoom Level
        this._zoomLevel = 0;
        this._lastZoomLevelChangeTime = 0;
        this._onDidChangeZoomLevel = new __WEBPACK_IMPORTED_MODULE_0__common_event_js__["a" /* Emitter */]();
        this.onDidChangeZoomLevel = this._onDidChangeZoomLevel.event;
    }
    WindowManager.prototype.getZoomLevel = function () {
        return this._zoomLevel;
    };
    WindowManager.prototype.getTimeSinceLastZoomLevelChanged = function () {
        return Date.now() - this._lastZoomLevelChangeTime;
    };
    // --- Pixel Ratio
    WindowManager.prototype.getPixelRatio = function () {
        var ctx = document.createElement('canvas').getContext('2d');
        var dpr = window.devicePixelRatio || 1;
        var bsr = ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio || 1;
        return dpr / bsr;
    };
    WindowManager.INSTANCE = new WindowManager();
    return WindowManager;
}();
function getZoomLevel() {
    return WindowManager.INSTANCE.getZoomLevel();
}
/** Returns the time (in ms) since the zoom level was changed */
function getTimeSinceLastZoomLevelChanged() {
    return WindowManager.INSTANCE.getTimeSinceLastZoomLevelChanged();
}
function onDidChangeZoomLevel(callback) {
    return WindowManager.INSTANCE.onDidChangeZoomLevel(callback);
}
function getPixelRatio() {
    return WindowManager.INSTANCE.getPixelRatio();
}
var userAgent = navigator.userAgent;
var isIE = userAgent.indexOf('Trident') >= 0;
var isEdge = userAgent.indexOf('Edge/') >= 0;
var isEdgeOrIE = isIE || isEdge;
var isFirefox = userAgent.indexOf('Firefox') >= 0;
var isWebKit = userAgent.indexOf('AppleWebKit') >= 0;
var isChrome = userAgent.indexOf('Chrome') >= 0;
var isSafari = !isChrome && userAgent.indexOf('Safari') >= 0;
var isWebkitWebView = !isChrome && !isSafari && isWebKit;
var isIPad = userAgent.indexOf('iPad') >= 0;
var isEdgeWebView = isEdge && userAgent.indexOf('WebView/') >= 0;
function hasClipboardSupport() {
    if (isIE) {
        return false;
    }
    if (isEdge) {
        var index = userAgent.indexOf('Edge/');
        var version = parseInt(userAgent.substring(index + 5, userAgent.indexOf('.', index)), 10);
        if (!version || version >= 12 && version <= 16) {
            return false;
        }
    }
    return true;
}

/***/ }),

/***/ 3527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URI; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_js__ = __webpack_require__(3488);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
        { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
        function (d, b) {for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {this.constructor = d;}
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var _a;

var _schemePattern = /^\w[\w\d+.-]*$/;
var _singleSlashStart = /^\//;
var _doubleSlashStart = /^\/\//;
var _throwOnMissingSchema = true;
function _validateUri(ret, _strict) {
    // scheme, must be set
    if (!ret.scheme) {
        if (_strict || _throwOnMissingSchema) {
            throw new Error("[UriError]: Scheme is missing: {scheme: \"\", authority: \"" + ret.authority + "\", path: \"" + ret.path + "\", query: \"" + ret.query + "\", fragment: \"" + ret.fragment + "\"}");
        } else
        {
            console.warn("[UriError]: Scheme is missing: {scheme: \"\", authority: \"" + ret.authority + "\", path: \"" + ret.path + "\", query: \"" + ret.query + "\", fragment: \"" + ret.fragment + "\"}");
        }
    }
    // scheme, https://tools.ietf.org/html/rfc3986#section-3.1
    // ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
    if (ret.scheme && !_schemePattern.test(ret.scheme)) {
        throw new Error('[UriError]: Scheme contains illegal characters.');
    }
    // path, http://tools.ietf.org/html/rfc3986#section-3.3
    // If a URI contains an authority component, then the path component
    // must either be empty or begin with a slash ("/") character.  If a URI
    // does not contain an authority component, then the path cannot begin
    // with two slash characters ("//").
    if (ret.path) {
        if (ret.authority) {
            if (!_singleSlashStart.test(ret.path)) {
                throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
            }
        } else
        {
            if (_doubleSlashStart.test(ret.path)) {
                throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
            }
        }
    }
}
// for a while we allowed uris *without* schemes and this is the migration
// for them, e.g. an uri without scheme and without strict-mode warns and falls
// back to the file-scheme. that should cause the least carnage and still be a
// clear warning
function _schemeFix(scheme, _strict) {
    if (_strict || _throwOnMissingSchema) {
        return scheme || _empty;
    }
    if (!scheme) {
        console.trace('BAD uri lacks scheme, falling back to file-scheme.');
        scheme = 'file';
    }
    return scheme;
}
// implements a bit of https://tools.ietf.org/html/rfc3986#section-5
function _referenceResolution(scheme, path) {
    // the slash-character is our 'default base' as we don't
    // support constructing URIs relative to other URIs. This
    // also means that we alter and potentially break paths.
    // see https://tools.ietf.org/html/rfc3986#section-5.1.4
    switch (scheme) {
        case 'https':
        case 'http':
        case 'file':
            if (!path) {
                path = _slash;
            } else
            if (path[0] !== _slash) {
                path = _slash + path;
            }
            break;}

    return path;
}
var _empty = '';
var _slash = '/';
var _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
/**
                                                                               * Uniform Resource Identifier (URI) http://tools.ietf.org/html/rfc3986.
                                                                               * This class is a simple parser which creates the basic component parts
                                                                               * (http://tools.ietf.org/html/rfc3986#section-3) with minimal validation
                                                                               * and encoding.
                                                                               *
                                                                               *       foo://example.com:8042/over/there?name=ferret#nose
                                                                               *       \_/   \______________/\_________/ \_________/ \__/
                                                                               *        |           |            |            |        |
                                                                               *     scheme     authority       path        query   fragment
                                                                               *        |   _____________________|__
                                                                               *       / \ /                        \
                                                                               *       urn:example:animal:ferret:nose
                                                                               */
var URI = /** @class */function () {
    /**
                                     * @internal
                                     */
    function URI(schemeOrData, authority, path, query, fragment, _strict) {
        if (_strict === void 0) {_strict = false;}
        if (typeof schemeOrData === 'object') {
            this.scheme = schemeOrData.scheme || _empty;
            this.authority = schemeOrData.authority || _empty;
            this.path = schemeOrData.path || _empty;
            this.query = schemeOrData.query || _empty;
            this.fragment = schemeOrData.fragment || _empty;
            // no validation because it's this URI
            // that creates uri components.
            // _validateUri(this);
        } else
        {
            this.scheme = _schemeFix(schemeOrData, _strict);
            this.authority = authority || _empty;
            this.path = _referenceResolution(this.scheme, path || _empty);
            this.query = query || _empty;
            this.fragment = fragment || _empty;
            _validateUri(this, _strict);
        }
    }
    URI.isUri = function (thing) {
        if (thing instanceof URI) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return typeof thing.authority === 'string' &&
        typeof thing.fragment === 'string' &&
        typeof thing.path === 'string' &&
        typeof thing.query === 'string' &&
        typeof thing.scheme === 'string' &&
        typeof thing.fsPath === 'function' &&
        typeof thing.with === 'function' &&
        typeof thing.toString === 'function';
    };
    Object.defineProperty(URI.prototype, "fsPath", {
        // ---- filesystem path -----------------------
        /**
         * Returns a string representing the corresponding file system path of this URI.
         * Will handle UNC paths, normalizes windows drive letters to lower-case, and uses the
         * platform specific path separator.
         *
         * * Will *not* validate the path for invalid characters and semantics.
         * * Will *not* look at the scheme of this URI.
         * * The result shall *not* be used for display purposes but for accessing a file on disk.
         *
         *
         * The *difference* to `URI#path` is the use of the platform specific separator and the handling
         * of UNC paths. See the below sample of a file-uri with an authority (UNC path).
         *
         * ```ts
            const u = URI.parse('file://server/c$/folder/file.txt')
            u.authority === 'server'
            u.path === '/shares/c$/file.txt'
            u.fsPath === '\\server\c$\folder\file.txt'
        ```
         *
         * Using `URI#path` to read a file (using fs-apis) would not be enough because parts of the path,
         * namely the server name, would be missing. Therefore `URI#fsPath` exists - it's sugar to ease working
         * with URIs that represent files on disk (`file` scheme).
         */
        get: function () {
            // if (this.scheme !== 'file') {
            // 	console.warn(`[UriError] calling fsPath with scheme ${this.scheme}`);
            // }
            return _makeFsPath(this);
        },
        enumerable: true,
        configurable: true });

    // ---- modify to new -------------------------
    URI.prototype.with = function (change) {
        if (!change) {
            return this;
        }
        var scheme = change.scheme,authority = change.authority,path = change.path,query = change.query,fragment = change.fragment;
        if (scheme === undefined) {
            scheme = this.scheme;
        } else
        if (scheme === null) {
            scheme = _empty;
        }
        if (authority === undefined) {
            authority = this.authority;
        } else
        if (authority === null) {
            authority = _empty;
        }
        if (path === undefined) {
            path = this.path;
        } else
        if (path === null) {
            path = _empty;
        }
        if (query === undefined) {
            query = this.query;
        } else
        if (query === null) {
            query = _empty;
        }
        if (fragment === undefined) {
            fragment = this.fragment;
        } else
        if (fragment === null) {
            fragment = _empty;
        }
        if (scheme === this.scheme &&
        authority === this.authority &&
        path === this.path &&
        query === this.query &&
        fragment === this.fragment) {
            return this;
        }
        return new _URI(scheme, authority, path, query, fragment);
    };
    // ---- parse & validate ------------------------
    /**
     * Creates a new URI from a string, e.g. `http://www.msft.com/some/path`,
     * `file:///usr/home`, or `scheme:with/path`.
     *
     * @param value A string which represents an URI (see `URI#toString`).
     */
    URI.parse = function (value, _strict) {
        if (_strict === void 0) {_strict = false;}
        var match = _regexp.exec(value);
        if (!match) {
            return new _URI(_empty, _empty, _empty, _empty, _empty);
        }
        return new _URI(match[2] || _empty, decodeURIComponent(match[4] || _empty), decodeURIComponent(match[5] || _empty), decodeURIComponent(match[7] || _empty), decodeURIComponent(match[9] || _empty), _strict);
    };
    /**
        * Creates a new URI from a file system path, e.g. `c:\my\files`,
        * `/usr/home`, or `\\server\share\some\path`.
        *
        * The *difference* between `URI#parse` and `URI#file` is that the latter treats the argument
        * as path, not as stringified-uri. E.g. `URI.file(path)` is **not the same as**
        * `URI.parse('file://' + path)` because the path might contain characters that are
        * interpreted (# and ?). See the following sample:
        * ```ts
       const good = URI.file('/coding/c#/project1');
       good.scheme === 'file';
       good.path === '/coding/c#/project1';
       good.fragment === '';
       const bad = URI.parse('file://' + '/coding/c#/project1');
       bad.scheme === 'file';
       bad.path === '/coding/c'; // path is now broken
       bad.fragment === '/project1';
       ```
        *
        * @param path A file system path (see `URI#fsPath`)
        */
    URI.file = function (path) {
        var authority = _empty;
        // normalize to fwd-slashes on windows,
        // on other systems bwd-slashes are valid
        // filename character, eg /f\oo/ba\r.txt
        if (__WEBPACK_IMPORTED_MODULE_0__platform_js__["g" /* isWindows */]) {
            path = path.replace(/\\/g, _slash);
        }
        // check for authority as used in UNC shares
        // or use the path as given
        if (path[0] === _slash && path[1] === _slash) {
            var idx = path.indexOf(_slash, 2);
            if (idx === -1) {
                authority = path.substring(2);
                path = _slash;
            } else
            {
                authority = path.substring(2, idx);
                path = path.substring(idx) || _slash;
            }
        }
        return new _URI('file', authority, path, _empty, _empty);
    };
    URI.from = function (components) {
        return new _URI(components.scheme, components.authority, components.path, components.query, components.fragment);
    };
    // ---- printing/externalize ---------------------------
    /**
     * Creates a string representation for this URI. It's guaranteed that calling
     * `URI.parse` with the result of this function creates an URI which is equal
     * to this URI.
     *
     * * The result shall *not* be used for display purposes but for externalization or transport.
     * * The result will be encoded using the percentage encoding and encoding happens mostly
     * ignore the scheme-specific encoding rules.
     *
     * @param skipEncoding Do not encode the result, default is `false`
     */
    URI.prototype.toString = function (skipEncoding) {
        if (skipEncoding === void 0) {skipEncoding = false;}
        return _asFormatted(this, skipEncoding);
    };
    URI.prototype.toJSON = function () {
        return this;
    };
    URI.revive = function (data) {
        if (!data) {
            return data;
        } else
        if (data instanceof URI) {
            return data;
        } else
        {
            var result = new _URI(data);
            result._fsPath = data.fsPath;
            result._formatted = data.external;
            return result;
        }
    };
    return URI;
}();

// tslint:disable-next-line:class-name
var _URI = /** @class */function (_super) {
    __extends(_URI, _super);
    function _URI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._formatted = null;
        _this._fsPath = null;
        return _this;
    }
    Object.defineProperty(_URI.prototype, "fsPath", {
        get: function () {
            if (!this._fsPath) {
                this._fsPath = _makeFsPath(this);
            }
            return this._fsPath;
        },
        enumerable: true,
        configurable: true });

    _URI.prototype.toString = function (skipEncoding) {
        if (skipEncoding === void 0) {skipEncoding = false;}
        if (!skipEncoding) {
            if (!this._formatted) {
                this._formatted = _asFormatted(this, false);
            }
            return this._formatted;
        } else
        {
            // we don't cache that
            return _asFormatted(this, true);
        }
    };
    _URI.prototype.toJSON = function () {
        var res = {
            $mid: 1 };

        // cached state
        if (this._fsPath) {
            res.fsPath = this._fsPath;
        }
        if (this._formatted) {
            res.external = this._formatted;
        }
        // uri components
        if (this.path) {
            res.path = this.path;
        }
        if (this.scheme) {
            res.scheme = this.scheme;
        }
        if (this.authority) {
            res.authority = this.authority;
        }
        if (this.query) {
            res.query = this.query;
        }
        if (this.fragment) {
            res.fragment = this.fragment;
        }
        return res;
    };
    return _URI;
}(URI);
// reserved characters: https://tools.ietf.org/html/rfc3986#section-2.2
var encodeTable = (_a = {},
_a[58 /* Colon */] = '%3A',
_a[47 /* Slash */] = '%2F',
_a[63 /* QuestionMark */] = '%3F',
_a[35 /* Hash */] = '%23',
_a[91 /* OpenSquareBracket */] = '%5B',
_a[93 /* CloseSquareBracket */] = '%5D',
_a[64 /* AtSign */] = '%40',
_a[33 /* ExclamationMark */] = '%21',
_a[36 /* DollarSign */] = '%24',
_a[38 /* Ampersand */] = '%26',
_a[39 /* SingleQuote */] = '%27',
_a[40 /* OpenParen */] = '%28',
_a[41 /* CloseParen */] = '%29',
_a[42 /* Asterisk */] = '%2A',
_a[43 /* Plus */] = '%2B',
_a[44 /* Comma */] = '%2C',
_a[59 /* Semicolon */] = '%3B',
_a[61 /* Equals */] = '%3D',
_a[32 /* Space */] = '%20',
_a);
function encodeURIComponentFast(uriComponent, allowSlash) {
    var res = undefined;
    var nativeEncodePos = -1;
    for (var pos = 0; pos < uriComponent.length; pos++) {
        var code = uriComponent.charCodeAt(pos);
        // unreserved characters: https://tools.ietf.org/html/rfc3986#section-2.3
        if (code >= 97 /* a */ && code <= 122 /* z */ ||
        code >= 65 /* A */ && code <= 90 /* Z */ ||
        code >= 48 /* Digit0 */ && code <= 57 /* Digit9 */ ||
        code === 45 /* Dash */ ||
        code === 46 /* Period */ ||
        code === 95 /* Underline */ ||
        code === 126 /* Tilde */ ||
        allowSlash && code === 47 /* Slash */) {
            // check if we are delaying native encode
            if (nativeEncodePos !== -1) {
                res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
                nativeEncodePos = -1;
            }
            // check if we write into a new string (by default we try to return the param)
            if (res !== undefined) {
                res += uriComponent.charAt(pos);
            }
        } else
        {
            // encoding needed, we need to allocate a new string
            if (res === undefined) {
                res = uriComponent.substr(0, pos);
            }
            // check with default table first
            var escaped = encodeTable[code];
            if (escaped !== undefined) {
                // check if we are delaying native encode
                if (nativeEncodePos !== -1) {
                    res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
                    nativeEncodePos = -1;
                }
                // append escaped variant to result
                res += escaped;
            } else
            if (nativeEncodePos === -1) {
                // use native encode only when needed
                nativeEncodePos = pos;
            }
        }
    }
    if (nativeEncodePos !== -1) {
        res += encodeURIComponent(uriComponent.substring(nativeEncodePos));
    }
    return res !== undefined ? res : uriComponent;
}
function encodeURIComponentMinimal(path) {
    var res = undefined;
    for (var pos = 0; pos < path.length; pos++) {
        var code = path.charCodeAt(pos);
        if (code === 35 /* Hash */ || code === 63 /* QuestionMark */) {
                if (res === undefined) {
                    res = path.substr(0, pos);
                }
                res += encodeTable[code];
            } else
        {
            if (res !== undefined) {
                res += path[pos];
            }
        }
    }
    return res !== undefined ? res : path;
}
/**
   * Compute `fsPath` for the given uri
   */
function _makeFsPath(uri) {
    var value;
    if (uri.authority && uri.path.length > 1 && uri.scheme === 'file') {
        // unc path: file://shares/c$/far/boo
        value = "//" + uri.authority + uri.path;
    } else
    if (uri.path.charCodeAt(0) === 47 /* Slash */ && (
    uri.path.charCodeAt(1) >= 65 /* A */ && uri.path.charCodeAt(1) <= 90 /* Z */ || uri.path.charCodeAt(1) >= 97 /* a */ && uri.path.charCodeAt(1) <= 122 /* z */) &&
    uri.path.charCodeAt(2) === 58 /* Colon */) {
            // windows drive letter: file:///c:/far/boo
            value = uri.path[1].toLowerCase() + uri.path.substr(2);
        } else
    {
        // other path
        value = uri.path;
    }
    if (__WEBPACK_IMPORTED_MODULE_0__platform_js__["g" /* isWindows */]) {
        value = value.replace(/\//g, '\\');
    }
    return value;
}
/**
   * Create the external version of a uri
   */
function _asFormatted(uri, skipEncoding) {
    var encoder = !skipEncoding ?
    encodeURIComponentFast :
    encodeURIComponentMinimal;
    var res = '';
    var scheme = uri.scheme,authority = uri.authority,path = uri.path,query = uri.query,fragment = uri.fragment;
    if (scheme) {
        res += scheme;
        res += ':';
    }
    if (authority || scheme === 'file') {
        res += _slash;
        res += _slash;
    }
    if (authority) {
        var idx = authority.indexOf('@');
        if (idx !== -1) {
            // <user>@<auth>
            var userinfo = authority.substr(0, idx);
            authority = authority.substr(idx + 1);
            idx = userinfo.indexOf(':');
            if (idx === -1) {
                res += encoder(userinfo, false);
            } else
            {
                // <user>:<pass>@<auth>
                res += encoder(userinfo.substr(0, idx), false);
                res += ':';
                res += encoder(userinfo.substr(idx + 1), false);
            }
            res += '@';
        }
        authority = authority.toLowerCase();
        idx = authority.indexOf(':');
        if (idx === -1) {
            res += encoder(authority, false);
        } else
        {
            // <auth>:<port>
            res += encoder(authority.substr(0, idx), false);
            res += authority.substr(idx);
        }
    }
    if (path) {
        // lower-case windows drive letters in /C:/fff or C:/fff
        if (path.length >= 3 && path.charCodeAt(0) === 47 /* Slash */ && path.charCodeAt(2) === 58 /* Colon */) {
                var code = path.charCodeAt(1);
                if (code >= 65 /* A */ && code <= 90 /* Z */) {
                        path = "/" + String.fromCharCode(code + 32) + ":" + path.substr(3); // "/c:".length === 3
                    }
            } else
        if (path.length >= 2 && path.charCodeAt(1) === 58 /* Colon */) {
                var code = path.charCodeAt(0);
                if (code >= 65 /* A */ && code <= 90 /* Z */) {
                        path = String.fromCharCode(code + 32) + ":" + path.substr(2); // "/c:".length === 3
                    }
            }
        // encode the rest of the path
        res += encoder(path, true);
    }
    if (query) {
        res += '?';
        res += encoder(query, false);
    }
    if (fragment) {
        res += '#';
        res += !skipEncoding ? encodeURIComponentFast(fragment, false) : fragment;
    }
    return res;
}

/***/ }),

/***/ 3528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ICommandService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandsRegistry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_common_lifecycle_js__ = __webpack_require__(3480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_common_types_js__ = __webpack_require__(3498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instantiation_common_instantiation_js__ = __webpack_require__(3485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_common_event_js__ = __webpack_require__(3481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_common_linkedList_js__ = __webpack_require__(3652);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





var ICommandService = Object(__WEBPACK_IMPORTED_MODULE_2__instantiation_common_instantiation_js__["c" /* createDecorator */])('commandService');
var CommandsRegistry = new ( /** @class */function () {
    function class_1() {
        this._commands = new Map();
        this._onDidRegisterCommand = new __WEBPACK_IMPORTED_MODULE_3__base_common_event_js__["a" /* Emitter */]();
        this.onDidRegisterCommand = this._onDidRegisterCommand.event;
    }
    class_1.prototype.registerCommand = function (idOrCommand, handler) {
        var _this = this;
        if (!idOrCommand) {
            throw new Error("invalid command");
        }
        if (typeof idOrCommand === 'string') {
            if (!handler) {
                throw new Error("invalid command");
            }
            return this.registerCommand({ id: idOrCommand, handler: handler });
        }
        // add argument validation if rich command metadata is provided
        if (idOrCommand.description) {
            var constraints_1 = [];
            for (var _i = 0, _a = idOrCommand.description.args; _i < _a.length; _i++) {
                var arg = _a[_i];
                constraints_1.push(arg.constraint);
            }
            var actualHandler_1 = idOrCommand.handler;
            idOrCommand.handler = function (accessor) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                Object(__WEBPACK_IMPORTED_MODULE_1__base_common_types_js__["k" /* validateConstraints */])(args, constraints_1);
                return actualHandler_1.apply(void 0, [accessor].concat(args));
            };
        }
        // find a place to store the command
        var id = idOrCommand.id;
        var commands = this._commands.get(id);
        if (!commands) {
            commands = new __WEBPACK_IMPORTED_MODULE_4__base_common_linkedList_js__["a" /* LinkedList */]();
            this._commands.set(id, commands);
        }
        var removeFn = commands.unshift(idOrCommand);
        var ret = Object(__WEBPACK_IMPORTED_MODULE_0__base_common_lifecycle_js__["f" /* toDisposable */])(function () {
            removeFn();
            var command = _this._commands.get(id);
            if (command && command.isEmpty()) {
                _this._commands.delete(id);
            }
        });
        // tell the world about this command
        this._onDidRegisterCommand.fire(id);
        return ret;
    };
    class_1.prototype.registerCommandAlias = function (oldId, newId) {
        return CommandsRegistry.registerCommand(oldId, function (accessor) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return (_a = accessor.get(ICommandService)).executeCommand.apply(_a, [newId].concat(args));
        });
    };
    class_1.prototype.getCommand = function (id) {
        var list = this._commands.get(id);
        if (!list || list.isEmpty()) {
            return undefined;
        }
        return list.iterator().next().value;
    };
    class_1.prototype.getCommands = function () {
        var _this = this;
        var result = Object.create(null);
        this._commands.forEach(function (value, key) {
            result[key] = _this.getCommand(key);
        });
        return result;
    };
    return class_1;
}())();

/***/ }),

/***/ 3531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_common_types_js__ = __webpack_require__(3498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_common_assert_js__ = __webpack_require__(3845);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var RegistryImpl = /** @class */function () {
    function RegistryImpl() {
        this.data = {};
    }
    RegistryImpl.prototype.add = function (id, data) {
        __WEBPACK_IMPORTED_MODULE_1__base_common_assert_js__["a" /* ok */](__WEBPACK_IMPORTED_MODULE_0__base_common_types_js__["h" /* isString */](id));
        __WEBPACK_IMPORTED_MODULE_1__base_common_assert_js__["a" /* ok */](__WEBPACK_IMPORTED_MODULE_0__base_common_types_js__["g" /* isObject */](data));
        __WEBPACK_IMPORTED_MODULE_1__base_common_assert_js__["a" /* ok */](!this.data.hasOwnProperty(id), 'There is already an extension with this id');
        this.data[id] = data;
    };
    RegistryImpl.prototype.as = function (id) {
        return this.data[id] || null;
    };
    return RegistryImpl;
}();
var Registry = new RegistryImpl();

/***/ }),

/***/ 3536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = values;
/* harmony export (immutable) */ __webpack_exports__["d"] = keys;
/* unused harmony export StringIterator */
/* unused harmony export PathIterator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TernarySearchTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResourceMap; });
/* unused harmony export LinkedMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LRUCache; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
        { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
        function (d, b) {for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {this.constructor = d;}
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
function values(forEachable) {
    var result = [];
    forEachable.forEach(function (value) {return result.push(value);});
    return result;
}
function keys(map) {
    var result = [];
    map.forEach(function (value, key) {return result.push(key);});
    return result;
}
var StringIterator = /** @class */function () {
    function StringIterator() {
        this._value = '';
        this._pos = 0;
    }
    StringIterator.prototype.reset = function (key) {
        this._value = key;
        this._pos = 0;
        return this;
    };
    StringIterator.prototype.next = function () {
        this._pos += 1;
        return this;
    };
    StringIterator.prototype.hasNext = function () {
        return this._pos < this._value.length - 1;
    };
    StringIterator.prototype.cmp = function (a) {
        var aCode = a.charCodeAt(0);
        var thisCode = this._value.charCodeAt(this._pos);
        return aCode - thisCode;
    };
    StringIterator.prototype.value = function () {
        return this._value[this._pos];
    };
    return StringIterator;
}();

var PathIterator = /** @class */function () {
    function PathIterator() {
    }
    PathIterator.prototype.reset = function (key) {
        this._value = key.replace(/\\$|\/$/, '');
        this._from = 0;
        this._to = 0;
        return this.next();
    };
    PathIterator.prototype.hasNext = function () {
        return this._to < this._value.length;
    };
    PathIterator.prototype.next = function () {
        // this._data = key.split(/[\\/]/).filter(s => !!s);
        this._from = this._to;
        var justSeps = true;
        for (; this._to < this._value.length; this._to++) {
            var ch = this._value.charCodeAt(this._to);
            if (ch === 47 /* Slash */ || ch === 92 /* Backslash */) {
                    if (justSeps) {
                        this._from++;
                    } else
                    {
                        break;
                    }
                } else
            {
                justSeps = false;
            }
        }
        return this;
    };
    PathIterator.prototype.cmp = function (a) {
        var aPos = 0;
        var aLen = a.length;
        var thisPos = this._from;
        while (aPos < aLen && thisPos < this._to) {
            var cmp = a.charCodeAt(aPos) - this._value.charCodeAt(thisPos);
            if (cmp !== 0) {
                return cmp;
            }
            aPos += 1;
            thisPos += 1;
        }
        if (aLen === this._to - this._from) {
            return 0;
        } else
        if (aPos < aLen) {
            return -1;
        } else
        {
            return 1;
        }
    };
    PathIterator.prototype.value = function () {
        return this._value.substring(this._from, this._to);
    };
    return PathIterator;
}();

var TernarySearchTreeNode = /** @class */function () {
    function TernarySearchTreeNode() {
    }
    return TernarySearchTreeNode;
}();
var TernarySearchTree = /** @class */function () {
    function TernarySearchTree(segments) {
        this._iter = segments;
    }
    TernarySearchTree.forPaths = function () {
        return new TernarySearchTree(new PathIterator());
    };
    TernarySearchTree.forStrings = function () {
        return new TernarySearchTree(new StringIterator());
    };
    TernarySearchTree.prototype.clear = function () {
        this._root = undefined;
    };
    TernarySearchTree.prototype.set = function (key, element) {
        var iter = this._iter.reset(key);
        var node;
        if (!this._root) {
            this._root = new TernarySearchTreeNode();
            this._root.segment = iter.value();
        }
        node = this._root;
        while (true) {
            var val = iter.cmp(node.segment);
            if (val > 0) {
                // left
                if (!node.left) {
                    node.left = new TernarySearchTreeNode();
                    node.left.segment = iter.value();
                }
                node = node.left;
            } else
            if (val < 0) {
                // right
                if (!node.right) {
                    node.right = new TernarySearchTreeNode();
                    node.right.segment = iter.value();
                }
                node = node.right;
            } else
            if (iter.hasNext()) {
                // mid
                iter.next();
                if (!node.mid) {
                    node.mid = new TernarySearchTreeNode();
                    node.mid.segment = iter.value();
                }
                node = node.mid;
            } else
            {
                break;
            }
        }
        var oldElement = node.value;
        node.value = element;
        node.key = key;
        return oldElement;
    };
    TernarySearchTree.prototype.get = function (key) {
        var iter = this._iter.reset(key);
        var node = this._root;
        while (node) {
            var val = iter.cmp(node.segment);
            if (val > 0) {
                // left
                node = node.left;
            } else
            if (val < 0) {
                // right
                node = node.right;
            } else
            if (iter.hasNext()) {
                // mid
                iter.next();
                node = node.mid;
            } else
            {
                break;
            }
        }
        return node ? node.value : undefined;
    };
    TernarySearchTree.prototype.findSubstr = function (key) {
        var iter = this._iter.reset(key);
        var node = this._root;
        var candidate = undefined;
        while (node) {
            var val = iter.cmp(node.segment);
            if (val > 0) {
                // left
                node = node.left;
            } else
            if (val < 0) {
                // right
                node = node.right;
            } else
            if (iter.hasNext()) {
                // mid
                iter.next();
                candidate = node.value || candidate;
                node = node.mid;
            } else
            {
                break;
            }
        }
        return node && node.value || candidate;
    };
    TernarySearchTree.prototype.forEach = function (callback) {
        this._forEach(this._root, callback);
    };
    TernarySearchTree.prototype._forEach = function (node, callback) {
        if (node) {
            // left
            this._forEach(node.left, callback);
            // node
            if (node.value) {
                // callback(node.value, this._iter.join(parts));
                callback(node.value, node.key);
            }
            // mid
            this._forEach(node.mid, callback);
            // right
            this._forEach(node.right, callback);
        }
    };
    return TernarySearchTree;
}();

var ResourceMap = /** @class */function () {
    function ResourceMap() {
        this.map = new Map();
        this.ignoreCase = false; // in the future this should be an uri-comparator
    }
    ResourceMap.prototype.set = function (resource, value) {
        this.map.set(this.toKey(resource), value);
    };
    ResourceMap.prototype.get = function (resource) {
        return this.map.get(this.toKey(resource));
    };
    ResourceMap.prototype.toKey = function (resource) {
        var key = resource.toString();
        if (this.ignoreCase) {
            key = key.toLowerCase();
        }
        return key;
    };
    return ResourceMap;
}();

var LinkedMap = /** @class */function () {
    function LinkedMap() {
        this._map = new Map();
        this._head = undefined;
        this._tail = undefined;
        this._size = 0;
    }
    LinkedMap.prototype.clear = function () {
        this._map.clear();
        this._head = undefined;
        this._tail = undefined;
        this._size = 0;
    };
    Object.defineProperty(LinkedMap.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true });

    LinkedMap.prototype.get = function (key, touch) {
        if (touch === void 0) {touch = 0 /* None */;}
        var item = this._map.get(key);
        if (!item) {
            return undefined;
        }
        if (touch !== 0 /* None */) {
                this.touch(item, touch);
            }
        return item.value;
    };
    LinkedMap.prototype.set = function (key, value, touch) {
        if (touch === void 0) {touch = 0 /* None */;}
        var item = this._map.get(key);
        if (item) {
            item.value = value;
            if (touch !== 0 /* None */) {
                    this.touch(item, touch);
                }
        } else
        {
            item = { key: key, value: value, next: undefined, previous: undefined };
            switch (touch) {
                case 0 /* None */:
                    this.addItemLast(item);
                    break;
                case 1 /* AsOld */:
                    this.addItemFirst(item);
                    break;
                case 2 /* AsNew */:
                    this.addItemLast(item);
                    break;
                default:
                    this.addItemLast(item);
                    break;}

            this._map.set(key, item);
            this._size++;
        }
    };
    LinkedMap.prototype.delete = function (key) {
        return !!this.remove(key);
    };
    LinkedMap.prototype.remove = function (key) {
        var item = this._map.get(key);
        if (!item) {
            return undefined;
        }
        this._map.delete(key);
        this.removeItem(item);
        this._size--;
        return item.value;
    };
    LinkedMap.prototype.forEach = function (callbackfn, thisArg) {
        var current = this._head;
        while (current) {
            if (thisArg) {
                callbackfn.bind(thisArg)(current.value, current.key, this);
            } else
            {
                callbackfn(current.value, current.key, this);
            }
            current = current.next;
        }
    };
    /* VS Code / Monaco editor runs on es5 which has no Symbol.iterator
       keys(): IterableIterator<K> {
           const current = this._head;
           const iterator: IterableIterator<K> = {
               [Symbol.iterator]() {
                   return iterator;
               },
               next():IteratorResult<K> {
                   if (current) {
                       const result = { value: current.key, done: false };
                       current = current.next;
                       return result;
                   } else {
                       return { value: undefined, done: true };
                   }
               }
           };
           return iterator;
       }
        values(): IterableIterator<V> {
           const current = this._head;
           const iterator: IterableIterator<V> = {
               [Symbol.iterator]() {
                   return iterator;
               },
               next():IteratorResult<V> {
                   if (current) {
                       const result = { value: current.value, done: false };
                       current = current.next;
                       return result;
                   } else {
                       return { value: undefined, done: true };
                   }
               }
           };
           return iterator;
       }
       */

    LinkedMap.prototype.trimOld = function (newSize) {
        if (newSize >= this.size) {
            return;
        }
        if (newSize === 0) {
            this.clear();
            return;
        }
        var current = this._head;
        var currentSize = this.size;
        while (current && currentSize > newSize) {
            this._map.delete(current.key);
            current = current.next;
            currentSize--;
        }
        this._head = current;
        this._size = currentSize;
        if (current) {
            current.previous = undefined;
        }
    };
    LinkedMap.prototype.addItemFirst = function (item) {
        // First time Insert
        if (!this._head && !this._tail) {
            this._tail = item;
        } else
        if (!this._head) {
            throw new Error('Invalid list');
        } else
        {
            item.next = this._head;
            this._head.previous = item;
        }
        this._head = item;
    };
    LinkedMap.prototype.addItemLast = function (item) {
        // First time Insert
        if (!this._head && !this._tail) {
            this._head = item;
        } else
        if (!this._tail) {
            throw new Error('Invalid list');
        } else
        {
            item.previous = this._tail;
            this._tail.next = item;
        }
        this._tail = item;
    };
    LinkedMap.prototype.removeItem = function (item) {
        if (item === this._head && item === this._tail) {
            this._head = undefined;
            this._tail = undefined;
        } else
        if (item === this._head) {
            // This can only happend if size === 1 which is handle
            // by the case above.
            if (!item.next) {
                throw new Error('Invalid list');
            }
            item.next.previous = undefined;
            this._head = item.next;
        } else
        if (item === this._tail) {
            // This can only happend if size === 1 which is handle
            // by the case above.
            if (!item.previous) {
                throw new Error('Invalid list');
            }
            item.previous.next = undefined;
            this._tail = item.previous;
        } else
        {
            var next = item.next;
            var previous = item.previous;
            if (!next || !previous) {
                throw new Error('Invalid list');
            }
            next.previous = previous;
            previous.next = next;
        }
        item.next = undefined;
        item.previous = undefined;
    };
    LinkedMap.prototype.touch = function (item, touch) {
        if (!this._head || !this._tail) {
            throw new Error('Invalid list');
        }
        if (touch !== 1 /* AsOld */ && touch !== 2 /* AsNew */) {
                return;
            }
        if (touch === 1 /* AsOld */) {
                if (item === this._head) {
                    return;
                }
                var next = item.next;
                var previous = item.previous;
                // Unlink the item
                if (item === this._tail) {
                    // previous must be defined since item was not head but is tail
                    // So there are more than on item in the map
                    previous.next = undefined;
                    this._tail = previous;
                } else
                {
                    // Both next and previous are not undefined since item was neither head nor tail.
                    next.previous = previous;
                    previous.next = next;
                }
                // Insert the node at head
                item.previous = undefined;
                item.next = this._head;
                this._head.previous = item;
                this._head = item;
            } else
        if (touch === 2 /* AsNew */) {
                if (item === this._tail) {
                    return;
                }
                var next = item.next;
                var previous = item.previous;
                // Unlink the item.
                if (item === this._head) {
                    // next must be defined since item was not tail but is head
                    // So there are more than on item in the map
                    next.previous = undefined;
                    this._head = next;
                } else
                {
                    // Both next and previous are not undefined since item was neither head nor tail.
                    next.previous = previous;
                    previous.next = next;
                }
                item.next = undefined;
                item.previous = this._tail;
                this._tail.next = item;
                this._tail = item;
            }
    };
    LinkedMap.prototype.toJSON = function () {
        var data = [];
        this.forEach(function (value, key) {
            data.push([key, value]);
        });
        return data;
    };
    return LinkedMap;
}();

var LRUCache = /** @class */function (_super) {
    __extends(LRUCache, _super);
    function LRUCache(limit, ratio) {
        if (ratio === void 0) {ratio = 1;}
        var _this = _super.call(this) || this;
        _this._limit = limit;
        _this._ratio = Math.min(Math.max(0, ratio), 1);
        return _this;
    }
    LRUCache.prototype.get = function (key) {
        return _super.prototype.get.call(this, key, 2 /* AsNew */);
    };
    LRUCache.prototype.set = function (key, value) {
        _super.prototype.set.call(this, key, value, 2 /* AsNew */);
        this.checkTrim();
    };
    LRUCache.prototype.checkTrim = function () {
        if (this.size > this._limit) {
            this.trimOld(Math.round(this._limit * this._ratio));
        }
    };
    return LRUCache;
}(LinkedMap);


/***/ }),

/***/ 3538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Command; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EditorCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EditorAction; });
/* harmony export (immutable) */ __webpack_exports__["i"] = registerLanguageCommand;
/* unused harmony export registerDefaultLanguageCommand */
/* harmony export (immutable) */ __webpack_exports__["f"] = registerEditorCommand;
/* harmony export (immutable) */ __webpack_exports__["e"] = registerEditorAction;
/* harmony export (immutable) */ __webpack_exports__["h"] = registerInstantiatedEditorAction;
/* harmony export (immutable) */ __webpack_exports__["g"] = registerEditorContribution;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EditorExtensionsRegistry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_common_errors_js__ = __webpack_require__(3493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_common_uri_js__ = __webpack_require__(3527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_codeEditorService_js__ = __webpack_require__(3539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_core_position_js__ = __webpack_require__(3487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_modelService_js__ = __webpack_require__(3566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_resolverService_js__ = __webpack_require__(3844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__platform_actions_common_actions_js__ = __webpack_require__(3607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__platform_commands_common_commands_js__ = __webpack_require__(3528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__platform_contextkey_common_contextkey_js__ = __webpack_require__(3508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__platform_keybinding_common_keybindingsRegistry_js__ = __webpack_require__(3704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__platform_registry_common_platform_js__ = __webpack_require__(3531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__platform_telemetry_common_telemetry_js__ = __webpack_require__(3705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__base_common_types_js__ = __webpack_require__(3498);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
        { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
        function (d, b) {for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {this.constructor = d;}
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};













var Command = /** @class */function () {
    function Command(opts) {
        this.id = opts.id;
        this.precondition = opts.precondition;
        this._kbOpts = opts.kbOpts;
        this._menubarOpts = opts.menubarOpts;
        this._description = opts.description;
    }
    Command.prototype.register = function () {
        var _this = this;
        if (this._menubarOpts) {
            __WEBPACK_IMPORTED_MODULE_6__platform_actions_common_actions_js__["c" /* MenuRegistry */].appendMenuItem(this._menubarOpts.menuId, {
                group: this._menubarOpts.group,
                command: {
                    id: this.id,
                    title: this._menubarOpts.title },

                when: this._menubarOpts.when,
                order: this._menubarOpts.order });

        }
        if (this._kbOpts) {
            var kbWhen = this._kbOpts.kbExpr;
            if (this.precondition) {
                if (kbWhen) {
                    kbWhen = __WEBPACK_IMPORTED_MODULE_8__platform_contextkey_common_contextkey_js__["d" /* ContextKeyExpr */].and(kbWhen, this.precondition);
                } else
                {
                    kbWhen = this.precondition;
                }
            }
            __WEBPACK_IMPORTED_MODULE_9__platform_keybinding_common_keybindingsRegistry_js__["a" /* KeybindingsRegistry */].registerCommandAndKeybindingRule({
                id: this.id,
                handler: function (accessor, args) {return _this.runCommand(accessor, args);},
                weight: this._kbOpts.weight,
                when: kbWhen,
                primary: this._kbOpts.primary,
                secondary: this._kbOpts.secondary,
                win: this._kbOpts.win,
                linux: this._kbOpts.linux,
                mac: this._kbOpts.mac,
                description: this._description });

        } else
        {
            __WEBPACK_IMPORTED_MODULE_7__platform_commands_common_commands_js__["a" /* CommandsRegistry */].registerCommand({
                id: this.id,
                handler: function (accessor, args) {return _this.runCommand(accessor, args);},
                description: this._description });

        }
    };
    return Command;
}();

var EditorCommand = /** @class */function (_super) {
    __extends(EditorCommand, _super);
    function EditorCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
       * Create a command class that is bound to a certain editor contribution.
       */
    EditorCommand.bindToContribution = function (controllerGetter) {
        return (/** @class */function (_super) {
                __extends(EditorControllerCommandImpl, _super);
                function EditorControllerCommandImpl(opts) {
                    var _this = _super.call(this, opts) || this;
                    _this._callback = opts.handler;
                    return _this;
                }
                EditorControllerCommandImpl.prototype.runEditorCommand = function (accessor, editor, args) {
                    var controller = controllerGetter(editor);
                    if (controller) {
                        this._callback(controllerGetter(editor), args);
                    }
                };
                return EditorControllerCommandImpl;
            }(EditorCommand));
    };
    EditorCommand.prototype.runCommand = function (accessor, args) {
        var _this = this;
        var codeEditorService = accessor.get(__WEBPACK_IMPORTED_MODULE_2__services_codeEditorService_js__["a" /* ICodeEditorService */]);
        // Find the editor with text focus or active
        var editor = codeEditorService.getFocusedCodeEditor() || codeEditorService.getActiveCodeEditor();
        if (!editor) {
            // well, at least we tried...
            return;
        }
        return editor.invokeWithinContext(function (editorAccessor) {
            var kbService = editorAccessor.get(__WEBPACK_IMPORTED_MODULE_8__platform_contextkey_common_contextkey_js__["e" /* IContextKeyService */]);
            if (!kbService.contextMatchesRules(Object(__WEBPACK_IMPORTED_MODULE_12__base_common_types_js__["l" /* withNullAsUndefined */])(_this.precondition))) {
                // precondition does not hold
                return;
            }
            return _this.runEditorCommand(editorAccessor, editor, args);
        });
    };
    return EditorCommand;
}(Command);

var EditorAction = /** @class */function (_super) {
    __extends(EditorAction, _super);
    function EditorAction(opts) {
        var _this = _super.call(this, opts) || this;
        _this.label = opts.label;
        _this.alias = opts.alias;
        _this.menuOpts = opts.menuOpts;
        return _this;
    }
    EditorAction.prototype.register = function () {
        if (this.menuOpts) {
            __WEBPACK_IMPORTED_MODULE_6__platform_actions_common_actions_js__["c" /* MenuRegistry */].appendMenuItem(7 /* EditorContext */, {
                command: {
                    id: this.id,
                    title: this.label },

                when: __WEBPACK_IMPORTED_MODULE_8__platform_contextkey_common_contextkey_js__["d" /* ContextKeyExpr */].and(this.precondition, this.menuOpts.when),
                group: this.menuOpts.group,
                order: this.menuOpts.order });

        }
        _super.prototype.register.call(this);
    };
    EditorAction.prototype.runEditorCommand = function (accessor, editor, args) {
        this.reportTelemetry(accessor, editor);
        return this.run(accessor, editor, args || {});
    };
    EditorAction.prototype.reportTelemetry = function (accessor, editor) {
        /* __GDPR__
                                                                              "editorActionInvoked" : {
                                                                                  "name" : { "classification": "SystemMetaData", "purpose": "FeatureInsight" },
                                                                                  "id": { "classification": "SystemMetaData", "purpose": "FeatureInsight" },
                                                                                  "${include}": [
                                                                                      "${EditorTelemetryData}"
                                                                                  ]
                                                                              }
                                                                          */
        accessor.get(__WEBPACK_IMPORTED_MODULE_11__platform_telemetry_common_telemetry_js__["a" /* ITelemetryService */]).publicLog('editorActionInvoked', __assign({ name: this.label, id: this.id }, editor.getTelemetryData()));
    };
    return EditorAction;
}(EditorCommand);

//#endregion EditorAction
// --- Registration of commands and actions
function registerLanguageCommand(id, handler) {
    __WEBPACK_IMPORTED_MODULE_7__platform_commands_common_commands_js__["a" /* CommandsRegistry */].registerCommand(id, function (accessor, args) {return handler(accessor, args || {});});
}
function registerDefaultLanguageCommand(id, handler) {
    registerLanguageCommand(id, function (accessor, args) {
        var resource = args.resource,position = args.position;
        if (!(resource instanceof __WEBPACK_IMPORTED_MODULE_1__base_common_uri_js__["a" /* URI */])) {
            throw Object(__WEBPACK_IMPORTED_MODULE_0__base_common_errors_js__["b" /* illegalArgument */])('resource');
        }
        if (!__WEBPACK_IMPORTED_MODULE_3__common_core_position_js__["a" /* Position */].isIPosition(position)) {
            throw Object(__WEBPACK_IMPORTED_MODULE_0__base_common_errors_js__["b" /* illegalArgument */])('position');
        }
        var model = accessor.get(__WEBPACK_IMPORTED_MODULE_4__common_services_modelService_js__["a" /* IModelService */]).getModel(resource);
        if (model) {
            var editorPosition = __WEBPACK_IMPORTED_MODULE_3__common_core_position_js__["a" /* Position */].lift(position);
            return handler(model, editorPosition, args);
        }
        return accessor.get(__WEBPACK_IMPORTED_MODULE_5__common_services_resolverService_js__["a" /* ITextModelService */]).createModelReference(resource).then(function (reference) {
            return new Promise(function (resolve, reject) {
                try {
                    var result = handler(reference.object.textEditorModel, __WEBPACK_IMPORTED_MODULE_3__common_core_position_js__["a" /* Position */].lift(position), args);
                    resolve(result);
                }
                catch (err) {
                    reject(err);
                }
            }).finally(function () {
                reference.dispose();
            });
        });
    });
}
function registerEditorCommand(editorCommand) {
    EditorContributionRegistry.INSTANCE.registerEditorCommand(editorCommand);
    return editorCommand;
}
function registerEditorAction(ctor) {
    EditorContributionRegistry.INSTANCE.registerEditorAction(new ctor());
}
function registerInstantiatedEditorAction(editorAction) {
    EditorContributionRegistry.INSTANCE.registerEditorAction(editorAction);
}
function registerEditorContribution(ctor) {
    EditorContributionRegistry.INSTANCE.registerEditorContribution(ctor);
}
var EditorExtensionsRegistry;
(function (EditorExtensionsRegistry) {
    function getEditorCommand(commandId) {
        return EditorContributionRegistry.INSTANCE.getEditorCommand(commandId);
    }
    EditorExtensionsRegistry.getEditorCommand = getEditorCommand;
    function getEditorActions() {
        return EditorContributionRegistry.INSTANCE.getEditorActions();
    }
    EditorExtensionsRegistry.getEditorActions = getEditorActions;
    function getEditorContributions() {
        return EditorContributionRegistry.INSTANCE.getEditorContributions();
    }
    EditorExtensionsRegistry.getEditorContributions = getEditorContributions;
})(EditorExtensionsRegistry || (EditorExtensionsRegistry = {}));
// Editor extension points
var Extensions = {
    EditorCommonContributions: 'editor.contributions' };

var EditorContributionRegistry = /** @class */function () {
    function EditorContributionRegistry() {
        this.editorContributions = [];
        this.editorActions = [];
        this.editorCommands = Object.create(null);
    }
    EditorContributionRegistry.prototype.registerEditorContribution = function (ctor) {
        this.editorContributions.push(ctor);
    };
    EditorContributionRegistry.prototype.registerEditorAction = function (action) {
        action.register();
        this.editorActions.push(action);
    };
    EditorContributionRegistry.prototype.getEditorContributions = function () {
        return this.editorContributions.slice(0);
    };
    EditorContributionRegistry.prototype.getEditorActions = function () {
        return this.editorActions.slice(0);
    };
    EditorContributionRegistry.prototype.registerEditorCommand = function (editorCommand) {
        editorCommand.register();
        this.editorCommands[editorCommand.id] = editorCommand;
    };
    EditorContributionRegistry.prototype.getEditorCommand = function (commandId) {
        return this.editorCommands[commandId] || null;
    };
    EditorContributionRegistry.INSTANCE = new EditorContributionRegistry();
    return EditorContributionRegistry;
}();
__WEBPACK_IMPORTED_MODULE_10__platform_registry_common_platform_js__["a" /* Registry */].add(Extensions.EditorCommonContributions, EditorContributionRegistry.INSTANCE);

/***/ }),

/***/ 3539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ICodeEditorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_instantiation_common_instantiation_js__ = __webpack_require__(3485);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var ICodeEditorService = Object(__WEBPACK_IMPORTED_MODULE_0__platform_instantiation_common_instantiation_js__["c" /* createDecorator */])('codeEditorService');

/***/ }),

/***/ 3540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandardMouseEvent; });
/* unused harmony export DragMouseEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StandardWheelEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browser_js__ = __webpack_require__(3515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iframe_js__ = __webpack_require__(3851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_platform_js__ = __webpack_require__(3488);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
        { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
        function (d, b) {for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {this.constructor = d;}
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();



var StandardMouseEvent = /** @class */function () {
    function StandardMouseEvent(e) {
        this.timestamp = Date.now();
        this.browserEvent = e;
        this.leftButton = e.button === 0;
        this.middleButton = e.button === 1;
        this.rightButton = e.button === 2;
        this.target = e.target;
        this.detail = e.detail || 1;
        if (e.type === 'dblclick') {
            this.detail = 2;
        }
        this.ctrlKey = e.ctrlKey;
        this.shiftKey = e.shiftKey;
        this.altKey = e.altKey;
        this.metaKey = e.metaKey;
        if (typeof e.pageX === 'number') {
            this.posx = e.pageX;
            this.posy = e.pageY;
        } else
        {
            // Probably hit by MSGestureEvent
            this.posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            this.posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        // Find the position of the iframe this code is executing in relative to the iframe where the event was captured.
        var iframeOffsets = __WEBPACK_IMPORTED_MODULE_1__iframe_js__["a" /* IframeUtils */].getPositionOfChildWindowRelativeToAncestorWindow(self, e.view);
        this.posx -= iframeOffsets.left;
        this.posy -= iframeOffsets.top;
    }
    StandardMouseEvent.prototype.preventDefault = function () {
        if (this.browserEvent.preventDefault) {
            this.browserEvent.preventDefault();
        }
    };
    StandardMouseEvent.prototype.stopPropagation = function () {
        if (this.browserEvent.stopPropagation) {
            this.browserEvent.stopPropagation();
        }
    };
    return StandardMouseEvent;
}();

var DragMouseEvent = /** @class */function (_super) {
    __extends(DragMouseEvent, _super);
    function DragMouseEvent(e) {
        var _this = _super.call(this, e) || this;
        _this.dataTransfer = e.dataTransfer;
        return _this;
    }
    return DragMouseEvent;
}(StandardMouseEvent);

var StandardWheelEvent = /** @class */function () {
    function StandardWheelEvent(e, deltaX, deltaY) {
        if (deltaX === void 0) {deltaX = 0;}
        if (deltaY === void 0) {deltaY = 0;}
        this.browserEvent = e || null;
        this.target = e ? e.target || e.targetNode || e.srcElement : null;
        this.deltaY = deltaY;
        this.deltaX = deltaX;
        if (e) {
            var e1 = e;
            var e2 = e;
            // vertical delta scroll
            if (typeof e1.wheelDeltaY !== 'undefined') {
                this.deltaY = e1.wheelDeltaY / 120;
            } else
            if (typeof e2.VERTICAL_AXIS !== 'undefined' && e2.axis === e2.VERTICAL_AXIS) {
                this.deltaY = -e2.detail / 3;
            }
            // horizontal delta scroll
            if (typeof e1.wheelDeltaX !== 'undefined') {
                if (__WEBPACK_IMPORTED_MODULE_0__browser_js__["l" /* isSafari */] && __WEBPACK_IMPORTED_MODULE_2__common_platform_js__["g" /* isWindows */]) {
                    this.deltaX = -(e1.wheelDeltaX / 120);
                } else
                {
                    this.deltaX = e1.wheelDeltaX / 120;
                }
            } else
            if (typeof e2.HORIZONTAL_AXIS !== 'undefined' && e2.axis === e2.HORIZONTAL_AXIS) {
                this.deltaX = -e.detail / 3;
            }
            // Assume a vertical scroll if nothing else worked
            if (this.deltaY === 0 && this.deltaX === 0 && e.wheelDelta) {
                this.deltaY = e.wheelDelta / 120;
            }
        }
    }
    StandardWheelEvent.prototype.preventDefault = function () {
        if (this.browserEvent) {
            if (this.browserEvent.preventDefault) {
                this.browserEvent.preventDefault();
            }
        }
    };
    StandardWheelEvent.prototype.stopPropagation = function () {
        if (this.browserEvent) {
            if (this.browserEvent.stopPropagation) {
                this.browserEvent.stopPropagation();
            }
        }
    };
    return StandardWheelEvent;
}();


/***/ }),

/***/ 3556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return KeyCodeUtils; });
/* harmony export (immutable) */ __webpack_exports__["a"] = KeyChord;
/* harmony export (immutable) */ __webpack_exports__["f"] = createKeybinding;
/* unused harmony export createSimpleKeybinding */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SimpleKeybinding; });
/* unused harmony export ChordKeybinding */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ResolvedKeybindingPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ResolvedKeybinding; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors_js__ = __webpack_require__(3493);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var KeyCodeStrMap = /** @class */function () {
    function KeyCodeStrMap() {
        this._keyCodeToStr = [];
        this._strToKeyCode = Object.create(null);
    }
    KeyCodeStrMap.prototype.define = function (keyCode, str) {
        this._keyCodeToStr[keyCode] = str;
        this._strToKeyCode[str.toLowerCase()] = keyCode;
    };
    KeyCodeStrMap.prototype.keyCodeToStr = function (keyCode) {
        return this._keyCodeToStr[keyCode];
    };
    KeyCodeStrMap.prototype.strToKeyCode = function (str) {
        return this._strToKeyCode[str.toLowerCase()] || 0 /* Unknown */;
    };
    return KeyCodeStrMap;
}();
var uiMap = new KeyCodeStrMap();
var userSettingsUSMap = new KeyCodeStrMap();
var userSettingsGeneralMap = new KeyCodeStrMap();
(function () {
    function define(keyCode, uiLabel, usUserSettingsLabel, generalUserSettingsLabel) {
        if (usUserSettingsLabel === void 0) {usUserSettingsLabel = uiLabel;}
        if (generalUserSettingsLabel === void 0) {generalUserSettingsLabel = usUserSettingsLabel;}
        uiMap.define(keyCode, uiLabel);
        userSettingsUSMap.define(keyCode, usUserSettingsLabel);
        userSettingsGeneralMap.define(keyCode, generalUserSettingsLabel);
    }
    define(0 /* Unknown */, 'unknown');
    define(1 /* Backspace */, 'Backspace');
    define(2 /* Tab */, 'Tab');
    define(3 /* Enter */, 'Enter');
    define(4 /* Shift */, 'Shift');
    define(5 /* Ctrl */, 'Ctrl');
    define(6 /* Alt */, 'Alt');
    define(7 /* PauseBreak */, 'PauseBreak');
    define(8 /* CapsLock */, 'CapsLock');
    define(9 /* Escape */, 'Escape');
    define(10 /* Space */, 'Space');
    define(11 /* PageUp */, 'PageUp');
    define(12 /* PageDown */, 'PageDown');
    define(13 /* End */, 'End');
    define(14 /* Home */, 'Home');
    define(15 /* LeftArrow */, 'LeftArrow', 'Left');
    define(16 /* UpArrow */, 'UpArrow', 'Up');
    define(17 /* RightArrow */, 'RightArrow', 'Right');
    define(18 /* DownArrow */, 'DownArrow', 'Down');
    define(19 /* Insert */, 'Insert');
    define(20 /* Delete */, 'Delete');
    define(21 /* KEY_0 */, '0');
    define(22 /* KEY_1 */, '1');
    define(23 /* KEY_2 */, '2');
    define(24 /* KEY_3 */, '3');
    define(25 /* KEY_4 */, '4');
    define(26 /* KEY_5 */, '5');
    define(27 /* KEY_6 */, '6');
    define(28 /* KEY_7 */, '7');
    define(29 /* KEY_8 */, '8');
    define(30 /* KEY_9 */, '9');
    define(31 /* KEY_A */, 'A');
    define(32 /* KEY_B */, 'B');
    define(33 /* KEY_C */, 'C');
    define(34 /* KEY_D */, 'D');
    define(35 /* KEY_E */, 'E');
    define(36 /* KEY_F */, 'F');
    define(37 /* KEY_G */, 'G');
    define(38 /* KEY_H */, 'H');
    define(39 /* KEY_I */, 'I');
    define(40 /* KEY_J */, 'J');
    define(41 /* KEY_K */, 'K');
    define(42 /* KEY_L */, 'L');
    define(43 /* KEY_M */, 'M');
    define(44 /* KEY_N */, 'N');
    define(45 /* KEY_O */, 'O');
    define(46 /* KEY_P */, 'P');
    define(47 /* KEY_Q */, 'Q');
    define(48 /* KEY_R */, 'R');
    define(49 /* KEY_S */, 'S');
    define(50 /* KEY_T */, 'T');
    define(51 /* KEY_U */, 'U');
    define(52 /* KEY_V */, 'V');
    define(53 /* KEY_W */, 'W');
    define(54 /* KEY_X */, 'X');
    define(55 /* KEY_Y */, 'Y');
    define(56 /* KEY_Z */, 'Z');
    define(57 /* Meta */, 'Meta');
    define(58 /* ContextMenu */, 'ContextMenu');
    define(59 /* F1 */, 'F1');
    define(60 /* F2 */, 'F2');
    define(61 /* F3 */, 'F3');
    define(62 /* F4 */, 'F4');
    define(63 /* F5 */, 'F5');
    define(64 /* F6 */, 'F6');
    define(65 /* F7 */, 'F7');
    define(66 /* F8 */, 'F8');
    define(67 /* F9 */, 'F9');
    define(68 /* F10 */, 'F10');
    define(69 /* F11 */, 'F11');
    define(70 /* F12 */, 'F12');
    define(71 /* F13 */, 'F13');
    define(72 /* F14 */, 'F14');
    define(73 /* F15 */, 'F15');
    define(74 /* F16 */, 'F16');
    define(75 /* F17 */, 'F17');
    define(76 /* F18 */, 'F18');
    define(77 /* F19 */, 'F19');
    define(78 /* NumLock */, 'NumLock');
    define(79 /* ScrollLock */, 'ScrollLock');
    define(80 /* US_SEMICOLON */, ';', ';', 'OEM_1');
    define(81 /* US_EQUAL */, '=', '=', 'OEM_PLUS');
    define(82 /* US_COMMA */, ',', ',', 'OEM_COMMA');
    define(83 /* US_MINUS */, '-', '-', 'OEM_MINUS');
    define(84 /* US_DOT */, '.', '.', 'OEM_PERIOD');
    define(85 /* US_SLASH */, '/', '/', 'OEM_2');
    define(86 /* US_BACKTICK */, '`', '`', 'OEM_3');
    define(110 /* ABNT_C1 */, 'ABNT_C1');
    define(111 /* ABNT_C2 */, 'ABNT_C2');
    define(87 /* US_OPEN_SQUARE_BRACKET */, '[', '[', 'OEM_4');
    define(88 /* US_BACKSLASH */, '\\', '\\', 'OEM_5');
    define(89 /* US_CLOSE_SQUARE_BRACKET */, ']', ']', 'OEM_6');
    define(90 /* US_QUOTE */, '\'', '\'', 'OEM_7');
    define(91 /* OEM_8 */, 'OEM_8');
    define(92 /* OEM_102 */, 'OEM_102');
    define(93 /* NUMPAD_0 */, 'NumPad0');
    define(94 /* NUMPAD_1 */, 'NumPad1');
    define(95 /* NUMPAD_2 */, 'NumPad2');
    define(96 /* NUMPAD_3 */, 'NumPad3');
    define(97 /* NUMPAD_4 */, 'NumPad4');
    define(98 /* NUMPAD_5 */, 'NumPad5');
    define(99 /* NUMPAD_6 */, 'NumPad6');
    define(100 /* NUMPAD_7 */, 'NumPad7');
    define(101 /* NUMPAD_8 */, 'NumPad8');
    define(102 /* NUMPAD_9 */, 'NumPad9');
    define(103 /* NUMPAD_MULTIPLY */, 'NumPad_Multiply');
    define(104 /* NUMPAD_ADD */, 'NumPad_Add');
    define(105 /* NUMPAD_SEPARATOR */, 'NumPad_Separator');
    define(106 /* NUMPAD_SUBTRACT */, 'NumPad_Subtract');
    define(107 /* NUMPAD_DECIMAL */, 'NumPad_Decimal');
    define(108 /* NUMPAD_DIVIDE */, 'NumPad_Divide');
})();
var KeyCodeUtils;
(function (KeyCodeUtils) {
    function toString(keyCode) {
        return uiMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils.toString = toString;
    function fromString(key) {
        return uiMap.strToKeyCode(key);
    }
    KeyCodeUtils.fromString = fromString;
    function toUserSettingsUS(keyCode) {
        return userSettingsUSMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils.toUserSettingsUS = toUserSettingsUS;
    function toUserSettingsGeneral(keyCode) {
        return userSettingsGeneralMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils.toUserSettingsGeneral = toUserSettingsGeneral;
    function fromUserSettings(key) {
        return userSettingsUSMap.strToKeyCode(key) || userSettingsGeneralMap.strToKeyCode(key);
    }
    KeyCodeUtils.fromUserSettings = fromUserSettings;
})(KeyCodeUtils || (KeyCodeUtils = {}));
function KeyChord(firstPart, secondPart) {
    var chordPart = (secondPart & 0x0000FFFF) << 16 >>> 0;
    return (firstPart | chordPart) >>> 0;
}
function createKeybinding(keybinding, OS) {
    if (keybinding === 0) {
        return null;
    }
    var firstPart = (keybinding & 0x0000FFFF) >>> 0;
    var chordPart = (keybinding & 0xFFFF0000) >>> 16;
    if (chordPart !== 0) {
        return new ChordKeybinding([
        createSimpleKeybinding(firstPart, OS),
        createSimpleKeybinding(chordPart, OS)]);

    }
    return new ChordKeybinding([createSimpleKeybinding(firstPart, OS)]);
}
function createSimpleKeybinding(keybinding, OS) {
    var ctrlCmd = keybinding & 2048 /* CtrlCmd */ ? true : false;
    var winCtrl = keybinding & 256 /* WinCtrl */ ? true : false;
    var ctrlKey = OS === 2 /* Macintosh */ ? winCtrl : ctrlCmd;
    var shiftKey = keybinding & 1024 /* Shift */ ? true : false;
    var altKey = keybinding & 512 /* Alt */ ? true : false;
    var metaKey = OS === 2 /* Macintosh */ ? ctrlCmd : winCtrl;
    var keyCode = keybinding & 255 /* KeyCode */;
    return new SimpleKeybinding(ctrlKey, shiftKey, altKey, metaKey, keyCode);
}
var SimpleKeybinding = /** @class */function () {
    function SimpleKeybinding(ctrlKey, shiftKey, altKey, metaKey, keyCode) {
        this.ctrlKey = ctrlKey;
        this.shiftKey = shiftKey;
        this.altKey = altKey;
        this.metaKey = metaKey;
        this.keyCode = keyCode;
    }
    SimpleKeybinding.prototype.equals = function (other) {
        return this.ctrlKey === other.ctrlKey &&
        this.shiftKey === other.shiftKey &&
        this.altKey === other.altKey &&
        this.metaKey === other.metaKey &&
        this.keyCode === other.keyCode;
    };
    SimpleKeybinding.prototype.isModifierKey = function () {
        return this.keyCode === 0 /* Unknown */ ||
        this.keyCode === 5 /* Ctrl */ ||
        this.keyCode === 57 /* Meta */ ||
        this.keyCode === 6 /* Alt */ ||
        this.keyCode === 4 /* Shift */;
    };
    SimpleKeybinding.prototype.toChord = function () {
        return new ChordKeybinding([this]);
    };
    /**
        * Does this keybinding refer to the key code of a modifier and it also has the modifier flag?
        */
    SimpleKeybinding.prototype.isDuplicateModifierCase = function () {
        return this.ctrlKey && this.keyCode === 5 /* Ctrl */ ||
        this.shiftKey && this.keyCode === 4 /* Shift */ ||
        this.altKey && this.keyCode === 6 /* Alt */ ||
        this.metaKey && this.keyCode === 57 /* Meta */;
    };
    return SimpleKeybinding;
}();

var ChordKeybinding = /** @class */function () {
    function ChordKeybinding(parts) {
        if (parts.length === 0) {
            throw Object(__WEBPACK_IMPORTED_MODULE_0__errors_js__["b" /* illegalArgument */])("parts");
        }
        this.parts = parts;
    }
    ChordKeybinding.prototype.equals = function (other) {
        if (other === null) {
            return false;
        }
        if (this.parts.length !== other.parts.length) {
            return false;
        }
        for (var i = 0; i < this.parts.length; i++) {
            if (!this.parts[i].equals(other.parts[i])) {
                return false;
            }
        }
        return true;
    };
    return ChordKeybinding;
}();

var ResolvedKeybindingPart = /** @class */function () {
    function ResolvedKeybindingPart(ctrlKey, shiftKey, altKey, metaKey, kbLabel, kbAriaLabel) {
        this.ctrlKey = ctrlKey;
        this.shiftKey = shiftKey;
        this.altKey = altKey;
        this.metaKey = metaKey;
        this.keyLabel = kbLabel;
        this.keyAriaLabel = kbAriaLabel;
    }
    return ResolvedKeybindingPart;
}();

/**
                                    * A resolved keybinding. Can be a simple keybinding or a chord keybinding.
                                    */
var ResolvedKeybinding = /** @class */function () {
    function ResolvedKeybinding() {
    }
    return ResolvedKeybinding;
}();


/***/ }),

/***/ 3560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoResultFound; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
let

NoResultFound = class NoResultFound extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'no-result' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'no-result-image-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'no-result-image' })),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'label' }, 'Nothing here, Houston!'),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'subtext' }, 'We couldn\'t find anything matching that. Check the spelling or try using a different query.')));


  }};

/***/ }),

/***/ 3565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancellationToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CancellationTokenSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_js__ = __webpack_require__(3481);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var shortcutEvent = Object.freeze(function (callback, context) {
    var handle = setTimeout(callback.bind(context), 0);
    return { dispose: function () {clearTimeout(handle);} };
});
var CancellationToken;
(function (CancellationToken) {
    function isCancellationToken(thing) {
        if (thing === CancellationToken.None || thing === CancellationToken.Cancelled) {
            return true;
        }
        if (thing instanceof MutableToken) {
            return true;
        }
        if (!thing || typeof thing !== 'object') {
            return false;
        }
        return typeof thing.isCancellationRequested === 'boolean' &&
        typeof thing.onCancellationRequested === 'function';
    }
    CancellationToken.isCancellationToken = isCancellationToken;
    CancellationToken.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: __WEBPACK_IMPORTED_MODULE_0__event_js__["b" /* Event */].None });

    CancellationToken.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: shortcutEvent });

})(CancellationToken || (CancellationToken = {}));
var MutableToken = /** @class */function () {
    function MutableToken() {
        this._isCancelled = false;
        this._emitter = null;
    }
    MutableToken.prototype.cancel = function () {
        if (!this._isCancelled) {
            this._isCancelled = true;
            if (this._emitter) {
                this._emitter.fire(undefined);
                this.dispose();
            }
        }
    };
    Object.defineProperty(MutableToken.prototype, "isCancellationRequested", {
        get: function () {
            return this._isCancelled;
        },
        enumerable: true,
        configurable: true });

    Object.defineProperty(MutableToken.prototype, "onCancellationRequested", {
        get: function () {
            if (this._isCancelled) {
                return shortcutEvent;
            }
            if (!this._emitter) {
                this._emitter = new __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* Emitter */]();
            }
            return this._emitter.event;
        },
        enumerable: true,
        configurable: true });

    MutableToken.prototype.dispose = function () {
        if (this._emitter) {
            this._emitter.dispose();
            this._emitter = null;
        }
    };
    return MutableToken;
}();
var CancellationTokenSource = /** @class */function () {
    function CancellationTokenSource(parent) {
        this._token = undefined;
        this._parentListener = undefined;
        this._parentListener = parent && parent.onCancellationRequested(this.cancel, this);
    }
    Object.defineProperty(CancellationTokenSource.prototype, "token", {
        get: function () {
            if (!this._token) {
                // be lazy and create the token only when
                // actually needed
                this._token = new MutableToken();
            }
            return this._token;
        },
        enumerable: true,
        configurable: true });

    CancellationTokenSource.prototype.cancel = function () {
        if (!this._token) {
            // save an object by returning the default
            // cancelled token when cancellation happens
            // before someone asks for the token
            this._token = CancellationToken.Cancelled;
        } else
        if (this._token instanceof MutableToken) {
            // actually cancel
            this._token.cancel();
        }
    };
    CancellationTokenSource.prototype.dispose = function () {
        if (this._parentListener) {
            this._parentListener.dispose();
        }
        if (!this._token) {
            // ensure to initialize with an empty token if we had none
            this._token = CancellationToken.None;
        } else
        if (this._token instanceof MutableToken) {
            // actually dispose
            this._token.dispose();
        }
    };
    return CancellationTokenSource;
}();


/***/ }),

/***/ 3566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IModelService; });
/* harmony export (immutable) */ __webpack_exports__["b"] = shouldSynchronizeModel;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_instantiation_common_instantiation_js__ = __webpack_require__(3485);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var IModelService = Object(__WEBPACK_IMPORTED_MODULE_0__platform_instantiation_common_instantiation_js__["c" /* createDecorator */])('modelService');
function shouldSynchronizeModel(model) {
  return !model.isTooLargeForSyncing() && !model.isForSimpleWidget;
}

/***/ }),

/***/ 3569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandardKeyboardEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browser_js__ = __webpack_require__(3515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_keyCodes_js__ = __webpack_require__(3556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_platform_js__ = __webpack_require__(3488);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



var KEY_CODE_MAP = new Array(230);
var INVERSE_KEY_CODE_MAP = new Array(112 /* MAX_VALUE */);
(function () {
    for (var i = 0; i < INVERSE_KEY_CODE_MAP.length; i++) {
        INVERSE_KEY_CODE_MAP[i] = -1;
    }
    function define(code, keyCode) {
        KEY_CODE_MAP[code] = keyCode;
        INVERSE_KEY_CODE_MAP[keyCode] = code;
    }
    define(3, 7 /* PauseBreak */); // VK_CANCEL 0x03 Control-break processing
    define(8, 1 /* Backspace */);
    define(9, 2 /* Tab */);
    define(13, 3 /* Enter */);
    define(16, 4 /* Shift */);
    define(17, 5 /* Ctrl */);
    define(18, 6 /* Alt */);
    define(19, 7 /* PauseBreak */);
    define(20, 8 /* CapsLock */);
    define(27, 9 /* Escape */);
    define(32, 10 /* Space */);
    define(33, 11 /* PageUp */);
    define(34, 12 /* PageDown */);
    define(35, 13 /* End */);
    define(36, 14 /* Home */);
    define(37, 15 /* LeftArrow */);
    define(38, 16 /* UpArrow */);
    define(39, 17 /* RightArrow */);
    define(40, 18 /* DownArrow */);
    define(45, 19 /* Insert */);
    define(46, 20 /* Delete */);
    define(48, 21 /* KEY_0 */);
    define(49, 22 /* KEY_1 */);
    define(50, 23 /* KEY_2 */);
    define(51, 24 /* KEY_3 */);
    define(52, 25 /* KEY_4 */);
    define(53, 26 /* KEY_5 */);
    define(54, 27 /* KEY_6 */);
    define(55, 28 /* KEY_7 */);
    define(56, 29 /* KEY_8 */);
    define(57, 30 /* KEY_9 */);
    define(65, 31 /* KEY_A */);
    define(66, 32 /* KEY_B */);
    define(67, 33 /* KEY_C */);
    define(68, 34 /* KEY_D */);
    define(69, 35 /* KEY_E */);
    define(70, 36 /* KEY_F */);
    define(71, 37 /* KEY_G */);
    define(72, 38 /* KEY_H */);
    define(73, 39 /* KEY_I */);
    define(74, 40 /* KEY_J */);
    define(75, 41 /* KEY_K */);
    define(76, 42 /* KEY_L */);
    define(77, 43 /* KEY_M */);
    define(78, 44 /* KEY_N */);
    define(79, 45 /* KEY_O */);
    define(80, 46 /* KEY_P */);
    define(81, 47 /* KEY_Q */);
    define(82, 48 /* KEY_R */);
    define(83, 49 /* KEY_S */);
    define(84, 50 /* KEY_T */);
    define(85, 51 /* KEY_U */);
    define(86, 52 /* KEY_V */);
    define(87, 53 /* KEY_W */);
    define(88, 54 /* KEY_X */);
    define(89, 55 /* KEY_Y */);
    define(90, 56 /* KEY_Z */);
    define(93, 58 /* ContextMenu */);
    define(96, 93 /* NUMPAD_0 */);
    define(97, 94 /* NUMPAD_1 */);
    define(98, 95 /* NUMPAD_2 */);
    define(99, 96 /* NUMPAD_3 */);
    define(100, 97 /* NUMPAD_4 */);
    define(101, 98 /* NUMPAD_5 */);
    define(102, 99 /* NUMPAD_6 */);
    define(103, 100 /* NUMPAD_7 */);
    define(104, 101 /* NUMPAD_8 */);
    define(105, 102 /* NUMPAD_9 */);
    define(106, 103 /* NUMPAD_MULTIPLY */);
    define(107, 104 /* NUMPAD_ADD */);
    define(108, 105 /* NUMPAD_SEPARATOR */);
    define(109, 106 /* NUMPAD_SUBTRACT */);
    define(110, 107 /* NUMPAD_DECIMAL */);
    define(111, 108 /* NUMPAD_DIVIDE */);
    define(112, 59 /* F1 */);
    define(113, 60 /* F2 */);
    define(114, 61 /* F3 */);
    define(115, 62 /* F4 */);
    define(116, 63 /* F5 */);
    define(117, 64 /* F6 */);
    define(118, 65 /* F7 */);
    define(119, 66 /* F8 */);
    define(120, 67 /* F9 */);
    define(121, 68 /* F10 */);
    define(122, 69 /* F11 */);
    define(123, 70 /* F12 */);
    define(124, 71 /* F13 */);
    define(125, 72 /* F14 */);
    define(126, 73 /* F15 */);
    define(127, 74 /* F16 */);
    define(128, 75 /* F17 */);
    define(129, 76 /* F18 */);
    define(130, 77 /* F19 */);
    define(144, 78 /* NumLock */);
    define(145, 79 /* ScrollLock */);
    define(186, 80 /* US_SEMICOLON */);
    define(187, 81 /* US_EQUAL */);
    define(188, 82 /* US_COMMA */);
    define(189, 83 /* US_MINUS */);
    define(190, 84 /* US_DOT */);
    define(191, 85 /* US_SLASH */);
    define(192, 86 /* US_BACKTICK */);
    define(193, 110 /* ABNT_C1 */);
    define(194, 111 /* ABNT_C2 */);
    define(219, 87 /* US_OPEN_SQUARE_BRACKET */);
    define(220, 88 /* US_BACKSLASH */);
    define(221, 89 /* US_CLOSE_SQUARE_BRACKET */);
    define(222, 90 /* US_QUOTE */);
    define(223, 91 /* OEM_8 */);
    define(226, 92 /* OEM_102 */);
    /**
                                    * https://lists.w3.org/Archives/Public/www-dom/2010JulSep/att-0182/keyCode-spec.html
                                    * If an Input Method Editor is processing key input and the event is keydown, return 229.
                                    */
    define(229, 109 /* KEY_IN_COMPOSITION */);
    if (__WEBPACK_IMPORTED_MODULE_0__browser_js__["j" /* isIE */]) {
        define(91, 57 /* Meta */);
    } else
    if (__WEBPACK_IMPORTED_MODULE_0__browser_js__["i" /* isFirefox */]) {
        define(59, 80 /* US_SEMICOLON */);
        define(107, 81 /* US_EQUAL */);
        define(109, 83 /* US_MINUS */);
        if (__WEBPACK_IMPORTED_MODULE_2__common_platform_js__["d" /* isMacintosh */]) {
            define(224, 57 /* Meta */);
        }
    } else
    if (__WEBPACK_IMPORTED_MODULE_0__browser_js__["m" /* isWebKit */]) {
        define(91, 57 /* Meta */);
        if (__WEBPACK_IMPORTED_MODULE_2__common_platform_js__["d" /* isMacintosh */]) {
            // the two meta keys in the Mac have different key codes (91 and 93)
            define(93, 57 /* Meta */);
        } else
        {
            define(92, 57 /* Meta */);
        }
    }
})();
function extractKeyCode(e) {
    if (e.charCode) {
        // "keypress" events mostly
        var char = String.fromCharCode(e.charCode).toUpperCase();
        return __WEBPACK_IMPORTED_MODULE_1__common_keyCodes_js__["b" /* KeyCodeUtils */].fromString(char);
    }
    return KEY_CODE_MAP[e.keyCode] || 0 /* Unknown */;
}
var ctrlKeyMod = __WEBPACK_IMPORTED_MODULE_2__common_platform_js__["d" /* isMacintosh */] ? 256 /* WinCtrl */ : 2048 /* CtrlCmd */;
var altKeyMod = 512 /* Alt */;
var shiftKeyMod = 1024 /* Shift */;
var metaKeyMod = __WEBPACK_IMPORTED_MODULE_2__common_platform_js__["d" /* isMacintosh */] ? 2048 /* CtrlCmd */ : 256 /* WinCtrl */;
var StandardKeyboardEvent = /** @class */function () {
    function StandardKeyboardEvent(source) {
        this._standardKeyboardEventBrand = true;
        var e = source;
        this.browserEvent = e;
        this.target = e.target;
        this.ctrlKey = e.ctrlKey;
        this.shiftKey = e.shiftKey;
        this.altKey = e.altKey;
        this.metaKey = e.metaKey;
        this.keyCode = extractKeyCode(e);
        this.code = e.code;
        // console.info(e.type + ": keyCode: " + e.keyCode + ", which: " + e.which + ", charCode: " + e.charCode + ", detail: " + e.detail + " ====> " + this.keyCode + ' -- ' + KeyCode[this.keyCode]);
        this.ctrlKey = this.ctrlKey || this.keyCode === 5 /* Ctrl */;
        this.altKey = this.altKey || this.keyCode === 6 /* Alt */;
        this.shiftKey = this.shiftKey || this.keyCode === 4 /* Shift */;
        this.metaKey = this.metaKey || this.keyCode === 57 /* Meta */;
        this._asKeybinding = this._computeKeybinding();
        this._asRuntimeKeybinding = this._computeRuntimeKeybinding();
        // console.log(`code: ${e.code}, keyCode: ${e.keyCode}, key: ${e.key}`);
    }
    StandardKeyboardEvent.prototype.preventDefault = function () {
        if (this.browserEvent && this.browserEvent.preventDefault) {
            this.browserEvent.preventDefault();
        }
    };
    StandardKeyboardEvent.prototype.stopPropagation = function () {
        if (this.browserEvent && this.browserEvent.stopPropagation) {
            this.browserEvent.stopPropagation();
        }
    };
    StandardKeyboardEvent.prototype.toKeybinding = function () {
        return this._asRuntimeKeybinding;
    };
    StandardKeyboardEvent.prototype.equals = function (other) {
        return this._asKeybinding === other;
    };
    StandardKeyboardEvent.prototype._computeKeybinding = function () {
        var key = 0 /* Unknown */;
        if (this.keyCode !== 5 /* Ctrl */ && this.keyCode !== 4 /* Shift */ && this.keyCode !== 6 /* Alt */ && this.keyCode !== 57 /* Meta */) {
                key = this.keyCode;
            }
        var result = 0;
        if (this.ctrlKey) {
            result |= ctrlKeyMod;
        }
        if (this.altKey) {
            result |= altKeyMod;
        }
        if (this.shiftKey) {
            result |= shiftKeyMod;
        }
        if (this.metaKey) {
            result |= metaKeyMod;
        }
        result |= key;
        return result;
    };
    StandardKeyboardEvent.prototype._computeRuntimeKeybinding = function () {
        var key = 0 /* Unknown */;
        if (this.keyCode !== 5 /* Ctrl */ && this.keyCode !== 4 /* Shift */ && this.keyCode !== 6 /* Alt */ && this.keyCode !== 57 /* Meta */) {
                key = this.keyCode;
            }
        return new __WEBPACK_IMPORTED_MODULE_1__common_keyCodes_js__["e" /* SimpleKeybinding */](this.ctrlKey, this.shiftKey, this.altKey, this.metaKey, key);
    };
    return StandardKeyboardEvent;
}();


/***/ }),

/***/ 3570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = isThemeColor;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Handler; });
/**
 * @internal
 */
function isThemeColor(o) {
    return o && typeof o.id === 'string';
}
/**
   * The type of the `IEditor`.
   */
var EditorType = {
    ICodeEditor: 'vs.editor.ICodeEditor',
    IDiffEditor: 'vs.editor.IDiffEditor' };

/**
                                             * Built-in commands.
                                             * @internal
                                             */
var Handler = {
    ExecuteCommand: 'executeCommand',
    ExecuteCommands: 'executeCommands',
    Type: 'type',
    ReplacePreviousChar: 'replacePreviousChar',
    CompositionStart: 'compositionStart',
    CompositionEnd: 'compositionEnd',
    Paste: 'paste',
    Cut: 'cut',
    Undo: 'undo',
    Redo: 'redo' };

/***/ }),

/***/ 3573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports.default = /*istanbul ignore end*/Diff;
function Diff() {}

Diff.prototype = { /*istanbul ignore start*/
  /*istanbul ignore end*/diff: function diff(oldString, newString) {
    /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var callback = options.callback;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    this.options = options;

    var self = this;

    function done(value) {
      if (callback) {
        setTimeout(function () {
          callback(undefined, value);
        }, 0);
        return true;
      } else {
        return value;
      }
    }

    // Allow subclasses to massage the input prior to running
    oldString = this.castInput(oldString);
    newString = this.castInput(newString);

    oldString = this.removeEmpty(this.tokenize(oldString));
    newString = this.removeEmpty(this.tokenize(newString));

    var newLen = newString.length,
        oldLen = oldString.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;
    var bestPath = [{ newPos: -1, components: [] }];

    // Seed editLength = 0, i.e. the content starts with the same values
    var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
    if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
      // Identity per the equality and tokenizer
      return done([{ value: newString.join(''), count: newString.length }]);
    }

    // Main worker method. checks all permutations of a given edit length for acceptance.
    function execEditLength() {
      for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
        var basePath = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
        var addPath = bestPath[diagonalPath - 1],
            removePath = bestPath[diagonalPath + 1],
            _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
        if (addPath) {
          // No one else is going to attempt to use this value, clear it
          bestPath[diagonalPath - 1] = undefined;
        }

        var canAdd = addPath && addPath.newPos + 1 < newLen,
            canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;
        if (!canAdd && !canRemove) {
          // If this path is a terminal then prune
          bestPath[diagonalPath] = undefined;
          continue;
        }

        // Select the diagonal that we want to branch from. We select the prior
        // path whose position in the new string is the farthest from the origin
        // and does not pass the bounds of the diff graph
        if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
          basePath = clonePath(removePath);
          self.pushComponent(basePath.components, undefined, true);
        } else {
          basePath = addPath; // No need to clone, we've pulled it from the list
          basePath.newPos++;
          self.pushComponent(basePath.components, true, undefined);
        }

        _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath);

        // If we have hit the end of both strings, then we are done
        if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
          return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
        } else {
          // Otherwise track this path as a potential candidate and continue.
          bestPath[diagonalPath] = basePath;
        }
      }

      editLength++;
    }

    // Performs the length of edit iteration. Is a bit fugly as this has to support the
    // sync and async mode which is never fun. Loops over execEditLength until a value
    // is produced.
    if (callback) {
      (function exec() {
        setTimeout(function () {
          // This should not happen, but we want to be safe.
          /* istanbul ignore next */
          if (editLength > maxEditLength) {
            return callback();
          }

          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength) {
        var ret = execEditLength();
        if (ret) {
          return ret;
        }
      }
    }
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/pushComponent: function pushComponent(components, added, removed) {
    var last = components[components.length - 1];
    if (last && last.added === added && last.removed === removed) {
      // We need to clone here as the component clone operation is just
      // as shallow array clone
      components[components.length - 1] = { count: last.count + 1, added: added, removed: removed };
    } else {
      components.push({ count: 1, added: added, removed: removed });
    }
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
    var newLen = newString.length,
        oldLen = oldString.length,
        newPos = basePath.newPos,
        oldPos = newPos - diagonalPath,
        commonCount = 0;
    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
      newPos++;
      oldPos++;
      commonCount++;
    }

    if (commonCount) {
      basePath.components.push({ count: commonCount });
    }

    basePath.newPos = newPos;
    return oldPos;
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/equals: function equals(left, right) {
    return left === right;
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/removeEmpty: function removeEmpty(array) {
    var ret = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }
    return ret;
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/castInput: function castInput(value) {
    return value;
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/tokenize: function tokenize(value) {
    return value.split('');
  }
};

function buildValues(diff, components, newString, oldString, useLongestToken) {
  var componentPos = 0,
      componentLen = components.length,
      newPos = 0,
      oldPos = 0;

  for (; componentPos < componentLen; componentPos++) {
    var component = components[componentPos];
    if (!component.removed) {
      if (!component.added && useLongestToken) {
        var value = newString.slice(newPos, newPos + component.count);
        value = value.map(function (value, i) {
          var oldValue = oldString[oldPos + i];
          return oldValue.length > value.length ? oldValue : value;
        });

        component.value = value.join('');
      } else {
        component.value = newString.slice(newPos, newPos + component.count).join('');
      }
      newPos += component.count;

      // Common case
      if (!component.added) {
        oldPos += component.count;
      }
    } else {
      component.value = oldString.slice(oldPos, oldPos + component.count).join('');
      oldPos += component.count;

      // Reverse add and remove so removes are output first to match common convention
      // The diffing algorithm is tied to add then remove output and this is the simplest
      // route to get the desired output with minimal overhead.
      if (componentPos && components[componentPos - 1].added) {
        var tmp = components[componentPos - 1];
        components[componentPos - 1] = components[componentPos];
        components[componentPos] = tmp;
      }
    }
  }

  // Special case handle for when one terminal is ignored. For this case we merge the
  // terminal into the prior string and drop the change.
  var lastComponent = components[componentLen - 1];
  if (componentLen > 1 && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
    components[componentLen - 2].value += lastComponent.value;
    components.pop();
  }

  return components;
}

function clonePath(path) {
  return { newPos: path.newPos, components: path.components.slice(0) };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3lDQUF3QjtBQUFULFNBQVMsSUFBVCxHQUFnQixFQUFoQjs7QUFFZixLQUFLLFNBQUwsR0FBaUI7eUJBQ2Ysb0JBQUssV0FBVyxXQUF5Qjt3REFBZCxnRUFBVSxrQkFBSTs7QUFDdkMsUUFBSSxXQUFXLFFBQVEsUUFBUixDQUR3QjtBQUV2QyxRQUFJLE9BQU8sT0FBUCxLQUFtQixVQUFuQixFQUErQjtBQUNqQyxpQkFBVyxPQUFYLENBRGlDO0FBRWpDLGdCQUFVLEVBQVYsQ0FGaUM7S0FBbkM7QUFJQSxTQUFLLE9BQUwsR0FBZSxPQUFmLENBTnVDOztBQVF2QyxRQUFJLE9BQU8sSUFBUCxDQVJtQzs7QUFVdkMsYUFBUyxJQUFULENBQWMsS0FBZCxFQUFxQjtBQUNuQixVQUFJLFFBQUosRUFBYztBQUNaLG1CQUFXLFlBQVc7QUFBRSxtQkFBUyxTQUFULEVBQW9CLEtBQXBCLEVBQUY7U0FBWCxFQUE0QyxDQUF2RCxFQURZO0FBRVosZUFBTyxJQUFQLENBRlk7T0FBZCxNQUdPO0FBQ0wsZUFBTyxLQUFQLENBREs7T0FIUDtLQURGOzs7QUFWdUMsYUFvQnZDLEdBQVksS0FBSyxTQUFMLENBQWUsU0FBZixDQUFaLENBcEJ1QztBQXFCdkMsZ0JBQVksS0FBSyxTQUFMLENBQWUsU0FBZixDQUFaLENBckJ1Qzs7QUF1QnZDLGdCQUFZLEtBQUssV0FBTCxDQUFpQixLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQWpCLENBQVosQ0F2QnVDO0FBd0J2QyxnQkFBWSxLQUFLLFdBQUwsQ0FBaUIsS0FBSyxRQUFMLENBQWMsU0FBZCxDQUFqQixDQUFaLENBeEJ1Qzs7QUEwQnZDLFFBQUksU0FBUyxVQUFVLE1BQVY7UUFBa0IsU0FBUyxVQUFVLE1BQVYsQ0ExQkQ7QUEyQnZDLFFBQUksYUFBYSxDQUFiLENBM0JtQztBQTRCdkMsUUFBSSxnQkFBZ0IsU0FBUyxNQUFULENBNUJtQjtBQTZCdkMsUUFBSSxXQUFXLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBRCxFQUFJLFlBQVksRUFBWixFQUFmLENBQVg7OztBQTdCbUMsUUFnQ25DLFNBQVMsS0FBSyxhQUFMLENBQW1CLFNBQVMsQ0FBVCxDQUFuQixFQUFnQyxTQUFoQyxFQUEyQyxTQUEzQyxFQUFzRCxDQUF0RCxDQUFULENBaENtQztBQWlDdkMsUUFBSSxTQUFTLENBQVQsRUFBWSxNQUFaLEdBQXFCLENBQXJCLElBQTBCLE1BQTFCLElBQW9DLFNBQVMsQ0FBVCxJQUFjLE1BQWQsRUFBc0I7O0FBRTVELGFBQU8sS0FBSyxDQUFDLEVBQUMsT0FBTyxVQUFVLElBQVYsQ0FBZSxFQUFmLENBQVAsRUFBMkIsT0FBTyxVQUFVLE1BQVYsRUFBcEMsQ0FBTCxDQUFQLENBRjREO0tBQTlEOzs7QUFqQ3VDLGFBdUM5QixjQUFULEdBQTBCO0FBQ3hCLFdBQUssSUFBSSxlQUFlLENBQUMsQ0FBRCxHQUFLLFVBQUwsRUFBaUIsZ0JBQWdCLFVBQWhCLEVBQTRCLGdCQUFnQixDQUFoQixFQUFtQjtBQUN0RixZQUFJLGtFQUFKLENBRHNGO0FBRXRGLFlBQUksVUFBVSxTQUFTLGVBQWUsQ0FBZixDQUFuQjtZQUNBLGFBQWEsU0FBUyxlQUFlLENBQWYsQ0FBdEI7WUFDQSxVQUFTLENBQUMsYUFBYSxXQUFXLE1BQVgsR0FBb0IsQ0FBakMsQ0FBRCxHQUF1QyxZQUF2QyxDQUp5RTtBQUt0RixZQUFJLE9BQUosRUFBYTs7QUFFWCxtQkFBUyxlQUFlLENBQWYsQ0FBVCxHQUE2QixTQUE3QixDQUZXO1NBQWI7O0FBS0EsWUFBSSxTQUFTLFdBQVcsUUFBUSxNQUFSLEdBQWlCLENBQWpCLEdBQXFCLE1BQXJCO1lBQ3BCLFlBQVksY0FBYyxLQUFLLE9BQUwsSUFBZSxVQUFTLE1BQVQsQ0FYeUM7QUFZdEYsWUFBSSxDQUFDLE1BQUQsSUFBVyxDQUFDLFNBQUQsRUFBWTs7QUFFekIsbUJBQVMsWUFBVCxJQUF5QixTQUF6QixDQUZ5QjtBQUd6QixtQkFIeUI7U0FBM0I7Ozs7O0FBWnNGLFlBcUJsRixDQUFDLE1BQUQsSUFBWSxhQUFhLFFBQVEsTUFBUixHQUFpQixXQUFXLE1BQVgsRUFBb0I7QUFDaEUscUJBQVcsVUFBVSxVQUFWLENBQVgsQ0FEZ0U7QUFFaEUsZUFBSyxhQUFMLENBQW1CLFNBQVMsVUFBVCxFQUFxQixTQUF4QyxFQUFtRCxJQUFuRCxFQUZnRTtTQUFsRSxNQUdPO0FBQ0wscUJBQVcsT0FBWDtBQURLLGtCQUVMLENBQVMsTUFBVCxHQUZLO0FBR0wsZUFBSyxhQUFMLENBQW1CLFNBQVMsVUFBVCxFQUFxQixJQUF4QyxFQUE4QyxTQUE5QyxFQUhLO1NBSFA7O0FBU0Esa0JBQVMsS0FBSyxhQUFMLENBQW1CLFFBQW5CLEVBQTZCLFNBQTdCLEVBQXdDLFNBQXhDLEVBQW1ELFlBQW5ELENBQVQ7OztBQTlCc0YsWUFpQ2xGLFNBQVMsTUFBVCxHQUFrQixDQUFsQixJQUF1QixNQUF2QixJQUFpQyxVQUFTLENBQVQsSUFBYyxNQUFkLEVBQXNCO0FBQ3pELGlCQUFPLEtBQUssWUFBWSxJQUFaLEVBQWtCLFNBQVMsVUFBVCxFQUFxQixTQUF2QyxFQUFrRCxTQUFsRCxFQUE2RCxLQUFLLGVBQUwsQ0FBbEUsQ0FBUCxDQUR5RDtTQUEzRCxNQUVPOztBQUVMLG1CQUFTLFlBQVQsSUFBeUIsUUFBekIsQ0FGSztTQUZQO09BakNGOztBQXlDQSxtQkExQ3dCO0tBQTFCOzs7OztBQXZDdUMsUUF1Rm5DLFFBQUosRUFBYztBQUNaLE9BQUMsU0FBUyxJQUFULEdBQWdCO0FBQ2YsbUJBQVcsWUFBVzs7O0FBR3BCLGNBQUksYUFBYSxhQUFiLEVBQTRCO0FBQzlCLG1CQUFPLFVBQVAsQ0FEOEI7V0FBaEM7O0FBSUEsY0FBSSxDQUFDLGdCQUFELEVBQW1CO0FBQ3JCLG1CQURxQjtXQUF2QjtTQVBTLEVBVVIsQ0FWSCxFQURlO09BQWhCLEdBQUQsQ0FEWTtLQUFkLE1BY087QUFDTCxhQUFPLGNBQWMsYUFBZCxFQUE2QjtBQUNsQyxZQUFJLE1BQU0sZ0JBQU4sQ0FEOEI7QUFFbEMsWUFBSSxHQUFKLEVBQVM7QUFDUCxpQkFBTyxHQUFQLENBRE87U0FBVDtPQUZGO0tBZkY7R0F4RmE7bURBZ0hmLHNDQUFjLFlBQVksT0FBTyxTQUFTO0FBQ3hDLFFBQUksT0FBTyxXQUFXLFdBQVcsTUFBWCxHQUFvQixDQUFwQixDQUFsQixDQURvQztBQUV4QyxRQUFJLFFBQVEsS0FBSyxLQUFMLEtBQWUsS0FBZixJQUF3QixLQUFLLE9BQUwsS0FBaUIsT0FBakIsRUFBMEI7OztBQUc1RCxpQkFBVyxXQUFXLE1BQVgsR0FBb0IsQ0FBcEIsQ0FBWCxHQUFvQyxFQUFDLE9BQU8sS0FBSyxLQUFMLEdBQWEsQ0FBYixFQUFnQixPQUFPLEtBQVAsRUFBYyxTQUFTLE9BQVQsRUFBMUUsQ0FINEQ7S0FBOUQsTUFJTztBQUNMLGlCQUFXLElBQVgsQ0FBZ0IsRUFBQyxPQUFPLENBQVAsRUFBVSxPQUFPLEtBQVAsRUFBYyxTQUFTLE9BQVQsRUFBekMsRUFESztLQUpQO0dBbEhhO21EQTBIZixzQ0FBYyxVQUFVLFdBQVcsV0FBVyxjQUFjO0FBQzFELFFBQUksU0FBUyxVQUFVLE1BQVY7UUFDVCxTQUFTLFVBQVUsTUFBVjtRQUNULFNBQVMsU0FBUyxNQUFUO1FBQ1QsU0FBUyxTQUFTLFlBQVQ7UUFFVCxjQUFjLENBQWQsQ0FOc0Q7QUFPMUQsV0FBTyxTQUFTLENBQVQsR0FBYSxNQUFiLElBQXVCLFNBQVMsQ0FBVCxHQUFhLE1BQWIsSUFBdUIsS0FBSyxNQUFMLENBQVksVUFBVSxTQUFTLENBQVQsQ0FBdEIsRUFBbUMsVUFBVSxTQUFTLENBQVQsQ0FBN0MsQ0FBOUMsRUFBeUc7QUFDOUcsZUFEOEc7QUFFOUcsZUFGOEc7QUFHOUcsb0JBSDhHO0tBQWhIOztBQU1BLFFBQUksV0FBSixFQUFpQjtBQUNmLGVBQVMsVUFBVCxDQUFvQixJQUFwQixDQUF5QixFQUFDLE9BQU8sV0FBUCxFQUExQixFQURlO0tBQWpCOztBQUlBLGFBQVMsTUFBVCxHQUFrQixNQUFsQixDQWpCMEQ7QUFrQjFELFdBQU8sTUFBUCxDQWxCMEQ7R0ExSDdDO21EQStJZix3QkFBTyxNQUFNLE9BQU87QUFDbEIsV0FBTyxTQUFTLEtBQVQsQ0FEVztHQS9JTDttREFrSmYsa0NBQVksT0FBTztBQUNqQixRQUFJLE1BQU0sRUFBTixDQURhO0FBRWpCLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE1BQU0sTUFBTixFQUFjLEdBQWxDLEVBQXVDO0FBQ3JDLFVBQUksTUFBTSxDQUFOLENBQUosRUFBYztBQUNaLFlBQUksSUFBSixDQUFTLE1BQU0sQ0FBTixDQUFULEVBRFk7T0FBZDtLQURGO0FBS0EsV0FBTyxHQUFQLENBUGlCO0dBbEpKO21EQTJKZiw4QkFBVSxPQUFPO0FBQ2YsV0FBTyxLQUFQLENBRGU7R0EzSkY7bURBOEpmLDRCQUFTLE9BQU87QUFDZCxXQUFPLE1BQU0sS0FBTixDQUFZLEVBQVosQ0FBUCxDQURjO0dBOUpEO0NBQWpCOztBQW1LQSxTQUFTLFdBQVQsQ0FBcUIsSUFBckIsRUFBMkIsVUFBM0IsRUFBdUMsU0FBdkMsRUFBa0QsU0FBbEQsRUFBNkQsZUFBN0QsRUFBOEU7QUFDNUUsTUFBSSxlQUFlLENBQWY7TUFDQSxlQUFlLFdBQVcsTUFBWDtNQUNmLFNBQVMsQ0FBVDtNQUNBLFNBQVMsQ0FBVCxDQUp3RTs7QUFNNUUsU0FBTyxlQUFlLFlBQWYsRUFBNkIsY0FBcEMsRUFBb0Q7QUFDbEQsUUFBSSxZQUFZLFdBQVcsWUFBWCxDQUFaLENBRDhDO0FBRWxELFFBQUksQ0FBQyxVQUFVLE9BQVYsRUFBbUI7QUFDdEIsVUFBSSxDQUFDLFVBQVUsS0FBVixJQUFtQixlQUFwQixFQUFxQztBQUN2QyxZQUFJLFFBQVEsVUFBVSxLQUFWLENBQWdCLE1BQWhCLEVBQXdCLFNBQVMsVUFBVSxLQUFWLENBQXpDLENBRG1DO0FBRXZDLGdCQUFRLE1BQU0sR0FBTixDQUFVLFVBQVMsS0FBVCxFQUFnQixDQUFoQixFQUFtQjtBQUNuQyxjQUFJLFdBQVcsVUFBVSxTQUFTLENBQVQsQ0FBckIsQ0FEK0I7QUFFbkMsaUJBQU8sU0FBUyxNQUFULEdBQWtCLE1BQU0sTUFBTixHQUFlLFFBQWpDLEdBQTRDLEtBQTVDLENBRjRCO1NBQW5CLENBQWxCLENBRnVDOztBQU92QyxrQkFBVSxLQUFWLEdBQWtCLE1BQU0sSUFBTixDQUFXLEVBQVgsQ0FBbEIsQ0FQdUM7T0FBekMsTUFRTztBQUNMLGtCQUFVLEtBQVYsR0FBa0IsVUFBVSxLQUFWLENBQWdCLE1BQWhCLEVBQXdCLFNBQVMsVUFBVSxLQUFWLENBQWpDLENBQWtELElBQWxELENBQXVELEVBQXZELENBQWxCLENBREs7T0FSUDtBQVdBLGdCQUFVLFVBQVUsS0FBVjs7O0FBWlksVUFlbEIsQ0FBQyxVQUFVLEtBQVYsRUFBaUI7QUFDcEIsa0JBQVUsVUFBVSxLQUFWLENBRFU7T0FBdEI7S0FmRixNQWtCTztBQUNMLGdCQUFVLEtBQVYsR0FBa0IsVUFBVSxLQUFWLENBQWdCLE1BQWhCLEVBQXdCLFNBQVMsVUFBVSxLQUFWLENBQWpDLENBQWtELElBQWxELENBQXVELEVBQXZELENBQWxCLENBREs7QUFFTCxnQkFBVSxVQUFVLEtBQVY7Ozs7O0FBRkwsVUFPRCxnQkFBZ0IsV0FBVyxlQUFlLENBQWYsQ0FBWCxDQUE2QixLQUE3QixFQUFvQztBQUN0RCxZQUFJLE1BQU0sV0FBVyxlQUFlLENBQWYsQ0FBakIsQ0FEa0Q7QUFFdEQsbUJBQVcsZUFBZSxDQUFmLENBQVgsR0FBK0IsV0FBVyxZQUFYLENBQS9CLENBRnNEO0FBR3RELG1CQUFXLFlBQVgsSUFBMkIsR0FBM0IsQ0FIc0Q7T0FBeEQ7S0F6QkY7R0FGRjs7OztBQU40RSxNQTJDeEUsZ0JBQWdCLFdBQVcsZUFBZSxDQUFmLENBQTNCLENBM0N3RTtBQTRDNUUsTUFBSSxlQUFlLENBQWYsS0FDSSxjQUFjLEtBQWQsSUFBdUIsY0FBYyxPQUFkLENBRDNCLElBRUcsS0FBSyxNQUFMLENBQVksRUFBWixFQUFnQixjQUFjLEtBQWQsQ0FGbkIsRUFFeUM7QUFDM0MsZUFBVyxlQUFlLENBQWYsQ0FBWCxDQUE2QixLQUE3QixJQUFzQyxjQUFjLEtBQWQsQ0FESztBQUUzQyxlQUFXLEdBQVgsR0FGMkM7R0FGN0M7O0FBT0EsU0FBTyxVQUFQLENBbkQ0RTtDQUE5RTs7QUFzREEsU0FBUyxTQUFULENBQW1CLElBQW5CLEVBQXlCO0FBQ3ZCLFNBQU8sRUFBRSxRQUFRLEtBQUssTUFBTCxFQUFhLFlBQVksS0FBSyxVQUFMLENBQWdCLEtBQWhCLENBQXNCLENBQXRCLENBQVosRUFBOUIsQ0FEdUI7Q0FBekIiLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpZmYoKSB7fVxuXG5EaWZmLnByb3RvdHlwZSA9IHtcbiAgZGlmZihvbGRTdHJpbmcsIG5ld1N0cmluZywgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjaztcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGRvbmUodmFsdWUpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayh1bmRlZmluZWQsIHZhbHVlKTsgfSwgMCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFsbG93IHN1YmNsYXNzZXMgdG8gbWFzc2FnZSB0aGUgaW5wdXQgcHJpb3IgdG8gcnVubmluZ1xuICAgIG9sZFN0cmluZyA9IHRoaXMuY2FzdElucHV0KG9sZFN0cmluZyk7XG4gICAgbmV3U3RyaW5nID0gdGhpcy5jYXN0SW5wdXQobmV3U3RyaW5nKTtcblxuICAgIG9sZFN0cmluZyA9IHRoaXMucmVtb3ZlRW1wdHkodGhpcy50b2tlbml6ZShvbGRTdHJpbmcpKTtcbiAgICBuZXdTdHJpbmcgPSB0aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUobmV3U3RyaW5nKSk7XG5cbiAgICBsZXQgbmV3TGVuID0gbmV3U3RyaW5nLmxlbmd0aCwgb2xkTGVuID0gb2xkU3RyaW5nLmxlbmd0aDtcbiAgICBsZXQgZWRpdExlbmd0aCA9IDE7XG4gICAgbGV0IG1heEVkaXRMZW5ndGggPSBuZXdMZW4gKyBvbGRMZW47XG4gICAgbGV0IGJlc3RQYXRoID0gW3sgbmV3UG9zOiAtMSwgY29tcG9uZW50czogW10gfV07XG5cbiAgICAvLyBTZWVkIGVkaXRMZW5ndGggPSAwLCBpLmUuIHRoZSBjb250ZW50IHN0YXJ0cyB3aXRoIHRoZSBzYW1lIHZhbHVlc1xuICAgIGxldCBvbGRQb3MgPSB0aGlzLmV4dHJhY3RDb21tb24oYmVzdFBhdGhbMF0sIG5ld1N0cmluZywgb2xkU3RyaW5nLCAwKTtcbiAgICBpZiAoYmVzdFBhdGhbMF0ubmV3UG9zICsgMSA+PSBuZXdMZW4gJiYgb2xkUG9zICsgMSA+PSBvbGRMZW4pIHtcbiAgICAgIC8vIElkZW50aXR5IHBlciB0aGUgZXF1YWxpdHkgYW5kIHRva2VuaXplclxuICAgICAgcmV0dXJuIGRvbmUoW3t2YWx1ZTogbmV3U3RyaW5nLmpvaW4oJycpLCBjb3VudDogbmV3U3RyaW5nLmxlbmd0aH1dKTtcbiAgICB9XG5cbiAgICAvLyBNYWluIHdvcmtlciBtZXRob2QuIGNoZWNrcyBhbGwgcGVybXV0YXRpb25zIG9mIGEgZ2l2ZW4gZWRpdCBsZW5ndGggZm9yIGFjY2VwdGFuY2UuXG4gICAgZnVuY3Rpb24gZXhlY0VkaXRMZW5ndGgoKSB7XG4gICAgICBmb3IgKGxldCBkaWFnb25hbFBhdGggPSAtMSAqIGVkaXRMZW5ndGg7IGRpYWdvbmFsUGF0aCA8PSBlZGl0TGVuZ3RoOyBkaWFnb25hbFBhdGggKz0gMikge1xuICAgICAgICBsZXQgYmFzZVBhdGg7XG4gICAgICAgIGxldCBhZGRQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoIC0gMV0sXG4gICAgICAgICAgICByZW1vdmVQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoICsgMV0sXG4gICAgICAgICAgICBvbGRQb3MgPSAocmVtb3ZlUGF0aCA/IHJlbW92ZVBhdGgubmV3UG9zIDogMCkgLSBkaWFnb25hbFBhdGg7XG4gICAgICAgIGlmIChhZGRQYXRoKSB7XG4gICAgICAgICAgLy8gTm8gb25lIGVsc2UgaXMgZ29pbmcgdG8gYXR0ZW1wdCB0byB1c2UgdGhpcyB2YWx1ZSwgY2xlYXIgaXRcbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGggLSAxXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjYW5BZGQgPSBhZGRQYXRoICYmIGFkZFBhdGgubmV3UG9zICsgMSA8IG5ld0xlbixcbiAgICAgICAgICAgIGNhblJlbW92ZSA9IHJlbW92ZVBhdGggJiYgMCA8PSBvbGRQb3MgJiYgb2xkUG9zIDwgb2xkTGVuO1xuICAgICAgICBpZiAoIWNhbkFkZCAmJiAhY2FuUmVtb3ZlKSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBwYXRoIGlzIGEgdGVybWluYWwgdGhlbiBwcnVuZVxuICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZWxlY3QgdGhlIGRpYWdvbmFsIHRoYXQgd2Ugd2FudCB0byBicmFuY2ggZnJvbS4gV2Ugc2VsZWN0IHRoZSBwcmlvclxuICAgICAgICAvLyBwYXRoIHdob3NlIHBvc2l0aW9uIGluIHRoZSBuZXcgc3RyaW5nIGlzIHRoZSBmYXJ0aGVzdCBmcm9tIHRoZSBvcmlnaW5cbiAgICAgICAgLy8gYW5kIGRvZXMgbm90IHBhc3MgdGhlIGJvdW5kcyBvZiB0aGUgZGlmZiBncmFwaFxuICAgICAgICBpZiAoIWNhbkFkZCB8fCAoY2FuUmVtb3ZlICYmIGFkZFBhdGgubmV3UG9zIDwgcmVtb3ZlUGF0aC5uZXdQb3MpKSB7XG4gICAgICAgICAgYmFzZVBhdGggPSBjbG9uZVBhdGgocmVtb3ZlUGF0aCk7XG4gICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmFzZVBhdGggPSBhZGRQYXRoOyAgIC8vIE5vIG5lZWQgdG8gY2xvbmUsIHdlJ3ZlIHB1bGxlZCBpdCBmcm9tIHRoZSBsaXN0XG4gICAgICAgICAgYmFzZVBhdGgubmV3UG9zKys7XG4gICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHRydWUsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cblxuICAgICAgICBvbGRQb3MgPSBzZWxmLmV4dHJhY3RDb21tb24oYmFzZVBhdGgsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBkaWFnb25hbFBhdGgpO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgaGl0IHRoZSBlbmQgb2YgYm90aCBzdHJpbmdzLCB0aGVuIHdlIGFyZSBkb25lXG4gICAgICAgIGlmIChiYXNlUGF0aC5uZXdQb3MgKyAxID49IG5ld0xlbiAmJiBvbGRQb3MgKyAxID49IG9sZExlbikge1xuICAgICAgICAgIHJldHVybiBkb25lKGJ1aWxkVmFsdWVzKHNlbGYsIGJhc2VQYXRoLmNvbXBvbmVudHMsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBzZWxmLnVzZUxvbmdlc3RUb2tlbikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSB0cmFjayB0aGlzIHBhdGggYXMgYSBwb3RlbnRpYWwgY2FuZGlkYXRlIGFuZCBjb250aW51ZS5cbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGhdID0gYmFzZVBhdGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWRpdExlbmd0aCsrO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm1zIHRoZSBsZW5ndGggb2YgZWRpdCBpdGVyYXRpb24uIElzIGEgYml0IGZ1Z2x5IGFzIHRoaXMgaGFzIHRvIHN1cHBvcnQgdGhlXG4gICAgLy8gc3luYyBhbmQgYXN5bmMgbW9kZSB3aGljaCBpcyBuZXZlciBmdW4uIExvb3BzIG92ZXIgZXhlY0VkaXRMZW5ndGggdW50aWwgYSB2YWx1ZVxuICAgIC8vIGlzIHByb2R1Y2VkLlxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgKGZ1bmN0aW9uIGV4ZWMoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gVGhpcyBzaG91bGQgbm90IGhhcHBlbiwgYnV0IHdlIHdhbnQgdG8gYmUgc2FmZS5cbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIGlmIChlZGl0TGVuZ3RoID4gbWF4RWRpdExlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFleGVjRWRpdExlbmd0aCgpKSB7XG4gICAgICAgICAgICBleGVjKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH0oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChlZGl0TGVuZ3RoIDw9IG1heEVkaXRMZW5ndGgpIHtcbiAgICAgICAgbGV0IHJldCA9IGV4ZWNFZGl0TGVuZ3RoKCk7XG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHB1c2hDb21wb25lbnQoY29tcG9uZW50cywgYWRkZWQsIHJlbW92ZWQpIHtcbiAgICBsZXQgbGFzdCA9IGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXTtcbiAgICBpZiAobGFzdCAmJiBsYXN0LmFkZGVkID09PSBhZGRlZCAmJiBsYXN0LnJlbW92ZWQgPT09IHJlbW92ZWQpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gY2xvbmUgaGVyZSBhcyB0aGUgY29tcG9uZW50IGNsb25lIG9wZXJhdGlvbiBpcyBqdXN0XG4gICAgICAvLyBhcyBzaGFsbG93IGFycmF5IGNsb25lXG4gICAgICBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV0gPSB7Y291bnQ6IGxhc3QuY291bnQgKyAxLCBhZGRlZDogYWRkZWQsIHJlbW92ZWQ6IHJlbW92ZWQgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50cy5wdXNoKHtjb3VudDogMSwgYWRkZWQ6IGFkZGVkLCByZW1vdmVkOiByZW1vdmVkIH0pO1xuICAgIH1cbiAgfSxcbiAgZXh0cmFjdENvbW1vbihiYXNlUGF0aCwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIGRpYWdvbmFsUGF0aCkge1xuICAgIGxldCBuZXdMZW4gPSBuZXdTdHJpbmcubGVuZ3RoLFxuICAgICAgICBvbGRMZW4gPSBvbGRTdHJpbmcubGVuZ3RoLFxuICAgICAgICBuZXdQb3MgPSBiYXNlUGF0aC5uZXdQb3MsXG4gICAgICAgIG9sZFBvcyA9IG5ld1BvcyAtIGRpYWdvbmFsUGF0aCxcblxuICAgICAgICBjb21tb25Db3VudCA9IDA7XG4gICAgd2hpbGUgKG5ld1BvcyArIDEgPCBuZXdMZW4gJiYgb2xkUG9zICsgMSA8IG9sZExlbiAmJiB0aGlzLmVxdWFscyhuZXdTdHJpbmdbbmV3UG9zICsgMV0sIG9sZFN0cmluZ1tvbGRQb3MgKyAxXSkpIHtcbiAgICAgIG5ld1BvcysrO1xuICAgICAgb2xkUG9zKys7XG4gICAgICBjb21tb25Db3VudCsrO1xuICAgIH1cblxuICAgIGlmIChjb21tb25Db3VudCkge1xuICAgICAgYmFzZVBhdGguY29tcG9uZW50cy5wdXNoKHtjb3VudDogY29tbW9uQ291bnR9KTtcbiAgICB9XG5cbiAgICBiYXNlUGF0aC5uZXdQb3MgPSBuZXdQb3M7XG4gICAgcmV0dXJuIG9sZFBvcztcbiAgfSxcblxuICBlcXVhbHMobGVmdCwgcmlnaHQpIHtcbiAgICByZXR1cm4gbGVmdCA9PT0gcmlnaHQ7XG4gIH0sXG4gIHJlbW92ZUVtcHR5KGFycmF5KSB7XG4gICAgbGV0IHJldCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJheVtpXSkge1xuICAgICAgICByZXQucHVzaChhcnJheVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH0sXG4gIGNhc3RJbnB1dCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgdG9rZW5pemUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3BsaXQoJycpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBidWlsZFZhbHVlcyhkaWZmLCBjb21wb25lbnRzLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgdXNlTG9uZ2VzdFRva2VuKSB7XG4gIGxldCBjb21wb25lbnRQb3MgPSAwLFxuICAgICAgY29tcG9uZW50TGVuID0gY29tcG9uZW50cy5sZW5ndGgsXG4gICAgICBuZXdQb3MgPSAwLFxuICAgICAgb2xkUG9zID0gMDtcblxuICBmb3IgKDsgY29tcG9uZW50UG9zIDwgY29tcG9uZW50TGVuOyBjb21wb25lbnRQb3MrKykge1xuICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG4gICAgaWYgKCFjb21wb25lbnQucmVtb3ZlZCkge1xuICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQgJiYgdXNlTG9uZ2VzdFRva2VuKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG5ld1N0cmluZy5zbGljZShuZXdQb3MsIG5ld1BvcyArIGNvbXBvbmVudC5jb3VudCk7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uKHZhbHVlLCBpKSB7XG4gICAgICAgICAgbGV0IG9sZFZhbHVlID0gb2xkU3RyaW5nW29sZFBvcyArIGldO1xuICAgICAgICAgIHJldHVybiBvbGRWYWx1ZS5sZW5ndGggPiB2YWx1ZS5sZW5ndGggPyBvbGRWYWx1ZSA6IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb21wb25lbnQudmFsdWUgPSB2YWx1ZS5qb2luKCcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC52YWx1ZSA9IG5ld1N0cmluZy5zbGljZShuZXdQb3MsIG5ld1BvcyArIGNvbXBvbmVudC5jb3VudCkuam9pbignJyk7XG4gICAgICB9XG4gICAgICBuZXdQb3MgKz0gY29tcG9uZW50LmNvdW50O1xuXG4gICAgICAvLyBDb21tb24gY2FzZVxuICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQpIHtcbiAgICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50LnZhbHVlID0gb2xkU3RyaW5nLnNsaWNlKG9sZFBvcywgb2xkUG9zICsgY29tcG9uZW50LmNvdW50KS5qb2luKCcnKTtcbiAgICAgIG9sZFBvcyArPSBjb21wb25lbnQuY291bnQ7XG5cbiAgICAgIC8vIFJldmVyc2UgYWRkIGFuZCByZW1vdmUgc28gcmVtb3ZlcyBhcmUgb3V0cHV0IGZpcnN0IHRvIG1hdGNoIGNvbW1vbiBjb252ZW50aW9uXG4gICAgICAvLyBUaGUgZGlmZmluZyBhbGdvcml0aG0gaXMgdGllZCB0byBhZGQgdGhlbiByZW1vdmUgb3V0cHV0IGFuZCB0aGlzIGlzIHRoZSBzaW1wbGVzdFxuICAgICAgLy8gcm91dGUgdG8gZ2V0IHRoZSBkZXNpcmVkIG91dHB1dCB3aXRoIG1pbmltYWwgb3ZlcmhlYWQuXG4gICAgICBpZiAoY29tcG9uZW50UG9zICYmIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0uYWRkZWQpIHtcbiAgICAgICAgbGV0IHRtcCA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV07XG4gICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0gPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG4gICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zXSA9IHRtcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTcGVjaWFsIGNhc2UgaGFuZGxlIGZvciB3aGVuIG9uZSB0ZXJtaW5hbCBpcyBpZ25vcmVkLiBGb3IgdGhpcyBjYXNlIHdlIG1lcmdlIHRoZVxuICAvLyB0ZXJtaW5hbCBpbnRvIHRoZSBwcmlvciBzdHJpbmcgYW5kIGRyb3AgdGhlIGNoYW5nZS5cbiAgbGV0IGxhc3RDb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudExlbiAtIDFdO1xuICBpZiAoY29tcG9uZW50TGVuID4gMVxuICAgICAgJiYgKGxhc3RDb21wb25lbnQuYWRkZWQgfHwgbGFzdENvbXBvbmVudC5yZW1vdmVkKVxuICAgICAgJiYgZGlmZi5lcXVhbHMoJycsIGxhc3RDb21wb25lbnQudmFsdWUpKSB7XG4gICAgY29tcG9uZW50c1tjb21wb25lbnRMZW4gLSAyXS52YWx1ZSArPSBsYXN0Q29tcG9uZW50LnZhbHVlO1xuICAgIGNvbXBvbmVudHMucG9wKCk7XG4gIH1cblxuICByZXR1cm4gY29tcG9uZW50cztcbn1cblxuZnVuY3Rpb24gY2xvbmVQYXRoKHBhdGgpIHtcbiAgcmV0dXJuIHsgbmV3UG9zOiBwYXRoLm5ld1BvcywgY29tcG9uZW50czogcGF0aC5jb21wb25lbnRzLnNsaWNlKDApIH07XG59XG4iXX0=


/***/ }),

/***/ 3586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Iterator; });
/* harmony export (immutable) */ __webpack_exports__["d"] = getSequenceIterator;
/* unused harmony export ArrayIterator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayNavigator; });
/* unused harmony export MappedIterator */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
        { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
        function (d, b) {for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {this.constructor = d;}
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var FIN = { done: true, value: undefined };
var Iterator;
(function (Iterator) {
    var _empty = {
        next: function () {
            return FIN;
        } };

    function empty() {
        return _empty;
    }
    Iterator.empty = empty;
    function fromArray(array, index, length) {
        if (index === void 0) {index = 0;}
        if (length === void 0) {length = array.length;}
        return {
            next: function () {
                if (index >= length) {
                    return FIN;
                }
                return { done: false, value: array[index++] };
            } };

    }
    Iterator.fromArray = fromArray;
    function from(elements) {
        if (!elements) {
            return Iterator.empty();
        } else
        if (Array.isArray(elements)) {
            return Iterator.fromArray(elements);
        } else
        {
            return elements;
        }
    }
    Iterator.from = from;
    function map(iterator, fn) {
        return {
            next: function () {
                var element = iterator.next();
                if (element.done) {
                    return FIN;
                } else
                {
                    return { done: false, value: fn(element.value) };
                }
            } };

    }
    Iterator.map = map;
    function filter(iterator, fn) {
        return {
            next: function () {
                while (true) {
                    var element = iterator.next();
                    if (element.done) {
                        return FIN;
                    }
                    if (fn(element.value)) {
                        return { done: false, value: element.value };
                    }
                }
            } };

    }
    Iterator.filter = filter;
    function forEach(iterator, fn) {
        for (var next = iterator.next(); !next.done; next = iterator.next()) {
            fn(next.value);
        }
    }
    Iterator.forEach = forEach;
    function collect(iterator) {
        var result = [];
        forEach(iterator, function (value) {return result.push(value);});
        return result;
    }
    Iterator.collect = collect;
})(Iterator || (Iterator = {}));
function getSequenceIterator(arg) {
    if (Array.isArray(arg)) {
        return Iterator.fromArray(arg);
    } else
    {
        return arg;
    }
}
var ArrayIterator = /** @class */function () {
    function ArrayIterator(items, start, end, index) {
        if (start === void 0) {start = 0;}
        if (end === void 0) {end = items.length;}
        if (index === void 0) {index = start - 1;}
        this.items = items;
        this.start = start;
        this.end = end;
        this.index = index;
    }
    ArrayIterator.prototype.next = function () {
        this.index = Math.min(this.index + 1, this.end);
        return this.current();
    };
    ArrayIterator.prototype.current = function () {
        if (this.index === this.start - 1 || this.index === this.end) {
            return null;
        }
        return this.items[this.index];
    };
    return ArrayIterator;
}();

var ArrayNavigator = /** @class */function (_super) {
    __extends(ArrayNavigator, _super);
    function ArrayNavigator(items, start, end, index) {
        if (start === void 0) {start = 0;}
        if (end === void 0) {end = items.length;}
        if (index === void 0) {index = start - 1;}
        return _super.call(this, items, start, end, index) || this;
    }
    ArrayNavigator.prototype.current = function () {
        return _super.prototype.current.call(this);
    };
    ArrayNavigator.prototype.previous = function () {
        this.index = Math.max(this.index - 1, this.start - 1);
        return this.current();
    };
    ArrayNavigator.prototype.first = function () {
        this.index = this.start;
        return this.current();
    };
    ArrayNavigator.prototype.last = function () {
        this.index = this.end - 1;
        return this.current();
    };
    ArrayNavigator.prototype.parent = function () {
        return null;
    };
    return ArrayNavigator;
}(ArrayIterator);

var MappedIterator = /** @class */function () {
    function MappedIterator(iterator, fn) {
        this.iterator = iterator;
        this.fn = fn;
        // noop
    }
    MappedIterator.prototype.next = function () {return this.fn(this.iterator.next());};
    return MappedIterator;
}();


/***/ }),

/***/ 3587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return domEvent; });
/* unused harmony export stop */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_event_js__ = __webpack_require__(3481);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var domEvent = function (element, type, useCapture) {
    var fn = function (e) {return emitter.fire(e);};
    var emitter = new __WEBPACK_IMPORTED_MODULE_0__common_event_js__["a" /* Emitter */]({
        onFirstListenerAdd: function () {
            element.addEventListener(type, fn, useCapture);
        },
        onLastListenerRemove: function () {
            element.removeEventListener(type, fn, useCapture);
        } });

    return emitter.event;
};
function stop(event) {
    return __WEBPACK_IMPORTED_MODULE_0__common_event_js__["b" /* Event */].map(event, function (e) {
        e.preventDefault();
        e.stopPropagation();
        return e;
    });
}

/***/ }),

/***/ 3589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ID_EDITOR_WORKER_SERVICE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IEditorWorkerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_instantiation_common_instantiation_js__ = __webpack_require__(3485);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var ID_EDITOR_WORKER_SERVICE = 'editorWorkerService';
var IEditorWorkerService = Object(__WEBPACK_IMPORTED_MODULE_0__platform_instantiation_common_instantiation_js__["c" /* createDecorator */])(ID_EDITOR_WORKER_SERVICE);

/***/ }),

/***/ 3607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = isIMenuItem;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IMenuService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MenuRegistry; });
/* unused harmony export ExecuteCommandAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SubmenuItemAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MenuItemAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_common_actions_js__ = __webpack_require__(3608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instantiation_common_instantiation_js__ = __webpack_require__(3485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contextkey_common_contextkey_js__ = __webpack_require__(3508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commands_common_commands_js__ = __webpack_require__(3528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_common_event_js__ = __webpack_require__(3481);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
        { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
        function (d, b) {for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {this.constructor = d;}
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else
    for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = this && this.__param || function (paramIndex, decorator) {
    return function (target, key) {decorator(target, key, paramIndex);};
};





function isIMenuItem(item) {
    return item.command !== undefined;
}
var IMenuService = Object(__WEBPACK_IMPORTED_MODULE_1__instantiation_common_instantiation_js__["c" /* createDecorator */])('menuService');
var MenuRegistry = new ( /** @class */function () {
    function class_1() {
        this._commands = Object.create(null);
        this._menuItems = Object.create(null);
        this._onDidChangeMenu = new __WEBPACK_IMPORTED_MODULE_4__base_common_event_js__["a" /* Emitter */]();
        this.onDidChangeMenu = this._onDidChangeMenu.event;
    }
    class_1.prototype.addCommand = function (command) {
        var _this = this;
        this._commands[command.id] = command;
        this._onDidChangeMenu.fire(0 /* CommandPalette */);
        return {
            dispose: function () {
                if (delete _this._commands[command.id]) {
                    _this._onDidChangeMenu.fire(0 /* CommandPalette */);
                }
            } };

    };
    class_1.prototype.getCommand = function (id) {
        return this._commands[id];
    };
    class_1.prototype.getCommands = function () {
        var result = Object.create(null);
        for (var key in this._commands) {
            result[key] = this.getCommand(key);
        }
        return result;
    };
    class_1.prototype.appendMenuItem = function (id, item) {
        var _this = this;
        var array = this._menuItems[id];
        if (!array) {
            this._menuItems[id] = array = [item];
        } else
        {
            array.push(item);
        }
        this._onDidChangeMenu.fire(id);
        return {
            dispose: function () {
                var idx = array.indexOf(item);
                if (idx >= 0) {
                    array.splice(idx, 1);
                    _this._onDidChangeMenu.fire(id);
                }
            } };

    };
    class_1.prototype.getMenuItems = function (id) {
        var result = (this._menuItems[id] || []).slice(0);
        if (id === 0 /* CommandPalette */) {
                // CommandPalette is special because it shows
                // all commands by default
                this._appendImplicitItems(result);
            }
        return result;
    };
    class_1.prototype._appendImplicitItems = function (result) {
        var set = new Set();
        var temp = result.filter(function (item) {return isIMenuItem(item);});
        for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
            var _a = temp_1[_i],command = _a.command,alt = _a.alt;
            set.add(command.id);
            if (alt) {
                set.add(alt.id);
            }
        }
        for (var id in this._commands) {
            if (!set.has(id)) {
                result.push({ command: this._commands[id] });
            }
        }
    };
    return class_1;
}())();
var ExecuteCommandAction = /** @class */function (_super) {
    __extends(ExecuteCommandAction, _super);
    function ExecuteCommandAction(id, label, _commandService) {
        var _this = _super.call(this, id, label) || this;
        _this._commandService = _commandService;
        return _this;
    }
    ExecuteCommandAction.prototype.run = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (_a = this._commandService).executeCommand.apply(_a, [this.id].concat(args));
    };
    ExecuteCommandAction = __decorate([
    __param(2, __WEBPACK_IMPORTED_MODULE_3__commands_common_commands_js__["b" /* ICommandService */])],
    ExecuteCommandAction);
    return ExecuteCommandAction;
}(__WEBPACK_IMPORTED_MODULE_0__base_common_actions_js__["a" /* Action */]);

var SubmenuItemAction = /** @class */function (_super) {
    __extends(SubmenuItemAction, _super);
    function SubmenuItemAction(item) {
        var _this = this;
        typeof item.title === 'string' ? _this = _super.call(this, '', item.title, 'submenu') || this : _this = _super.call(this, '', item.title.value, 'submenu') || this;
        _this.item = item;
        return _this;
    }
    return SubmenuItemAction;
}(__WEBPACK_IMPORTED_MODULE_0__base_common_actions_js__["a" /* Action */]);

var MenuItemAction = /** @class */function (_super) {
    __extends(MenuItemAction, _super);
    function MenuItemAction(item, alt, options, contextKeyService, commandService) {
        var _this = this;
        typeof item.title === 'string' ? _this = _super.call(this, item.id, item.title, commandService) || this : _this = _super.call(this, item.id, item.title.value, commandService) || this;
        _this._cssClass = undefined;
        _this._enabled = !item.precondition || contextKeyService.contextMatchesRules(item.precondition);
        _this._checked = Boolean(item.toggled && contextKeyService.contextMatchesRules(item.toggled));
        _this._options = options || {};
        _this.item = item;
        _this.alt = alt ? new MenuItemAction(alt, undefined, _this._options, contextKeyService, commandService) : undefined;
        return _this;
    }
    MenuItemAction.prototype.run = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var runArgs = [];
        if (this._options.arg) {
            runArgs = runArgs.concat([this._options.arg]);
        }
        if (this._options.shouldForwardArgs) {
            runArgs = runArgs.concat(args);
        }
        return _super.prototype.run.apply(this, runArgs);
    };
    MenuItemAction = __decorate([
    __param(3, __WEBPACK_IMPORTED_MODULE_2__contextkey_common_contextkey_js__["e" /* IContextKeyService */]),
    __param(4, __WEBPACK_IMPORTED_MODULE_3__commands_common_commands_js__["b" /* ICommandService */])],
    MenuItemAction);
    return MenuItemAction;
}(ExecuteCommandAction);


/***/ }),

/***/ 3608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionRunner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lifecycle_js__ = __webpack_require__(3480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_js__ = __webpack_require__(3481);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
        { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
        function (d, b) {for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {this.constructor = d;}
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();


var Action = /** @class */function () {
    function Action(id, label, cssClass, enabled, actionCallback) {
        if (label === void 0) {label = '';}
        if (cssClass === void 0) {cssClass = '';}
        if (enabled === void 0) {enabled = true;}
        this._onDidChange = new __WEBPACK_IMPORTED_MODULE_1__event_js__["a" /* Emitter */]();
        this.onDidChange = this._onDidChange.event;
        this._id = id;
        this._label = label;
        this._cssClass = cssClass;
        this._enabled = enabled;
        this._actionCallback = actionCallback;
    }
    Object.defineProperty(Action.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true });

    Object.defineProperty(Action.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._setLabel(value);
        },
        enumerable: true,
        configurable: true });

    Action.prototype._setLabel = function (value) {
        if (this._label !== value) {
            this._label = value;
            this._onDidChange.fire({ label: value });
        }
    };
    Object.defineProperty(Action.prototype, "tooltip", {
        get: function () {
            return this._tooltip;
        },
        set: function (value) {
            this._setTooltip(value);
        },
        enumerable: true,
        configurable: true });

    Action.prototype._setTooltip = function (value) {
        if (this._tooltip !== value) {
            this._tooltip = value;
            this._onDidChange.fire({ tooltip: value });
        }
    };
    Object.defineProperty(Action.prototype, "class", {
        get: function () {
            return this._cssClass;
        },
        set: function (value) {
            this._setClass(value);
        },
        enumerable: true,
        configurable: true });

    Action.prototype._setClass = function (value) {
        if (this._cssClass !== value) {
            this._cssClass = value;
            this._onDidChange.fire({ class: value });
        }
    };
    Object.defineProperty(Action.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (value) {
            this._setEnabled(value);
        },
        enumerable: true,
        configurable: true });

    Action.prototype._setEnabled = function (value) {
        if (this._enabled !== value) {
            this._enabled = value;
            this._onDidChange.fire({ enabled: value });
        }
    };
    Object.defineProperty(Action.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (value) {
            this._setChecked(value);
        },
        enumerable: true,
        configurable: true });

    Object.defineProperty(Action.prototype, "radio", {
        get: function () {
            return this._radio;
        },
        set: function (value) {
            this._setRadio(value);
        },
        enumerable: true,
        configurable: true });

    Action.prototype._setChecked = function (value) {
        if (this._checked !== value) {
            this._checked = value;
            this._onDidChange.fire({ checked: value });
        }
    };
    Action.prototype._setRadio = function (value) {
        if (this._radio !== value) {
            this._radio = value;
            this._onDidChange.fire({ radio: value });
        }
    };
    Action.prototype.run = function (event, _data) {
        if (this._actionCallback) {
            return this._actionCallback(event);
        }
        return Promise.resolve(true);
    };
    Action.prototype.dispose = function () {
        this._onDidChange.dispose();
    };
    return Action;
}();

var ActionRunner = /** @class */function (_super) {
    __extends(ActionRunner, _super);
    function ActionRunner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onDidBeforeRun = _this._register(new __WEBPACK_IMPORTED_MODULE_1__event_js__["a" /* Emitter */]());
        _this.onDidBeforeRun = _this._onDidBeforeRun.event;
        _this._onDidRun = _this._register(new __WEBPACK_IMPORTED_MODULE_1__event_js__["a" /* Emitter */]());
        _this.onDidRun = _this._onDidRun.event;
        return _this;
    }
    ActionRunner.prototype.run = function (action, context) {
        var _this = this;
        if (!action.enabled) {
            return Promise.resolve(null);
        }
        this._onDidBeforeRun.fire({ action: action });
        return this.runAction(action, context).then(function (result) {
            _this._onDidRun.fire({ action: action, result: result });
        }, function (error) {
            _this._onDidRun.fire({ action: action, error: error });
        });
    };
    ActionRunner.prototype.runAction = function (action, context) {
        var res = context ? action.run(context) : action.run();
        return Promise.resolve(res);
    };
    return ActionRunner;
}(__WEBPACK_IMPORTED_MODULE_0__lifecycle_js__["a" /* Disposable */]);


/***/ }),

/***/ 3620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariableAlertWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_SettingsTypeConstants__ = __webpack_require__(972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_messaging_Alert__ = __webpack_require__(1490);
var _class;






const OPEN_SETTINGS_ANCHOR = '#openSettings',
alertMessageWithAutoPersist = 'Use variables to reuse values in different places. ' +
'The current value is used while sending a request and is never synced to Postman\'s servers. ' +
`The initial value is auto-updated to reflect the current value. [Change this](${OPEN_SETTINGS_ANCHOR}) behaviour from Settings. ` +
`[Learn more about variable values](${__WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["_6" /* SESSION_VARIABLE_DOCS */]})`,
alertMessageWithoutAutoPersist = 'Use variables to reuse values in different places. Work with the current value of a variable' +
` to prevent sharing sensitive values with your team. [Learn more about variable values](${__WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["_6" /* SESSION_VARIABLE_DOCS */]})`;let


VariableAlertWrapper = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class VariableAlertWrapper extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleMessageLinkClick = this.handleMessageLinkClick.bind(this);
    this.handleDismissAlert = this.handleDismissAlert.bind(this);
    this.state = { showAlert: pm.settings.getSetting('showSessionVariablesAlert') };

    this.handleSettingUpdate = this.handleSettingUpdate.bind(this);
  }

  componentDidMount() {
    pm.settings.on('setSetting:showSessionVariablesAlert', this.handleSettingUpdate);
  }

  componentWillUnmount() {
    pm.settings.off('setSetting:showSessionVariablesAlert', this.handleSettingUpdate);
  }

  handleMessageLinkClick(target) {
    if (target === OPEN_SETTINGS_ANCHOR) {
      pm.mediator.trigger('openSettingsModal', __WEBPACK_IMPORTED_MODULE_3__constants_SettingsTypeConstants__["e" /* SETTINGS_GENERAL */]);
    }
    this.props.onMessageLinkClick && this.props.onMessageLinkClick(target);
  }

  handleDismissAlert() {
    pm.settings.setSetting('showSessionVariablesAlert', false);
  }

  handleSettingUpdate() {
    this.setState({ showAlert: pm.settings.getSetting('showSessionVariablesAlert') });
  }

  render() {
    let configMap = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["getStore"])('ConfigurationStore').configs,
    alertMessage = configMap.get('request.autoPersistVariables') ?
    alertMessageWithAutoPersist : alertMessageWithoutAutoPersist;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.props.className },

        this.state.showAlert &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_messaging_Alert__["a" /* default */], {
          type: 'info',
          message: alertMessage,
          onMessageLinkClick: this.handleMessageLinkClick,
          onDismiss: this.handleDismissAlert })));




  }}) || _class;

/***/ }),

/***/ 3621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ProfilePic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Meta; });
/* unused harmony export Body */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Folder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Collection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Details; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Restore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_date_helper__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_date_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_date_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_postman_collection__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_postman_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Avatar__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_ActivityFeedDetailsMapConstant__ = __webpack_require__(3743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__WorkspaceActivityFeedDetailsComponents__ = __webpack_require__(4685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(5);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;








let

Header = class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-header' },
        this.props.children));


  }};let


Heading = class Heading extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-heading' },
        this.props.children));


  }};let


ProfilePic = class ProfilePic extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-profile-pic-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Avatar__["a" /* default */], { type: 'user', userId: this.props.id })));


  }};let


Meta = class Meta extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-meta' },
        this.props.children));


  }};let


Body = class Body extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-body' },
        this.props.children));


  }};let


Folder = class Folder extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let payload = {
      type: 'folder',
      id: this.props.id };

    if (this.props.actionHandler) {
      this.props.actionHandler(payload);
    }
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-activity-item-folder',
          onClick: this.handleClick },
        this.props.name));

  }};let


Response = class Response extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let payload = {
      type: 'response',
      id: this.props.id };

    if (this.props.actionHandler) {
      this.props.actionHandler(payload);
    }
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-activity-item-response',
          onClick: this.handleClick },
        this.props.name));

  }};let


Request = class Request extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let payload = {
      type: '`request`',
      id: this.props.id };

    if (this.props.actionHandler) {
      this.props.actionHandler(payload);
    }
  }

  render() {
    let methodClasses = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(
    'activity-item-request-method',
    `method-${this.props.method}`);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-activity-item-request-name', onClick: this.handleClick },
        this.props.name));


  }};let


Collection = class Collection extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let payload = {
      type: 'collection',
      id: this.props.id };

    if (this.props.actionHandler) {
      this.props.actionHandler(payload);
    }
  }

  render() {
    let methodClasses = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(
    'activity-item-collection-method',
    `method-${this.props.method}`),

    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

        meta.model === 'collection' ?
        ' this ' :
        !_.isEmpty(this.props.name) ?
        ' the ' :
        ' a ',

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'collection '),

        meta.model === 'workspace' &&
        !_.isEmpty(this.props.name) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-activity-item-collection-name', onClick: this.handleClick }, this.props.name)));



  }};let



User = Object(__WEBPACK_IMPORTED_MODULE_7_mobx_react__["a" /* observer */])(_class = class User extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["getStore"])('CurrentUserStore');

    let displayName = currentUser.id === this.props.id ? 'You' : this.props.name || this.props.username;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-activity-item-user' }, displayName, ','));

  }}) || _class;let


Time = class Time extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let formattedTime = __WEBPACK_IMPORTED_MODULE_2__postman_date_helper___default.a.getFormattedTime(this.props.timestamp);
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-activity-item-time' }, formattedTime));

  }};let


Details = class Details extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  filterEntity(entity, data) {
    if (_.includes(['test', 'prerequest'], entity)) {
      return this.processEvents(entity, data);
    }
    return data;
  }

  processEvents(processDataType, data) {
    let sdkEvents = new __WEBPACK_IMPORTED_MODULE_3_postman_collection__["EventList"]({}, data),
    entityEvent = _.head(sdkEvents.listenersOwn(processDataType));

    return _.invoke(entityEvent, 'script.toSource');
  }

  render() {
    let {
      input = {},
      rollback = {},
      model,
      instance,
      detailsError = false } =
    this.props;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-details-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-details' },

          _.map(__WEBPACK_IMPORTED_MODULE_5__constants_ActivityFeedDetailsMapConstant__["a" /* default */], (activity, index) => {
            let entity = activity.entity,
            previous = rollback[entity],
            current = input[entity],
            filterEntity = activity.filterEntity,
            isChangeSetAvailable = false;

            if (filterEntity) {
              previous = this.filterEntity(filterEntity, previous);
              current = this.filterEntity(filterEntity, current);
            }

            isChangeSetAvailable = previous || current;

            if (isChangeSetAvailable && entity === 'order') {
              previous = null;
              current = 'Changed';
            }
            if (isChangeSetAvailable) {
              return (
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__WorkspaceActivityFeedDetailsComponents__["a" /* DetailsItem */], _extends({
                  key: activity.entity + index,
                  previous: previous || '',
                  current: current || '',
                  model: model,
                  name: instance.name || '' },
                activity)));


            }
            return false;
          }))));




  }};let


Restore = class Restore extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onRestore && this.props.onRestore(this.props.id);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'workspace-activity-item-restore': true,
      'workspace-activity-item-restore--is-restoring': this.props.isRestoring });

  }

  render() {
    if (_.isNil(this.props.id) ||
    _.isNil(this.props.rollback_from) ||
    this.props.id < this.props.rollback_from) {
      return false;
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: this.getClasses(), onClick: this.handleClick },
        this.props.isRestoring ? 'Restoring...' : 'Restore'));


  }};



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkedList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__iterator_js__ = __webpack_require__(3586);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var Node = /** @class */function () {
    function Node(element) {
        this.element = element;
        this.next = Node.Undefined;
        this.prev = Node.Undefined;
    }
    Node.Undefined = new Node(undefined);
    return Node;
}();
var LinkedList = /** @class */function () {
    function LinkedList() {
        this._first = Node.Undefined;
        this._last = Node.Undefined;
        this._size = 0;
    }
    Object.defineProperty(LinkedList.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true });

    LinkedList.prototype.isEmpty = function () {
        return this._first === Node.Undefined;
    };
    LinkedList.prototype.clear = function () {
        this._first = Node.Undefined;
        this._last = Node.Undefined;
        this._size = 0;
    };
    LinkedList.prototype.unshift = function (element) {
        return this._insert(element, false);
    };
    LinkedList.prototype.push = function (element) {
        return this._insert(element, true);
    };
    LinkedList.prototype._insert = function (element, atTheEnd) {
        var _this = this;
        var newNode = new Node(element);
        if (this._first === Node.Undefined) {
            this._first = newNode;
            this._last = newNode;
        } else
        if (atTheEnd) {
            // push
            var oldLast = this._last;
            this._last = newNode;
            newNode.prev = oldLast;
            oldLast.next = newNode;
        } else
        {
            // unshift
            var oldFirst = this._first;
            this._first = newNode;
            newNode.next = oldFirst;
            oldFirst.prev = newNode;
        }
        this._size += 1;
        var didRemove = false;
        return function () {
            if (!didRemove) {
                didRemove = true;
                _this._remove(newNode);
            }
        };
    };
    LinkedList.prototype.shift = function () {
        if (this._first === Node.Undefined) {
            return undefined;
        } else
        {
            var res = this._first.element;
            this._remove(this._first);
            return res;
        }
    };
    LinkedList.prototype._remove = function (node) {
        if (node.prev !== Node.Undefined && node.next !== Node.Undefined) {
            // middle
            var anchor = node.prev;
            anchor.next = node.next;
            node.next.prev = anchor;
        } else
        if (node.prev === Node.Undefined && node.next === Node.Undefined) {
            // only node
            this._first = Node.Undefined;
            this._last = Node.Undefined;
        } else
        if (node.next === Node.Undefined) {
            // last
            this._last = this._last.prev;
            this._last.next = Node.Undefined;
        } else
        if (node.prev === Node.Undefined) {
            // first
            this._first = this._first.next;
            this._first.prev = Node.Undefined;
        }
        // done
        this._size -= 1;
    };
    LinkedList.prototype.iterator = function () {
        var element;
        var node = this._first;
        return {
            next: function () {
                if (node === Node.Undefined) {
                    return __WEBPACK_IMPORTED_MODULE_0__iterator_js__["b" /* FIN */];
                }
                if (!element) {
                    element = { done: false, value: node.element };
                } else
                {
                    element.value = node.element;
                }
                node = node.next;
                return element;
            } };

    };
    LinkedList.prototype.toArray = function () {
        var result = [];
        for (var node = this._first; node !== Node.Undefined; node = node.next) {
            result.push(node.element);
        }
        return result;
    };
    return LinkedList;
}();


/***/ }),

/***/ 3658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "win32", function() { return win32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posix", function() { return posix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return relative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirname", function() { return dirname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return basename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extname", function() { return extname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sep", function() { return sep; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__process_js__ = __webpack_require__(4295);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
        { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
        function (d, b) {for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {this.constructor = d;}
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
// NOTE: VSCode's copy of nodejs path library to be usable in common (non-node) namespace
// Copied from: https://github.com/nodejs/node/tree/43dd49c9782848c25e5b03448c8a0f923f13c158
/**
 * Copyright Joyent, Inc. and other Node contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 * NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var CHAR_UPPERCASE_A = 65; /* A */
var CHAR_LOWERCASE_A = 97; /* a */
var CHAR_UPPERCASE_Z = 90; /* Z */
var CHAR_LOWERCASE_Z = 122; /* z */
var CHAR_DOT = 46; /* . */
var CHAR_FORWARD_SLASH = 47; /* / */
var CHAR_BACKWARD_SLASH = 92; /* \ */
var CHAR_COLON = 58; /* : */
var CHAR_QUESTION_MARK = 63; /* ? */
var ErrorInvalidArgType = /** @class */function (_super) {
    __extends(ErrorInvalidArgType, _super);
    function ErrorInvalidArgType(name, expected, actual) {
        var _this = this;
        // determiner: 'must be' or 'must not be'
        var determiner;
        if (typeof expected === 'string' && expected.indexOf('not ') === 0) {
            determiner = 'must not be';
            expected = expected.replace(/^not /, '');
        } else
        {
            determiner = 'must be';
        }
        var type = name.indexOf('.') !== -1 ? 'property' : 'argument';
        var msg = "The \"" + name + "\" " + type + " " + determiner + " of type " + expected;
        msg += ". Received type " + typeof actual;
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return ErrorInvalidArgType;
}(Error);
function validateString(value, name) {
    if (typeof value !== 'string') {
        throw new ErrorInvalidArgType(name, 'string', value);
    }
}
function isPathSeparator(code) {
    return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
}
function isPosixPathSeparator(code) {
    return code === CHAR_FORWARD_SLASH;
}
function isWindowsDeviceRoot(code) {
    return code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z ||
    code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z;
}
// Resolves . and .. elements in a path with directory names
function normalizeString(path, allowAboveRoot, separator, isPathSeparator) {
    var res = '';
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for (var i = 0; i <= path.length; ++i) {
        if (i < path.length) {
            code = path.charCodeAt(i);
        } else
        if (isPathSeparator(code)) {
            break;
        } else
        {
            code = CHAR_FORWARD_SLASH;
        }
        if (isPathSeparator(code)) {
            if (lastSlash === i - 1 || dots === 1) {
                // NOOP
            } else
            if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 ||
                res.charCodeAt(res.length - 1) !== CHAR_DOT ||
                res.charCodeAt(res.length - 2) !== CHAR_DOT) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf(separator);
                        if (lastSlashIndex === -1) {
                            res = '';
                            lastSegmentLength = 0;
                        } else
                        {
                            res = res.slice(0, lastSlashIndex);
                            lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
                        }
                        lastSlash = i;
                        dots = 0;
                        continue;
                    } else
                    if (res.length === 2 || res.length === 1) {
                        res = '';
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) {
                        res += separator + "..";
                    } else
                    {
                        res = '..';
                    }
                    lastSegmentLength = 2;
                }
            } else
            {
                if (res.length > 0) {
                    res += separator + path.slice(lastSlash + 1, i);
                } else
                {
                    res = path.slice(lastSlash + 1, i);
                }
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else
        if (code === CHAR_DOT && dots !== -1) {
            ++dots;
        } else
        {
            dots = -1;
        }
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base ||
    (pathObject.name || '') + (pathObject.ext || '');
    if (!dir) {
        return base;
    }
    if (dir === pathObject.root) {
        return dir + base;
    }
    return dir + sep + base;
}
var win32 = {
    // path.resolve([from ...], to)
    resolve: function () {
        var pathSegments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pathSegments[_i] = arguments[_i];
        }
        var resolvedDevice = '';
        var resolvedTail = '';
        var resolvedAbsolute = false;
        for (var i = pathSegments.length - 1; i >= -1; i--) {
            var path = void 0;
            if (i >= 0) {
                path = pathSegments[i];
            } else
            if (!resolvedDevice) {
                path = __WEBPACK_IMPORTED_MODULE_0__process_js__["a" /* cwd */]();
            } else
            {
                // Windows has the concept of drive-specific current working
                // directories. If we've resolved a drive letter but not yet an
                // absolute path, get cwd for that drive, or the process cwd if
                // the drive cwd is not available. We're sure the device is not
                // a UNC path at this points, because UNC paths are always absolute.
                path = __WEBPACK_IMPORTED_MODULE_0__process_js__["b" /* env */]['=' + resolvedDevice] || __WEBPACK_IMPORTED_MODULE_0__process_js__["a" /* cwd */]();
                // Verify that a cwd was found and that it actually points
                // to our drive. If not, default to the drive's root.
                if (path === undefined ||
                path.slice(0, 3).toLowerCase() !==
                resolvedDevice.toLowerCase() + '\\') {
                    path = resolvedDevice + '\\';
                }
            }
            validateString(path, 'path');
            // Skip empty entries
            if (path.length === 0) {
                continue;
            }
            var len = path.length;
            var rootEnd = 0;
            var device = '';
            var isAbsolute = false;
            var code = path.charCodeAt(0);
            // Try to match a root
            if (len > 1) {
                if (isPathSeparator(code)) {
                    // Possible UNC root
                    // If we started with a separator, we know we at least have an
                    // absolute path of some kind (UNC or otherwise)
                    isAbsolute = true;
                    if (isPathSeparator(path.charCodeAt(1))) {
                        // Matched double path separator at beginning
                        var j = 2;
                        var last = j;
                        // Match 1 or more non-path separators
                        for (; j < len; ++j) {
                            if (isPathSeparator(path.charCodeAt(j))) {
                                break;
                            }
                        }
                        if (j < len && j !== last) {
                            var firstPart = path.slice(last, j);
                            // Matched!
                            last = j;
                            // Match 1 or more path separators
                            for (; j < len; ++j) {
                                if (!isPathSeparator(path.charCodeAt(j))) {
                                    break;
                                }
                            }
                            if (j < len && j !== last) {
                                // Matched!
                                last = j;
                                // Match 1 or more non-path separators
                                for (; j < len; ++j) {
                                    if (isPathSeparator(path.charCodeAt(j))) {
                                        break;
                                    }
                                }
                                if (j === len) {
                                    // We matched a UNC root only
                                    device = '\\\\' + firstPart + '\\' + path.slice(last);
                                    rootEnd = j;
                                } else
                                if (j !== last) {
                                    // We matched a UNC root with leftovers
                                    device = '\\\\' + firstPart + '\\' + path.slice(last, j);
                                    rootEnd = j;
                                }
                            }
                        }
                    } else
                    {
                        rootEnd = 1;
                    }
                } else
                if (isWindowsDeviceRoot(code)) {
                    // Possible device root
                    if (path.charCodeAt(1) === CHAR_COLON) {
                        device = path.slice(0, 2);
                        rootEnd = 2;
                        if (len > 2) {
                            if (isPathSeparator(path.charCodeAt(2))) {
                                // Treat separator following drive name as an absolute path
                                // indicator
                                isAbsolute = true;
                                rootEnd = 3;
                            }
                        }
                    }
                }
            } else
            if (isPathSeparator(code)) {
                // `path` contains just a path separator
                rootEnd = 1;
                isAbsolute = true;
            }
            if (device.length > 0 &&
            resolvedDevice.length > 0 &&
            device.toLowerCase() !== resolvedDevice.toLowerCase()) {
                // This path points to another device so it is not applicable
                continue;
            }
            if (resolvedDevice.length === 0 && device.length > 0) {
                resolvedDevice = device;
            }
            if (!resolvedAbsolute) {
                resolvedTail = path.slice(rootEnd) + '\\' + resolvedTail;
                resolvedAbsolute = isAbsolute;
            }
            if (resolvedDevice.length > 0 && resolvedAbsolute) {
                break;
            }
        }
        // At this point the path should be resolved to a full absolute path,
        // but handle relative paths to be safe (might happen when process.cwd()
        // fails)
        // Normalize the tail path
        resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, '\\', isPathSeparator);
        return resolvedDevice + (resolvedAbsolute ? '\\' : '') + resolvedTail ||
        '.';
    },
    normalize: function (path) {
        validateString(path, 'path');
        var len = path.length;
        if (len === 0) {
            return '.';
        }
        var rootEnd = 0;
        var device;
        var isAbsolute = false;
        var code = path.charCodeAt(0);
        // Try to match a root
        if (len > 1) {
            if (isPathSeparator(code)) {
                // Possible UNC root
                // If we started with a separator, we know we at least have an absolute
                // path of some kind (UNC or otherwise)
                isAbsolute = true;
                if (isPathSeparator(path.charCodeAt(1))) {
                    // Matched double path separator at beginning
                    var j = 2;
                    var last = j;
                    // Match 1 or more non-path separators
                    for (; j < len; ++j) {
                        if (isPathSeparator(path.charCodeAt(j))) {
                            break;
                        }
                    }
                    if (j < len && j !== last) {
                        var firstPart = path.slice(last, j);
                        // Matched!
                        last = j;
                        // Match 1 or more path separators
                        for (; j < len; ++j) {
                            if (!isPathSeparator(path.charCodeAt(j))) {
                                break;
                            }
                        }
                        if (j < len && j !== last) {
                            // Matched!
                            last = j;
                            // Match 1 or more non-path separators
                            for (; j < len; ++j) {
                                if (isPathSeparator(path.charCodeAt(j))) {
                                    break;
                                }
                            }
                            if (j === len) {
                                // We matched a UNC root only
                                // Return the normalized version of the UNC root since there
                                // is nothing left to process
                                return '\\\\' + firstPart + '\\' + path.slice(last) + '\\';
                            } else
                            if (j !== last) {
                                // We matched a UNC root with leftovers
                                device = '\\\\' + firstPart + '\\' + path.slice(last, j);
                                rootEnd = j;
                            }
                        }
                    }
                } else
                {
                    rootEnd = 1;
                }
            } else
            if (isWindowsDeviceRoot(code)) {
                // Possible device root
                if (path.charCodeAt(1) === CHAR_COLON) {
                    device = path.slice(0, 2);
                    rootEnd = 2;
                    if (len > 2) {
                        if (isPathSeparator(path.charCodeAt(2))) {
                            // Treat separator following drive name as an absolute path
                            // indicator
                            isAbsolute = true;
                            rootEnd = 3;
                        }
                    }
                }
            }
        } else
        if (isPathSeparator(code)) {
            // `path` contains just a path separator, exit early to avoid unnecessary
            // work
            return '\\';
        }
        var tail;
        if (rootEnd < len) {
            tail = normalizeString(path.slice(rootEnd), !isAbsolute, '\\', isPathSeparator);
        } else
        {
            tail = '';
        }
        if (tail.length === 0 && !isAbsolute) {
            tail = '.';
        }
        if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) {
            tail += '\\';
        }
        if (device === undefined) {
            if (isAbsolute) {
                if (tail.length > 0) {
                    return '\\' + tail;
                } else
                {
                    return '\\';
                }
            } else
            if (tail.length > 0) {
                return tail;
            } else
            {
                return '';
            }
        } else
        if (isAbsolute) {
            if (tail.length > 0) {
                return device + '\\' + tail;
            } else
            {
                return device + '\\';
            }
        } else
        if (tail.length > 0) {
            return device + tail;
        } else
        {
            return device;
        }
    },
    isAbsolute: function (path) {
        validateString(path, 'path');
        var len = path.length;
        if (len === 0) {
            return false;
        }
        var code = path.charCodeAt(0);
        if (isPathSeparator(code)) {
            return true;
        } else
        if (isWindowsDeviceRoot(code)) {
            // Possible device root
            if (len > 2 && path.charCodeAt(1) === CHAR_COLON) {
                if (isPathSeparator(path.charCodeAt(2))) {
                    return true;
                }
            }
        }
        return false;
    },
    join: function () {
        var paths = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paths[_i] = arguments[_i];
        }
        if (paths.length === 0) {
            return '.';
        }
        var joined;
        var firstPart;
        for (var i = 0; i < paths.length; ++i) {
            var arg = paths[i];
            validateString(arg, 'path');
            if (arg.length > 0) {
                if (joined === undefined) {
                    joined = firstPart = arg;
                } else
                {
                    joined += '\\' + arg;
                }
            }
        }
        if (joined === undefined) {
            return '.';
        }
        // Make sure that the joined path doesn't start with two slashes, because
        // normalize() will mistake it for an UNC path then.
        //
        // This step is skipped when it is very clear that the user actually
        // intended to point at an UNC path. This is assumed when the first
        // non-empty string arguments starts with exactly two slashes followed by
        // at least one more non-slash character.
        //
        // Note that for normalize() to treat a path as an UNC path it needs to
        // have at least 2 components, so we don't filter for that here.
        // This means that the user can use join to construct UNC paths from
        // a server name and a share name; for example:
        //   path.join('//server', 'share') -> '\\\\server\\share\\')
        var needsReplace = true;
        var slashCount = 0;
        if (typeof firstPart === 'string' && isPathSeparator(firstPart.charCodeAt(0))) {
            ++slashCount;
            var firstLen = firstPart.length;
            if (firstLen > 1) {
                if (isPathSeparator(firstPart.charCodeAt(1))) {
                    ++slashCount;
                    if (firstLen > 2) {
                        if (isPathSeparator(firstPart.charCodeAt(2))) {
                            ++slashCount;
                        } else
                        {
                            // We matched a UNC path in the first part
                            needsReplace = false;
                        }
                    }
                }
            }
        }
        if (needsReplace) {
            // Find any more consecutive slashes we need to replace
            for (; slashCount < joined.length; ++slashCount) {
                if (!isPathSeparator(joined.charCodeAt(slashCount))) {
                    break;
                }
            }
            // Replace the slashes if needed
            if (slashCount >= 2) {
                joined = '\\' + joined.slice(slashCount);
            }
        }
        return win32.normalize(joined);
    },
    // It will solve the relative path from `from` to `to`, for instance:
    //  from = 'C:\\orandea\\test\\aaa'
    //  to = 'C:\\orandea\\impl\\bbb'
    // The output of the function should be: '..\\..\\impl\\bbb'
    relative: function (from, to) {
        validateString(from, 'from');
        validateString(to, 'to');
        if (from === to) {
            return '';
        }
        var fromOrig = win32.resolve(from);
        var toOrig = win32.resolve(to);
        if (fromOrig === toOrig) {
            return '';
        }
        from = fromOrig.toLowerCase();
        to = toOrig.toLowerCase();
        if (from === to) {
            return '';
        }
        // Trim any leading backslashes
        var fromStart = 0;
        for (; fromStart < from.length; ++fromStart) {
            if (from.charCodeAt(fromStart) !== CHAR_BACKWARD_SLASH) {
                break;
            }
        }
        // Trim trailing backslashes (applicable to UNC paths only)
        var fromEnd = from.length;
        for (; fromEnd - 1 > fromStart; --fromEnd) {
            if (from.charCodeAt(fromEnd - 1) !== CHAR_BACKWARD_SLASH) {
                break;
            }
        }
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 0;
        for (; toStart < to.length; ++toStart) {
            if (to.charCodeAt(toStart) !== CHAR_BACKWARD_SLASH) {
                break;
            }
        }
        // Trim trailing backslashes (applicable to UNC paths only)
        var toEnd = to.length;
        for (; toEnd - 1 > toStart; --toEnd) {
            if (to.charCodeAt(toEnd - 1) !== CHAR_BACKWARD_SLASH) {
                break;
            }
        }
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for (; i <= length; ++i) {
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
                        // We get here if `from` is the exact base path for `to`.
                        // For example: from='C:\\foo\\bar'; to='C:\\foo\\bar\\baz'
                        return toOrig.slice(toStart + i + 1);
                    } else
                    if (i === 2) {
                        // We get here if `from` is the device root.
                        // For example: from='C:\\'; to='C:\\foo'
                        return toOrig.slice(toStart + i);
                    }
                }
                if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
                        // We get here if `to` is the exact base path for `from`.
                        // For example: from='C:\\foo\\bar'; to='C:\\foo'
                        lastCommonSep = i;
                    } else
                    if (i === 2) {
                        // We get here if `to` is the device root.
                        // For example: from='C:\\foo\\bar'; to='C:\\'
                        lastCommonSep = 3;
                    }
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) {
                break;
            } else
            if (fromCode === CHAR_BACKWARD_SLASH) {
                lastCommonSep = i;
            }
        }
        // We found a mismatch before the first common path separator was seen, so
        // return the original `to`.
        if (i !== length && lastCommonSep === -1) {
            return toOrig;
        }
        var out = '';
        if (lastCommonSep === -1) {
            lastCommonSep = 0;
        }
        // Generate the relative path based on the path difference between `to` and
        // `from`
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
            if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
                if (out.length === 0) {
                    out += '..';
                } else
                {
                    out += '\\..';
                }
            }
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) {
            return out + toOrig.slice(toStart + lastCommonSep, toEnd);
        } else
        {
            toStart += lastCommonSep;
            if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
                ++toStart;
            }
            return toOrig.slice(toStart, toEnd);
        }
    },
    toNamespacedPath: function (path) {
        // Note: this will *probably* throw somewhere.
        if (typeof path !== 'string') {
            return path;
        }
        if (path.length === 0) {
            return '';
        }
        var resolvedPath = win32.resolve(path);
        if (resolvedPath.length >= 3) {
            if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
                // Possible UNC root
                if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
                    var code = resolvedPath.charCodeAt(2);
                    if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
                        // Matched non-long UNC root, convert the path to a long UNC path
                        return '\\\\?\\UNC\\' + resolvedPath.slice(2);
                    }
                }
            } else
            if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0))) {
                // Possible device root
                if (resolvedPath.charCodeAt(1) === CHAR_COLON &&
                resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
                    // Matched device root, convert the path to a long UNC path
                    return '\\\\?\\' + resolvedPath;
                }
            }
        }
        return path;
    },
    dirname: function (path) {
        validateString(path, 'path');
        var len = path.length;
        if (len === 0) {
            return '.';
        }
        var rootEnd = -1;
        var end = -1;
        var matchedSlash = true;
        var offset = 0;
        var code = path.charCodeAt(0);
        // Try to match a root
        if (len > 1) {
            if (isPathSeparator(code)) {
                // Possible UNC root
                rootEnd = offset = 1;
                if (isPathSeparator(path.charCodeAt(1))) {
                    // Matched double path separator at beginning
                    var j = 2;
                    var last = j;
                    // Match 1 or more non-path separators
                    for (; j < len; ++j) {
                        if (isPathSeparator(path.charCodeAt(j))) {
                            break;
                        }
                    }
                    if (j < len && j !== last) {
                        // Matched!
                        last = j;
                        // Match 1 or more path separators
                        for (; j < len; ++j) {
                            if (!isPathSeparator(path.charCodeAt(j))) {
                                break;
                            }
                        }
                        if (j < len && j !== last) {
                            // Matched!
                            last = j;
                            // Match 1 or more non-path separators
                            for (; j < len; ++j) {
                                if (isPathSeparator(path.charCodeAt(j))) {
                                    break;
                                }
                            }
                            if (j === len) {
                                // We matched a UNC root only
                                return path;
                            }
                            if (j !== last) {
                                // We matched a UNC root with leftovers
                                // Offset by 1 to include the separator after the UNC root to
                                // treat it as a "normal root" on top of a (UNC) root
                                rootEnd = offset = j + 1;
                            }
                        }
                    }
                }
            } else
            if (isWindowsDeviceRoot(code)) {
                // Possible device root
                if (path.charCodeAt(1) === CHAR_COLON) {
                    rootEnd = offset = 2;
                    if (len > 2) {
                        if (isPathSeparator(path.charCodeAt(2))) {
                            rootEnd = offset = 3;
                        }
                    }
                }
            }
        } else
        if (isPathSeparator(code)) {
            // `path` contains just a path separator, exit early to avoid
            // unnecessary work
            return path;
        }
        for (var i = len - 1; i >= offset; --i) {
            if (isPathSeparator(path.charCodeAt(i))) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else
            {
                // We saw the first non-path separator
                matchedSlash = false;
            }
        }
        if (end === -1) {
            if (rootEnd === -1) {
                return '.';
            } else
            {
                end = rootEnd;
            }
        }
        return path.slice(0, end);
    },
    basename: function (path, ext) {
        if (ext !== undefined) {
            validateString(ext, 'ext');
        }
        validateString(path, 'path');
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        // Check for a drive letter prefix so as not to mistake the following
        // path separator as an extra separator at the end of the path that can be
        // disregarded
        if (path.length >= 2) {
            var drive = path.charCodeAt(0);
            if (isWindowsDeviceRoot(drive)) {
                if (path.charCodeAt(1) === CHAR_COLON) {
                    start = 2;
                }
            }
        }
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) {
                return '';
            }
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for (i = path.length - 1; i >= start; --i) {
                var code = path.charCodeAt(i);
                if (isPathSeparator(code)) {
                    // If we reached a path separator that was not part of a set of path
                    // separators at the end of the string, stop now
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else
                {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) {
                                // We matched the extension, so mark this as the end of our path
                                // component
                                end = i;
                            }
                        } else
                        {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) {
                end = firstNonSlashEnd;
            } else
            if (end === -1) {
                end = path.length;
            }
            return path.slice(start, end);
        } else
        {
            for (i = path.length - 1; i >= start; --i) {
                if (isPathSeparator(path.charCodeAt(i))) {
                    // If we reached a path separator that was not part of a set of path
                    // separators at the end of the string, stop now
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else
                if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) {
                return '';
            }
            return path.slice(start, end);
        }
    },
    extname: function (path) {
        validateString(path, 'path');
        var start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Check for a drive letter prefix so as not to mistake the following
        // path separator as an extra separator at the end of the path that can be
        // disregarded
        if (path.length >= 2 &&
        path.charCodeAt(1) === CHAR_COLON &&
        isWindowsDeviceRoot(path.charCodeAt(0))) {
            start = startPart = 2;
        }
        for (var i = path.length - 1; i >= start; --i) {
            var code = path.charCodeAt(i);
            if (isPathSeparator(code)) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === CHAR_DOT) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) {
                    startDot = i;
                } else
                if (preDotState !== 1) {
                    preDotState = 1;
                }
            } else
            if (startDot !== -1) {
                // We saw a non-dot and non-path separator before our dot, so we should
                // have a good chance at having a non-empty extension
                preDotState = -1;
            }
        }
        if (startDot === -1 ||
        end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 &&
        startDot === end - 1 &&
        startDot === startPart + 1) {
            return '';
        }
        return path.slice(startDot, end);
    },
    format: function (pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') {
            throw new ErrorInvalidArgType('pathObject', 'Object', pathObject);
        }
        return _format('\\', pathObject);
    },
    parse: function (path) {
        validateString(path, 'path');
        var ret = { root: '', dir: '', base: '', ext: '', name: '' };
        if (path.length === 0) {
            return ret;
        }
        var len = path.length;
        var rootEnd = 0;
        var code = path.charCodeAt(0);
        // Try to match a root
        if (len > 1) {
            if (isPathSeparator(code)) {
                // Possible UNC root
                rootEnd = 1;
                if (isPathSeparator(path.charCodeAt(1))) {
                    // Matched double path separator at beginning
                    var j = 2;
                    var last = j;
                    // Match 1 or more non-path separators
                    for (; j < len; ++j) {
                        if (isPathSeparator(path.charCodeAt(j))) {
                            break;
                        }
                    }
                    if (j < len && j !== last) {
                        // Matched!
                        last = j;
                        // Match 1 or more path separators
                        for (; j < len; ++j) {
                            if (!isPathSeparator(path.charCodeAt(j))) {
                                break;
                            }
                        }
                        if (j < len && j !== last) {
                            // Matched!
                            last = j;
                            // Match 1 or more non-path separators
                            for (; j < len; ++j) {
                                if (isPathSeparator(path.charCodeAt(j))) {
                                    break;
                                }
                            }
                            if (j === len) {
                                // We matched a UNC root only
                                rootEnd = j;
                            } else
                            if (j !== last) {
                                // We matched a UNC root with leftovers
                                rootEnd = j + 1;
                            }
                        }
                    }
                }
            } else
            if (isWindowsDeviceRoot(code)) {
                // Possible device root
                if (path.charCodeAt(1) === CHAR_COLON) {
                    rootEnd = 2;
                    if (len > 2) {
                        if (isPathSeparator(path.charCodeAt(2))) {
                            if (len === 3) {
                                // `path` contains just a drive root, exit early to avoid
                                // unnecessary work
                                ret.root = ret.dir = path;
                                return ret;
                            }
                            rootEnd = 3;
                        }
                    } else
                    {
                        // `path` contains just a drive root, exit early to avoid
                        // unnecessary work
                        ret.root = ret.dir = path;
                        return ret;
                    }
                }
            }
        } else
        if (isPathSeparator(code)) {
            // `path` contains just a path separator, exit early to avoid
            // unnecessary work
            ret.root = ret.dir = path;
            return ret;
        }
        if (rootEnd > 0) {
            ret.root = path.slice(0, rootEnd);
        }
        var startDot = -1;
        var startPart = rootEnd;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for (; i >= rootEnd; --i) {
            code = path.charCodeAt(i);
            if (isPathSeparator(code)) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === CHAR_DOT) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) {
                    startDot = i;
                } else
                if (preDotState !== 1) {
                    preDotState = 1;
                }
            } else
            if (startDot !== -1) {
                // We saw a non-dot and non-path separator before our dot, so we should
                // have a good chance at having a non-empty extension
                preDotState = -1;
            }
        }
        if (startDot === -1 ||
        end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 &&
        startDot === end - 1 &&
        startDot === startPart + 1) {
            if (end !== -1) {
                ret.base = ret.name = path.slice(startPart, end);
            }
        } else
        {
            ret.name = path.slice(startPart, startDot);
            ret.base = path.slice(startPart, end);
            ret.ext = path.slice(startDot, end);
        }
        // If the directory is the root, use the entire root as the `dir` including
        // the trailing slash if any (`C:\abc` -> `C:\`). Otherwise, strip out the
        // trailing slash (`C:\abc\def` -> `C:\abc`).
        if (startPart > 0 && startPart !== rootEnd) {
            ret.dir = path.slice(0, startPart - 1);
        } else
        {
            ret.dir = ret.root;
        }
        return ret;
    },
    sep: '\\',
    delimiter: ';',
    win32: null,
    posix: null };

var posix = {
    // path.resolve([from ...], to)
    resolve: function () {
        var pathSegments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pathSegments[_i] = arguments[_i];
        }
        var resolvedPath = '';
        var resolvedAbsolute = false;
        for (var i = pathSegments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
            var path = void 0;
            if (i >= 0) {
                path = pathSegments[i];
            } else
            {
                path = __WEBPACK_IMPORTED_MODULE_0__process_js__["a" /* cwd */]();
            }
            validateString(path, 'path');
            // Skip empty entries
            if (path.length === 0) {
                continue;
            }
            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, '/', isPosixPathSeparator);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) {
                return '/' + resolvedPath;
            } else
            {
                return '/';
            }
        } else
        if (resolvedPath.length > 0) {
            return resolvedPath;
        } else
        {
            return '.';
        }
    },
    normalize: function (path) {
        validateString(path, 'path');
        if (path.length === 0) {
            return '.';
        }
        var isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
        var trailingSeparator = path.charCodeAt(path.length - 1) === CHAR_FORWARD_SLASH;
        // Normalize the path
        path = normalizeString(path, !isAbsolute, '/', isPosixPathSeparator);
        if (path.length === 0 && !isAbsolute) {
            path = '.';
        }
        if (path.length > 0 && trailingSeparator) {
            path += '/';
        }
        if (isAbsolute) {
            return '/' + path;
        }
        return path;
    },
    isAbsolute: function (path) {
        validateString(path, 'path');
        return path.length > 0 && path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    },
    join: function () {
        var paths = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paths[_i] = arguments[_i];
        }
        if (paths.length === 0) {
            return '.';
        }
        var joined;
        for (var i = 0; i < paths.length; ++i) {
            var arg = arguments[i];
            validateString(arg, 'path');
            if (arg.length > 0) {
                if (joined === undefined) {
                    joined = arg;
                } else
                {
                    joined += '/' + arg;
                }
            }
        }
        if (joined === undefined) {
            return '.';
        }
        return posix.normalize(joined);
    },
    relative: function (from, to) {
        validateString(from, 'from');
        validateString(to, 'to');
        if (from === to) {
            return '';
        }
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) {
            return '';
        }
        // Trim any leading backslashes
        var fromStart = 1;
        for (; fromStart < from.length; ++fromStart) {
            if (from.charCodeAt(fromStart) !== CHAR_FORWARD_SLASH) {
                break;
            }
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for (; toStart < to.length; ++toStart) {
            if (to.charCodeAt(toStart) !== CHAR_FORWARD_SLASH) {
                break;
            }
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for (; i <= length; ++i) {
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
                        // We get here if `from` is the exact base path for `to`.
                        // For example: from='/foo/bar'; to='/foo/bar/baz'
                        return to.slice(toStart + i + 1);
                    } else
                    if (i === 0) {
                        // We get here if `from` is the root
                        // For example: from='/'; to='/foo'
                        return to.slice(toStart + i);
                    }
                } else
                if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
                        // We get here if `to` is the exact base path for `from`.
                        // For example: from='/foo/bar/baz'; to='/foo/bar'
                        lastCommonSep = i;
                    } else
                    if (i === 0) {
                        // We get here if `to` is the root.
                        // For example: from='/foo'; to='/'
                        lastCommonSep = 0;
                    }
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) {
                break;
            } else
            if (fromCode === CHAR_FORWARD_SLASH) {
                lastCommonSep = i;
            }
        }
        var out = '';
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
            if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
                if (out.length === 0) {
                    out += '..';
                } else
                {
                    out += '/..';
                }
            }
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) {
            return out + to.slice(toStart + lastCommonSep);
        } else
        {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === CHAR_FORWARD_SLASH) {
                ++toStart;
            }
            return to.slice(toStart);
        }
    },
    toNamespacedPath: function (path) {
        // Non-op on posix systems
        return path;
    },
    dirname: function (path) {
        validateString(path, 'path');
        if (path.length === 0) {
            return '.';
        }
        var hasRoot = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
        var end = -1;
        var matchedSlash = true;
        for (var i = path.length - 1; i >= 1; --i) {
            if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else
            {
                // We saw the first non-path separator
                matchedSlash = false;
            }
        }
        if (end === -1) {
            return hasRoot ? '/' : '.';
        }
        if (hasRoot && end === 1) {
            return '//';
        }
        return path.slice(0, end);
    },
    basename: function (path, ext) {
        if (ext !== undefined) {
            validateString(ext, 'ext');
        }
        validateString(path, 'path');
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) {
                return '';
            }
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for (i = path.length - 1; i >= 0; --i) {
                var code = path.charCodeAt(i);
                if (code === CHAR_FORWARD_SLASH) {
                    // If we reached a path separator that was not part of a set of path
                    // separators at the end of the string, stop now
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else
                {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) {
                                // We matched the extension, so mark this as the end of our path
                                // component
                                end = i;
                            }
                        } else
                        {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) {
                end = firstNonSlashEnd;
            } else
            if (end === -1) {
                end = path.length;
            }
            return path.slice(start, end);
        } else
        {
            for (i = path.length - 1; i >= 0; --i) {
                if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
                    // If we reached a path separator that was not part of a set of path
                    // separators at the end of the string, stop now
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else
                if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) {
                return '';
            }
            return path.slice(start, end);
        }
    },
    extname: function (path) {
        validateString(path, 'path');
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for (var i = path.length - 1; i >= 0; --i) {
            var code = path.charCodeAt(i);
            if (code === CHAR_FORWARD_SLASH) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === CHAR_DOT) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) {
                    startDot = i;
                } else
                if (preDotState !== 1) {
                    preDotState = 1;
                }
            } else
            if (startDot !== -1) {
                // We saw a non-dot and non-path separator before our dot, so we should
                // have a good chance at having a non-empty extension
                preDotState = -1;
            }
        }
        if (startDot === -1 ||
        end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 &&
        startDot === end - 1 &&
        startDot === startPart + 1) {
            return '';
        }
        return path.slice(startDot, end);
    },
    format: function (pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') {
            throw new ErrorInvalidArgType('pathObject', 'Object', pathObject);
        }
        return _format('/', pathObject);
    },
    parse: function (path) {
        validateString(path, 'path');
        var ret = { root: '', dir: '', base: '', ext: '', name: '' };
        if (path.length === 0) {
            return ret;
        }
        var isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
        var start;
        if (isAbsolute) {
            ret.root = '/';
            start = 1;
        } else
        {
            start = 0;
        }
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for (; i >= start; --i) {
            var code = path.charCodeAt(i);
            if (code === CHAR_FORWARD_SLASH) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === CHAR_DOT) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) {
                    startDot = i;
                } else
                if (preDotState !== 1) {
                    preDotState = 1;
                }
            } else
            if (startDot !== -1) {
                // We saw a non-dot and non-path separator before our dot, so we should
                // have a good chance at having a non-empty extension
                preDotState = -1;
            }
        }
        if (startDot === -1 ||
        end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 &&
        startDot === end - 1 &&
        startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) {
                    ret.base = ret.name = path.slice(1, end);
                } else
                {
                    ret.base = ret.name = path.slice(startPart, end);
                }
            }
        } else
        {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else
            {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) {
            ret.dir = path.slice(0, startPart - 1);
        } else
        if (isAbsolute) {
            ret.dir = '/';
        }
        return ret;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null };

posix.win32 = win32.win32 = win32;
posix.posix = win32.posix = posix;
var normalize = __WEBPACK_IMPORTED_MODULE_0__process_js__["c" /* platform */] === 'win32' ? win32.normalize : posix.normalize;
var join = __WEBPACK_IMPORTED_MODULE_0__process_js__["c" /* platform */] === 'win32' ? win32.join : posix.join;
var relative = __WEBPACK_IMPORTED_MODULE_0__process_js__["c" /* platform */] === 'win32' ? win32.relative : posix.relative;
var dirname = __WEBPACK_IMPORTED_MODULE_0__process_js__["c" /* platform */] === 'win32' ? win32.dirname : posix.dirname;
var basename = __WEBPACK_IMPORTED_MODULE_0__process_js__["c" /* platform */] === 'win32' ? win32.basename : posix.basename;
var extname = __WEBPACK_IMPORTED_MODULE_0__process_js__["c" /* platform */] === 'win32' ? win32.extname : posix.extname;
var sep = __WEBPACK_IMPORTED_MODULE_0__process_js__["c" /* platform */] === 'win32' ? win32.sep : posix.sep;

/***/ }),

/***/ 3669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActivityFeedDetailsMapConstant__ = __webpack_require__(3743);
let

ActivityFeedHelper = class ActivityFeedHelper {

  getWhiteListedActivitiesCount(activity) {
    let changesCount = 0;
    if (activity.rollback && activity.input) {
      _.forEach(__WEBPACK_IMPORTED_MODULE_0__constants_ActivityFeedDetailsMapConstant__["a" /* default */], supportedActivity => {
        let entity = supportedActivity.entity;
        if (activity.rollback[entity] || activity.input[entity]) {
          ++changesCount;
        }
      });
    }
    return changesCount;
  }};


/* harmony default export */ __webpack_exports__["a"] = (new ActivityFeedHelper());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionsEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__external_navigation_ExternalNavigationService__ = __webpack_require__(59);



let
CollectionsEmpty = class CollectionsEmpty extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleAddToWorkspace = this.handleAddToWorkspace.bind(this);
    this.handleCreateCollection = this.handleCreateCollection.bind(this);
    this.openLink = this.openLink.bind(this);
  }

  handleCreateCollection() {
    this.props.onClose && this.props.onClose();
    if (this.props.isMember) {
      pm.mediator.trigger('showNewCollectionModal', id => {
        pm.mediator.trigger('focusCollectionInSideBar', id);
      });
    } else
    {
      pm.mediator.trigger('joinWorkspace');
    }
  }

  openLink(url) {
    url && Object(__WEBPACK_IMPORTED_MODULE_3__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(url);
  }

  handleAddToWorkspace() {
    if (this.props.isMember) {
      pm.mediator.trigger('openBulkAddToWorkspaceModal', this.props.workspaceId);
    } else
    {
      pm.mediator.trigger('joinWorkspace');
    }
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__illustration-wrapper entity-empty__illustration-wrapper--collections' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collections-empty__illustration' })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__title' }, 'Looks like you don\u2019t have any collections'),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__subtitle' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'API requests in Postman are saved in '),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'text',
              className: 'learn-more-link',
              onClick: this.openLink.bind(this, __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["r" /* COLLECTION_DOCS */]) }, 'Collections'),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, '. Collections make it easier to organize, test, document and monitor requests. Save some requests in a collection to get started.')),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__action' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'primary',
              onClick: this.handleAddToWorkspace }, 'Add collections to this workspace')),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__action--text' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'text',
              onClick: this.handleCreateCollection }, 'or create a collection'))));






  }};

/***/ }),

/***/ 3704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeybindingsRegistry; });
/* unused harmony export Extensions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_common_keyCodes_js__ = __webpack_require__(3556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_common_platform_js__ = __webpack_require__(3488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commands_common_commands_js__ = __webpack_require__(3528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registry_common_platform_js__ = __webpack_require__(3531);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




var KeybindingsRegistryImpl = /** @class */function () {
    function KeybindingsRegistryImpl() {
        this._coreKeybindings = [];
        this._extensionKeybindings = [];
        this._cachedMergedKeybindings = null;
    }
    /**
       * Take current platform into account and reduce to primary & secondary.
       */
    KeybindingsRegistryImpl.bindToCurrentPlatform = function (kb) {
        if (__WEBPACK_IMPORTED_MODULE_1__base_common_platform_js__["a" /* OS */] === 1 /* Windows */) {
                if (kb && kb.win) {
                    return kb.win;
                }
            } else
        if (__WEBPACK_IMPORTED_MODULE_1__base_common_platform_js__["a" /* OS */] === 2 /* Macintosh */) {
                if (kb && kb.mac) {
                    return kb.mac;
                }
            } else
        {
            if (kb && kb.linux) {
                return kb.linux;
            }
        }
        return kb;
    };
    KeybindingsRegistryImpl.prototype.registerKeybindingRule = function (rule) {
        var actualKb = KeybindingsRegistryImpl.bindToCurrentPlatform(rule);
        if (actualKb && actualKb.primary) {
            var kk = Object(__WEBPACK_IMPORTED_MODULE_0__base_common_keyCodes_js__["f" /* createKeybinding */])(actualKb.primary, __WEBPACK_IMPORTED_MODULE_1__base_common_platform_js__["a" /* OS */]);
            if (kk) {
                this._registerDefaultKeybinding(kk, rule.id, undefined, rule.weight, 0, rule.when);
            }
        }
        if (actualKb && Array.isArray(actualKb.secondary)) {
            for (var i = 0, len = actualKb.secondary.length; i < len; i++) {
                var k = actualKb.secondary[i];
                var kk = Object(__WEBPACK_IMPORTED_MODULE_0__base_common_keyCodes_js__["f" /* createKeybinding */])(k, __WEBPACK_IMPORTED_MODULE_1__base_common_platform_js__["a" /* OS */]);
                if (kk) {
                    this._registerDefaultKeybinding(kk, rule.id, undefined, rule.weight, -i - 1, rule.when);
                }
            }
        }
    };
    KeybindingsRegistryImpl.prototype.registerCommandAndKeybindingRule = function (desc) {
        this.registerKeybindingRule(desc);
        __WEBPACK_IMPORTED_MODULE_2__commands_common_commands_js__["a" /* CommandsRegistry */].registerCommand(desc);
    };
    KeybindingsRegistryImpl._mightProduceChar = function (keyCode) {
        if (keyCode >= 21 /* KEY_0 */ && keyCode <= 30 /* KEY_9 */) {
                return true;
            }
        if (keyCode >= 31 /* KEY_A */ && keyCode <= 56 /* KEY_Z */) {
                return true;
            }
        return keyCode === 80 /* US_SEMICOLON */ ||
        keyCode === 81 /* US_EQUAL */ ||
        keyCode === 82 /* US_COMMA */ ||
        keyCode === 83 /* US_MINUS */ ||
        keyCode === 84 /* US_DOT */ ||
        keyCode === 85 /* US_SLASH */ ||
        keyCode === 86 /* US_BACKTICK */ ||
        keyCode === 110 /* ABNT_C1 */ ||
        keyCode === 111 /* ABNT_C2 */ ||
        keyCode === 87 /* US_OPEN_SQUARE_BRACKET */ ||
        keyCode === 88 /* US_BACKSLASH */ ||
        keyCode === 89 /* US_CLOSE_SQUARE_BRACKET */ ||
        keyCode === 90 /* US_QUOTE */ ||
        keyCode === 91 /* OEM_8 */ ||
        keyCode === 92 /* OEM_102 */;
    };
    KeybindingsRegistryImpl.prototype._assertNoCtrlAlt = function (keybinding, commandId) {
        if (keybinding.ctrlKey && keybinding.altKey && !keybinding.metaKey) {
            if (KeybindingsRegistryImpl._mightProduceChar(keybinding.keyCode)) {
                console.warn('Ctrl+Alt+ keybindings should not be used by default under Windows. Offender: ', keybinding, ' for ', commandId);
            }
        }
    };
    KeybindingsRegistryImpl.prototype._registerDefaultKeybinding = function (keybinding, commandId, commandArgs, weight1, weight2, when) {
        if (__WEBPACK_IMPORTED_MODULE_1__base_common_platform_js__["a" /* OS */] === 1 /* Windows */) {
                this._assertNoCtrlAlt(keybinding.parts[0], commandId);
            }
        this._coreKeybindings.push({
            keybinding: keybinding,
            command: commandId,
            commandArgs: commandArgs,
            when: when,
            weight1: weight1,
            weight2: weight2 });

        this._cachedMergedKeybindings = null;
    };
    KeybindingsRegistryImpl.prototype.getDefaultKeybindings = function () {
        if (!this._cachedMergedKeybindings) {
            this._cachedMergedKeybindings = [].concat(this._coreKeybindings).concat(this._extensionKeybindings);
            this._cachedMergedKeybindings.sort(sorter);
        }
        return this._cachedMergedKeybindings.slice(0);
    };
    return KeybindingsRegistryImpl;
}();
var KeybindingsRegistry = new KeybindingsRegistryImpl();
// Define extension point ids
var Extensions = {
    EditorModes: 'platform.keybindingsRegistry' };

__WEBPACK_IMPORTED_MODULE_3__registry_common_platform_js__["a" /* Registry */].add(Extensions.EditorModes, KeybindingsRegistry);
function sorter(a, b) {
    if (a.weight1 !== b.weight1) {
        return a.weight1 - b.weight1;
    }
    if (a.command < b.command) {
        return -1;
    }
    if (a.command > b.command) {
        return 1;
    }
    return a.weight2 - b.weight2;
}

/***/ }),

/***/ 3705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ITelemetryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instantiation_common_instantiation_js__ = __webpack_require__(3485);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var ITelemetryService = Object(__WEBPACK_IMPORTED_MODULE_0__instantiation_common_instantiation_js__["c" /* createDecorator */])('telemetryService');

/***/ }),

/***/ 3711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = setARIAContainer;
/* harmony export (immutable) */ __webpack_exports__["a"] = alert;
/* harmony export (immutable) */ __webpack_exports__["c"] = status;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aria_css__ = __webpack_require__(4321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aria_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__aria_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nls_js__ = __webpack_require__(3491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_platform_js__ = __webpack_require__(3488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_js__ = __webpack_require__(3486);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




var ariaContainer;
var alertContainer;
var statusContainer;
function setARIAContainer(parent) {
    ariaContainer = document.createElement('div');
    ariaContainer.className = 'monaco-aria-container';
    alertContainer = document.createElement('div');
    alertContainer.className = 'monaco-alert';
    alertContainer.setAttribute('role', 'alert');
    alertContainer.setAttribute('aria-atomic', 'true');
    ariaContainer.appendChild(alertContainer);
    statusContainer = document.createElement('div');
    statusContainer.className = 'monaco-status';
    statusContainer.setAttribute('role', 'status');
    statusContainer.setAttribute('aria-atomic', 'true');
    ariaContainer.appendChild(statusContainer);
    parent.appendChild(ariaContainer);
}
/**
   * Given the provided message, will make sure that it is read as alert to screen readers.
   */
function alert(msg, disableRepeat) {
    insertMessage(alertContainer, msg, disableRepeat);
}
/**
   * Given the provided message, will make sure that it is read as status to screen readers.
   */
function status(msg, disableRepeat) {
    if (__WEBPACK_IMPORTED_MODULE_2__common_platform_js__["d" /* isMacintosh */]) {
        alert(msg, disableRepeat); // VoiceOver does not seem to support status role
    } else
    {
        insertMessage(statusContainer, msg, disableRepeat);
    }
}
var repeatedTimes = 0;
var prevText = undefined;
function insertMessage(target, msg, disableRepeat) {
    if (!ariaContainer) {
        return;
    }
    // If the same message should be inserted that is already present, a screen reader would
    // not announce this message because it matches the previous one. As a workaround, we
    // alter the message with the number of occurences unless this is explicitly disabled
    // via the disableRepeat flag.
    if (!disableRepeat) {
        if (prevText === msg) {
            repeatedTimes++;
        } else
        {
            prevText = msg;
            repeatedTimes = 0;
        }
        switch (repeatedTimes) {
            case 0:break;
            case 1:
                msg = __WEBPACK_IMPORTED_MODULE_1__nls_js__["a" /* localize */]('repeated', "{0} (occurred again)", msg);
                break;
            default:
                msg = __WEBPACK_IMPORTED_MODULE_1__nls_js__["a" /* localize */]('repeatedNtimes', "{0} (occurred {1} times)", msg, repeatedTimes);
                break;}

    }
    __WEBPACK_IMPORTED_MODULE_3__dom_js__["m" /* clearNode */](target);
    target.textContent = msg;
    // See https://www.paciellogroup.com/blog/2012/06/html5-accessibility-chops-aria-rolealert-browser-support/
    target.style.visibility = 'hidden';
    target.style.visibility = 'visible';
}

/***/ }),

/***/ 3743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ActivityFeedDetailsMapConstant = [
{
  entity: 'name',
  label: 'Name',
  view: 'normal' },

{
  entity: 'description',
  label: 'Description',
  view: 'diff',
  diffType: 'lines' },

{
  entity: 'method',
  label: 'Method',
  view: 'normal' },

{
  entity: 'url',
  label: 'Url',
  view: 'diff',
  diffType: 'chars' },

{
  entity: 'headers',
  label: 'Headers',
  view: 'diff',
  diffType: 'lines' },

{
  entity: 'auth',
  label: 'Auth',
  view: 'diff',
  diffType: 'json' },

{
  entity: 'dataMode',
  label: 'Body',
  view: 'normal' },

{
  entity: 'rawModeData',
  label: 'Body',
  view: 'diff',
  diffType: 'lines' },

{
  entity: 'data',
  label: 'Body',
  view: 'diff',
  diffType: 'lines' },

{
  entity: 'events',
  label: 'Tests',
  view: 'diff',
  filterEntity: 'test',
  diffType: 'lines' },

{
  entity: 'events',
  label: 'Pre-request Script',
  view: 'diff',
  filterEntity: 'prerequest',
  diffType: 'lines' },

{
  entity: 'variables',
  label: 'Variables',
  view: 'diff',
  diffType: 'lines' },

{
  entity: 'order',
  label: 'Order',
  view: 'normal' }];



/* harmony default export */ __webpack_exports__["a"] = (ActivityFeedDetailsMapConstant);

/***/ }),

/***/ 3744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Diff; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_diff__ = __webpack_require__(4632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_diff___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_diff__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DiffLine__ = __webpack_require__(4643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DiffTextView__ = __webpack_require__(4645);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};






let


Diff = class Diff extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { showOverlay: false };
  }

  componentDidMount() {
    if (!this.props.ignoreOverlay && this.refs.diff_wrapper) {
      this.computeAndSetOverLay();
    }
  }

  componentWillReceiveProps() {
    if (!this.props.ignoreOverlay && this.refs.diff_wrapper) {
      this.computeAndSetOverLay();
    }
  }

  handleOnExpandableView(from, to, type, modalHeader) {
    if (this.state.showOverlay) {
      pm.mediator.trigger('showDiffModal', from, to, type, modalHeader);
    }
  }

  computeAndSetOverLay() {
    let container = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(this.refs.diff_wrapper),
    childNodesArray = container.childNodes,
    totalChildHeight = 0,
    totalChildWidth = 0,
    isCharType = this.props.type === 'chars',
    isSingleDiffSizeExceeded = false,
    isTotalDiffSizeExceeded = false,
    containerWidth = container.offsetWidth,
    containerHeight = container.offsetHeight;

    _.forEach(childNodesArray, child => {
      let innerChild = child.childNodes[0];
      if (containerWidth < innerChild.offsetWidth ||
      containerHeight < innerChild.offsetHeight) {
        isSingleDiffSizeExceeded = true;
        return false;
      }
      if (isCharType) {
        totalChildWidth += innerChild.offsetWidth;
      } else
      {
        totalChildHeight += innerChild.offsetHeight;
      }
      return true;
    });
    isTotalDiffSizeExceeded = isCharType ? totalChildWidth > containerWidth : totalChildHeight > containerHeight;
    this.setState({ showOverlay: isSingleDiffSizeExceeded || isTotalDiffSizeExceeded });
  }


  getDiff(previous, current, type) {
    let typeVsFunction = {
      chars: __WEBPACK_IMPORTED_MODULE_1_diff__["diffChars"],
      words: __WEBPACK_IMPORTED_MODULE_1_diff__["diffWords"],
      lines: __WEBPACK_IMPORTED_MODULE_1_diff__["diffLines"],
      json: __WEBPACK_IMPORTED_MODULE_1_diff__["diffJson"] };

    return typeVsFunction[type](previous, current);
  }

  getOverlayClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'diff-overlay-wrapper': !this.state.showOverlay,
      'is-expandable': this.state.showOverlay });

  }


  render() {
    let {
      previous,
      current,
      type,
      modalHeader } =
    this.props,
    diff = this.getDiff(previous, current, type);
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: this.getOverlayClasses(),
          onClick: this.handleOnExpandableView.bind(this, previous, current, type, modalHeader) },


        this.props.ignoreOverlay && type !== 'chars' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__DiffLine__["a" /* default */], {
          diff: diff,
          type: type }),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__DiffTextView__["a" /* default */], _extends({
          diff: diff,
          ref: 'diff_wrapper' },
        this.props))));



  }};


Diff.propTypes = {
  current: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object]),
  previous: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object]),
  type: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['chars', 'words', 'lines', 'json']) };


Diff.defaultProps = {
  previous: '',
  current: '',
  type: 'chars' };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3745:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports.lineDiff = undefined;
exports. /*istanbul ignore end*/diffLines = diffLines;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffTrimmedLines = diffTrimmedLines;

var /*istanbul ignore start*/_base = __webpack_require__(3573) /*istanbul ignore end*/;

/*istanbul ignore start*/
var _base2 = _interopRequireDefault(_base);

/*istanbul ignore end*/
var /*istanbul ignore start*/_params = __webpack_require__(3927) /*istanbul ignore end*/;

/*istanbul ignore start*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*istanbul ignore end*/var lineDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/lineDiff = new /*istanbul ignore start*/_base2.default() /*istanbul ignore end*/;
lineDiff.tokenize = function (value) {
  var retLines = [],
      linesAndNewlines = value.split(/(\n|\r\n)/);

  // Ignore the final empty token that occurs if the string ends with a new line
  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  }

  // Merge the content and line separators into single tokens
  for (var i = 0; i < linesAndNewlines.length; i++) {
    var line = linesAndNewlines[i];

    if (i % 2 && !this.options.newlineIsToken) {
      retLines[retLines.length - 1] += line;
    } else {
      if (this.options.ignoreWhitespace) {
        line = line.trim();
      }
      retLines.push(line);
    }
  }

  return retLines;
};

function diffLines(oldStr, newStr, callback) {
  return lineDiff.diff(oldStr, newStr, callback);
}
function diffTrimmedLines(oldStr, newStr, callback) {
  var options = /*istanbul ignore start*/(0, _params.generateOptions) /*istanbul ignore end*/(callback, { ignoreWhitespace: true });
  return lineDiff.diff(oldStr, newStr, options);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2xpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztnQ0E4QmdCO3lEQUNBOztBQS9CaEI7Ozs7OztBQUNBOzs7Ozt1QkFFTyxJQUFNLCtFQUFXLHFFQUFYO0FBQ2IsU0FBUyxRQUFULEdBQW9CLFVBQVMsS0FBVCxFQUFnQjtBQUNsQyxNQUFJLFdBQVcsRUFBWDtNQUNBLG1CQUFtQixNQUFNLEtBQU4sQ0FBWSxXQUFaLENBQW5COzs7QUFGOEIsTUFLOUIsQ0FBQyxpQkFBaUIsaUJBQWlCLE1BQWpCLEdBQTBCLENBQTFCLENBQWxCLEVBQWdEO0FBQ2xELHFCQUFpQixHQUFqQixHQURrRDtHQUFwRDs7O0FBTGtDLE9BVTdCLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxpQkFBaUIsTUFBakIsRUFBeUIsR0FBN0MsRUFBa0Q7QUFDaEQsUUFBSSxPQUFPLGlCQUFpQixDQUFqQixDQUFQLENBRDRDOztBQUdoRCxRQUFJLElBQUksQ0FBSixJQUFTLENBQUMsS0FBSyxPQUFMLENBQWEsY0FBYixFQUE2QjtBQUN6QyxlQUFTLFNBQVMsTUFBVCxHQUFrQixDQUFsQixDQUFULElBQWlDLElBQWpDLENBRHlDO0tBQTNDLE1BRU87QUFDTCxVQUFJLEtBQUssT0FBTCxDQUFhLGdCQUFiLEVBQStCO0FBQ2pDLGVBQU8sS0FBSyxJQUFMLEVBQVAsQ0FEaUM7T0FBbkM7QUFHQSxlQUFTLElBQVQsQ0FBYyxJQUFkLEVBSks7S0FGUDtHQUhGOztBQWFBLFNBQU8sUUFBUCxDQXZCa0M7Q0FBaEI7O0FBMEJiLFNBQVMsU0FBVCxDQUFtQixNQUFuQixFQUEyQixNQUEzQixFQUFtQyxRQUFuQyxFQUE2QztBQUFFLFNBQU8sU0FBUyxJQUFULENBQWMsTUFBZCxFQUFzQixNQUF0QixFQUE4QixRQUE5QixDQUFQLENBQUY7Q0FBN0M7QUFDQSxTQUFTLGdCQUFULENBQTBCLE1BQTFCLEVBQWtDLE1BQWxDLEVBQTBDLFFBQTFDLEVBQW9EO0FBQ3pELE1BQUksVUFBVSw4RUFBZ0IsUUFBaEIsRUFBMEIsRUFBQyxrQkFBa0IsSUFBbEIsRUFBM0IsQ0FBVixDQURxRDtBQUV6RCxTQUFPLFNBQVMsSUFBVCxDQUFjLE1BQWQsRUFBc0IsTUFBdEIsRUFBOEIsT0FBOUIsQ0FBUCxDQUZ5RDtDQUFwRCIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7Z2VuZXJhdGVPcHRpb25zfSBmcm9tICcuLi91dGlsL3BhcmFtcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5lRGlmZiA9IG5ldyBEaWZmKCk7XG5saW5lRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGxldCByZXRMaW5lcyA9IFtdLFxuICAgICAgbGluZXNBbmROZXdsaW5lcyA9IHZhbHVlLnNwbGl0KC8oXFxufFxcclxcbikvKTtcblxuICAvLyBJZ25vcmUgdGhlIGZpbmFsIGVtcHR5IHRva2VuIHRoYXQgb2NjdXJzIGlmIHRoZSBzdHJpbmcgZW5kcyB3aXRoIGEgbmV3IGxpbmVcbiAgaWYgKCFsaW5lc0FuZE5ld2xpbmVzW2xpbmVzQW5kTmV3bGluZXMubGVuZ3RoIC0gMV0pIHtcbiAgICBsaW5lc0FuZE5ld2xpbmVzLnBvcCgpO1xuICB9XG5cbiAgLy8gTWVyZ2UgdGhlIGNvbnRlbnQgYW5kIGxpbmUgc2VwYXJhdG9ycyBpbnRvIHNpbmdsZSB0b2tlbnNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc0FuZE5ld2xpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGxpbmUgPSBsaW5lc0FuZE5ld2xpbmVzW2ldO1xuXG4gICAgaWYgKGkgJSAyICYmICF0aGlzLm9wdGlvbnMubmV3bGluZUlzVG9rZW4pIHtcbiAgICAgIHJldExpbmVzW3JldExpbmVzLmxlbmd0aCAtIDFdICs9IGxpbmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSkge1xuICAgICAgICBsaW5lID0gbGluZS50cmltKCk7XG4gICAgICB9XG4gICAgICByZXRMaW5lcy5wdXNoKGxpbmUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXRMaW5lcztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmTGluZXMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7IHJldHVybiBsaW5lRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cbmV4cG9ydCBmdW5jdGlvbiBkaWZmVHJpbW1lZExpbmVzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykge1xuICBsZXQgb3B0aW9ucyA9IGdlbmVyYXRlT3B0aW9ucyhjYWxsYmFjaywge2lnbm9yZVdoaXRlc3BhY2U6IHRydWV9KTtcbiAgcmV0dXJuIGxpbmVEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xufVxuIl19


/***/ }),

/***/ 3841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__export_single__ = __webpack_require__(1619);


/* harmony default export */ __webpack_exports__["a"] = ({ exportSingle: __WEBPACK_IMPORTED_MODULE_0__export_single__["a" /* default */] });

/***/ }),

/***/ 3842:
/***/ (function(module, exports) {

/**
 * Ace Worker Mirror
 *
 * Source - https://github.com/ajaxorg/ace/blob/master/lib/ace/worker/mirror.js
 */
ace.define('ace/worker/mirror', ['require', 'exports', 'module', 'ace/range', 'ace/document', 'ace/lib/lang'], function (acequire, exports, module) {
  'use strict';

  var Document = acequire('ace/document').Document;
  var lang = acequire('ace/lib/lang');

  var Mirror = exports.Mirror = function (sender) {
    this.sender = sender;
    var doc = this.doc = new Document('');

    var deferredUpdate = this.deferredUpdate = lang.delayedCall(this.onUpdate.bind(this));

    var _self = this;
    sender.on('change', function (e) {
      var data = e.data;
      if (data[0].start) {
        doc.applyDeltas(data);
      } else {
        for (var i = 0; i < data.length; i += 2) {
          if (Array.isArray(data[i + 1])) {
            var d = { action: 'insert', start: data[i], lines: data[i + 1] };
          } else {
            var d = { action: 'remove', start: data[i], end: data[i + 1] };
          }
          doc.applyDelta(d, true);
        }
      }
      if (_self.$timeout)
      return deferredUpdate.schedule(_self.$timeout);
      _self.onUpdate();
    });
  };

  (function () {

    this.$timeout = 500;

    this.setTimeout = function (timeout) {
      this.$timeout = timeout;
    };

    this.setValue = function (value) {
      this.doc.setValue(value);
      this.deferredUpdate.schedule(this.$timeout);
    };

    this.getValue = function (callbackId) {
      this.sender.callback(this.doc.getValue(), callbackId);
    };

    this.onUpdate = function () {
      // abstract method
    };

    this.isPending = function () {
      return this.deferredUpdate.isPending();
    };

  }).call(Mirror.prototype);

});

/***/ }),

/***/ 3843:
/***/ (function(module, exports) {

ace.define('ace/mode/graphql_highlight_rules', ['require', 'exports', 'ace/lib/oop', 'ace/mode/text_highlight_rules'], (acequire, exports) => {

  const oop = acequire('ace/lib/oop');
  const TextHighlightRules = acequire('ace/mode/text_highlight_rules').TextHighlightRules;

  const GraphQLHighlightRules = function () {

    this.$rules = {
      'start': [
      {
        include: '#comment' },

      {
        include: '#comment-multiline' },

      {
        include: '#type-declaration' },

      {
        include: '#union-declaration' },

      {
        include: '#scalar-declaration' },

      {
        include: '#enum-declaration' },

      {
        include: '#operation' },

      {
        include: '#fragment' },

      {
        include: '#selection-set' },

      {
        include: '#variable-declarations' },

      {
        include: '#type-condition' }],

      '#comment': [
      {
        token: 'comment.line.number-sign',
        regex: /#.*$/ }],

      '#comment-multiline': [{
        token: 'comment.block.documentation',
        regex: /"""/,
        push: [{
          token: 'comment.block.documentation',
          regex: /"""/,
          next: 'pop' },
        {
          defaultToken: 'comment.block.documentation' }] }],


      '#null': [
      {
        token: 'constant.language.null',
        regex: /null/ }],

      '#boolean': [
      {
        token: 'constant.language.boolean',
        regex: /true|false/ }],

      '#operation': [
      {
        token: [
        'keyword.operator',
        'meta.operation',
        'entity.name.function'],

        regex: /(query|mutation|subscription)(\s*)([_A-Za-z][_0-9A-Za-z]*)?/ }],

      '#number': [
      {
        token: 'constant.numeric',
        regex: /(\-?)(\d+\.?\d*[eE]?[\+\-]?\d*)/ }],

      '#fragment': [
      {
        token: [
        'keyword.operator',
        'meta.fragment',
        'entity.name.type'],

        regex: /(fragment)(\s*)([_A-Za-z][_0-9A-Za-z]*)?/ }],

      '#fragment-spread': [
      {
        token: [
        'keyword.operator',
        'meta.fragment-spread',
        'entity.name.type'],

        regex: /(\.\.\.)(\s*)(?!on)((?:[_A-Za-z][_0-9A-Za-z]+)?)?/ }],

      '#string': [
      {
        token: 'string.quoted.double',
        regex: /"/,
        push: [
        {
          token: 'string.quoted.double',
          regex: /"/,
          next: 'pop' },

        {
          include: '#escapedCharacter' },

        {
          defaultToken: 'string.quoted.double' }] }],


      '#escapedCharacter': [
      {
        token: 'constant.character.escape',
        regex: /\\(?:u[0-9A-Fa-f]{4}|["\\\/bfnrt])/ }],

      '#enum': [
      {
        token: 'support.constant.enum',
        regex: /[_A-Za-z][_0-9A-Za-z]*/ }],

      '#directive': [
      {
        token: [
        'entity.name.function',
        'meta.directive',
        'entity.name.function'],

        regex: /(@)(\s*)([_A-Za-z][_0-9A-Za-z]*)?/ }],

      '#enum-declaration': [
      {
        token: [
        'keyword.operator',
        'meta.enum-declaration',
        'entity.name.type',
        'meta.enum-declaration'],

        regex: /(enum)(\s+)([_A-Za-z][_0-9A-Za-z]+)?(\s+\{)?/,
        push: [
        {
          token: 'meta.enum-declaration',
          regex: /\}/,
          next: 'pop' },

        {
          include: '#comment' },

        {
          include: '#comment-multiline' },

        {
          include: '#enum' },

        {
          defaultToken: 'meta.enum-declaration' }] }],


      '#scalar-declaration': [
      {
        token: [
        'keyword.operator',
        'meta.scalar-declaration',
        'entity.name.type'],

        regex: /(scalar)(\s+)([_A-Za-z][_0-9A-Za-z]+)?/ }],

      '#union-declaration': [{
        token: [
        'keyword.operator',
        'meta.union-declaration',
        'entity.name.type',
        'meta.union-declaration',
        'keyword.operator'],

        regex: /(union)(\s+)([_A-Za-z][_0-9A-Za-z]*)?(\s+)?(\=)?/,
        push: [
        {
          token: 'meta.union-declaration',
          regex: /$/,
          next: 'pop' },

        {
          token: 'keyword.operator',
          regex: /\|/ },

        {
          token: 'entity.name.type',
          regex: /([_A-Za-z][_0-9A-Za-z]*)/ },

        {
          defaultToken: 'meta.union-declaration' }] }],



      '#type-declaration': [
      {
        token: [
        'keyword.operator',
        'meta.type-declaration',
        'entity.name.function',
        'meta.type-declaration',
        'storage.type',
        'meta.type-declaration',
        'entity.other.inherited-class',
        'meta.type-declaration'],

        regex: /(input|type|interface)(\s+)([_A-Za-z][_0-9A-Za-z]+)?(\s+)?(?:(@)(\s*)([_A-Za-z][_0-9A-Za-z]*))?(\s*\{)?/,
        push: [
        {
          token: 'meta.type-declaration',
          regex: /\}/,
          next: 'pop' },

        {
          token: 'keyword.operator',
          regex: /(implements|\&)/ },

        {
          include: '#comment' },

        {
          include: '#comment-multiline' },

        {
          include: '#directive' },

        {
          include: '#arguments' },

        {
          include: '#type-field' },

        {
          include: '#variable-type' },

        {
          include: '#variable-array' },

        {
          include: '#variable-bang' },

        {
          defaultToken: 'meta.type-declaration' }] }],


      '#type-field': [
      {
        token: 'entity.name.type',
        regex: /([_A-Za-z][_0-9A-Za-z]*)(?=\s*(:|\())/ }],

      '#type-condition': [
      {
        token: [
        'meta.type-condition',
        'keyword.operator',
        'meta.type-condition',
        'entity.name.type'],

        regex: /(\s+)(on)(\s+)([_A-Za-z][_0-9A-Za-z]*)?/ }],

      '#variable-declarations': [
      {
        token: 'meta.variable-declarations',
        regex: /\(/,
        push: [
        {
          token: 'meta.variable-declarations',
          regex: /\)/,
          next: 'pop' },

        {
          include: '#variable-declaration' },

        {
          include: '#variable-type' },

        {
          include: '#variable-array' },

        {
          include: '#variable-bang' },

        {
          include: '#variable-default' },

        {
          include: '#value' },

        {
          include: '#comment' },

        {
          include: '#comment-multiline' },

        {
          defaultToken: 'meta.variable-declarations' }] }],


      '#variable-declaration': [
      {
        token: 'variable.parameter',
        regex: /(\$[_A-Za-z][_0-9A-Za-z]*)(\s*:)/ }],

      '#variable-name': [
      {
        token: 'variable.parameter',
        regex: /\$[_A-Za-z][_0-9A-Za-z]*/ }],

      '#variable-type': [
      {
        token: 'storage.type.variable',
        regex: /[_A-Za-z][_0-9A-Za-z]*/ }],

      '#variable-array': [
      {
        token: 'meta.variable-array',
        regex: /\[/,
        push: [
        {
          token: 'meta.variable-array',
          regex: /\]/,
          next: 'pop' },

        {
          include: '#variable-type' },

        {
          include: '#variable-bang' },

        {
          defaultToken: 'meta.variable-array' }] }],


      '#variable-bang': [
      {
        token: 'keyword.operator',
        regex: /\!/ }],

      '#variable-default': [
      {
        token: 'keyword.operator',
        regex: /=/ }],

      '#selection-set': [
      {
        token: 'meta.selection-set',
        regex: /\{/,
        push: [
        {
          token: 'meta.selection-set',
          regex: /\}/,
          next: 'pop' },

        {
          include: '#comment' },

        {
          include: '#comment-multiline' },

        {
          include: '#selection-set' },

        {
          include: '#fragment-spread' },

        {
          include: '#type-condition' },

        {
          include: '#directive' },

        {
          include: '#arguments' },

        {
          include: '#alias' },

        {
          defaultToken: 'entity.name.type' }] }],


      '#arguments': [
      {
        token: 'meta.arguments',
        regex: /\(/,
        push: [
        {
          token: 'meta.arguments',
          regex: /\)/,
          next: 'pop' },

        {
          include: '#comment' },

        {
          include: '#comment-multiline' },

        {
          include: '#value' },

        {
          defaultToken: 'meta.arguments' }] }],


      '#value': [
      {
        include: '#variable-name' },

      {
        include: '#argument' },

      {
        include: '#string' },

      {
        include: '#number' },

      {
        include: '#boolean' },

      {
        include: '#null' },

      {
        include: '#enum' }],

      '#argument': [
      {
        token: 'variable.other',
        regex: /([_A-Za-z][_0-9A-Za-z]*)(\s*:)/ }],

      '#alias': [
      {
        token: 'entity.section',
        regex: /([_A-Za-z][_0-9A-Za-z]*)(\s*:)/ }] };



    this.normalizeRules();
  };

  oop.inherits(GraphQLHighlightRules, TextHighlightRules);

  exports.GraphQLHighlightRules = GraphQLHighlightRules;

});

ace.define('ace/mode/matching_brace_outdent', ['require', 'exports', 'module', 'ace/range'], function (acequire, exports, module) {
  'use strict';

  var Range = acequire('../range').Range;

  var MatchingBraceOutdent = function () {};

  (function () {

    /**
                 * This function checks whether the input we provided is outdent or not.
                 *
                 * @param {String} line - The content of the line the user is typing in.
                 * @param {String} input - The input of the user. It could be single character (when typing) or
                 *                         multiple character (when pasting).
                 *
                 * @returns {Boolean} - Whether `autoOutdent` function should execute.
                 */
    this.checkOutdent = function (line, input) {

      // If the line has any character other than space, it should not auto outdent.
      if (!/^\s+$/.test(line)) {return false;}

      // If the input starts with zero or more spaces followed by '}', it should auto outdent.
      return (/^\s*\}/.test(input));
    };

    /**
        * This function runs when `checkOutdent` function return true and corrects the indent of the
        * outdent (closing braces) by matching the indent with the indent of the corresponding opening
        * braces.
        *
        * @param {*} doc - Ace Editor Document Object
        * @param {Number} row - The line number the user is typing in.
        *
        * @returns {void}
        */
    this.autoOutdent = function (doc, row) {
      var line = doc.getLine(row);

      // Safety check that line starts with zero or more spaces followed by '}'.
      var match = line.match(/^(\s*\})/);

      if (!match) {return 0;}

      // Get column number of the '}'.
      var column = match[1].length;

      // Find the corresponding open braces.
      var openBracePos = doc.findMatchingBracket({
        row: row,
        column: column });


      // Bail out if could not find open braces or open braces are in the same line.
      if (!openBracePos || openBracePos.row == row) {return 0;}

      // Get indentation of the line having open braces.
      var indent = this.$getIndent(doc.getLine(openBracePos.row));

      // Set same indentation of the line with close braces.
      doc.replace(new Range(row, 0, row, column - 1), indent);
    };

    /**
        * Get indentation of the line.
        *
        * @param {String} line - Content of the line.
        *
        * @returns {String} - The indent of the line provided. (Will always be of space characters)
        */
    this.$getIndent = function (line) {
      return line.match(/^\s*/)[0];
    };

  }).call(MatchingBraceOutdent.prototype);

  exports.MatchingBraceOutdent = MatchingBraceOutdent;
});

ace.define('ace/mode/graphql_base', ['require', 'exports', 'ace/lib/oop', 'ace/mode/text', 'ace/mode/graphql_highlight_rules', 'ace/worker/worker_client'], (acequire, exports) => {
  const oop = acequire('ace/lib/oop');
  const TextMode = acequire('ace/mode/text').Mode;
  const { GraphQLHighlightRules } = acequire('ace/mode/graphql_highlight_rules');
  const { MatchingBraceOutdent } = acequire('ace/mode/matching_brace_outdent');

  var Mode = function () {
    this.HighlightRules = GraphQLHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
    this.$outdent = new MatchingBraceOutdent();
  };

  oop.inherits(Mode, TextMode);

  (function () {

    /**
                 * Get indentation of the next line.
                 *
                 * @param {*} state - Ace Editor State.
                 * @param {String} line - The content of the current line.
                 * @param {String} tab - Give tab string (spaces when using softTabs)
                 *
                 * @returns {String} - Indent of the next line.
                 */
    this.getNextLineIndent = function (state, line, tab) {
      var indent = this.$getIndent(line),
      trimmedLine = line.trim();

      // If the trimmed line ends with open brackets, add one indentation;
      if (trimmedLine.endsWith('{') || trimmedLine.endsWith('(') || trimmedLine.endsWith('[')) {
        indent += tab;
      }

      return indent;
    };

    this.checkOutdent = function (state, line, input) {
      return this.$outdent.checkOutdent(line, input);
    };

    this.autoOutdent = function (state, doc, row) {
      this.$outdent.autoOutdent(doc, row);
    };

    this.lineCommentStart = '#';

  }).call(Mode.prototype);

  exports.Mode = Mode;
});

/***/ }),

/***/ 3844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ITextModelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_instantiation_common_instantiation_js__ = __webpack_require__(3485);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var ITextModelService = Object(__WEBPACK_IMPORTED_MODULE_0__platform_instantiation_common_instantiation_js__["c" /* createDecorator */])('textModelService');

/***/ }),

/***/ 3845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ok;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
                                                                                                  * Throws an error with the provided message if the provided value does not evaluate to a true Javascript value.
                                                                                                  */
function ok(value, message) {
  if (!value) {
    throw new Error(message ? 'Assertion failed (' + message + ')' : 'Assertion Failed');
  }
}

/***/ }),

/***/ 3848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export splitGlobAware */
/* harmony export (immutable) */ __webpack_exports__["a"] = match;
/* unused harmony export parse */
/* unused harmony export isRelativePattern */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrays_js__ = __webpack_require__(3502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__strings_js__ = __webpack_require__(3483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extpath_js__ = __webpack_require__(3849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__path_js__ = __webpack_require__(3658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_js__ = __webpack_require__(3536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__async_js__ = __webpack_require__(3496);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






var GLOBSTAR = '**';
var GLOB_SPLIT = '/';
var PATH_REGEX = '[/\\\\]'; // any slash or backslash
var NO_PATH_REGEX = '[^/\\\\]'; // any non-slash and non-backslash
var ALL_FORWARD_SLASHES = /\//g;
function starsToRegExp(starCount) {
    switch (starCount) {
        case 0:
            return '';
        case 1:
            return NO_PATH_REGEX + "*?"; // 1 star matches any number of characters except path separator (/ and \) - non greedy (?)
        default:
            // Matches:  (Path Sep OR Path Val followed by Path Sep OR Path Sep followed by Path Val) 0-many times
            // Group is non capturing because we don't need to capture at all (?:...)
            // Overall we use non-greedy matching because it could be that we match too much
            return "(?:" + PATH_REGEX + "|" + NO_PATH_REGEX + "+" + PATH_REGEX + "|" + PATH_REGEX + NO_PATH_REGEX + "+)*?";}

}
function splitGlobAware(pattern, splitChar) {
    if (!pattern) {
        return [];
    }
    var segments = [];
    var inBraces = false;
    var inBrackets = false;
    var curVal = '';
    for (var _i = 0, pattern_1 = pattern; _i < pattern_1.length; _i++) {
        var char = pattern_1[_i];
        switch (char) {
            case splitChar:
                if (!inBraces && !inBrackets) {
                    segments.push(curVal);
                    curVal = '';
                    continue;
                }
                break;
            case '{':
                inBraces = true;
                break;
            case '}':
                inBraces = false;
                break;
            case '[':
                inBrackets = true;
                break;
            case ']':
                inBrackets = false;
                break;}

        curVal += char;
    }
    // Tail
    if (curVal) {
        segments.push(curVal);
    }
    return segments;
}
function parseRegExp(pattern) {
    if (!pattern) {
        return '';
    }
    var regEx = '';
    // Split up into segments for each slash found
    var segments = splitGlobAware(pattern, GLOB_SPLIT);
    // Special case where we only have globstars
    if (segments.every(function (s) {return s === GLOBSTAR;})) {
        regEx = '.*';
    }
    // Build regex over segments
    else {
            var previousSegmentWasGlobStar_1 = false;
            segments.forEach(function (segment, index) {
                // Globstar is special
                if (segment === GLOBSTAR) {
                    // if we have more than one globstar after another, just ignore it
                    if (!previousSegmentWasGlobStar_1) {
                        regEx += starsToRegExp(2);
                        previousSegmentWasGlobStar_1 = true;
                    }
                    return;
                }
                // States
                var inBraces = false;
                var braceVal = '';
                var inBrackets = false;
                var bracketVal = '';
                for (var _i = 0, segment_1 = segment; _i < segment_1.length; _i++) {
                    var char = segment_1[_i];
                    // Support brace expansion
                    if (char !== '}' && inBraces) {
                        braceVal += char;
                        continue;
                    }
                    // Support brackets
                    if (inBrackets && (char !== ']' || !bracketVal) /* ] is literally only allowed as first character in brackets to match it */) {
                            var res = void 0;
                            // range operator
                            if (char === '-') {
                                res = char;
                            }
                            // negation operator (only valid on first index in bracket)
                            else if ((char === '^' || char === '!') && !bracketVal) {
                                    res = '^';
                                }
                                // glob split matching is not allowed within character ranges
                                // see http://man7.org/linux/man-pages/man7/glob.7.html
                                else if (char === GLOB_SPLIT) {
                                        res = '';
                                    }
                                    // anything else gets escaped
                                    else {
                                            res = __WEBPACK_IMPORTED_MODULE_1__strings_js__["m" /* escapeRegExpCharacters */](char);
                                        }
                            bracketVal += res;
                            continue;
                        }
                    switch (char) {
                        case '{':
                            inBraces = true;
                            continue;
                        case '[':
                            inBrackets = true;
                            continue;
                        case '}':
                            var choices = splitGlobAware(braceVal, ',');
                            // Converts {foo,bar} => [foo|bar]
                            var braceRegExp = "(?:" + choices.map(function (c) {return parseRegExp(c);}).join('|') + ")";
                            regEx += braceRegExp;
                            inBraces = false;
                            braceVal = '';
                            break;
                        case ']':
                            regEx += '[' + bracketVal + ']';
                            inBrackets = false;
                            bracketVal = '';
                            break;
                        case '?':
                            regEx += NO_PATH_REGEX; // 1 ? matches any single character except path separator (/ and \)
                            continue;
                        case '*':
                            regEx += starsToRegExp(1);
                            continue;
                        default:
                            regEx += __WEBPACK_IMPORTED_MODULE_1__strings_js__["m" /* escapeRegExpCharacters */](char);}

                }
                // Tail: Add the slash we had split on if there is more to come and the remaining pattern is not a globstar
                // For example if pattern: some/**/*.js we want the "/" after some to be included in the RegEx to prevent
                // a folder called "something" to match as well.
                // However, if pattern: some/**, we tolerate that we also match on "something" because our globstar behaviour
                // is to match 0-N segments.
                if (index < segments.length - 1 && (segments[index + 1] !== GLOBSTAR || index + 2 < segments.length)) {
                    regEx += PATH_REGEX;
                }
                // reset state
                previousSegmentWasGlobStar_1 = false;
            });
        }
    return regEx;
}
// regexes to check for trival glob patterns that just check for String#endsWith
var T1 = /^\*\*\/\*\.[\w\.-]+$/; // **/*.something
var T2 = /^\*\*\/([\w\.-]+)\/?$/; // **/something
var T3 = /^{\*\*\/[\*\.]?[\w\.-]+\/?(,\*\*\/[\*\.]?[\w\.-]+\/?)*}$/; // {**/*.something,**/*.else} or {**/package.json,**/project.json}
var T3_2 = /^{\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?(,\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?)*}$/; // Like T3, with optional trailing /**
var T4 = /^\*\*((\/[\w\.-]+)+)\/?$/; // **/something/else
var T5 = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/; // something/else
var CACHE = new __WEBPACK_IMPORTED_MODULE_4__map_js__["a" /* LRUCache */](10000); // bounded to 10000 elements
var FALSE = function () {
    return false;
};
var NULL = function () {
    return null;
};
function parsePattern(arg1, options) {
    if (!arg1) {
        return NULL;
    }
    // Handle IRelativePattern
    var pattern;
    if (typeof arg1 !== 'string') {
        pattern = arg1.pattern;
    } else
    {
        pattern = arg1;
    }
    // Whitespace trimming
    pattern = pattern.trim();
    // Check cache
    var patternKey = pattern + "_" + !!options.trimForExclusions;
    var parsedPattern = CACHE.get(patternKey);
    if (parsedPattern) {
        return wrapRelativePattern(parsedPattern, arg1);
    }
    // Check for Trivias
    var match;
    if (T1.test(pattern)) {// common pattern: **/*.txt just need endsWith check
        var base_1 = pattern.substr(4); // '**/*'.length === 4
        parsedPattern = function (path, basename) {
            return typeof path === 'string' && __WEBPACK_IMPORTED_MODULE_1__strings_js__["j" /* endsWith */](path, base_1) ? pattern : null;
        };
    } else
    if (match = T2.exec(trimForExclusions(pattern, options))) {// common pattern: **/some.txt just need basename check
        parsedPattern = trivia2(match[1], pattern);
    } else
    if ((options.trimForExclusions ? T3_2 : T3).test(pattern)) {// repetition of common patterns (see above) {**/*.txt,**/*.png}
        parsedPattern = trivia3(pattern, options);
    } else
    if (match = T4.exec(trimForExclusions(pattern, options))) {// common pattern: **/something/else just need endsWith check
        parsedPattern = trivia4and5(match[1].substr(1), pattern, true);
    } else
    if (match = T5.exec(trimForExclusions(pattern, options))) {// common pattern: something/else just need equals check
        parsedPattern = trivia4and5(match[1], pattern, false);
    }
    // Otherwise convert to pattern
    else {
            parsedPattern = toRegExp(pattern);
        }
    // Cache
    CACHE.set(patternKey, parsedPattern);
    return wrapRelativePattern(parsedPattern, arg1);
}
function wrapRelativePattern(parsedPattern, arg2) {
    if (typeof arg2 === 'string') {
        return parsedPattern;
    }
    return function (path, basename) {
        if (!__WEBPACK_IMPORTED_MODULE_2__extpath_js__["a" /* isEqualOrParent */](path, arg2.base)) {
            return null;
        }
        return parsedPattern(__WEBPACK_IMPORTED_MODULE_3__path_js__["relative"](arg2.base, path), basename);
    };
}
function trimForExclusions(pattern, options) {
    return options.trimForExclusions && __WEBPACK_IMPORTED_MODULE_1__strings_js__["j" /* endsWith */](pattern, '/**') ? pattern.substr(0, pattern.length - 2) : pattern; // dropping **, tailing / is dropped later
}
// common pattern: **/some.txt just need basename check
function trivia2(base, originalPattern) {
    var slashBase = "/" + base;
    var backslashBase = "\\" + base;
    var parsedPattern = function (path, basename) {
        if (typeof path !== 'string') {
            return null;
        }
        if (basename) {
            return basename === base ? originalPattern : null;
        }
        return path === base || __WEBPACK_IMPORTED_MODULE_1__strings_js__["j" /* endsWith */](path, slashBase) || __WEBPACK_IMPORTED_MODULE_1__strings_js__["j" /* endsWith */](path, backslashBase) ? originalPattern : null;
    };
    var basenames = [base];
    parsedPattern.basenames = basenames;
    parsedPattern.patterns = [originalPattern];
    parsedPattern.allBasenames = basenames;
    return parsedPattern;
}
// repetition of common patterns (see above) {**/*.txt,**/*.png}
function trivia3(pattern, options) {
    var parsedPatterns = aggregateBasenameMatches(pattern.slice(1, -1).split(',').
    map(function (pattern) {return parsePattern(pattern, options);}).
    filter(function (pattern) {return pattern !== NULL;}), pattern);
    var n = parsedPatterns.length;
    if (!n) {
        return NULL;
    }
    if (n === 1) {
        return parsedPatterns[0];
    }
    var parsedPattern = function (path, basename) {
        for (var i = 0, n_1 = parsedPatterns.length; i < n_1; i++) {
            if (parsedPatterns[i](path, basename)) {
                return pattern;
            }
        }
        return null;
    };
    var withBasenames = __WEBPACK_IMPORTED_MODULE_0__arrays_js__["i" /* first */](parsedPatterns, function (pattern) {return !!pattern.allBasenames;});
    if (withBasenames) {
        parsedPattern.allBasenames = withBasenames.allBasenames;
    }
    var allPaths = parsedPatterns.reduce(function (all, current) {return current.allPaths ? all.concat(current.allPaths) : all;}, []);
    if (allPaths.length) {
        parsedPattern.allPaths = allPaths;
    }
    return parsedPattern;
}
// common patterns: **/something/else just need endsWith check, something/else just needs and equals check
function trivia4and5(path, pattern, matchPathEnds) {
    var nativePath = __WEBPACK_IMPORTED_MODULE_3__path_js__["sep"] !== __WEBPACK_IMPORTED_MODULE_3__path_js__["posix"].sep ? path.replace(ALL_FORWARD_SLASHES, __WEBPACK_IMPORTED_MODULE_3__path_js__["sep"]) : path;
    var nativePathEnd = __WEBPACK_IMPORTED_MODULE_3__path_js__["sep"] + nativePath;
    var parsedPattern = matchPathEnds ? function (path, basename) {
        return typeof path === 'string' && (path === nativePath || __WEBPACK_IMPORTED_MODULE_1__strings_js__["j" /* endsWith */](path, nativePathEnd)) ? pattern : null;
    } : function (path, basename) {
        return typeof path === 'string' && path === nativePath ? pattern : null;
    };
    parsedPattern.allPaths = [(matchPathEnds ? '*/' : './') + path];
    return parsedPattern;
}
function toRegExp(pattern) {
    try {
        var regExp_1 = new RegExp("^" + parseRegExp(pattern) + "$");
        return function (path, basename) {
            regExp_1.lastIndex = 0; // reset RegExp to its initial state to reuse it!
            return typeof path === 'string' && regExp_1.test(path) ? pattern : null;
        };
    }
    catch (error) {
        return NULL;
    }
}
function match(arg1, path, hasSibling) {
    if (!arg1 || typeof path !== 'string') {
        return false;
    }
    return parse(arg1)(path, undefined, hasSibling);
}
function parse(arg1, options) {
    if (options === void 0) {options = {};}
    if (!arg1) {
        return FALSE;
    }
    // Glob with String
    if (typeof arg1 === 'string' || isRelativePattern(arg1)) {
        var parsedPattern_1 = parsePattern(arg1, options);
        if (parsedPattern_1 === NULL) {
            return FALSE;
        }
        var resultPattern = function (path, basename) {
            return !!parsedPattern_1(path, basename);
        };
        if (parsedPattern_1.allBasenames) {
            resultPattern.allBasenames = parsedPattern_1.allBasenames;
        }
        if (parsedPattern_1.allPaths) {
            resultPattern.allPaths = parsedPattern_1.allPaths;
        }
        return resultPattern;
    }
    // Glob with Expression
    return parsedExpression(arg1, options);
}
function isRelativePattern(obj) {
    var rp = obj;
    return rp && typeof rp.base === 'string' && typeof rp.pattern === 'string';
}
function parsedExpression(expression, options) {
    var parsedPatterns = aggregateBasenameMatches(Object.getOwnPropertyNames(expression).
    map(function (pattern) {return parseExpressionPattern(pattern, expression[pattern], options);}).
    filter(function (pattern) {return pattern !== NULL;}));
    var n = parsedPatterns.length;
    if (!n) {
        return NULL;
    }
    if (!parsedPatterns.some(function (parsedPattern) {return !!parsedPattern.requiresSiblings;})) {
        if (n === 1) {
            return parsedPatterns[0];
        }
        var resultExpression_1 = function (path, basename) {
            for (var i = 0, n_2 = parsedPatterns.length; i < n_2; i++) {
                // Pattern matches path
                var result = parsedPatterns[i](path, basename);
                if (result) {
                    return result;
                }
            }
            return null;
        };
        var withBasenames_1 = __WEBPACK_IMPORTED_MODULE_0__arrays_js__["i" /* first */](parsedPatterns, function (pattern) {return !!pattern.allBasenames;});
        if (withBasenames_1) {
            resultExpression_1.allBasenames = withBasenames_1.allBasenames;
        }
        var allPaths_1 = parsedPatterns.reduce(function (all, current) {return current.allPaths ? all.concat(current.allPaths) : all;}, []);
        if (allPaths_1.length) {
            resultExpression_1.allPaths = allPaths_1;
        }
        return resultExpression_1;
    }
    var resultExpression = function (path, basename, hasSibling) {
        var name = undefined;
        for (var i = 0, n_3 = parsedPatterns.length; i < n_3; i++) {
            // Pattern matches path
            var parsedPattern = parsedPatterns[i];
            if (parsedPattern.requiresSiblings && hasSibling) {
                if (!basename) {
                    basename = __WEBPACK_IMPORTED_MODULE_3__path_js__["basename"](path);
                }
                if (!name) {
                    name = basename.substr(0, basename.length - __WEBPACK_IMPORTED_MODULE_3__path_js__["extname"](path).length);
                }
            }
            var result = parsedPattern(path, basename, name, hasSibling);
            if (result) {
                return result;
            }
        }
        return null;
    };
    var withBasenames = __WEBPACK_IMPORTED_MODULE_0__arrays_js__["i" /* first */](parsedPatterns, function (pattern) {return !!pattern.allBasenames;});
    if (withBasenames) {
        resultExpression.allBasenames = withBasenames.allBasenames;
    }
    var allPaths = parsedPatterns.reduce(function (all, current) {return current.allPaths ? all.concat(current.allPaths) : all;}, []);
    if (allPaths.length) {
        resultExpression.allPaths = allPaths;
    }
    return resultExpression;
}
function parseExpressionPattern(pattern, value, options) {
    if (value === false) {
        return NULL; // pattern is disabled
    }
    var parsedPattern = parsePattern(pattern, options);
    if (parsedPattern === NULL) {
        return NULL;
    }
    // Expression Pattern is <boolean>
    if (typeof value === 'boolean') {
        return parsedPattern;
    }
    // Expression Pattern is <SiblingClause>
    if (value) {
        var when_1 = value.when;
        if (typeof when_1 === 'string') {
            var result = function (path, basename, name, hasSibling) {
                if (!hasSibling || !parsedPattern(path, basename)) {
                    return null;
                }
                var clausePattern = when_1.replace('$(basename)', name);
                var matched = hasSibling(clausePattern);
                return Object(__WEBPACK_IMPORTED_MODULE_5__async_js__["h" /* isThenable */])(matched) ?
                matched.then(function (m) {return m ? pattern : null;}) :
                matched ? pattern : null;
            };
            result.requiresSiblings = true;
            return result;
        }
    }
    // Expression is Anything
    return parsedPattern;
}
function aggregateBasenameMatches(parsedPatterns, result) {
    var basenamePatterns = parsedPatterns.filter(function (parsedPattern) {return !!parsedPattern.basenames;});
    if (basenamePatterns.length < 2) {
        return parsedPatterns;
    }
    var basenames = basenamePatterns.reduce(function (all, current) {
        var basenames = current.basenames;
        return basenames ? all.concat(basenames) : all;
    }, []);
    var patterns;
    if (result) {
        patterns = [];
        for (var i = 0, n = basenames.length; i < n; i++) {
            patterns.push(result);
        }
    } else
    {
        patterns = basenamePatterns.reduce(function (all, current) {
            var patterns = current.patterns;
            return patterns ? all.concat(patterns) : all;
        }, []);
    }
    var aggregate = function (path, basename) {
        if (typeof path !== 'string') {
            return null;
        }
        if (!basename) {
            var i = void 0;
            for (i = path.length; i > 0; i--) {
                var ch = path.charCodeAt(i - 1);
                if (ch === 47 /* Slash */ || ch === 92 /* Backslash */) {
                        break;
                    }
            }
            basename = path.substr(i);
        }
        var index = basenames.indexOf(basename);
        return index !== -1 ? patterns[index] : null;
    };
    aggregate.basenames = basenames;
    aggregate.patterns = patterns;
    aggregate.allBasenames = basenames;
    var aggregatedPatterns = parsedPatterns.filter(function (parsedPattern) {return !parsedPattern.basenames;});
    aggregatedPatterns.push(aggregate);
    return aggregatedPatterns;
}

/***/ }),

/***/ 3849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = toSlashes;
/* harmony export (immutable) */ __webpack_exports__["a"] = isEqualOrParent;
/* harmony export (immutable) */ __webpack_exports__["b"] = isWindowsDriveLetter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__strings_js__ = __webpack_require__(3483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_js__ = __webpack_require__(3658);


/**
                                         * Takes a Windows OS path and changes backward slashes to forward slashes.
                                         * This should only be done for OS paths from Windows (or user provided paths potentially from Windows).
                                         * Using it on a Linux or MaxOS path might change it.
                                         */
function toSlashes(osPath) {
    return osPath.replace(/[\\/]/g, __WEBPACK_IMPORTED_MODULE_1__path_js__["posix"].sep);
}
function isEqualOrParent(path, candidate, ignoreCase, separator) {
    if (separator === void 0) {separator = __WEBPACK_IMPORTED_MODULE_1__path_js__["sep"];}
    if (path === candidate) {
        return true;
    }
    if (!path || !candidate) {
        return false;
    }
    if (candidate.length > path.length) {
        return false;
    }
    if (ignoreCase) {
        var beginsWith = Object(__WEBPACK_IMPORTED_MODULE_0__strings_js__["C" /* startsWithIgnoreCase */])(path, candidate);
        if (!beginsWith) {
            return false;
        }
        if (candidate.length === path.length) {
            return true; // same path, different casing
        }
        var sepOffset = candidate.length;
        if (candidate.charAt(candidate.length - 1) === separator) {
            sepOffset--; // adjust the expected sep offset in case our candidate already ends in separator character
        }
        return path.charAt(sepOffset) === separator;
    }
    if (candidate.charAt(candidate.length - 1) !== separator) {
        candidate += separator;
    }
    return path.indexOf(candidate) === 0;
}
function isWindowsDriveLetter(char0) {
    return char0 >= 65 /* A */ && char0 <= 90 /* Z */ || char0 >= 97 /* a */ && char0 <= 122 /* z */;
}

/***/ }),

/***/ 3851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IframeUtils; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var hasDifferentOriginAncestorFlag = false;
var sameOriginWindowChainCache = null;
function getParentWindowIfSameOrigin(w) {
    if (!w.parent || w.parent === w) {
        return null;
    }
    // Cannot really tell if we have access to the parent window unless we try to access something in it
    try {
        var location_1 = w.location;
        var parentLocation = w.parent.location;
        if (location_1.protocol !== parentLocation.protocol || location_1.hostname !== parentLocation.hostname || location_1.port !== parentLocation.port) {
            hasDifferentOriginAncestorFlag = true;
            return null;
        }
    }
    catch (e) {
        hasDifferentOriginAncestorFlag = true;
        return null;
    }
    return w.parent;
}
function findIframeElementInParentWindow(parentWindow, childWindow) {
    var parentWindowIframes = parentWindow.document.getElementsByTagName('iframe');
    var iframe;
    for (var i = 0, len = parentWindowIframes.length; i < len; i++) {
        iframe = parentWindowIframes[i];
        if (iframe.contentWindow === childWindow) {
            return iframe;
        }
    }
    return null;
}
var IframeUtils = /** @class */function () {
    function IframeUtils() {
    }
    /**
       * Returns a chain of embedded windows with the same origin (which can be accessed programmatically).
       * Having a chain of length 1 might mean that the current execution environment is running outside of an iframe or inside an iframe embedded in a window with a different origin.
       * To distinguish if at one point the current execution environment is running inside a window with a different origin, see hasDifferentOriginAncestor()
       */
    IframeUtils.getSameOriginWindowChain = function () {
        if (!sameOriginWindowChainCache) {
            sameOriginWindowChainCache = [];
            var w = window;
            var parent_1;
            do {
                parent_1 = getParentWindowIfSameOrigin(w);
                if (parent_1) {
                    sameOriginWindowChainCache.push({
                        window: w,
                        iframeElement: findIframeElementInParentWindow(parent_1, w) });

                } else
                {
                    sameOriginWindowChainCache.push({
                        window: w,
                        iframeElement: null });

                }
                w = parent_1;
            } while (w);
        }
        return sameOriginWindowChainCache.slice(0);
    };
    /**
        * Returns true if the current execution environment is chained in a list of iframes which at one point ends in a window with a different origin.
        * Returns false if the current execution environment is not running inside an iframe or if the entire chain of iframes have the same origin.
        */
    IframeUtils.hasDifferentOriginAncestor = function () {
        if (!sameOriginWindowChainCache) {
            this.getSameOriginWindowChain();
        }
        return hasDifferentOriginAncestorFlag;
    };
    /**
        * Returns the position of `childWindow` relative to `ancestorWindow`
        */
    IframeUtils.getPositionOfChildWindowRelativeToAncestorWindow = function (childWindow, ancestorWindow) {
        if (!ancestorWindow || childWindow === ancestorWindow) {
            return {
                top: 0,
                left: 0 };

        }
        var top = 0,left = 0;
        var windowChain = this.getSameOriginWindowChain();
        for (var _i = 0, windowChain_1 = windowChain; _i < windowChain_1.length; _i++) {
            var windowChainEl = windowChain_1[_i];
            if (windowChainEl.window === ancestorWindow) {
                break;
            }
            if (!windowChainEl.iframeElement) {
                break;
            }
            var boundingRect = windowChainEl.iframeElement.getBoundingClientRect();
            top += boundingRect.top;
            left += boundingRect.left;
        }
        return {
            top: top,
            left: left };

    };
    return IframeUtils;
}();


/***/ }),

/***/ 3858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EditorStateCancellationTokenSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TextModelCancellationTokenSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StableEditorScrollState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_common_strings_js__ = __webpack_require__(3483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_common_cancellation_js__ = __webpack_require__(3565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_common_lifecycle_js__ = __webpack_require__(3480);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
        { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
        function (d, b) {for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {this.constructor = d;}
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();



var EditorState = /** @class */function () {
    function EditorState(editor, flags) {
        this.flags = flags;
        if ((this.flags & 1 /* Value */) !== 0) {
            var model = editor.getModel();
            this.modelVersionId = model ? __WEBPACK_IMPORTED_MODULE_0__base_common_strings_js__["o" /* format */]('{0}#{1}', model.uri.toString(), model.getVersionId()) : null;
        }
        if ((this.flags & 4 /* Position */) !== 0) {
            this.position = editor.getPosition();
        }
        if ((this.flags & 2 /* Selection */) !== 0) {
            this.selection = editor.getSelection();
        }
        if ((this.flags & 8 /* Scroll */) !== 0) {
            this.scrollLeft = editor.getScrollLeft();
            this.scrollTop = editor.getScrollTop();
        }
    }
    EditorState.prototype._equals = function (other) {
        if (!(other instanceof EditorState)) {
            return false;
        }
        var state = other;
        if (this.modelVersionId !== state.modelVersionId) {
            return false;
        }
        if (this.scrollLeft !== state.scrollLeft || this.scrollTop !== state.scrollTop) {
            return false;
        }
        if (!this.position && state.position || this.position && !state.position || this.position && state.position && !this.position.equals(state.position)) {
            return false;
        }
        if (!this.selection && state.selection || this.selection && !state.selection || this.selection && state.selection && !this.selection.equalsRange(state.selection)) {
            return false;
        }
        return true;
    };
    EditorState.prototype.validate = function (editor) {
        return this._equals(new EditorState(editor, this.flags));
    };
    return EditorState;
}();

/**
                         * A cancellation token source that cancels when the editor changes as expressed
                         * by the provided flags
                         */
var EditorStateCancellationTokenSource = /** @class */function (_super) {
    __extends(EditorStateCancellationTokenSource, _super);
    function EditorStateCancellationTokenSource(editor, flags, parent) {
        var _this = _super.call(this, parent) || this;
        _this.editor = editor;
        _this._listener = [];
        if (flags & 4 /* Position */) {
                _this._listener.push(editor.onDidChangeCursorPosition(function (_) {return _this.cancel();}));
            }
        if (flags & 2 /* Selection */) {
                _this._listener.push(editor.onDidChangeCursorSelection(function (_) {return _this.cancel();}));
            }
        if (flags & 8 /* Scroll */) {
                _this._listener.push(editor.onDidScrollChange(function (_) {return _this.cancel();}));
            }
        if (flags & 1 /* Value */) {
                _this._listener.push(editor.onDidChangeModel(function (_) {return _this.cancel();}));
                _this._listener.push(editor.onDidChangeModelContent(function (_) {return _this.cancel();}));
            }
        return _this;
    }
    EditorStateCancellationTokenSource.prototype.dispose = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__base_common_lifecycle_js__["d" /* dispose */])(this._listener);
        _super.prototype.dispose.call(this);
    };
    return EditorStateCancellationTokenSource;
}(__WEBPACK_IMPORTED_MODULE_1__base_common_cancellation_js__["b" /* CancellationTokenSource */]);

/**
                                                * A cancellation token source that cancels when the provided model changes
                                                */
var TextModelCancellationTokenSource = /** @class */function (_super) {
    __extends(TextModelCancellationTokenSource, _super);
    function TextModelCancellationTokenSource(model, parent) {
        var _this = _super.call(this, parent) || this;
        _this._listener = model.onDidChangeContent(function () {return _this.cancel();});
        return _this;
    }
    TextModelCancellationTokenSource.prototype.dispose = function () {
        this._listener.dispose();
        _super.prototype.dispose.call(this);
    };
    return TextModelCancellationTokenSource;
}(__WEBPACK_IMPORTED_MODULE_1__base_common_cancellation_js__["b" /* CancellationTokenSource */]);

var StableEditorScrollState = /** @class */function () {
    function StableEditorScrollState(_visiblePosition, _visiblePositionScrollDelta) {
        this._visiblePosition = _visiblePosition;
        this._visiblePositionScrollDelta = _visiblePositionScrollDelta;
    }
    StableEditorScrollState.capture = function (editor) {
        var visiblePosition = null;
        var visiblePositionScrollDelta = 0;
        if (editor.getScrollTop() !== 0) {
            var visibleRanges = editor.getVisibleRanges();
            if (visibleRanges.length > 0) {
                visiblePosition = visibleRanges[0].getStartPosition();
                var visiblePositionScrollTop = editor.getTopForPosition(visiblePosition.lineNumber, visiblePosition.column);
                visiblePositionScrollDelta = editor.getScrollTop() - visiblePositionScrollTop;
            }
        }
        return new StableEditorScrollState(visiblePosition, visiblePositionScrollDelta);
    };
    StableEditorScrollState.prototype.restore = function (editor) {
        if (this._visiblePosition) {
            var visiblePositionScrollTop = editor.getTopForPosition(this._visiblePosition.lineNumber, this._visiblePosition.column);
            editor.setScrollTop(visiblePositionScrollTop + this._visiblePositionScrollDelta);
        }
    };
    return StableEditorScrollState;
}();


/***/ }),

/***/ 3859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isCodeEditor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_editorCommon_js__ = __webpack_require__(3570);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
                                                            *@internal
                                                            */
function isCodeEditor(thing) {
    if (thing && typeof thing.getEditorType === 'function') {
        return thing.getEditorType() === __WEBPACK_IMPORTED_MODULE_0__common_editorCommon_js__["a" /* EditorType */].ICodeEditor;
    } else
    {
        return false;
    }
}

/***/ }),

/***/ 3860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormattingEdit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_core_editOperation_js__ = __webpack_require__(3861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_core_range_js__ = __webpack_require__(3482);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var FormattingEdit = /** @class */function () {
    function FormattingEdit() {
    }
    FormattingEdit._handleEolEdits = function (editor, edits) {
        var newEol = undefined;
        var singleEdits = [];
        for (var _i = 0, edits_1 = edits; _i < edits_1.length; _i++) {
            var edit = edits_1[_i];
            if (typeof edit.eol === 'number') {
                newEol = edit.eol;
            }
            if (edit.range && typeof edit.text === 'string') {
                singleEdits.push(edit);
            }
        }
        if (typeof newEol === 'number') {
            if (editor.hasModel()) {
                editor.getModel().pushEOL(newEol);
            }
        }
        return singleEdits;
    };
    FormattingEdit._isFullModelReplaceEdit = function (editor, edit) {
        if (!editor.hasModel()) {
            return false;
        }
        var model = editor.getModel();
        var editRange = model.validateRange(edit.range);
        var fullModelRange = model.getFullModelRange();
        return fullModelRange.equalsRange(editRange);
    };
    FormattingEdit.execute = function (editor, _edits) {
        editor.pushUndoStop();
        var edits = FormattingEdit._handleEolEdits(editor, _edits);
        if (edits.length === 1 && FormattingEdit._isFullModelReplaceEdit(editor, edits[0])) {
            // We use replace semantics and hope that markers stay put...
            editor.executeEdits('formatEditsCommand', edits.map(function (edit) {return __WEBPACK_IMPORTED_MODULE_0__common_core_editOperation_js__["a" /* EditOperation */].replace(__WEBPACK_IMPORTED_MODULE_1__common_core_range_js__["a" /* Range */].lift(edit.range), edit.text);}));
        } else
        {
            editor.executeEdits('formatEditsCommand', edits.map(function (edit) {return __WEBPACK_IMPORTED_MODULE_0__common_core_editOperation_js__["a" /* EditOperation */].replaceMove(__WEBPACK_IMPORTED_MODULE_1__common_core_range_js__["a" /* Range */].lift(edit.range), edit.text);}));
        }
        editor.pushUndoStop();
    };
    return FormattingEdit;
}();


/***/ }),

/***/ 3861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOperation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__range_js__ = __webpack_require__(3482);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var EditOperation = /** @class */function () {
    function EditOperation() {
    }
    EditOperation.insert = function (position, text) {
        return {
            range: new __WEBPACK_IMPORTED_MODULE_0__range_js__["a" /* Range */](position.lineNumber, position.column, position.lineNumber, position.column),
            text: text,
            forceMoveMarkers: true };

    };
    EditOperation.delete = function (range) {
        return {
            range: range,
            text: null };

    };
    EditOperation.replace = function (range, text) {
        return {
            range: range,
            text: text };

    };
    EditOperation.replaceMove = function (range, text) {
        return {
            range: range,
            text: text,
            forceMoveMarkers: true };

    };
    return EditOperation;
}();


/***/ }),

/***/ 3927:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports. /*istanbul ignore end*/generateOptions = generateOptions;
function generateOptions(options, defaults) {
  if (typeof options === 'function') {
    defaults.callback = options;
  } else if (options) {
    for (var name in options) {
      /* istanbul ignore else */
      if (options.hasOwnProperty(name)) {
        defaults[name] = options[name];
      }
    }
  }
  return defaults;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3BhcmFtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0NBQWdCO0FBQVQsU0FBUyxlQUFULENBQXlCLE9BQXpCLEVBQWtDLFFBQWxDLEVBQTRDO0FBQ2pELE1BQUksT0FBTyxPQUFQLEtBQW1CLFVBQW5CLEVBQStCO0FBQ2pDLGFBQVMsUUFBVCxHQUFvQixPQUFwQixDQURpQztHQUFuQyxNQUVPLElBQUksT0FBSixFQUFhO0FBQ2xCLFNBQUssSUFBSSxJQUFKLElBQVksT0FBakIsRUFBMEI7O0FBRXhCLFVBQUksUUFBUSxjQUFSLENBQXVCLElBQXZCLENBQUosRUFBa0M7QUFDaEMsaUJBQVMsSUFBVCxJQUFpQixRQUFRLElBQVIsQ0FBakIsQ0FEZ0M7T0FBbEM7S0FGRjtHQURLO0FBUVAsU0FBTyxRQUFQLENBWGlEO0NBQTVDIiwiZmlsZSI6InBhcmFtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU9wdGlvbnMob3B0aW9ucywgZGVmYXVsdHMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZGVmYXVsdHMuY2FsbGJhY2sgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMpIHtcbiAgICBmb3IgKGxldCBuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBkZWZhdWx0c1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWZhdWx0cztcbn1cbiJdfQ==


/***/ }),

/***/ 3928:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports. /*istanbul ignore end*/parsePatch = parsePatch;
function parsePatch(uniDiff) {
  /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var diffstr = uniDiff.split('\n'),
      list = [],
      i = 0;

  function parseIndex() {
    var index = {};
    list.push(index);

    // Parse diff metadata
    while (i < diffstr.length) {
      var line = diffstr[i];

      // File header found, end parsing diff metadata
      if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
        break;
      }

      // Diff index
      var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);
      if (header) {
        index.index = header[1];
      }

      i++;
    }

    // Parse file headers if they are defined. Unified diff requires them, but
    // there's no technical issues to have an isolated hunk without file header
    parseFileHeader(index);
    parseFileHeader(index);

    // Parse hunks
    index.hunks = [];

    while (i < diffstr.length) {
      var _line = diffstr[i];

      if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
        break;
      } else if (/^@@/.test(_line)) {
        index.hunks.push(parseHunk());
      } else if (_line && options.strict) {
        // Ignore unexpected content unless in strict mode
        throw new Error('Unknown line ' + (i + 1) + ' ' + JSON.stringify(_line));
      } else {
        i++;
      }
    }
  }

  // Parses the --- and +++ headers, if none are found, no lines
  // are consumed.
  function parseFileHeader(index) {
    var fileHeader = /^(\-\-\-|\+\+\+)\s+(\S*)\s?(.*?)\s*$/.exec(diffstr[i]);
    if (fileHeader) {
      var keyPrefix = fileHeader[1] === '---' ? 'old' : 'new';
      index[keyPrefix + 'FileName'] = fileHeader[2];
      index[keyPrefix + 'Header'] = fileHeader[3];

      i++;
    }
  }

  // Parses a hunk
  // This assumes that we are at the start of a hunk.
  function parseHunk() {
    var chunkHeaderIndex = i,
        chunkHeaderLine = diffstr[i++],
        chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);

    var hunk = {
      oldStart: +chunkHeader[1],
      oldLines: +chunkHeader[2] || 1,
      newStart: +chunkHeader[3],
      newLines: +chunkHeader[4] || 1,
      lines: []
    };

    var addCount = 0,
        removeCount = 0;
    for (; i < diffstr.length; i++) {
      var operation = diffstr[i][0];

      if (operation === '+' || operation === '-' || operation === ' ' || operation === '\\') {
        hunk.lines.push(diffstr[i]);

        if (operation === '+') {
          addCount++;
        } else if (operation === '-') {
          removeCount++;
        } else if (operation === ' ') {
          addCount++;
          removeCount++;
        }
      } else {
        break;
      }
    }

    // Handle the empty block count case
    if (!addCount && hunk.newLines === 1) {
      hunk.newLines = 0;
    }
    if (!removeCount && hunk.oldLines === 1) {
      hunk.oldLines = 0;
    }

    // Perform optional sanity checking
    if (options.strict) {
      if (addCount !== hunk.newLines) {
        throw new Error('Added line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
      }
      if (removeCount !== hunk.oldLines) {
        throw new Error('Removed line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
      }
    }

    return hunk;
  }

  while (i < diffstr.length) {
    parseIndex();
  }

  return list;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9wYXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0NBQWdCO0FBQVQsU0FBUyxVQUFULENBQW9CLE9BQXBCLEVBQTJDO3NEQUFkLGdFQUFVLGtCQUFJOztBQUNoRCxNQUFJLFVBQVUsUUFBUSxLQUFSLENBQWMsSUFBZCxDQUFWO01BQ0EsT0FBTyxFQUFQO01BQ0EsSUFBSSxDQUFKLENBSDRDOztBQUtoRCxXQUFTLFVBQVQsR0FBc0I7QUFDcEIsUUFBSSxRQUFRLEVBQVIsQ0FEZ0I7QUFFcEIsU0FBSyxJQUFMLENBQVUsS0FBVjs7O0FBRm9CLFdBS2IsSUFBSSxRQUFRLE1BQVIsRUFBZ0I7QUFDekIsVUFBSSxPQUFPLFFBQVEsQ0FBUixDQUFQOzs7QUFEcUIsVUFJckIsd0JBQXdCLElBQXhCLENBQTZCLElBQTdCLENBQUosRUFBd0M7QUFDdEMsY0FEc0M7T0FBeEM7OztBQUp5QixVQVNyQixTQUFTLDJDQUE2QyxJQUE3QyxDQUFrRCxJQUFsRCxDQUFULENBVHFCO0FBVXpCLFVBQUksTUFBSixFQUFZO0FBQ1YsY0FBTSxLQUFOLEdBQWMsT0FBTyxDQUFQLENBQWQsQ0FEVTtPQUFaOztBQUlBLFVBZHlCO0tBQTNCOzs7O0FBTG9CLG1CQXdCcEIsQ0FBZ0IsS0FBaEIsRUF4Qm9CO0FBeUJwQixvQkFBZ0IsS0FBaEI7OztBQXpCb0IsU0E0QnBCLENBQU0sS0FBTixHQUFjLEVBQWQsQ0E1Qm9COztBQThCcEIsV0FBTyxJQUFJLFFBQVEsTUFBUixFQUFnQjtBQUN6QixVQUFJLFFBQU8sUUFBUSxDQUFSLENBQVAsQ0FEcUI7O0FBR3pCLFVBQUksaUNBQWlDLElBQWpDLENBQXNDLEtBQXRDLENBQUosRUFBaUQ7QUFDL0MsY0FEK0M7T0FBakQsTUFFTyxJQUFJLE1BQU0sSUFBTixDQUFXLEtBQVgsQ0FBSixFQUFzQjtBQUMzQixjQUFNLEtBQU4sQ0FBWSxJQUFaLENBQWlCLFdBQWpCLEVBRDJCO09BQXRCLE1BRUEsSUFBSSxTQUFRLFFBQVEsTUFBUixFQUFnQjs7QUFFakMsY0FBTSxJQUFJLEtBQUosQ0FBVSxtQkFBbUIsSUFBSSxDQUFKLENBQW5CLEdBQTRCLEdBQTVCLEdBQWtDLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBbEMsQ0FBaEIsQ0FGaUM7T0FBNUIsTUFHQTtBQUNMLFlBREs7T0FIQTtLQVBUO0dBOUJGOzs7O0FBTGdELFdBcUR2QyxlQUFULENBQXlCLEtBQXpCLEVBQWdDO0FBQzlCLFFBQUksYUFBYSx1Q0FBeUMsSUFBekMsQ0FBOEMsUUFBUSxDQUFSLENBQTlDLENBQWIsQ0FEMEI7QUFFOUIsUUFBSSxVQUFKLEVBQWdCO0FBQ2QsVUFBSSxZQUFZLFdBQVcsQ0FBWCxNQUFrQixLQUFsQixHQUEwQixLQUExQixHQUFrQyxLQUFsQyxDQURGO0FBRWQsWUFBTSxZQUFZLFVBQVosQ0FBTixHQUFnQyxXQUFXLENBQVgsQ0FBaEMsQ0FGYztBQUdkLFlBQU0sWUFBWSxRQUFaLENBQU4sR0FBOEIsV0FBVyxDQUFYLENBQTlCLENBSGM7O0FBS2QsVUFMYztLQUFoQjtHQUZGOzs7O0FBckRnRCxXQWtFdkMsU0FBVCxHQUFxQjtBQUNuQixRQUFJLG1CQUFtQixDQUFuQjtRQUNBLGtCQUFrQixRQUFRLEdBQVIsQ0FBbEI7UUFDQSxjQUFjLGdCQUFnQixLQUFoQixDQUFzQiw0Q0FBdEIsQ0FBZCxDQUhlOztBQUtuQixRQUFJLE9BQU87QUFDVCxnQkFBVSxDQUFDLFlBQVksQ0FBWixDQUFEO0FBQ1YsZ0JBQVUsQ0FBQyxZQUFZLENBQVosQ0FBRCxJQUFtQixDQUFuQjtBQUNWLGdCQUFVLENBQUMsWUFBWSxDQUFaLENBQUQ7QUFDVixnQkFBVSxDQUFDLFlBQVksQ0FBWixDQUFELElBQW1CLENBQW5CO0FBQ1YsYUFBTyxFQUFQO0tBTEUsQ0FMZTs7QUFhbkIsUUFBSSxXQUFXLENBQVg7UUFDQSxjQUFjLENBQWQsQ0FkZTtBQWVuQixXQUFPLElBQUksUUFBUSxNQUFSLEVBQWdCLEdBQTNCLEVBQWdDO0FBQzlCLFVBQUksWUFBWSxRQUFRLENBQVIsRUFBVyxDQUFYLENBQVosQ0FEMEI7O0FBRzlCLFVBQUksY0FBYyxHQUFkLElBQXFCLGNBQWMsR0FBZCxJQUFxQixjQUFjLEdBQWQsSUFBcUIsY0FBYyxJQUFkLEVBQW9CO0FBQ3JGLGFBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsUUFBUSxDQUFSLENBQWhCLEVBRHFGOztBQUdyRixZQUFJLGNBQWMsR0FBZCxFQUFtQjtBQUNyQixxQkFEcUI7U0FBdkIsTUFFTyxJQUFJLGNBQWMsR0FBZCxFQUFtQjtBQUM1Qix3QkFENEI7U0FBdkIsTUFFQSxJQUFJLGNBQWMsR0FBZCxFQUFtQjtBQUM1QixxQkFENEI7QUFFNUIsd0JBRjRCO1NBQXZCO09BUFQsTUFXTztBQUNMLGNBREs7T0FYUDtLQUhGOzs7QUFmbUIsUUFtQ2YsQ0FBQyxRQUFELElBQWEsS0FBSyxRQUFMLEtBQWtCLENBQWxCLEVBQXFCO0FBQ3BDLFdBQUssUUFBTCxHQUFnQixDQUFoQixDQURvQztLQUF0QztBQUdBLFFBQUksQ0FBQyxXQUFELElBQWdCLEtBQUssUUFBTCxLQUFrQixDQUFsQixFQUFxQjtBQUN2QyxXQUFLLFFBQUwsR0FBZ0IsQ0FBaEIsQ0FEdUM7S0FBekM7OztBQXRDbUIsUUEyQ2YsUUFBUSxNQUFSLEVBQWdCO0FBQ2xCLFVBQUksYUFBYSxLQUFLLFFBQUwsRUFBZTtBQUM5QixjQUFNLElBQUksS0FBSixDQUFVLHNEQUFzRCxtQkFBbUIsQ0FBbkIsQ0FBdEQsQ0FBaEIsQ0FEOEI7T0FBaEM7QUFHQSxVQUFJLGdCQUFnQixLQUFLLFFBQUwsRUFBZTtBQUNqQyxjQUFNLElBQUksS0FBSixDQUFVLHdEQUF3RCxtQkFBbUIsQ0FBbkIsQ0FBeEQsQ0FBaEIsQ0FEaUM7T0FBbkM7S0FKRjs7QUFTQSxXQUFPLElBQVAsQ0FwRG1CO0dBQXJCOztBQXVEQSxTQUFPLElBQUksUUFBUSxNQUFSLEVBQWdCO0FBQ3pCLGlCQUR5QjtHQUEzQjs7QUFJQSxTQUFPLElBQVAsQ0E3SGdEO0NBQTNDIiwiZmlsZSI6InBhcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGF0Y2godW5pRGlmZiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBkaWZmc3RyID0gdW5pRGlmZi5zcGxpdCgnXFxuJyksXG4gICAgICBsaXN0ID0gW10sXG4gICAgICBpID0gMDtcblxuICBmdW5jdGlvbiBwYXJzZUluZGV4KCkge1xuICAgIGxldCBpbmRleCA9IHt9O1xuICAgIGxpc3QucHVzaChpbmRleCk7XG5cbiAgICAvLyBQYXJzZSBkaWZmIG1ldGFkYXRhXG4gICAgd2hpbGUgKGkgPCBkaWZmc3RyLmxlbmd0aCkge1xuICAgICAgbGV0IGxpbmUgPSBkaWZmc3RyW2ldO1xuXG4gICAgICAvLyBGaWxlIGhlYWRlciBmb3VuZCwgZW5kIHBhcnNpbmcgZGlmZiBtZXRhZGF0YVxuICAgICAgaWYgKC9eKFxcLVxcLVxcLXxcXCtcXCtcXCt8QEApXFxzLy50ZXN0KGxpbmUpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBEaWZmIGluZGV4XG4gICAgICBsZXQgaGVhZGVyID0gKC9eKD86SW5kZXg6fGRpZmYoPzogLXIgXFx3KykrKVxccysoLis/KVxccyokLykuZXhlYyhsaW5lKTtcbiAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgaW5kZXguaW5kZXggPSBoZWFkZXJbMV07XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLyBQYXJzZSBmaWxlIGhlYWRlcnMgaWYgdGhleSBhcmUgZGVmaW5lZC4gVW5pZmllZCBkaWZmIHJlcXVpcmVzIHRoZW0sIGJ1dFxuICAgIC8vIHRoZXJlJ3Mgbm8gdGVjaG5pY2FsIGlzc3VlcyB0byBoYXZlIGFuIGlzb2xhdGVkIGh1bmsgd2l0aG91dCBmaWxlIGhlYWRlclxuICAgIHBhcnNlRmlsZUhlYWRlcihpbmRleCk7XG4gICAgcGFyc2VGaWxlSGVhZGVyKGluZGV4KTtcblxuICAgIC8vIFBhcnNlIGh1bmtzXG4gICAgaW5kZXguaHVua3MgPSBbXTtcblxuICAgIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICAgIGxldCBsaW5lID0gZGlmZnN0cltpXTtcblxuICAgICAgaWYgKC9eKEluZGV4OnxkaWZmfFxcLVxcLVxcLXxcXCtcXCtcXCspXFxzLy50ZXN0KGxpbmUpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmICgvXkBALy50ZXN0KGxpbmUpKSB7XG4gICAgICAgIGluZGV4Lmh1bmtzLnB1c2gocGFyc2VIdW5rKCkpO1xuICAgICAgfSBlbHNlIGlmIChsaW5lICYmIG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICAgIC8vIElnbm9yZSB1bmV4cGVjdGVkIGNvbnRlbnQgdW5sZXNzIGluIHN0cmljdCBtb2RlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBsaW5lICcgKyAoaSArIDEpICsgJyAnICsgSlNPTi5zdHJpbmdpZnkobGluZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFBhcnNlcyB0aGUgLS0tIGFuZCArKysgaGVhZGVycywgaWYgbm9uZSBhcmUgZm91bmQsIG5vIGxpbmVzXG4gIC8vIGFyZSBjb25zdW1lZC5cbiAgZnVuY3Rpb24gcGFyc2VGaWxlSGVhZGVyKGluZGV4KSB7XG4gICAgbGV0IGZpbGVIZWFkZXIgPSAoL14oXFwtXFwtXFwtfFxcK1xcK1xcKylcXHMrKFxcUyopXFxzPyguKj8pXFxzKiQvKS5leGVjKGRpZmZzdHJbaV0pO1xuICAgIGlmIChmaWxlSGVhZGVyKSB7XG4gICAgICBsZXQga2V5UHJlZml4ID0gZmlsZUhlYWRlclsxXSA9PT0gJy0tLScgPyAnb2xkJyA6ICduZXcnO1xuICAgICAgaW5kZXhba2V5UHJlZml4ICsgJ0ZpbGVOYW1lJ10gPSBmaWxlSGVhZGVyWzJdO1xuICAgICAgaW5kZXhba2V5UHJlZml4ICsgJ0hlYWRlciddID0gZmlsZUhlYWRlclszXTtcblxuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuXG4gIC8vIFBhcnNlcyBhIGh1bmtcbiAgLy8gVGhpcyBhc3N1bWVzIHRoYXQgd2UgYXJlIGF0IHRoZSBzdGFydCBvZiBhIGh1bmsuXG4gIGZ1bmN0aW9uIHBhcnNlSHVuaygpIHtcbiAgICBsZXQgY2h1bmtIZWFkZXJJbmRleCA9IGksXG4gICAgICAgIGNodW5rSGVhZGVyTGluZSA9IGRpZmZzdHJbaSsrXSxcbiAgICAgICAgY2h1bmtIZWFkZXIgPSBjaHVua0hlYWRlckxpbmUuc3BsaXQoL0BAIC0oXFxkKykoPzosKFxcZCspKT8gXFwrKFxcZCspKD86LChcXGQrKSk/IEBALyk7XG5cbiAgICBsZXQgaHVuayA9IHtcbiAgICAgIG9sZFN0YXJ0OiArY2h1bmtIZWFkZXJbMV0sXG4gICAgICBvbGRMaW5lczogK2NodW5rSGVhZGVyWzJdIHx8IDEsXG4gICAgICBuZXdTdGFydDogK2NodW5rSGVhZGVyWzNdLFxuICAgICAgbmV3TGluZXM6ICtjaHVua0hlYWRlcls0XSB8fCAxLFxuICAgICAgbGluZXM6IFtdXG4gICAgfTtcblxuICAgIGxldCBhZGRDb3VudCA9IDAsXG4gICAgICAgIHJlbW92ZUNvdW50ID0gMDtcbiAgICBmb3IgKDsgaSA8IGRpZmZzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvcGVyYXRpb24gPSBkaWZmc3RyW2ldWzBdO1xuXG4gICAgICBpZiAob3BlcmF0aW9uID09PSAnKycgfHwgb3BlcmF0aW9uID09PSAnLScgfHwgb3BlcmF0aW9uID09PSAnICcgfHwgb3BlcmF0aW9uID09PSAnXFxcXCcpIHtcbiAgICAgICAgaHVuay5saW5lcy5wdXNoKGRpZmZzdHJbaV0pO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICAgIGFkZENvdW50Kys7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgICAgYWRkQ291bnQrKztcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgdGhlIGVtcHR5IGJsb2NrIGNvdW50IGNhc2VcbiAgICBpZiAoIWFkZENvdW50ICYmIGh1bmsubmV3TGluZXMgPT09IDEpIHtcbiAgICAgIGh1bmsubmV3TGluZXMgPSAwO1xuICAgIH1cbiAgICBpZiAoIXJlbW92ZUNvdW50ICYmIGh1bmsub2xkTGluZXMgPT09IDEpIHtcbiAgICAgIGh1bmsub2xkTGluZXMgPSAwO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gb3B0aW9uYWwgc2FuaXR5IGNoZWNraW5nXG4gICAgaWYgKG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICBpZiAoYWRkQ291bnQgIT09IGh1bmsubmV3TGluZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBZGRlZCBsaW5lIGNvdW50IGRpZCBub3QgbWF0Y2ggZm9yIGh1bmsgYXQgbGluZSAnICsgKGNodW5rSGVhZGVySW5kZXggKyAxKSk7XG4gICAgICB9XG4gICAgICBpZiAocmVtb3ZlQ291bnQgIT09IGh1bmsub2xkTGluZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmVkIGxpbmUgY291bnQgZGlkIG5vdCBtYXRjaCBmb3IgaHVuayBhdCBsaW5lICcgKyAoY2h1bmtIZWFkZXJJbmRleCArIDEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHVuaztcbiAgfVxuXG4gIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICBwYXJzZUluZGV4KCk7XG4gIH1cblxuICByZXR1cm4gbGlzdDtcbn1cbiJdfQ==


/***/ }),

/***/ 3929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PreviewIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(28);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '9', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'preview', d: 'M8 4C2.751 4 0 7.884 0 8.5 0 9.116 2.751 13 8 13c5.248 0 8-3.884 8-4.5C16 7.885 13.248 4 8 4zm0 7.961c-1.964 0-3.556-1.55-3.556-3.461 0-1.913 1.592-3.463 3.556-3.463 1.963 0 3.555 1.55 3.555 3.463 0 1.912-1.592 3.461-3.555 3.461zm0-3.46c-.326-.36.53-1.732 0-1.732-.982 0-1.778.775-1.778 1.731 0 .956.795 1.73 1.778 1.73.982 0 1.778-.774 1.778-1.73 0-.439-1.502.306-1.778 0z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#preview' }));



function PreviewIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 3930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SettingsIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(28);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'settings', d: 'M16 9.62c-.162.507-.316 1.009-.49 1.502a.292.292 0 0 1-.24.074 40.124 40.124 0 0 1-1.51-.217.35.35 0 0 0-.409.16c-.178.275-.371.54-.579.795a.389.389 0 0 0-.046.502c.275.488.518.981.776 1.506l-1.378 1c-.423-.405-.848-.798-1.257-1.206a.354.354 0 0 0-.425-.091c-.348.125-.707.225-1.054.354a.318.318 0 0 0-.176.205c-.11.584-.206 1.174-.313 1.796H7.304a.21.21 0 0 1-.133-.145c-.105-.53-.201-1.063-.29-1.597a.26.26 0 0 0-.211-.245c-.37-.106-.738-.225-1.106-.348a.266.266 0 0 0-.318.074c-.412.428-.831.855-1.263 1.283l-1.421-1c.252-.508.486-1.013.753-1.5a.403.403 0 0 0-.04-.53c-.224-.263-.424-.545-.623-.825a.236.236 0 0 0-.29-.116c-.524.09-1.054.162-1.58.248a.235.235 0 0 1-.2-.023.228.228 0 0 1-.107-.168A19.382 19.382 0 0 0 .08 9.93a.205.205 0 0 1-.019-.188.21.21 0 0 1 .144-.125c.471-.229.926-.485 1.395-.719a.285.285 0 0 0 .188-.314c-.013-.35-.013-.699 0-1.049a.333.333 0 0 0-.22-.365C1.045 6.925.536 6.654 0 6.38c.162-.507.316-1.009.49-1.499a.292.292 0 0 1 .24-.074c.506.063 1.01.131 1.51.214a.347.347 0 0 0 .406-.157c.182-.283.381-.554.596-.813a.37.37 0 0 0 .03-.484 43.456 43.456 0 0 1-.77-1.509l1.377-1c.426.407.848.798 1.26 1.206a.35.35 0 0 0 .425.091c.347-.125.706-.225 1.054-.354a.315.315 0 0 0 .176-.205C6.904 1.212 7 .622 7.107 0h1.595a.212.212 0 0 1 .133.145c.104.53.203 1.061.29 1.597a.26.26 0 0 0 .211.248c.37.106.738.225 1.106.348.11.05.24.02.315-.074.411-.428.831-.856 1.26-1.283l1.421 1c-.252.51-.492 1.013-.75 1.503a.39.39 0 0 0 .026.525c.235.285.58.407.657.855.058.064.142.1.23.097a50.556 50.556 0 0 0 1.603-.243.235.235 0 0 1 .206.008.228.228 0 0 1 .118.166c.116.405.255.804.4 1.198.035.05.043.113.022.17a.187.187 0 0 1-.13.115c-.474.237-.94.493-1.415.73a.285.285 0 0 0-.185.313c0 .351.014.702 0 1.05a.333.333 0 0 0 .22.365c.51.242 1.027.516 1.56.786zM10.708 8a2.665 2.665 0 0 0-1.667-2.467 2.737 2.737 0 0 0-2.951.574 2.636 2.636 0 0 0-.59 2.906 2.707 2.707 0 0 0 2.501 1.647c1.49-.008 2.696-1.193 2.707-2.66z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#A9A9A9', fillRule: 'evenodd', xlinkHref: '#settings' }));



function SettingsIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 3932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_pipelines_user_action__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_conversion_promisifiedConverter__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_services_AnalyticsService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(5);





/* harmony default export */ __webpack_exports__["a"] = ((id, action, modifiers, options = {}, callback) => {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  if (action === 'duplicate') {
    let duplicateEnvironmentEvent = {
      name: 'duplicate',
      namespace: 'environment',
      data: {
        model: 'environment',
        environment: { id } } };



    Object(__WEBPACK_IMPORTED_MODULE_0__modules_pipelines_user_action__["a" /* default */])(duplicateEnvironmentEvent);
    options.origin === 'browse' && __WEBPACK_IMPORTED_MODULE_2__modules_services_AnalyticsService__["a" /* default */].addEvent('environment', 'duplicate', 'browse_view');
  } else
  if (action === 'download') {
    Object(__WEBPACK_IMPORTED_MODULE_1__services_conversion_promisifiedConverter__["a" /* default */])().then(converter => {
      converter.saveEntity({ id }, { type: 'environment' });
      options.origin === 'browse' && __WEBPACK_IMPORTED_MODULE_2__modules_services_AnalyticsService__["a" /* default */].addEvent('environment', 'download', 'browse_view');
    });
  } else
  if (action === 'delete') {
    pm.mediator.trigger('showEnvironmentDeleteModal', id, { origin: options.origin }, callback);
  } else
  if (action === 'add-to-workspace') {
    let uid = _.get(Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["getStore"])('EnvironmentStore').find(id), 'uid');
    pm.mediator.trigger('openAddToWorkspaceModal', uid, 'environment', { origin: options.origin });
  } else
  if (action === 'remove-from-workspace') {
    pm.mediator.trigger('showRemoveEnvironmentWorkspaceModal', id, { origin: options.origin }, callback);
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 4283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = once;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function once(fn) {
    var _this = this;
    var didCall = false;
    var result;
    return function () {
        if (didCall) {
            return result;
        }
        didCall = true;
        result = fn.apply(_this, arguments);
        return result;
    };
}

/***/ }),

/***/ 4293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageFeatureRegistry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_common_event_js__ = __webpack_require__(3481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_common_lifecycle_js__ = __webpack_require__(3480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__languageSelector_js__ = __webpack_require__(4294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_modelService_js__ = __webpack_require__(3566);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




function isExclusive(selector) {
    if (typeof selector === 'string') {
        return false;
    } else
    if (Array.isArray(selector)) {
        return selector.every(isExclusive);
    } else
    {
        return !!selector.exclusive;
    }
}
var LanguageFeatureRegistry = /** @class */function () {
    function LanguageFeatureRegistry() {
        this._clock = 0;
        this._entries = [];
        this._onDidChange = new __WEBPACK_IMPORTED_MODULE_0__base_common_event_js__["a" /* Emitter */]();
    }
    Object.defineProperty(LanguageFeatureRegistry.prototype, "onDidChange", {
        get: function () {
            return this._onDidChange.event;
        },
        enumerable: true,
        configurable: true });

    LanguageFeatureRegistry.prototype.register = function (selector, provider) {
        var _this = this;
        var entry = {
            selector: selector,
            provider: provider,
            _score: -1,
            _time: this._clock++ };

        this._entries.push(entry);
        this._lastCandidate = undefined;
        this._onDidChange.fire(this._entries.length);
        return Object(__WEBPACK_IMPORTED_MODULE_1__base_common_lifecycle_js__["f" /* toDisposable */])(function () {
            if (entry) {
                var idx = _this._entries.indexOf(entry);
                if (idx >= 0) {
                    _this._entries.splice(idx, 1);
                    _this._lastCandidate = undefined;
                    _this._onDidChange.fire(_this._entries.length);
                    entry = undefined;
                }
            }
        });
    };
    LanguageFeatureRegistry.prototype.has = function (model) {
        return this.all(model).length > 0;
    };
    LanguageFeatureRegistry.prototype.all = function (model) {
        if (!model) {
            return [];
        }
        this._updateScores(model);
        var result = [];
        // from registry
        for (var _i = 0, _a = this._entries; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry._score > 0) {
                result.push(entry.provider);
            }
        }
        return result;
    };
    LanguageFeatureRegistry.prototype.ordered = function (model) {
        var result = [];
        this._orderedForEach(model, function (entry) {return result.push(entry.provider);});
        return result;
    };
    LanguageFeatureRegistry.prototype.orderedGroups = function (model) {
        var result = [];
        var lastBucket;
        var lastBucketScore;
        this._orderedForEach(model, function (entry) {
            if (lastBucket && lastBucketScore === entry._score) {
                lastBucket.push(entry.provider);
            } else
            {
                lastBucketScore = entry._score;
                lastBucket = [entry.provider];
                result.push(lastBucket);
            }
        });
        return result;
    };
    LanguageFeatureRegistry.prototype._orderedForEach = function (model, callback) {
        if (!model) {
            return;
        }
        this._updateScores(model);
        for (var _i = 0, _a = this._entries; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry._score > 0) {
                callback(entry);
            }
        }
    };
    LanguageFeatureRegistry.prototype._updateScores = function (model) {
        var candidate = {
            uri: model.uri.toString(),
            language: model.getLanguageIdentifier().language };

        if (this._lastCandidate &&
        this._lastCandidate.language === candidate.language &&
        this._lastCandidate.uri === candidate.uri) {
            // nothing has changed
            return;
        }
        this._lastCandidate = candidate;
        for (var _i = 0, _a = this._entries; _i < _a.length; _i++) {
            var entry = _a[_i];
            entry._score = Object(__WEBPACK_IMPORTED_MODULE_2__languageSelector_js__["a" /* score */])(entry.selector, model.uri, model.getLanguageIdentifier().language, Object(__WEBPACK_IMPORTED_MODULE_3__services_modelService_js__["b" /* shouldSynchronizeModel */])(model));
            if (isExclusive(entry.selector) && entry._score > 0) {
                // support for one exclusive selector that overwrites
                // any other selector
                for (var _b = 0, _c = this._entries; _b < _c.length; _b++) {
                    var entry_1 = _c[_b];
                    entry_1._score = 0;
                }
                entry._score = 1000;
                break;
            }
        }
        // needs sorting
        this._entries.sort(LanguageFeatureRegistry._compareByScoreAndTime);
    };
    LanguageFeatureRegistry._compareByScoreAndTime = function (a, b) {
        if (a._score < b._score) {
            return 1;
        } else
        if (a._score > b._score) {
            return -1;
        } else
        if (a._time < b._time) {
            return 1;
        } else
        if (a._time > b._time) {
            return -1;
        } else
        {
            return 0;
        }
    };
    return LanguageFeatureRegistry;
}();


/***/ }),

/***/ 4294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = score;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_common_glob_js__ = __webpack_require__(3848);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

function score(selector, candidateUri, candidateLanguage, candidateIsSynchronized) {
    if (Array.isArray(selector)) {
        // array -> take max individual value
        var ret = 0;
        for (var _i = 0, selector_1 = selector; _i < selector_1.length; _i++) {
            var filter = selector_1[_i];
            var value = score(filter, candidateUri, candidateLanguage, candidateIsSynchronized);
            if (value === 10) {
                return value; // already at the highest
            }
            if (value > ret) {
                ret = value;
            }
        }
        return ret;
    } else
    if (typeof selector === 'string') {
        if (!candidateIsSynchronized) {
            return 0;
        }
        // short-hand notion, desugars to
        // 'fooLang' -> { language: 'fooLang'}
        // '*' -> { language: '*' }
        if (selector === '*') {
            return 5;
        } else
        if (selector === candidateLanguage) {
            return 10;
        } else
        {
            return 0;
        }
    } else
    if (selector) {
        // filter -> select accordingly, use defaults for scheme
        var language = selector.language,pattern = selector.pattern,scheme = selector.scheme,hasAccessToAllModels = selector.hasAccessToAllModels;
        if (!candidateIsSynchronized && !hasAccessToAllModels) {
            return 0;
        }
        var ret = 0;
        if (scheme) {
            if (scheme === candidateUri.scheme) {
                ret = 10;
            } else
            if (scheme === '*') {
                ret = 5;
            } else
            {
                return 0;
            }
        }
        if (language) {
            if (language === candidateLanguage) {
                ret = 10;
            } else
            if (language === '*') {
                ret = Math.max(ret, 5);
            } else
            {
                return 0;
            }
        }
        if (pattern) {
            if (pattern === candidateUri.fsPath || Object(__WEBPACK_IMPORTED_MODULE_0__base_common_glob_js__["a" /* match */])(pattern, candidateUri.fsPath)) {
                ret = 10;
            } else
            {
                return 0;
            }
        }
        return ret;
    } else
    {
        return 0;
    }
}

/***/ }),

/***/ 4295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return env; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return platform; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_js__ = __webpack_require__(3488);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var safeProcess = typeof process === 'undefined' ? {
    cwd: function () {return '/';},
    env: Object.create(null),
    get platform() {return __WEBPACK_IMPORTED_MODULE_0__platform_js__["g" /* isWindows */] ? 'win32' : __WEBPACK_IMPORTED_MODULE_0__platform_js__["d" /* isMacintosh */] ? 'darwin' : 'linux';},
    nextTick: function (callback) {return Object(__WEBPACK_IMPORTED_MODULE_0__platform_js__["h" /* setImmediate */])(callback);} } :
process;
var cwd = safeProcess.cwd;
var env = safeProcess.env;
var platform = safeProcess.platform;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),

/***/ 4296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenizationRegistryImpl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_common_event_js__ = __webpack_require__(3481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_common_lifecycle_js__ = __webpack_require__(3480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_common_types_js__ = __webpack_require__(3498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_common_map_js__ = __webpack_require__(3536);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




var TokenizationRegistryImpl = /** @class */function () {
    function TokenizationRegistryImpl() {
        this._map = new Map();
        this._promises = new Map();
        this._onDidChange = new __WEBPACK_IMPORTED_MODULE_0__base_common_event_js__["a" /* Emitter */]();
        this.onDidChange = this._onDidChange.event;
        this._colorMap = null;
    }
    TokenizationRegistryImpl.prototype.fire = function (languages) {
        this._onDidChange.fire({
            changedLanguages: languages,
            changedColorMap: false });

    };
    TokenizationRegistryImpl.prototype.register = function (language, support) {
        var _this = this;
        this._map.set(language, support);
        this.fire([language]);
        return Object(__WEBPACK_IMPORTED_MODULE_1__base_common_lifecycle_js__["f" /* toDisposable */])(function () {
            if (_this._map.get(language) !== support) {
                return;
            }
            _this._map.delete(language);
            _this.fire([language]);
        });
    };
    TokenizationRegistryImpl.prototype.registerPromise = function (language, supportPromise) {
        var _this = this;
        var registration = null;
        var isDisposed = false;
        this._promises.set(language, supportPromise.then(function (support) {
            _this._promises.delete(language);
            if (isDisposed || !support) {
                return;
            }
            registration = _this.register(language, support);
        }));
        return Object(__WEBPACK_IMPORTED_MODULE_1__base_common_lifecycle_js__["f" /* toDisposable */])(function () {
            isDisposed = true;
            if (registration) {
                registration.dispose();
            }
        });
    };
    TokenizationRegistryImpl.prototype.getPromise = function (language) {
        var _this = this;
        var support = this.get(language);
        if (support) {
            return Promise.resolve(support);
        }
        var promise = this._promises.get(language);
        if (promise) {
            return promise.then(function (_) {return _this.get(language);});
        }
        return null;
    };
    TokenizationRegistryImpl.prototype.get = function (language) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__base_common_types_js__["m" /* withUndefinedAsNull */])(this._map.get(language));
    };
    TokenizationRegistryImpl.prototype.setColorMap = function (colorMap) {
        this._colorMap = colorMap;
        this._onDidChange.fire({
            changedLanguages: Object(__WEBPACK_IMPORTED_MODULE_3__base_common_map_js__["d" /* keys */])(this._map),
            changedColorMap: true });

    };
    TokenizationRegistryImpl.prototype.getColorMap = function () {
        return this._colorMap;
    };
    TokenizationRegistryImpl.prototype.getDefaultBackground = function () {
        if (this._colorMap && this._colorMap.length > 2 /* DefaultBackground */) {
                return this._colorMap[2 /* DefaultBackground */];
            }
        return null;
    };
    return TokenizationRegistryImpl;
}();


/***/ }),

/***/ 4321:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4322);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1489)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../../src/renderer/node_modules/css-loader/index.js!./aria.css", function() {
			var newContent = require("!!../../../../../../../../src/renderer/node_modules/css-loader/index.js!./aria.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 4322:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1488)(undefined);
// imports


// module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-aria-container {\n\tposition: absolute; /* try to hide from window but not from screen readers */\n\tleft:-999em;\n}", ""]);

// exports


/***/ }),

/***/ 4339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtensionIdentifier; });
/**
 * **!Do not construct directly!**
 *
 * **!Only static methods because it gets serialized!**
 *
 * This represents the "canonical" version for an extension identifier. Extension ids
 * have to be case-insensitive (due to the marketplace), but we must ensure case
 * preservation because the extension API is already public at this time.
 *
 * For example, given an extension with the publisher `"Hello"` and the name `"World"`,
 * its canonical extension identifier is `"Hello.World"`. This extension could be
 * referenced in some other extension's dependencies using the string `"hello.world"`.
 *
 * To make matters more complicated, an extension can optionally have an UUID. When two
 * extensions have the same UUID, they are considered equal even if their identifier is different.
 */
var ExtensionIdentifier = /** @class */function () {
    function ExtensionIdentifier(value) {
        this.value = value;
        this._lower = value.toLowerCase();
    }
    /**
       * Gives the value by which to index (for equality).
       */
    ExtensionIdentifier.toKey = function (id) {
        if (typeof id === 'string') {
            return id.toLowerCase();
        }
        return id._lower;
    };
    return ExtensionIdentifier;
}();


/***/ }),

/***/ 4346:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4347);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1489)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../src/renderer/node_modules/css-loader/index.js!./goToDefinitionMouse.css", function() {
			var newContent = require("!!../../../../../../../src/renderer/node_modules/css-loader/index.js!./goToDefinitionMouse.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 4347:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1488)(undefined);
// imports


// module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-editor .goto-definition-link {\n\ttext-decoration: underline;\n\tcursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ 4632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports.canonicalize = exports.convertChangesToXML = exports.convertChangesToDMP = exports.parsePatch = exports.applyPatches = exports.applyPatch = exports.createPatch = exports.createTwoFilesPatch = exports.structuredPatch = exports.diffJson = exports.diffCss = exports.diffSentences = exports.diffTrimmedLines = exports.diffLines = exports.diffWordsWithSpace = exports.diffWords = exports.diffChars = exports.Diff = undefined;
/*istanbul ignore end*/
var /*istanbul ignore start*/_base = __webpack_require__(3573) /*istanbul ignore end*/;

/*istanbul ignore start*/
var _base2 = _interopRequireDefault(_base);

/*istanbul ignore end*/
var /*istanbul ignore start*/_character = __webpack_require__(4633) /*istanbul ignore end*/;

var /*istanbul ignore start*/_word = __webpack_require__(4634) /*istanbul ignore end*/;

var /*istanbul ignore start*/_line = __webpack_require__(3745) /*istanbul ignore end*/;

var /*istanbul ignore start*/_sentence = __webpack_require__(4635) /*istanbul ignore end*/;

var /*istanbul ignore start*/_css = __webpack_require__(4636) /*istanbul ignore end*/;

var /*istanbul ignore start*/_json = __webpack_require__(4637) /*istanbul ignore end*/;

var /*istanbul ignore start*/_apply = __webpack_require__(4638) /*istanbul ignore end*/;

var /*istanbul ignore start*/_parse = __webpack_require__(3928) /*istanbul ignore end*/;

var /*istanbul ignore start*/_create = __webpack_require__(4640) /*istanbul ignore end*/;

var /*istanbul ignore start*/_dmp = __webpack_require__(4641) /*istanbul ignore end*/;

var /*istanbul ignore start*/_xml = __webpack_require__(4642) /*istanbul ignore end*/;

/*istanbul ignore start*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* See LICENSE file for terms of use */

/*
 * Text diff implementation.
 *
 * This library supports the following APIS:
 * JsDiff.diffChars: Character by character diff
 * JsDiff.diffWords: Word (as defined by \b regex) diff which ignores whitespace
 * JsDiff.diffLines: Line based diff
 *
 * JsDiff.diffCss: Diff targeted at CSS content
 *
 * These methods are based on the implementation proposed in
 * "An O(ND) Difference Algorithm and its Variations" (Myers, 1986).
 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927
 */
exports. /*istanbul ignore end*/Diff = _base2.default;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffChars = _character.diffChars;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWords = _word.diffWords;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWordsWithSpace = _word.diffWordsWithSpace;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffLines = _line.diffLines;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffTrimmedLines = _line.diffTrimmedLines;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffSentences = _sentence.diffSentences;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffCss = _css.diffCss;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffJson = _json.diffJson;
/*istanbul ignore start*/exports. /*istanbul ignore end*/structuredPatch = _create.structuredPatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/createTwoFilesPatch = _create.createTwoFilesPatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/createPatch = _create.createPatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatch = _apply.applyPatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatches = _apply.applyPatches;
/*istanbul ignore start*/exports. /*istanbul ignore end*/parsePatch = _parse.parsePatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/convertChangesToDMP = _dmp.convertChangesToDMP;
/*istanbul ignore start*/exports. /*istanbul ignore end*/convertChangesToXML = _xml.convertChangesToXML;
/*istanbul ignore start*/exports. /*istanbul ignore end*/canonicalize = _json.canonicalize;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQWdCQTs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHRTt5REFFQTt5REFDQTt5REFDQTt5REFDQTt5REFDQTt5REFDQTt5REFFQTt5REFDQTt5REFFQTt5REFDQTt5REFDQTt5REFDQTt5REFDQTt5REFDQTt5REFDQTt5REFDQTt5REFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNlZSBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zIG9mIHVzZSAqL1xuXG4vKlxuICogVGV4dCBkaWZmIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIFRoaXMgbGlicmFyeSBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIEFQSVM6XG4gKiBKc0RpZmYuZGlmZkNoYXJzOiBDaGFyYWN0ZXIgYnkgY2hhcmFjdGVyIGRpZmZcbiAqIEpzRGlmZi5kaWZmV29yZHM6IFdvcmQgKGFzIGRlZmluZWQgYnkgXFxiIHJlZ2V4KSBkaWZmIHdoaWNoIGlnbm9yZXMgd2hpdGVzcGFjZVxuICogSnNEaWZmLmRpZmZMaW5lczogTGluZSBiYXNlZCBkaWZmXG4gKlxuICogSnNEaWZmLmRpZmZDc3M6IERpZmYgdGFyZ2V0ZWQgYXQgQ1NTIGNvbnRlbnRcbiAqXG4gKiBUaGVzZSBtZXRob2RzIGFyZSBiYXNlZCBvbiB0aGUgaW1wbGVtZW50YXRpb24gcHJvcG9zZWQgaW5cbiAqIFwiQW4gTyhORCkgRGlmZmVyZW5jZSBBbGdvcml0aG0gYW5kIGl0cyBWYXJpYXRpb25zXCIgKE15ZXJzLCAxOTg2KS5cbiAqIGh0dHA6Ly9jaXRlc2VlcnguaXN0LnBzdS5lZHUvdmlld2RvYy9zdW1tYXJ5P2RvaT0xMC4xLjEuNC42OTI3XG4gKi9cbmltcG9ydCBEaWZmIGZyb20gJy4vZGlmZi9iYXNlJztcbmltcG9ydCB7ZGlmZkNoYXJzfSBmcm9tICcuL2RpZmYvY2hhcmFjdGVyJztcbmltcG9ydCB7ZGlmZldvcmRzLCBkaWZmV29yZHNXaXRoU3BhY2V9IGZyb20gJy4vZGlmZi93b3JkJztcbmltcG9ydCB7ZGlmZkxpbmVzLCBkaWZmVHJpbW1lZExpbmVzfSBmcm9tICcuL2RpZmYvbGluZSc7XG5pbXBvcnQge2RpZmZTZW50ZW5jZXN9IGZyb20gJy4vZGlmZi9zZW50ZW5jZSc7XG5cbmltcG9ydCB7ZGlmZkNzc30gZnJvbSAnLi9kaWZmL2Nzcyc7XG5pbXBvcnQge2RpZmZKc29uLCBjYW5vbmljYWxpemV9IGZyb20gJy4vZGlmZi9qc29uJztcblxuaW1wb3J0IHthcHBseVBhdGNoLCBhcHBseVBhdGNoZXN9IGZyb20gJy4vcGF0Y2gvYXBwbHknO1xuaW1wb3J0IHtwYXJzZVBhdGNofSBmcm9tICcuL3BhdGNoL3BhcnNlJztcbmltcG9ydCB7c3RydWN0dXJlZFBhdGNoLCBjcmVhdGVUd29GaWxlc1BhdGNoLCBjcmVhdGVQYXRjaH0gZnJvbSAnLi9wYXRjaC9jcmVhdGUnO1xuXG5pbXBvcnQge2NvbnZlcnRDaGFuZ2VzVG9ETVB9IGZyb20gJy4vY29udmVydC9kbXAnO1xuaW1wb3J0IHtjb252ZXJ0Q2hhbmdlc1RvWE1MfSBmcm9tICcuL2NvbnZlcnQveG1sJztcblxuZXhwb3J0IHtcbiAgRGlmZixcblxuICBkaWZmQ2hhcnMsXG4gIGRpZmZXb3JkcyxcbiAgZGlmZldvcmRzV2l0aFNwYWNlLFxuICBkaWZmTGluZXMsXG4gIGRpZmZUcmltbWVkTGluZXMsXG4gIGRpZmZTZW50ZW5jZXMsXG5cbiAgZGlmZkNzcyxcbiAgZGlmZkpzb24sXG5cbiAgc3RydWN0dXJlZFBhdGNoLFxuICBjcmVhdGVUd29GaWxlc1BhdGNoLFxuICBjcmVhdGVQYXRjaCxcbiAgYXBwbHlQYXRjaCxcbiAgYXBwbHlQYXRjaGVzLFxuICBwYXJzZVBhdGNoLFxuICBjb252ZXJ0Q2hhbmdlc1RvRE1QLFxuICBjb252ZXJ0Q2hhbmdlc1RvWE1MLFxuICBjYW5vbmljYWxpemVcbn07XG4iXX0=


/***/ }),

/***/ 4633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports.characterDiff = undefined;
exports. /*istanbul ignore end*/diffChars = diffChars;

var /*istanbul ignore start*/_base = __webpack_require__(3573) /*istanbul ignore end*/;

/*istanbul ignore start*/
var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*istanbul ignore end*/var characterDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/characterDiff = new /*istanbul ignore start*/_base2.default() /*istanbul ignore end*/;
function diffChars(oldStr, newStr, callback) {
  return characterDiff.diff(oldStr, newStr, callback);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2NoYXJhY3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O2dDQUdnQjs7QUFIaEI7Ozs7Ozs7dUJBRU8sSUFBTSx5RkFBZ0IscUVBQWhCO0FBQ04sU0FBUyxTQUFULENBQW1CLE1BQW5CLEVBQTJCLE1BQTNCLEVBQW1DLFFBQW5DLEVBQTZDO0FBQUUsU0FBTyxjQUFjLElBQWQsQ0FBbUIsTUFBbkIsRUFBMkIsTUFBM0IsRUFBbUMsUUFBbkMsQ0FBUCxDQUFGO0NBQTdDIiwiZmlsZSI6ImNoYXJhY3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBjb25zdCBjaGFyYWN0ZXJEaWZmID0gbmV3IERpZmYoKTtcbmV4cG9ydCBmdW5jdGlvbiBkaWZmQ2hhcnMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7IHJldHVybiBjaGFyYWN0ZXJEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKTsgfVxuIl19


/***/ }),

/***/ 4634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports.wordDiff = undefined;
exports. /*istanbul ignore end*/diffWords = diffWords;
/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWordsWithSpace = diffWordsWithSpace;

var /*istanbul ignore start*/_base = __webpack_require__(3573) /*istanbul ignore end*/;

/*istanbul ignore start*/
var _base2 = _interopRequireDefault(_base);

/*istanbul ignore end*/
var /*istanbul ignore start*/_params = __webpack_require__(3927) /*istanbul ignore end*/;

/*istanbul ignore start*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*istanbul ignore end*/

// Based on https://en.wikipedia.org/wiki/Latin_script_in_Unicode
//
// Ranges and exceptions:
// Latin-1 Supplement, 0080–00FF
//  - U+00D7  × Multiplication sign
//  - U+00F7  ÷ Division sign
// Latin Extended-A, 0100–017F
// Latin Extended-B, 0180–024F
// IPA Extensions, 0250–02AF
// Spacing Modifier Letters, 02B0–02FF
//  - U+02C7  ˇ &#711;  Caron
//  - U+02D8  ˘ &#728;  Breve
//  - U+02D9  ˙ &#729;  Dot Above
//  - U+02DA  ˚ &#730;  Ring Above
//  - U+02DB  ˛ &#731;  Ogonek
//  - U+02DC  ˜ &#732;  Small Tilde
//  - U+02DD  ˝ &#733;  Double Acute Accent
// Latin Extended Additional, 1E00–1EFF
var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;

var reWhitespace = /\S/;

var wordDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/wordDiff = new /*istanbul ignore start*/_base2.default() /*istanbul ignore end*/;
wordDiff.equals = function (left, right) {
  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
};
wordDiff.tokenize = function (value) {
  var tokens = value.split(/(\s+|\b)/);

  // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.
  for (var i = 0; i < tokens.length - 1; i++) {
    // If we have an empty string in the next field and we have only word chars before and after, merge
    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
      tokens[i] += tokens[i + 2];
      tokens.splice(i + 1, 2);
      i--;
    }
  }

  return tokens;
};

function diffWords(oldStr, newStr, callback) {
  var options = /*istanbul ignore start*/(0, _params.generateOptions) /*istanbul ignore end*/(callback, { ignoreWhitespace: true });
  return wordDiff.diff(oldStr, newStr, options);
}
function diffWordsWithSpace(oldStr, newStr, callback) {
  return wordDiff.diff(oldStr, newStr, callback);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3dvcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztnQ0ErQ2dCO3lEQUlBOztBQW5EaEI7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBLElBQU0sb0JBQW9CLCtEQUFwQjs7QUFFTixJQUFNLGVBQWUsSUFBZjs7QUFFQyxJQUFNLCtFQUFXLHFFQUFYO0FBQ2IsU0FBUyxNQUFULEdBQWtCLFVBQVMsSUFBVCxFQUFlLEtBQWYsRUFBc0I7QUFDdEMsU0FBTyxTQUFTLEtBQVQsSUFBbUIsS0FBSyxPQUFMLENBQWEsZ0JBQWIsSUFBaUMsQ0FBQyxhQUFhLElBQWIsQ0FBa0IsSUFBbEIsQ0FBRCxJQUE0QixDQUFDLGFBQWEsSUFBYixDQUFrQixLQUFsQixDQUFELENBRGpEO0NBQXRCO0FBR2xCLFNBQVMsUUFBVCxHQUFvQixVQUFTLEtBQVQsRUFBZ0I7QUFDbEMsTUFBSSxTQUFTLE1BQU0sS0FBTixDQUFZLFVBQVosQ0FBVDs7O0FBRDhCLE9BSTdCLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxPQUFPLE1BQVAsR0FBZ0IsQ0FBaEIsRUFBbUIsR0FBdkMsRUFBNEM7O0FBRTFDLFFBQUksQ0FBQyxPQUFPLElBQUksQ0FBSixDQUFSLElBQWtCLE9BQU8sSUFBSSxDQUFKLENBQXpCLElBQ0ssa0JBQWtCLElBQWxCLENBQXVCLE9BQU8sQ0FBUCxDQUF2QixDQURMLElBRUssa0JBQWtCLElBQWxCLENBQXVCLE9BQU8sSUFBSSxDQUFKLENBQTlCLENBRkwsRUFFNEM7QUFDOUMsYUFBTyxDQUFQLEtBQWEsT0FBTyxJQUFJLENBQUosQ0FBcEIsQ0FEOEM7QUFFOUMsYUFBTyxNQUFQLENBQWMsSUFBSSxDQUFKLEVBQU8sQ0FBckIsRUFGOEM7QUFHOUMsVUFIOEM7S0FGaEQ7R0FGRjs7QUFXQSxTQUFPLE1BQVAsQ0Fma0M7Q0FBaEI7O0FBa0JiLFNBQVMsU0FBVCxDQUFtQixNQUFuQixFQUEyQixNQUEzQixFQUFtQyxRQUFuQyxFQUE2QztBQUNsRCxNQUFJLFVBQVUsOEVBQWdCLFFBQWhCLEVBQTBCLEVBQUMsa0JBQWtCLElBQWxCLEVBQTNCLENBQVYsQ0FEOEM7QUFFbEQsU0FBTyxTQUFTLElBQVQsQ0FBYyxNQUFkLEVBQXNCLE1BQXRCLEVBQThCLE9BQTlCLENBQVAsQ0FGa0Q7Q0FBN0M7QUFJQSxTQUFTLGtCQUFULENBQTRCLE1BQTVCLEVBQW9DLE1BQXBDLEVBQTRDLFFBQTVDLEVBQXNEO0FBQzNELFNBQU8sU0FBUyxJQUFULENBQWMsTUFBZCxFQUFzQixNQUF0QixFQUE4QixRQUE5QixDQUFQLENBRDJEO0NBQXREIiwiZmlsZSI6IndvcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlmZiBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHtnZW5lcmF0ZU9wdGlvbnN9IGZyb20gJy4uL3V0aWwvcGFyYW1zJztcblxuLy8gQmFzZWQgb24gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW5fc2NyaXB0X2luX1VuaWNvZGVcbi8vXG4vLyBSYW5nZXMgYW5kIGV4Y2VwdGlvbnM6XG4vLyBMYXRpbi0xIFN1cHBsZW1lbnQsIDAwODDigJMwMEZGXG4vLyAgLSBVKzAwRDcgIMOXIE11bHRpcGxpY2F0aW9uIHNpZ25cbi8vICAtIFUrMDBGNyAgw7cgRGl2aXNpb24gc2lnblxuLy8gTGF0aW4gRXh0ZW5kZWQtQSwgMDEwMOKAkzAxN0Zcbi8vIExhdGluIEV4dGVuZGVkLUIsIDAxODDigJMwMjRGXG4vLyBJUEEgRXh0ZW5zaW9ucywgMDI1MOKAkzAyQUZcbi8vIFNwYWNpbmcgTW9kaWZpZXIgTGV0dGVycywgMDJCMOKAkzAyRkZcbi8vICAtIFUrMDJDNyAgy4cgJiM3MTE7ICBDYXJvblxuLy8gIC0gVSswMkQ4ICDLmCAmIzcyODsgIEJyZXZlXG4vLyAgLSBVKzAyRDkgIMuZICYjNzI5OyAgRG90IEFib3ZlXG4vLyAgLSBVKzAyREEgIMuaICYjNzMwOyAgUmluZyBBYm92ZVxuLy8gIC0gVSswMkRCICDLmyAmIzczMTsgIE9nb25la1xuLy8gIC0gVSswMkRDICDLnCAmIzczMjsgIFNtYWxsIFRpbGRlXG4vLyAgLSBVKzAyREQgIMudICYjNzMzOyAgRG91YmxlIEFjdXRlIEFjY2VudFxuLy8gTGF0aW4gRXh0ZW5kZWQgQWRkaXRpb25hbCwgMUUwMOKAkzFFRkZcbmNvbnN0IGV4dGVuZGVkV29yZENoYXJzID0gL15bYS16QS1aXFx1e0MwfS1cXHV7RkZ9XFx1e0Q4fS1cXHV7RjZ9XFx1e0Y4fS1cXHV7MkM2fVxcdXsyQzh9LVxcdXsyRDd9XFx1ezJERX0tXFx1ezJGRn1cXHV7MUUwMH0tXFx1ezFFRkZ9XSskL3U7XG5cbmNvbnN0IHJlV2hpdGVzcGFjZSA9IC9cXFMvO1xuXG5leHBvcnQgY29uc3Qgd29yZERpZmYgPSBuZXcgRGlmZigpO1xud29yZERpZmYuZXF1YWxzID0gZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0IHx8ICh0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSAmJiAhcmVXaGl0ZXNwYWNlLnRlc3QobGVmdCkgJiYgIXJlV2hpdGVzcGFjZS50ZXN0KHJpZ2h0KSk7XG59O1xud29yZERpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBsZXQgdG9rZW5zID0gdmFsdWUuc3BsaXQoLyhcXHMrfFxcYikvKTtcblxuICAvLyBKb2luIHRoZSBib3VuZGFyeSBzcGxpdHMgdGhhdCB3ZSBkbyBub3QgY29uc2lkZXIgdG8gYmUgYm91bmRhcmllcy4gVGhpcyBpcyBwcmltYXJpbHkgdGhlIGV4dGVuZGVkIExhdGluIGNoYXJhY3RlciBzZXQuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIC8vIElmIHdlIGhhdmUgYW4gZW1wdHkgc3RyaW5nIGluIHRoZSBuZXh0IGZpZWxkIGFuZCB3ZSBoYXZlIG9ubHkgd29yZCBjaGFycyBiZWZvcmUgYW5kIGFmdGVyLCBtZXJnZVxuICAgIGlmICghdG9rZW5zW2kgKyAxXSAmJiB0b2tlbnNbaSArIDJdXG4gICAgICAgICAgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaV0pXG4gICAgICAgICAgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaSArIDJdKSkge1xuICAgICAgdG9rZW5zW2ldICs9IHRva2Vuc1tpICsgMl07XG4gICAgICB0b2tlbnMuc3BsaWNlKGkgKyAxLCAyKTtcbiAgICAgIGktLTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZXb3JkcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgbGV0IG9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMoY2FsbGJhY2ssIHtpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlfSk7XG4gIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaWZmV29yZHNXaXRoU3BhY2Uob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7XG4gIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7XG59XG4iXX0=


/***/ }),

/***/ 4635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports.sentenceDiff = undefined;
exports. /*istanbul ignore end*/diffSentences = diffSentences;

var /*istanbul ignore start*/_base = __webpack_require__(3573) /*istanbul ignore end*/;

/*istanbul ignore start*/
var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*istanbul ignore end*/var sentenceDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/sentenceDiff = new /*istanbul ignore start*/_base2.default() /*istanbul ignore end*/;
sentenceDiff.tokenize = function (value) {
  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
};

function diffSentences(oldStr, newStr, callback) {
  return sentenceDiff.diff(oldStr, newStr, callback);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3NlbnRlbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Z0NBUWdCOztBQVJoQjs7Ozs7Ozt1QkFHTyxJQUFNLHVGQUFlLHFFQUFmO0FBQ2IsYUFBYSxRQUFiLEdBQXdCLFVBQVMsS0FBVCxFQUFnQjtBQUN0QyxTQUFPLE1BQU0sS0FBTixDQUFZLHVCQUFaLENBQVAsQ0FEc0M7Q0FBaEI7O0FBSWpCLFNBQVMsYUFBVCxDQUF1QixNQUF2QixFQUErQixNQUEvQixFQUF1QyxRQUF2QyxFQUFpRDtBQUFFLFNBQU8sYUFBYSxJQUFiLENBQWtCLE1BQWxCLEVBQTBCLE1BQTFCLEVBQWtDLFFBQWxDLENBQVAsQ0FBRjtDQUFqRCIsImZpbGUiOiJzZW50ZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5cblxuZXhwb3J0IGNvbnN0IHNlbnRlbmNlRGlmZiA9IG5ldyBEaWZmKCk7XG5zZW50ZW5jZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3BsaXQoLyhcXFMuKz9bLiE/XSkoPz1cXHMrfCQpLyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZlNlbnRlbmNlcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHsgcmV0dXJuIHNlbnRlbmNlRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cbiJdfQ==


/***/ }),

/***/ 4636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports.cssDiff = undefined;
exports. /*istanbul ignore end*/diffCss = diffCss;

var /*istanbul ignore start*/_base = __webpack_require__(3573) /*istanbul ignore end*/;

/*istanbul ignore start*/
var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*istanbul ignore end*/var cssDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/cssDiff = new /*istanbul ignore start*/_base2.default() /*istanbul ignore end*/;
cssDiff.tokenize = function (value) {
  return value.split(/([{}:;,]|\s+)/);
};

function diffCss(oldStr, newStr, callback) {
  return cssDiff.diff(oldStr, newStr, callback);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Nzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O2dDQU9nQjs7QUFQaEI7Ozs7Ozs7dUJBRU8sSUFBTSw2RUFBVSxxRUFBVjtBQUNiLFFBQVEsUUFBUixHQUFtQixVQUFTLEtBQVQsRUFBZ0I7QUFDakMsU0FBTyxNQUFNLEtBQU4sQ0FBWSxlQUFaLENBQVAsQ0FEaUM7Q0FBaEI7O0FBSVosU0FBUyxPQUFULENBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLFFBQWpDLEVBQTJDO0FBQUUsU0FBTyxRQUFRLElBQVIsQ0FBYSxNQUFiLEVBQXFCLE1BQXJCLEVBQTZCLFFBQTdCLENBQVAsQ0FBRjtDQUEzQyIsImZpbGUiOiJjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlmZiBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgY29uc3QgY3NzRGlmZiA9IG5ldyBEaWZmKCk7XG5jc3NEaWZmLnRva2VuaXplID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnNwbGl0KC8oW3t9OjssXXxcXHMrKS8pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZDc3Mob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7IHJldHVybiBjc3NEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKTsgfVxuIl19


/***/ }),

/***/ 4637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports.jsonDiff = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports. /*istanbul ignore end*/diffJson = diffJson;
/*istanbul ignore start*/exports. /*istanbul ignore end*/canonicalize = canonicalize;

var /*istanbul ignore start*/_base = __webpack_require__(3573) /*istanbul ignore end*/;

/*istanbul ignore start*/
var _base2 = _interopRequireDefault(_base);

/*istanbul ignore end*/
var /*istanbul ignore start*/_line = __webpack_require__(3745) /*istanbul ignore end*/;

/*istanbul ignore start*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*istanbul ignore end*/

var objectPrototypeToString = Object.prototype.toString;

var jsonDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/jsonDiff = new /*istanbul ignore start*/_base2.default() /*istanbul ignore end*/;
// Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
// dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:
jsonDiff.useLongestToken = true;

jsonDiff.tokenize = /*istanbul ignore start*/_line.lineDiff. /*istanbul ignore end*/tokenize;
jsonDiff.castInput = function (value) {
  return typeof value === 'string' ? value : JSON.stringify(canonicalize(value), undefined, '  ');
};
jsonDiff.equals = function (left, right) {
  return (/*istanbul ignore start*/_base2.default. /*istanbul ignore end*/prototype.equals(left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'))
  );
};

function diffJson(oldObj, newObj, callback) {
  return jsonDiff.diff(oldObj, newObj, callback);
}

// This function handles the presence of circular references by bailing out when encountering an
// object that is already on the "stack" of items being processed.
function canonicalize(obj, stack, replacementStack) {
  stack = stack || [];
  replacementStack = replacementStack || [];

  var i = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

  for (i = 0; i < stack.length; i += 1) {
    if (stack[i] === obj) {
      return replacementStack[i];
    }
  }

  var canonicalizedObj = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

  if ('[object Array]' === objectPrototypeToString.call(obj)) {
    stack.push(obj);
    canonicalizedObj = new Array(obj.length);
    replacementStack.push(canonicalizedObj);
    for (i = 0; i < obj.length; i += 1) {
      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack);
    }
    stack.pop();
    replacementStack.pop();
    return canonicalizedObj;
  }

  if (obj && obj.toJSON) {
    obj = obj.toJSON();
  }

  if ( /*istanbul ignore start*/(typeof /*istanbul ignore end*/obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null) {
    stack.push(obj);
    canonicalizedObj = {};
    replacementStack.push(canonicalizedObj);
    var sortedKeys = [],
        key = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
    for (key in obj) {
      /* istanbul ignore else */
      if (obj.hasOwnProperty(key)) {
        sortedKeys.push(key);
      }
    }
    sortedKeys.sort();
    for (i = 0; i < sortedKeys.length; i += 1) {
      key = sortedKeys[i];
      canonicalizedObj[key] = canonicalize(obj[key], stack, replacementStack);
    }
    stack.pop();
    replacementStack.pop();
  } else {
    canonicalizedObj = obj;
  }
  return canonicalizedObj;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2pzb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztnQ0FtQmdCO3lEQUtBOztBQXhCaEI7Ozs7OztBQUNBOzs7Ozs7O0FBRUEsSUFBTSwwQkFBMEIsT0FBTyxTQUFQLENBQWlCLFFBQWpCOztBQUd6QixJQUFNLCtFQUFXLHFFQUFYOzs7QUFHYixTQUFTLGVBQVQsR0FBMkIsSUFBM0I7O0FBRUEsU0FBUyxRQUFULEdBQW9CLGdFQUFTLFFBQVQ7QUFDcEIsU0FBUyxTQUFULEdBQXFCLFVBQVMsS0FBVCxFQUFnQjtBQUNuQyxTQUFPLE9BQU8sS0FBUCxLQUFpQixRQUFqQixHQUE0QixLQUE1QixHQUFvQyxLQUFLLFNBQUwsQ0FBZSxhQUFhLEtBQWIsQ0FBZixFQUFvQyxTQUFwQyxFQUErQyxJQUEvQyxDQUFwQyxDQUQ0QjtDQUFoQjtBQUdyQixTQUFTLE1BQVQsR0FBa0IsVUFBUyxJQUFULEVBQWUsS0FBZixFQUFzQjtBQUN0QyxTQUFPLGlFQUFLLFNBQUwsQ0FBZSxNQUFmLENBQXNCLEtBQUssT0FBTCxDQUFhLFlBQWIsRUFBMkIsSUFBM0IsQ0FBdEIsRUFBd0QsTUFBTSxPQUFOLENBQWMsWUFBZCxFQUE0QixJQUE1QixDQUF4RCxDQUFQO0lBRHNDO0NBQXRCOztBQUlYLFNBQVMsUUFBVCxDQUFrQixNQUFsQixFQUEwQixNQUExQixFQUFrQyxRQUFsQyxFQUE0QztBQUFFLFNBQU8sU0FBUyxJQUFULENBQWMsTUFBZCxFQUFzQixNQUF0QixFQUE4QixRQUE5QixDQUFQLENBQUY7Q0FBNUM7Ozs7QUFLQSxTQUFTLFlBQVQsQ0FBc0IsR0FBdEIsRUFBMkIsS0FBM0IsRUFBa0MsZ0JBQWxDLEVBQW9EO0FBQ3pELFVBQVEsU0FBUyxFQUFULENBRGlEO0FBRXpELHFCQUFtQixvQkFBb0IsRUFBcEIsQ0FGc0M7O0FBSXpELE1BQUksMkRBQUosQ0FKeUQ7O0FBTXpELE9BQUssSUFBSSxDQUFKLEVBQU8sSUFBSSxNQUFNLE1BQU4sRUFBYyxLQUFLLENBQUwsRUFBUTtBQUNwQyxRQUFJLE1BQU0sQ0FBTixNQUFhLEdBQWIsRUFBa0I7QUFDcEIsYUFBTyxpQkFBaUIsQ0FBakIsQ0FBUCxDQURvQjtLQUF0QjtHQURGOztBQU1BLE1BQUksMEVBQUosQ0FaeUQ7O0FBY3pELE1BQUkscUJBQXFCLHdCQUF3QixJQUF4QixDQUE2QixHQUE3QixDQUFyQixFQUF3RDtBQUMxRCxVQUFNLElBQU4sQ0FBVyxHQUFYLEVBRDBEO0FBRTFELHVCQUFtQixJQUFJLEtBQUosQ0FBVSxJQUFJLE1BQUosQ0FBN0IsQ0FGMEQ7QUFHMUQscUJBQWlCLElBQWpCLENBQXNCLGdCQUF0QixFQUgwRDtBQUkxRCxTQUFLLElBQUksQ0FBSixFQUFPLElBQUksSUFBSSxNQUFKLEVBQVksS0FBSyxDQUFMLEVBQVE7QUFDbEMsdUJBQWlCLENBQWpCLElBQXNCLGFBQWEsSUFBSSxDQUFKLENBQWIsRUFBcUIsS0FBckIsRUFBNEIsZ0JBQTVCLENBQXRCLENBRGtDO0tBQXBDO0FBR0EsVUFBTSxHQUFOLEdBUDBEO0FBUTFELHFCQUFpQixHQUFqQixHQVIwRDtBQVMxRCxXQUFPLGdCQUFQLENBVDBEO0dBQTVEOztBQVlBLE1BQUksT0FBTyxJQUFJLE1BQUosRUFBWTtBQUNyQixVQUFNLElBQUksTUFBSixFQUFOLENBRHFCO0dBQXZCOztBQUlBLE1BQUkseURBQU8saURBQVAsS0FBZSxRQUFmLElBQTJCLFFBQVEsSUFBUixFQUFjO0FBQzNDLFVBQU0sSUFBTixDQUFXLEdBQVgsRUFEMkM7QUFFM0MsdUJBQW1CLEVBQW5CLENBRjJDO0FBRzNDLHFCQUFpQixJQUFqQixDQUFzQixnQkFBdEIsRUFIMkM7QUFJM0MsUUFBSSxhQUFhLEVBQWI7UUFDQSw2REFESixDQUoyQztBQU0zQyxTQUFLLEdBQUwsSUFBWSxHQUFaLEVBQWlCOztBQUVmLFVBQUksSUFBSSxjQUFKLENBQW1CLEdBQW5CLENBQUosRUFBNkI7QUFDM0IsbUJBQVcsSUFBWCxDQUFnQixHQUFoQixFQUQyQjtPQUE3QjtLQUZGO0FBTUEsZUFBVyxJQUFYLEdBWjJDO0FBYTNDLFNBQUssSUFBSSxDQUFKLEVBQU8sSUFBSSxXQUFXLE1BQVgsRUFBbUIsS0FBSyxDQUFMLEVBQVE7QUFDekMsWUFBTSxXQUFXLENBQVgsQ0FBTixDQUR5QztBQUV6Qyx1QkFBaUIsR0FBakIsSUFBd0IsYUFBYSxJQUFJLEdBQUosQ0FBYixFQUF1QixLQUF2QixFQUE4QixnQkFBOUIsQ0FBeEIsQ0FGeUM7S0FBM0M7QUFJQSxVQUFNLEdBQU4sR0FqQjJDO0FBa0IzQyxxQkFBaUIsR0FBakIsR0FsQjJDO0dBQTdDLE1BbUJPO0FBQ0wsdUJBQW1CLEdBQW5CLENBREs7R0FuQlA7QUFzQkEsU0FBTyxnQkFBUCxDQXBEeUQ7Q0FBcEQiLCJmaWxlIjoianNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2xpbmVEaWZmfSBmcm9tICcuL2xpbmUnO1xuXG5jb25zdCBvYmplY3RQcm90b3R5cGVUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cblxuZXhwb3J0IGNvbnN0IGpzb25EaWZmID0gbmV3IERpZmYoKTtcbi8vIERpc2NyaW1pbmF0ZSBiZXR3ZWVuIHR3byBsaW5lcyBvZiBwcmV0dHktcHJpbnRlZCwgc2VyaWFsaXplZCBKU09OIHdoZXJlIG9uZSBvZiB0aGVtIGhhcyBhXG4vLyBkYW5nbGluZyBjb21tYSBhbmQgdGhlIG90aGVyIGRvZXNuJ3QuIFR1cm5zIG91dCBpbmNsdWRpbmcgdGhlIGRhbmdsaW5nIGNvbW1hIHlpZWxkcyB0aGUgbmljZXN0IG91dHB1dDpcbmpzb25EaWZmLnVzZUxvbmdlc3RUb2tlbiA9IHRydWU7XG5cbmpzb25EaWZmLnRva2VuaXplID0gbGluZURpZmYudG9rZW5pemU7XG5qc29uRGlmZi5jYXN0SW5wdXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkoY2Fub25pY2FsaXplKHZhbHVlKSwgdW5kZWZpbmVkLCAnICAnKTtcbn07XG5qc29uRGlmZi5lcXVhbHMgPSBmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICByZXR1cm4gRGlmZi5wcm90b3R5cGUuZXF1YWxzKGxlZnQucmVwbGFjZSgvLChbXFxyXFxuXSkvZywgJyQxJyksIHJpZ2h0LnJlcGxhY2UoLywoW1xcclxcbl0pL2csICckMScpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmSnNvbihvbGRPYmosIG5ld09iaiwgY2FsbGJhY2spIHsgcmV0dXJuIGpzb25EaWZmLmRpZmYob2xkT2JqLCBuZXdPYmosIGNhbGxiYWNrKTsgfVxuXG5cbi8vIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyB0aGUgcHJlc2VuY2Ugb2YgY2lyY3VsYXIgcmVmZXJlbmNlcyBieSBiYWlsaW5nIG91dCB3aGVuIGVuY291bnRlcmluZyBhblxuLy8gb2JqZWN0IHRoYXQgaXMgYWxyZWFkeSBvbiB0aGUgXCJzdGFja1wiIG9mIGl0ZW1zIGJlaW5nIHByb2Nlc3NlZC5cbmV4cG9ydCBmdW5jdGlvbiBjYW5vbmljYWxpemUob2JqLCBzdGFjaywgcmVwbGFjZW1lbnRTdGFjaykge1xuICBzdGFjayA9IHN0YWNrIHx8IFtdO1xuICByZXBsYWNlbWVudFN0YWNrID0gcmVwbGFjZW1lbnRTdGFjayB8fCBbXTtcblxuICBsZXQgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoc3RhY2tbaV0gPT09IG9iaikge1xuICAgICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhY2tbaV07XG4gICAgfVxuICB9XG5cbiAgbGV0IGNhbm9uaWNhbGl6ZWRPYmo7XG5cbiAgaWYgKCdbb2JqZWN0IEFycmF5XScgPT09IG9iamVjdFByb3RvdHlwZVRvU3RyaW5nLmNhbGwob2JqKSkge1xuICAgIHN0YWNrLnB1c2gob2JqKTtcbiAgICBjYW5vbmljYWxpemVkT2JqID0gbmV3IEFycmF5KG9iai5sZW5ndGgpO1xuICAgIHJlcGxhY2VtZW50U3RhY2sucHVzaChjYW5vbmljYWxpemVkT2JqKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjYW5vbmljYWxpemVkT2JqW2ldID0gY2Fub25pY2FsaXplKG9ialtpXSwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2spO1xuICAgIH1cbiAgICBzdGFjay5wb3AoKTtcbiAgICByZXBsYWNlbWVudFN0YWNrLnBvcCgpO1xuICAgIHJldHVybiBjYW5vbmljYWxpemVkT2JqO1xuICB9XG5cbiAgaWYgKG9iaiAmJiBvYmoudG9KU09OKSB7XG4gICAgb2JqID0gb2JqLnRvSlNPTigpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCkge1xuICAgIHN0YWNrLnB1c2gob2JqKTtcbiAgICBjYW5vbmljYWxpemVkT2JqID0ge307XG4gICAgcmVwbGFjZW1lbnRTdGFjay5wdXNoKGNhbm9uaWNhbGl6ZWRPYmopO1xuICAgIGxldCBzb3J0ZWRLZXlzID0gW10sXG4gICAgICAgIGtleTtcbiAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgc29ydGVkS2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNvcnRlZEtleXMuc29ydCgpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzb3J0ZWRLZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBrZXkgPSBzb3J0ZWRLZXlzW2ldO1xuICAgICAgY2Fub25pY2FsaXplZE9ialtrZXldID0gY2Fub25pY2FsaXplKG9ialtrZXldLCBzdGFjaywgcmVwbGFjZW1lbnRTdGFjayk7XG4gICAgfVxuICAgIHN0YWNrLnBvcCgpO1xuICAgIHJlcGxhY2VtZW50U3RhY2sucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgY2Fub25pY2FsaXplZE9iaiA9IG9iajtcbiAgfVxuICByZXR1cm4gY2Fub25pY2FsaXplZE9iajtcbn1cbiJdfQ==


/***/ }),

/***/ 4638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports. /*istanbul ignore end*/applyPatch = applyPatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatches = applyPatches;

var /*istanbul ignore start*/_parse = __webpack_require__(3928) /*istanbul ignore end*/;

var /*istanbul ignore start*/_distanceIterator = __webpack_require__(4639) /*istanbul ignore end*/;

/*istanbul ignore start*/
var _distanceIterator2 = _interopRequireDefault(_distanceIterator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*istanbul ignore end*/function applyPatch(source, uniDiff) {
  /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  if (typeof uniDiff === 'string') {
    uniDiff = /*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(uniDiff);
  }

  if (Array.isArray(uniDiff)) {
    if (uniDiff.length > 1) {
      throw new Error('applyPatch only works with a single input.');
    }

    uniDiff = uniDiff[0];
  }

  // Apply the diff to the input
  var lines = source.split('\n'),
      hunks = uniDiff.hunks,
      compareLine = options.compareLine || function (lineNumber, line, operation, patchContent) /*istanbul ignore start*/{
    return (/*istanbul ignore end*/line === patchContent
    );
  },
      errorCount = 0,
      fuzzFactor = options.fuzzFactor || 0,
      minLine = 0,
      offset = 0,
      removeEOFNL = /*istanbul ignore start*/void 0 /*istanbul ignore end*/,
      addEOFNL = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

  /**
   * Checks if the hunk exactly fits on the provided location
   */
  function hunkFits(hunk, toPos) {
    for (var j = 0; j < hunk.lines.length; j++) {
      var line = hunk.lines[j],
          operation = line[0],
          content = line.substr(1);

      if (operation === ' ' || operation === '-') {
        // Context sanity check
        if (!compareLine(toPos + 1, lines[toPos], operation, content)) {
          errorCount++;

          if (errorCount > fuzzFactor) {
            return false;
          }
        }
        toPos++;
      }
    }

    return true;
  }

  // Search best fit offsets for each hunk based on the previous ones
  for (var i = 0; i < hunks.length; i++) {
    var hunk = hunks[i],
        maxLine = lines.length - hunk.oldLines,
        localOffset = 0,
        toPos = offset + hunk.oldStart - 1;

    var iterator = /*istanbul ignore start*/(0, _distanceIterator2.default) /*istanbul ignore end*/(toPos, minLine, maxLine);

    for (; localOffset !== undefined; localOffset = iterator()) {
      if (hunkFits(hunk, toPos + localOffset)) {
        hunk.offset = offset += localOffset;
        break;
      }
    }

    if (localOffset === undefined) {
      return false;
    }

    // Set lower text limit to end of the current hunk, so next ones don't try
    // to fit over already patched text
    minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
  }

  // Apply patch hunks
  for (var _i = 0; _i < hunks.length; _i++) {
    var _hunk = hunks[_i],
        _toPos = _hunk.offset + _hunk.newStart - 1;
    if (_hunk.newLines == 0) {
      _toPos++;
    }

    for (var j = 0; j < _hunk.lines.length; j++) {
      var line = _hunk.lines[j],
          operation = line[0],
          content = line.substr(1);

      if (operation === ' ') {
        _toPos++;
      } else if (operation === '-') {
        lines.splice(_toPos, 1);
        /* istanbul ignore else */
      } else if (operation === '+') {
          lines.splice(_toPos, 0, content);
          _toPos++;
        } else if (operation === '\\') {
          var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;
          if (previousOperation === '+') {
            removeEOFNL = true;
          } else if (previousOperation === '-') {
            addEOFNL = true;
          }
        }
    }
  }

  // Handle EOFNL insertion/removal
  if (removeEOFNL) {
    while (!lines[lines.length - 1]) {
      lines.pop();
    }
  } else if (addEOFNL) {
    lines.push('');
  }
  return lines.join('\n');
}

// Wrapper that supports multiple file patches via callbacks.
function applyPatches(uniDiff, options) {
  if (typeof uniDiff === 'string') {
    uniDiff = /*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(uniDiff);
  }

  var currentIndex = 0;
  function processIndex() {
    var index = uniDiff[currentIndex++];
    if (!index) {
      return options.complete();
    }

    options.loadFile(index, function (err, data) {
      if (err) {
        return options.complete(err);
      }

      var updatedContent = applyPatch(data, index, options);
      options.patched(index, updatedContent);

      setTimeout(processIndex, 0);
    });
  }
  processIndex();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9hcHBseS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0NBR2dCO3lEQXNIQTs7QUF6SGhCOztBQUNBOzs7Ozs7O3VCQUVPLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QixPQUE1QixFQUFtRDtzREFBZCxnRUFBVSxrQkFBSTs7QUFDeEQsTUFBSSxPQUFPLE9BQVAsS0FBbUIsUUFBbkIsRUFBNkI7QUFDL0IsY0FBVSx3RUFBVyxPQUFYLENBQVYsQ0FEK0I7R0FBakM7O0FBSUEsTUFBSSxNQUFNLE9BQU4sQ0FBYyxPQUFkLENBQUosRUFBNEI7QUFDMUIsUUFBSSxRQUFRLE1BQVIsR0FBaUIsQ0FBakIsRUFBb0I7QUFDdEIsWUFBTSxJQUFJLEtBQUosQ0FBVSw0Q0FBVixDQUFOLENBRHNCO0tBQXhCOztBQUlBLGNBQVUsUUFBUSxDQUFSLENBQVYsQ0FMMEI7R0FBNUI7OztBQUx3RCxNQWNwRCxRQUFRLE9BQU8sS0FBUCxDQUFhLElBQWIsQ0FBUjtNQUNBLFFBQVEsUUFBUSxLQUFSO01BRVIsY0FBYyxRQUFRLFdBQVIsSUFBd0IsVUFBQyxVQUFELEVBQWEsSUFBYixFQUFtQixTQUFuQixFQUE4QixZQUE5QjttQ0FBK0MsU0FBUyxZQUFUOztHQUEvQztNQUN0QyxhQUFhLENBQWI7TUFDQSxhQUFhLFFBQVEsVUFBUixJQUFzQixDQUF0QjtNQUNiLFVBQVUsQ0FBVjtNQUNBLFNBQVMsQ0FBVDtNQUVBLHFFQVRKO01BVUksa0VBVko7Ozs7O0FBZHdELFdBNkIvQyxRQUFULENBQWtCLElBQWxCLEVBQXdCLEtBQXhCLEVBQStCO0FBQzdCLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBbUIsR0FBdkMsRUFBNEM7QUFDMUMsVUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLENBQVgsQ0FBUDtVQUNBLFlBQVksS0FBSyxDQUFMLENBQVo7VUFDQSxVQUFVLEtBQUssTUFBTCxDQUFZLENBQVosQ0FBVixDQUhzQzs7QUFLMUMsVUFBSSxjQUFjLEdBQWQsSUFBcUIsY0FBYyxHQUFkLEVBQW1COztBQUUxQyxZQUFJLENBQUMsWUFBWSxRQUFRLENBQVIsRUFBVyxNQUFNLEtBQU4sQ0FBdkIsRUFBcUMsU0FBckMsRUFBZ0QsT0FBaEQsQ0FBRCxFQUEyRDtBQUM3RCx1QkFENkQ7O0FBRzdELGNBQUksYUFBYSxVQUFiLEVBQXlCO0FBQzNCLG1CQUFPLEtBQVAsQ0FEMkI7V0FBN0I7U0FIRjtBQU9BLGdCQVQwQztPQUE1QztLQUxGOztBQWtCQSxXQUFPLElBQVAsQ0FuQjZCO0dBQS9COzs7QUE3QndELE9Bb0RuRCxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksTUFBTSxNQUFOLEVBQWMsR0FBbEMsRUFBdUM7QUFDckMsUUFBSSxPQUFPLE1BQU0sQ0FBTixDQUFQO1FBQ0EsVUFBVSxNQUFNLE1BQU4sR0FBZSxLQUFLLFFBQUw7UUFDekIsY0FBYyxDQUFkO1FBQ0EsUUFBUSxTQUFTLEtBQUssUUFBTCxHQUFnQixDQUF6QixDQUp5Qjs7QUFNckMsUUFBSSxXQUFXLGlGQUFpQixLQUFqQixFQUF3QixPQUF4QixFQUFpQyxPQUFqQyxDQUFYLENBTmlDOztBQVFyQyxXQUFPLGdCQUFnQixTQUFoQixFQUEyQixjQUFjLFVBQWQsRUFBMEI7QUFDMUQsVUFBSSxTQUFTLElBQVQsRUFBZSxRQUFRLFdBQVIsQ0FBbkIsRUFBeUM7QUFDdkMsYUFBSyxNQUFMLEdBQWMsVUFBVSxXQUFWLENBRHlCO0FBRXZDLGNBRnVDO09BQXpDO0tBREY7O0FBT0EsUUFBSSxnQkFBZ0IsU0FBaEIsRUFBMkI7QUFDN0IsYUFBTyxLQUFQLENBRDZCO0tBQS9COzs7O0FBZnFDLFdBcUJyQyxHQUFVLEtBQUssTUFBTCxHQUFjLEtBQUssUUFBTCxHQUFnQixLQUFLLFFBQUwsQ0FyQkg7R0FBdkM7OztBQXBEd0QsT0E2RW5ELElBQUksS0FBSSxDQUFKLEVBQU8sS0FBSSxNQUFNLE1BQU4sRUFBYyxJQUFsQyxFQUF1QztBQUNyQyxRQUFJLFFBQU8sTUFBTSxFQUFOLENBQVA7UUFDQSxTQUFRLE1BQUssTUFBTCxHQUFjLE1BQUssUUFBTCxHQUFnQixDQUE5QixDQUZ5QjtBQUdyQyxRQUFJLE1BQUssUUFBTCxJQUFpQixDQUFqQixFQUFvQjtBQUFFLGVBQUY7S0FBeEI7O0FBRUEsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksTUFBSyxLQUFMLENBQVcsTUFBWCxFQUFtQixHQUF2QyxFQUE0QztBQUMxQyxVQUFJLE9BQU8sTUFBSyxLQUFMLENBQVcsQ0FBWCxDQUFQO1VBQ0EsWUFBWSxLQUFLLENBQUwsQ0FBWjtVQUNBLFVBQVUsS0FBSyxNQUFMLENBQVksQ0FBWixDQUFWLENBSHNDOztBQUsxQyxVQUFJLGNBQWMsR0FBZCxFQUFtQjtBQUNyQixpQkFEcUI7T0FBdkIsTUFFTyxJQUFJLGNBQWMsR0FBZCxFQUFtQjtBQUM1QixjQUFNLE1BQU4sQ0FBYSxNQUFiLEVBQW9CLENBQXBCOztBQUQ0QixPQUF2QixNQUdBLElBQUksY0FBYyxHQUFkLEVBQW1CO0FBQzVCLGdCQUFNLE1BQU4sQ0FBYSxNQUFiLEVBQW9CLENBQXBCLEVBQXVCLE9BQXZCLEVBRDRCO0FBRTVCLG1CQUY0QjtTQUF2QixNQUdBLElBQUksY0FBYyxJQUFkLEVBQW9CO0FBQzdCLGNBQUksb0JBQW9CLE1BQUssS0FBTCxDQUFXLElBQUksQ0FBSixDQUFYLEdBQW9CLE1BQUssS0FBTCxDQUFXLElBQUksQ0FBSixDQUFYLENBQWtCLENBQWxCLENBQXBCLEdBQTJDLElBQTNDLENBREs7QUFFN0IsY0FBSSxzQkFBc0IsR0FBdEIsRUFBMkI7QUFDN0IsMEJBQWMsSUFBZCxDQUQ2QjtXQUEvQixNQUVPLElBQUksc0JBQXNCLEdBQXRCLEVBQTJCO0FBQ3BDLHVCQUFXLElBQVgsQ0FEb0M7V0FBL0I7U0FKRjtLQWJUO0dBTEY7OztBQTdFd0QsTUEyR3BELFdBQUosRUFBaUI7QUFDZixXQUFPLENBQUMsTUFBTSxNQUFNLE1BQU4sR0FBZSxDQUFmLENBQVAsRUFBMEI7QUFDL0IsWUFBTSxHQUFOLEdBRCtCO0tBQWpDO0dBREYsTUFJTyxJQUFJLFFBQUosRUFBYztBQUNuQixVQUFNLElBQU4sQ0FBVyxFQUFYLEVBRG1CO0dBQWQ7QUFHUCxTQUFPLE1BQU0sSUFBTixDQUFXLElBQVgsQ0FBUCxDQWxId0Q7Q0FBbkQ7OztBQXNIQSxTQUFTLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0M7QUFDN0MsTUFBSSxPQUFPLE9BQVAsS0FBbUIsUUFBbkIsRUFBNkI7QUFDL0IsY0FBVSx3RUFBVyxPQUFYLENBQVYsQ0FEK0I7R0FBakM7O0FBSUEsTUFBSSxlQUFlLENBQWYsQ0FMeUM7QUFNN0MsV0FBUyxZQUFULEdBQXdCO0FBQ3RCLFFBQUksUUFBUSxRQUFRLGNBQVIsQ0FBUixDQURrQjtBQUV0QixRQUFJLENBQUMsS0FBRCxFQUFRO0FBQ1YsYUFBTyxRQUFRLFFBQVIsRUFBUCxDQURVO0tBQVo7O0FBSUEsWUFBUSxRQUFSLENBQWlCLEtBQWpCLEVBQXdCLFVBQVMsR0FBVCxFQUFjLElBQWQsRUFBb0I7QUFDMUMsVUFBSSxHQUFKLEVBQVM7QUFDUCxlQUFPLFFBQVEsUUFBUixDQUFpQixHQUFqQixDQUFQLENBRE87T0FBVDs7QUFJQSxVQUFJLGlCQUFpQixXQUFXLElBQVgsRUFBaUIsS0FBakIsRUFBd0IsT0FBeEIsQ0FBakIsQ0FMc0M7QUFNMUMsY0FBUSxPQUFSLENBQWdCLEtBQWhCLEVBQXVCLGNBQXZCLEVBTjBDOztBQVExQyxpQkFBVyxZQUFYLEVBQXlCLENBQXpCLEVBUjBDO0tBQXBCLENBQXhCLENBTnNCO0dBQXhCO0FBaUJBLGlCQXZCNkM7Q0FBeEMiLCJmaWxlIjoiYXBwbHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3BhcnNlUGF0Y2h9IGZyb20gJy4vcGFyc2UnO1xuaW1wb3J0IGRpc3RhbmNlSXRlcmF0b3IgZnJvbSAnLi4vdXRpbC9kaXN0YW5jZS1pdGVyYXRvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBhdGNoKHNvdXJjZSwgdW5pRGlmZiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICh0eXBlb2YgdW5pRGlmZiA9PT0gJ3N0cmluZycpIHtcbiAgICB1bmlEaWZmID0gcGFyc2VQYXRjaCh1bmlEaWZmKTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHVuaURpZmYpKSB7XG4gICAgaWYgKHVuaURpZmYubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcHBseVBhdGNoIG9ubHkgd29ya3Mgd2l0aCBhIHNpbmdsZSBpbnB1dC4nKTtcbiAgICB9XG5cbiAgICB1bmlEaWZmID0gdW5pRGlmZlswXTtcbiAgfVxuXG4gIC8vIEFwcGx5IHRoZSBkaWZmIHRvIHRoZSBpbnB1dFxuICBsZXQgbGluZXMgPSBzb3VyY2Uuc3BsaXQoJ1xcbicpLFxuICAgICAgaHVua3MgPSB1bmlEaWZmLmh1bmtzLFxuXG4gICAgICBjb21wYXJlTGluZSA9IG9wdGlvbnMuY29tcGFyZUxpbmUgfHwgKChsaW5lTnVtYmVyLCBsaW5lLCBvcGVyYXRpb24sIHBhdGNoQ29udGVudCkgPT4gbGluZSA9PT0gcGF0Y2hDb250ZW50KSxcbiAgICAgIGVycm9yQ291bnQgPSAwLFxuICAgICAgZnV6ekZhY3RvciA9IG9wdGlvbnMuZnV6ekZhY3RvciB8fCAwLFxuICAgICAgbWluTGluZSA9IDAsXG4gICAgICBvZmZzZXQgPSAwLFxuXG4gICAgICByZW1vdmVFT0ZOTCxcbiAgICAgIGFkZEVPRk5MO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGh1bmsgZXhhY3RseSBmaXRzIG9uIHRoZSBwcm92aWRlZCBsb2NhdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gaHVua0ZpdHMoaHVuaywgdG9Qb3MpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBsaW5lID0gaHVuay5saW5lc1tqXSxcbiAgICAgICAgICBvcGVyYXRpb24gPSBsaW5lWzBdLFxuICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLnN1YnN0cigxKTtcblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgIC8vIENvbnRleHQgc2FuaXR5IGNoZWNrXG4gICAgICAgIGlmICghY29tcGFyZUxpbmUodG9Qb3MgKyAxLCBsaW5lc1t0b1Bvc10sIG9wZXJhdGlvbiwgY29udGVudCkpIHtcbiAgICAgICAgICBlcnJvckNvdW50Kys7XG5cbiAgICAgICAgICBpZiAoZXJyb3JDb3VudCA+IGZ1enpGYWN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG9Qb3MrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIFNlYXJjaCBiZXN0IGZpdCBvZmZzZXRzIGZvciBlYWNoIGh1bmsgYmFzZWQgb24gdGhlIHByZXZpb3VzIG9uZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBodW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBodW5rID0gaHVua3NbaV0sXG4gICAgICAgIG1heExpbmUgPSBsaW5lcy5sZW5ndGggLSBodW5rLm9sZExpbmVzLFxuICAgICAgICBsb2NhbE9mZnNldCA9IDAsXG4gICAgICAgIHRvUG9zID0gb2Zmc2V0ICsgaHVuay5vbGRTdGFydCAtIDE7XG5cbiAgICBsZXQgaXRlcmF0b3IgPSBkaXN0YW5jZUl0ZXJhdG9yKHRvUG9zLCBtaW5MaW5lLCBtYXhMaW5lKTtcblxuICAgIGZvciAoOyBsb2NhbE9mZnNldCAhPT0gdW5kZWZpbmVkOyBsb2NhbE9mZnNldCA9IGl0ZXJhdG9yKCkpIHtcbiAgICAgIGlmIChodW5rRml0cyhodW5rLCB0b1BvcyArIGxvY2FsT2Zmc2V0KSkge1xuICAgICAgICBodW5rLm9mZnNldCA9IG9mZnNldCArPSBsb2NhbE9mZnNldDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxvY2FsT2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBTZXQgbG93ZXIgdGV4dCBsaW1pdCB0byBlbmQgb2YgdGhlIGN1cnJlbnQgaHVuaywgc28gbmV4dCBvbmVzIGRvbid0IHRyeVxuICAgIC8vIHRvIGZpdCBvdmVyIGFscmVhZHkgcGF0Y2hlZCB0ZXh0XG4gICAgbWluTGluZSA9IGh1bmsub2Zmc2V0ICsgaHVuay5vbGRTdGFydCArIGh1bmsub2xkTGluZXM7XG4gIH1cblxuICAvLyBBcHBseSBwYXRjaCBodW5rc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGh1bmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGh1bmsgPSBodW5rc1tpXSxcbiAgICAgICAgdG9Qb3MgPSBodW5rLm9mZnNldCArIGh1bmsubmV3U3RhcnQgLSAxO1xuICAgIGlmIChodW5rLm5ld0xpbmVzID09IDApIHsgdG9Qb3MrKzsgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBodW5rLmxpbmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgbGluZSA9IGh1bmsubGluZXNbal0sXG4gICAgICAgICAgb3BlcmF0aW9uID0gbGluZVswXSxcbiAgICAgICAgICBjb250ZW50ID0gbGluZS5zdWJzdHIoMSk7XG5cbiAgICAgIGlmIChvcGVyYXRpb24gPT09ICcgJykge1xuICAgICAgICB0b1BvcysrO1xuICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICBsaW5lcy5zcGxpY2UodG9Qb3MsIDEpO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgbGluZXMuc3BsaWNlKHRvUG9zLCAwLCBjb250ZW50KTtcbiAgICAgICAgdG9Qb3MrKztcbiAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnXFxcXCcpIHtcbiAgICAgICAgbGV0IHByZXZpb3VzT3BlcmF0aW9uID0gaHVuay5saW5lc1tqIC0gMV0gPyBodW5rLmxpbmVzW2ogLSAxXVswXSA6IG51bGw7XG4gICAgICAgIGlmIChwcmV2aW91c09wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgICAgcmVtb3ZlRU9GTkwgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHByZXZpb3VzT3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICBhZGRFT0ZOTCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgRU9GTkwgaW5zZXJ0aW9uL3JlbW92YWxcbiAgaWYgKHJlbW92ZUVPRk5MKSB7XG4gICAgd2hpbGUgKCFsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSkge1xuICAgICAgbGluZXMucG9wKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFkZEVPRk5MKSB7XG4gICAgbGluZXMucHVzaCgnJyk7XG4gIH1cbiAgcmV0dXJuIGxpbmVzLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBXcmFwcGVyIHRoYXQgc3VwcG9ydHMgbXVsdGlwbGUgZmlsZSBwYXRjaGVzIHZpYSBjYWxsYmFja3MuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXRjaGVzKHVuaURpZmYsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiB1bmlEaWZmID09PSAnc3RyaW5nJykge1xuICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICB9XG5cbiAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gIGZ1bmN0aW9uIHByb2Nlc3NJbmRleCgpIHtcbiAgICBsZXQgaW5kZXggPSB1bmlEaWZmW2N1cnJlbnRJbmRleCsrXTtcbiAgICBpZiAoIWluZGV4KSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIG9wdGlvbnMubG9hZEZpbGUoaW5kZXgsIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZShlcnIpO1xuICAgICAgfVxuXG4gICAgICBsZXQgdXBkYXRlZENvbnRlbnQgPSBhcHBseVBhdGNoKGRhdGEsIGluZGV4LCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMucGF0Y2hlZChpbmRleCwgdXBkYXRlZENvbnRlbnQpO1xuXG4gICAgICBzZXRUaW1lb3V0KHByb2Nlc3NJbmRleCwgMCk7XG4gICAgfSk7XG4gIH1cbiAgcHJvY2Vzc0luZGV4KCk7XG59XG4iXX0=


/***/ }),

/***/ 4639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;

exports.default = /*istanbul ignore end*/function (start, minLine, maxLine) {
  var wantForward = true,
      backwardExhausted = false,
      forwardExhausted = false,
      localOffset = 1;

  return function iterator() {
    if (wantForward && !forwardExhausted) {
      if (backwardExhausted) {
        localOffset++;
      } else {
        wantForward = false;
      }

      // Check if trying to fit beyond text length, and if not, check it fits
      // after offset location (or desired location on first iteration)
      if (start + localOffset <= maxLine) {
        return localOffset;
      }

      forwardExhausted = true;
    }

    if (!backwardExhausted) {
      if (!forwardExhausted) {
        wantForward = true;
      }

      // Check if trying to fit before text beginning, and if not, check it fits
      // before offset location
      if (minLine <= start - localOffset) {
        return - localOffset++;
      }

      backwardExhausted = true;
      return iterator();
    }

    // We tried to fit hunk before text beginning and beyond text lenght, then
    // hunk can't fit on the text. Return undefined
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2Rpc3RhbmNlLWl0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7eUNBR2UsVUFBUyxLQUFULEVBQWdCLE9BQWhCLEVBQXlCLE9BQXpCLEVBQWtDO0FBQy9DLE1BQUksY0FBYyxJQUFkO01BQ0Esb0JBQW9CLEtBQXBCO01BQ0EsbUJBQW1CLEtBQW5CO01BQ0EsY0FBYyxDQUFkLENBSjJDOztBQU0vQyxTQUFPLFNBQVMsUUFBVCxHQUFvQjtBQUN6QixRQUFJLGVBQWUsQ0FBQyxnQkFBRCxFQUFtQjtBQUNwQyxVQUFJLGlCQUFKLEVBQXVCO0FBQ3JCLHNCQURxQjtPQUF2QixNQUVPO0FBQ0wsc0JBQWMsS0FBZCxDQURLO09BRlA7Ozs7QUFEb0MsVUFTaEMsUUFBUSxXQUFSLElBQXVCLE9BQXZCLEVBQWdDO0FBQ2xDLGVBQU8sV0FBUCxDQURrQztPQUFwQzs7QUFJQSx5QkFBbUIsSUFBbkIsQ0Fib0M7S0FBdEM7O0FBZ0JBLFFBQUksQ0FBQyxpQkFBRCxFQUFvQjtBQUN0QixVQUFJLENBQUMsZ0JBQUQsRUFBbUI7QUFDckIsc0JBQWMsSUFBZCxDQURxQjtPQUF2Qjs7OztBQURzQixVQU9sQixXQUFXLFFBQVEsV0FBUixFQUFxQjtBQUNsQyxlQUFPLEVBQUMsYUFBRCxDQUQyQjtPQUFwQzs7QUFJQSwwQkFBb0IsSUFBcEIsQ0FYc0I7QUFZdEIsYUFBTyxVQUFQLENBWnNCO0tBQXhCOzs7O0FBakJ5QixHQUFwQixDQU53QztDQUFsQyIsImZpbGUiOiJkaXN0YW5jZS1pdGVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEl0ZXJhdG9yIHRoYXQgdHJhdmVyc2VzIGluIHRoZSByYW5nZSBvZiBbbWluLCBtYXhdLCBzdGVwcGluZ1xuLy8gYnkgZGlzdGFuY2UgZnJvbSBhIGdpdmVuIHN0YXJ0IHBvc2l0aW9uLiBJLmUuIGZvciBbMCwgNF0sIHdpdGhcbi8vIHN0YXJ0IG9mIDIsIHRoaXMgd2lsbCBpdGVyYXRlIDIsIDMsIDEsIDQsIDAuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGFydCwgbWluTGluZSwgbWF4TGluZSkge1xuICBsZXQgd2FudEZvcndhcmQgPSB0cnVlLFxuICAgICAgYmFja3dhcmRFeGhhdXN0ZWQgPSBmYWxzZSxcbiAgICAgIGZvcndhcmRFeGhhdXN0ZWQgPSBmYWxzZSxcbiAgICAgIGxvY2FsT2Zmc2V0ID0gMTtcblxuICByZXR1cm4gZnVuY3Rpb24gaXRlcmF0b3IoKSB7XG4gICAgaWYgKHdhbnRGb3J3YXJkICYmICFmb3J3YXJkRXhoYXVzdGVkKSB7XG4gICAgICBpZiAoYmFja3dhcmRFeGhhdXN0ZWQpIHtcbiAgICAgICAgbG9jYWxPZmZzZXQrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhbnRGb3J3YXJkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHRyeWluZyB0byBmaXQgYmV5b25kIHRleHQgbGVuZ3RoLCBhbmQgaWYgbm90LCBjaGVjayBpdCBmaXRzXG4gICAgICAvLyBhZnRlciBvZmZzZXQgbG9jYXRpb24gKG9yIGRlc2lyZWQgbG9jYXRpb24gb24gZmlyc3QgaXRlcmF0aW9uKVxuICAgICAgaWYgKHN0YXJ0ICsgbG9jYWxPZmZzZXQgPD0gbWF4TGluZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxPZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIGZvcndhcmRFeGhhdXN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghYmFja3dhcmRFeGhhdXN0ZWQpIHtcbiAgICAgIGlmICghZm9yd2FyZEV4aGF1c3RlZCkge1xuICAgICAgICB3YW50Rm9yd2FyZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHRyeWluZyB0byBmaXQgYmVmb3JlIHRleHQgYmVnaW5uaW5nLCBhbmQgaWYgbm90LCBjaGVjayBpdCBmaXRzXG4gICAgICAvLyBiZWZvcmUgb2Zmc2V0IGxvY2F0aW9uXG4gICAgICBpZiAobWluTGluZSA8PSBzdGFydCAtIGxvY2FsT2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAtbG9jYWxPZmZzZXQrKztcbiAgICAgIH1cblxuICAgICAgYmFja3dhcmRFeGhhdXN0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yKCk7XG4gICAgfVxuXG4gICAgLy8gV2UgdHJpZWQgdG8gZml0IGh1bmsgYmVmb3JlIHRleHQgYmVnaW5uaW5nIGFuZCBiZXlvbmQgdGV4dCBsZW5naHQsIHRoZW5cbiAgICAvLyBodW5rIGNhbid0IGZpdCBvbiB0aGUgdGV4dC4gUmV0dXJuIHVuZGVmaW5lZFxuICB9O1xufVxuIl19


/***/ }),

/***/ 4640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports. /*istanbul ignore end*/structuredPatch = structuredPatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/createTwoFilesPatch = createTwoFilesPatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/createPatch = createPatch;

var /*istanbul ignore start*/_line = __webpack_require__(3745) /*istanbul ignore end*/;

/*istanbul ignore start*/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*istanbul ignore end*/function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
  if (!options) {
    options = { context: 4 };
  }

  var diff = /*istanbul ignore start*/(0, _line.diffLines) /*istanbul ignore end*/(oldStr, newStr);
  diff.push({ value: '', lines: [] }); // Append an empty value to make cleanup easier

  function contextLines(lines) {
    return lines.map(function (entry) {
      return ' ' + entry;
    });
  }

  var hunks = [];
  var oldRangeStart = 0,
      newRangeStart = 0,
      curRange = [],
      oldLine = 1,
      newLine = 1;
  /*istanbul ignore start*/
  var _loop = function _loop( /*istanbul ignore end*/i) {
    var current = diff[i],
        lines = current.lines || current.value.replace(/\n$/, '').split('\n');
    current.lines = lines;

    if (current.added || current.removed) {
      /*istanbul ignore start*/
      var _curRange;

      /*istanbul ignore end*/
      // If we have previous context, start with that
      if (!oldRangeStart) {
        var prev = diff[i - 1];
        oldRangeStart = oldLine;
        newRangeStart = newLine;

        if (prev) {
          curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
          oldRangeStart -= curRange.length;
          newRangeStart -= curRange.length;
        }
      }

      // Output our changes
      /*istanbul ignore start*/(_curRange = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/lines.map(function (entry) {
        return (current.added ? '+' : '-') + entry;
      })));

      // Track the updated file position
      if (current.added) {
        newLine += lines.length;
      } else {
        oldLine += lines.length;
      }
    } else {
      // Identical context lines. Track line changes
      if (oldRangeStart) {
        // Close out any changes that have been output (or join overlapping)
        if (lines.length <= options.context * 2 && i < diff.length - 2) {
          /*istanbul ignore start*/
          var _curRange2;

          /*istanbul ignore end*/
          // Overlapping
          /*istanbul ignore start*/(_curRange2 = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange2 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/contextLines(lines)));
        } else {
          /*istanbul ignore start*/
          var _curRange3;

          /*istanbul ignore end*/
          // end the range and output
          var contextSize = Math.min(lines.length, options.context);
          /*istanbul ignore start*/(_curRange3 = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange3 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/contextLines(lines.slice(0, contextSize))));

          var hunk = {
            oldStart: oldRangeStart,
            oldLines: oldLine - oldRangeStart + contextSize,
            newStart: newRangeStart,
            newLines: newLine - newRangeStart + contextSize,
            lines: curRange
          };
          if (i >= diff.length - 2 && lines.length <= options.context) {
            // EOF is inside this hunk
            var oldEOFNewline = /\n$/.test(oldStr);
            var newEOFNewline = /\n$/.test(newStr);
            if (lines.length == 0 && !oldEOFNewline) {
              // special case: old has no eol and no trailing context; no-nl can end up before adds
              curRange.splice(hunk.oldLines, 0, '\\ No newline at end of file');
            } else if (!oldEOFNewline || !newEOFNewline) {
              curRange.push('\\ No newline at end of file');
            }
          }
          hunks.push(hunk);

          oldRangeStart = 0;
          newRangeStart = 0;
          curRange = [];
        }
      }
      oldLine += lines.length;
      newLine += lines.length;
    }
  };

  for (var i = 0; i < diff.length; i++) {
    /*istanbul ignore start*/
    _loop( /*istanbul ignore end*/i);
  }

  return {
    oldFileName: oldFileName, newFileName: newFileName,
    oldHeader: oldHeader, newHeader: newHeader,
    hunks: hunks
  };
}

function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
  var diff = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options);

  var ret = [];
  if (oldFileName == newFileName) {
    ret.push('Index: ' + oldFileName);
  }
  ret.push('===================================================================');
  ret.push('--- ' + diff.oldFileName + (typeof diff.oldHeader === 'undefined' ? '' : '\t' + diff.oldHeader));
  ret.push('+++ ' + diff.newFileName + (typeof diff.newHeader === 'undefined' ? '' : '\t' + diff.newHeader));

  for (var i = 0; i < diff.hunks.length; i++) {
    var hunk = diff.hunks[i];
    ret.push('@@ -' + hunk.oldStart + ',' + hunk.oldLines + ' +' + hunk.newStart + ',' + hunk.newLines + ' @@');
    ret.push.apply(ret, hunk.lines);
  }

  return ret.join('\n') + '\n';
}

function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
  return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9jcmVhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2dDQUVnQjt5REE4RkE7eURBd0JBOztBQXhIaEI7Ozs7O3VCQUVPLFNBQVMsZUFBVCxDQUF5QixXQUF6QixFQUFzQyxXQUF0QyxFQUFtRCxNQUFuRCxFQUEyRCxNQUEzRCxFQUFtRSxTQUFuRSxFQUE4RSxTQUE5RSxFQUF5RixPQUF6RixFQUFrRztBQUN2RyxNQUFJLENBQUMsT0FBRCxFQUFVO0FBQ1osY0FBVSxFQUFFLFNBQVMsQ0FBVCxFQUFaLENBRFk7R0FBZDs7QUFJQSxNQUFNLE9BQU8sc0VBQVUsTUFBVixFQUFrQixNQUFsQixDQUFQLENBTGlHO0FBTXZHLE9BQUssSUFBTCxDQUFVLEVBQUMsT0FBTyxFQUFQLEVBQVcsT0FBTyxFQUFQLEVBQXRCOztBQU51RyxXQVE5RixZQUFULENBQXNCLEtBQXRCLEVBQTZCO0FBQzNCLFdBQU8sTUFBTSxHQUFOLENBQVUsVUFBUyxLQUFULEVBQWdCO0FBQUUsYUFBTyxNQUFNLEtBQU4sQ0FBVDtLQUFoQixDQUFqQixDQUQyQjtHQUE3Qjs7QUFJQSxNQUFJLFFBQVEsRUFBUixDQVptRztBQWF2RyxNQUFJLGdCQUFnQixDQUFoQjtNQUFtQixnQkFBZ0IsQ0FBaEI7TUFBbUIsV0FBVyxFQUFYO01BQ3RDLFVBQVUsQ0FBVjtNQUFhLFVBQVUsQ0FBVixDQWRzRjs7cURBZTlGO0FBQ1AsUUFBTSxVQUFVLEtBQUssQ0FBTCxDQUFWO1FBQ0EsUUFBUSxRQUFRLEtBQVIsSUFBaUIsUUFBUSxLQUFSLENBQWMsT0FBZCxDQUFzQixLQUF0QixFQUE2QixFQUE3QixFQUFpQyxLQUFqQyxDQUF1QyxJQUF2QyxDQUFqQjtBQUNkLFlBQVEsS0FBUixHQUFnQixLQUFoQjs7QUFFQSxRQUFJLFFBQVEsS0FBUixJQUFpQixRQUFRLE9BQVIsRUFBaUI7Ozs7OztBQUVwQyxVQUFJLENBQUMsYUFBRCxFQUFnQjtBQUNsQixZQUFNLE9BQU8sS0FBSyxJQUFJLENBQUosQ0FBWixDQURZO0FBRWxCLHdCQUFnQixPQUFoQixDQUZrQjtBQUdsQix3QkFBZ0IsT0FBaEIsQ0FIa0I7O0FBS2xCLFlBQUksSUFBSixFQUFVO0FBQ1IscUJBQVcsUUFBUSxPQUFSLEdBQWtCLENBQWxCLEdBQXNCLGFBQWEsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixDQUFDLFFBQVEsT0FBUixDQUEvQixDQUF0QixHQUF5RSxFQUF6RSxDQURIO0FBRVIsMkJBQWlCLFNBQVMsTUFBVCxDQUZUO0FBR1IsMkJBQWlCLFNBQVMsTUFBVCxDQUhUO1NBQVY7T0FMRjs7O0FBRm9DLG1FQWVwQyxVQUFTLElBQVQsMExBQWtCLE1BQU0sR0FBTixDQUFVLFVBQVMsS0FBVCxFQUFnQjtBQUMxQyxlQUFPLENBQUMsUUFBUSxLQUFSLEdBQWdCLEdBQWhCLEdBQXNCLEdBQXRCLENBQUQsR0FBOEIsS0FBOUIsQ0FEbUM7T0FBaEIsRUFBNUI7OztBQWZvQyxVQW9CaEMsUUFBUSxLQUFSLEVBQWU7QUFDakIsbUJBQVcsTUFBTSxNQUFOLENBRE07T0FBbkIsTUFFTztBQUNMLG1CQUFXLE1BQU0sTUFBTixDQUROO09BRlA7S0FwQkYsTUF5Qk87O0FBRUwsVUFBSSxhQUFKLEVBQW1COztBQUVqQixZQUFJLE1BQU0sTUFBTixJQUFnQixRQUFRLE9BQVIsR0FBa0IsQ0FBbEIsSUFBdUIsSUFBSSxLQUFLLE1BQUwsR0FBYyxDQUFkLEVBQWlCOzs7Ozs7QUFFOUQsa0ZBQVMsSUFBVCwyTEFBa0IsYUFBYSxLQUFiLEVBQWxCLEVBRjhEO1NBQWhFLE1BR087Ozs7OztBQUVMLGNBQUksY0FBYyxLQUFLLEdBQUwsQ0FBUyxNQUFNLE1BQU4sRUFBYyxRQUFRLE9BQVIsQ0FBckMsQ0FGQztBQUdMLGtGQUFTLElBQVQsMkxBQWtCLGFBQWEsTUFBTSxLQUFOLENBQVksQ0FBWixFQUFlLFdBQWYsQ0FBYixFQUFsQixFQUhLOztBQUtMLGNBQUksT0FBTztBQUNULHNCQUFVLGFBQVY7QUFDQSxzQkFBVyxVQUFVLGFBQVYsR0FBMEIsV0FBMUI7QUFDWCxzQkFBVSxhQUFWO0FBQ0Esc0JBQVcsVUFBVSxhQUFWLEdBQTBCLFdBQTFCO0FBQ1gsbUJBQU8sUUFBUDtXQUxFLENBTEM7QUFZTCxjQUFJLEtBQUssS0FBSyxNQUFMLEdBQWMsQ0FBZCxJQUFtQixNQUFNLE1BQU4sSUFBZ0IsUUFBUSxPQUFSLEVBQWlCOztBQUUzRCxnQkFBSSxnQkFBaUIsTUFBTSxJQUFOLENBQVcsTUFBWCxDQUFqQixDQUZ1RDtBQUczRCxnQkFBSSxnQkFBaUIsTUFBTSxJQUFOLENBQVcsTUFBWCxDQUFqQixDQUh1RDtBQUkzRCxnQkFBSSxNQUFNLE1BQU4sSUFBZ0IsQ0FBaEIsSUFBcUIsQ0FBQyxhQUFELEVBQWdCOztBQUV2Qyx1QkFBUyxNQUFULENBQWdCLEtBQUssUUFBTCxFQUFlLENBQS9CLEVBQWtDLDhCQUFsQyxFQUZ1QzthQUF6QyxNQUdPLElBQUksQ0FBQyxhQUFELElBQWtCLENBQUMsYUFBRCxFQUFnQjtBQUMzQyx1QkFBUyxJQUFULENBQWMsOEJBQWQsRUFEMkM7YUFBdEM7V0FQVDtBQVdBLGdCQUFNLElBQU4sQ0FBVyxJQUFYLEVBdkJLOztBQXlCTCwwQkFBZ0IsQ0FBaEIsQ0F6Qks7QUEwQkwsMEJBQWdCLENBQWhCLENBMUJLO0FBMkJMLHFCQUFXLEVBQVgsQ0EzQks7U0FIUDtPQUZGO0FBbUNBLGlCQUFXLE1BQU0sTUFBTixDQXJDTjtBQXNDTCxpQkFBVyxNQUFNLE1BQU4sQ0F0Q047S0F6QlA7SUFwQnFHOztBQWV2RyxPQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLE1BQUwsRUFBYSxHQUFqQyxFQUFzQzs7a0NBQTdCLEdBQTZCO0dBQXRDOztBQXdFQSxTQUFPO0FBQ0wsaUJBQWEsV0FBYixFQUEwQixhQUFhLFdBQWI7QUFDMUIsZUFBVyxTQUFYLEVBQXNCLFdBQVcsU0FBWDtBQUN0QixXQUFPLEtBQVA7R0FIRixDQXZGdUc7Q0FBbEc7O0FBOEZBLFNBQVMsbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMEMsV0FBMUMsRUFBdUQsTUFBdkQsRUFBK0QsTUFBL0QsRUFBdUUsU0FBdkUsRUFBa0YsU0FBbEYsRUFBNkYsT0FBN0YsRUFBc0c7QUFDM0csTUFBTSxPQUFPLGdCQUFnQixXQUFoQixFQUE2QixXQUE3QixFQUEwQyxNQUExQyxFQUFrRCxNQUFsRCxFQUEwRCxTQUExRCxFQUFxRSxTQUFyRSxFQUFnRixPQUFoRixDQUFQLENBRHFHOztBQUczRyxNQUFNLE1BQU0sRUFBTixDQUhxRztBQUkzRyxNQUFJLGVBQWUsV0FBZixFQUE0QjtBQUM5QixRQUFJLElBQUosQ0FBUyxZQUFZLFdBQVosQ0FBVCxDQUQ4QjtHQUFoQztBQUdBLE1BQUksSUFBSixDQUFTLHFFQUFULEVBUDJHO0FBUTNHLE1BQUksSUFBSixDQUFTLFNBQVMsS0FBSyxXQUFMLElBQW9CLE9BQU8sS0FBSyxTQUFMLEtBQW1CLFdBQTFCLEdBQXdDLEVBQXhDLEdBQTZDLE9BQU8sS0FBSyxTQUFMLENBQWpGLENBQVQsQ0FSMkc7QUFTM0csTUFBSSxJQUFKLENBQVMsU0FBUyxLQUFLLFdBQUwsSUFBb0IsT0FBTyxLQUFLLFNBQUwsS0FBbUIsV0FBMUIsR0FBd0MsRUFBeEMsR0FBNkMsT0FBTyxLQUFLLFNBQUwsQ0FBakYsQ0FBVCxDQVQyRzs7QUFXM0csT0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksS0FBSyxLQUFMLENBQVcsTUFBWCxFQUFtQixHQUF2QyxFQUE0QztBQUMxQyxRQUFNLE9BQU8sS0FBSyxLQUFMLENBQVcsQ0FBWCxDQUFQLENBRG9DO0FBRTFDLFFBQUksSUFBSixDQUNFLFNBQVMsS0FBSyxRQUFMLEdBQWdCLEdBQXpCLEdBQStCLEtBQUssUUFBTCxHQUM3QixJQURGLEdBQ1MsS0FBSyxRQUFMLEdBQWdCLEdBRHpCLEdBQytCLEtBQUssUUFBTCxHQUM3QixLQUZGLENBREYsQ0FGMEM7QUFPMUMsUUFBSSxJQUFKLENBQVMsS0FBVCxDQUFlLEdBQWYsRUFBb0IsS0FBSyxLQUFMLENBQXBCLENBUDBDO0dBQTVDOztBQVVBLFNBQU8sSUFBSSxJQUFKLENBQVMsSUFBVCxJQUFpQixJQUFqQixDQXJCb0c7Q0FBdEc7O0FBd0JBLFNBQVMsV0FBVCxDQUFxQixRQUFyQixFQUErQixNQUEvQixFQUF1QyxNQUF2QyxFQUErQyxTQUEvQyxFQUEwRCxTQUExRCxFQUFxRSxPQUFyRSxFQUE4RTtBQUNuRixTQUFPLG9CQUFvQixRQUFwQixFQUE4QixRQUE5QixFQUF3QyxNQUF4QyxFQUFnRCxNQUFoRCxFQUF3RCxTQUF4RCxFQUFtRSxTQUFuRSxFQUE4RSxPQUE5RSxDQUFQLENBRG1GO0NBQTlFIiwiZmlsZSI6ImNyZWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGlmZkxpbmVzfSBmcm9tICcuLi9kaWZmL2xpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RydWN0dXJlZFBhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7IGNvbnRleHQ6IDQgfTtcbiAgfVxuXG4gIGNvbnN0IGRpZmYgPSBkaWZmTGluZXMob2xkU3RyLCBuZXdTdHIpO1xuICBkaWZmLnB1c2goe3ZhbHVlOiAnJywgbGluZXM6IFtdfSk7ICAgLy8gQXBwZW5kIGFuIGVtcHR5IHZhbHVlIHRvIG1ha2UgY2xlYW51cCBlYXNpZXJcblxuICBmdW5jdGlvbiBjb250ZXh0TGluZXMobGluZXMpIHtcbiAgICByZXR1cm4gbGluZXMubWFwKGZ1bmN0aW9uKGVudHJ5KSB7IHJldHVybiAnICcgKyBlbnRyeTsgfSk7XG4gIH1cblxuICBsZXQgaHVua3MgPSBbXTtcbiAgbGV0IG9sZFJhbmdlU3RhcnQgPSAwLCBuZXdSYW5nZVN0YXJ0ID0gMCwgY3VyUmFuZ2UgPSBbXSxcbiAgICAgIG9sZExpbmUgPSAxLCBuZXdMaW5lID0gMTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGRpZmZbaV0sXG4gICAgICAgICAgbGluZXMgPSBjdXJyZW50LmxpbmVzIHx8IGN1cnJlbnQudmFsdWUucmVwbGFjZSgvXFxuJC8sICcnKS5zcGxpdCgnXFxuJyk7XG4gICAgY3VycmVudC5saW5lcyA9IGxpbmVzO1xuXG4gICAgaWYgKGN1cnJlbnQuYWRkZWQgfHwgY3VycmVudC5yZW1vdmVkKSB7XG4gICAgICAvLyBJZiB3ZSBoYXZlIHByZXZpb3VzIGNvbnRleHQsIHN0YXJ0IHdpdGggdGhhdFxuICAgICAgaWYgKCFvbGRSYW5nZVN0YXJ0KSB7XG4gICAgICAgIGNvbnN0IHByZXYgPSBkaWZmW2kgLSAxXTtcbiAgICAgICAgb2xkUmFuZ2VTdGFydCA9IG9sZExpbmU7XG4gICAgICAgIG5ld1JhbmdlU3RhcnQgPSBuZXdMaW5lO1xuXG4gICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgY3VyUmFuZ2UgPSBvcHRpb25zLmNvbnRleHQgPiAwID8gY29udGV4dExpbmVzKHByZXYubGluZXMuc2xpY2UoLW9wdGlvbnMuY29udGV4dCkpIDogW107XG4gICAgICAgICAgb2xkUmFuZ2VTdGFydCAtPSBjdXJSYW5nZS5sZW5ndGg7XG4gICAgICAgICAgbmV3UmFuZ2VTdGFydCAtPSBjdXJSYW5nZS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT3V0cHV0IG91ciBjaGFuZ2VzXG4gICAgICBjdXJSYW5nZS5wdXNoKC4uLiBsaW5lcy5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIChjdXJyZW50LmFkZGVkID8gJysnIDogJy0nKSArIGVudHJ5O1xuICAgICAgfSkpO1xuXG4gICAgICAvLyBUcmFjayB0aGUgdXBkYXRlZCBmaWxlIHBvc2l0aW9uXG4gICAgICBpZiAoY3VycmVudC5hZGRlZCkge1xuICAgICAgICBuZXdMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9sZExpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZGVudGljYWwgY29udGV4dCBsaW5lcy4gVHJhY2sgbGluZSBjaGFuZ2VzXG4gICAgICBpZiAob2xkUmFuZ2VTdGFydCkge1xuICAgICAgICAvLyBDbG9zZSBvdXQgYW55IGNoYW5nZXMgdGhhdCBoYXZlIGJlZW4gb3V0cHV0IChvciBqb2luIG92ZXJsYXBwaW5nKVxuICAgICAgICBpZiAobGluZXMubGVuZ3RoIDw9IG9wdGlvbnMuY29udGV4dCAqIDIgJiYgaSA8IGRpZmYubGVuZ3RoIC0gMikge1xuICAgICAgICAgIC8vIE92ZXJsYXBwaW5nXG4gICAgICAgICAgY3VyUmFuZ2UucHVzaCguLi4gY29udGV4dExpbmVzKGxpbmVzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZW5kIHRoZSByYW5nZSBhbmQgb3V0cHV0XG4gICAgICAgICAgbGV0IGNvbnRleHRTaXplID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBvcHRpb25zLmNvbnRleHQpO1xuICAgICAgICAgIGN1clJhbmdlLnB1c2goLi4uIGNvbnRleHRMaW5lcyhsaW5lcy5zbGljZSgwLCBjb250ZXh0U2l6ZSkpKTtcblxuICAgICAgICAgIGxldCBodW5rID0ge1xuICAgICAgICAgICAgb2xkU3RhcnQ6IG9sZFJhbmdlU3RhcnQsXG4gICAgICAgICAgICBvbGRMaW5lczogKG9sZExpbmUgLSBvbGRSYW5nZVN0YXJ0ICsgY29udGV4dFNpemUpLFxuICAgICAgICAgICAgbmV3U3RhcnQ6IG5ld1JhbmdlU3RhcnQsXG4gICAgICAgICAgICBuZXdMaW5lczogKG5ld0xpbmUgLSBuZXdSYW5nZVN0YXJ0ICsgY29udGV4dFNpemUpLFxuICAgICAgICAgICAgbGluZXM6IGN1clJhbmdlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaSA+PSBkaWZmLmxlbmd0aCAtIDIgJiYgbGluZXMubGVuZ3RoIDw9IG9wdGlvbnMuY29udGV4dCkge1xuICAgICAgICAgICAgLy8gRU9GIGlzIGluc2lkZSB0aGlzIGh1bmtcbiAgICAgICAgICAgIGxldCBvbGRFT0ZOZXdsaW5lID0gKC9cXG4kLy50ZXN0KG9sZFN0cikpO1xuICAgICAgICAgICAgbGV0IG5ld0VPRk5ld2xpbmUgPSAoL1xcbiQvLnRlc3QobmV3U3RyKSk7XG4gICAgICAgICAgICBpZiAobGluZXMubGVuZ3RoID09IDAgJiYgIW9sZEVPRk5ld2xpbmUpIHtcbiAgICAgICAgICAgICAgLy8gc3BlY2lhbCBjYXNlOiBvbGQgaGFzIG5vIGVvbCBhbmQgbm8gdHJhaWxpbmcgY29udGV4dDsgbm8tbmwgY2FuIGVuZCB1cCBiZWZvcmUgYWRkc1xuICAgICAgICAgICAgICBjdXJSYW5nZS5zcGxpY2UoaHVuay5vbGRMaW5lcywgMCwgJ1xcXFwgTm8gbmV3bGluZSBhdCBlbmQgb2YgZmlsZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghb2xkRU9GTmV3bGluZSB8fCAhbmV3RU9GTmV3bGluZSkge1xuICAgICAgICAgICAgICBjdXJSYW5nZS5wdXNoKCdcXFxcIE5vIG5ld2xpbmUgYXQgZW5kIG9mIGZpbGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaHVua3MucHVzaChodW5rKTtcblxuICAgICAgICAgIG9sZFJhbmdlU3RhcnQgPSAwO1xuICAgICAgICAgIG5ld1JhbmdlU3RhcnQgPSAwO1xuICAgICAgICAgIGN1clJhbmdlID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG9sZExpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgbmV3TGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvbGRGaWxlTmFtZTogb2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lOiBuZXdGaWxlTmFtZSxcbiAgICBvbGRIZWFkZXI6IG9sZEhlYWRlciwgbmV3SGVhZGVyOiBuZXdIZWFkZXIsXG4gICAgaHVua3M6IGh1bmtzXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUd29GaWxlc1BhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRpZmYgPSBzdHJ1Y3R1cmVkUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IHJldCA9IFtdO1xuICBpZiAob2xkRmlsZU5hbWUgPT0gbmV3RmlsZU5hbWUpIHtcbiAgICByZXQucHVzaCgnSW5kZXg6ICcgKyBvbGRGaWxlTmFtZSk7XG4gIH1cbiAgcmV0LnB1c2goJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgcmV0LnB1c2goJy0tLSAnICsgZGlmZi5vbGRGaWxlTmFtZSArICh0eXBlb2YgZGlmZi5vbGRIZWFkZXIgPT09ICd1bmRlZmluZWQnID8gJycgOiAnXFx0JyArIGRpZmYub2xkSGVhZGVyKSk7XG4gIHJldC5wdXNoKCcrKysgJyArIGRpZmYubmV3RmlsZU5hbWUgKyAodHlwZW9mIGRpZmYubmV3SGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm5ld0hlYWRlcikpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZi5odW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGh1bmsgPSBkaWZmLmh1bmtzW2ldO1xuICAgIHJldC5wdXNoKFxuICAgICAgJ0BAIC0nICsgaHVuay5vbGRTdGFydCArICcsJyArIGh1bmsub2xkTGluZXNcbiAgICAgICsgJyArJyArIGh1bmsubmV3U3RhcnQgKyAnLCcgKyBodW5rLm5ld0xpbmVzXG4gICAgICArICcgQEAnXG4gICAgKTtcbiAgICByZXQucHVzaC5hcHBseShyZXQsIGh1bmsubGluZXMpO1xuICB9XG5cbiAgcmV0dXJuIHJldC5qb2luKCdcXG4nKSArICdcXG4nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGF0Y2goZmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICByZXR1cm4gY3JlYXRlVHdvRmlsZXNQYXRjaChmaWxlTmFtZSwgZmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucyk7XG59XG4iXX0=


/***/ }),

/***/ 4641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports. /*istanbul ignore end*/convertChangesToDMP = convertChangesToDMP;
// See: http://code.google.com/p/google-diff-match-patch/wiki/API
function convertChangesToDMP(changes) {
  var ret = [],
      change = /*istanbul ignore start*/void 0 /*istanbul ignore end*/,
      operation = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
  for (var i = 0; i < changes.length; i++) {
    change = changes[i];
    if (change.added) {
      operation = 1;
    } else if (change.removed) {
      operation = -1;
    } else {
      operation = 0;
    }

    ret.push([operation, change.value]);
  }
  return ret;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0L2RtcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0NBQ2dCOztBQUFULFNBQVMsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0M7QUFDM0MsTUFBSSxNQUFNLEVBQU47TUFDQSxnRUFESjtNQUVJLG1FQUZKLENBRDJDO0FBSTNDLE9BQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFFBQVEsTUFBUixFQUFnQixHQUFwQyxFQUF5QztBQUN2QyxhQUFTLFFBQVEsQ0FBUixDQUFULENBRHVDO0FBRXZDLFFBQUksT0FBTyxLQUFQLEVBQWM7QUFDaEIsa0JBQVksQ0FBWixDQURnQjtLQUFsQixNQUVPLElBQUksT0FBTyxPQUFQLEVBQWdCO0FBQ3pCLGtCQUFZLENBQUMsQ0FBRCxDQURhO0tBQXBCLE1BRUE7QUFDTCxrQkFBWSxDQUFaLENBREs7S0FGQTs7QUFNUCxRQUFJLElBQUosQ0FBUyxDQUFDLFNBQUQsRUFBWSxPQUFPLEtBQVAsQ0FBckIsRUFWdUM7R0FBekM7QUFZQSxTQUFPLEdBQVAsQ0FoQjJDO0NBQXRDIiwiZmlsZSI6ImRtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNlZTogaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2dvb2dsZS1kaWZmLW1hdGNoLXBhdGNoL3dpa2kvQVBJXG5leHBvcnQgZnVuY3Rpb24gY29udmVydENoYW5nZXNUb0RNUChjaGFuZ2VzKSB7XG4gIGxldCByZXQgPSBbXSxcbiAgICAgIGNoYW5nZSxcbiAgICAgIG9wZXJhdGlvbjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hhbmdlID0gY2hhbmdlc1tpXTtcbiAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICBvcGVyYXRpb24gPSAxO1xuICAgIH0gZWxzZSBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgIG9wZXJhdGlvbiA9IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcGVyYXRpb24gPSAwO1xuICAgIH1cblxuICAgIHJldC5wdXNoKFtvcGVyYXRpb24sIGNoYW5nZS52YWx1ZV0pO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iXX0=


/***/ }),

/***/ 4642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/

exports.__esModule = true;
exports. /*istanbul ignore end*/convertChangesToXML = convertChangesToXML;
function convertChangesToXML(changes) {
  var ret = [];
  for (var i = 0; i < changes.length; i++) {
    var change = changes[i];
    if (change.added) {
      ret.push('<ins>');
    } else if (change.removed) {
      ret.push('<del>');
    }

    ret.push(escapeHTML(change.value));

    if (change.added) {
      ret.push('</ins>');
    } else if (change.removed) {
      ret.push('</del>');
    }
  }
  return ret.join('');
}

function escapeHTML(s) {
  var n = s;
  n = n.replace(/&/g, '&amp;');
  n = n.replace(/</g, '&lt;');
  n = n.replace(/>/g, '&gt;');
  n = n.replace(/"/g, '&quot;');

  return n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0L3htbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0NBQWdCO0FBQVQsU0FBUyxtQkFBVCxDQUE2QixPQUE3QixFQUFzQztBQUMzQyxNQUFJLE1BQU0sRUFBTixDQUR1QztBQUUzQyxPQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxRQUFRLE1BQVIsRUFBZ0IsR0FBcEMsRUFBeUM7QUFDdkMsUUFBSSxTQUFTLFFBQVEsQ0FBUixDQUFULENBRG1DO0FBRXZDLFFBQUksT0FBTyxLQUFQLEVBQWM7QUFDaEIsVUFBSSxJQUFKLENBQVMsT0FBVCxFQURnQjtLQUFsQixNQUVPLElBQUksT0FBTyxPQUFQLEVBQWdCO0FBQ3pCLFVBQUksSUFBSixDQUFTLE9BQVQsRUFEeUI7S0FBcEI7O0FBSVAsUUFBSSxJQUFKLENBQVMsV0FBVyxPQUFPLEtBQVAsQ0FBcEIsRUFSdUM7O0FBVXZDLFFBQUksT0FBTyxLQUFQLEVBQWM7QUFDaEIsVUFBSSxJQUFKLENBQVMsUUFBVCxFQURnQjtLQUFsQixNQUVPLElBQUksT0FBTyxPQUFQLEVBQWdCO0FBQ3pCLFVBQUksSUFBSixDQUFTLFFBQVQsRUFEeUI7S0FBcEI7R0FaVDtBQWdCQSxTQUFPLElBQUksSUFBSixDQUFTLEVBQVQsQ0FBUCxDQWxCMkM7Q0FBdEM7O0FBcUJQLFNBQVMsVUFBVCxDQUFvQixDQUFwQixFQUF1QjtBQUNyQixNQUFJLElBQUksQ0FBSixDQURpQjtBQUVyQixNQUFJLEVBQUUsT0FBRixDQUFVLElBQVYsRUFBZ0IsT0FBaEIsQ0FBSixDQUZxQjtBQUdyQixNQUFJLEVBQUUsT0FBRixDQUFVLElBQVYsRUFBZ0IsTUFBaEIsQ0FBSixDQUhxQjtBQUlyQixNQUFJLEVBQUUsT0FBRixDQUFVLElBQVYsRUFBZ0IsTUFBaEIsQ0FBSixDQUpxQjtBQUtyQixNQUFJLEVBQUUsT0FBRixDQUFVLElBQVYsRUFBZ0IsUUFBaEIsQ0FBSixDQUxxQjs7QUFPckIsU0FBTyxDQUFQLENBUHFCO0NBQXZCIiwiZmlsZSI6InhtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0Q2hhbmdlc1RvWE1MKGNoYW5nZXMpIHtcbiAgbGV0IHJldCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYW5nZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY2hhbmdlID0gY2hhbmdlc1tpXTtcbiAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICByZXQucHVzaCgnPGlucz4nKTtcbiAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICByZXQucHVzaCgnPGRlbD4nKTtcbiAgICB9XG5cbiAgICByZXQucHVzaChlc2NhcGVIVE1MKGNoYW5nZS52YWx1ZSkpO1xuXG4gICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgcmV0LnB1c2goJzwvaW5zPicpO1xuICAgIH0gZWxzZSBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgIHJldC5wdXNoKCc8L2RlbD4nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldC5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlSFRNTChzKSB7XG4gIGxldCBuID0gcztcbiAgbiA9IG4ucmVwbGFjZSgvJi9nLCAnJmFtcDsnKTtcbiAgbiA9IG4ucmVwbGFjZSgvPC9nLCAnJmx0OycpO1xuICBuID0gbi5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gIG4gPSBuLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcblxuICByZXR1cm4gbjtcbn1cbiJdfQ==


/***/ }),

/***/ 4643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiffLine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DiffLineNumbers__ = __webpack_require__(4644);

let

DiffLine = class DiffLine extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  pushIntoLineFeed(lineObj, part) {
    if (!(part.added || part.removed)) {
      lineObj.added.push(1);
      lineObj.removed.push(1);
    } else
    if (part.added) {
      lineObj.added.push(1);
      lineObj.removed.push(0);
    } else
    if (part.removed) {
      lineObj.added.push(0);
      lineObj.removed.push(1);
    }
    return lineObj;
  }

  computeDiffLineArray(diff, type) {
    var lineObj = {
      added: [],
      removed: [] };

    _.forEach(diff, part => {
      if (type === 'chars') {
        lineObj = this.pushIntoLineFeed(lineObj, part);
      } else
      {
        let eachLine = part.value.split('\n');
        _.forEach(eachLine, () => {
          lineObj = this.pushIntoLineFeed(lineObj, part);
        });
      }
    });
    return lineObj;
  }

  render() {
    let diffLineObj = this.computeDiffLineArray(this.props.diff, this.props.type);
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'diff-lines-numbers-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__DiffLineNumbers__["a" /* default */], { lineArray: diffLineObj.added }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__DiffLineNumbers__["a" /* default */], { lineArray: diffLineObj.removed })));


  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 4644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiffLineNumbers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
let

DiffLineNumbers = class DiffLineNumbers extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    let lineArray = this.props.lineArray,
    lineIndex = 0;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'diff-line-numbers-wrapper' },

        !_.isEmpty(lineArray) &&
        _.map(lineArray, (cursor, index) => {
          if (cursor === 1) {
            lineIndex = ++lineIndex;
          }
          let lineNumber = cursor === 1 ? ' ' + lineIndex : '';
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'diff-line diff-line-numbers',
                key: index },

              lineNumber));


        })));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 4645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiffTexView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);

let

DiffTexView = class DiffTexView extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses(part) {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'diff-text-wrapper': true,
      'diff-normal': !(part.added || part.removed),
      'diff-added': part.added,
      'diff-removed': part.removed,
      'diff-line': this.props.ignoreOverlay && this.props.type !== 'chars' });

  }


  getDiffWrapperClass() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'diff-wrapper': true,
      'is-overlayed': !this.props.ignoreOverlay,
      'diff-char': this.props.ignoreOverlay && this.props.type === 'chars' // Character Diff in the modal
    });
  }

  getFlattenedDiff(diff) {
    let flattenedDiff = [];
    _.forEach(diff, part => {
      let eachLine = part.value.split('\n');
      _.forEach(eachLine, line => {// eslint-disable-line lodash/prefer-map
        flattenedDiff.push({
          added: part.added,
          removed: part.removed,
          normal: !(part.added || part.removed),
          value: line });

      });
    });
    return flattenedDiff;
  }

  render() {
    if (this.props.type === 'chars') {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('pre', { className: this.getDiffWrapperClass() },

          _.map(this.props.diff, (part, index) => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                  className: this.getClasses(part),
                  key: index },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
                  part.value)));



          })));



    }
    let diff = this.getFlattenedDiff(this.props.diff),
    startsWithNormal = diff && diff[0].normal;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('pre', { className: this.getDiffWrapperClass() },

        _.map(diff, (part, index) => {
          let preText = part.added ? '+' : part.removed ? '-' : ' ',
          className = this.getClasses(part),
          mapKey = _.toString(part) + _.toString(index);
          if (!this.props.ignoreOverlay) {
            let hideNormalLine = part.normal && diff[index + 1] && diff[index + 1].normal,
            isLastNormalEmptyLine = !hideNormalLine && _.isEmpty(part.value) && diff[index + 1] && !diff[index + 1].normal;
            if (startsWithNormal && (hideNormalLine || isLastNormalEmptyLine)) {
              return false;
            }
            startsWithNormal = false;
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                  className: className,
                  key: mapKey },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
                  preText, ' ', part.value)));



          }
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: className,
                key: mapKey },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'diff-text-line' },
                preText, ' ', part.value)));



        })));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 4685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_diff_Diff__ = __webpack_require__(3744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(19);



let

NormalView = class NormalView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {
      previous,
      current } =
    this.props;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-details-content-right' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-activity-item-details-content-data' }, previous),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, previous ? ' to ' : ' '),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-activity-item-details-content-data' }, current)));


  }};let


DiffView = class DiffView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {
      type = 'chars',
      previous,
      current,
      modalHeader } =
    this.props;
    previous = type === 'lines' ? __WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].beautifyJs(previous) : previous;
    current = type === 'lines' ? __WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].beautifyJs(current) : current;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-details-content-right workspace-activity-item-details-diff-view' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_diff_Diff__["a" /* default */], {
          modalHeader: modalHeader,
          previous: previous,
          current: current,
          type: type })));



  }};let


DetailsItem = class DetailsItem extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'workspace-activity-item-details-content': true,
      'normal-view': this.props.view === 'normal' });

  }

  render() {
    let {
      previous,
      current,
      label,
      model,
      name,
      diffType } =
    this.props,
    modalHeader = 'Change to ' + label + ' for ' + model + ' ' + name;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-details-content-left' },
          label),


        this.props.view === 'normal' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NormalView, {
          previous: previous,
          current: current }),



        this.props.view === 'diff' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DiffView, {
          modalHeader: modalHeader,
          previous: previous,
          current: current,
          type: diffType })));




  }};




/***/ })

});