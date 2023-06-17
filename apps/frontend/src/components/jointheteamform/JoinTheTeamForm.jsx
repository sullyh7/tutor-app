
const JoinTheTeamForm = ({
  firstName, setFirstName,
  lastName, setLastName,
  email, setEmail,
  password, setPassword,
  number, setNumber,
  qual, setQual,
  houseNumber, setHouseNumber, 
  street, setStreet,
  postCode, setPostCode,
  male, setMale,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit} className='bg-base-100 p-20 w-full flex flex-col sm:flex-row flex-1 justify-evenly'>
      <div className='flex flex-col justify-between h-[110%]'>
        <input onChange={({target}) => setEmail(target.value)} value={email} placeholder='Email' className='m-2 input input-bordered w-full max-w-xs' type="email" required/>
        <input onChange={({target}) => setPassword(target.value)} value={password} placeholder='Password' className='m-2 p-5 input input-bordered w-full max-w-xs' type="password" required minLength={8} maxLength={72}/> 
        <input onChange={({target}) => setFirstName(target.value)} value={firstName} placeholder='First Name' className='m-2 input input-bordered w-full max-w-xs' type="text" required />
        <input onChange={({target}) => setLastName(target.value)} value={lastName} placeholder='Last Name' className='m-2 input input-bordered w-full max-w-xs' type="text" required/>
        <input onChange={({target}) => setNumber(target.value)} value={number} pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$" placeholder='Phone Number' className='m-2 input input-bordered w-full max-w-xs' type='tel' required/>
      </div>
      <div className='flex-col flex justify-between h-[110%]'>
        <input type="text" onChange={({target}) => setHouseNumber(target.value)} value={houseNumber} placeholder='House Number' className='m-2 input input-bordered w-full max-w-xs' required/>
        <input type="text" onChange={({target}) => setStreet(target.value)} value={street} placeholder='Street' className='m-2 input input-bordered w-full max-w-xs' required/>
        <input type="text" onChange={({target}) => setPostCode(target.value)} value={postCode} placeholder='Post Code' className='m-2 input input-bordered w-full max-w-xs' 
          required 
          pattern='([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})'/>
        <div className='flex justify-between items-center'>
          <textarea value={qual} onChange={({target}) => {setQual(target.value)}} className='m-2 textarea input-bordered' placeholder='Qualifications e.g A in A level Chemistry...' minLength={10}/>
          <div className='flex-col flex ml-5'>
            <label htmlFor='female'>F</label>
            <input type="radio" checked={!male} onChange={() => setMale(false)} value="female" id='female' name="gender" className="radio radio-primary" />
            <label htmlFor='male'>M</label>
            <input type="radio" checked={male} onChange={() => setMale(true)} value="male" id='male' name="gender" className="radio radio-primary" />
          </div>
        </div>
        
        <input type="submit" className='btn' /> 
      </div>
      
    </form>
  );
};

export default JoinTheTeamForm