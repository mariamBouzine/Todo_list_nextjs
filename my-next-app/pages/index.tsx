import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react"
import {Input,Button, Heading,
        Text,Container, Flex,Table,
        Tr,Td,Thead,Th,Tbody,Center} from '@chakra-ui/react'

export default function Home() {
  const[Tasks,setTasrks]=useState(["Nextjs"]);
  const[Item,setItem]=useState("");
  function removeItem(TaskName: any){
     setTasrks(Tasks.filter((Task)=>{
        return Task != TaskName;
     }))
  }
  function AddItem() {
    if(Item != "" && !Tasks.includes(Item)){
      var Temp = Tasks;
      Temp.push(Item);
      setTasrks(Temp);
      setItem("");
    }
  }
  return (
    <Container >
      <Flex 
        justifyContent="center" alignItems="center"
        width="100%" height="100%"
        flexDirection="column" boxShadow='2xl' mt={100}
        bg="#F7F7F7"
      >
        <Center mt={10}>
        <Heading color='#393E46'>My Todo List</Heading>
      </Center>
          <Flex
            justifyContent="center" alignItems="center"
            mt={30} 
          >
            <Input 
              placeholder='Item Name' 
              value={Item}
              onChange={(e)=>{
                setItem(e.target.value);
              }}
            ></Input>
            <Button ml={5} px={6} _hover={{ bg: "#393E46", color: "#F7F7F7" }} borderColor="#F7F7F7" bg='#F2E7D5' color='#6D9886' onClick={AddItem}>Add item</Button>
          </Flex>
          <Center>
            <Table  my={30}>
              <Thead>
                <Tr>
                  <Th>Task</Th>
                  <Th>Remove</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Tasks.map((Task)=>{
                  return (
                    <Tr key={Task}>
                      <Td>
                        <Text p={2.5}>{Task}</Text>
                      </Td>
                      <Td>
                        <Button bg='#F2E7D5' color='red.400'
                          _hover={{ bg: "#393E46", color: "#F7F7F7" }} borderColor="#F7F7F7"
                          onClick={()=>{
                            removeItem(Task);
                          }}
                        >Remove Item</Button>
                      </Td>
                  </Tr>
                )
              })}
            </Tbody>
            </Table>
        </Center>
      </Flex>
    </Container>
  )
}
function removeItem(Task: string) {
  throw new Error('Function not implemented.')
}

