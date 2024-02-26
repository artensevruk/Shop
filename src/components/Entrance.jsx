export const Entrance = () =>{
  return (
    <div className="entrance">
    <h1>Вход</h1>
  <form>
    <div>
    <input type="email" placeholder="ВВЕДИТЕ EMAIL" ></input>
    </div>
    <div>
    <input type="password" placeholder="ВВЕДИТЕ ПОРОЛЬ"></input>
    </div>
    <div>
      <button>ОТПРАВИТЬ</button>
    </div>
  </form>
  </div>

  )
}