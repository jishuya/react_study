export default function personReducer(person, action){
    switch(action.type){
        case 'updated' : {
            console.log(11111, action)
            const { prev, current } = action;
            return {
                ...person,
                mentors : person.mentors.map((mentor)=>{
                    if(mentor.name === prev){
                    return {...mentor, name: current}
                    } 
                    return mentor
                })
            }
        }
        case 'added' : {
            const {name, title}  = action;
  
            return {
                ...person,
                mentors: [...person.mentors, {name, title}]
            }

        }
        case 'deleted' : {
            console.log(33333, action)
            const prev = action;
            console.log(4444, prev)
            const aa = person.mentors.filter(mentor => mentor.name !== prev)
            const bb = person.mentors.filter((mentor) => {if(mentor.name !== prev){
                console.log(4444, mentor.name)
            }})
            console.log(5555, aa )
            return {
                ...person,
                mentors : person.mentors.filter(mentor => mentor.name !== prev)
            }
        } default : {
            throw Error (`알 수 없는 액션 타입 ${action.type}`);
        }
    }    

}