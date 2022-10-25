import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Update from './update';
import { useNavigate } from 'react-router-dom';
import { getDefaultNormalizer } from '@testing-library/react';

export default function Read() {
    const [APIData, setAPIData] = useState([]);

    useEffect(()=>{
        axios.get('https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData')
        .then((response)=>{
            setAPIData(response.data)
        })
    },[])

    const setData = (data)=>{

        let {id,firstName,lastName,checkbox}=data;
        localStorage.setItem('ID',id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
        console.log(data);
       
      


    }
    const getData = () => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

    const onDelete =((id)=>{
        axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
        .then(()=>{
            getData()
        })


    })
    
    
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data)=>{
                        return(
                            <Table.Row>
                                <Table.Cell>
                                    {data.firstName}
                                </Table.Cell>
                                <Table.Cell>
                                    {data.lastName}
                                </Table.Cell>
                                <Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                </Table.Cell>
                                <Link to='/update'>
                                <Table.Cell>
                                    <button onClick={()=>{setData(data)}}>Update</button>
                                </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <button onClick={() => onDelete(data.id)}>Delete</button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                   
                   
                </Table.Body>
            </Table>
        </div>
    )
}