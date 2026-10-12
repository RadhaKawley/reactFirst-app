import ProfileCard from "./ProfileCard";

const ProfileCardContainer =() =>{
    const people=[
        {name:"kenny",
        age:"25"
        },
        {name:"gemma",
        age:"20"
        }
    ]
    return <>
    {
        people.map( person=><ProfileCard name = {person.name}
            age ={person.age}></ProfileCard>
        )
    }
    </>
}
export default ProfileCardContainer;