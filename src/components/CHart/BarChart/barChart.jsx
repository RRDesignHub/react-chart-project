import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
export default function BChart() {

    const studentsResult = [
      { "name": "Alice", "Math": 85, "English": 78, "Science": 92 },
      { "name": "Bob", "Math": 74, "English": 85, "Science": 80 },
      { "name": "Charlie", "Math": 92, "English": 89, "Science": 76 },
      { "name": "David", "Math": 88, "English": 76, "Science": 85 },
      { "name": "Eva", "Math": 79, "English": 94, "Science": 91 },
      { "name": "Frank", "Math": 91, "English": 73, "Science": 88 },
      { "name": "Grace", "Math": 83, "English": 90, "Science": 84 }
    ]
    
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-bold py-4'>Students Result Data in BarChart </h2>
        <BarChart width={1300} height={400} data={studentsResult}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 150, backgroundColor: '#ccc', borderRadius:20 }} />
        {/* <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} /> */}
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="Math" fill="#8884d8" barSize={40} />
        <Bar dataKey="English" fill="#8884d8" barSize={40} />
        <Bar dataKey="Science" fill="#8884d8" barSize={40} />
      </BarChart>
      </div>
    </>
  )
}