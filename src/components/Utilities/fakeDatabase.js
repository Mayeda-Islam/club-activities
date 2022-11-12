
const fakeDb=()=>{
    const exerciseTimeLabel=document.getElementById('exercise-time-label').outerText;
    const timeBreakLabel=document.getElementById('break-time-label').outerText
    const exerciseTime=document.getElementById('exercise-time-input').placeholder
    const timeBreak =document.getElementById('break-time-input').value
   savedItemTolocalStorage(exerciseTimeLabel,exerciseTime,timeBreak ,timeBreakLabel)
 
} 
const getDbFromLocalStorage=()=>{
    let savedData=localStorage.getItem('data')
    let data={}
    if(savedData){
        data=JSON.parse(savedData)
    }
    return data;
} 
const savedItemTolocalStorage=(exerciseTimeLabel,exerciseTime,timeBreak,timeBreakLabel)=>{
    const data=getDbFromLocalStorage()
    data[exerciseTimeLabel]=exerciseTime;
    data[timeBreakLabel]=timeBreak;
    const exerciseStringyfied=JSON.stringify(data)
    const timeBreakStringified=JSON.stringify(data)
    localStorage.setItem('data',exerciseStringyfied)
    localStorage.setItem('data',timeBreakStringified)

}
const displayDataFromLocalStorage=()=>{
    const data =getDbFromLocalStorage()
    for(const times in data){
        const spendTime=data[times]
    }
}

displayDataFromLocalStorage()
export default fakeDb