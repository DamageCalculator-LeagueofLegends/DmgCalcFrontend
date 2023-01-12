// 
// const fac = new FastAverageColor();


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
const tempSlider: any = document.getElementById("championLevelRange")
const sliderOutput = document.getElementById("championLevelOutput")

type AbilityLevel = {
    value: number
    isChosen: boolean
}

const championConfigData = {
    champLevel: 1,
    q: 0,
    w: 0,
    e: 0,
    r: 0,
}

const listOfPerformedActions = []

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
    realID: string
    visible: boolean
}

const dropdownButtonContent: VisibilityOfDropdowns[] = [
    {
        realID: "Champ",
        visible: false,
    },
    {
        realID: "ItemOne",
        visible: false,
    },
    {
        realID: "ItemTwo",
        visible: false,
    },
    {
        realID: "ItemThree",
        visible: false,
    },
    {
        realID: "ItemFour",
        visible: false,
    },
    {
        realID: "ItemFive",
        visible: false,
    },
    {
        realID: "ItemSix",
        visible: false,
    }
]

function setInputFilter(textbox: Element, inputFilter: (value: string) => boolean, errMsg: string): void {

    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function (event) {
        textbox.addEventListener(event, async function (this: (HTMLInputElement | HTMLTextAreaElement) & { oldValue: string; oldSelectionStart: number | null, oldSelectionEnd: number | null }) {
            //const errorMessage = document.getElementById(textbox.parentElement.children[1].id)
            if (inputFilter(this.value)) {
                console.log("1")
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
                // errorMessage.style.opacity = "0"
                // await delay(300)
                // errorMessage.style.visibility = "hidden"
            }
            else if (Object.prototype.hasOwnProperty.call(this, "oldValue")) {
                console.log("2")
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
                console.log("3")
                this.value = "";
            }
        });
    });
}

setInputFilter(document.getElementById("dummyHealthInput")!, function (value) {
    return /^-?\d*[.,]?\d*$/.test(value); //  && (value === "" || parseInt(value) <= 999999)
}, "Must be a number");
setInputFilter(document.getElementById("dummyArmorInput")!, function (value) {
    return /^-?\d*[.,]?\d*$/.test(value); //  && (value === "" || parseInt(value) <= 999999)
}, "Must be a number");
setInputFilter(document.getElementById("dummyMRInput")!, function (value) {
    return /^-?\d*[.,]?\d*$/.test(value); //  && (value === "" || parseInt(value) <= 999999)
}, "Must be a number");

function checkAvailabilityOfActionButtons() {
    if (championConfigData.q > 0) {
        const buttonQ = document.getElementById("championActionButtonQ")
        buttonQ.style.opacity = "1"
        buttonQ.style.display = "block"
    } else {
        const buttonQ = document.getElementById("championActionButtonQ")
        buttonQ.style.opacity = "0"
        buttonQ.style.display = "none"
    }
    if (championConfigData.w > 0) {
        const buttonW = document.getElementById("championActionButtonW")
        buttonW.style.opacity = "1"
        buttonW.style.display = "block"
    } else {
        const buttonW = document.getElementById("championActionButtonW")
        buttonW.style.opacity = "0"
        buttonW.style.display = "none"
    }
    if (championConfigData.e > 0) {
        const buttonE = document.getElementById("championActionButtonE")
        buttonE.style.opacity = "1"
        buttonE.style.display = "block"
    } else {
        const buttonE = document.getElementById("championActionButtonE")
        buttonE.style.opacity = "0"
        buttonE.style.display = "none"
    }
    if (championConfigData.r > 0) {
        const buttonR = document.getElementById("championActionButtonR")
        buttonR.style.opacity = "1"
        buttonR.style.display = "block"
    } else {
        const buttonR = document.getElementById("championActionButtonR")
        buttonR.style.opacity = "0"
        buttonR.style.display = "none"
    }
}

/**
Button and Slider functions
 */

const actionButtonsIDs = ["AA", "Q", "W", "E", "R", "IA1", "IA2", "IA3", "IA4", "IA5", "IA6"]

function performActionButton(key: string) {
    const actionListDiv = document.getElementById("listOfPerformedActions")
    for (const buttonID of actionButtonsIDs) {
        if (buttonID === key){
            const button = document.getElementById(`championActionButton${buttonID}`)
            const newActionToAdd = document.createElement("p")
            newActionToAdd.setAttribute("class", "performedActions")
            newActionToAdd.innerHTML = `${key}`
            actionListDiv.appendChild(newActionToAdd)
            
        }
    }

}

function searchbarFocusOnIconClick(searchBarID: any) {
    searchBarID.focus()
}

const changeDropdownVisibility = async (dropdownID: string) => {
    const dropdownContentID = `dropdownContent${dropdownID}`
    const currentDropdown = dropdownButtonContent.find(dropdown => dropdown.realID === dropdownID)
    const tempDropdownElement = document.getElementById(dropdownContentID)

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
                currentActiveButton!.style.background = "skyblue"
            }
    }

    currPickerButton!.style.background = "gray"
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
    checkAvailabilityOfActionButtons()
}

tempSlider.oninput = () => {
    sliderOutput!.innerHTML = tempSlider.value
    championConfigData.champLevel = parseInt(tempSlider.value)
}

