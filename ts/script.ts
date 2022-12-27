const championButtonDropdownContent = `
<button class="champDropdownButtons">t</button>
<button class="champDropdownButtons">t</button>
<button class="champDropdownButtons">t</button>
<button class="champDropdownButtons">t</button>
<button class="champDropdownButtons">t</button>
<button class="champDropdownButtons">t</button>
<button class="champDropdownButtons">t</button>
<button class="champDropdownButtons">t</button>
<button class="champDropdownButtons">t</button>
<button class="champDropdownButtons">t</button>
`
const itemButtonDropdownContent = `
<button class="itemDropdownButtons">t</button>
<button class="itemDropdownButtons">t</button>
<button class="itemDropdownButtons">t</button>
<button class="itemDropdownButtons">t</button>
<button class="itemDropdownButtons">t</button>
`
const listOfPickerButtonIDs = ["qLevelZero", "qLevelOne", "qLevelTwo", "qLevelThree", "qLevelFour", "qLevelFive"]

type AbilityLevel = {
    value: number
    isChosen: boolean
}
const tempSlider: any = document.getElementById("championLevelRange")
const sliderOutput = document.getElementById("championLevelOutput")
tempSlider.value = 1
sliderOutput!.innerHTML = tempSlider.value



const championConfigData = {
    champLevel: 1,
    q: 0,
    w: 0,
    e: 0,
    r: 0,
}
championConfigData.champLevel = parseInt(tempSlider.value)

const abilityLevelPicker: Record<string, Record<string, AbilityLevel>> = {
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
    },
}


type VisibilityOfDropdowns = {
    id: string
    name: string
    searchBarID: string
    button: string
    visible: boolean
}

const dropdownButtonContent: VisibilityOfDropdowns[] = [
    {
        id: "buttonAndDropdownChamp",
        name: "dropdownContentChamp",
        searchBarID: "searchBarChampionID",
        button: "championButtonImage",
        visible: false,
    },
    {
        id: "buttonAndDropdownItemOne",
        name: "dropdownContentItemOne",
        searchBarID: "itemOneSearchBarID",
        button: "itemOneButtonImage",
        visible: false,
    },
    {
        id: "buttonAndDropdownItemTwo",
        name: "dropdownContentItemTwo",
        searchBarID: "itemTwoSearchBarID",
        button: "itemTwoButtonImage",
        visible: false,
    },
    {
        id: "buttonAndDropdownItemThree",
        name: "dropdownContentItemThree",
        searchBarID: "itemThreeSearchBarID",
        button: "itemThreeButtonImage",
        visible: false,
    },
    {
        id: "buttonAndDropdownItemFour",
        name: "dropdownContentItemFour",
        searchBarID: "itemFourSearchBarID",
        button: "itemFourButtonImage",
        visible: false,
    },
    {
        id: "buttonAndDropdownItemFive",
        name: "dropdownContentItemFive",
        searchBarID: "itemFiveSearchBarID",
        button: "itemFiveButtonImage",
        visible: false,
    },
    {
        id: "buttonAndDropdownItemSix",
        name: "dropdownContentItemSix",
        searchBarID: "itemSixSearchBarID",
        button: "itemSixButtonImage",
        visible: false,
    }
]

function setAbilityLevelDefault() {
    for (const [pickerName, pickerContent] of Object.entries(abilityLevelPicker)) {
        for (const [buttonName, buttonContent] of Object.entries(pickerContent)) {
            if (buttonName.slice(1, 7) === "LevelZ") {

                abilityLevelPicker[pickerName][buttonName].isChosen = true
                const currButton = document.getElementById(buttonName)
                currButton!.style.background = "gray"
            }
        }
    }
}

setAbilityLevelDefault()

function createDropdowns() {
    for (const dropdownObj of dropdownButtonContent) {
        const dropdownContent: HTMLDivElement = document.createElement('div')
        const searchBar: HTMLDivElement = document.createElement('div')
        searchBar.setAttribute("class", "searchBar")
        const inputField = document.createElement("input")
        inputField.setAttribute("class", "searchBarInputFieldStyle")
        inputField.setAttribute("id", dropdownObj.searchBarID)
        inputField.setAttribute("type", "text")
        const searchIcon = document.createElement("img")
        searchIcon.setAttribute("src", "img/pngfind.com-search-icon-png-545559.png")
        searchIcon.setAttribute("onclick", `searchbarFocusOnIconClick(${dropdownObj.searchBarID})`)
        searchIcon.setAttribute("class", "searchIcon")
        const filterIcon = document.createElement("img")
        filterIcon.setAttribute("src", "img/filter-filled-tool-symbol.png")
        filterIcon.setAttribute("onclick", `filterIconAction(${dropdownObj.searchBarID})`)
        filterIcon.setAttribute("class", "filterIcon")
        searchBar.appendChild(inputField)
        searchBar.appendChild(searchIcon)
        searchBar.appendChild(filterIcon)
        const gridWithButtons = document.createElement('div')
        gridWithButtons.setAttribute("class", "gridForItems")

        if (dropdownObj.id.slice(0, 18) === "buttonAndDropdownC") {
            gridWithButtons.innerHTML = championButtonDropdownContent
        } else if (dropdownObj.id.slice(0, 18) === "buttonAndDropdownI") {
            gridWithButtons.innerHTML = itemButtonDropdownContent
        }

        dropdownContent.setAttribute("class", "dropdownContentStyle")
        dropdownContent.setAttribute("id", dropdownObj.name)
        dropdownContent.appendChild(searchBar)
        dropdownContent.appendChild(gridWithButtons)
        const dropdownButton = document.getElementById(dropdownObj.id)
        dropdownButton!.appendChild(dropdownContent)
    }
    for (let i = 0; i < 7; i++) {

        const searchBarDivWidth = document.getElementsByClassName("searchBar")[i].clientWidth
        const searchBar = document.getElementById(dropdownButtonContent[i].searchBarID)
        searchBar!.style.width = `${searchBarDivWidth - 18}px`
        searchBar!.style.paddingLeft = "30px"

    }
}
createDropdowns()




