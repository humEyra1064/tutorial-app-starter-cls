
import { FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"


const TutorialList = ({tutor}) => {
 


  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutor?.map((item) => {
            const { id, title, description } = item
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-tutor"
                    // onClick={()=>editTutorial(id)}
                   
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                 
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
     
    </div>
  )
}

export default TutorialList
