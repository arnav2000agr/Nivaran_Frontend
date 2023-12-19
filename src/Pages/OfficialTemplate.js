import React, {useState} from 'react'
import Navbar from '../Components/NavbarComponent'
import officialtemplate_image from '../Assets/Images/officialtemplate_image.png';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import GavelIcon from '@mui/icons-material/Gavel';

const OfficialTemplate = () => {
    const [official, setOfficial]= useState(true);
    const handleOfficial = () =>{
        setOfficial(!official);
    }

  return (
    <div className='h-screen'>
        <div className=''>
            <Navbar/>
        </div>

      <div className='pt-10 flex flex-row w-screen'>

        <div className='flex justify-center'> 
            <img src={officialtemplate_image} className='object-contain h-96 w-96'  alt="" />
        </div>

        <div className='h-full w-2/3 flex flex-col justify-center items-center'>

            <div className='w-full p-3 flex flex-row bg-gray-200  justify-around rounded-t-md'>
                <button onClick={handleOfficial} className='flex justify-center text-white bg-teal-700 hover:bg-teal-800 p-3 mx-1 rounded-md'>
                    <WaterfallChartIcon/>
                    Raw Grievance
                </button>

                <button onClick={handleOfficial} className='flex justify-center text-white bg-teal-700  hover:bg-teal-800 p-3 mx-1 rounded-md '>
                    <GavelIcon/>
                    Official Template
                </button>

                <div className= 'mx-1 rounded-md'>
                    <select className=' text-white p-2 bg-teal-700 hover:bg-teal-800  rounded-md'>
                        <option>Agriculture</option>
                        <option>Transport</option>
                        <option>Railways</option>
                        <option>Home affairs</option>
                    </select>
                </div>

            </div>
            {official && <div className='w-full bg-gray-100 text-gray-600 flex justify-center mb-2 p-4 rounded-b-md'>
            I am writing to bring to your attention a critical issue that has been affecting the sports enthusiasts. I am a resident of this area and have observed a lack of interest given to the youth having interest in sports which is not letting them grow in the field of sports. The existing sports facilities in our locality are insufficient to cater to the growing interest in various sports disciplines. The shortage of playgrounds, courts, and training facilities is discouraging aspiring athletes. The available sports facilities are poorly maintained, with damaged equipment, unkempt playing fields, and outdated infrastructure. There is an absence of qualified coaches and trainers, making it challenging for aspiring athletes to receive proper guidance and training in their respective sports. Lack of community engagement programs and sports events organized by the local authorities has led to a diminished sense of sportsmanship and community involvement.
            I am writing to bring to your attention a critical issue that has been affecting the sports enthusiasts. I am a resident of this area and have observed a lack of interest given to the youth having interest in sports which is not letting them grow in the field of sports. The existing sports facilities in our locality are insufficient to cater to the growing interest in various sports disciplines. The shortage of playgrounds, courts, and training facilities is discouraging aspiring athletes. The available sports facilities are poorly maintained, with damaged equipment, unkempt playing fields, and outdated infrastructure. There is an absence of qualified coaches and trainers, making it challenging for aspiring athletes to receive proper guidance and training in their respective sports. Lack of community engagement programs and sports events organized by the local authorities has led to a diminished sense of sportsmanship and community involvement.
            </div>
            } 
            {!official && <div className='w-full bg-gray-100 text-gray-600 flex justify-center mb-2 p-4 rounded-b-md'>
                    Tanya Rathore <br />
                    56 Patel Nagar  <br />
                    Lucknow, Uttar Pradesh 226001 <br />
                    rathore.tanya@email.com <br />
                    +91 9876543210 <br />
                    October 8, 2023 <br />
                    Ministry of Home Affairs <br />
                    Government of India <br />
                    New Delhi, Delhi 110001 <br />
                    <br />
                     Subject: Grievance Regarding attempt to murder case. <br />
                    <br />
                    <br />
                    Dear Sir/Madam, 
                    <br />
                    I hope this letter finds you in good health. I am writing to bring to your attention a matter of utmost importance that requires your immediate intervention. On the 15th of September 2023, I, Tanya Rathore, residing at 56 Patel Nagar, Lucknow, Uttar Pradesh 226001, experienced an attempt to muder incident that made me feel insecure about my residence in this society. <br />
                    I believe that this incident violates the legal rights guaranteed under Indian law. The circumstances surrounding this incident have caused significant emotional distress and financial loss, leaving me with no choice but to seek assistance from your esteemed ministry. 
                    <br />
                    I have attempted to report this matter to the local police authorities, but unfortunately, I have not received a satisfactory response or resolution. Given the gravity of the situation and its implications, I earnestly request your intervention and assistance in resolving this issue promptly. 
                    <br />
                    I have attached relevant documents and evidence, including property ownership records and a detailed account of the incident, to support my grievance. I kindly request a swift and fair resolution that upholds justice and the rule of law. 
                    <br />
                    I understand that the Ministry of Home Affairs is committed to upholding the principles of justice and fairness, and I have faith that my grievance will be given the attention it deserves. 
                    <br />
                    I would appreciate it if you could acknowledge receipt of this letter and inform me of the steps that will be taken to address my concerns. You can reach me at rathore.tanya@email.com or +91 9876543210 for any further information or clarification. 
                    <br />
                    I would like to thank you in advance for your prompt attention to this matter and your commitment to ensuring justice for all citizens of India. 
                    <br />
                    Yours sincerely, 
                    <br /><br />
                    Tanya Rathore
                    <br />
            </div>}
            

            <button>Language Select</button>

        </div>
      </div>
    </div>
  )
}

export default OfficialTemplate
