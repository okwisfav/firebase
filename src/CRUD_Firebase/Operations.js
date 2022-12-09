import React, { useState } from 'react'
import { dataRef } from './Firebases'

function Operation  () {
    const [name,setName]= useState('name');
    const [email, setEmail]= useState('email');
    const [twitter, setTwitter]= useState('twitter');
    const [linkedln, setLinkedln]= useState('linkedln')
    const [facebook, setFacebook]= useState('facebook')
    const [instagram, setInstagram] = useState('instagram')
    const [massage, setMassage]= useState('massage')
    const handleAdd=()=>{
        if(name!==``){
         dataRef.ref().child("Ambassadors").push(name)
         setName("")
        }
        if(email!==``){
            dataRef.ref().child("Ambassadors").push(email)
            setEmail("")
        }
        if(twitter!==``){
            dataRef.ref().child("Ambassadors").push(twitter)
            setTwitter("")
        }
        if(linkedln!==``){
            dataRef.ref().child("Ambassadors").push(linkedln)
            setLinkedln("")
        }
        if(facebook!==``){
            dataRef.ref().child("Ambassadors").push(facebook)
            setFacebook("")
        }
        if(instagram!==``){
            dataRef.ref().child("Ambassadors").push(instagram)
            setInstagram("")
        }
        if(massage!==``){
            dataRef.ref().child("Ambassadors").push(massage)
            setMassage("")
        }
    }
  return (
    <div>
        <input value={name} onChange={(e)=> {setName(e.target.value)}} />
        <input value={email} onChange={(e)=> {setEmail(e.target.value)}} />
        <input value={twitter} onChange={(e)=> {setTwitter(e.target.value)}} />
        <input value={linkedln} onChange={(e)=> {setLinkedln(e.target.value)}} />
        <input value={facebook} onChange={(e)=> {setFacebook(e.target.value)}} />
        <input value={instagram} onChange={(e)=> {setInstagram(e.target.value)}} />
        <input value={massage} onChange={(e)=> {setMassage(e.target.value)}} />
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Operation;

