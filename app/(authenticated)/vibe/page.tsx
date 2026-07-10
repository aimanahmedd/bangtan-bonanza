"use client"

import {useState} from 'react'
import {useRouter} from 'next/navigation'
import Image from 'next/image'

import rm from "@/app/assets/rm.jpg"
import jin from "@/app/assets/jin.jpg"
import suga from "@/app/assets/suga.jpg"
import jhope from "@/app/assets/jhope.jpg"
import jimin from "@/app/assets/jimin.jpg"
import v from "@/app/assets/v.jpg"
import jungkook from "@/app/assets/jungkook.jpg"
import { navigate } from 'next/dist/client/components/segment-cache/navigation'

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
    <div>
      <h1>Hello World!</h1>
    </div>
    )



}
