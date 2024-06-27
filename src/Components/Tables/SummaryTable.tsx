import { useUserContext } from "../../Hooks/useUserContext";

const SummaryTable = () => {
    const { state : {user } } = useUserContext()
    
    return (
        <table>
            <thead>
                <tr>
                    <th>User: </th>
                    {user.fname && <th>{user.fname} {user.lname}</th>} 
                </tr>
            </thead>
        </table>
    )
};

export default SummaryTable;