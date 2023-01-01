// 
// const fac = new FastAverageColor();
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var __generator = this && this.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var championButtonDropdownContent = '\n<button class="champDropdownButtons">t</button>\n<button class="champDropdownButtons">t</button>\n<button class="champDropdownButtons">t</button>\n<button class="champDropdownButtons">t</button>\n<button class="champDropdownButtons">t</button>\n<button class="champDropdownButtons">t</button>\n<button class="champDropdownButtons">t</button>\n<button class="champDropdownButtons">t</button>\n<button class="champDropdownButtons">t</button>\n<button class="champDropdownButtons">t</button>\n';
var itemButtonDropdownContent = '\n<button class="itemDropdownButtons">t</button>\n<button class="itemDropdownButtons">t</button>\n<button class="itemDropdownButtons">t</button>\n<button class="itemDropdownButtons">t</button>\n<button class="itemDropdownButtons">t</button>\n';
var tempSlider = document.getElementById("championLevelRange");
var sliderOutput = document.getElementById("championLevelOutput");
var championConfigData = {
    champLevel: 1,
    q: 0,
    w: 0,
    e: 0,
    r: 0
};
var abilityLevelPicker = {
    qLevelPicker: {
        qLevelZero: {
            value: 0,
            isChosen: false
        },
        qLevelOne: {
            value: 1,
            isChosen: false
        },
        qLevelTwo: {
            value: 2,
            isChosen: false
        },
        qLevelThree: {
            value: 3,
            isChosen: false
        },
        qLevelFour: {
            value: 4,
            isChosen: false
        },
        qLevelFive: {
            value: 5,
            isChosen: false
        }
    },
    wLevelPicker: {
        wLevelZero: {
            value: 0,
            isChosen: false
        },
        wLevelOne: {
            value: 1,
            isChosen: false
        },
        wLevelTwo: {
            value: 2,
            isChosen: false
        },
        wLevelThree: {
            value: 3,
            isChosen: false
        },
        wLevelFour: {
            value: 4,
            isChosen: false
        },
        wLevelFive: {
            value: 5,
            isChosen: false
        }
    },
    eLevelPicker: {
        eLevelZero: {
            value: 0,
            isChosen: true
        },
        eLevelOne: {
            value: 1,
            isChosen: false
        },
        eLevelTwo: {
            value: 2,
            isChosen: false
        },
        eLevelThree: {
            value: 3,
            isChosen: false
        },
        eLevelFour: {
            value: 4,
            isChosen: false
        },
        eLevelFive: {
            value: 5,
            isChosen: false
        }
    },
    rLevelPicker: {
        rLevelZero: {
            value: 0,
            isChosen: false
        },
        rLevelOne: {
            value: 1,
            isChosen: false
        },
        rLevelTwo: {
            value: 2,
            isChosen: false
        },
        rLevelThree: {
            value: 3,
            isChosen: false
        },
        rLevelFour: {
            value: 4,
            isChosen: false
        },
        rLevelFive: {
            value: 5,
            isChosen: false
        }
    }
};
var dropdownButtonContent = [
    {
        realID: "Champ",
        visible: false
    },
    {
        realID: "ItemOne",
        visible: false
    },
    {
        realID: "ItemTwo",
        visible: false
    },
    {
        realID: "ItemThree",
        visible: false
    },
    {
        realID: "ItemFour",
        visible: false
    },
    {
        realID: "ItemFive",
        visible: false
    },
    {
        realID: "ItemSix",
        visible: false
    }
];
function setInputFilter(textbox, inputFilter, errMsg) {
    [
        "input",
        "keydown",
        "keyup",
        "mousedown",
        "mouseup",
        "select",
        "contextmenu",
        "drop",
        "focusout"
    ].forEach(function(event) {
        textbox.addEventListener(event, /*#__PURE__*/ _asyncToGenerator(function() {
            return __generator(this, function(_state) {
                //const errorMessage = document.getElementById(textbox.parentElement.children[1].id)
                if (inputFilter(this.value)) {
                    console.log("1");
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                // errorMessage.style.opacity = "0"
                // await delay(300)
                // errorMessage.style.visibility = "hidden"
                } else if (Object.prototype.hasOwnProperty.call(this, "oldValue")) {
                    console.log("2");
                    this.value = this.oldValue;
                    //this.classList.add("inputError");
                    this.setCustomValidity(errMsg);
                    this.reportValidity();
                    if (this.oldSelectionStart !== null && this.oldSelectionEnd !== null) {
                        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                    }
                } else {
                    console.log("3");
                    this.value = "";
                }
                return [
                    2
                ];
            });
        }));
    });
}
setInputFilter(document.getElementById("dummyHealthInput"), function(value) {
    return /^-?\d*[.,]?\d*$/.test(value); //  && (value === "" || parseInt(value) <= 999999)
}, "Must be a number");
setInputFilter(document.getElementById("dummyArmorInput"), function(value) {
    return /^-?\d*[.,]?\d*$/.test(value); //  && (value === "" || parseInt(value) <= 999999)
}, "Must be a number");
setInputFilter(document.getElementById("dummyMRInput"), function(value) {
    return /^-?\d*[.,]?\d*$/.test(value); //  && (value === "" || parseInt(value) <= 999999)
}, "Must be a number");
/**
Button and Slider functions
 */ function searchbarFocusOnIconClick(searchBarID) {
    searchBarID.focus();
}
var changeDropdownVisibility = function() {
    var _ref = _asyncToGenerator(function(dropdownID) {
        var dropdownContentID, currentDropdown, tempDropdownElement;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dropdownContentID = "dropdownContent".concat(dropdownID);
                    currentDropdown = dropdownButtonContent.find(function(dropdown) {
                        return dropdown.realID === dropdownID;
                    });
                    tempDropdownElement = document.getElementById(dropdownContentID);
                    if (!currentDropdown.visible) return [
                        3,
                        2
                    ];
                    tempDropdownElement.style.opacity = "0";
                    return [
                        4,
                        delay(300)
                    ];
                case 1:
                    _state.sent();
                    tempDropdownElement.style.visibility = "hidden";
                    currentDropdown.visible = false;
                    return [
                        3,
                        3
                    ];
                case 2:
                    if (!currentDropdown.visible) {
                        tempDropdownElement.style.opacity = "1";
                        tempDropdownElement.style.visibility = "visible";
                        currentDropdown.visible = true;
                    }
                    _state.label = 3;
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return function changeDropdownVisibility(dropdownID) {
        return _ref.apply(this, arguments);
    };
}();
function pickerButton(abilityName, abilityLevel) {
    var pickerDivID = "".concat(abilityName, "LevelPicker");
    var pickerButtonID = "".concat(abilityName, "Level").concat(abilityLevel);
    var currPickerDiv = document.getElementById(pickerDivID);
    var currPickerButton = document.getElementById(pickerButtonID);
    var currentActiveButton = document.getElementById("".concat(abilityName, "LevelZero"));
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(abilityLevelPicker[pickerDivID])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _slicedToArray(_step.value, 2), pickerButtonName = _step_value[0], pickerButtonValues = _step_value[1];
            if (pickerButtonName !== pickerButtonID) {
                if (pickerButtonValues.isChosen) {
                    currentActiveButton = document.getElementById(pickerButtonName);
                    abilityLevelPicker[pickerDivID][pickerButtonName].isChosen = false;
                    currentActiveButton.style.background = "skyblue";
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    currPickerButton.style.background = "gray";
    abilityLevelPicker[pickerDivID][pickerButtonID].isChosen = true;
    if (pickerButtonID.slice(0, 1) === "q") {
        championConfigData.q = abilityLevelPicker[pickerDivID][pickerButtonID].value;
    } else if (pickerButtonID.slice(0, 1) === "w") {
        championConfigData.w = abilityLevelPicker[pickerDivID][pickerButtonID].value;
    } else if (pickerButtonID.slice(0, 1) === "e") {
        championConfigData.e = abilityLevelPicker[pickerDivID][pickerButtonID].value;
    } else if (pickerButtonID.slice(0, 1) === "r") {
        championConfigData.r = abilityLevelPicker[pickerDivID][pickerButtonID].value;
    }
}
tempSlider.oninput = function() {
    sliderOutput.innerHTML = tempSlider.value;
    championConfigData.champLevel = parseInt(tempSlider.value);
};
window.onclick = function() {
    var _ref = _asyncToGenerator(function(event) {
        var visibleDropdowns, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, dropdownObj, buttonImageID, dropdownContentID, searchBarID, dropdown, err;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    visibleDropdowns = dropdownButtonContent.filter(function(dropdown) {
                        return dropdown.visible === true;
                    });
                    if (!visibleDropdowns) return [
                        3,
                        8
                    ];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = visibleDropdowns[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    dropdownObj = _step.value;
                    buttonImageID = "buttonImage".concat(dropdownObj.realID);
                    dropdownContentID = "dropdownContent".concat(dropdownObj.realID);
                    searchBarID = "searchBarID".concat(dropdownObj.realID);
                    if (!(!event.target.matches("img#" + buttonImageID) && !event.target.matches("#" + dropdownContentID) && !event.target.matches("#" + searchBarID) && !event.target.matches(".gridForItems") && !event.target.matches("img.searchIcon") && !event.target.matches("img.filterIcon"))) return [
                        3,
                        4
                    ];
                    dropdown = document.getElementById(dropdownContentID);
                    dropdown.style.opacity = "0";
                    return [
                        4,
                        delay(300)
                    ];
                case 3:
                    _state.sent();
                    dropdown.style.visibility = "hidden";
                    dropdownObj.visible = false;
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 8:
                    return [
                        2
                    ];
            }
        });
    });
    return function(event) {
        return _ref.apply(this, arguments);
    };
}();
//for testing
var seraLogo = "https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/Seraphine.png";
var liandrysLogo = "https://raw.communitydragon.org/12.22/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6653_mage_t4_liandrysanguish.png";
var greyImg = "img/greyChampButton.jpg";
function adjustButtonLogo(urlOfImage, id) {
    var buttonID = "button".concat(id);
    var imgID = "buttonImage".concat(id);
    var buttonToChangeImgFrom = document.getElementById(buttonID);
    var imgDivWithNewImage = '\n    <img class="buttonImagesOnHoverEffect" id="'.concat(imgID, '"\n    src="').concat(urlOfImage, '">\n    ');
    try {
        buttonToChangeImgFrom.innerHTML = imgDivWithNewImage;
    } catch (error) {
        console.log("Button with the following ID ".concat(buttonID, " does not exist"));
    }
}
function createDropdowns() {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = dropdownButtonContent[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var dropdownObj = _step.value;
            var realID = dropdownObj.realID;
            var searchBarID = "searchBarID".concat(realID);
            var dropdownAndButtonID = "buttonAndDropdown".concat(realID);
            var dropdownContentID = "dropdownContent".concat(realID);
            var inputField = document.createElement("input");
            inputField.setAttribute("class", "searchBarInputFieldStyle");
            inputField.setAttribute("id", searchBarID);
            inputField.setAttribute("type", "text");
            var searchIcon = document.createElement("img");
            searchIcon.setAttribute("src", "img/pngfind.com-search-icon-png-545559.png");
            searchIcon.setAttribute("onclick", "searchbarFocusOnIconClick(".concat(searchBarID, ")"));
            searchIcon.setAttribute("class", "searchIcon");
            var filterIcon = document.createElement("img");
            filterIcon.setAttribute("src", "img/filter-filled-tool-symbol.png");
            filterIcon.setAttribute("onclick", "filterIconAction(".concat(searchBarID, ")"));
            filterIcon.setAttribute("class", "filterIcon");
            var searchBar = document.createElement("div");
            searchBar.setAttribute("class", "searchBar");
            searchBar.appendChild(inputField);
            searchBar.appendChild(searchIcon);
            searchBar.appendChild(filterIcon);
            var gridWithButtons = document.createElement("div");
            gridWithButtons.setAttribute("class", "gridForItems");
            if (realID.slice(0, 4) === "Cham") {
                gridWithButtons.innerHTML = championButtonDropdownContent;
            } else if (realID.slice(0, 4) === "Item") {
                gridWithButtons.innerHTML = itemButtonDropdownContent;
            }
            var dropdownContent = document.createElement("div");
            dropdownContent.setAttribute("class", "dropdownContentStyle");
            dropdownContent.setAttribute("id", dropdownContentID);
            dropdownContent.appendChild(searchBar);
            dropdownContent.appendChild(gridWithButtons);
            var buttonAndDropdown = document.getElementById(dropdownAndButtonID);
            buttonAndDropdown.appendChild(dropdownContent);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    for(var i = 0; i < 7; i++){
        var searchBarID1 = "searchBarID".concat(dropdownButtonContent[i].realID);
        var searchBarDivWidth = document.getElementsByClassName("searchBar")[i].clientWidth;
        var searchBar1 = document.getElementById(searchBarID1);
        searchBar1.style.width = "".concat(searchBarDivWidth - 18, "px");
        searchBar1.style.paddingLeft = "30px";
    }
}
function setAbilityLevelDefault() {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(abilityLevelPicker)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _slicedToArray(_step.value, 2), pickerName = _step_value[0], pickerContent = _step_value[1];
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = Object.entries(pickerContent)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var _step_value1 = _slicedToArray(_step1.value, 2), buttonName = _step_value1[0], buttonContent = _step_value1[1];
                    var currButton = document.getElementById(buttonName);
                    if (buttonName.slice(1, 7) === "LevelZ") {
                        abilityLevelPicker[pickerName][buttonName].isChosen = true;
                        currButton.style.background = "gray";
                    }
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
var buildHTMLPage = function() {
    tempSlider.value = 1;
    sliderOutput.innerHTML = tempSlider.value;
    championConfigData.champLevel = parseInt(tempSlider.value);
    createDropdowns();
    setAbilityLevelDefault();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = dropdownButtonContent[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var buttonDropdowns = _step.value;
            if (buttonDropdowns.realID === "Champ") adjustButtonLogo(seraLogo, "Champ");
            else if (buttonDropdowns.realID === "ItemOne") adjustButtonLogo(liandrysLogo, "ItemOne");
            else adjustButtonLogo(greyImg, buttonDropdowns.realID);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};
buildHTMLPage();
// helper functions
var delay = function(delayInms) {
    return new Promise(function(resolve) {
        return setTimeout(resolve, delayInms);
    });
};
