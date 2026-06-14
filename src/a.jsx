  const [pending, sPending] = useState([])
  const [totalCompleted, sTotalCompleted] = useState('')
    const pendingTask = async(boolean,id) =>{
       sPending([boolean, ...pending])
    let accurate =[boolean, ...pending]
    let plusEachOther = accurate.map((e)=> e ? 1 : -1)
    let completedTasks = plusEachOther.reduce((acc, rcc)=>{      
      return acc + rcc 
    },0)
    sTotalCompleted(completedTasks)
  }