import { useParams } from "react-router-dom";

export function Book() {

  const {bookId} = useParams()

  return (
    <div>
      <h3 className="text-xl font-bold mb-3">Kniha: {bookId}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repudiandae delectus quia eveniet, labore corrupti distinctio libero sit obcaecati maiores reiciendis unde repellat consequuntur ab vel voluptas? Laborum quam voluptates assumenda nemo cumque? Vitae, suscipit facere incidunt adipisci eaque nostrum a eum modi ratione iure quisquam voluptate saepe dolorem perspiciatis!</p>
    </div>
  );
}

export default Book;