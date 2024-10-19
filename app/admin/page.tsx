import MdxEditor from './MdxEditor'
export default function Page() {
  const formAction = async (article) => {
    'use server'
    console.log(article)
  }
  return (
    <div className='flex-grow'>
      <MdxEditor formAction={formAction} />
    </div>
  )
}
