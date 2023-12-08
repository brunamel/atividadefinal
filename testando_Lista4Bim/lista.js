const inputContainer = document.querySelector('input')
const rootElement = document.documentElement

window.onload = getThemeFromLocalStorage


const lightTheme = {
    '--background-color' : '#FFF',
    '--text-color' : '#1A1A1A',
    '--button-background-color': '#FF90BC',
    '--textBox-background-color' : '#e6ffe2',
    '--textBox-text-align' : 'center',
    '--textBox-width':'1000px',
    '--textBox-border':'5px solid #FF7BA9',
    '--textBox-border-radius': '10px',
    '--textBox-padding': '20px',
    '--imgContainer-align-items' : 'center',

    '--imgBox-background-color' : '#e6ffe2',
    '--imgBox-width':'calc(33.33% - 20px)',
    '--imgBox-border':'5px solid #FF7BA9',
    '--imgBox-border-radius': '10px',
    '--imgBox-padding': '20px',
    '--imgBox-margin': '5px',

    '--imgContainer-display': 'flex',
    '--imgContainer-flex-wrap': 'wrap',
    '--imgContainer-justify-content': 'space-around',


}

const darkTheme = {
    '--background-color': '#1A1A1A',
    '--text-color': '#FFF',
    '--button-background-color':'#F11A7B',
    '--textBox-background-color' : '#F11A7B',
    '--textBox-width':'1000px',
    '--textBox-border':'5px solid #A6FF96',
    '--textBox-border-radius': '10px',
    '--textBox-padding': '20px',
    '--textBox-text-align' : 'center',
    '--imgContainer-align-items' : 'center',

    '--imgBox-background-color' : '#F11A7B',
    '--imgBox-width':'calc(33.33% - 20px)',
    '--imgBox-border':'5px solid #A6FF96',
    '--imgBox-border-radius': '10px',
    '--imgBox-padding': '20px',
    '--imgBox-margin': '5px',

    
    '--imgContainer-display': 'flex',
    '--imgContainer-flex-wrap': 'wrap',
    '--imgContainer-justify-content': 'space-around',

    
}

inputContainer.addEventListener('change', function(){
    const isChecked = inputContainer.checked
   

    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
})

function changeTheme(theme){

    //console.log(theme)
   
  for(let[prop, value] of Object.entries(theme)){
    changeProperty(prop, value)
  }
 saveThemeToLocalStorage(theme)
}

function changeProperty(prop,value){
    rootElement.style.setProperty(prop,value)
}

function saveThemeToLocalStorage (theme){
    localStorage.setItem('theme' , JSON.stringify(theme))
}

function getThemeFromLocalStorage(){
    const theme = JSON.parse(localStorage.getItem('theme'))
    if(isThemeEqual(theme, darkTheme)) inputContainer.checked = true
    changeTheme(theme)
}

function isThemeEqual(firstTheme, secondTheme){
    for(let prop in firstTheme){
        if(firstTheme[prop] != secondTheme[prop]) return false
    }
    return true
}
