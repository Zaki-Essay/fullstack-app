import {useState} from "react";
import Table from "../components/Table.tsx";


interface Employee {
    name: string;
    dob: string;
    role: string;
    salary: string;
}

const TableTest = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const employees: Employee[] = [
        {name: 'John Doe', dob: '24/05/1995', role: 'Web Developer', salary: '$120,000'},
        {name: 'Jane Doe', dob: '04/11/1980', role: 'Web Designer', salary: '$100,000'},
        {name: 'Gary Barlow', dob: '24/05/1995', role: 'Singer', salary: '$20,000'},
    ];

    return (
            <Table<Employee>
                headers={[
                    {key: 'name', label: 'Name'},
                    {key: 'dob', label: 'Date of Birth'},
                    {key: 'role', label: 'Role'},
                    {key: 'salary', label: 'Salary'},
                ]}
                data={employees}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

    );
};

export default TableTest;