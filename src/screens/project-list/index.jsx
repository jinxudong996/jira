import { SearchPanel } from "./search-panel"
import { List } from "./list"
import { useEffect, useState } from "react"
import qs from 'qs'
import { cleanObject } from "../../utils"

const apiUrl = process.env.REACT_APP_API_URL

// const projectsUrl = apiUrl + '/projects?' + qs.stringify(cleanObject(parans))
// const usersUrl = apiUrl + '/users?'
// console.log(projectsUrl,usersUrl)
export const ProjectListScreen = () =>{
  const [users,setUsers] = useState([])
  const [params,setParam] = useState({
    name:'',
    personId:''
  })
  const [list, setList] = useState([])
  useEffect(() => {
    fetch(apiUrl + '/projects?' + qs.stringify(cleanObject(params))).then(async response => {
      if(response.ok){
        setList(await response.json())
      }
    })
  },[params])
  useEffect(() => {
    fetch(apiUrl + '/users?' + + qs.stringify(cleanObject(params))).then(async response => {
      if(response.ok){
        setUsers(await response.json())
      }
    })
  },[params])
  return <div>
    <SearchPanel users={users} params={params} setParam={setParam} ></SearchPanel>
    <List users={users} list={list}></List>
  </div>
}