const changeDropdownVisibility = async (dropdownName: string) => {
    const currentDropdown = dropdownButtonContent.find(dropdown => dropdown.name === dropdownName)

    const tempDropdownElement = document.getElementById(dropdownName)
    if (currentDropdown!.visible) {
        tempDropdownElement!.style.opacity = "0"
        await delay(300);
        tempDropdownElement!.style.visibility = "hidden"
        currentDropdown!.visible = false
    } else if (!currentDropdown!.visible) {
        tempDropdownElement!.style.opacity = "1"
        tempDropdownElement!.style.visibility = "visible"
        currentDropdown!.visible = true
    }
}

function pickerButton(abilityName: string, abilityLevel: string) {
    const pickerDivID = `${abilityName}LevelPicker`
    const pickerButtonID = `${abilityName}Level${abilityLevel}`
    const currPickerDiv = document.getElementById(pickerDivID)
    const currPickerButton = document.getElementById(pickerButtonID)
    let currentActiveButton: any = document.getElementById(`${abilityName}LevelZero`)

    for (const [pickerButtonName, pickerButtonValues] of Object.entries(abilityLevelPicker[pickerDivID])) {
        if (pickerButtonName !== pickerButtonID)
            if (pickerButtonValues.isChosen) {
                currentActiveButton = document.getElementById(pickerButtonName)
                abilityLevelPicker[pickerDivID][pickerButtonName].isChosen = false
                currentActiveButton!.style.background = 'skyblue'
            }
    }

    currPickerButton!.style.background = 'gray'
    abilityLevelPicker[pickerDivID][pickerButtonID].isChosen = true
    if (pickerButtonID.slice(0, 1) === "q") {
        championConfigData.q = abilityLevelPicker[pickerDivID][pickerButtonID].value
    } else if (pickerButtonID.slice(0, 1) === "w") {
        championConfigData.w = abilityLevelPicker[pickerDivID][pickerButtonID].value
    } else if (pickerButtonID.slice(0, 1) === "e") {
        championConfigData.e = abilityLevelPicker[pickerDivID][pickerButtonID].value
    } else if (pickerButtonID.slice(0, 1) === "r") {
        championConfigData.r = abilityLevelPicker[pickerDivID][pickerButtonID].value
    }

}

tempSlider.oninput = () => {
    sliderOutput!.innerHTML = tempSlider.value
    championConfigData.champLevel = parseInt(tempSlider.value)
}

window.onclick = async (event: any) => {
    const visibleDropdowns = dropdownButtonContent.filter(dropdown => dropdown.visible === true)
    if (visibleDropdowns) {
        for (const dropdownObj of visibleDropdowns) {
            if (
                !event.target!.matches("img#" + dropdownObj!.button) && 
                !event.target!.matches("#" + dropdownObj!.name) && 
                !event.target!.matches("#" + dropdownObj.searchBarID) && 
                !event.target.matches(".gridForItems") && 
                !event.target.matches("img.searchIcon") && 
                !event.target.matches("img.filterIcon")) {
                const dropdown = document.getElementById(dropdownObj!.name)
                dropdown!.style.opacity = "0"
                await delay(300);
                dropdown!.style.visibility = "hidden"
                dropdownObj!.visible = false
            }
        }
    }

}

function setInputFilter(textbox: Element, inputFilter: (value: string) => boolean, errMsg: string): void {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function (event) {
        textbox.addEventListener(event, function (this: (HTMLInputElement | HTMLTextAreaElement) & { oldValue: string; oldSelectionStart: number | null, oldSelectionEnd: number | null }) {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            }
            else if (Object.prototype.hasOwnProperty.call(this, "oldValue")) {
                this.value = this.oldValue;
                //this.classList.add("inputError");
                this.setCustomValidity(errMsg);
                this.reportValidity();
                if (this.oldSelectionStart !== null &&
                    this.oldSelectionEnd !== null) {
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                }
            }
            else {
                this.value = "";
            }
        });
    });
}

setInputFilter(document.getElementById("dummyHealthInput")!, function (value) {
    return /^-?\d*[.,]?\d*$/.test(value) && (value === "" || parseInt(value) <= 999999);
}, "Must be between 0 and 999999");
setInputFilter(document.getElementById("dummyArmorInput")!, function (value) {
    return /^-?\d*[.,]?\d*$/.test(value) && (value === "" || parseInt(value) <= 999999);
}, "Must be between 0 and 999999");
setInputFilter(document.getElementById("dummyMRInput")!, function (value) {
    return /^-?\d*[.,]?\d*$/.test(value) && (value === "" || parseInt(value) <= 999999);
}, "Must be between 0 and 999999");


const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}


function searchbarFocusOnIconClick(searchBarID: any) {
    searchBarID.focus()
}

