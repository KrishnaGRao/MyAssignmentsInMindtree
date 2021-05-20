import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"

const SearchPerticularBook = () => {
    const { searchBy }: { searchBy: any } = useParams();
    const pArray: Array<string> = searchBy.split("=")
    const [book, setBook] = useState(Object);

    useEffect(()=>{
        loadBook()
        fun1()
    },[])

    // useEffect(() => { },[])

    const loadBook = async () => {
        const result: any = await axios.get(`http://localhost:3003/books`)
        
        console.log("result is ",result.data)
        setBook(result.data);
    }
    
    const fun1 =()=>{
        // switch (pArray[0]) {
        //     case "id":
        //         // loadBook(pArray[1])
        //         break;
        //     case "title":
                
        //         book.map((b,index) => (     
        //               b.title===pArray[1] ?                 
        //         ))
            
        //         break;
        //     case "author":

        //         break;
        //     case "price":

        //         break;
        //     case "rating":

        //         break;

        //     default:
        //         break;
        // }
    }
   

    return (<>
        <h2>I am Search Perticular Book</h2>
        

    </>)
}

export default SearchPerticularBook;