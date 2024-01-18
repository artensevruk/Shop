import data from '../Catalog.json'


const goods = data;

console.log(goods)
console.log(goods.products[1].name);

export const Catalog = () => {
  return (
    <div className="Catalog">
      <div className="Title">
        <h1>Каталог</h1>
      </div>
      <div className="Attributes1 wow animate__animated animate__backInLeft">
        <div className="column1">
          <img src="image/goods/shoes.png" alt="" />
          <p>210 руб</p>
          <p>Размеры : 31 </p>
          <button>Приобрести</button>
        </div>
        <div className="column1 scrol-item">
          <img
            src="image/goods/shoes.png"
            alt=""
          />
          <p>210 руб</p>
          <p>Размеры : 32 , 33 ,43 ,44</p>
          <button>Приобрести</button>
        </div>
        <div className="column1 scrol-item">
          <img src="image/goods/shoes.png" alt="" />
          <p>210 руб</p>
          <p>Размеры : 31 , 32 , 33</p>
          <button>Приобрести</button>
        </div>
      </div>
      <div className="Attributes1 wow animate__animated animate__backInRight">
        <div className="column1">
          <img src="image/goods/shoes.png" alt="" />
          <p>210 руб</p>
          <p>Размеры : 31 , 33</p>
          <button>Приобрести</button>
        </div>
        <div className="column1">
          <img src="image/goods/shoes.png" alt="" />
          <p>210 руб</p>
          <p>Размеры : 31 , 32 , 33 , 39</p>
          <button>Приобрести</button>
        </div>
        <div className="column1">
          <img src="image/goods/shoes.png" alt="" />
          <p>210 руб</p>
          <p>Размеры : 35 , 36 , 37 ,38 </p>
          <button>Приобрести</button>
        </div>
      </div>
      <div className="Attributes1 wow animate__animated animate__backInLeft">
        <div className="column1">
          <img src="image/goods/shoes.png" alt="" />
          <p>210 руб</p>
          <p>Размеры : 40 ,43</p>
          <button>Приобрести</button>
        </div>
        <div className="column1">
          <img src="image/goods/shoes.png" alt="" />
          <p>210 руб</p>
          <p>Размеры : 45</p>
          <button>Приобрести</button>
        </div>
        <div className="column1">
          <img src="image/goods/shoes.png" alt="" />
          <p>210 руб</p>
          <p>Размеры : нету размеров</p>
          <button>Приобрести</button>
        </div>
      </div>
      
    </div>
  );
};
