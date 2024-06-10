import TaskCard from './TaskCard'

export default function TaskSection() {
  return (
    <section className='flex  flex-col gap-4'>
      <TaskCard title='Mobile app design wow very beautiful' date={"Dec 2,24"} priority='High'/>
      <TaskCard title='Mobile app design' date={"Dec 2,24"} priority='Low'/>
      <TaskCard title='Mobile app design' date={"Dec 2,24"} priority='Normal'/>
      <TaskCard title='Mobile app design' date={"Dec 2,24"} priority='High'/>
    </section>
  )
}
