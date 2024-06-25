import { useRef, useState } from 'react';

interface IRefDemo {}

export default function RefDemo({}: IRefDemo) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  // not setcount handle içinde çağrıldığında , count değeri return içinde print edilmemişse bile yinede sayfa render olur.
  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;  //countRef.current=count; bu şekilde kullanırsak da state in hep bir önceki değerini tutar.

    console.log('state: ', count);
    console.log('ref: ', countRef);
  };
  // eğer count u aşağıda ve handleincrement içinde  kapatırsak ref kalırsa ref in karşısındaki değerin değişmediğini görürüz çünkü ref sadece değeri tutar tekrar render sağlamaz.
  //NOT increment e bastığınızda ref değeri değişmesi count açıkken olur count sayfanın yeniden render olmasına sebep olur.
  return (
    <div className="tutorial">
      <p>Count: {count} </p>
      <p> Ref: {countRef.current} </p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
