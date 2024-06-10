import { firestore , type DocumentData , firestoreQuery , where } from '../lib/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';

type CollectionProps = {
   collection:string,
}

export default function useGetCollection({collection}:CollectionProps) {

   const collectionRef = firestore.collection(collection)
   const query = firestoreQuery(collectionRef)

   const [docs, loading, error] = useCollectionData<DocumentData>(query)

   return {docs, loading, error}
  
}
