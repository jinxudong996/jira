
export const SearchPanel = ({params,setParam,users}) => {
  
  


  
  return <form action="">
    <div>
      <input type="text" value={params.name} onChange={evt => setParam({
        ...params,
        name:evt.target.value
      })}/>
      <select value={params.personId} onChange={evt => setParam({
        ...params,
        personId:evt.target.value
      })}>
        <option value={''}>负责人</option>
        {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
      </select>
    </div>
  </form>
}