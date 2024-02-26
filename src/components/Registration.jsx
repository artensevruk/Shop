export const Registration = () =>{
  return (
   
      <div className="registration">
        <h1>РЕГИСТРАЦИЯ</h1>
      <form>
        <div>
        <input type="text" placeholder="ВВЕДИТЕ ИМЯ"></input>
        </div>
        <div>
        <input type="text" placeholder="ВВЕДИТЕ ФАМИЛИЮ"></input>
        </div>
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