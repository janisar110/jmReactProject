

function App() {
 
  let country = [{name:"pakistan",code:"pk",cities:["islamabad","karachi"]},{name:"india",code:"in",cities:["delhi","bumbay"]}]

  return (
    <>
      <select name="" id=""> 
        {
          country.map((value,index)=>{
            return <option value="">{value.name}</option>
          })
        }
        </select>  

        {
          country.name == "pakistan" ? <div>
            
          </div> : 
        }
    </>
  )
}

export default App
