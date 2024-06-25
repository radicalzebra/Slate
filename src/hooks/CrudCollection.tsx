import { useState } from 'react';
import { firestore  } from '../features/Auth/lib/firebase'
import { type PostTaskDataType , type UpdateTaskDataType  } from '../utils/Types';

type CollectionProp = {
   collection:string,
}

type GetProp = {
   method:"GET"
} & CollectionProp


type PostProp = {
   method:"POST",
   data:PostTaskDataType
} & CollectionProp

type PutProp = {
   method:"UPDATE",
   data:UpdateTaskDataType,
   docId:string
} & CollectionProp


type CrudProps =  GetProp | PostProp | PutProp


export default function useCrudOperation(props:CrudProps) {

   const collectionRef = firestore.collection(props.collection)
   const [loading,setLoading] = useState(false)
   const [error,setError] = useState(false)
   const [data,setData] = useState<PostTaskDataType[]>()
   const [render,setRender] = useState(false)


   const callFetch = async () => {
      try {

         setLoading(true)

         if(props.method==="GET") {
            const snapshot = await collectionRef.get()
            const documents = snapshot.docs.map(doc => doc.data()) as PostTaskDataType[]
            setData(documents)
            setRender(true)
         }
            
         if(props.method==="POST") {
            const snapshot = await collectionRef.add(props.data)
         }
         
         if(props.method==="UPDATE") {
            const snapshot = await collectionRef.doc(props.docId).update(props.data)
         }
         
         setLoading(false)
      } catch(error) {
         setError(true)
         setLoading(false)
         setRender(false)

      }
   }

 

   return { data , render , loading , error , callFetch }

  
}

