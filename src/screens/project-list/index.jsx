import { SearchPanel } from "./search-panel"
import { List } from "./list"
import { useEffect, useState } from "react"

const apiUrl = process.env.REACT_APP_API_URL

const projectsUrl = apiUrl + '/projects'
const usersUrl = apiUrl + '/users'

export const ProjectListScreen = () =>{
  const [users,setUsers] = useState([])
  const [params,setParam] = useState({
    name:'',
    personId:''
  })
  const [list, setList] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/projects').then(async response => {
      if(response.ok){
        setList(await response.json())
      }
    })
  },[params])
  useEffect(() => {
    fetch(' http://localhost:3001/users').then(async response => {
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