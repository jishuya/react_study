import React, { useReducer } from 'react';
import personReducer from '../basic/reducer/person-reducer';

export default function AppMentor() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  const handleChange = ()=>{
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({type: 'updated', prev, current})
    // setPerson((person)=>({
    //   ...person,
    //   mentors : person.mentors.map((mentor)=>{
    //     if(mentor.name === prev){
    //       return {...mentor, name: current}
    //     } 
    //     return mentor
    //   })
    // }))
  }
  const handleAdd = ()=>{
    const name = prompt(`누구의 이름을 추가하고 싶은가요?`);
    const title = prompt(`그 사람의 직업은 무엇인가요?`);
    dispatch({type: 'added', name, title})
    // setPerson((person)=>({
    //   ...person,
    //   mentors: [...person.mentors, name: name, title: job]
    // }))
  }
  const handleDelete = ()=>{
    const prev = prompt(`어떤 멘토를 삭제하고 싶은가요?`);
    dispatch({type: 'deleted', prev})
    // setPerson((person)=>({
    //   ...person,
    //   mentors : person.mentors.filter(mentor => mentor.name !== prev)
    // }))
  }
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={handleChange}
      >
        멘토의 이름을 바꾸기
      </button>
      <button onClick={handleAdd}> 멘토 추가하기</button>
      <button onClick={handleDelete}> 멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
    name: '엘리',
    title: '개발자',
    mentors: [
      {
        name: '밥',
        title: '시니어개발자',
      },
      {
        name: '제임스',
        title: '시니어개발자',
      },
    ],
  }