window.onclick = async (event: any) => {
    const visibleDropdowns = dropdownButtonContent.filter(dropdown => dropdown.visible === true)
    if (visibleDropdowns) {
        for (const dropdownObj of visibleDropdowns) {
            const buttonImageID = `buttonImage${dropdownObj.realID}`
            const dropdownContentID = `dropdownContent${dropdownObj.realID}`
            const searchBarID = `searchBarID${dropdownObj.realID}`
            if (
                !event.target!.matches("img#" + buttonImageID) &&
                !event.target!.matches("#" + dropdownContentID) &&
                !event.target!.matches("#" + searchBarID) &&
                !event.target.matches(".gridForItems") &&
                !event.target.matches("img.searchIcon") &&
                !event.target.matches("img.filterIcon")) {
                const dropdown = document.getElementById(dropdownContentID)
                dropdown!.style.opacity = "0"
                await delay(300);
                dropdown!.style.visibility = "hidden"
                dropdownObj!.visible = false
            }
        }
    }
}

/**
 The Following Functions create html elemnts when the website is built
 */

type url = string
//for testing
const seraLogo: url = "https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/Seraphine.png"
const liandrysLogo: url = "https://raw.communitydragon.org/12.22/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6653_mage_t4_liandrysanguish.png"
const greyImg: url = "img/greyChampButton.jpg"


function adjustButtonLogo(urlOfImage: url, id: string) {
    const buttonID = `button${id}`
    const imgID = `buttonImage${id}`
    const buttonToChangeImgFrom = document.getElementById(buttonID)
    const imgDivWithNewImage = `
    <img class="buttonImagesOnHoverEffect" id="${imgID}"
    src="${urlOfImage}">
    `
    try {
        buttonToChangeImgFrom.innerHTML = imgDivWithNewImage
    } catch (error) {
        console.log(`Button with the following ID ${buttonID} does not exist`)
    }
}

function createDropdowns() {
    for (const dropdownObj of dropdownButtonContent) {
        const realID = dropdownObj.realID
        const searchBarID = `searchBarID${realID}`
        const dropdownAndButtonID = `buttonAndDropdown${realID}`
        const dropdownContentID = `dropdownContent${realID}`



        const inputField = document.createElement("input")
        inputField.setAttribute("class", "searchBarInputFieldStyle")
        inputField.setAttribute("id", searchBarID)
        inputField.setAttribute("type", "text")

        const searchIcon = document.createElement("img")
        searchIcon.setAttribute("src", "img/pngfind.com-search-icon-png-545559.png")
        searchIcon.setAttribute("onclick", `searchbarFocusOnIconClick(${searchBarID})`)
        searchIcon.setAttribute("class", "searchIcon")

        const filterIcon = document.createElement("img")
        filterIcon.setAttribute("src", "img/filter-filled-tool-symbol.png")
        filterIcon.setAttribute("onclick", `filterIconAction(${searchBarID})`)
        filterIcon.setAttribute("class", "filterIcon")

        const searchBar: HTMLDivElement = document.createElement('div')
        searchBar.setAttribute("class", "searchBar")
        searchBar.appendChild(inputField)
        searchBar.appendChild(searchIcon)
        searchBar.appendChild(filterIcon)

        const gridWithButtons = document.createElement('div')
        gridWithButtons.setAttribute("class", "gridForItems")
        if (realID.slice(0, 4) === "Cham") {
            gridWithButtons.innerHTML = championButtonDropdownContent
        } else if (realID.slice(0, 4) === "Item") {
            gridWithButtons.innerHTML = itemButtonDropdownContent
        }

        const dropdownContent: HTMLDivElement = document.createElement('div')
        dropdownContent.setAttribute("class", "dropdownContentStyle")
        dropdownContent.setAttribute("id", dropdownContentID)
        dropdownContent.appendChild(searchBar)
        dropdownContent.appendChild(gridWithButtons)

        const buttonAndDropdown = document.getElementById(dropdownAndButtonID)
        buttonAndDropdown!.appendChild(dropdownContent)
    }

    for (let i = 0; i < 7; i++) {
        const searchBarID = `searchBarID${dropdownButtonContent[i].realID}`
        const searchBarDivWidth = document.getElementsByClassName("searchBar")[i].clientWidth
        const searchBar = document.getElementById(searchBarID)
        searchBar!.style.width = `${searchBarDivWidth - 18}px`
        searchBar!.style.paddingLeft = "30px"
    }
}

function setAbilityLevelDefault() {
    for (const [pickerName, pickerContent] of Object.entries(abilityLevelPicker)) {
        for (const [buttonName, buttonContent] of Object.entries(pickerContent)) {
            const currButton = document.getElementById(buttonName)
            if (buttonName.slice(1, 7) === "LevelZ") {

                abilityLevelPicker[pickerName][buttonName].isChosen = true
                currButton!.style.background = "gray"
            }
        }
    }
}

const buildHTMLPage = () => {


    tempSlider.value = 1
    sliderOutput!.innerHTML = tempSlider.value
    championConfigData.champLevel = parseInt(tempSlider.value)

    createDropdowns()
    setAbilityLevelDefault()

    for (const buttonDropdowns of dropdownButtonContent) {
        if (buttonDropdowns.realID === "Champ")
            adjustButtonLogo(seraLogo, "Champ")
        else if (buttonDropdowns.realID === "ItemOne")
            adjustButtonLogo(liandrysLogo, "ItemOne")
        else
            adjustButtonLogo(greyImg, buttonDropdowns.realID)
    }
}

buildHTMLPage()


// helper functions
const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}