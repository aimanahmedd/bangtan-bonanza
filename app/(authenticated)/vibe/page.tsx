"use client"

import {useState} from 'react'
import {useRouter} from 'next/navigation'
import Image from 'next/image'

import rm from "@/app/assets/rm_good.jpg"
import jin from "@/app/assets/jin_good.jpg"
import suga from "@/app/assets/suga_good.jpg"
import jhope from "@/app/assets/jhope_good.jpg"
import jimin from "@/app/assets/jimin_good.jpg"
import v from "@/app/assets/v_good.jpg"
import jungkook from "@/app/assets/jungkook_good.jpg"
import { navigate } from 'next/dist/client/components/segment-cache/navigation'
import { Card, Form } from 'react-bootstrap'
import { image } from 'framer-motion/client'

const MEMBERS = [
  {id: 'rm', name: 'RM', photo: rm},
  {id: 'jin', name: 'Jin', photo: jin},
  {id: 'suga', name: 'Suga', photo: suga},
  {id: 'jhope', name: 'J-Hope', photo: jhope},
  {id: 'jimin', name: 'Jimin', photo: jimin},
  {id: 'v', name: 'V', photo: v},
  {id: 'jungkook', name: 'Jungkook', photo: jungkook}

]

export default function QuizSection({navigateTo}: {navigateTo: (page: string) => void}){
  //to keep track of how many multiple choice questions answers we need and have
  const [mcqAnswers, setMcqAnswers] = useState<string[]>(new Array(5).fill(""));
  const [mcqAnswered, setMcqAnswered] = useState<boolean[]>(new Array(5).fill(false));

  //to keep track of how many written questions answers we need and have
  const [writtenAnswer, setWrittenAnswer] = useState<string[]>([]);
  const [writtenAnswered, setWrittenAnswered] = useState<boolean[]>(new Array(5).fill(false));

  //to keep track of how many bias questions answers we need and have
  const [biasAnswers, setBiasAnswers] = useState<string[]>([]);
  const [biasAnswered, setBiasAnswered] = useState<boolean>(false);


  const handleMcqAnswer = (questionIndex: number, value: string) =>{
    //updating index to include new answer from multiple choice questions
    const updatedMcqAnswers = [...mcqAnswers];
    updatedMcqAnswers[questionIndex] = value

    //updating questions array to include that another multiple choice has been answered
    const updatedMCqAnswered = [...mcqAnswered];
    updatedMCqAnswered[questionIndex] = true;

    setMcqAnswers(updatedMcqAnswers);
    setMcqAnswered(updatedMCqAnswered)
  }

    const handleWrittenAnswer = (questionIndex: number, value: string) =>{
    //updating index to include new answer from multiple choice questions
    const updatedWrittenAnswers = [...writtenAnswer];
    updatedWrittenAnswers[questionIndex] = value

    //updating questions array to include that another multiple choice
    const updatedWrittenAnswered = [...writtenAnswered];
    updatedWrittenAnswered[questionIndex] = true;

    setWrittenAnswer(updatedWrittenAnswers);
    setWrittenAnswered(updatedWrittenAnswered)
  }

  const chooseBiases = (bias: string, checked: boolean) =>{
    if(checked){
      const updated = [...biasAnswers, bias];
      setBiasAnswers(updated);
      if (biasAnswers.length === 0){
        setBiasAnswered(biasAnswered); 
      }
    } else{
      const updated = biasAnswers.filter((chosen) => chosen != bias);
      setBiasAnswers(updated);

      if (updated.length === 0){
        setBiasAnswered(biasAnswered); 
      }
    }
  }

      return(
        /*Quiz questions!*/
    <div className="quiz-content">
      <Card.Title className="card-title text-center">Playlist Generation Quiz</Card.Title>
      <p className='card-text text-center mb-4'>Take this guided quiz OR type out your current mood to get an accurate playlist of your vibe at the moment!</p>

        {/*multiple choice questions*/}
        <div className="multiple-choice">
          <h4>Multiple Choice Question</h4>
          <h5>1. How are you currently feeling?</h5>
          <Form>
            <Form.Check type="radio" label="Happy and peaceful" name="q1" onChange={()=> handleMcqAnswer(0, "Happy and peaceful")}/>
            <Form.Check type="radio" label="Energetic and ready to party" name="q1" onChange={()=> handleMcqAnswer(0, "Energetic and ready to party")}/>
            <Form.Check type="radio" label="Romantic and loving" name="q1" onChange={()=> handleMcqAnswer(0, "Romantic and loving")}/>
            <Form.Check type="radio" label="Nostalgic and introspective" name="q1" onChange={()=> handleMcqAnswer(0, "Nostalgic and introspective")}/>
            <Form.Check type="radio" label="Sad and reflective" name="q1" onChange={()=> handleMcqAnswer(0, "Nostalgic and reflective")}/>
          </Form>
          <h5>2. What are you trying to accomplish?</h5>
          <Form>
            <Form.Check type="radio" label="Chilling at home and need some background music" name="q2" onChange={()=> handleMcqAnswer(1, "Chilling at home and need some background music")}/>
            <Form.Check type="radio" label="Having a super fun dance party" name="q2" onChange={()=> handleMcqAnswer(1, "Having a super fun dance party")}/>
            <Form.Check type="radio" label="Heartwarming moment with loved ones" name="q2" onChange={()=> handleMcqAnswer(1, "Heartwarming moment with loved ones")}/>
            <Form.Check type="radio" label="Walking outside/taking a nice drive" name="q2" onChange={()=> handleMcqAnswer(1, "Walking outside/taking a nice drive")}/>
            <Form.Check type="radio" label="Nighttime blues" name="q2" onChange={()=> handleMcqAnswer(1, "Nighttime blues")}/>
          </Form>
          <h5>3. How would you describe your current energy level?</h5>
          <Form>
            <Form.Check type="radio" label="Moderate and steady" name="q3" onChange={()=> handleMcqAnswer(2, "Moderate and steady")}/>
            <Form.Check type="radio" label="High and energetic" name="q3" onChange={()=> handleMcqAnswer(2, "High and energetic")}/>
            <Form.Check type="radio" label="Fluctuating and changing" name="q3" onChange={()=> handleMcqAnswer(2, "Fluctuating and changing")}/>
            <Form.Check type="radio" label="Tired but fulfilled" name="q3" onChange={()=> handleMcqAnswer(2, "Tired but fulfilled")}/>
            <Form.Check type="radio" label="Low and depleted" name="q2" onChange={()=> handleMcqAnswer(2, "Low and depleted")}/>
          </Form>
          <h5>4. Which of these settings sound the most relaxing at the moment?</h5>
          <Form>
            <Form.Check type="radio" label="Cozy cabin in the woods" name="q4" onChange={()=> handleMcqAnswer(3, "Cozy cabin in the woods")}/>
            <Form.Check type="radio" label="Hype dance party" name="q4" onChange={()=> handleMcqAnswer(3, "Hype dance party")}/>
            <Form.Check type="radio" label="Peaceful beach at sunset" name="q4" onChange={()=> handleMcqAnswer(3, "Peaceful beach at sunset")}/>
            <Form.Check type="radio" label="Woodsy nature forest" name="q4" onChange={()=> handleMcqAnswer(3, "Woodsy nature forest")}/>
            <Form.Check type="radio" label="Late night cityscape" name="q4" onChange={()=> handleMcqAnswer(3, "Late night cityscape")}/>
          </Form>
          <h5>5. What emotional tone for music are you craving?</h5>
          <Form>
            <Form.Check type="radio" label="Soft" name="q5" onChange={()=> handleMcqAnswer(4, "Soft")}/>
            <Form.Check type="radio" label="Lively" name="q5" onChange={()=> handleMcqAnswer(4, "Lively")}/>
            <Form.Check type="radio" label="Romantic" name="q5" onChange={()=> handleMcqAnswer(4, "Romantic")}/>
            <Form.Check type="radio" label="Wistful" name="q5" onChange={()=> handleMcqAnswer(4, "Wistful")}/>
            <Form.Check type="radio" label="Deep and meditation" name="q5" onChange={()=> handleMcqAnswer(4, "Deep and meditation")}/>
          </Form>
        </div>
         {/*written response question*/}
        <div className="written-response">
          <h4>Written Response Question</h4>
          <h5>Describe your current vibe!</h5>
          <Form>
            <Form.Group controlId="q6">
              <Form.Control type='text' placeholder="Type your answer here" value={writtenAnswer[0]} onChange={(e)=> handleWrittenAnswer(0, e.target.value)}
              className="form-controlId"/>
            </Form.Group>
          </Form>
        </div>
        <div className='bias-select'>
          <h4>Pick your bias</h4>
          <div className="members-grid">
            {MEMBERS.map(member =>(
              <Form.Check
              key={member.id}
              type="checkbox"
              label={member.name}
              onChange={(e)=>chooseBiases(member.name, e.target.checked)}
              className="form-check"
              checked={biasAnswers.includes(member.id)}
              >
              <Image
              src={member.photo}
              alt={member.name}/>
              </Form.Check>
            ))}
          </div>
        </div>
    </div>
    )



}
