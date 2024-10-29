import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
export default function LChart() {

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
        <h2 className='text-2xl font-bold py-4'>Students Result Data in LineChart </h2>
        <LineChart 
          width={600}
          height={300}
          data={studentsResult}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="Math" stroke="purple" />
          <Line type="monotone" dataKey="English" stroke="violet" />
          <Line type="monotone" dataKey="Science" stroke="blueviolet" />
          <CartesianGrid stroke="lightgray" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </>
  )
}