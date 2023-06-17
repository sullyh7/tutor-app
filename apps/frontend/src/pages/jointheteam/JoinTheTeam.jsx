import React, { useState } from 'react'
import JoinTheTeamForm from '../../components/jointheteamform/JoinTheTeamForm'
import { signUpTeacher } from '../../../lib/pocketbase';

const JoinTheTeam = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [qual, setQual] = useState("");
  const [male, setMale] = useState(true);
  const [houseNumber, setHouseNumber] = useState("");
  const [street, setStreet] = useState("");
  const [postCode, setPostCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpTeacher({
      firstName,
      lastName,
      email,
      password,
      number,
      qualifications: qual,
      male,
      houseNumber,
      street,
      postCode
    })
  }

  return (
    <div className='flex flex-col justify-center items-center mt-10 p-10 sm:p-0'>
      <h1 className='text-3xl font-bold'>"The believers are but one <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>brotherhood</span>..."</h1>
      <p className='text-sm'>Quran (49:10)</p>
      <h1 className='text-xl p10'>Enter Details below</h1>
      <div>
      <JoinTheTeamForm
        firstName={firstName} setFirstName={setFirstName}
        lastName={lastName} setLastName={setLastName}
        email={email} setEmail={setEmail}
        password={password} setPassword={setPassword}
        number={number} setNumber={setNumber}
        qual={qual} setQual={setQual}
        male={male} setMale={setMale}
        houseNumber={houseNumber} setHouseNumber={setHouseNumber}
        street={street} setStreet={setStreet}
        postCode={postCode} setPostCode={setPostCode} 
        handleSubmit={handleSubmit} 
      />
      </div>
        
    </div>
  )
}

export default JoinTheTeam